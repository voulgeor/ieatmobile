import{x as p,r as v,c as P,w as n,K as b,h as g,Y as w,g as V,M as q,az as x}from"./index.a3a9b403.js";import{u as O,a as Q}from"./use-page-sticky.46cd318e.js";var H=p({name:"QPageScroller",props:{...O,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(t,{slots:h,emit:d}){const{proxy:{$q:m}}=V(),{$layout:e,getStickyContent:y}=Q(),l=v(null);let r;const i=P(()=>e.height.value-(e.isContainer.value===!0?e.containerHeight.value:m.screen.height));function s(){return t.reverse===!0?i.value-e.scroll.value.position>t.scrollOffset:e.scroll.value.position>t.scrollOffset}const a=v(s());function u(){const o=s();a.value!==o&&(a.value=o)}function c(){t.reverse===!0?r===void 0&&(r=n(i,u)):f()}n(e.scroll,u),n(()=>t.reverse,c);function f(){r!==void 0&&(r(),r=void 0)}function C(o){const k=q(e.isContainer.value===!0?l.value:e.rootRef.value);x(k,t.reverse===!0?e.height.value:0,t.duration),d("click",o)}function S(){return a.value===!0?g("div",{ref:l,class:"q-page-scroller",onClick:C},y(h)):null}return c(),b(f),()=>g(w,{name:"q-transition--fade"},S)}});export{H as Q};
