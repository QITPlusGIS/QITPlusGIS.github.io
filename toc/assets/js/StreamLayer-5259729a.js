import{D as t,E as s,F as b,dg as T,h4 as F,h5 as P,ei as D,ew as _,em as k,ej as E,ex as O,ek as C,el as N,en as U,ez as A,bl as I,s as d,eo as L,h7 as u,ho as J,V as M,hp as V,_ as G,ef as y,M as z,h8 as q,aV as W,ay as K,eK as Q,h9 as H,aJ as X,hq as B,aS as Y,hd as Z,hb as ee,hc as te,er as ie,eJ as f,hr as se,hs as re,he as oe,b8 as ne,hf as ae,hg as le,bs as g,hh as pe,es as de,hj as ce,aM as he}from"./index-95bf5a29.js";var m;let l=m=class extends T{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new m({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=m=t([b("esri.layers.support.PurgeOptions")],l);const S=l,v=ce();function w(e,r){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends F(P(D(_(k(E(O(C(N(U(A(he))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(L).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){u(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){var n;r=r.layerDefinition||r;const a=(n=r.drawingInfo)==null?void 0:n.renderer;if(a){const p=J(a,r,o)||void 0;return p||M.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),p}return V(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([G(()=>import("./createConnection-3aa03bf9.js"),["./createConnection-3aa03bf9.js","./index-95bf5a29.js","..\\index-add6cbc1.css","./query-da2b8b43.js","./pbfQueryUtils-c45d11de.js","./pbf-5a555186.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js"],import.meta.url),this.load()]),o=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:x=0,maxReconnectionInterval:j=20,spatialReference:R=this.spatialReference}=e||this.createConnectionParameters(),c=r(this.parsedUrl,this.spatialReference,R,o,{geometry:p,where:n},x,j,a??void 0),$=z([this.on("send-message-to-socket",h=>c.sendMessageToSocket(h)),this.on("send-message-to-client",h=>c.sendMessageToClient(h))]);return c.once("destroy",$.remove),c}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return q(this,e)}createQuery(){const e=new W;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,r){const o=r==null?void 0:r.messages;return this.webSocketUrl?(o==null||o.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o==null||o.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var r,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await K(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((r=this.timeInfo)!=null&&r.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(p=>p.type==="oid"))==null?void 0:o.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new Q({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),X(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:B})],i.prototype,"elevationInfo",void 0),t([s({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([s(v.fields)],i.prototype,"fields",void 0),t([s(v.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:Y,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([s({type:y.apiValues,json:{read:{reader:y.read}}})],i.prototype,"geometryType",void 0),t([s(Z)],i.prototype,"labelsVisible",void 0),t([s({type:[ee],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:te},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([s(ie)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"]})],i.prototype,"listMode",void 0),t([s({type:f})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:f})],i.prototype,"maxReconnectionInterval",void 0),t([s(se)],i.prototype,"maxScale",void 0),t([s(re)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s(oe)],i.prototype,"popupEnabled",void 0),t([s({type:ne,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([s({type:S})],i.prototype,"purgeOptions",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([s({types:ae,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:le,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([g("service","renderer",["drawingInfo.renderer","defaultSymbol"]),g("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s(pe)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(de)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([b("esri.layers.StreamLayer")],i);const me=i;export{me as default};