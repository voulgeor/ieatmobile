import{_ as i,d,m as p,p as n,q as l,t as s,u as o,k as e,a9 as f,ab as b,X as k,ad as _,v as Q}from"./index.744ddfee.js";import{Q as t}from"./QRouteTab.49346a99.js";import{Q as C}from"./QBadge.c3da1f70.js";import{Q as h}from"./QTabs.772ec70c.js";import{Q as v}from"./QFooter.76206379.js";import{Q as $,a as g}from"./QLayout.11f4653b.js";import{u as w}from"./CartStore.0e1db4ba.js";import"./QResizeObserver.a8794211.js";import"./rtl.8137048b.js";import"./QScrollObserver.55998c96.js";const y=d({name:"NotopnavLayout",data(){return{tab:"home"}},components:{QuickTrack:p(()=>Q(()=>import("./QuickTrack.6682ed31.js"),["assets/QuickTrack.6682ed31.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QBadge.c3da1f70.js","assets/QLinearProgress.4a13c747.js"]))},setup(){return{CartStore:w()}}});function S(a,r,T,V,L,N){const m=n("router-view"),c=n("QuickTrack");return l(),s($,{view:"lHh Lpr lFf"},{default:o(()=>[e(v,{bordered:"",class:"bg-white text-dark"},{default:o(()=>[e(h,{modelValue:a.tab,"onUpdate:modelValue":r[0]||(r[0]=u=>a.tab=u),dense:"","indicator-color":"transparent","active-color":"secondary",class:f({"bg-black text-white":a.$q.dark.mode,"text-dark":!a.$q.dark.mode})},{default:o(()=>[e(t,{name:"home",icon:"las la-home",label:a.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),e(t,{name:"browse",icon:"search",label:a.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),e(t,{name:"cart",icon:"las la-shopping-bag",label:a.$t("Cart"),"no-caps":"",to:"/cart"},{default:o(()=>[a.CartStore.hasItem?(l(),s(C,{key:0,color:"yellow-9",floating:"",rounded:""},{default:o(()=>[b(k(a.CartStore.items_count),1)]),_:1})):_("",!0)]),_:1},8,["label"]),e(t,{name:"account",icon:"las la-user-alt",label:a.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),e(g,null,{default:o(()=>[e(m)]),_:1}),e(c,{ref:"quick_track"},null,512)]),_:1})}var z=i(y,[["render",S]]);export{z as default};