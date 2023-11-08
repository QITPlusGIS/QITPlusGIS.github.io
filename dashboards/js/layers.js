// Layers
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';

export const addLayers = (app) => {
    app.layers = {
        bm: addBaseMapLayer(app),
        ab: addAdminBoundLayer(app),
        oc: addOceanCurrents(app),
    };
};

const addBaseMapLayer = (app) => {
    const layer = new VectorTileLayer({
        id: 'bm',
        title: 'bm',
        style: {
            layers: [
                {
                    layout: {},
                    paint: {
                        'fill-color': app.colorTemplate.landColor,
                    },
                    source: 'esri',
                    'source-layer': 'Land',
                    type: 'fill',
                    id: 'Land/0',
                },
            ],
            version: 8,
            sources: {
                esri: {
                    url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer',
                    type: 'vector',
                },
            },
        },
    });
    app.map.add(layer);
    return layer;
};

const addAdminBoundLayer = (app) => {
    const layer = new FeatureLayer({
        id: 'ab',
        title: 'ab',
        url: 'https://services7.arcgis.com/si70weKpzPSa0BGV/arcgis/rest/services/QIT_Plus_LGA_Public/FeatureServer/0',
        displayField: 'name',
        objectIdField: 'FID',
        outFields: ['name', 'dash_url', 'state', 'g_ims'],
        copyright: 'QIT Plus',
    });

    // Unique value style if AB has dashboard url or not
    layer.renderer = {
        type: 'unique-value',
        valueExpression: 'When(IsEmpty($feature.dash_url), 0, 1)',
        uniqueValueInfos: [
            {
                value: 1,
                label: 'With dashboard',
                symbol: {
                    type: 'simple-fill',
                    color: app.utils.rgbToRgba(
                        app.colorTemplate.lgaWithDashColor,
                        0.1
                    ),
                    outline: {
                        width: 1,
                        color: app.colorTemplate.lgaWithDashColor,
                    },
                },
            },
            {
                value: 0,
                label: 'No dashboard',
                symbol: {
                    type: 'simple-fill',
                    style: 'none',
                    outline: {
                        width: 0.5,
                        color: app.colorTemplate.lgaNoDashColor,
                    },
                },
            },
        ],
    };

    // Order so AB with url are on top within layer
    layer.orderBy = [
        { valueExpression: 'When(IsEmpty($feature.dash_url), 1, 0)' },
    ];

    // Add effect based on dash_url
    if (app.layerEffect) {
        layer.featureEffect = {
            filter: {
                where: 'dash_url is not null',
            },
            includedEffect: 'bloom(1, 0.1px, 0)',
            excludedEffect: 'opacity(30%) drop-shadow(0px, 0px, 3px, black)',
        };
    }

    // Add layers to map
    app.map.add(layer);

    return layer;
};

const addOceanCurrents = (app) => {
    if (app.showFlow){
        let layer = new ImageryLayer({
            url: 'https://oceans4.arcgis.com/arcgis/rest/services/HYCOM_UV/ImageServer',
            renderer: {
                type: 'flow',
                color: app.colorTemplate.flowColor,
                density: 0.5,
                trailLength: 500,
                maxPathLength: 1000,
                trailWidth: '2px',
                flowSpeed: 50,
            },
        });
        if (app.layerEffect) layer.effect = 'bloom(1.5, 0.5px, 0)';
        app.map.add(layer, 1);
        return layer;
    } else {
        return {};
    }
};
