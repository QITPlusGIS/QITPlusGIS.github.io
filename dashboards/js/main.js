/*
 *QIT Plus - Dashboards
 */

// ArcGIS CSS
import '@arcgis/core/assets/esri/themes/light/main.css';
// QIT Plus CSS
import '/css/main.css';

// Import ArcGIS JS modules
import * as arcgis from './arcgis';
// IMport other modules
import * as utils from './utils';
import { addMap } from './map';
import { addLayers } from './layers';

// Main app object with app setup
const app = {
    arcgis: arcgis,
    layers: {},
    mainLayerView: {},
    highlightSelect: false,
    utils: utils,
    widgets: {},
    ui: {icons:{}},
    // Show header with QIT logo
    showHeader: true,
    // Show search panel with council list next to map
    showSearchPanel: true,
    // Show layer with simulated river flow in AU
    showRiverFlow: true,
    layerEffect: true,
    colorTemplate: {},
};

// Read url params and adjust based on it
app.utils.adjustAppByURLParams(app);
// Make arcgis icon paths available as SVG icons in app.ui.icons
app.utils.addIcons(app);
// Set CSS
app.utils.setCss(app.colorTemplate);

// Main container enclosing all about Dashboards Map
app.ui.dashboardsMainContainer = document.getElementById(
    'dashboardsMainContainer'
);
if (app.ui.dashboardsMainContainer) {
    // Add map container
    app.ui.mapInterfaceContainer = document.createElement('div');
    app.ui.mapInterfaceContainer.id = 'mapInterfaceContainer';
    app.ui.mapViewContainer = document.createElement('div');
    app.ui.mapViewContainer.id = 'mapViewContainer';
    app.ui.mapInterfaceContainer.appendChild(app.ui.mapViewContainer);
    app.ui.dashboardsMainContainer.appendChild(app.ui.mapInterfaceContainer);

    // Add map including map view and adjustments
    addMap(app);
    // Add layers to map
    addLayers(app);

    // Add page header with logo and heading if desired
    if (app.showHeader) {
        import('./ui/header').then((module) => {
            import('/css/header.css');
            const { addHeader } = module;
            addHeader(app);
        });
    }

    // Add search panel if desired
    if (app.showSearchPanel) {
        import('/css/searchPanel.css');
        import('./ui/searchPanel').then((module) => {
            const { addSearchPanel } = module;
            addSearchPanel(app);
        });
    }
}
