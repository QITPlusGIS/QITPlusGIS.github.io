import{f3 as i,f0 as u,f1 as l}from"./index-95bf5a29.js";import{l as S,Q as F,c as p,V as o,$ as w}from"./arcadeUtils-2c528a1a.js";import{u as c,f as h}from"./SpatialFilter-889be3ec.js";import{relate as I,crosses as A,touches as P,within as g,overlaps as C,contains as O,intersects as R}from"./geometryEngineAsync-977b069b.js";import"./number-6668a68b.js";import"./featureConversionUtils-a9c583c4.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./arcadeTimeUtils-fc982c4f.js";import"./WhereClause-fd0b8135.js";function f(r){return r instanceof i}function a(r,t,s,d){return d(r,t,async(y,e,n)=>{if(n.length<2)throw new u(r,l.WrongNumberOfParameters,t);if((n=S(n))[0]===null&&n[1]===null)return!1;if(o(n[0])){if(n[1]instanceof i)return new h({parentfeatureset:n[0],relation:s,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new u(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(s){case"esriSpatialRelEnvelopeIntersects":return R(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return R(n[0],n[1]);case"esriSpatialRelContains":return O(n[0],n[1]);case"esriSpatialRelOverlaps":return C(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return P(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new u(r,l.InvalidParameter,t)}if(o(n[1]))return new h({parentfeatureset:n[1],relation:s,relationGeom:n[0]});if(n[1]===null)return!1;throw new u(r,l.InvalidParameter,t)}if(n[0]!==null)throw new u(r,l.InvalidParameter,t);return o(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof i||n[1]===null)&&void 0})}function m(r){r.mode==="async"&&(r.functions.intersects=function(t,s){return a(t,s,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,s){return a(t,s,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,s){return a(t,s,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,s){return a(t,s,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,s){return a(t,s,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,s){return a(t,s,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,s){return a(t,s,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,s){return r.standardFunctionAsync(t,s,(d,y,e)=>{if(e=S(e),F(e,3,3,t,s),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof i&&e[1]===null||e[1]instanceof i&&e[0]===null)return!1;if(o(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(o(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(o(e[0])&&e[1]instanceof i)return e[0].relate(e[1],p(e[2]));if(o(e[1])&&e[0]instanceof i)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new u(t,l.InvalidParameter,s)})})}export{m as registerFunctions};