import{aA as c}from"./uuid-854440a9.js";import{S as m,p as s}from"./query-cc8eab36.js";import{b as f}from"./Query-84dc14af.js";async function u(t,n,o){const r=c(t);return m(r,f.from(n),{...o}).then(a=>a.data.count)}async function d(t,n,o){const r=c(t);return s(r,f.from(n),{...o}).then(a=>a.data.objectIds)}export{u as n,d as s};