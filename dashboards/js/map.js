// Esri config
import esriConfig from '@arcgis/core/config';

// API Key for dashboard of dashboards
const esriToken =
    'AAPK30f9595f237e4f1e89808a1fae6ab62alZTmtvbzc6_rS84n1fQkkWSHiDCqby1pMpPgLmc7HKIb4X4skqCFbsRw-kZjrsFk';
esriConfig.apiKey = esriToken;

// Map and view
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

// Promise utils
import * as promiseUtils from '@arcgis/core/core/promiseUtils.js';

export const addMap = (app) => {
    app.map = createMap(app);
    app.mapView = createMapView(app);
    adjustMapView(app);
};

const createMap = (app) => {
    const map = new Map({});
    return map;
};

const createMapView = (app) => {
    const mapView = new MapView({
        map: app.map,
        center: [133, -27],
        scale: 25000000,
        constraints: {
            rotationEnabled: false,
            minScale: 200000000,
            maxScale: 100000,
            snapToZoom: false,
            geometry: {
                type: 'extent',
                xmin: 112.0,
                ymin: -44.0,
                xmax: 154.0,
                ymax: -9.0,
            },
        },
        container: 'mapViewContainer',
        highlightOptions: {
            color: app.colorTemplate.mapHighlightColor,
        },
        background: {
            color: app.colorTemplate.backgroundColor,
        },
    });
    return mapView;
};

const addQITAttribution = (app) => {
    const at = app.mapView.ui.find('attribution');
    at.when(() => {
        const el = document.getElementsByClassName(
            'esri-attribution__powered-by'
        )[0];
        if (el) {
            const attributionContent = el.innerHTML;
            const replacement =
                'Powered by <a class="esri-attribution__link" href="https://qitplus.com">QIT Plus</a>,';
            el.innerHTML = attributionContent.replace(
                'Powered by',
                replacement
            );
        }
    });
};

const addHomeButton = (app) => {
    const elZT = document.createElement('div');
    elZT.id = 'default-extent';
    elZT.className = 'esri-widget esri-widget--button esri-interactive';
    elZT.title = 'Default extent';
    elZT.role = 'button';
    elZT.tabIndex = 0;
    elZT.innerHTML = app.ui.icons.home;
    document.body.appendChild(elZT);
    app.mapView.ui.add('default-extent', 'top-left');
    elZT.addEventListener('click', () => {
        if (app.highlightSelect) app.highlightSelect.remove();
        app.utils.zoomToQueryLayer(app, app.layers.ab, 'dash_url is not null');
        app.utils.resetSearchPanel(app);
    });
};

const adjustMapView = (app) => {
    app.mapView.when(() => {
        // Zoom to councils with dashboard
        if (app.layers.ab) {
            app.mapView.whenLayerView(app.layers.ab).then((layerView) => {
                app.utils.zoomToQueryLayer(
                    app,
                    app.layers.ab,
                    'dash_url is not null'
                );
                app.mainLayerView = layerView;
            });
        }
        // Add QIT Plus to attribution part Powered by...
        addQITAttribution(app);
        // Add Home button
        addHomeButton(app);
        // Add map view handlers
        if (app.layers.ab) {
            addMapViewHandlers(app);
        }
    });
};

export const addMapViewHandlers = (app) => {
    // Handlers for map view events
    const view = app.mapView;
    const layer = app.layers.ab;
    const opts = {
        include: layer,
    };

    view.whenLayerView(layer).then((layerView) => {
        let highlight;
        let objectId;
        // Add tooltip div
        const tooltip = document.getElementById('tooltip');
        document.body.appendChild(tooltip);

        const debouncedUpdate = promiseUtils.debounce(async (event) => {
            // Perform a hitTest on the View
            const hitTest = await view.hitTest(event, opts);

            const result = hitTest.results[0];
            const newObjectId =
                result && result.graphic.attributes[layer.objectIdField];

            if (!newObjectId) {
                view.cursor = 'auto';
                tooltip.innerHTML = '';
                tooltip.style.display = 'none';
                highlight?.remove();
                objectId = null;
            } else if (objectId !== newObjectId) {
                let name =
                    result.graphic.attributes.name +
                    ', ' +
                    result.graphic.attributes.state;
                const dashUrl = result.graphic.attributes.dash_url;
                if (dashUrl) {
                    view.cursor = 'pointer';
                } else {
                    view.cursor = 'auto';
                }
                highlight?.remove();
                objectId = newObjectId;
                highlight = layerView.highlight(result.graphic);
                tooltip.innerHTML = name;
                const headerShiftY = app.ui.headerContainer
                    ? app.ui.headerContainer.offsetHeight
                    : 0;
                tooltip.style.left = `60px`;
                tooltip.style.top = `${15 + headerShiftY}px`;
                tooltip.style.display = 'block';
            }
        });

        const debouncedClick = promiseUtils.debounce(async (event) => {
            const hitTest = await view.hitTest(event, opts);
            if (hitTest.results.length == 0) {
                app.utils.resetSearchPanel(app);
                if (app.highlightSelect) app.highlightSelect.remove();
            } else {
                if (app.highlightSelect) app.highlightSelect.remove();
                app.highlightSelect = app.mainLayerView.highlight(
                    hitTest.results[0].graphic
                );
                const attributes = hitTest.results[0].graphic.attributes;
                app.utils.showResultInfo(app, attributes);
            }
        });

        // Listen for the pointer-move event on the View
        view.on('pointer-move', (event) => {
            if (!app.ui.pointerDown) {
                debouncedUpdate(event).catch((err) => {
                    if (!promiseUtils.isAbortError(err)) {
                        throw err;
                    }
                });
            }
        });
        // Listen for the pointer-click event on the View
        view.on('immediate-click', (event) => {
            debouncedClick(event).catch((err) => {
                if (!promiseUtils.isAbortError(err)) {
                    throw err;
                }
            });
        });

        view.on('pointer-down', (event) => {
            app.ui.pointerDown = true;
        });
        view.on('pointer-up', (event) => {
            app.ui.pointerDown = false;
        });
    });
};
