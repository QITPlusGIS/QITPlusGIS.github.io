/*
* Map and Mapview with widgets
*/

export const createMap = (app, arcgis) => {
    // Create map
    app.map = new arcgis.Map({
        basemap: 'arcgis-topographic',
        ground: 'world-elevation',
    });
}

export const createMapView = (app, arcgis) => {
    // Create map view
    const view = new arcgis.MapView({
        map: app.map,
        center: app.defaultView.center,
        zoom: app.defaultView.zoom,
        container: 'viewDiv',
        padding: {
            top: 50,
        },
        highlightOptions: {
            color: 'rgba(0,0,0, 0.8)',
        },
        constraints: {
            minZoom: 8,
            maxZoom: 20,
        },
    });
    view.ui.add('compass', 'top-left');

    // Hide loader after view stops updating for the first time
    arcgis.reactiveUtils
        .whenOnce(() => !view.updating)
        .then(() => {
            app.stopLoader();
        });

    // Adjust view popup look
    view.popup.collapseEnabled = false;
    view.popup.dockEnabled = true;
    view.popup.visibleElements = {
        featureNavigation: false,
    };
    view.popup.dockOptions = {
        buttonEnabled: false,
        breakpoint: false,
        position: 'top-right',
    };

    // Add widget references to app
    app.widgets = {};

    // Create Basemap Toggle widget
    const elBT = document.createElement('div');
    elBT.id = 'basemap-toggle';

    app.widgets.basemapToggle = new arcgis.BasemapToggle({
        view: view,
        nextBasemap: 'satellite',
        container: elBT,
    });

    // Apply effect on satellite when used fist time
    arcgis.reactiveUtils
        .whenOnce(() => view.map.findLayerById('satellite-base-layer'))
        .then(() => {
            const layer = view.map.findLayerById('satellite-base-layer');
            layer.effect = 'sepia(50%) opacity(50%)';
        });

    view.ui.add(app.widgets.basemapToggle, { position: 'top-left' });

    // Create Search widget
    app.widgets.search = new arcgis.Search({
        view: view,
        locationEnabled: false,
        searchAllEnabled: false,
        includeDefaultSources: false,
    });

    // Add Search widget
    view.ui.add(
        (app.widgets.eS = new arcgis.Expand({
            expandTooltip: 'Search',
            expandIcon: 'search',
            content: app.widgets.search,
        })),
        'top-left'
    );

    // Create Layer List widget
    app.widgets.layerList = new arcgis.LayerList({
        view: view,
    });

    // Add Layer List widget
    view.ui.add(
        (app.widgets.eLayerList = new arcgis.Expand({
            expandTooltip: 'Layer List',
            expandIcon: 'show-multiple-layers-at-a-time',
            content: app.widgets.layerList,
        })),
        'top-left'
    );

    // Create Legend widget
    app.widgets.legend = new arcgis.Legend({
        view: view,
    });

    // Add Legend widget
    view.ui.add(
        (app.widgets.eLegend = new arcgis.Expand({
            expandTooltip: 'Legend',
            expandIcon: 'legend',
            content: app.widgets.legend,
        })),
        'top-left'
    );

    // Add elevation profile widget
    app.widgets.elevationProfile = new arcgis.ElevationProfile({
        view: view,
        unit: 'meters',
        unitOptions: ['meters'],
        profiles: [
            {
                type: 'ground',
            },
        ],
        visibleElements: {
            legend: false,
            chart: true,
            clearButton: true,
            settingsButton: false,
            sketchButton: true,
            selectButton: false,
            uniformChartScalingToggle: true,
        },
    });

    view.ui.add(
        (app.widgets.eElevationProfile = new arcgis.Expand({
            expandTooltip: 'Elevation Profile',
            content: app.widgets.elevationProfile,
        })),
        'top-left'
    );

    // Add zoom to gauges extent button
    const elZT = document.createElement('div');
    elZT.id = 'zoom-to-layer-extent';
    elZT.className =
        'esri-widget esri-widget--button esri-interactive';
    elZT.title = 'Zoom to all gauges';
    elZT.innerHTML =
        '<calcite-icon icon="layer-zoom-to" text-label="Zoom to all gauges"></calcite-icon>';
    document.body.appendChild(elZT);
    view.ui.add('zoom-to-layer-extent', 'top-left');

    elZT.addEventListener('click', () => {
        app.layers.rgToc.queryExtent().then((response) => {
            view.goTo(response.extent, { duration: 1000 }).catch((error) => {
                console.error(error);
            });
        });
    });

    app.view = view;
}
