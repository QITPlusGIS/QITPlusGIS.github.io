import{bR as c,bM as e,bS as s,bT as u,bU as i}from"./index-95bf5a29.js";function l(o){let{r:t,g:r,b:a,a:n}=o;return n<1&&(t=Math.round(n*t+255*(1-n)),r=Math.round(n*r+255*(1-n)),a=Math.round(n*a+255*(1-n))),new e({r:t,g:r,b:a})}function f(o,t){const{r,g:a,b:n}=t!=null&&t.ignoreAlpha?o:l(o);return .2126*r+.7152*a+.0722*n}function h(o,t){const r=s(o);r.l*=1-t;const a=u(r),n=o.clone();return n.setColor(a),n.a=o.a,n}function d(o,t){const r=o.clone();return r.a*=t,r}function g(o,t){const r=i(o);r.s*=t;const a=u(r),n=o.clone();return n.setColor(a),n.a=o.a,n}function p(o){return c(e.toUnitRGBA(o))}export{p as d,d as f,g as h,h as i,f as s};