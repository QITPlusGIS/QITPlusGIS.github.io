/*
 *QIT Plus - Dashboards
 */

const loadCss = async (app) => {
    // ArcGIS CSS
    await import('@arcgis/core/assets/esri/themes/light/main.css');
    // QIT Plus CSS
    await import('/css/main.css');
    // Set CSS
    app.utils.setCss(app.colorTemplate);
};

// Import other modules
import * as utils from './utils';

// Load header
const loadHeader = async (app) => {
    if (app.showHeader) {
        await import('/css/header.css');
        await import('/css/header.css');
        const { addHeader } = await import('./ui/header');
        return addHeader(app);
    }
};

// Load map
const loadMap = async (app) => {
    const { addMap } = await import('./map');
    return addMap(app);
};

// Load layers
const loadLayers = async (app) => {
    const { addLayers } = await import('./layers');
    return addLayers(app);
};

// Main app object with app setup
const app = {
    layers: {},
    mainLayerView: {},
    highlightSelect: false,
    utils: utils,
    widgets: {},
    ui: { icons: {}, pointerDown: false },
    // Show header with QIT logo
    showHeader: true,
    // Show search panel with council list next to map
    showSearchPanel: true,
    // Show layer with simulated river flow in AU
    showFlow: true,
    layerEffect: true,
    colorTemplateLabel: 'default',
    colorTemplate: {},
};

// Read url params and adjust based on it
app.utils.adjustAppByURLParams(app);
// Make arcgis icon paths available as SVG icons in app.ui.icons
app.utils.addIcons(app);

// Main container enclosing all about Dashboards Map
app.ui.dashboardsMainContainer = document.getElementById(
    'dashboardsMainContainer'
);
app.ui.mapInterfaceContainer = document.getElementById('mapInterfaceContainer');
app.ui.mapViewContainer = document.getElementById('mapInterfaceContainer');

// Add map including map view and adjustments
loadCss(app)
    .then(() => {
        // Add page header with logo and heading if desired
        loadHeader(app)
            .then(() => {
                // Add map
                loadMap(app)
                    .then(() => {
                        // Add layers to map
                        loadLayers(app)
                            .then(() => {
                                // Add search panel if desired
                                if (app.showSearchPanel) {
                                    (async () => {
                                        import('/css/searchPanel.css');
                                        import('./ui/searchPanel').then(
                                            (module) => {
                                                const { addSearchPanel } =
                                                    module;
                                                addSearchPanel(app);
                                            }
                                        );
                                    })();
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });
