import{t as s,v as o,S as h,w as y,x as d,s as m,eB as _,e as f,z as S}from"./index-7211d811.js";import v from"./FeatureLayerView2D-4ed73e47.js";import{e as g}from"./util-66772d31.js";import"./Container-d43c5e18.js";import"./Texture-8977e2c7.js";import"./LayerView-6f653f91.js";import"./scaleUtils-6f53eafc.js";import"./AttributeStoreView-c1b5df35.js";import"./TiledDisplayObject-e3310e87.js";import"./color-59c4e3eb.js";import"./WGLContainer-a1237a72.js";import"./FramebufferObject-8e2c7ff7.js";import"./ProgramTemplate-d525368d.js";import"./GeometryUtils-40aada46.js";import"./config-1337d16e.js";import"./earcut-fa517ba8.js";import"./featureConversionUtils-7dacf99d.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-60e1228c.js";import"./ExpandedCIM-8f4619ac.js";import"./BidiEngine-9a40f2f4.js";import"./utils-859f11ff.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d7291828.js";import"./floatRGBA-d7257b49.js";import"./BitmapTileContainer-7e71a493.js";import"./Bitmap-cccf6b1c.js";import"./TileContainer-4b2862fb.js";import"./CircularArray-ef508845.js";import"./BufferPool-5b15b515.js";import"./FeatureContainer-a119acd6.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-dca4fb1f.js";import"./RefreshableLayerView-f2a6e711.js";const x=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:h})],t.prototype,"filter",void 0),t=s([y("esri.layers.mixins.StreamLayerView")],t),t};function c(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let n=class extends x(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([d(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),d(()=>this.layer.purgeOptions,()=>this._update()),d(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new m("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const a=super.on(e,t),i=this;return f(()=>{a.remove(),r&&(i._proxy.closed||i.hasEventListener(e)||i._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,i;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new m("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const l=S.fromJSON(p);return l.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),l})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var l;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(u=>u.toJSON()),a=g(e.geometryType),i=((l=e.timeInfo)==null?void 0:l.toJSON())||null,p=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:a,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:p,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([y("esri.views.2d.layers.StreamLayerView2D")],n);const se=n;export{se as default};