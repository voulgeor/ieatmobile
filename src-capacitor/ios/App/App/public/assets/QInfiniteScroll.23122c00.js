import{h as n,x as A,au as z,av as R,r as m,c as P,w as v,aw as U,ax as V,K as _,o as j,ag as F,B as K,N as W,ay as h,Q as T,O as w,az as C,M as $,aA as I,aB as G,g as J}from"./index.a3a9b403.js";const X=[n("circle",{cx:"15",cy:"15",r:"15"},[n("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),n("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[n("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),n("circle",{cx:"105",cy:"15",r:"15"},[n("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var Z=A({name:"QSpinnerDots",props:z,setup(a){const{cSize:u,classes:b}=R(a);return()=>n("svg",{class:b.value,fill:"currentColor",width:u.value,height:u.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},X)}});const{passive:o}=W;var ee=A({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(a,{slots:u,emit:b}){const s=m(!1),l=m(!0),d=m(null),S=m(null);let g=a.initialIndex||0,e,i;const Q=P(()=>"q-infinite-scroll__loading"+(s.value===!0?"":" invisible"));function c(){if(a.disable===!0||s.value===!0||l.value===!1)return;const t=h(e),r=w(e),f=I(e);a.reverse===!1?Math.round(r+f+a.offset)>=Math.round(t)&&x():Math.round(r)<=a.offset&&x()}function x(){if(a.disable===!0||s.value===!0||l.value===!1)return;g++,s.value=!0;const t=h(e);b("load",g,r=>{l.value===!0&&(s.value=!1,T(()=>{if(a.reverse===!0){const f=h(e),O=w(e),k=f-t;C(e,O+k)}r===!0?y():d.value&&d.value.closest("body")&&i()}))})}function D(){g=0}function E(){l.value===!1&&(l.value=!0,e.addEventListener("scroll",i,o)),c()}function y(){l.value===!0&&(l.value=!1,s.value=!1,e.removeEventListener("scroll",i,o),i!==void 0&&i.cancel!==void 0&&i.cancel())}function B(){if(e&&l.value===!0&&e.removeEventListener("scroll",i,o),e=$(d.value,a.scrollTarget),l.value===!0){if(e.addEventListener("scroll",i,o),a.reverse===!0){const t=h(e),r=I(e);C(e,t-r)}c()}}function H(t){g=t}function L(t){t=parseInt(t,10);const r=i;i=t<=0?c:G(c,isNaN(t)===!0?100:t),e&&l.value===!0&&(r!==void 0&&e.removeEventListener("scroll",r,o),e.addEventListener("scroll",i,o))}function N(t){if(M.value===!0){if(S.value===null){t!==!0&&T(()=>{N(!0)});return}const r=`${s.value===!0?"un":""}pauseAnimations`;Array.from(S.value.getElementsByTagName("svg")).forEach(f=>{f[r]()})}}const M=P(()=>a.disable!==!0&&l.value===!0);v([s,M],()=>{N()}),v(()=>a.disable,t=>{t===!0?y():E()}),v(()=>a.reverse,()=>{s.value===!1&&l.value===!0&&c()}),v(()=>a.scrollTarget,B),v(()=>a.debounce,L);let p=!1;U(()=>{p!==!1&&e&&C(e,p)}),V(()=>{p=e?w(e):!1}),_(()=>{l.value===!0&&e.removeEventListener("scroll",i,o)}),j(()=>{L(a.debounce),B(),s.value===!1&&N()});const q=J();return Object.assign(q.proxy,{poll:()=>{i!==void 0&&i()},trigger:x,stop:y,reset:D,resume:E,setIndex:H}),()=>{const t=F(u.default,[]);return M.value===!0&&t[a.reverse===!1?"push":"unshift"](n("div",{ref:S,class:Q.value},K(u.loading))),n("div",{class:"q-infinite-scroll",ref:d},t)}}});export{ee as Q,Z as a};
