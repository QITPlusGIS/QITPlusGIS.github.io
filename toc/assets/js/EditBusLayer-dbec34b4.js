import{aj as x,ac as E,a as w,c as L,ad as r}from"./index-4457faad.js";const I=new x.EventEmitter;function $(d,a,s=!1){const i=E();return s=a==null||s,I.emit("apply-edits",{serviceUrl:d,layerId:a,mayReceiveServiceEdits:s,result:i.promise}),i}const b="esri.layers.mixins.EditBusLayer",p=Symbol(b);function R(d){return d!=null&&typeof d=="object"&&p in d}const T=d=>{var a;let s=class extends d{constructor(...i){super(...i),this[a]=!0,this.when().then(()=>{this.own([I.on("apply-edits",g=>{const{serviceUrl:y,layerId:n,mayReceiveServiceEdits:j,result:f}=g,A=y===this.url,u=n!=null&&this.layerId!=null&&n===this.layerId;if(!A||!u&&!j)return;const v=f.then(e=>{var o;if(u&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",r(e)),e;const c=(o=e.editedFeatures)==null?void 0:o.find(({layerId:l})=>l===this.layerId);if(c){const{adds:l,updates:h,deletes:F}=c.editedFeatures,m={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:l?l.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],deletedFeatures:F?F.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],updatedFeatures:h?h.map(({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1};return this.emit("edits",m),m}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1}});this.emit("apply-edits",{result:v})})])},()=>{})}};return a=p,s=w([L(b)],s),s};export{T as c,$ as l,R as n};