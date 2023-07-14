import{iE as d,hb as p,fp as ze,ma as gt,mb as Re,d5 as mt,ar as je,dn as kt,lH as Ve,a as h,mc as Ot,bK as Je,bu as Qt,fo as H,fP as K,bO as et,cY as fe,he as G,md as Yt,me as Zt,fz as Kt,fD as W,cZ as ne,f_ as Le,bM as Jt,jk as Ee,mf as tt,aa as St,f$ as le,mg as eo,D as to,bj as _,iG as oo,bR as Pt,bQ as xt,bG as io,hv as ro,hm as ot,kk as ao,z as bt,cW as yt,hf as Oe,mh as so,s as no,hk as de,mi as N,mj as it,mk as lo,g2 as be,ml as co,mm as po,mn as uo,mo as ee}from"./index-58dffe5f.js";import{x as fo,i as ho,u as vo}from"./BufferView-149b2b53.js";import{w as go,x as mo,y as Me,f as Oo,e as X,o as k,s as Ne,z as So,A as Ct,a as Po,g as De,B as At,i as Ue,P as He,C as Tt,D as wt,F as _t,G as g,H as ce,I as rt,J as Fe,l as Be,j as Ge,k as We,p as v,K as qe,E as L,L as xo,M as bo,O as yo,N as Co,Q as at,R as st,S as Ao,T as $t,U as To,V as wo,W as _o,X as $o,Y as zt,Z as Et,_ as Dt,$ as It,t as Rt,a0 as zo,a1 as Eo,a2 as Do}from"./FloatArray-5e28d801.js";import{H as jt}from"./InterleavedLayout-3036b497.js";import{c as Vt,f as Io,i as Lt,t as Ro,r as jo,l as Vo,e as Mt}from"./VertexColor.glsl-c35ba036.js";import{o as Lo}from"./floatRGBA-7b1ee351.js";import{D as nt,R as te,I as Mo,E as Ie}from"./enums-b14466b3.js";import{k as No,m as Uo,q as Ho,r as Fo,v as Bo,I as Go}from"./line-0b3e9bc3.js";import{o as F,a as Wo,b as he,W as Xe,A as Nt,_ as ke,c as qo,h as Xo,l as ko,d as Qo,S as Yo,e as Zo}from"./OrderIndependentTransparency-2a607a9a.js";import{n as Qe}from"./basicInterfaces-bb952591.js";import{l as ue}from"./Octree-781b91f3.js";const Ye=128,Ut=.5;function Ki(t,e=Ye,o=e*Ut,i=0){const r=Ko(t,e,o,i);return new go(r,{mipmap:!1,wrap:{s:nt.CLAMP_TO_EDGE,t:nt.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0})}function Ko(t,e=Ye,o=e*Ut,i=0){switch(t){case"circle":default:return Jo(e,o);case"square":return ei(e,o);case"cross":return oi(e,o,i);case"x":return ii(e,o,i);case"kite":return ti(e,o);case"triangle":return ri(e,o);case"arrow":return ai(e,o)}}function Jo(t,e){const o=t/2-.5;return pe(t,Bt(o,o,e/2))}function ei(t,e){return Ht(t,e,!1)}function ti(t,e){return Ht(t,e,!0)}function oi(t,e,o=0){return Ft(t,e,!1,o)}function ii(t,e,o=0){return Ft(t,e,!0,o)}function ri(t,e){return pe(t,Gt(t/2,e,e/2))}function ai(t,e){const o=e,i=e/2,r=t/2,a=.8*o,c=Bt(r,(t-e)/2-a,Math.sqrt(a*a+i*i)),s=Gt(r,o,i);return pe(t,(n,l)=>Math.max(s(n,l),-c(n,l)))}function Ht(t,e,o){return o&&(e/=Math.SQRT2),pe(t,(i,r)=>{let a=i-.5*t+.25,c=.5*t-r-.75;if(o){const s=(a+c)/Math.SQRT2;c=(c-a)/Math.SQRT2,a=s}return Math.max(Math.abs(a),Math.abs(c))-.5*e})}function Ft(t,e,o,i=0){e-=i,o&&(e*=Math.SQRT2);const r=.5*e;return pe(t,(a,c)=>{let s,n=a-.5*t,l=.5*t-c-1;if(o){const u=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=u}return n=Math.abs(n),l=Math.abs(l),s=n>l?n>r?Math.sqrt((n-r)*(n-r)+l*l):l:l>r?Math.sqrt(n*n+(l-r)*(l-r)):n,s-=i/2,s})}function Bt(t,e,o){return(i,r)=>{const a=i-t,c=r-e;return Math.sqrt(a*a+c*c)-o}}function Gt(t,e,o){const i=Math.sqrt(e*e+o*o);return(r,a)=>{const c=Math.abs(r-t)-o,s=a-t+e/2+.75,n=(e*c+o*s)/i,l=-s;return Math.max(n,l)}}function pe(t,e){const o=new Uint8Array(4*t*t);for(let i=0;i<t;i++)for(let r=0;r<t;r++){const a=r+t*i;let c=e(r,i);c=c/t+.5,Lo(c,o,4*a)}return o}function si(t){return t instanceof Float32Array&&t.length>=16}function ni(t){return Array.isArray(t)&&t.length>=16}function li(t){return si(t)||ni(t)}function Ze(t){t.uniforms.add(new mo("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(d`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(d`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ve;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(ve||(ve={}));var M;function ci(t,e){t.include(Vt),t.attributes.add(p.POSITION,"vec3"),t.attributes.add(p.NORMAL,"vec3"),t.attributes.add(p.AUXPOS1,"vec4");const o=t.vertex;Me(o,e),Oo(o,e),o.uniforms.add(new X("viewport",(i,r)=>r.camera.fullViewport),new k("polygonOffset",i=>i.shaderPolygonOffset),new k("cameraGroundRelative",(i,r)=>r.camera.aboveGround?1:-1),new k("renderTransparentlyOccludedHUD",(i,r)=>r.renderTransparentlyOccludedHUD===ve.Occluded?1:r.renderTransparentlyOccludedHUD===ve.NotOccluded?0:.75),new Ne("hudVisibilityTexture",(i,r)=>r.hudVisibilityTexture)),e.hasVerticalOffset&&Io(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(d`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(d`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.draped&&!e.hasVerticalOffset||So(o),e.draped||(o.uniforms.add(new k("perDistancePixelRatio",(i,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),o.code.add(d`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),e.screenCenterOffsetUnitsEnabled===M.Screen&&Ct(o,e),e.hasScreenSizePerspective&&Lt(o),o.code.add(d`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled===M.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?d`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled!==M.Screen?d`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled===M.Screen?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled===M.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),o.include(Ze),o.code.add(d`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}(function(t){t[t.World=0]="World",t[t.Screen=1]="Screen",t[t.COUNT=2]="COUNT"})(M||(M={}));class pi{constructor(){this.factor=new lt,this.factorAlignment=new lt}}class lt{constructor(){this.scale=0,this.factor=0,this.minPixelSize=0,this.paddingPixels=0}}function di(t,e){const{vertex:o,fragment:i}=t;o.include(Ze),e.hasMultipassGeometry&&o.include(No),e.hasMultipassTerrain&&t.varyings.add("depth","float"),o.code.add(d`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.hasMultipassGeometry?d`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.hasMultipassTerrain&&i.include(Po),e.hasMultipassTerrain&&i.uniforms.add(new Ne("terrainDepthTexture",(r,a)=>a.multipassTerrain.linearDepthTexture),new De("nearFar",(r,a)=>a.camera.nearFar)),i.include(At),i.code.add(d`
  void main() {
    fragColor = vec4(1);
    ${e.hasMultipassTerrain?d`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)}function ui(t){const e=new Ue,o=t.signedDistanceFieldEnabled;if(e.include(ci,t),e.include(He,t),t.occlusionPass)return e.include(di,t),e;const{vertex:i,fragment:r}=e;e.include(Vt),r.include(At),r.include(Tt),e.include(wt,t),e.include(_t,t),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),t.binaryHighlightOcclusionEnabled&&e.varyings.add("voccluded","float"),i.uniforms.add(new X("viewport",(l,u)=>u.camera.fullViewport),new De("screenOffset",(l,u)=>ze(Wt,2*l.screenOffset[0]*u.camera.pixelRatio,2*l.screenOffset[1]*u.camera.pixelRatio)),new De("anchorPosition",l=>ge(l)),new X("materialColor",l=>l.color)),Ct(i,t),o&&(i.uniforms.add(new X("outlineColor",l=>l.outlineColor)),r.uniforms.add(new X("outlineColor",l=>ct(l)?l.outlineColor:gt),new k("outlineSize",l=>ct(l)?l.outlineSize:0))),t.hasScreenSizePerspective&&(Ro(i),Lt(i)),(t.debugDrawLabelBorder||t.binaryHighlightOcclusionEnabled)&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(p.UV0,"vec2"),e.attributes.add(p.COLOR,"vec4"),e.attributes.add(p.SIZE,"vec2"),e.attributes.add(p.AUXPOS2,"vec4"),i.code.add(d`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?d`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:d`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${t.occlusionTestEnabled||t.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${t.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const a=d`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;t.pixelSnappingEnabled&&i.include(Ze);const c=t.pixelSnappingEnabled?o?d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:d`posProj += quadOffset;`;i.code.add(d`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${a}
    ${t.vvColor?"vcolor = interpolateVVColor(auxpos2.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===g.ObjectAndLayerIdColor?d`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${d.float(ce)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${d.float(ce)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${c}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?d`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),r.uniforms.add(new Ne("tex",l=>l.texture));const s=t.debugDrawLabelBorder?d`(isBorder > 0.0 ? 0.0 : ${d.float(rt)})`:d.float(rt),n=d`
    ${t.debugDrawLabelBorder?d`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${o?d`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${d.float(Ye)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${s} ||
          fillPixelColor.a + outlinePixelColor.a < ${d.float(ce)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${s}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:d`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${s}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?d`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return t.output===g.Alpha&&r.code.add(d`
      void main() {
        ${n}
        fragColor = vec4(fragColor.a);
      }
      `),t.output===g.ObjectAndLayerIdColor&&r.code.add(d`
      void main() {
        ${n}
        outputObjectAndLayerIdColor();
      }
      `),t.output===g.Color&&r.code.add(d`
    void main() {
      ${n}
      ${t.transparencyPassType===F.FrontFace?"fragColor.rgb /= fragColor.a;":""}
    }
    `),t.output===g.Highlight&&(e.include(Fe,t),r.code.add(d`
    void main() {
      ${n}
      ${t.binaryHighlightOcclusionEnabled?d`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),e}function ct(t){return t.outlineColor[3]>0&&t.outlineSize>0}function ge(t,e=Wt){return t.textureIsSignedDistanceField?fi(t.anchorPosition,t.distanceFieldBoundingBox,e):Re(e,t.anchorPosition),e}function fi(t,e,o){e!=null?ze(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):ze(o,0,0)}const Wt=mt(),hi=Object.freeze(Object.defineProperty({__proto__:null,build:ui,calculateAnchorPosForRendering:ge},Symbol.toStringTag,{value:"Module"}));class Se extends Ge{initializeConfiguration(e,o){o.spherical=e.viewingMode===kt.Global}initializeProgram(e){return new We(e.rctx,Se.shader.get().build(this.configuration),Ve)}_setPipelineState(e){const o=this.configuration,i=e===F.NONE,r=e===F.FrontFace,a=this.configuration.hasPolygonOffset?vi:null,c=(i||r)&&o.output!==g.Highlight&&(o.depthEnabled||o.occlusionPass)?he:null;return Xe({blending:o.output===g.Color||o.output===g.Alpha||o.output===g.Highlight?i?gi:Nt(e):null,depthTest:{func:Mo.LEQUAL},depthWrite:c,colorWrite:ke,polygonOffset:a})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.occlusionPass?Ie.POINTS:Ie.TRIANGLES}}Se.shader=new Be(hi,()=>je(()=>import("./HUDMaterial.glsl-0a4e8154.js"),["./HUDMaterial.glsl-0a4e8154.js","./index-58dffe5f.js","./index-274f3ef9.css","./floatRGBA-7b1ee351.js","./FloatArray-5e28d801.js","./requestImageUtils-40f5a86d.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-231b4e79.js","./Indices-01290aab.js","./triangle-767eef4b.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-149b2b53.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-abbfee00.js","./OrderIndependentTransparency-2a607a9a.js","./InterleavedLayout-3036b497.js","./types-1305598a.js","./VertexColor.glsl-c35ba036.js","./line-0b3e9bc3.js","./DoubleArray-1786b5b4.js","./hydratedFeatures-faa1dc69.js","./triangulationUtils-c53cfe6f.js","./earcut-5c03ea14.js","./deduplicate-a0d8b170.js","./NestedMap-1b5db22e.js","./Octree-781b91f3.js","./glUtil-0b7ee6ea.js"],import.meta.url));const vi={factor:0,units:-4},gi=Wo(te.ONE,te.ONE_MINUS_SRC_ALPHA);class y extends qe{constructor(){super(...arguments),this.output=g.Color,this.screenCenterOffsetUnitsEnabled=M.World,this.transparencyPassType=F.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}h([v({count:g.COUNT})],y.prototype,"output",void 0),h([v({count:M.COUNT})],y.prototype,"screenCenterOffsetUnitsEnabled",void 0),h([v({count:F.COUNT})],y.prototype,"transparencyPassType",void 0),h([v()],y.prototype,"spherical",void 0),h([v()],y.prototype,"occlusionTestEnabled",void 0),h([v()],y.prototype,"signedDistanceFieldEnabled",void 0),h([v()],y.prototype,"vvSize",void 0),h([v()],y.prototype,"vvColor",void 0),h([v()],y.prototype,"hasVerticalOffset",void 0),h([v()],y.prototype,"hasScreenSizePerspective",void 0),h([v()],y.prototype,"debugDrawLabelBorder",void 0),h([v()],y.prototype,"binaryHighlightOcclusionEnabled",void 0),h([v()],y.prototype,"hasSlicePlane",void 0),h([v()],y.prototype,"hasPolygonOffset",void 0),h([v()],y.prototype,"depthEnabled",void 0),h([v()],y.prototype,"pixelSnappingEnabled",void 0),h([v()],y.prototype,"draped",void 0),h([v()],y.prototype,"hasMultipassGeometry",void 0),h([v()],y.prototype,"hasMultipassTerrain",void 0),h([v()],y.prototype,"cullAboveGround",void 0),h([v()],y.prototype,"occlusionPass",void 0),h([v()],y.prototype,"objectAndLayerIdColorInstanced",void 0),h([v({constValue:!0})],y.prototype,"hasSliceInVertexProgram",void 0),h([v({constValue:!1})],y.prototype,"hasVvInstancing",void 0);let Ji=class extends Ot{constructor(e){super(e,new Ti),this._configuration=new y}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen"?M.Screen:M.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===L.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===g.Color||e===g.Alpha),e===g.Color&&(this._configuration.debugDrawLabelBorder=!!xo.LABELS_SHOW_BORDER),e===g.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.hasMultipassGeometry=o.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,i,r,a,c){if(!i.options.selectionMode||!i.options.hud||!e.visible)return;const s=this.parameters;let n=1,l=1;if(Je(Ce,o),e.shaderTransformer!=null){const b=e.shaderTransformer(ut);n=b[0],l=b[5],Si(Ce)}const u=e.vertexAttributes.get(p.POSITION),O=e.vertexAttributes.get(p.SIZE),f=e.vertexAttributes.get(p.NORMAL),S=e.vertexAttributes.get(p.AUXPOS1);Qt(u.size>=3);const P=i.point,m=i.camera,C=ge(s);n*=m.pixelRatio,l*=m.pixelRatio;const x=this.parameters.centerOffsetUnits==="screen";for(let b=0;b<u.data.length/u.size;b++){const $=b*u.size;H(w,u.data[$],u.data[$+1],u.data[$+2]),K(w,w,o);const T=b*O.size;q[0]=O.data[T]*n,q[1]=O.data[T+1]*l,K(w,w,m.viewMatrix);const I=b*S.size;if(H(j,S.data[I],S.data[I+1],S.data[I+2]),!x&&(w[0]+=j[0],w[1]+=j[1],j[2]!==0)){const J=j[2];et(j,w),fe(w,w,G(j,j,J))}const R=b*f.size;if(H(ae,f.data[R],f.data[R+1],f.data[R+2]),this._normalAndViewAngle(ae,Ce,m,Ae),this._applyVerticalOffsetTransformationView(w,Ae,m,ye),m.applyProjection(w,z),z[0]>-1){z[0]=Math.floor(z[0]),z[1]=Math.floor(z[1]),x&&(j[0]||j[1])&&(z[0]+=j[0],j[1]!==0&&(z[1]+=Yt(j[1],ye.factorAlignment)),m.unapplyProjection(z,w)),z[0]+=this.parameters.screenOffset[0],z[1]+=this.parameters.screenOffset[1],Zt(q,ye.factor,q);const J=yi*m.pixelRatio;let oe=0;if(s.textureIsSignedDistanceField&&(oe=s.outlineSize*m.pixelRatio/2),P&&pt(P,z[0],z[1],q,J,oe,s,C)){const ie=i.ray;if(K(dt,w,Kt(bi,m.viewMatrix)),z[0]=P[0],z[1]=P[1],m.unprojectFromRenderScreen(z,w)){const re=_();W(re,ie.direction);const Ke=1/ne(re);G(re,re,Ke),c(Le(ie.origin,w)*Ke,re,-1,!0,1,dt)}}}}}intersectDraped(e,o,i,r,a,c){const s=e.vertexAttributes.get(p.POSITION),n=e.vertexAttributes.get(p.SIZE),l=this.parameters,u=ge(l);let O=1,f=1;if(e.shaderTransformer!=null){const P=e.shaderTransformer(ut);O=P[0],f=P[5]}O*=e.screenToWorldRatio,f*=e.screenToWorldRatio;const S=Ci*e.screenToWorldRatio;for(let P=0;P<s.data.length/s.size;P++){const m=P*s.size,C=s.data[m],x=s.data[m+1],b=P*n.size;q[0]=n.data[b]*O,q[1]=n.data[b+1]*f;let $=0;l.textureIsSignedDistanceField&&($=l.outlineSize*e.screenToWorldRatio/2),pt(r,C,x,q,S,$,l,u)&&a(c.dist,c.normal,-1,!1)}}createBufferWriter(){return new _i(this)}_normalAndViewAngle(e,o,i,r){return li(o)&&(o=Je(xi,o)),Jt(r.normal,e,o),K(r.normal,r.normal,i.viewInverseTransposeMatrix),r.cosAngle=Ee(qt,Ai),r}_updateScaleInfo(e,o,i){const r=this.parameters;r.screenSizePerspective!=null?tt(i,o,r.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),r.screenSizePerspectiveAlignment!=null?tt(i,o,r.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,o,i,r,a,c,s){const n=this._normalAndViewAngle(o,i,a,Ae);return this._applyVerticalGroundOffsetView(e,n,a,s),this._applyVerticalOffsetTransformationView(s,n,a,c),this._applyPolygonOffsetView(s,n,r[3],a,s),this._applyCenterOffsetView(s,r,s),s}applyShaderOffsetsNDC(e,o,i,r,a){return this._applyCenterOffsetNDC(e,o,i,r),a!=null&&W(a,r),this._applyPolygonOffsetNDC(r,o,i,r),r}_applyPolygonOffsetView(e,o,i,r,a){const c=r.aboveGround?1:-1;let s=Math.sign(i);s===0&&(s=c);const n=c*s;if(this.parameters.shaderPolygonOffset<=0)return W(a,e);const l=St(Math.abs(o.cosAngle),.01,1),u=1-Math.sqrt(1-l*l)/l/r.viewport[2];return G(a,e,n>0?u:1/u),a}_applyVerticalGroundOffsetView(e,o,i,r){const a=ne(e),c=i.aboveGround?1:-1,s=.5*i.computeRenderPixelSizeAtDist(a),n=G(w,o.normal,c*s);return le(r,e,n),r}_applyVerticalOffsetTransformationView(e,o,i,r){const a=this.parameters;if(!a.verticalOffset||!a.verticalOffset.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const l=ne(e);this._updateScaleInfo(r,l,o.cosAngle)}else r.factor.scale=1,r.factorAlignment.scale=1;return e}const c=ne(e),s=a.screenSizePerspectiveAlignment??a.screenSizePerspective,n=eo(i,c,a.verticalOffset,o.cosAngle,s);return this._updateScaleInfo(r,c,o.cosAngle),G(o.normal,o.normal,n),le(e,e,o.normal)}_applyCenterOffsetView(e,o,i){const r=this.parameters.centerOffsetUnits!=="screen";return i!==e&&W(i,e),r&&(i[0]+=o[0],i[1]+=o[1],o[2]&&(et(ae,i),le(i,i,G(ae,ae,o[2])))),i}_applyCenterOffsetNDC(e,o,i,r){const a=this.parameters.centerOffsetUnits!=="screen";return r!==e&&W(r,e),a||(r[0]+=o[0]/i.fullWidth*2,r[1]+=o[1]/i.fullHeight*2),r}_applyPolygonOffsetNDC(e,o,i,r){const a=this.parameters.shaderPolygonOffset;if(e!==r&&W(r,e),a){const c=i.aboveGround?1:-1,s=c*Math.sign(o[3]);r[2]-=(s||c)*a}return r}requiresSlot(e,o){if(o===g.Color||o===g.Alpha||o===g.Highlight||o===g.ObjectAndLayerIdColor){if(e===L.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:i,occlusionTest:r}=this.parameters;return e===(i?L.LABEL_MATERIAL:L.HUD_MATERIAL)||r&&e===L.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new mi(e)}calculateRelativeScreenBounds(e,o,i=to()){return Oi(this.parameters,e,o,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}},mi=class extends jo{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(Se,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}};function Oi(t,e,o,i=Pi){return Re(i,t.anchorPosition),i[0]*=-e[0],i[1]*=-e[1],i[0]+=t.screenOffset[0]*o,i[1]+=t.screenOffset[1]*o,i}function Si(t){const e=t[0],o=t[1],i=t[2],r=t[3],a=t[4],c=t[5],s=t[6],n=t[7],l=t[8],u=1/Math.sqrt(e*e+o*o+i*i),O=1/Math.sqrt(r*r+a*a+c*c),f=1/Math.sqrt(s*s+n*n+l*l);return t[0]=e*u,t[1]=o*u,t[2]=i*u,t[3]=r*O,t[4]=a*O,t[5]=c*O,t[6]=s*f,t[7]=n*f,t[8]=l*f,t}function pt(t,e,o,i,r,a,c,s){let n=e-r-(s[0]>0?i[0]*s[0]:0),l=n+i[0]+2*r,u=o-r-(s[1]>0?i[1]*s[1]:0),O=u+i[1]+2*r;const f=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&f!=null&&(n+=i[0]*f[0],u+=i[1]*f[1],l-=i[0]*(1-f[2]),O-=i[1]*(1-f[3]),n-=a,l+=a,u-=a,O+=a),t[0]>n&&t[0]<l&&t[1]>u&&t[1]<O}const ye=new pi,Pi=mt(),w=_(),ae=_(),z=oo(),qt=_(),dt=_(),Ce=Pt(),xi=Pt(),bi=xt(),j=_(),Ae={normal:qt,cosAngle:0},ut=xt(),yi=1,Ci=2,q=[0,0],Ai=io(0,0,1);class Ti extends Vo{constructor(){super(...arguments),this.renderOccluded=ro.Occlude,this.color=ot(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=ao(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=ot(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const Xt=jt().vec3f(p.POSITION).vec3f(p.NORMAL).vec2f(p.UV0).vec4u8(p.COLOR).vec2f(p.SIZE).vec4f(p.AUXPOS1).vec4f(p.AUXPOS2),wi=Xt.clone().vec4u8(p.OBJECTANDLAYERIDCOLOR);class _i{constructor(e){this._material=e,this.vertexBufferLayout=bt("enable-feature:objectAndLayerId-rendering")?wi:Xt}elementCount(e){return 6*e.indices.get(p.POSITION).length}write(e,o,i,r,a){bo(i.indices.get(p.POSITION),i.vertexAttributes.get(p.POSITION).data,e,r.position,a,6),yo(i.indices.get(p.NORMAL),i.vertexAttributes.get(p.NORMAL).data,o,r.normal,a,6);const c=i.vertexAttributes.get(p.UV0).data;let s,n,l,u;if(c==null||c.length<4){const x=this._material.parameters;s=0,n=0,l=x.texCoordScale[0],u=x.texCoordScale[1]}else s=c[0],n=c[1],l=c[2],u=c[3];l=Math.min(1.99999,l+1),u=Math.min(1.99999,u+1);let O=i.indices.get(p.POSITION).length,f=a;const S=r.uv0;for(let x=0;x<O;++x)S.set(f,0,s),S.set(f,1,n),f+=1,S.set(f,0,l),S.set(f,1,n),f+=1,S.set(f,0,l),S.set(f,1,u),f+=1,S.set(f,0,l),S.set(f,1,u),f+=1,S.set(f,0,s),S.set(f,1,u),f+=1,S.set(f,0,s),S.set(f,1,n),f+=1;Co(i.indices.get(p.COLOR),i.vertexAttributes.get(p.COLOR).data,4,r.color,a,6);const P=i.indices.get(p.SIZE),m=i.vertexAttributes.get(p.SIZE).data;O=P.length;const C=r.size;f=a;for(let x=0;x<O;++x){const b=m[2*P[x]],$=m[2*P[x]+1];for(let T=0;T<6;++T)C.set(f,0,b),C.set(f,1,$),f+=1}if(i.indices.get(p.AUXPOS1)&&i.vertexAttributes.get(p.AUXPOS1)?at(i.indices.get(p.AUXPOS1),i.vertexAttributes.get(p.AUXPOS1).data,r.auxpos1,a,6):st(r.auxpos1,a,6*O),i.indices.get(p.AUXPOS2)&&i.vertexAttributes.get(p.AUXPOS2)?at(i.indices.get(p.AUXPOS2),i.vertexAttributes.get(p.AUXPOS2).data,r.auxpos2,a,6):st(r.auxpos2,a,6*O),i.objectAndLayerIdColor!=null&&i.indices.get(p.POSITION)){const x=i.indices.get(p.POSITION).length,b=r.getField(p.OBJECTANDLAYERIDCOLOR,fo);Ao(i.objectAndLayerIdColor,b,x,a,6)}}}function $i(t){const e=new Ue,{vertex:o,fragment:i,attributes:r,varyings:a}=e;Me(o,t),e.include($t,t),e.include(Mt,t),e.include(wt,t),e.include(_t,t),r.add(p.POSITION,"vec3"),t.vvColor&&r.add(p.COLORFEATUREATTRIBUTE,"float"),a.add("vColor","vec4"),a.add("vpos","vec3");const c=t.hasMultipassTerrain&&(t.output===g.Color||t.output===g.Alpha);c&&a.add("depth","float"),o.uniforms.add(new X("eColor",l=>l.color));const s=t.output===g.Depth;s&&(e.include(To,t),wo(e),_o(e)),o.code.add(d`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${c?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${s?d`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:d`transformPosition(proj, view, vpos);`}
    }
  `),e.include(He,t),c&&e.include($o,t),i.include(Tt);const n=t.output===g.Highlight;return n&&e.include(Fe,t),i.code.add(d`
  void main() {
    discardBySlice(vpos);
    ${c?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = vColor;

    ${t.output===g.ObjectAndLayerIdColor?d`fColor.a = 1.0;`:""}

    if (fColor.a < ${d.float(ce)}) {
      discard;
    }

    ${t.output===g.Alpha?d`fragColor = vec4(fColor.a);`:""}

    ${t.output===g.Color?d`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===F.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${n?d`outputHighlight();`:""};
    ${t.output===g.Depth?d`outputDepth(linearDepth);`:""};
    ${t.output===g.ObjectAndLayerIdColor?d`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const zi=Object.freeze(Object.defineProperty({__proto__:null,build:$i},Symbol.toStringTag,{value:"Module"}));class Pe extends Ge{initializeProgram(e){return new We(e.rctx,Pe.shader.get().build(this.configuration),Ve)}_createPipeline(e,o){const i=this.configuration,r=e===F.NONE,a=e===F.FrontFace;return Xe({blending:i.output!==g.Color&&i.output!==g.Alpha||!i.transparent?null:r?qo:Nt(e),culling:Xo(i.cullFace),depthTest:{func:ko(e)},depthWrite:(r||a)&&i.writeDepth?he:null,colorWrite:ke,stencilWrite:i.hasOccludees?zt:null,stencilTest:i.hasOccludees?o?Et:Dt:null,polygonOffset:r||a?i.polygonOffset?Ei:null:Qo(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,o){return o?this._occludeePipelineState:super.getPipelineState(e,o)}}Pe.shader=new Be(zi,()=>je(()=>import("./ColorMaterial.glsl-191f4ced.js"),["./ColorMaterial.glsl-191f4ced.js","./FloatArray-5e28d801.js","./index-58dffe5f.js","./index-274f3ef9.css","./requestImageUtils-40f5a86d.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-231b4e79.js","./Indices-01290aab.js","./triangle-767eef4b.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-149b2b53.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-abbfee00.js","./OrderIndependentTransparency-2a607a9a.js","./InterleavedLayout-3036b497.js","./types-1305598a.js","./VertexColor.glsl-c35ba036.js","./floatRGBA-7b1ee351.js","./line-0b3e9bc3.js","./DoubleArray-1786b5b4.js","./hydratedFeatures-faa1dc69.js","./triangulationUtils-c53cfe6f.js","./earcut-5c03ea14.js","./deduplicate-a0d8b170.js","./NestedMap-1b5db22e.js","./Octree-781b91f3.js","./glUtil-0b7ee6ea.js"],import.meta.url));const Ei={factor:1,units:1};class A extends qe{constructor(){super(...arguments),this.output=g.Color,this.cullFace=Qe.None,this.transparencyPassType=F.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1}}h([v({count:g.COUNT})],A.prototype,"output",void 0),h([v({count:Qe.COUNT})],A.prototype,"cullFace",void 0),h([v({count:F.COUNT})],A.prototype,"transparencyPassType",void 0),h([v()],A.prototype,"hasSlicePlane",void 0),h([v()],A.prototype,"hasVertexColors",void 0),h([v()],A.prototype,"transparent",void 0),h([v()],A.prototype,"polygonOffset",void 0),h([v()],A.prototype,"enableOffset",void 0),h([v()],A.prototype,"writeDepth",void 0),h([v()],A.prototype,"hasOccludees",void 0),h([v()],A.prototype,"hasMultipassTerrain",void 0),h([v()],A.prototype,"cullAboveGround",void 0),h([v()],A.prototype,"objectAndLayerIdColorInstanced",void 0),h([v()],A.prototype,"vvColor",void 0),h([v({constValue:!0})],A.prototype,"hasVvInstancing",void 0),h([v({constValue:!1})],A.prototype,"vvSize",void 0),h([v({constValue:!1})],A.prototype,"vvOpacity",void 0);class or extends Uo{constructor(e){super(e,new Ii),this.supportsEdges=!0,this._configuration=new A}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Yo,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration}requiresSlot(e,o){return o===g.Color||o===g.Alpha||o===g.Highlight||o===g.Depth&&this.parameters.writeLinearDepth||o===g.ObjectAndLayerIdColor?e===L.DRAPED_MATERIAL?!0:o===g.Highlight?e===L.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?L.TRANSPARENT_MATERIAL:L.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:L.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Di(e)}createBufferWriter(){const e=jt().vec3f(p.POSITION);return bt("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(p.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(p.COLORFEATUREATTRIBUTE):e.vec4u8(p.COLOR),new It(e)}}class Di extends Rt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==g.Color&&this._output!==g.Alpha||this._updateOccludeeState(e),this.ensureTechnique(Pe,e)}}class Ii extends zo{constructor(){super(...arguments),this.color=gt,this.transparent=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=Qe.None,this.hasOccludees=!1}}function Ri(t){const e=new Ue,{vertex:o,fragment:i}=e;return e.include($t,t),e.include(Mt,t),e.include(Ho,t),Me(o,t),t.stippleEnabled&&(e.attributes.add(p.UV0,"vec2"),e.attributes.add(p.AUXPOS1,"vec3"),o.uniforms.add(new X("viewport",(r,a)=>a.camera.fullViewport))),e.attributes.add(p.POSITION,"vec3"),e.varyings.add("vpos","vec3"),o.code.add(d`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),t.stippleEnabled&&(o.code.add(d`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),t.draped?o.uniforms.add(new k("worldToScreenRatio",(r,a)=>1/a.screenToPCSRatio)):o.code.add(d`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.code.add(d`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),t.draped?o.code.add(d`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):o.code.add(d`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new k("stipplePatternPixelSize",r=>Fo(r))),o.code.add(d`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),o.code.add(d`}`),t.output===g.Highlight&&e.include(Fe,t),e.include(He,t),i.uniforms.add(new k("alphaCoverage",(r,a)=>Math.min(1,r.width*a.camera.pixelRatio))),t.hasVertexColors||i.uniforms.add(new X("constantColor",r=>r.color)),i.code.add(d`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${t.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    ${t.output===g.ObjectAndLayerIdColor?d`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${d.float(ce)}) {
      discard;
    }

    ${t.output===g.Color?d`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${t.output===g.Highlight?d`outputHighlight();`:""}
  }
  `),e}const ji=Object.freeze(Object.defineProperty({__proto__:null,build:Ri},Symbol.toStringTag,{value:"Module"}));class xe extends Ge{get _stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==g.Highlight}initializeProgram(e){return new We(e.rctx,xe.shader.get().build(this.configuration),Ve)}initializePipeline(){const e=this.configuration,o=Zo(te.SRC_ALPHA,te.ONE,te.ONE_MINUS_SRC_ALPHA,te.ONE_MINUS_SRC_ALPHA),i=(r,a=null,c=null)=>Xe({blending:a,depthTest:Eo,depthWrite:c,colorWrite:ke,stencilWrite:e.hasOccludees?zt:null,stencilTest:e.hasOccludees?r?Et:Dt:null});return e.output===g.Color?(this._occludeePipelineState=i(!0,e.transparent||this._stippleEnabled?o:null,he),i(!1,e.transparent||this._stippleEnabled?o:null,he)):i(!1)}get primitiveType(){return Ie.LINES}getPipelineState(e,o){return o?this._occludeePipelineState:super.getPipelineState(e,o)}}xe.shader=new Be(ji,()=>je(()=>import("./NativeLine.glsl-f381dc85.js"),["./NativeLine.glsl-f381dc85.js","./FloatArray-5e28d801.js","./index-58dffe5f.js","./index-274f3ef9.css","./requestImageUtils-40f5a86d.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-231b4e79.js","./Indices-01290aab.js","./triangle-767eef4b.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-149b2b53.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-abbfee00.js","./OrderIndependentTransparency-2a607a9a.js","./line-0b3e9bc3.js","./DoubleArray-1786b5b4.js","./hydratedFeatures-faa1dc69.js","./triangulationUtils-c53cfe6f.js","./earcut-5c03ea14.js","./deduplicate-a0d8b170.js","./NestedMap-1b5db22e.js","./Octree-781b91f3.js","./InterleavedLayout-3036b497.js","./types-1305598a.js","./floatRGBA-7b1ee351.js","./glUtil-0b7ee6ea.js","./VertexColor.glsl-c35ba036.js"],import.meta.url));class V extends qe{constructor(){super(...arguments),this.output=g.Color,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}h([v({count:g.COUNT})],V.prototype,"output",void 0),h([v()],V.prototype,"hasSlicePlane",void 0),h([v()],V.prototype,"hasVertexColors",void 0),h([v()],V.prototype,"transparent",void 0),h([v()],V.prototype,"draped",void 0),h([v()],V.prototype,"stippleEnabled",void 0),h([v()],V.prototype,"stippleOffColorEnabled",void 0),h([v()],V.prototype,"stipplePreferContinuous",void 0),h([v()],V.prototype,"hasOccludees",void 0),h([v({constValue:!1})],V.prototype,"stippleRequiresClamp",void 0),h([v({constValue:!1})],V.prototype,"stippleScaleWithLineWidth",void 0),h([v({constValue:!1})],V.prototype,"stippleRequiresStretchMeasure",void 0);var me;(function(t){t[t.START=0]="START",t[t.END=1]="END"})(me||(me={}));class ir extends Ot{constructor(e){super(e,new Mi),this._configuration=new V}getConfiguration(e,o){this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._configuration.draped=o.slot===L.DRAPED_MATERIAL;const i=this.parameters.stipplePattern!=null;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&this.parameters.stippleOffColor!=null,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._configuration}intersect(e,o,i,r,a,c){if(!i.options.selectionMode||!e.visible)return;if(!so(o))return void no.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");const s=e.vertexAttributes.get(p.POSITION).data,n=i.camera,l=Ui;Re(l,i.point);const u=2;H(se[0],l[0]-u,l[1]+u,0),H(se[1],l[0]+u,l[1]+u,0),H(se[2],l[0]+u,l[1]-u,0),H(se[3],l[0]-u,l[1]-u,0);for(let m=0;m<4;m++)if(!n.unprojectFromRenderScreen(se[m],B[m]))return;de(n.eye,B[0],B[1],Te),de(n.eye,B[1],B[2],we),de(n.eye,B[2],B[3],_e),de(n.eye,B[3],B[0],$e);let O=Number.MAX_VALUE,f=0;for(let m=0;m<s.length-5;m+=3){if(E[0]=s[m]+o[12],E[1]=s[m+1]+o[13],E[2]=s[m+2]+o[14],D[0]=s[m+3]+o[12],D[1]=s[m+4]+o[13],D[2]=s[m+5]+o[14],N(Te,E)<0&&N(Te,D)<0||N(we,E)<0&&N(we,D)<0||N(_e,E)<0&&N(_e,D)<0||N($e,E)<0&&N($e,D)<0)continue;if(n.projectToRenderScreen(E,Y),n.projectToRenderScreen(D,Z),Y[2]<0&&Z[2]>0){fe(U,E,D);const x=n.frustum,b=-N(x[ue.NEAR],E)/Ee(U,it(x[ue.NEAR]));G(U,U,b),le(E,E,U),n.projectToRenderScreen(E,Y)}else if(Y[2]>0&&Z[2]<0){fe(U,D,E);const x=n.frustum,b=-N(x[ue.NEAR],D)/Ee(U,it(x[ue.NEAR]));G(U,U,b),le(D,D,U),n.projectToRenderScreen(D,Z)}else if(Y[2]<0&&Z[2]<0)continue;Y[2]=0,Z[2]=0;const C=lo(be(Y,Z,vt),l);C<O&&(O=C,W(ft,E),W(ht,D),f=m/3)}const S=i.rayBegin,P=i.rayEnd;if(O<u*u){let m=Number.MAX_VALUE;if(co(be(ft,ht,vt),be(S,P,Ni),Q)){fe(Q,Q,S);const C=ne(Q);G(Q,Q,1/C),m=C/Le(S,P)}c(m,Q,f,!1)}}intersectDraped(e,o,i,r,a,c){if(!i.options.selectionMode)return;const s=e.vertexAttributes.get(p.POSITION).data,n=e.vertexAttributes.get(p.SIZE),l=n?n.data[0]:0,u=r[0],O=r[1],f=((l+1)/2+4)*e.screenToWorldRatio;let S=Number.MAX_VALUE,P=0;for(let m=0;m<s.length-5;m+=3){const C=s[m],x=s[m+1],b=u-C,$=O-x,T=s[m+3]-C,I=s[m+4]-x,R=St((T*b+I*$)/(T*T+I*I),0,1),J=T*R-b,oe=I*R-$,ie=J*J+oe*oe;ie<S&&(S=ie,P=m/3)}S<f*f&&a(c.dist,c.normal,P,!1)}requiresSlot(e,o){return!(o!==g.Color&&o!==g.Highlight&&o!==g.ObjectAndLayerIdColor||e!==L.OPAQUE_MATERIAL&&e!==L.DRAPED_MATERIAL)}createGLMaterial(e){return new Vi(e)}createBufferWriter(){const e=this.parameters.hasVertexColors?Bo:Go;return this.parameters.stipplePattern==null?new It(e):new Li(e.clone().vec3f(p.AUXPOS1).vec2f(p.UV0))}}class Vi extends Rt{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===g.Color&&this._updateOccludeeState(e);const o=this._material.parameters.stipplePattern;return this._stipplePattern!==o&&(this._material.setParameters({stippleTexture:this._stippleTextureRepository.swap(o,this._stipplePattern)}),this._stipplePattern=o),this.ensureTechnique(xe,e)}}class Li{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(p.POSITION).length}write(e,o,i,r,a){Do(i,this.vertexBufferLayout,e,o,r,a),this._writeAuxpos1(e,i,r,a),this._writeUV0(e,i,r,a)}_writeAuxpos1(e,o,i,r){const a=i.getField(p.AUXPOS1,ho),c=o.indices.get(p.POSITION),s=o.vertexAttributes.get(p.POSITION).data,n=e,l=a.typedBufferStride,u=a.typedBuffer;r*=l;for(let O=0;O<c.length-1;O+=2)for(const f of[1,0]){const S=3*c[O+f],P=s[S],m=s[S+1],C=s[S+2],x=n[0]*P+n[4]*m+n[8]*C+n[12],b=n[1]*P+n[5]*m+n[9]*C+n[13],$=n[2]*P+n[6]*m+n[10]*C+n[14];u[r]=x,u[r+1]=b,u[r+2]=$,r+=l}}_writeUV0(e,o,i,r){var $;const a=i.getField(p.UV0,vo),c=o.indices.get(p.POSITION),s=o.vertexAttributes.get(p.POSITION).data,n=($=o.vertexAttributes.get(p.DISTANCETOSTART))==null?void 0:$.data,l=a.typedBufferStride,u=a.typedBuffer;let O=0;u[r*=l]=me.START,u[r+1]=O,r+=l;const f=3*c[0],S=H(E,s[f],s[f+1],s[f+2]);e&&K(S,S,e);const P=D,m=c.length-1;let C=1;const x=n?(T,I,R)=>O=n[R]:(T,I,R)=>O+=Le(T,I);for(let T=1;T<m;T+=2){const I=3*c[T];H(P,s[I],s[I+1],s[I+2]),e&&K(P,P,e),x(S,P,C++);for(let R=0;R<2;++R)u[r]=1-R,u[r+1]=O,r+=l;W(S,P)}const b=3*c[m];H(P,s[b],s[b+1],s[b+2]),e&&K(P,P,e),x(S,P,C),u[r]=me.END,u[r+1]=O}}class Mi extends po{constructor(){super(...arguments),this.color=uo,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1,this.stipplePreferContinuous=!0,this.hasOccludees=!1,this.stippleTexture=null}}const E=_(),D=_(),U=_(),Q=_(),Y=ee(),Z=ee(),ft=_(),ht=_(),vt=yt(),Ni=yt(),Ui=_(),se=[ee(),ee(),ee(),ee()],B=[_(),_(),_(),_()],Te=Oe(),we=Oe(),_e=Oe(),$e=Oe();export{ui as $,ge as D,Ji as K,ir as X,Ut as a,Ze as b,Ye as e,or as f,ci as m,Ki as o,Ri as u,M as v,$i as w};
