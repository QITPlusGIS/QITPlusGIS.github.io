import{ex as g,ek as _,el as w,en as V,i6 as T,s as b,eo as D,ay as d,eW as S,_ as c,y,D as s,E as l,bs as v,i7 as x,es as $,F as E,aM as I}from"./index-285b86bc.js";import{p as O}from"./ArcGISCachedService-3056403f.js";import{h as L}from"./WorkerHandle-25ae15d0.js";import"./TileInfoTilemapCache-fcbbdf6a.js";class N{constructor(e,t,i,o){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=o)}get hasNoDataValues(){if(this._hasNoDataValues==null){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(this._minValue!=null)return;const{noDataValue:e,values:t}=this;let i=1/0,o=-1/0,h=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(i=n<i?n:i,o=n>o?n:o,h=!1);h?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=o>-3e38?o:0)}}class m extends L{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(p.forEach((e,t)=>{e===this&&p.delete(t)}),this.destroy())}}const p=new Map;function j(r=null){let e=p.get(r);return e||(r!=null?(e=new m(t=>r.immediate.schedule(t)),p.set(r,e)):(e=new m,p.set(null,e))),++e.ref,e}let a=class extends O(g(_(w(V(I))))){constructor(...r){super(...r),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=j()}normalizeCtorArgs(r,e){return typeof r=="string"?{url:r,...e}:r}destroy(){this._lercDecoder=T(this._lercDecoder)}readCapabilities(r,e){const t=e.capabilities&&e.capabilities.split(",").map(i=>i.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(r,e){let t=e.currentVersion;return t||(t=9.3),t}load(r){const e=r!=null?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new b("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(D).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(r,e,t,i){const o=(i=i||{signal:null}).signal!=null?i.signal:i.signal=new AbortController().signal,h={responseType:"array-buffer",signal:o},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,e,t,i)).then(()=>d(this.getTileUrl(r,e,t),h)).then(u=>this._lercDecoder.decode(u.data,n,o)).then(u=>new N(u))}getTileUrl(r,e,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=S({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${r}/${e}/${t}${o?"?"+o:""}`}async queryElevation(r,e){const{ElevationQuery:t}=await c(()=>import("./index-285b86bc.js").then(i=>i.tn),["./index-285b86bc.js","..\\index-add6cbc1.css"],import.meta.url);return y(e),new t().query(this,r,e)}async createElevationSampler(r,e){const{ElevationQuery:t}=await c(()=>import("./index-285b86bc.js").then(i=>i.tn),["./index-285b86bc.js","..\\index-add6cbc1.css"],import.meta.url);return y(e),new t().createSampler(this,r,e)}_fetchTileAvailability(r,e,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,e,t,i):Promise.resolve("unknown")}async _fetchImageService(r){var i;if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:r},t=await d(this.parsedUrl.path,e);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[f]}};s([l({readOnly:!0})],a.prototype,"capabilities",void 0),s([v("service","capabilities",["capabilities"])],a.prototype,"readCapabilities",null),s([l({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),s([l({readOnly:!0,type:x})],a.prototype,"heightModelInfo",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([l({type:["show","hide"]})],a.prototype,"listMode",void 0),s([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"minScale",void 0),s([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"maxScale",void 0),s([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),s([l({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([l()],a.prototype,"sourceJSON",void 0),s([l({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),s([l($)],a.prototype,"url",void 0),s([l()],a.prototype,"version",void 0),s([v("version",["currentVersion"])],a.prototype,"readVersion",null),a=s([E("esri.layers.ElevationLayer")],a);const f=Symbol("default-fetch-tile");a.prototype.fetchTile[f]=!0;const U=a;export{U as default};