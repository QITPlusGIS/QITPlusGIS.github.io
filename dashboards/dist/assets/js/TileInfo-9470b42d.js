import{a as r,y as a,R as E,aK as z,c as M,Q as L,T as b,U as W,N as S,a$ as P,b4 as g,aU as T,aO as G,eh as A,d as F,c7 as D,aT as j}from"./uuid-854440a9.js";var R;let f=R=class extends E{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new R({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),r([a({type:z,json:{write:!0}})],f.prototype,"level",void 0),r([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=R=r([M("esri.layers.support.LOD")],f);const w=f;class I{constructor(t,s,o,i,l=void 0){this.id=t,this.level=s,this.row=o,this.col=i,this.extent=l}}var d;const N=new L({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=d=class extends E{static create(e={}){const{resolutionFactor:t=1,scales:s,size:o=256,spatialReference:i=S.WebMercator,numLODs:l=24}=e;if(!P(i)){const c=[];if(s)for(let u=0;u<s.length;u++){const h=s[u];c.push(new w({level:u,scale:h,resolution:h}))}else{let u=5e-4;for(let h=l-1;h>=0;h--)c.unshift(new w({level:h,scale:u,resolution:u})),u*=2}return new d({dpi:96,lods:c,origin:new g(0,0,i),size:[o,o],spatialReference:i})}const p=T(i),x=e.origin?new g({x:e.origin.x,y:e.origin.y,spatialReference:i}):new g(p?{x:p.origin[0],y:p.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),y=96,v=1/(G(i)*39.37*y),m=[];if(s)for(let c=0;c<s.length;c++){const u=s[c],h=u*v;m.push(new w({level:c,scale:u,resolution:h}))}else{let c=A(i)?512/o*5916575275917094e-7:256/o*591657527591555e-6;const u=Math.ceil(l/t);m.push(new w({level:0,scale:c,resolution:c*v}));for(let h=1;h<u;h++){const O=c/2**t,_=O*v;m.push(new w({level:h,scale:O,resolution:_})),c=O}}return new d({dpi:y,lods:m,origin:x,size:[o,o],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=T(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return g.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const o=[],i=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach(l=>{o.push(l.scale),t=l.scale>t?l.scale:t,s=l.scale<s?l.scale:s,i[l.level]=l})),this._set("scales",o),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),o=s+1;return t[s]/(t[s]/t[o])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let o=0;for(;o<s;o++){const i=t[o],l=t[o+1];if(i<=e)return o;if(l===e)return o+1;if(i>e&&l<e)return o+Math.log(i/e)/Math.log(i/l)}return o}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,o){const i=this.lodAt(e);if(!i)return null;let l,p;if(typeof t=="number")l=t,p=s;else if(F(t.spatialReference,this.spatialReference))l=t.x,p=t.y,o=s;else{const v=D(t,this.spatialReference);if(v==null)return null;l=v.x,p=v.y,o=s}const x=i.resolution*this.size[0],y=i.resolution*this.size[1];return o||(o=new I(null,0,0,0,j())),o.level=e,o.row=Math.floor((this.origin.y-p)/y+.001),o.col=Math.floor((l-this.origin.x)/x+.001),this.updateTileInfo(o),o}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===d.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(s=p)}if(!s)return;const o=e.level-s.level,i=s.resolution*this.size[0]/2**o,l=s.resolution*this.size[1]/2**o;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=j()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const s=this.lodAt(t.level);if(s==null)return null;const{resolution:o}=s,i=o*this.size[0],l=o*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+i,e[3]=e[1]+l,e}lodAt(e){var t;return((t=this._levelToLOD)==null?void 0:t[e])??null}clone(){return d.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(this.size[0]===256&&this.size[1]===256)return e===256?this:null;const s=[],o=this.lods.length;for(let i=0;i<o;i++){const l=this.lods[i],p=l.resolution*t;s.push(new w({level:l.level,scale:l.scale,resolution:p}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const o=e[s];this._upsampleLevels[o.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/o.resolution:0},t=o}}};r([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),r([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),r([a({type:String,json:{read:N.read,write:N.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),r([a({readOnly:!0})],n.prototype,"isWrappable",null),r([a({type:g,json:{write:!0}})],n.prototype,"origin",void 0),r([b("origin")],n.prototype,"readOrigin",null),r([a({type:[w],value:null,json:{write:!0}})],n.prototype,"lods",null),r([a({readOnly:!0})],n.prototype,"scales",void 0),r([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),r([b("size",["rows","cols"])],n.prototype,"readSize",null),r([W("size",{cols:{type:z},rows:{type:z}})],n.prototype,"writeSize",null),r([a({type:S,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=d=r([M("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const $=n;export{$ as j,w as p,I as t};