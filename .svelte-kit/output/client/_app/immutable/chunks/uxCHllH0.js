import{ac as E,ad as m,ae as P,Y as R,af as j,ag as q,ah as M,a0 as W,ai as L,T as B,H as C,a8 as $,aj as T,q as w,o as k,j as z,y as p,V as X,ak as F,al as G,a3 as J,X as K,am as Q,S as U,w as Z,i as S,p as x,z as tt,a as rt}from"./49846gV3.js";import{d as et}from"./BhygiytR.js";const at=["touchstart","touchmove"];function nt(t){return at.includes(t)}let A=!1;function st(){A||(A=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var r;if(!t.defaultPrevented)for(const a of t.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function V(t){var r=P,a=R;E(null),m(null);try{return t()}finally{E(r),m(a)}}function lt(t,r,a,i=a){t.addEventListener(r,()=>V(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),st()}const it=new Set,D=new Set;function ot(t,r,a,i={}){function n(e){if(i.capture||y.call(r,e),!e.cancelBubble)return V(()=>a==null?void 0:a.call(this,e))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?q(()=>{r.addEventListener(t,n,i)}):r.addEventListener(t,n,i),n}function _t(t,r,a,i,n){var e={capture:i,passive:n},u=ot(t,r,a,e);(r===document.body||r===window||r===document)&&j(()=>{r.removeEventListener(t,u,e)})}function y(t){var O;var r=this,a=r.ownerDocument,i=t.type,n=((O=t.composedPath)==null?void 0:O.call(t))||[],e=n[0]||t.target,u=0,d=t.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(r===document||r===window)){t.__root=r;return}var v=n.indexOf(r);if(v===-1)return;l<=v&&(u=l)}if(e=n[u]||t.target,e!==r){M(t,"currentTarget",{configurable:!0,get(){return e||a}});var b=P,f=R;E(null),m(null);try{for(var s,o=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var _=e["__"+i];if(_!=null&&(!e.disabled||t.target===e))if(W(_)){var[I,...Y]=_;I.apply(e,[t,...Y])}else _.call(e,t)}catch(g){s?o.push(g):s=g}if(t.cancelBubble||c===r||c===null)break;e=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{t.__root=r,delete t.currentTarget,E(b),m(f)}}}function dt(t,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a+"")}function ut(t,r){return H(t,r)}function vt(t,r){L(),r.intro=r.intro??!1;const a=r.target,i=S,n=p;try{for(var e=B(a);e&&(e.nodeType!==8||e.data!==C);)e=$(e);if(!e)throw T;w(!0),k(e),z();const u=H(t,{...r,anchor:e});if(p===null||p.nodeType!==8||p.data!==X)throw F(),T;return w(!1),u}catch(u){if(u===T)return r.recover===!1&&G(),L(),J(a),w(!1),ut(t,r);throw u}finally{w(i),k(n)}}const h=new Map;function H(t,{target:r,anchor:a,props:i={},events:n,context:e,intro:u=!0}){L();var d=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=nt(o);r.addEventListener(o,y,{passive:c});var _=h.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,_+1)}}};l(K(it)),D.add(l);var v=void 0,b=Q(()=>{var f=a??r.appendChild(U());return Z(()=>{if(e){x({});var s=tt;s.c=e}n&&(i.$$events=n),S&&et(f,null),v=t(f,i)||{},S&&(R.nodes_end=p),e&&rt()}),()=>{var c;for(var s of d){r.removeEventListener(s,y);var o=h.get(s);--o===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,o)}D.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(v,b),v}let N=new WeakMap;function ht(t,r){const a=N.get(t);return a?(N.delete(t),a(r)):Promise.resolve()}export{st as a,_t as e,vt as h,lt as l,ut as m,dt as s,ht as u};
