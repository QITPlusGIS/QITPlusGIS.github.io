import{I as o,b as m}from"./utils-9da11240.js";import{l as c,i as u,f as p}from"./portalItemUtils-1fa1f793.js";import"./uuid-854440a9.js";import"./index-2eca610e.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./PortalItem-eaf53090.js";import"./jsonContext-83068eb3.js";import"./saveAPIKeyUtils-2f2d05fe.js";import"./arcgisLayerUrl-db50ff50.js";const i="Stream Service",y="stream-layer-save",f="stream-layer-save-as";function s(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function v(r,e){const{parsedUrl:t,title:n,fullExtent:a}=r;e.url=t.path,e.title||(e.title=n),e.extent=null,a!=null&&(e.extent=await c(a)),u(e,p.SINGLE_LAYER)}async function w(r,e){return o({layer:r,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:y},e)}async function E(r,e,t){return m({layer:r,itemType:i,validateLayer:s,createItemData:l,errorNamePrefix:f,newItem:e,setItemProperties:v},t)}export{w as save,E as saveAs};