import{_ as i,d as p,m as d,p as n,q as l,t as s,u as o,k as e,a8 as f,aa as b,V as k,ac as _,v as Q}from"./index.f4219e68.js";import{Q as t}from"./QRouteTab.a23f01b2.js";import{Q as C}from"./QBadge.a14cbf22.js";import{Q as h}from"./QTabs.664d69a6.js";import{Q as v}from"./QFooter.9460f9d6.js";import{Q as $,a as g}from"./QLayout.815cf663.js";import{u as w}from"./CartStore.400c9d7e.js";import"./QResizeObserver.8f0e5734.js";import"./rtl.4b414a6d.js";import"./QScrollObserver.be17fb9d.js";const y=p({name:"NotopnavLayout",data(){return{tab:"home"}},components:{QuickTrack:d(()=>Q(()=>import("./QuickTrack.802fa03e.js"),["assets/QuickTrack.802fa03e.js","assets/index.f4219e68.js","assets/index.f7829e99.css","assets/QBadge.a14cbf22.js","assets/QLinearProgress.2a8f8016.js"]))},setup(){return{CartStore:w()}}});function V(a,r,S,T,L,N){const m=n("router-view"),c=n("QuickTrack");return l(),s($,{view:"lHh Lpr lFf"},{default:o(()=>[e(v,{bordered:"",class:"bg-white text-dark"},{default:o(()=>[e(h,{modelValue:a.tab,"onUpdate:modelValue":r[0]||(r[0]=u=>a.tab=u),dense:"","indicator-color":"transparent","active-color":"secondary",class:f({"bg-black text-white":a.$q.dark.mode,"text-dark":!a.$q.dark.mode})},{default:o(()=>[e(t,{name:"home",icon:"las la-home",label:a.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),e(t,{name:"browse",icon:"search",label:a.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),e(t,{name:"cart",icon:"las la-shopping-bag",label:a.$t("Cart"),"no-caps":"",to:"/cart"},{default:o(()=>[a.CartStore.hasItem?(l(),s(C,{key:0,color:"yellow-9",floating:"",rounded:""},{default:o(()=>[b(k(a.CartStore.items_count),1)]),_:1})):_("",!0)]),_:1},8,["label"]),e(t,{name:"account",icon:"las la-user-alt",label:a.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),e(g,null,{default:o(()=>[e(m)]),_:1}),e(c,{ref:"quick_track"},null,512)]),_:1})}var z=i(y,[["render",V]]);export{z as default};