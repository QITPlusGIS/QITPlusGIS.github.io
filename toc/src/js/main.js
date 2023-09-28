/*
 *QIT Plus - Time of concentration map interface
 */

// ArcGIS CSS
import '@arcgis/core/assets/esri/themes/light/main.css';
// QIT Plus CSS
import '../css/main.css';
// Set title and logo
const title = 'QIT Plus - Time of Concentration';
import defaultLogo from '../img/qit-plus-logo.png';
const logo = '';

// Add main html content
import * as htmlContent from './html-content.js';
htmlContent.addTitle(title);
htmlContent.addTitleDiv(title, defaultLogo, logo);
htmlContent.addMenu();
htmlContent.addLoaderDiv();
htmlContent.addViewDiv();

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
    addCSVEditor();
    app.view.whenLayerView(app.layers.rgToc).then(() => {
        // Zoom to loaded layer
        app.layers.rgToc.queryExtent().then((response) => {
            app.view
                .goTo(response.extent, { duration: 1000 })
                .catch((error) => {
                    console.error(error);
                });
        });
        // Add table view to bottom container
        addTableView(app, arcgis);
        // Add chart to bottom container
        addChart(app, Chart);
        // Add drag & drop and edit for csv
    });
});

// Add eView for monitoring events
addEView(app, arcgis.reactiveUtils);

const addCSVEditor = () => {
    const dropbox = app.view.container;

    const dragenter = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const dragover = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const drop = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (app.layers.csv) {
            alert('Only one CSV layer at this time.');
        } else {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        }
    };

    dropbox.addEventListener('dragenter', dragenter, false);
    dropbox.addEventListener('dragover', dragover, false);
    dropbox.addEventListener('drop', drop, false);

    const handleFiles = (files) => {
        if (files.length) {
            const file = files[0];
            if (file.type === 'text/csv') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    displayCSV(file.name, event.target.result);
                };
                reader.readAsText(file);
            } else {
                alert('CSV only at this time.');
            }
        }
    };
};

const displayCSV = (name, text) => {
    const objects = csvToObjects(text);
    objectsToGeojsonLayer(name, objects);
};

const objectsToGeojsonLayer = (name, objects) => {
    const features = [];
    for (const o of objects) {
        if (o.code && o.latitude && o.longitude) {
            const geometry = {
                type: 'Point',
                coordinates: [parseFloat(o.longitude), parseFloat(o.latitude)],
            };
            const properties = {};
            for (const key in o) {
                if (key) {
                    properties[key] = o[key];
                }
            }
            features.push({
                type: 'Feature',
                geometry: geometry,
                properties: properties,
            });
        }
    }
    if (features.length == 0) {
        alert(
            'CSV must have at minimum columns code, longitude and latitude (case sensitive) with no null values.'
        );
        return;
    }

    const geojson = {
        type: 'FeatureCollection',
        features: features,
    };
    // create a new blob from geojson featurecollection
    const blob = new Blob([JSON.stringify(geojson)], {
        type: 'application/json',
    });
    // URL reference to the blob
    const url = URL.createObjectURL(blob);
    // create new geojson layer using the blob url
    const layer = new arcgis.GeoJSONLayer({
        title: name,
        url: url,
        editingEnabled: true,
    });
    app.layers.csv = layer;

    if (objects[0].calc_toc) {
        layer.renderer = {
            type: 'unique-value',
            field: 'calc_toc',
            defaultLabel: 'Not checked',
            defaultSymbol: {
                type: 'simple-marker',
                size: 8,
                color: 'rgb(0,64,128)',
                outline: {
                    color: 'rgb(255,255,255)',
                    width: 1.5,
                },
            },
            uniqueValueInfos: [
                {
                    value: '1',
                    label: 'Calculated ToC',
                    symbol: {
                        type: 'simple-marker',
                        size: 8,
                        color: 'rgb(64,128,0)',
                        outline: {
                            color: 'rgb(255,255,255)',
                            width: 1.5,
                        },
                    },
                },
                {
                    value: '0',
                    label: 'Excluded from ToC',
                    symbol: {
                        type: 'simple-marker',
                        size: 8,
                        color: 'rgb(64,0,0)',
                        outline: {
                            color: 'rgb(255,255,255)',
                            width: 1.5,
                        },
                    },
                },
            ],
        };
    } else {
        layer.renderer = {
            type: 'simple',
            label: layer.title,
            symbol: {
                type: 'simple-marker',
                size: 8,
                color: 'rgb(0,128,255)',
                outline: {
                    color: 'rgb(255,255,255)',
                    width: 1.5,
                },
            },
        };
    }
    console.log(layer);
    // if (layer.fields.latitude){
    //     console.log(layer);
    // }

    layer.effect = 'drop-shadow(0,0,3px)';

    // Add labels to gauges
    const labelClass = new arcgis.LabelClass({
        labelExpressionInfo: { expression: '$feature.code' },
        symbol: {
            type: 'text',
            color: [0, 0, 0],
            haloSize: 1,
            haloColor: 'white',
        },
    });
    layer.labelingInfo = [labelClass];

    layer
        .when(() => {
            return layer.queryExtent();
        })
        .then((response) => {
            app.view.goTo(response.extent);
        });

    app.view.map.add(layer);
    // At the very minimum, set the Editor's view
    const editor = new arcgis.Editor({
        view: app.view,
    });
    app.view.ui.add(editor, 'top-right');

    // Add zoom to gauges extent button
    const el = document.createElement('div');
    el.id = 'exportCsv';
    el.className = 'esri-widget esri-widget--button esri-interactive';
    el.title = 'Export CSV';
    el.innerHTML =
        '<calcite-icon icon="download-to" text-label="Export CSV"></calcite-icon>';
    document.body.appendChild(el);
    app.view.ui.add('exportCsv', 'top-right');

    el.addEventListener('click', () => {
        app.layers.csv.queryFeatures().then((results) => {
            const data = [];
            const fields = [];
            for (const f of app.layers.csv.fields) {
                if (f.name !== '__OBJECTID') {
                    fields.push(f.name);
                }
            }
            data.push(fields.join(',') + ',u_longitude,u_latitude');
            for (const f of results.features) {
                const line = [];
                for (const a in f.attributes) {
                    if (a !== '__OBJECTID') {
                        line.push(f.attributes[a]);
                    }
                }
                line.push(f.geometry.longitude.toFixed(6));
                line.push(f.geometry.latitude.toFixed(6));
                data.push(line.join(','));
            }
            const csvStr = data.join('\n');
            downloadCSV(name.replace('.csv', '_updated.csv'), csvStr);
        });
    });
};

function downloadCSV(fileName, csvStr) {
    const el = document.createElement('a');
    el.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    el.target = '_blank';
    el.download = fileName;
    el.click();
}

const csvToObjects = (dataString) => {
    let lines = dataString.split(/\n/).map((lineStr) => {
        lineStr = lineStr.replace(/\r/, '');
        return lineStr.split(',');
    });
    if (lines.length < 2) {
        alert(
            'CSV must have at least two lines - first with column names and second as record.'
        );
        return;
    }
    const keys = lines[0];
    const objects = lines.slice(1).map((arr) =>
        arr.reduce((obj, val, i) => {
            obj[keys[i]] = val;
            return obj;
        }, {})
    );

    return objects;
};
