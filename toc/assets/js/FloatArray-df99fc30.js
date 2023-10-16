import{gr as oi,bD as y,_ as At,fK as li,V as fr,rr as mr,m0 as Be,b3 as ci,cj as Dt,az as ui,gs as He,lW as Ge,c9 as I,y as Bt,s4 as di,ko as hi,z as fi,fC as Ae,s as pr,gJ as mi,cq as gr,j1 as u,j2 as Z,j3 as yt,fW as $e,bL as Rt,iD as h,m3 as It,j0 as Fe,D as S,v as pi,E as $,F as gi,de as Ye,a7 as it,s5 as Ht,s6 as vi,c7 as wt,c8 as vr,jn as _i,bZ as Ti,iy as _t,iv as Si,fV as D,gy as Q,ii as se,ra as xi,g9 as ot,gh as Gt,lT as Ei,r3 as bi,cE as Xe,cx as Ai,qJ as yi,q$ as Ri,gj as Ii,aH as Ct,gk as wi,lU as lt,cD as Oe,rq as Ci,rb as Mi,rZ as $i,fM as Ut,iF as Fi,gg as Mt,b_ as _r,fY as xe,mb as Oi,kz as _e,gp as ut,rt as Tr,s7 as Sr,ir as xr,gx as Pi,h_ as Li}from"./index-a8f4225e.js";import{t as zi}from"./requestImageUtils-7edf61d7.js";import{u as Ue,D as Vt,t as Ni,N as Di,a as ge}from"./basicInterfaces-bb952591.js";import{f as de,G as Ee,L as Re,D as Ve,E as at,C as ee,F as Bi,I as Pe,O as J,_ as Hi}from"./enums-b14466b3.js";import{T as ye,E as Gi,e as $t,b as Ui,n as Vi}from"./Texture-b4fe8989.js";import{y as jt,t as ji}from"./Indices-8f34c7cb.js";import{w as Wi}from"./triangle-0b744f47.js";import{t as qi}from"./doublePrecisionUtils-e3c3d0d8.js";import{x as Er,c as Wt,y as ki,u as Yi,q as Xi,i as qt}from"./BufferView-4b7d3461.js";import{t as te}from"./VertexElementDescriptor-2925c6af.js";import{u as Ji,c as Zi,x as kt}from"./VertexArrayObject-54df3f23.js";import{W as br,_ as Ar}from"./OrderIndependentTransparency-b8ef1857.js";let Ki=class{constructor(e){this.channel=e,this.id=oi()}};function Qi(t,e){return t==null&&(t=[]),t.push(e),t}function ea(t,e){if(t==null)return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}function An(t,e,r,i,a){Je[0]=t.get(e,0),Je[1]=t.get(e,1),Je[2]=t.get(e,2),qi(Je,Te,3),r.set(a,0,Te[0]),i.set(a,0,Te[1]),r.set(a,1,Te[2]),i.set(a,1,Te[3]),r.set(a,2,Te[4]),i.set(a,2,Te[5])}const Je=y(),Te=new Float32Array(6);function ta(){if(ft==null){const t=e=>li(`esri/libs/basisu/${e}`);ft=At(()=>import("./basis_transcoder-074d0df7.js"),["./basis_transcoder-074d0df7.js","./index-a8f4225e.js","..\\index-add6cbc1.css"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return ft}let ft;var be;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(be||(be={}));let re=null,Ze=null;async function yr(){return Ze==null&&(Ze=ta(),re=await Ze),Ze}function ra(t,e){if(re==null)return t.byteLength;const r=new re.BasisFile(new Uint8Array(t)),i=Ir(r)?Rr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function ia(t,e){if(re==null)return t.byteLength;const r=new re.KTX2File(new Uint8Array(t)),i=wr(r)?Rr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Rr(t,e,r,i,a){const s=Gi(e?de.COMPRESSED_RGBA8_ETC2_EAC:de.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*s*n)}function Ir(t){return t.getNumImages()>=1&&!t.isUASTC()}function wr(t){return t.getFaces()>=1&&t.isETC1S()}async function aa(t,e,r){re==null&&(re=await yr());const i=new re.BasisFile(new Uint8Array(r));if(!Ir(i))return null;i.startTranscoding();const a=Cr(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(s,n)=>i.getImageTranscodedSizeInBytes(0,s,n),(s,n,o)=>i.transcodeImage(o,0,s,n,0,0));return i.close(),i.delete(),a}async function sa(t,e,r){re==null&&(re=await yr());const i=new re.KTX2File(new Uint8Array(r));if(!wr(i))return null;i.startTranscoding();const a=Cr(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(s,n)=>i.getImageTranscodedSizeInBytes(s,0,0,n),(s,n,o)=>i.transcodeImage(o,s,0,0,n,0,-1,-1));return i.close(),i.delete(),a}function Cr(t,e,r,i,a,s,n,o){const{compressedTextureETC:l,compressedTextureS3TC:c}=t.capabilities,[d,f]=l?i?[be.ETC2_RGBA,de.COMPRESSED_RGBA8_ETC2_EAC]:[be.ETC1_RGB,de.COMPRESSED_RGB8_ETC2]:c?i?[be.BC3_RGBA,de.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[be.BC1_RGB,de.COMPRESSED_RGB_S3TC_DXT1_EXT]:[be.RGBA32,Ee.RGBA],g=e.hasMipmap?r:Math.min(1,r),m=[];for(let v=0;v<g;v++)m.push(new Uint8Array(n(v,d))),o(v,d,m[v]);return e.internalFormat=f,e.hasMipmap=m.length>1,e.samplingMode=e.hasMipmap?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,e.width=a,e.height=s,new ye(t,e,{type:"compressed",levels:m})}const Ke=fr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),na=542327876,oa=131072,la=4;function Ft(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ca(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const ua=Ft("DXT1"),da=Ft("DXT3"),ha=Ft("DXT5"),fa=31,ma=0,pa=1,ga=2,va=3,_a=4,Ta=7,Sa=20,xa=21;function Ea(t,e,r){const i=ba(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:a,internalFormat:s,width:n,height:o}=i;return e.samplingMode=a.levels.length>1?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,e.hasMipmap=a.levels.length>1,e.internalFormat=s,e.width=n,e.height=o,new ye(t,e,a)}function ba(t,e){const r=new Int32Array(t,0,fa);if(r[ma]!==na)return Ke.error("Invalid magic number in DDS header"),null;if(!(r[Sa]&la))return Ke.error("Unsupported format, must contain a FourCC code"),null;const i=r[xa];let a,s;switch(i){case ua:a=8,s=de.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case da:a=16,s=de.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ha:a=16,s=de.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ke.error("Unsupported FourCC code:",ca(i)),null}let n=1,o=r[_a],l=r[va];!(3&o)&&!(3&l)||(Ke.warn("Rounding up compressed texture size to nearest multiple of 4."),o=o+3&-4,l=l+3&-4);const c=o,d=l;let f,g;r[ga]&oa&&e!==!1&&(n=Math.max(1,r[Ta]));let m=r[pa]+4;const v=[];for(let T=0;T<n;++T)g=(o+3>>2)*(l+3>>2)*a,f=new Uint8Array(t,m,g),v.push(f),m+=g,o=Math.max(1,o>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:v},internalFormat:s,width:c,height:d}}let yn=class extends mr{constructor(e,r){super(),this._data=e,this.type=Be.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ci,this.parameters=r||{},this.parameters.mipmap=this.parameters.mipmap!==!1,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:Ve.REPEAT,t:Ve.REPEAT},this._startPreload(e)}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Dt(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){ui(e.src)||Dt(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const r=new $t;return r.wrapMode=this.parameters.wrap??Ve.REPEAT,r.flipped=!this.parameters.noUnpackFlip,r.samplingMode=this.parameters.mipmap?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,r.hasMipmap=!!this.parameters.mipmap,r.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,r.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||Aa(this._data,this.parameters)}load(e){if(this._glTexture!=null)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ye(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(He(r)||Ge(r))&&this.parameters.encoding===Ue.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(He(r)||Ge(r))&&this.parameters.encoding===Ue.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(He(r)||Ge(r))&&this.parameters.encoding===Ue.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):Ge(r)?this._loadFromPixelData(e,r):He(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&this._glTexture!=null?this._data.readyState<je.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,r){return this._glTexture=Ea(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>sa(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>aa(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){I(this.parameters.width>0&&this.parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.parameters.components===1?Ee.LUMINANCE:this.parameters.components===3?Ee.RGB:Ee.RGBA,i.width=this.parameters.width??0,i.height=this.parameters.height??0,this._glTexture=new ye(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const a=await zi(r,{signal:i});return Bt(i),this._loadFromImage(e,a)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const a=await di(r,r.src,!1,i);return Bt(i),this._loadFromImage(e,a)})}_loadFromVideoElement(e,r){return r.readyState>=je.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((a,s)=>{const n=()=>{r.removeEventListener("loadeddata",o),r.removeEventListener("error",l),mi(c)},o=()=>{r.readyState>=je.HAVE_CURRENT_DATA&&(n(),a(this._loadFromImage(e,r)))},l=d=>{n(),s(d||new pr("Failed to load video"))};r.addEventListener("loadeddata",o),r.addEventListener("error",l);const c=hi(i,()=>l(fi()))}))}_loadFromImage(e,r){const i=Mr(r);this.parameters.width=i.width,this.parameters.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=this.parameters.components===3?Ee.RGB:Ee.RGBA,a.width=i.width,a.height=i.height,this._glTexture=new ye(e,a,r),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(a,a),i}unload(){if(this._glTexture=Ae(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Aa(t,e){if(t==null)return 0;if(He(t)||Ge(t))return e.encoding===Ue.KTX2_ENCODING?ia(t,!!e.mipmap):e.encoding===Ue.BASIS_ENCODING?ra(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Mr(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function Mr(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var je;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(je||(je={}));let ya=class extends Ji{},$r=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Fr=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Ae(this._program),this._pipeline=this._configuration=null}reload(e){Ae(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return at.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}};var _;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(_||(_={}));let Or=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new gr({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(_.Pass,this),this.bindDraw=r.generateBind(_.Draw,this),this._fragmentUniforms=Ui()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(r==null||r.glName==null){const a=this._textures.get(e);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};function Ot(t){t.code.add(u`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Pt(t){t.include(Ot),t.code.add(u`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}let L=class{constructor(e,r,i,a,s=null){this.name=e,this.type=r,this.arraySize=s,this.bind={[_.Pass]:null,[_.Draw]:null},i!=null&&a!=null&&(this.bind[i]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},he=class extends L{constructor(e,r){super(e,"vec2",_.Pass,(i,a,s)=>i.setUniform2fv(e,r(a,s)))}},K=class extends L{constructor(e,r){super(e,"vec4",_.Pass,(i,a,s)=>i.setUniform4fv(e,r(a,s)))}};function Ra(t){t.fragment.uniforms.add(new K("projInfo",(e,r)=>Ia(r))),t.fragment.uniforms.add(new he("zScale",(e,r)=>Pr(r))),t.fragment.code.add(u`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Ia(t){const e=t.camera.projectionMatrix;return e[11]===0?Z(Yt,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):Z(Yt,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Yt=yt();function Pr(t){return t.camera.projectionMatrix[11]===0?$e(Xt,0,1):$e(Xt,1,0)}const Xt=Rt();let B=class extends L{constructor(e,r){super(e,"vec3",_.Pass,(i,a,s)=>i.setUniform3fv(e,r(a,s)))}},We=class extends L{constructor(e,r){super(e,"float",_.Pass,(i,a,s)=>i.setUniform1f(e,r(a,s)))}},ne=class extends L{constructor(e,r){super(e,"sampler2D",_.Pass,(i,a,s)=>i.bindTexture(e,r(a,s)))}},qe=class extends L{constructor(e,r){super(e,"mat4",_.Pass,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};const Lr=fr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let zr=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){Lr.error("Trying to include shader module multiple times with different sets of options.");const a=new Set;for(const s of Object.keys(i))i[s]!==e[s]&&a.add(s);for(const s of Object.keys(e))i[s]!==e[s]&&a.add(s);a.forEach(s=>console.error(`  ${s}: current ${i[s]} new ${e[s]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},Nr=class extends zr{constructor(){super(...arguments),this.vertex=new Jt,this.fragment=new Jt,this.attributes=new Ma,this.varyings=new $a,this.extensions=new Tt,this.constants=new Dr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,n=s.uniforms.generateSource(),o=s.code.generateSource(),l=e==="vertex"?Oa:Fa,c=this.constants.generateSource().concat(s.constants.generateSource());return`#version 300 es
${r.join(`
`)}

${l}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${o.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[e];o!=null&&i.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[e];o!=null&&i.set(n.name,o)});const a=Array.from(i.values()),s=a.length;return(n,o,l)=>{for(let c=0;c<s;++c)a[c](r,n,o,l)}}},wa=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new pr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Lr.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},Ca=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Jt=class extends zr{constructor(){super(...arguments),this.uniforms=new wa,this.code=new Ca,this.constants=new Dr}get builder(){return this}},Ma=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},$a=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&I(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,a)=>r.push(e==="vertex"?`out ${i} ${a};`:`in ${i} ${a};`)),r}},Tt=class St{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?St.ALLOWLIST_VERTEX:St.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};Tt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Tt.ALLOWLIST_VERTEX=[];let Dr=class F{constructor(){this._entries=new Set}add(e,r,i){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=F._numberToFloatStr(i);break;case"int":a=F._numberToIntStr(i);break;case"bool":a=i.toString();break;case"vec2":a=`vec2(${F._numberToFloatStr(i[0])},                            ${F._numberToFloatStr(i[1])})`;break;case"vec3":a=`vec3(${F._numberToFloatStr(i[0])},                            ${F._numberToFloatStr(i[1])},                            ${F._numberToFloatStr(i[2])})`;break;case"vec4":a=`vec4(${F._numberToFloatStr(i[0])},                            ${F._numberToFloatStr(i[1])},                            ${F._numberToFloatStr(i[2])},                            ${F._numberToFloatStr(i[3])})`;break;case"ivec2":a=`ivec2(${F._numberToIntStr(i[0])},                             ${F._numberToIntStr(i[1])})`;break;case"ivec3":a=`ivec3(${F._numberToIntStr(i[0])},                             ${F._numberToIntStr(i[1])},                             ${F._numberToIntStr(i[2])})`;break;case"ivec4":a=`ivec4(${F._numberToIntStr(i[0])},                             ${F._numberToIntStr(i[1])},                             ${F._numberToIntStr(i[2])},                             ${F._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(i,s=>F._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Fa=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif

out vec4 fragColor;`,Oa=`precision highp float;
precision highp sampler2D;`;new te(h.POSITION,3,ee.FLOAT,0,12);new te(h.POSITION,3,ee.FLOAT,0,20),new te(h.UV0,2,ee.FLOAT,12,20);new te(h.POSITION,3,ee.FLOAT,0,32),new te(h.NORMAL,3,ee.FLOAT,12,32),new te(h.UV0,2,ee.FLOAT,24,32);new te(h.POSITION,3,ee.FLOAT,0,16),new te(h.COLOR,4,ee.UNSIGNED_BYTE,12,16);const Pa=[new te(h.POSITION,2,ee.FLOAT,0,8)],La=[new te(h.POSITION,2,ee.FLOAT,0,16),new te(h.UV0,2,ee.FLOAT,8,16)];function za(t,e=Pa,r=It,i=-1,a=1){let s=null;return e===La?s=new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):s=new Float32Array([i,i,a,i,i,a,a,a]),new ya(t,r,{geometry:e},{geometry:Zi.createVertex(t,Bi.STATIC_DRAW,s)})}function Wn(t){const e=new $t;return e.samplingMode=Re.NEAREST,e.width=e.height=1,new ye(t,e,new Uint8Array([255,255,255,255]))}var Zt;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Zt||(Zt={}));let Na=class extends Fe{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function Le(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,a=t.count||2,s=Math.ceil(Math.log2(a)),n=e._parameterBits??[0];let o=0;for(;n[o]+s>16;)o++,o>=n.length&&n.push(0);e._parameterBits=n;const l=n[o],c=(1<<s)-1<<l;n[o]+=s,Object.defineProperty(e,r,{get(){return this[i]},set(d){if(this[i]!==d&&(this[i]=d,this._keyDirty=!0,this._parameterBits[o]=this._parameterBits[o]&~c|+d<<l&c,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}function Br(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(u`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?u`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}let A=class extends pi{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};S([$()],A.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),S([$()],A.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),S([$()],A.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),S([$()],A.prototype,"DECONFLICTOR_SHOW_GRID",void 0),S([$()],A.prototype,"LABELS_SHOW_BORDER",void 0),S([$()],A.prototype,"TEXT_SHOW_BASELINE",void 0),S([$()],A.prototype,"TEXT_SHOW_BORDER",void 0),S([$()],A.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),S([$()],A.prototype,"OVERLAY_SHOW_CENTER",void 0),S([$()],A.prototype,"SHOW_POI",void 0),S([$()],A.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),S([$()],A.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),S([$()],A.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),S([$()],A.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),S([$()],A.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),S([$()],A.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),S([$()],A.prototype,"I3S_TREE_SHOW_TILES",void 0),S([$()],A.prototype,"I3S_SHOW_MODIFICATIONS",void 0),S([$()],A.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),S([$()],A.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),S([$()],A.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),S([$()],A.prototype,"LINE_WIREFRAMES",void 0),A=S([gi("esri.views.3d.support.DebugFlags")],A);const Da=new A;var xt,Kt,Qt,N,er;(function(t){t[t.INNER=0]="INNER",t[t.OUTER=1]="OUTER"})(xt||(xt={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",t[t.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",t[t.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(Kt||(Kt={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(Qt||(Qt={})),function(t){t[t.Color=0]="Color",t[t.ColorNoRasterImage=1]="ColorNoRasterImage",t[t.Highlight=2]="Highlight",t[t.Water=3]="Water",t[t.Occluded=4]="Occluded",t[t.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(N||(N={})),function(t){t[t.FADING=0]="FADING",t[t.IMMEDIATE=1]="IMMEDIATE",t[t.UNFADED=2]="UNFADED"}(er||(er={}));let Ba=class{constructor(e,r){this.vec3=e,this.id=r}};function Ha(t,e,r,i){return new Ba(Ye(t,e,r),i)}var Ce;(function(t){t[t.None=0]="None",t[t.ColorAndWater=1]="ColorAndWater",t[t.Highlight=2]="Highlight",t[t.Occluded=3]="Occluded",t[t.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"})(Ce||(Ce={}));const Ga=1.3;let Xn=class{get extent(){return this._extent}constructor(e,r){this.index=e,this.renderTargets=r,this._extent=it(),this.resolution=0,this.renderLocalOrigin=Ha(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new Ua,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(r.renderTargets.length).fill(!1)}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const r=e===Ce.ColorAndWater?this.renderTargets.getTarget(N.Color):e===Ce.Highlight?this.renderTargets.getTarget(N.Highlight):e===Ce.ObjectAndLayerIdColor?this.renderTargets.getTarget(N.ObjectAndLayerIdColor):this.renderTargets.getTarget(N.Occluded);return r?r.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(N.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(N.Color):null}getNormalTexture(e){const r=e===Ce.ColorAndWater?this.renderTargets.getTarget(N.Water):null;return r?r.getTexture():null}draw(e,r){const i=this.computeRenderTargetValidityBitfield();for(const a of this.renderTargets.renderTargets)a.type!==N.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[a.type]=e.drawTarget(this,a,r):this.validTargets[a.type]=!1;return i^this.computeRenderTargetValidityBitfield()?Vt.CHANGED:Vt.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[N.Color]|+e[N.ColorNoRasterImage]<<1|+e[N.Highlight]<<2|+e[N.Water]<<3|+e[N.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const r=.001*e.range;if(this._extent[0]-r<=e.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Ht(this._extent,e.range,0,i)}if(this._extent[2]+r>=e.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Ht(this._extent,-e.range,0,i)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,vi(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const r=this.canvasGeometries.extents[e];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===xt.INNER?0:this.resolution,0,this.resolution,this.resolution)}},Ua=class{constructor(){this.extents=[it(),it(),it()],this.numViews=0}};var k;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(k||(k={}));let Kn=class{constructor(e,r,i=!1,a=r){this.data=e,this.size=r,this.exclusive=i,this.stride=a}};function Va(t){if(t.length<wt)return Array.from(t);if(vr(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return _i(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let ja=class Hr{constructor(e,r,i,a){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=a,this._children=void 0,I(e.length>=1),I(i.length%this._numIndexPerPrimitive==0),I(i.length>=e.length*this._numIndexPerPrimitive),I(a.size===3||a.size===4);const{data:s,size:n}=a,o=e.length;let l=n*i[this._numIndexPerPrimitive*e[0]];Se.clear(),Se.push(l);const c=Ye(s[l],s[l+1],s[l+2]),d=Ti(c);for(let m=0;m<o;++m){const v=this._numIndexPerPrimitive*e[m];for(let T=0;T<this._numIndexPerPrimitive;++T){l=n*i[v+T],Se.push(l);let w=s[l];c[0]=Math.min(w,c[0]),d[0]=Math.max(w,d[0]),w=s[l+1],c[1]=Math.min(w,c[1]),d[1]=Math.max(w,d[1]),w=s[l+2],c[2]=Math.min(w,c[2]),d[2]=Math.max(w,d[2])}}this.bbMin=c,this.bbMax=d;const f=_t(y(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-c[0],d[1]-c[1]),d[2]-c[2]);let g=this.radius*this.radius;for(let m=0;m<Se.length;++m){l=Se.at(m);const v=s[l]-f[0],T=s[l+1]-f[1],w=s[l+2]-f[2],W=v*v+T*T+w*w;if(W<=g)continue;const V=Math.sqrt(W),H=.5*(V-this.radius);this.radius=this.radius+H,g=this.radius*this.radius;const G=H/V;f[0]+=v*G,f[1]+=T*G,f[2]+=w*G}this.center=f,Se.clear()}getChildren(){if(this._children||Si(this.bbMin,this.bbMax)<=1)return this._children;const e=_t(y(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),a=new Array(8);for(let c=0;c<8;++c)a[c]=0;const{data:s,size:n}=this.position;for(let c=0;c<r;++c){let d=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[c];let g=n*this.indices[f],m=s[g],v=s[g+1],T=s[g+2];for(let w=1;w<this._numIndexPerPrimitive;++w){g=n*this.indices[f+w];const W=s[g],V=s[g+1],H=s[g+2];W<m&&(m=W),V<v&&(v=V),H<T&&(T=H)}m<e[0]&&(d|=1),v<e[1]&&(d|=2),T<e[2]&&(d|=4),i[c]=d,++a[d]}let o=0;for(let c=0;c<8;++c)a[c]>0&&++o;if(o<2)return;const l=new Array(8);for(let c=0;c<8;++c)l[c]=a[c]>0?new Uint32Array(a[c]):void 0;for(let c=0;c<8;++c)a[c]=0;for(let c=0;c<r;++c){const d=i[c];l[d][a[d]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)l[c]!==void 0&&this._children.push(new Hr(l[c],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Se.prune()}};const Se=new gr({deallocator:null});function Wa(t,e,r){if(!t||!e)return!1;const{size:i,data:a}=t;D(r,0,0,0),D(q,0,0,0);let s=0,n=0;for(let o=0;o<e.length-2;o+=3){const l=e[o]*i,c=e[o+1]*i,d=e[o+2]*i;D(P,a[l],a[l+1],a[l+2]),D(ce,a[c],a[c+1],a[c+2]),D(Qe,a[d],a[d+1],a[d+2]);const f=Wi(P,ce,Qe);f?(Q(P,P,ce),Q(P,P,Qe),se(P,P,1/3*f),Q(r,r,P),s+=f):(Q(q,q,P),Q(q,q,ce),Q(q,q,Qe),n+=3)}return(n!==0||s!==0)&&(s!==0?(se(r,r,1/s),!0):n!==0&&(se(r,q,1/n),!0))}function qa(t,e,r){if(!t||!e)return!1;const{size:i,data:a}=t;D(r,0,0,0);let s=-1,n=0;for(let o=0;o<e.length;o++){const l=e[o]*i;s!==l&&(r[0]+=a[l],r[1]+=a[l+1],r[2]+=a[l+2],n++),s=l}return n>1&&se(r,r,1/n),n>0}function ka(t,e,r,i){if(!t)return!1;D(i,0,0,0),D(q,0,0,0);let a=0,s=0;const{size:n,data:o}=t,l=e?e.length-1:o.length/n-1,c=l+(r?2:0);for(let d=0;d<c;d+=2){const f=d<l?d:l,g=d<l?d+1:0,m=(e?e[f]:f)*n,v=(e?e[g]:g)*n;P[0]=o[m],P[1]=o[m+1],P[2]=o[m+2],ce[0]=o[v],ce[1]=o[v+1],ce[2]=o[v+2],se(P,Q(P,P,ce),.5);const T=xi(P,ce);T>0?(Q(i,i,se(P,P,T)),a+=T):a===0&&(Q(q,q,P),s++)}return a!==0?(se(i,i,1/a),!0):s!==0&&(se(i,q,1/s),!0)}const P=y(),ce=y(),Qe=y(),q=y();let eo=class Gr extends mr{constructor(e,r,i=[],a=null,s=Be.Mesh,n=null,o=-1){super(),this.material=e,this.mapPositions=a,this.type=s,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[l,c]of r)c&&this._vertexAttributes.set(l,{...c});if(i==null||i.length===0){const l=Ya(this._vertexAttributes),c=jt(l);this.edgeIndicesLength=this.edgeIndicesLength<0?l:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,c)}else for(const[l,c]of i)c&&(this._indices.set(l,ji(c)),l===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(l).length:this.edgeIndicesLength))}instantiate(e={}){const r=new Gr(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,a)=>{i.exclusive=!1,r._vertexAttributes.set(a,i)}),this._indices.forEach((i,a)=>r._indices.set(a,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:Va(r.data)},this._vertexAttributes.set(e,r)),r}setAttributeData(e,r){const i=this._vertexAttributes.get(e);i&&this._vertexAttributes.set(e,{...i,exclusive:!0,data:r})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Be.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Be.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&ot(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return Wa(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(h.POSITION),i=this.indices.get(h.POSITION);return ka(r,i,i&&Xa(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return qa(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION),r=this.vertexAttributes.get(h.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===Be.Mesh?3:1;I(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const a=jt(e.length/i);return new ja(a,i,e,r)}get transformation(){return this._transformation??Gt}set transformation(e){this._transformation=e&&e!==Gt?Ei(e):null}get shaderTransformation(){return this._shaderTransformer!=null?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return this._shaderTransformer!=null}addHighlight(){const e=new Ki(Ni.Highlight);return this.highlights=Qi(this.highlights,e),e}removeHighlight(e){this.highlights=ea(this.highlights,e)}};function Ya(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function Xa(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}let to=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Di.LOADED}};var z,tr;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(z||(z={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(tr||(tr={}));let Lt=class{constructor(e){this.field=e}},Ja=class extends Lt{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[z.Undefined,z.Undefined,z.Undefined]}},Za=class extends Lt{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}};class Ka extends Lt{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}let Qa=class{};function ze(t){return t!=null}function Ie(t){return typeof t=="number"}function dt(t){return typeof t=="string"}function es(t){return t==null||dt(t)}function O(t,e){t&&t.push(e)}function ts(t,e,r,i=Oe()){const a=t||0,s=e||0,n=r||0;return a!==0&&Ci(i,i,-a/180*Math.PI),s!==0&&Mi(i,i,s/180*Math.PI),n!==0&&$i(i,i,n/180*Math.PI),i}function me(t,e,r,i,a){const s=t.minSize,n=t.maxSize;if(t.expression)return O(a,"Could not convert size info: expression not supported"),!1;if(t.useSymbolValue){const o=i.symbolSize[r];return e.minSize[r]=o,e.maxSize[r]=o,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=z.DefinedSize,!0}if(ze(t.field))return ze(t.stops)?t.stops.length===2&&Ie(t.stops[0].size)&&Ie(t.stops[1].size)?(rr(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=z.DefinedSize,!0):(O(a,"Could not convert size info: stops only supported with 2 elements"),!1):Ie(s)&&Ie(n)&&ze(t.minDataValue)&&ze(t.maxDataValue)?(rr(s,n,t.minDataValue,t.maxDataValue,e,r),e.type[r]=z.DefinedSize,!0):t.valueUnit==="unknown"?(O(a,"Could not convert size info: proportional size not supported"),!1):Ut[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/Ut[t.valueUnit],e.type[r]=z.DefinedSize,!0):(O(a,"Could not convert size info: scale-dependent size not supported"),!1);if(!ze(t.field)){if(t.stops&&t.stops[0]&&Ie(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=z.DefinedSize,!0;if(Ie(s))return e.minSize[r]=s,e.maxSize[r]=s,e.offset[r]=s,e.factor[r]=0,e.type[r]=z.DefinedSize,!0}return O(a,"Could not convert size info: unsupported variant of sizeInfo"),!1}function rr(t,e,r,i,a,s){const n=Math.abs(i-r)>0?(e-t)/(i-r):0;a.minSize[s]=n>0?t:e,a.maxSize[s]=n>0?e:t,a.offset[s]=t-r*n,a.factor[s]=n}function rs(t,e,r,i){if(t.normalizationField||t.valueRepresentation)return O(i,"Could not convert size info: unsupported property"),null;if(!es(t.field))return O(i,"Could not convert size info: field is not a string"),null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return O(i,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size=new Ja(t.field);let a;switch(t.axis){case"width":return a=me(t,e.size,0,r,i),a?e:null;case"height":return a=me(t,e.size,2,r,i),a?e:null;case"depth":return a=me(t,e.size,1,r,i),a?e:null;case"width-and-depth":return a=me(t,e.size,0,r,i),a&&me(t,e.size,1,r,i),a?e:null;case null:case void 0:case"all":return a=me(t,e.size,0,r,i),a=a&&me(t,e.size,1,r,i),a=a&&me(t,e.size,2,r,i),a?e:null;default:return O(i,`Could not convert size info: unknown axis "${t.axis}""`),null}}function is(t,e,r){for(let a=0;a<3;++a){let s=e.unitInMeters;t.type[a]===z.DefinedSize&&(s*=e.modelSize[a],t.type[a]=z.DefinedScale),t.minSize[a]=t.minSize[a]/s,t.maxSize[a]=t.maxSize[a]/s,t.offset[a]=t.offset[a]/s,t.factor[a]=t.factor[a]/s}let i;if(t.type[0]!==z.Undefined)i=0;else if(t.type[1]!==z.Undefined)i=1;else{if(t.type[2]===z.Undefined)return O(r,"No size axis contains a valid size or scale"),!1;i=2}for(let a=0;a<3;++a)t.type[a]===z.Undefined&&(t.minSize[a]=t.minSize[i],t.maxSize[a]=t.maxSize[i],t.offset[a]=t.offset[i],t.factor[a]=t.factor[i],t.type[a]=t.type[i]);return!0}function ir(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function as(t,e,r){if(t.normalizationField)return O(r,"Could not convert color info: unsupported property"),null;if(dt(t.field)){if(!t.stops)return O(r,"Could not convert color info: missing stops or colors"),null;{if(t.stops.length>8)return O(r,"Could not convert color info: too many color stops"),null;e.color=new Za(t.field);const i=t.stops;for(let a=0;a<8;++a){const s=i[Math.min(a,i.length-1)];e.color.values[a]=s.value,ir(e.color.colors,a,s.color)}}}else{if(!(t.stops&&t.stops.length>=0))return O(r,"Could not convert color info: no field and no colors/stops"),null;{const i=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let a=0;a<8;a++)e.color.values[a]=1/0,ir(e.color.colors,a,i)}}return e}function ss(t,e,r){if(t.normalizationField)return O(r,"Could not convert opacity info: unsupported property"),null;if(dt(t.field)){if(!t.stops)return O(r,"Could not convert opacity info: missing stops or opacities"),null;{if(t.stops.length>8)return O(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity=new Ka(t.field);const i=t.stops;for(let a=0;a<8;++a){const s=i[Math.min(a,i.length-1)];e.opacity.values[a]=s.value,e.opacity.opacityValues[a]=s.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return O(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const i=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let a=0;a<8;a++)e.opacity.values[a]=1/0,e.opacity.opacityValues[a]=i}}return e}function mt(t,e,r){const i=r===2&&t.rotationType==="arithmetic";e.offset[r]=i?90:0,e.factor[r]=i?-1:1,e.type[r]=1}function ns(t,e,r){if(!dt(t.field))return O(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return O(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return mt(t,e.rotation,0),e;case"roll":return mt(t,e.rotation,1),e;case null:case void 0:case"heading":return mt(t,e.rotation,2),e;default:return O(r,`Could not convert rotation info: unknown axis "${t.axis}""`),null}}let oo=class{constructor(e,r=[1,1,1],i=[1,1,1],a=1,s=[0,0,0],n=[1,1,1],o=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=i,this.unitInMeters=a,this.anchor=s,this.scale=n,this.rotation=o}};function Ur(t,e,r){if(!t)return null;const i=t.reduce((a,s)=>{if(!a)return a;if(s.valueExpression)return O(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(s.type){case"size":return e.supports.size?rs(s,a,e,r):a;case"color":return e.supports.color?as(s,a,r):a;case"opacity":return e.supports.opacity?ss(s,a,r):null;case"rotation":return e.supports.rotation?ns(s,a,r):a;default:return null}},new Qa);return!(t.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i&&i.size&&!is(i.size,e,r)?null:i:null}let os=class{constructor(e,r,i){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=i}};function uo(t,e){if(!t||Da.TESTS_DISABLE_FAST_UPDATES)return null;const r=Ur(t.visualVariables,e);return r?new os(r,jr(r,e),!!r.size):null}function ho(t,e,r){if(!e||!t)return!1;const i=t.visualVariables,a=Ur(e.visualVariables,r);return!!a&&!!(et(i.size,a.size,"size")&&et(i.color,a.color,"color")&&et(i.rotation,a.rotation,"rotation")&&et(i.opacity,a.opacity,"opacity"))&&(t.visualVariables=a,t.materialParameters=jr(a,r),t.requiresShaderTransformation=!!a.size,!0)}function et(t,e,r){if(!!t!=!!e||t&&t.field!==(e==null?void 0:e.field))return!1;if(t&&r==="rotation"){const i=t,a=e;for(let s=0;s<3;s++)if(i.type[s]!==a.type[s]||i.offset[s]!==a.offset[s]||i.factor[s]!==a.factor[s])return!1}return!0}class Vr extends Fe{constructor(e){super(),this.vvSize=(e==null?void 0:e.size)??null,this.vvColor=(e==null?void 0:e.color)??null,this.vvOpacity=(e==null?void 0:e.opacity)??null}}function jr(t,e){const r=new Vr(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,bi(ke),ts(e.rotation[2],e.rotation[0],e.rotation[1],ke),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||Xe(),Ai(r.vvSymbolRotationMatrix,ke)),r}function fo(t,e,r){if(!t.vvSize)return r;yi(pe,r);const i=t.vvSymbolRotationMatrix;Ri(ke,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),Ii(pe,pe,ke);for(let a=0;a<3;++a){const s=t.vvSize.offset[a]+e[0]*t.vvSize.factor[a];ar[a]=Ct(s,t.vvSize.minSize[a],t.vvSize.maxSize[a])}return wi(pe,pe,ar),lt(pe,pe,t.vvSymbolAnchor),pe}function mo(t,e,r){if(e.vvSize)for(let i=0;i<3;++i){const a=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=Ct(a,e.vvSize.minSize[i],e.vvSize.maxSize[i])}else D(t,1,1,1)}function po(t,e){const r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}const pe=Oe(),ar=y(),ke=Oe();let go=class extends Vr{constructor(){super(...arguments),this.renderOccluded=Fi.Occlude}};const pt=8;let Ne=class extends Na{};S([Le({constValue:!0})],Ne.prototype,"hasSliceHighlight",void 0),S([Le({constValue:!1})],Ne.prototype,"hasSliceInVertexProgram",void 0),S([Le({constValue:!1})],Ne.prototype,"instancedDoublePrecision",void 0),S([Le({constValue:!1})],Ne.prototype,"hasModelTransformation",void 0),S([Le({constValue:_.Pass})],Ne.prototype,"pbrTextureBindType",void 0);function ls(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(u`vec3 positionModel() { return position; }`)}function cs({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(u`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(u`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let fe=class extends L{constructor(e,r){super(e,"vec3",_.Draw,(i,a,s,n)=>i.setUniform3fv(e,r(a,s,n)))}},Wr=class extends L{constructor(e,r){super(e,"mat3",_.Draw,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}},zt=class extends L{constructor(e,r){super(e,"mat3",_.Pass,(i,a,s)=>i.setUniformMatrix3fv(e,r(a,s)))}};function qr(t,e){t.include(ls);const r=t.vertex;r.include(cs,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new B("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new B("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new zt("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new qe("transformProjFromView",i=>i.transformProjFromView),new Wr("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new fe("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new fe("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(u`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?u`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new B("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class us extends Fe{constructor(){super(...arguments),this.transformWorldFromViewTH=y(),this.transformWorldFromViewTL=y(),this.transformViewFromCameraRelativeRS=Xe(),this.transformProjFromView=Oe()}}class ds extends Fe{constructor(){super(...arguments),this.transformWorldFromModelRS=Xe(),this.transformWorldFromModelTH=y(),this.transformWorldFromModelTL=y()}}function sr(t){t.varyings.add("linearDepth","float")}function hs(t){t.vertex.uniforms.add(new he("nearFar",(e,r)=>r.camera.nearFar))}function kr(t){t.vertex.code.add(u`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Eo(t,e){const{vertex:r}=t;switch(e.output){case k.Color:if(e.receiveShadows)return sr(t),void r.code.add(u`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case k.Depth:case k.Shadow:case k.ShadowHighlight:case k.ShadowExcludeHighlight:return t.include(qr,e),sr(t),hs(t),kr(t),void r.code.add(u`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(u`void forwardLinearDepth() {}`)}function bo(t,e){fs(t,e,new fe("slicePlaneOrigin",(r,i)=>ms(e,r,i)),new fe("slicePlaneBasis1",(r,i)=>{var a;return nr(e,r,i,(a=i.slicePlane)==null?void 0:a.basis1)}),new fe("slicePlaneBasis2",(r,i)=>{var a;return nr(e,r,i,(a=i.slicePlane)==null?void 0:a.basis2)}))}function fs(t,e,...r){if(!e.hasSlicePlane){const n=u`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const i=u`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=u`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,s=e.hasSliceHighlight?u`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:u`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(s)}function Yr(t,e,r){return t.instancedDoublePrecision?D(ps,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Xr(t,e){return t!=null?_r(ct,e.origin,t):e.origin}function Jr(t,e,r){return t.hasSliceTranslatedView?e!=null?lt(gs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function ms(t,e,r){if(r.slicePlane==null)return Mt;const i=Yr(t,e,r),a=Xr(i,r.slicePlane),s=Jr(t,i,r);return s!=null?ot(ct,a,s):a}function nr(t,e,r,i){if(i==null||r.slicePlane==null)return Mt;const a=Yr(t,e,r),s=Xr(a,r.slicePlane),n=Jr(t,a,r);return n!=null?(Q(De,i,s),ot(ct,s,n),ot(De,De,n),_r(De,De,ct)):i}const ps=y(),ct=y(),De=y(),gs=Oe();function Ao(t,e){const r=e.output===k.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(h.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(u`
     void forwardObjectAndLayerIdColor() {
      ${r?i?u`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:u`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:u``} }`),t.fragment.code.add(u`
      void outputObjectAndLayerIdColor() {
        ${r?u`fragColor = objectAndLayerIdColorVarying;`:u``} }`)}let vs=class extends L{constructor(e,r,i){super(e,"vec4",_.Pass,(a,s,n)=>a.setUniform4fv(e,r(s,n)),i)}},_s=class extends L{constructor(e,r,i){super(e,"float",_.Pass,(a,s,n)=>a.setUniform1fv(e,r(s,n)),i)}};function Io(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(h.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new B("vvSizeMinSize",a=>a.vvSize.minSize)),r.uniforms.add(new B("vvSizeMaxSize",a=>a.vvSize.maxSize)),r.uniforms.add(new B("vvSizeOffset",a=>a.vvSize.offset)),r.uniforms.add(new B("vvSizeFactor",a=>a.vvSize.factor)),r.uniforms.add(new zt("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),r.uniforms.add(new B("vvSymbolAnchor",a=>a.vvSymbolAnchor)),r.code.add(u`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(u`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?u`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(u`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",pt),r.uniforms.add(new _s("vvColorValues",a=>a.vvColor.values,pt),new vs("vvColorColors",a=>a.vvColor.colors,pt)),r.code.add(u`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?u`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(u`vec4 vvColor() { return vec4(1.0); }`)}function wo(t,e){switch(t.fragment.include(Ot),e.output){case k.Shadow:case k.ShadowHighlight:case k.ShadowExcludeHighlight:t.fragment.code.add(u`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case k.Depth:t.fragment.code.add(u`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}let Ts=class extends L{constructor(e,r){super(e,"mat4",_.Draw,(i,a,s)=>i.setUniformMatrix4fv(e,r(a,s)))}};function Mo(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Mt):t.uniforms.add(new fe("cameraPosition",(r,i)=>D(Zr,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function $o(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new qe("proj",(i,a)=>a.camera.projectionMatrix),new Ts("view",(i,a)=>lt(or,a.camera.viewMatrix,i.origin)),new fe("localOrigin",i=>i.origin));const r=i=>D(Zr,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new qe("proj",(i,a)=>a.camera.projectionMatrix),new qe("view",(i,a)=>lt(or,a.camera.viewMatrix,r(a))),new B("localOrigin",(i,a)=>r(a)))}const or=Oe(),Zr=y();function Fo(t){t.uniforms.add(new qe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function Oo(t,e){t.uniforms.add(new We("pixelRatio",(r,i)=>i.camera.pixelRatio/(e.draped?Ga:1)))}function Po(t,e){e.hasMultipassTerrain&&(t.fragment.include(Pt),t.fragment.uniforms.add(new ne("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new he("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new he("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(u`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let Lo=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};function Kr(t){t.vertex.code.add(u`const float PI = 3.141592653589793;`),t.fragment.code.add(u`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const No=.1,Do=.001;function Bo(t){t.code.add(u`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const Ho={func:Pe.LESS},Go={func:Pe.ALWAYS},Uo={mask:255},Vo={mask:0},jo={function:{func:Pe.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:J.KEEP,zFail:J.KEEP,zPass:J.ZERO}},Wo={function:{func:Pe.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:J.KEEP,zFail:J.KEEP,zPass:J.REPLACE}},qo={function:{func:Pe.EQUAL,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:J.KEEP,zFail:J.KEEP,zPass:J.KEEP}},ko={function:{func:Pe.NOTEQUAL,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:J.KEEP,zFail:J.KEEP,zPass:J.KEEP}};class Ss{constructor(e=y()){this.intensity=e}}let xs=class{constructor(e=y(),r=Ye(.57735,.57735,.57735)){this.intensity=e,this.direction=r}},Et=class{constructor(e=y(),r=Ye(.57735,.57735,.57735),i=!0,a=1,s=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=a,this.environmentStrength=s}},Qr=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Es(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function gt(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function Me(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function ei(t){return(t+1)*(t+1)}function bs(t){return Ct(Math.floor(Math.sqrt(t)-1),0,2)}function ti(t,e,r){const i=t[0],a=t[1],s=t[2],n=r||[];return n.length=ei(e),e>=0&&(n[0]=.28209479177),e>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*s,n[3]=.4886025119*a),e>=2&&(n[4]=1.09254843059*i*a,n[5]=1.09254843059*a*s,n[6]=.31539156525*(3*s*s-1),n[7]=1.09254843059*i*s,n[8]=.54627421529*(i*i-a*a)),n}function As(t,e){const r=ei(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let a=0;a<r;a++)i.r[a]=i.g[a]=i.b[a]=0;return i}function ys(t,e){const r=bs(e.r.length);for(const i of t)Oi(bt,i.direction),ti(bt,r,ue),Es(ue,st),gt(ue,i.intensity[0],we),Me(e.r,we),gt(ue,i.intensity[1],we),Me(e.g,we),gt(ue,i.intensity[2],we),Me(e.b,we);return e}function Rs(t,e){ti(bt,0,ue);for(const r of t)e.r[0]+=ue[0]*st[0]*r.intensity[0]*4*Math.PI,e.g[0]+=ue[0]*st[0]*r.intensity[1]*4*Math.PI,e.b[0]+=ue[0]*st[0]*r.intensity[2]*4*Math.PI;return e}function Is(t,e,r,i){As(e,i),D(r.intensity,0,0,0);let a=!1;const s=ws,n=Cs,o=Ms;s.length=0,n.length=0,o.length=0;for(const l of t)l instanceof Et&&!a?(xe(r.direction,l.direction),xe(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,a=!0):l instanceof Et||l instanceof xs?s.push(l):l instanceof Ss?n.push(l):l instanceof Qr&&o.push(l);ys(s,i),Rs(n,i);for(const l of o)Me(i.r,l.r),Me(i.g,l.g),Me(i.b,l.b)}const ws=[],Cs=[],Ms=[],ue=[0],we=[0],bt=y(),st=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let lr=class{constructor(){this.color=y(),this.intensity=1}},$s=class{constructor(){this.direction=y(),this.ambient=new lr,this.diffuse=new lr}};const Fs=.4;class Qo{constructor(){this._shOrder=2,this._legacy=new $s,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Qr,this._mainLight=new Et(y(),Ye(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Is(e,this._shOrder,this._mainLight,this._sphericalHarmonics),xe(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,se(this._legacy.diffuse.color,this._mainLight.intensity,r),xe(tt,this._legacy.diffuse.color),se(tt,tt,Fs*this.globalFactor),Q(this._legacy.ambient.color,this._legacy.ambient.color,tt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),xe(this._mainLight.direction,e.mainLight.direction),xe(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(_t(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=_e(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=_e(e.mainLight.specularStrength,r.mainLight.specularStrength,i),xe(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=_e(e.globalFactor,r.globalFactor,i),this.noonFactor=_e(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=_e(e.sh.r[a],r.sh.r[a],i),this._sphericalHarmonics.g[a]=_e(e.sh.g[a],r.sh.g[a],i),this._sphericalHarmonics.b[a]=_e(e.sh.b[a],r.sh.b[a],i);else for(let a=0;a<r.sh.r.length;a++)this._sphericalHarmonics.r[a]=r.sh.r[a],this._sphericalHarmonics.g[a]=r.sh.g[a],this._sphericalHarmonics.b[a]=r.sh.b[a]}}const tt=y();function Os(t,e){switch(e.normalType){case Y.Compressed:t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(u`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case Y.Attribute:t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(u`vec3 normalModel() {
return normal;
}`);break;case Y.ScreenDerivative:t.fragment.code.add(u`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:ut(e.normalType);case Y.COUNT:case Y.Ground:}}var Y;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Y||(Y={}));function el(t,e){switch(e.normalType){case Y.Attribute:case Y.Compressed:t.include(Os,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Wr("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new zt("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(u`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Y.Ground:t.include(qr,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(u`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?u`normalize(vPositionWorldCameraRelative);`:u`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case Y.ScreenDerivative:t.vertex.code.add(u`void forwardNormal() {}`);break;default:ut(e.normalType);case Y.COUNT:}}let tl=class extends us{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Xe()}},il=class extends ds{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Xe(),this.toMapSpace=yt()}};function cr(t,e,r,i){const a=r.typedBuffer,s=r.typedBufferStride,n=t.length;i*=s;for(let o=0;o<n;++o){const l=2*t[o];a[i]=e[l],a[i+1]=e[l+1],i+=s}}function ri(t,e,r,i,a){const s=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,a==null||a===1)for(let l=0;l<o;++l){const c=3*t[l];s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],i+=n}else for(let l=0;l<o;++l){const c=3*t[l];for(let d=0;d<a;++d)s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],i+=n}}function ii(t,e,r,i,a=1){const s=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,a===1)for(let l=0;l<o;++l){const c=4*t[l];s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],s[i+3]=e[c+3],i+=n}else for(let l=0;l<o;++l){const c=4*t[l];for(let d=0;d<a;++d)s[i]=e[c],s[i+1]=e[c+1],s[i+2]=e[c+2],s[i+3]=e[c+3],i+=n}}function sl(t,e,r){const i=t.typedBuffer,a=t.typedBufferStride;e*=a;for(let s=0;s<r;++s)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=a}function Ps(t,e,r,i,a,s=1){if(!r)return void ri(t,e,i,a,s);const n=i.typedBuffer,o=i.typedBufferStride,l=t.length,c=r[0],d=r[1],f=r[2],g=r[4],m=r[5],v=r[6],T=r[8],w=r[9],W=r[10],V=r[12],H=r[13],G=r[14];a*=o;let ie=0,R=0,E=0;const C=Tr(r)?x=>{ie=e[x]+V,R=e[x+1]+H,E=e[x+2]+G}:x=>{const p=e[x],M=e[x+1],b=e[x+2];ie=c*p+g*M+T*b+V,R=d*p+m*M+w*b+H,E=f*p+v*M+W*b+G};if(s===1)for(let x=0;x<l;++x)C(3*t[x]),n[a]=ie,n[a+1]=R,n[a+2]=E,a+=o;else for(let x=0;x<l;++x){C(3*t[x]);for(let p=0;p<s;++p)n[a]=ie,n[a+1]=R,n[a+2]=E,a+=o}}function Ls(t,e,r,i,a,s=1){if(!r)return void ri(t,e,i,a,s);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,d=n[0],f=n[1],g=n[2],m=n[4],v=n[5],T=n[6],w=n[8],W=n[9],V=n[10],H=!Sr(n),G=1e-6,ie=1-G;a*=l;let R=0,E=0,C=0;const x=Tr(n)?p=>{R=e[p],E=e[p+1],C=e[p+2]}:p=>{const M=e[p],b=e[p+1],j=e[p+2];R=d*M+m*b+w*j,E=f*M+v*b+W*j,C=g*M+T*b+V*j};if(s===1)if(H)for(let p=0;p<c;++p){x(3*t[p]);const M=R*R+E*E+C*C;if(M<ie&&M>G){const b=1/Math.sqrt(M);o[a]=R*b,o[a+1]=E*b,o[a+2]=C*b}else o[a]=R,o[a+1]=E,o[a+2]=C;a+=l}else for(let p=0;p<c;++p)x(3*t[p]),o[a]=R,o[a+1]=E,o[a+2]=C,a+=l;else for(let p=0;p<c;++p){if(x(3*t[p]),H){const M=R*R+E*E+C*C;if(M<ie&&M>G){const b=1/Math.sqrt(M);R*=b,E*=b,C*=b}}for(let M=0;M<s;++M)o[a]=R,o[a+1]=E,o[a+2]=C,a+=l}}function zs(t,e,r,i,a,s=1){if(!r)return void ii(t,e,i,a,s);const n=r,o=i.typedBuffer,l=i.typedBufferStride,c=t.length,d=n[0],f=n[1],g=n[2],m=n[4],v=n[5],T=n[6],w=n[8],W=n[9],V=n[10],H=!Sr(n),G=1e-6,ie=1-G;if(a*=l,s===1)for(let R=0;R<c;++R){const E=4*t[R],C=e[E],x=e[E+1],p=e[E+2],M=e[E+3];let b=d*C+m*x+w*p,j=f*C+v*x+W*p,oe=g*C+T*x+V*p;if(H){const ae=b*b+j*j+oe*oe;if(ae<ie&&ae>G){const ve=1/Math.sqrt(ae);b*=ve,j*=ve,oe*=ve}}o[a]=b,o[a+1]=j,o[a+2]=oe,o[a+3]=M,a+=l}else for(let R=0;R<c;++R){const E=4*t[R],C=e[E],x=e[E+1],p=e[E+2],M=e[E+3];let b=d*C+m*x+w*p,j=f*C+v*x+W*p,oe=g*C+T*x+V*p;if(H){const ae=b*b+j*j+oe*oe;if(ae<ie&&ae>G){const ve=1/Math.sqrt(ae);b*=ve,j*=ve,oe*=ve}}for(let ae=0;ae<s;++ae)o[a]=b,o[a+1]=j,o[a+2]=oe,o[a+3]=M,a+=l}}function Ns(t,e,r,i,a,s=1){const n=i.typedBuffer,o=i.typedBufferStride,l=t.length;if(a*=o,r!==e.length||r!==4)if(s!==1)if(r!==4)for(let c=0;c<l;++c){const d=3*t[c];for(let f=0;f<s;++f)n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=255,a+=o}else for(let c=0;c<l;++c){const d=4*t[c];for(let f=0;f<s;++f)n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=e[d+3],a+=o}else{if(r===4){for(let c=0;c<l;++c){const d=4*t[c];n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=e[d+3],a+=o}return}for(let c=0;c<l;++c){const d=3*t[c];n[a]=e[d],n[a+1]=e[d+1],n[a+2]=e[d+2],n[a+3]=255,a+=o}}else{n[a]=e[0],n[a+1]=e[1],n[a+2]=e[2],n[a+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),d=o/4,f=c[a/=4];a+=d;const g=l*s;for(let m=1;m<g;++m)c[a]=f,a+=d}}function Ds(t,e,r,i){const a=r.typedBuffer,s=r.typedBufferStride,n=t.length,o=e[0];i*=s;for(let l=0;l<n;++l)a[i]=o,i+=s}function Bs(t,e,r,i,a=1){const s=e.typedBuffer,n=e.typedBufferStride;if(i*=n,a===1)for(let o=0;o<r;++o)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n;else for(let o=0;o<r;++o)for(let l=0;l<a;++l)s[i]=t[0],s[i+1]=t[1],s[i+2]=t[2],s[i+3]=t[3],i+=n}function Hs(t,e,r,i,a,s){for(const n of e.fields.keys()){const o=t.vertexAttributes.get(n),l=t.indices.get(n);if(o&&l)Gs(n,o,l,r,i,a,s);else if(n===h.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const c=t.indices.get(h.POSITION);if(I(!!c,`No buffer view for ${n}`),c){const d=c.length,f=a.getField(n,Er);Bs(t.objectAndLayerIdColor,f,d,s)}}}}function Gs(t,e,r,i,a,s,n){switch(t){case h.POSITION:{I(e.size===3);const o=s.getField(t,qt);I(!!o,`No buffer view for ${t}`),o&&Ps(r,e.data,i,o,n);break}case h.NORMAL:{I(e.size===3);const o=s.getField(t,qt);I(!!o,`No buffer view for ${t}`),o&&Ls(r,e.data,a,o,n);break}case h.NORMALCOMPRESSED:{I(e.size===2);const o=s.getField(t,Xi);I(!!o,`No buffer view for ${t}`),o&&cr(r,e.data,o,n);break}case h.UV0:{I(e.size===2);const o=s.getField(t,Yi);I(!!o,`No buffer view for ${t}`),o&&cr(r,e.data,o,n);break}case h.COLOR:case h.SYMBOLCOLOR:{const o=s.getField(t,Er);I(!!o,`No buffer view for ${t}`),I(e.size===3||e.size===4),!o||e.size!==3&&e.size!==4||Ns(r,e.data,e.size,o,n);break}case h.COLORFEATUREATTRIBUTE:{const o=s.getField(t,ki);I(!!o,`No buffer view for ${t}`),I(e.size===1),o&&e.size===1&&Ds(r,e.data,o,n);break}case h.TANGENT:{I(e.size===4);const o=s.getField(t,Wt);I(!!o,`No buffer view for ${t}`),o&&zs(r,e.data,a,o,n);break}case h.PROFILERIGHT:case h.PROFILEUP:case h.PROFILEVERTEXANDNORMAL:case h.FEATUREVALUE:{I(e.size===4);const o=s.getField(t,Wt);I(!!o,`No buffer view for ${t}`),o&&ii(r,e.data,o,n)}}}let nl=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,a,s){Hs(i,this.vertexBufferLayout,e,r,a,s)}};var X;function Us(t,e){switch(e.textureCoordinateType){case X.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case X.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(u`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case X.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:ut(e.textureCoordinateType);case X.None:return void t.vertex.code.add(u`void forwardTextureCoordinates() {}`);case X.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(X||(X={}));function Vs(t){t.fragment.code.add(u`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function js(t,e){switch(t.include(Us,e),e.textureCoordinateType){case X.Default:case X.Compressed:return void t.fragment.code.add(u`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case X.Atlas:return t.include(Vs),void t.fragment.code.add(u`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:ut(e.textureCoordinateType);case X.None:case X.COUNT:return}}let nt=class extends L{constructor(e,r){super(e,"sampler2D",_.Draw,(i,a,s)=>i.bindTexture(e,r(a,s)))}};var U;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(U||(U={}));function cl(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===U.Normal&&i&&t.include(js,e),e.pbrMode!==U.Schematic)if(e.pbrMode!==U.Disabled){if(e.pbrMode===U.Normal){r.code.add(u`vec3 mrr;
vec3 emission;
float occlusion;`);const a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===_.Pass?new ne("texMetallicRoughness",s=>s.textureMetallicRoughness):new nt("texMetallicRoughness",s=>s.textureMetallicRoughness)),r.code.add(u`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===_.Pass?new ne("texEmission",s=>s.textureEmissive):new nt("texEmission",s=>s.textureEmissive)),r.code.add(u`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===_.Pass?new ne("texOcclusion",s=>s.textureOcclusion):new nt("texOcclusion",s=>s.textureOcclusion)),r.code.add(u`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(u`float getBakedOcclusion() { return 1.0; }`),a===_.Pass?r.uniforms.add(new B("emissionFactor",s=>s.emissiveFactor),new B("mrrFactors",s=>s.mrrFactors)):r.uniforms.add(new fe("emissionFactor",s=>s.emissiveFactor),new fe("mrrFactors",s=>s.mrrFactors)),r.code.add(u`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?u`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?u`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?u`applyEmission(${e.hasEmissiveTextureTransform?u`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?u`applyOcclusion(${e.hasOcclusionTextureTransform?u`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(u`float getBakedOcclusion() { return 1.0; }`);else r.code.add(u`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}let Ws=class extends L{constructor(e,r){super(e,"int",_.Pass,(i,a,s)=>i.setUniform1i(e,r(a,s)))}},qs=class extends L{constructor(e,r,i){super(e,"mat4",_.Draw,(a,s,n,o)=>a.setUniformMatrix4fv(e,r(s,n,o)),i)}},ks=class extends L{constructor(e,r,i){super(e,"mat4",_.Pass,(a,s,n)=>a.setUniformMatrix4fv(e,r(s,n)),i)}};function fl(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ks("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ai(t))}function ml(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new qs("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ai(t))}function ai(t){const e=t.fragment;e.include(Ot),e.uniforms.add(new ne("shadowMapTex",(r,i)=>i.shadowMap.depthTexture),new Ws("numCascades",(r,i)=>i.shadowMap.numCascades),new K("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)),e.code.add(u`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}function pl(t){kr(t),t.vertex.code.add(u`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(u`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Ys=xr(1,1,0,1),Xs=xr(1,0,1,1);function gl(t){t.fragment.uniforms.add(new ne("depthTexture",(e,r)=>r.highlightDepthTexture)),t.fragment.constants.add("occludedHighlightFlag","vec4",Ys).add("unoccludedHighlightFlag","vec4",Xs),t.fragment.code.add(u`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function vl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new B("lightingAmbientSH0",(a,s)=>D(ur,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new K("lightingAmbientSH_R",(a,s)=>Z(le,s.lighting.sh.r[0],s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3])),new K("lightingAmbientSH_G",(a,s)=>Z(le,s.lighting.sh.g[0],s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3])),new K("lightingAmbientSH_B",(a,s)=>Z(le,s.lighting.sh.b[0],s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add(new B("lightingAmbientSH0",(a,s)=>D(ur,s.lighting.sh.r[0],s.lighting.sh.g[0],s.lighting.sh.b[0])),new K("lightingAmbientSH_R1",(a,s)=>Z(le,s.lighting.sh.r[1],s.lighting.sh.r[2],s.lighting.sh.r[3],s.lighting.sh.r[4])),new K("lightingAmbientSH_G1",(a,s)=>Z(le,s.lighting.sh.g[1],s.lighting.sh.g[2],s.lighting.sh.g[3],s.lighting.sh.g[4])),new K("lightingAmbientSH_B1",(a,s)=>Z(le,s.lighting.sh.b[1],s.lighting.sh.b[2],s.lighting.sh.b[3],s.lighting.sh.b[4])),new K("lightingAmbientSH_R2",(a,s)=>Z(le,s.lighting.sh.r[5],s.lighting.sh.r[6],s.lighting.sh.r[7],s.lighting.sh.r[8])),new K("lightingAmbientSH_G2",(a,s)=>Z(le,s.lighting.sh.g[5],s.lighting.sh.g[6],s.lighting.sh.g[7],s.lighting.sh.g[8])),new K("lightingAmbientSH_B2",(a,s)=>Z(le,s.lighting.sh.b[5],s.lighting.sh.b[6],s.lighting.sh.b[7],s.lighting.sh.b[8]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic||r.code.add(u`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ur=y(),le=yt();function Js(t){t.uniforms.add(new B("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Zs(t){t.uniforms.add(new B("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function _l(t){Js(t.fragment),Zs(t.fragment),t.fragment.code.add(u`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ks(t){const e=t.fragment.code;e.add(u`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(u`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(u`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Tl(t,e){const r=t.fragment.code;t.include(Kr),e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic&&e.pbrMode!==U.Terrain&&e.pbrMode!==U.TerrainWithWater||(r.add(u`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(u`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic||(t.include(Ks),r.add(u`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(u`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(u`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(u`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Sl(t,e){const r=t.fragment.code;t.include(Kr),r.add(u`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(u`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(u`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(u`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(u`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}class xl extends L{constructor(e,r){super(e,"bool",_.Pass,(i,a,s)=>i.setUniform1b(e,r(a,s)))}}let Qs=class extends L{constructor(e,r){super(e,"vec2",_.Draw,(i,a,s,n)=>i.setUniform2fv(e,r(a,s,n)))}};const vt=4;function en(){const t=new Nr,e=t.fragment;t.include(Br);const r=(vt+1)/2,i=1/(2*r*r);return e.include(Pt),e.uniforms.add(new ne("depthMap",a=>a.depthTexture),new nt("tex",a=>a.colorTexture),new Qs("blurSize",a=>a.blurSize),new We("projScale",(a,s)=>{const n=Pi(s.camera.eye,s.camera.center);return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale}),new he("nearFar",(a,s)=>s.camera.nearFar)),e.code.add(u`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${u.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(u`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${u.int(vt)}; r <= ${u.int(vt)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),t}const tn=Object.freeze(Object.defineProperty({__proto__:null,build:en},Symbol.toStringTag,{value:"Module"}));let si=class ni extends Fr{initializeProgram(e){return new Or(e.rctx,ni.shader.get().build(),It)}initializePipeline(){return br({colorWrite:Ar})}};si.shader=new $r(tn,()=>At(()=>import("./SSAOBlur.glsl-320a1378.js"),["./SSAOBlur.glsl-320a1378.js","./index-a8f4225e.js","..\\index-add6cbc1.css","./requestImageUtils-7edf61d7.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-b4fe8989.js","./Indices-8f34c7cb.js","./triangle-0b744f47.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-4b7d3461.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-54df3f23.js","./OrderIndependentTransparency-b8ef1857.js"],import.meta.url));const rn="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM",dr=16;function an(){const t=new Nr,e=t.fragment;return t.include(Br),e.include(Pt),t.include(Ra),e.uniforms.add(new We("radius",(r,i)=>Nt(i.camera))),e.code.add(u`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(u`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new he("nearFar",(r,i)=>i.camera.nearFar),new ne("normalMap",r=>r.normalTexture),new ne("depthMap",r=>r.depthTexture),new he("zScale",(r,i)=>Pr(i)),new We("projScale",r=>r.projScale),new ne("rnm",r=>r.noiseTexture),new he("rnmScale",(r,i)=>$e(hr,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new We("intensity",r=>r.intensity),new he("screenSize",(r,i)=>$e(hr,i.camera.fullWidth,i.camera.fullHeight))),e.code.add(u`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.int(dr)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.int(dr)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),t}function Nt(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const hr=Rt(),sn=Object.freeze(Object.defineProperty({__proto__:null,build:an,getRadius:Nt},Symbol.toStringTag,{value:"Module"}));class ht extends Fr{initializeProgram(e){return new Or(e.rctx,ht.shader.get().build(),It)}initializePipeline(){return br({colorWrite:Ar})}}ht.shader=new $r(sn,()=>At(()=>import("./SSAO.glsl-c878a523.js"),["./SSAO.glsl-c878a523.js","./index-a8f4225e.js","..\\index-add6cbc1.css","./requestImageUtils-7edf61d7.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-b4fe8989.js","./Indices-8f34c7cb.js","./triangle-0b744f47.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-4b7d3461.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-54df3f23.js","./OrderIndependentTransparency-b8ef1857.js"],import.meta.url));class nn extends Fe{constructor(){super(...arguments),this.projScale=1}}let on=class extends nn{constructor(){super(...arguments),this.intensity=1}};class ln extends Fe{}let cn=class extends ln{constructor(){super(...arguments),this.blurSize=Rt()}};const rt=2;class yl{constructor(e,r,i,a){this._view=e,this._techniqueRepository=r,this._rctx=i,this._requestRender=a,this._quadVAO=null,this._passParameters=new on,this._drawParameters=new cn}dispose(){this.enabled=!1,this._quadVAO=Ae(this._quadVAO)}destroy(){this.dispose()}disposeOffscreenBuffers(){var e,r;(e=this._ssaoFBO)==null||e.resize(0,0),(r=this._blurFBO)==null||r.resize(0,0)}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enableTime!=null}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){var e;return(e=this._ssaoFBO)==null?void 0:e.colorTexture}render(e,r,i,a){if(this._enableTime==null||i==null||a==null||this._ssaoFBO==null||this._blurFBO==null)return;if(!this.active)return this._enableTime=r,void this._requestRender();this._enableTime===0&&(this._enableTime=r);const s=this._rctx,n=e.camera,o=this._view.qualitySettings.fadeDuration,l=o>0?Math.min(o,r-this._enableTime)/o:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*un/Nt(n)**6*l;const c=n.fullViewport,d=c[2],f=c[3],g=d/rt,m=f/rt;this._ssaoFBO.resize(d,f),this._blurFBO.resize(g,m),this._quadVAO==null&&(this._quadVAO=za(this._rctx)),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,d,f),s.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),s.bindVAO(this._quadVAO);const v=Vi(this._quadVAO,"geometry");s.drawArrays(at.TRIANGLE_STRIP,0,v);const T=s.bindTechnique(this._blurTechnique,this._passParameters,e);s.setViewport(0,0,g,m),s.bindFramebuffer(this._blurFBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,$e(this._drawParameters.blurSize,0,rt/f),T.bindDraw(this._drawParameters,e,this._passParameters),s.setViewport(0,0,g,m),s.drawArrays(at.TRIANGLE_STRIP,0,v),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,d,f),s.setClearColor(1,1,1,0),s.clear(Hi.COLOR_BUFFER_BIT),s.setViewport(0,0,g,m),this._drawParameters.colorTexture=this._blurFBO.colorTexture,$e(this._drawParameters.blurSize,rt/d,0),T.bindDraw(this._drawParameters,e,this._passParameters),s.drawArrays(at.TRIANGLE_STRIP,0,v),s.setViewport(c[0],c[1],c[2],c[3]),l<1&&this._requestRender()}_enable(){if(this._enableTime!=null)return;const e=new $t;e.wrapMode=Ve.CLAMP_TO_EDGE,this._ssaoFBO=new kt(this._rctx,e),this._blurFBO=new kt(this._rctx,e);const r=Uint8Array.from(atob(rn),i=>i.charCodeAt(0));e.pixelFormat=Ee.RGB,e.wrapMode=Ve.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new ye(this._rctx,e,r),this._ssaoTechnique==null&&(this._ssaoTechnique=this._techniqueRepository.acquire(ht)),this._blurTechnique==null&&(this._blurTechnique=this._techniqueRepository.acquire(si)),this._enableTime=Li(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=Ae(this._passParameters.noiseTexture),this._blurFBO=Ae(this._blurFBO),this._ssaoFBO=Ae(this._ssaoFBO)}get gpuMemoryUsage(){var e,r;return(((e=this._blurFBO)==null?void 0:e.gpuMemoryUsage)??0)+(((r=this._ssaoFBO)==null?void 0:r.gpuMemoryUsage)??0)}}const un=.5;function Rl(t,e=!1){return t<=wt?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function Il(t){return(vr(t)?t.length:t.byteLength/8)<=wt?Array.from(t):new Float32Array(t)}function wl(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}export{nl as $,Oo as A,Ot as B,Bo as C,Io as D,Zt as E,Ao as F,k as G,Do as H,No as I,gl as J,Ne as K,Da as L,Ps as M,Ns as N,Ls as O,bo as P,ii as Q,sl as R,Bs as S,pl as T,wo as U,hs as V,sr as W,Po as X,Uo as Y,Wo as Z,jo as _,Pt as a,wl as a$,go as a0,Ho as a1,Hs as a2,cs as a3,fe as a4,Ws as a5,zt as a6,Us as a7,Os as a8,el as a9,ea as aA,N as aB,_s as aC,kr as aD,Go as aE,ko as aF,Vo as aG,qo as aH,Ha as aI,Qo as aJ,Lo as aK,L as aL,Sl as aM,yl as aN,Wn as aO,Ss as aP,xt as aQ,Xn as aR,Ga as aS,Il as aT,po as aU,uo as aV,ho as aW,fo as aX,oo as aY,An as aZ,mo as a_,Y as aa,X as ab,js as ac,_ as ad,nt as ae,rt as af,Fs as ag,U as ah,Tl as ai,vl as aj,Kr as ak,Js as al,Zs as am,_l as an,ls as ao,Eo as ap,fl as aq,ml as ar,cl as as,il as at,tl as au,Kn as av,eo as aw,Rl as ax,Ki as ay,Qi as az,B as b,pt as b0,vs as b1,Gs as b2,en as c,an as d,K as e,Mo as f,he as g,qe as h,Nr as i,Fr as j,Or as k,$r as l,Nt as m,Ra as n,We as o,Le as p,Na as q,ya as r,ne as s,to as t,Br as u,za as v,yn as w,xl as x,$o as y,Fo as z};
