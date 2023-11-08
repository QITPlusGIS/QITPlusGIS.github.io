/*
* ArcGIS JS modules core setup
*/

// Esri config
import esriConfig from '@arcgis/core/config';

// API Key for dashboard of dashboards 
const esriToken =
    'AAPK30f9595f237e4f1e89808a1fae6ab62alZTmtvbzc6_rS84n1fQkkWSHiDCqby1pMpPgLmc7HKIb4X4skqCFbsRw-kZjrsFk';
esriConfig.apiKey = esriToken;

// Map and view
export { default as Map } from '@arcgis/core/Map';
export { default as MapView } from '@arcgis/core/views/MapView';

// Layers
export { default as VectorTileLayer } from '@arcgis/core/layers/VectorTileLayer';
export { default as FeatureLayer } from '@arcgis/core/layers/FeatureLayer';
export { default as ImageryLayer } from '@arcgis/core/layers/ImageryLayer';

// Promise utils
export * as promiseUtils from "@arcgis/core/core/promiseUtils.js";

// Icons
export {
    home24,
    information24,
    dashboard24,
    checkShield24,
    circleDisallowed24,
} from '@esri/calcite-ui-icons';