import{a3 as p,a as s,y as i,T as m,U as l,c as d,R as c}from"./uuid-854440a9.js";import{i as y}from"./Field-3600efd2.js";import{p as u}from"./FeatureTemplate-2ae2449f.js";let o=class extends p(c){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const r={};for(const e of Object.keys(t))r[e]=y(t[e]);return r}writeDomains(t,r){var a;const e={};for(const n of Object.keys(t))t[n]&&(e[n]=(a=t[n])==null?void 0:a.toJSON());r.domains=e}};s([i({json:{write:!0}})],o.prototype,"id",void 0),s([i({json:{write:!0}})],o.prototype,"name",void 0),s([i({json:{write:!0}})],o.prototype,"domains",void 0),s([m("domains")],o.prototype,"readDomains",null),s([l("domains")],o.prototype,"writeDomains",null),s([i({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=s([d("esri.layers.support.FeatureType")],o);const h=o;export{h as n};