import{aU as i,fs as p}from"./index-95bf5a29.js";import{m as a}from"./queryTopFeatures-1980b2ed.js";import"./query-da2b8b43.js";import"./pbfQueryUtils-c45d11de.js";import"./pbf-5a555186.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";async function w(o,t,r){const m=i(o);return(await a(m,p.from(t),{...r})).data.count}export{w as executeForTopCount};