import{gc as N,a8 as S,A,gd as G,bl as O,cW as B,ge as R,gf as j}from"./index-95bf5a29.js";import{L as q}from"./quantizationUtils-4ec8ebe9.js";import{c as g,z as Y,m as _,f as k,d as L,g as U,x as W,F as Z,D as H,S as J,M as K}from"./utils-9ca683a0.js";let v=null;function Q(e,a,o){return e.x<0?e.x+=a:e.x>o&&(e.x-=a),e}function X(e,a,o,l){const n=N(o)?S(o):null,s=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return e.map(t=>{const i=new A(t.geometry);return q(a,i,i,i.hasZ,i.hasM),t.geometry=n?Q(i,s??0,l[0]):i,t})}function aa(e,a=18,o,l,n,s){const t=new Float64Array(n*s);a=Math.round(B(a));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,c=0;const z=R(l,o);for(const{geometry:T,attributes:y}of e){const{x:p,y:u}=T,x=Math.max(0,p-a),F=Math.max(0,u-a),E=Math.min(s,u+a),D=Math.min(n,p+a),b=+z(y);for(let $=F;$<E;$++)for(let h=x;h<D;h++){const M=$*n+h,P=j(h-p,$-u,a),C=t[M];m=t[M]+=P*b;const V=m-C;f+=V,d+=V*V,m<i&&(i=m),m>r&&(r=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const I=(r-i)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:i,max:r,mid:I,count:c}}async function w(e,a){if(!a)return[];const{field:o,field2:l,field3:n,fieldDelimiter:s}=e,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,m=e.normalizationTotal,f=[],d=e.viewInfoParams;let c=null,z=null;if(t){if(!v){const{arcadeUtils:y}=await G();v=y}v.hasGeometryOperations(t)&&await v.enableGeometryOperations(),c=v.createFunction(t),z=d&&v.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new O(d.spatialReference)})}const I=e.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&I?{fields:I}:null;return a.forEach(y=>{const p=y.attributes;let u;if(t){const x=T?{...y,layer:T}:y,F=v.createExecContext(x,z);u=v.executeFunction(c,F)}else p&&(u=p[o],l&&(u=`${g(u)}${s}${g(p[l])}`,n&&(u=`${u}${s}${g(p[n])}`)));if(i&&typeof u=="number"&&isFinite(u)){const x=p&&parseFloat(p[r]);u=Y(u,i,x,m)}f.push(u)}),f}async function ta(e){const{attribute:a,features:o}=e,{normalizationType:l,normalizationField:n,minValue:s,maxValue:t,fieldType:i}=a,r=await w({field:a.field,valueExpression:a.valueExpression,normalizationType:l,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=_({normalizationType:l,normalizationField:n,minValue:s,maxValue:t}),f={value:.5,fieldType:i},d=i==="esriFieldTypeString"?k({values:r,supportsNullCount:m,percentileParams:f}):L({values:r,minValue:s,maxValue:t,useSampleStdDev:!l,supportsNullCount:m,percentileParams:f});return U(d,i==="esriFieldTypeDate")}async function la(e){const{attribute:a,features:o}=e,l=await w({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),n=W(l);return Z(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function oa(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=H(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return J(m,i)}async function sa(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o);return K(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ra(e){const{attribute:a,features:o}=e,{field:l,radius:n,fieldOffset:s,transform:t,spatialReference:i}=a,r=a.size??[0,0],m=X(o??[],t,i,r),{count:f,min:d,max:c,mean:z,stdDev:I}=aa(m,n??void 0,s,l,r[0],r[1]);return{count:f,min:d,max:c,avg:z,stddev:I}}export{oa as classBreaks,ra as heatmapStatistics,sa as histogram,ta as summaryStatistics,la as uniqueValues};