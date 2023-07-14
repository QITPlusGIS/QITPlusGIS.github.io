/*
 *QIT Plus - Time of concentration map interface
 */

// Import ArcGIS CSS and modules
import '@arcgis/core/assets/esri/themes/light/main.css';

// Import main css
import '../css/main.css';
// Set title and logo
const title = 'QIT Plus - Time of Concentration';
const logoUrl = '';

// Add main html content
import * as htmlContent from './html-content.js';
htmlContent.addTitle(title);
htmlContent.addTitleDiv(title, logoUrl);
htmlContent.addViewDiv();
htmlContent.addLoaderDiv();

// Main object for the app for referencing
import { App } from './app.js';
const app = App();

// Import ArcGIS JS modules
import * as arcgis from './arcgis.js';

// Import chart js
import { Chart } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

// Import from local modules
import { createMap, createMapView } from './mapview.js';
import { addLayers } from './layers.js';
import { addBottomContainer } from './b-container.js';
import { addTableView } from './table.js';
import { addChart } from './chart.js';
import { addEView } from './e-view.js';

// Create map
createMap(app, arcgis);

// Create view with all widgets
createMapView(app, arcgis);

// Add layers
addLayers(app, arcgis);

// Add bottom container
addBottomContainer();

// Wait for view / layer to be loaded first
app.view.when(() => {
    app.view.whenLayerView(app.layers.rgToc).then(() => {
        // Add table view to bottom container
        addTableView(app, arcgis);
        // Add chart to bottom container
        addChart(app, Chart);
    });
});

// Add eView for monitoring events
addEView(app, arcgis.reactiveUtils);
