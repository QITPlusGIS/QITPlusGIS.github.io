import{ec as x,a as i,b as s,c as M,d$ as P,d0 as B,c$ as C,ed as F,dO as k,dS as z,dQ as A,dR as W,dT as H,b0 as h,V as w,ad as N,bo as $,ee as J,ef as S,eg as I,eh as R,m as q,_ as K,ei as Q,S as U,dJ as V,ej as Y,ek as X,dK as Z,ag as ee,ax as L,b4 as f,ea as te,aG as re,dp as oe,el as E,az as ie}from"./index-4457faad.js";import le from"./FeatureLayer-692bf129.js";import{n as ae}from"./objectIdUtils-789e911a.js";import"./FeatureLayerBase-d36e434a.js";import"./serviceCapabilitiesUtils-adf740cb.js";import"./editsZScale-9a0ab72a.js";import"./queryZScale-a1095df9.js";import"./APIKeyMixin-41e83e07.js";import"./EditBusLayer-dbec34b4.js";import"./versionUtils-1d3a80a6.js";import"./styleUtils-86b9c8e7.js";import"./TopFeaturesQuery-8cc4c70b.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!D(e))}function D({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,y;return r===o.geometryTypeJSON&&((y=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function j(){return new re({xmin:-180,ymin:-90,xmax:180,ymax:90})}const T=new x({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new x({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends oe{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(j(),t).geometry:R(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=$();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),I(e,E)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],u.prototype,"fullExtent",null),i([s({readOnly:!0})],u.prototype,"fullBounds",null),i([s({readOnly:!0})],u.prototype,"sublayers",null),i([s()],u.prototype,"layer",void 0),i([s()],u.prototype,"layerId",void 0),i([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([M("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new P().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends k(z(A(W(H(ie))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new le;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=$();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),I(e,E)?S(j(),t).geometry:R(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,d=y.id??l++,m=D(n);if(m!=null){const c=new u({id:m.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:g,symbol:O,attributes:_,popupInfo:G})=>q.fromJSON({attributes:_,geometry:g,symbol:O,popupTemplate:G}))});o.push(c)}}return new w(o)}writeSublayers(t,e,r,o){var m;const{minScale:l,maxScale:n}=this;if(t==null)return;const y=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((m=o==null?void 0:o.messages)==null?void 0:m.push(new K("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const c of t)for(const g of c.graphics)if(g.geometry!=null){d=g.geometry.spatialReference.toJSON();break e}for(const c of v){const g=t.find(O=>c.id===O.id);this._writeMapNoteSublayer(p,g,c,l,n,d,o)}Q("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?U(n.spatialReference,t)||(V(n.spatialReference,t)||Y()||await X(),l.geometry=Z(n,t)):t=n.spatialReference,e.push(l)}const r=await ee(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,y){const p=[];if(e!=null){for(const d of e.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,T),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[T.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var d,m;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:y}=e;if(l==null)return;if(l.type!==r)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new L("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((m=o==null?void 0:o.messages)==null?void 0:m.push(new L("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=ae(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||l.has(y[r]))&&(y[r]=o++),l.add(y[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([te("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([M("esri.layers.MapNotesLayer")],a);const Oe=a;export{Oe as default};