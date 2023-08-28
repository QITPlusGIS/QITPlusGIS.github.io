/*
 * Layers - adding to map including styling and interactions
 */

export const addLayers = (app, arcgis) => {
    const map = app.map;

    // Add layer references to app
    app.layers = {};

    // Get site id
    const sites = ['gold-coast-city', 'somerset-regional'];
    let url_site = null;
    const urlParams = new URLSearchParams(document.location.search);
    const lgaId = urlParams.get('lga');
    console.log(lgaId);
    if (lgaId && sites.indexOf(lgaId) > 0) {
        url_site = lgaId;
    }
    console.log(url_site);
    const site_dir = url_site ? url_site : sites[0];

    // Subwatersheds for gauges
    app.layers.sws = getSwsLayer(arcgis.GeoJSONLayer, `./gis/${site_dir}/sws.json`);
    // Gold Coast administrative boundaries
    app.layers.ab = getAbLayer(arcgis.GeoJSONLayer, `./gis/${site_dir}/ab.json`);
    // Longest flow paths for gauges
    app.layers.lfps = getLfpsLayer(arcgis.GeoJSONLayer, `./gis/${site_dir}/lfps.json`);
    // Gauges relocation
    app.layers.rgRelocation = getRgRelocationLayer(arcgis.GeoJSONLayer, `./gis/${site_dir}/rg-relocation.json`);
    // Gauges
    app.layers.rgToc = getRgTocLayer(
        arcgis.GeoJSONLayer,
        `./gis/${site_dir}/rg-toc.json`,
        arcgis.LabelClass,
        app.tocColors
    );

    // Add layer interactions
    addLayerInteractions(app, arcgis.reactiveUtils);

    // Add layers to map - order is important (or index can be used as param)
    map.add(app.layers.sws);
    map.add(app.layers.lfps);
    map.add(app.layers.ab);
    map.add(app.layers.rgRelocation);
    map.add(app.layers.rgToc);
};

const getSwsLayer = (GeoJSONLayer, url) => {
    const renderer = {
        type: 'simple',
        symbol: {
            type: 'simple-fill',
            color: 'rgba(0,64,128,0.2)',
            outline: {
                color: 'rgba(0,64,128,1)',
                width: 1,
            },
        },
    };

    const layer = new GeoJSONLayer({
        id: 'sws',
        title: 'Subwatershed',
        url: url,
        displayField: 'code',
        objectIdField: 'code',
        outFields: ['*'],
        orderBy: { field: 'area' },
        renderer: renderer,
        definitionExpression: "code = ''",
        listMode: 'hide',
    });

    return layer;
};

const getAbLayer = (GeoJSONLayer, url) => {
    const renderer = {
        type: 'simple',
        symbol: {
            type: 'simple-fill',
            style: 'none',
            outline: {
                color: '#f0f',
                width: 2,
                style: 'short-dot',
            },
        },
    };

    const layer = new GeoJSONLayer({
        id: 'ab',
        title: 'Gold Coast City Administrative Boundary',
        url: url,
        displayField: 'lga_name',
        objectIdField: 'fid',
        renderer: renderer,
        opacity: 0.5,
    });

    return layer;
};

const getLfpsLayer = (GeoJSONLayer, url) => {
    const renderer = {
        type: 'simple',
        symbol: {
            type: 'simple-line',
            style: 'short-dot',
            width: 2,
            color: 'rgb(0,64,128)',
        },
    };

    const layer = new GeoJSONLayer({
        id: 'lfps',
        title: 'Longest Flow Path',
        url: url,
        displayField: 'code',
        objectIdField: 'code',
        outFields: ['*'],
        orderBy: { field: 'length' },
        renderer: renderer,
        definitionExpression: "code = ''",
        listMode: 'hide',
    });
    return layer;
};

const getRgRelocationLayer = (GeoJSONLayer, url) => {
    const renderer = {
        type: 'simple',
        symbol: {
            type: 'simple-line',
            width: 2,
            color: 'rgb(128,0,128)',
        },
    };

    const layer = new GeoJSONLayer({
        id: 'rg-relocation',
        title: 'Rainfall Gauge Relocation',
        url: url,
        displayField: 'code',
        objectIdField: 'code',
        outFields: ['*'],
        renderer: renderer,
        visible: false,
    });
    return layer;
};

