import{D as i,E as n,bp as h,F as y,a$ as m,s as d,M as _,aT as f}from"./index-95bf5a29.js";import S from"./FeatureLayerView2D-839a298f.js";import{e as v}from"./util-5bbca87d.js";import"./definitions-5794030e.js";import"./LayerView2D-174415e1.js";import"./Container-d4fca89e.js";import"./enums-b14466b3.js";import"./Texture-bbec4966.js";import"./AttributeStoreView-6e845139.js";import"./TiledDisplayObject-b3007b60.js";import"./color-628a9a69.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-75662cc6.js";import"./VertexArrayObject-b3a7c307.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-9bfcc03f.js";import"./GeometryUtils-55a0cbab.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-01cee920.js";import"./featureConversionUtils-a9c583c4.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-23276101.js";import"./cimAnalyzer-111c7dbe.js";import"./fontUtils-29d03983.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-0f9d7c20.js";import"./quantizationUtils-4ec8ebe9.js";import"./floatRGBA-5b6289a8.js";import"./ExpandedCIM-2146cbec.js";import"./BitmapTileContainer-da79d593.js";import"./Bitmap-69e5d8fb.js";import"./TileContainer-55e61814.js";import"./CircularArray-ef508845.js";import"./BufferPool-d007a38c.js";import"./FeatureContainer-b273e3d5.js";import"./popupUtils-cd8c5ba2.js";import"./LayerView-8c442389.js";import"./RefreshableLayerView-42fb8783.js";const g=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return i([n()],t.prototype,"_isUserPaused",void 0),i([n({readOnly:!0})],t.prototype,"connectionStatus",null),i([n({type:h})],t.prototype,"filter",void 0),t=i([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends g(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([m(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),s=this;return{remove(){a.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){var r,a,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const l=f.fromJSON(p);return l.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),l})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(l=>l.toJSON()),a=v(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,geometryType:a,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};i([n()],o.prototype,"pipelineConnectionStatus",void 0),i([n()],o.prototype,"pipelineErrorString",void 0),i([n({readOnly:!0})],o.prototype,"connectionError",null),i([n({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=i([y("esri.views.2d.layers.StreamLayerView2D")],o);const ce=o;export{ce as default};