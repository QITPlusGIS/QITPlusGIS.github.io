import{a as s,y as i,c as d,R as h,cX as n,c0 as f,l as S,aA as g,cv as y,A as R,dG as j}from"./uuid-854440a9.js";let o=class extends h{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([d("esri.rest.support.ProjectParameters")],o);const v=o,w=S(v);async function J(e,t,r){t=w(t);const a=g(e),p={...a.query,f:"json",...t.toJSON()},c=t.outSpatialReference,m=f(t.geometries[0]),u=y(p,r);return R(a.path+"/project",u).then(({data:{geometries:l}})=>j(l,m,c))}export{J as n,v as p};