const getRgTocLayer = (GeoJSONLayer, url, LabelClass, tocColors) => {
    const renderer = {
        type: 'pie-chart',
        holePercentage: 0.3,
        othersCategory: {
            threshold: 0.05,
            color: 'gray',
        },
        attributes: [
            {
                field: 'toc_jbp',
                label: 'TOC JBP',
                color: tocColors[0],
            },
            {
                field: 'toc_kir',
                label: 'TOC Kirpich',
                color: tocColors[1],
            },
            {
                field: 'toc_pil',
                label: 'TOC Pilgrim McDermott',
                color: tocColors[2],
            },
            {
                field: 'toc_bw_avg',
                label: 'TOC Bransby Williams (avg)',
                color: tocColors[3],
            },
            {
                field: 'toc_bw_eqa',
                label: 'TOC Bransby Williams (eqa)',
                color: tocColors[4],
            },
        ],
        size: 15,
    };

    renderer.visualVariables = [
        {
            legendOptions: { title: 'TOC in hours' },
            type: 'size',
            valueExpression:
                '($feature.toc_jbp + $feature.toc_kir + $feature.toc_pil + $feature.toc_bw_avg + $feature.toc_bw_eqa)/5',
            minSize: 15,
            maxSize: 60,
            minDataValue: 0,
            maxDataValue: 40,
        },
    ];

    const layer = new GeoJSONLayer({
        id: 'rgToc',
        title: 'Rainfall Gauge - Time of Concentration',
        url: url,
        displayField: 'code',
        objectIdField: 'fid',
        outFields: ['*'],
        renderer: renderer,
        featureEffect: {
            filter: {
                where: 'calc_toc > 0',
            },
            includedEffect: 'drop-shadow(0px, 0px, 5px, #666)',
            excludedEffect: 'opacity(80%)',
            excludedLabelsVisible: true,
        },
        popupTemplate: {
            title: '{code}, {name}',
            actions: [
                {
                    title: 'Show subwatershed',
                    id: 'show-sws',
                    icon: 'drive-time',
                },
            ],
            content: [
                {
                    type: 'media',
                    mediaInfos: [
                        {
                            type: 'column-chart',
                            caption: 'Time of concentation (hours)',
                            value: {
                                fields: [
                                    'toc_jbp',
                                    'toc_kir',
                                    'toc_pil',
                                    'toc_bw_avg',
                                    'toc_bw_eqa',
                                ],
                                normalizeField: null,
                                tooltipField:
                                    'TOC values for various methodologies',
                            },
                        },
                    ],
                },
                {
                    type: 'fields',
                    fieldInfos: [
                        {
                            fieldName: 'toc_jbp',
                            label: 'TOC JBP',
                            format: {
                                places: 2,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'toc_kir',
                            label: 'TOC Kirpich',
                            format: {
                                places: 2,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'toc_pil',
                            label: 'TOC Pilgrim McDermott',
                            format: {
                                places: 2,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'toc_bw_avg',
                            label: 'TOC Bransby Williams (avg)',
                            format: {
                                places: 2,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'toc_bw_eqa',
                            label: 'TOC Bransby Williams (eqa)',
                            format: {
                                places: 2,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'sw_area',
                            label: 'Subwatershed area:',
                            format: {
                                places: 0,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'lfp_len',
                            label: 'LFP length',
                            format: {
                                places: 0,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'lfp_dem_min',
                            label: 'LFP outlet elevation',
                            format: {
                                places: 0,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                        {
                            fieldName: 'lfp_dem_max',
                            label: 'LFP top elevation',
                            format: {
                                places: 0,
                                digitSeparator: true,
                            },
                            stringFieldOption: 'text-box',
                        },
                    ],
                },
            ],
        },
        copyright: 'QIT Plus',
    });

    // Add labels to gauges
    const labelClass = new LabelClass({
        labelExpressionInfo: { expression: '$feature.code' },
        symbol: {
            type: 'text',
            color: tocColors[1],
            haloSize: 1,
            haloColor: 'white',
        },
    });
    layer.labelingInfo = [labelClass];

    return layer;
};

// Layer custom interactions
const addLayerInteractions = (app, reactiveUtils) => {
    const view = app.view;

    // Custom action in popup to show subwatershed
    reactiveUtils.on(
        () => view.popup.viewModel,
        'trigger-action',
        (event) => {
            if (event.action.id === 'show-sws') {
                showSws();
            }
        }
    );

    // Show subwatershed for selected feature
    const showSws = () => {
        const code = view.popup.selectedFeature.attributes.code;
        app.layers.rgToc.featureEffect = {
            filter: {
                where: `code = '${code}'`,
            },
            includedEffect: 'drop-shadow(0px, 0px, 5px, #666)',
            excludedEffect: 'opacity(25%)',
            excludedLabelsVisible: false,
        };
        app.layers.lfps.definitionExpression = `code = '${code}'`;
        app.layers.sws.definitionExpression = `code = '${code}'`;
        app.layers.sws.queryExtent().then((response) => {
            view.goTo(response.extent, { duration: 1000 }).catch((error) => {
                console.error(error);
            });
        });
        // Get lfps feature and use for profile
        app.layers.lfps.queryFeatures().then((results) => {
            app.widgets.elevationProfile.input = results.features[0];
            app.widgets.eElevationProfile.expand();
        });
    };

    // Hide subwatershed
    const hideSws = () => {
        app.layers.rgToc.featureEffect = {
            filter: {
                where: 'calc_toc > 0',
            },
            includedEffect: 'drop-shadow(0px, 0px, 5px, #666)',
            excludedEffect: 'opacity(80%)',
            excludedLabelsVisible: true,
        };
        app.layers.lfps.definitionExpression = "code = ''";
        app.layers.sws.definitionExpression = "code = ''";
        app.widgets.eElevationProfile.collapse();
    };

    // Watch for when features are selected
    reactiveUtils.watch(
        () => view.popup.selectedFeature,
        (graphic) => {
            if (graphic) {
                hideSws();
                if (graphic.layer.id == 'rgToc') {
                    const graphicTemplate = graphic.getEffectivePopupTemplate();
                    graphicTemplate.actions.items[0].visible = graphic
                        .attributes.calc_toc
                        ? true
                        : false;
                }
            }
        }
    );

    // Watch for popup close / restart to hide sws
    reactiveUtils.watch(
        () => view.popup.visible,
        () => {
            hideSws();
        }
    );

    // Set up search widget source to gauge layer
    app.widgets.search.sources = [
        {
            layer: app.layers.rgToc,
            searchFields: ['code', 'name'],
            suggestionTemplate: '{code} - {name}',
            exactMatch: false,
            outFields: ['code', 'name'],
            name: 'Gauges',
            placeholder: 'Gauge code or name',
            maxSuggestions: 6,
            minSuggestCharacters: 2,
            zoomScale: 50000,
        },
    ];
};
