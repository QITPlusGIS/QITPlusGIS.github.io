/*
* ArcGIS JS modules
*/

// Esri config
import esriConfig from '@arcgis/core/config';

// TODO: Dev Miro QIT Plus token - must be replaced for production by restricted token
const esriToken =
    'AAPK9e1ac7b4aa5c4f74acc1c5ee1e499125uMYbXoXGe4Jpi8uJ7I3sIsO0e0pVTqJlswJsWuR95YAesw9DoxIN2Ry3IgyO5vTB';
esriConfig.apiKey = esriToken;

// Map and view
export { default as Map } from '@arcgis/core/Map';
export { default as MapView } from '@arcgis/core/views/MapView';

// Layers
export { default as GeoJSONLayer } from '@arcgis/core/layers/GeoJSONLayer';
export { default as ImageryTileLayer } from '@arcgis/core/layers/ImageryTileLayer';
export { default as LabelClass } from '@arcgis/core/layers/support/LabelClass';

// Widgets
export { default as BasemapToggle } from '@arcgis/core/widgets/BasemapToggle';
export { default as FeatureTable } from '@arcgis/core/widgets/FeatureTable';
export { default as TableTemplate } from '@arcgis/core/widgets/FeatureTable/support/TableTemplate';
export { default as Expand } from '@arcgis/core/widgets/Expand';
export { default as Legend } from '@arcgis/core/widgets/Legend';
export { default as LayerList } from '@arcgis/core/widgets/LayerList';
export { default as ElevationProfile } from '@arcgis/core/widgets/ElevationProfile';
export { default as Search } from '@arcgis/core/widgets/Search';

// Other
export * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
