import{aT as e,aU as f,aV as i}from"./index-95bf5a29.js";import{m}from"./query-da2b8b43.js";async function w(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,w as s};