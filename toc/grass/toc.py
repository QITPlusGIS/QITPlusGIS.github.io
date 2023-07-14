#!/usr/bin/env python3

import os
import grass.script as gs
from grass.pygrass import vector


def getTOCForGauges():
    gauges_layer_name = "rg_toc"
    export_dir_path = r"C:\data\gis\projects\gc-toc\data\export"

    gs.run_command("v.build", map=gauges_layer_name)
    gauges_layer = vector.VectorTopo(gauges_layer_name)
    gauges_layer.open("rw")

    cols = [("cat", "integer primary key"), ("code", "text")]
    lfps = vector.VectorTopo("lfps", overwrite=True)
    lfps.open("w", tab_cols=cols)

    # Loop over features in layer
    # Grass indexing starts with 1
    for fid in range(1, len(gauges_layer) + 1):
        # Get gauge by fid
        gauges_feature = gauges_layer.read(fid)

        # Check if TOC shuld be calculated
        calc_toc = gauges_feature.attrs["calc_toc"]
        if not calc_toc:
            continue

        # Get coordinates and code
        coords = gauges_feature.coords()
        code = gauges_feature.attrs["code"]

        # Get subwatershed and longest flow path for point as outlet
        try:
            gs.run_command(
                "r.accumulate",
                overwrite=True,
                direction="drain_directions",
                subwatershed="sw",
                lfp="lfp",
                coordinates="{},{}".format(coords[0], coords[1]),
            )
        except Exception:
            continue

        # Add table to longest flow path file
        gs.run_command("v.db.addtable", map="lfp")

        # Convert raster subwatershed to vector
        swg_plg_name = "sw_plg_{}".format(fid)
        gs.run_command(
            "r.to.vect",
            overwrite=True,
            flags="s",
            input="sw",
            type="area",
            output=swg_plg_name,
        )

        # Calculate DEM statistics for longest flow path
        gs.run_command(
            "v.rast.stats",
            overwrite=True,
            map="lfp",
            type="line",
            column_prefix="lfp_dem",
            raster="elevation",
            method="number,minimum,maximum,sum",
        )

        # Add table subwatershed layer
        gs.run_command("v.db.addcolumn", map=swg_plg_name, col="code varchar")
        gs.run_command("v.db.update", map=swg_plg_name, col="code", value=code)

        # Get area for subwatershed and copy this value to original gauges layer
        sw_plg = vector.VectorTopo(swg_plg_name)
        sw_plg.open("r")
        total_area = sum([area.area() for area in sw_plg.viter("areas")])
        sw_plg.close()

        # Export sw_plg
        gs.run_command(
            "v.out.ogr",
            overwrite=True,
            input=swg_plg_name,
            output=os.path.join(
                export_dir_path, "sws", swg_plg_name.replace("_", "-") + ".json"
            ),
            format="GeoJSON",
        )

        sw_plg.remove()

        # Get lfp stats and copy to original gauges layer
        lfp = vector.VectorTopo("lfp")
        lfp.open("r")
        lfp_feature = lfp.read(1)
        lfp_len = lfp_feature.length()
        lfp_dem_min = lfp_feature.attrs["lfp_dem_minimum"]
        lfp_dem_max = lfp_feature.attrs["lfp_dem_maximum"]
        lfp_dem_num = lfp_feature.attrs["lfp_dem_number"]
        lfp_dem_sum = lfp_feature.attrs["lfp_dem_sum"]

        # Slope calculations
        lfp_dem_slope_eqa = (
            (2 * (lfp_dem_sum - (lfp_dem_min * lfp_dem_num))) / lfp_dem_num
        ) / (lfp_len / 1000)
        lfp_dem_slope_avg = (lfp_dem_max - lfp_dem_min) / (lfp_len / 1000)

        gauges_feature.attrs["lfp_dem_slope_eqa"] = lfp_dem_slope_eqa
        gauges_feature.attrs["lfp_dem_slope_avg"] = lfp_dem_slope_avg
        gauges_feature.attrs["lfp_len"] = lfp_len
        gauges_feature.attrs["lfp_dem_min"] = lfp_dem_min
        gauges_feature.attrs["lfp_dem_max"] = lfp_dem_max
        gauges_feature.attrs["lfp_dem_num"] = lfp_dem_num
        gauges_feature.attrs["lfp_dem_sum"] = lfp_dem_sum
        gauges_feature.attrs["sw_area"] = total_area

        # TOC calculations
        gauges_feature.attrs["toc_kir"] = round(
            (
                0.01947
                * lfp_len**0.77
                * ((lfp_dem_max - lfp_dem_min) / lfp_len) ** -0.385
            )
            / 60,
            2,
        )
        gauges_feature.attrs["toc_pil"] = round(
            0.76 * (total_area / 1000000) ** 0.38, 2
        )
        gauges_feature.attrs["toc_bw_avg"] = round(
            (
                (58 * (lfp_len / 1000))
                / ((total_area / 1000000) ** 0.1 * lfp_dem_slope_avg**0.2)
            )
            / 60,
            2,
        )
        gauges_feature.attrs["toc_bw_eqa"] = round(
            (
                (58 * (lfp_len / 1000))
                / ((total_area / 1000000) ** 0.1 * lfp_dem_slope_eqa**0.2)
            )
            / 60,
            2,
        )
        
        # Commit changes to table
        gauges_layer.table.conn.commit()

        # Add lfp to lfps layer
        lfps.write(lfp_feature, cat=fid, attrs=(code,))
        lfps.table.conn.commit()

        lfp.close()
        lfp.remove()
        gs.run_command("g.remove", flags="f", type="raster", name="sw")

    # Close gauges layer
    gauges_layer.close()
    lfps.close()

    # Export lfps
    gs.run_command(
        "v.out.ogr",
        overwrite=True,
        input="lfps",
        output=os.path.join(export_dir_path, "lfps" + ".json"),
        format="GeoJSON",
    )

    lfps.remove()

    # Export rg_toc
    gs.run_command(
        "v.out.ogr",
        overwrite=True,
        input="rg_toc",
        output=os.path.join(export_dir_path, "rg-toc" + ".json"),
        format="GeoJSON",
    )


def main():
    getTOCForGauges()


if __name__ == "__main__":
    main()
