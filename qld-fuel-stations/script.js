(async () => {
    const map = L.map("map").setView([-21, 146.0], 5);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
            '&copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    const fuelLayerUrl =
        "https://services7.arcgis.com/si70weKpzPSa0BGV/arcgis/rest/services/fuel_sites_qld/FeatureServer/0";

    const rendererUrl =
        fuelLayerUrl + "?f=pjson";

    let lastEditDate = null;

    const meta = await fetch(rendererUrl).then(r => r.json());
    lastEditDate = meta?.editingInfo?.lastEditDate || null;

    const renderer = meta?.drawingInfo?.renderer || {};
    const uniqueValueInfos = renderer?.uniqueValueInfos || [];

    function esc(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;");
    }

    function getHeaderStyle(outageType) {
        if (outageType === "Fuel Available") {
            return { bg: "#45972E", color: "#fff" };
        }
        if (outageType === "Fuel Partially Available") {
            return { bg: "#D97B34", color: "#000" };
        }
        if (outageType === "Fuel Unavailable") {
            return { bg: "#F3193A", color: "#fff" };
        }
        if (outageType === "Fuel Unknown") {
            return { bg: "#868686", color: "#fff" };
        }
        return { bg: "#1964AA", color: "#fff" };
    }

    const FUEL_COLORS = {
        "Fuel Available": "#45972E",
        "Fuel Partially Available": "#D97B34",
        "Fuel Unavailable": "#F3193A",
        "Fuel Unknown": "#868686",
    };
    
    function buildDonutSvg(counts, total) {
        const entries = [
            ["Fuel Available", counts["Fuel Available"] || 0],
            ["Fuel Partially Available", counts["Fuel Partially Available"] || 0],
            ["Fuel Unavailable", counts["Fuel Unavailable"] || 0],
            ["Fuel Unknown", counts["Fuel Unknown"] || 0],
        ].filter(([, value]) => value > 0);
    
        const size = total < 10 ? 44 : total < 100 ? 52 : 60;
        const stroke = Math.round(size * 0.18);
        const radius = (size - stroke) / 2;
        const cx = size / 2;
        const cy = size / 2;
        const circumference = 2 * Math.PI * radius;
    
        let offset = 0;
    
        const segments = entries.map(([label, value]) => {
            const fraction = value / total;
            const dash = fraction * circumference;
            const gap = circumference - dash;
            const seg = `
                <circle
                    cx="${cx}" cy="${cy}" r="${radius}"
                    fill="none"
                    stroke="${FUEL_COLORS[label]}"
                    stroke-width="${stroke}"
                    stroke-dasharray="${dash} ${gap}"
                    stroke-dashoffset="${-offset}"
                    transform="rotate(-90 ${cx} ${cy})"
                />
            `;
            offset += dash;
            return seg;
        }).join("");
    
        const inner = `
            <circle cx="${cx}" cy="${cy}" r="${radius - stroke / 2}" fill="white" />
        `;
    
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                ${segments}
                ${inner}
            </svg>
        `;
        }

    function getClusterCounts(cluster) {
        const counts = {
            "Fuel Available": 0,
            "Fuel Partially Available": 0,
            "Fuel Unavailable": 0,
            "Fuel Unknown": 0,
        };
    
        cluster.getAllChildMarkers().forEach(marker => {
            const outageType = String(marker.options.outageType || "").trim();
            counts[outageType] = (counts[outageType] || 0) + 1;
        });
    
        return counts;
    }

    function symbolToDataUrl(symbol) {
        if (!symbol || symbol.type !== "esriPMS" || !symbol.imageData) return null;
        const contentType = symbol.contentType || "image/png";
        return `data:${contentType};base64,${symbol.imageData}`;
    }

    function symbolToLeafletIcon(symbol) {
        const src = symbolToDataUrl(symbol);
        if (!src) return null;

        const w = symbol.width || 24;
        const h = symbol.height || 24;
        const xoffset = symbol.xoffset || 0;
        const yoffset = symbol.yoffset || 0;

        return L.icon({
            iconUrl: src,
            iconSize: [w, h],
            iconAnchor: [
                Math.round(w / 2 - xoffset),
                Math.round(h / 2 - yoffset)
            ],
            popupAnchor: [0, -Math.round(h / 2)]
        });
    }

    function timeAgo(date) {
        const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    
        if (seconds < 60) return `${seconds} seconds ago`;
    
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    
        const days = Math.floor(hours / 24);
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    }

    const iconMap = new Map();
    const legendItems = [];

    uniqueValueInfos.forEach(info => {
        const key = String(info.value ?? "").trim();
        const icon = symbolToLeafletIcon(info.symbol);
        const img = symbolToDataUrl(info.symbol);

        if (key && icon) {
            iconMap.set(key, icon);
        }

        if (key && img) {
            legendItems.push({
                label: info.label || key,
                img,
                width: info.symbol?.width || 24,
                height: info.symbol?.height || 24
            });
        }
    });

    const defaultIcon =
        symbolToLeafletIcon(renderer.defaultSymbol) ||
        [...iconMap.values()][0] ||
        L.icon({
            iconUrl:
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            iconSize: [1, 1],
            iconAnchor: [0, 0]
        });

    const pumpIconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g stroke="#000" stroke-width="1.25" fill="none" stroke-linejoin="round" stroke-linecap="round">
          <rect x="8" y="5" width="12" height="20" rx="1.5" fill="#000"/>
          <rect x="10.5" y="8" width="7" height="5" fill="#fff"/>
          <path d="M20 10h3l2 3v8c0 1.1-.9 2-2 2h-1"/>
          <path d="M23 14v5"/>
          <path d="M8 25h14"/>
        </g>
      </svg>
    `;

    const pumpIconDataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(pumpIconSvg);

    const clusters = L.markerClusterGroup({
        chunkedLoading: true,
      maxClusterRadius: 80,
        iconCreateFunction: function (cluster) {
            const total = cluster.getChildCount();
            const counts = getClusterCounts(cluster);
            const svg = buildDonutSvg(counts, total);
    
            const size = total < 10 ? 44 : total < 100 ? 52 : 60;
            const pumpSize = size < 50 ? 16 : size < 60 ? 18 : 20;
            const pumpTop = size < 50 ? 9 : size < 60 ? 10 : 12;
            const numberTop = size < 50 ? 23 : size < 60 ? 27 : 31;
            
            return L.divIcon({
                html: `
                    <div style="position:relative;width:${size}px;height:${size}px;">
                        ${svg}
            
                        <img src="${pumpIconDataUrl}"
                            style="
                                position:absolute;
                                top:${pumpTop}px;
                                left:50%;
                                transform:translateX(-50%);
                                width:${pumpSize}px;
                                height:${pumpSize}px;
                                pointer-events:none;
                            ">
            
                        <div style="
                            position:absolute;
                            top:${numberTop}px;
                            left:50%;
                            transform:translateX(-50%);
                            font-weight:bold;
                            font-size:14px;
                            line-height:1;
                            color:#222;
                            pointer-events:none;
                            white-space:nowrap;
                        ">
                            ${total}
                        </div>
                    </div>
                `,
                className: "fuel-donut-cluster",
                iconSize: L.point(size, size),
            });
        }
    });
  
const popupBySiteId = new Map();

function buildPopupHtml(p) {
    const outageType = String(p.Outage_Type || "").trim();
    const headerStyle = getHeaderStyle(outageType);

    const tabledata = {
        "Service Station Name": p.Service_Station_Name,
        "Address": p.Location,
        "Google Maps": p.Google_Maps_URL,
        "Information Last Checked": lastEditDate
            ? `${new Date(lastEditDate).toLocaleString("en-AU", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })} (${timeAgo(lastEditDate)})`
            : "Not provided",
        "Local Government Area": p.lga_name
    };

    const tabledataFuel = {
        "E10": p.E10,
        "E10 Price": p.E10_Price,
        "Unleaded 91": p.Unleaded_91,
        "Unleaded 91 Price": p.Unleaded_91_Price,
        "Premium 95": p.Premium_95,
        "Premium 95 Price": p.Premium_95_Price,
        "Premium 98": p.Premium_98,
        "Premium 98 Price": p.Premium_98_Price,
        "Diesel": p.Diesel,
        "Diesel Price": p.Diesel_Price,
        "Premium Diesel": p.Premium_Diesel,
        "Premium Diesel Price": p.Premium_Diesel_Price,
        "E85": p.E85,
        "E85 Price": p.E85_Price,
        "LPG": p.LPG,
        "LPG Price": p.LPG_Price,
        "AdBlue": p.AdBlue,
        "Aviation Fuel | Jet A-1": p.JetA1,
        "Aviation Fuel | Avgas": p.AvGas
    };

    let infoRows = "";
    for (const [key, value] of Object.entries(tabledata)) {
        if (value == null) continue;

        let display = esc(value);

        if (key === "Google Maps" && value) {
            display = `<a href="${esc(value)}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>`;
        }

        infoRows += `
            <tr>
                <td><b>${esc(key)}</b></td>
                <td>${display}</td>
            </tr>
        `;
    }

    infoRows += `
        <tr>
            <td><b>Source</b></td>
            <td>Queensland Government (Fuel Prices API), licensed under CC BY 4.0</td>
        </tr>
    `;

    let fuelRows = "";
    for (const [key, value] of Object.entries(tabledataFuel)) {
        if (key.endsWith(" Price")) continue;
        if (value == null) continue;

        const price = tabledataFuel[key + " Price"];
        let displayValue = esc(value);

        if (price != null && String(price).trim() !== "") {
            displayValue += ` (${esc(price)})`;
        }

        fuelRows += `
            <tr>
                <td><b>${esc(key)}</b></td>
                <td>${displayValue}</td>
            </tr>
        `;
    }

    return `
        <div style="min-width:320px;max-width:480px;font:14px/1.4 Arial,sans-serif;">
            <div style="background:${headerStyle.bg};color:${headerStyle.color};padding:10px 12px;font-weight:bold;">
                <div>${esc(p.Service_Station_Name || "")}</div>
                <div style="margin-top:4px;font-size:12px;">${esc(outageType.toUpperCase())}</div>
            </div>

            <div style="padding:12px;">
                <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
                    <tbody>${infoRows}</tbody>
                </table>

                <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
                    <thead>
                        <tr>
                            <th colspan="2" style="padding:8px;background:${headerStyle.bg};color:${headerStyle.color};text-align:center;">
                                FUEL STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>${fuelRows}</tbody>
                </table>

                <div style="font-size:12px;color:#444;">
                    Fuel data is typically updated within 30–60 minutes of a price change, but delays or missing updates may occur. This information should not be relied upon as the sole source for decision-making.
                </div>
            </div>
        </div>
    `;
}

const queryUrl = `${fuelLayerUrl}/query?where=1%3D1&outFields=*&returnGeometry=true&outSR=4326&f=pjson`;

const featureData = await fetch(queryUrl).then(r => r.json());

(featureData.features || []).forEach(feature => {
    const p = feature.attributes || {};
    const g = feature.geometry || {};
    if (typeof g.x !== "number" || typeof g.y !== "number") return;

    const latlng = L.latLng(g.y, g.x);
    const outageType = String(p.Outage_Type || "").trim();

    const marker = L.marker(latlng, {
        icon: iconMap.get(outageType) || defaultIcon,
        outageType
    });

    marker.bindPopup(buildPopupHtml(p), {
        maxWidth: 520,
        className: "fuel-popup"
    });

    clusters.addLayer(marker);
});

map.addLayer(clusters);

    if (legendItems.length) {
        const legend = L.control({ position: "topright" });

        legend.onAdd = function () {
            const div = L.DomUtil.create("div");
            div.style.background = "#fff";
            div.style.padding = "10px 12px";
            div.style.border = "1px solid rgba(0,0,0,0.2)";
            div.style.borderRadius = "4px";
            div.style.boxShadow = "0 1px 5px rgba(0,0,0,0.2)";
            div.style.lineHeight = "1.3";
            div.style.minWidth = "190px";

            const title = document.createElement("div");
            title.textContent = "Fuel Availability";
            title.style.fontWeight = "bold";
            title.style.marginBottom = "8px";
            div.appendChild(title);

            legendItems.forEach(item => {
                const row = document.createElement("div");
                row.style.display = "flex";
                row.style.alignItems = "center";
                row.style.gap = "8px";
                row.style.marginBottom = "6px";

                const img = document.createElement("img");
                img.src = item.img;
                img.alt = item.label;
                img.style.width = `${item.width}px`;
                img.style.height = `${item.height}px`;
                img.style.objectFit = "contain";
                img.style.flex = "0 0 auto";

                const label = document.createElement("span");
                label.textContent = item.label;

                row.appendChild(img);
                row.appendChild(label);
                div.appendChild(row);
            });

            L.DomEvent.disableClickPropagation(div);
            return div;
        };

        legend.addTo(map);
    }
})();