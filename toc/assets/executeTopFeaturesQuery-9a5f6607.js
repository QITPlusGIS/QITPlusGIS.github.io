import{aK as e,g as f}from"./index-797c09f0.js";import{y as s}from"./queryTopFeatures-83f40882.js";import{S as n}from"./TopFeaturesQuery-029fcf8a.js";import"./query-d707c0a5.js";import"./pbfQueryUtils-380cf68a.js";import"./pbf-984c4807.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-e903e101.js";async function K(r,o,t,m){const i=e(r),p={...m},{data:a}=await s(i,n.from(o),t,p);return f.fromJSON(a)}export{K as executeTopFeaturesQuery};