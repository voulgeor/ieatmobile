import{_ as c,m as l,p as i,q as b,t as v,u as o,k as a,U as k,aa as Q,V as q,a8 as n,v as m}from"./index.bc7ef6d7.js";import{Q as g}from"./QToolbarTitle.fcaa0e71.js";import{Q as T}from"./QToolbar.a26cb24b.js";import{Q as V}from"./QHeader.4fce4bc7.js";import{Q as d}from"./QTab.7b14f192.js";import{Q as h}from"./QTabs.a69aed8c.js";import{Q as w,a as u}from"./QTabPanels.13b72d02.js";import{Q as F}from"./QPage.4ade84eb.js";import{Q as P}from"./QPullToRefresh.df556b44.js";import"./QResizeObserver.3eefdf89.js";import"./rtl.6ac1ebea.js";import"./use-panel.2482215d.js";import"./touch.e7f7558c.js";import"./selection.909320b2.js";import"./use-cache.f338bfdb.js";import"./format.a74bec27.js";const R={name:"FavouritesPage",data(){return{tab:"restaurant",is_done:void 0}},components:{FavouriteRestuarant:l(()=>m(()=>import("./FavouriteRestuarant.e819a6fc.js"),["assets/FavouriteRestuarant.e819a6fc.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QInnerLoading.15d814c6.js","assets/QImg.6298c716.js","assets/QItemLabel.655483ba.js","assets/QChip.55a9e2ca.js","assets/QList.5beea4c1.js"])),FavouriteItems:l(()=>m(()=>import("./FavouriteItems.e5f7ccec.js"),["assets/FavouriteItems.e5f7ccec.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QInnerLoading.15d814c6.js","assets/QImg.6298c716.js"]))},methods:{refresh(e){this.is_done=e}}};function $(e,t,y,I,r,p){const f=i("FavouriteRestuarant"),_=i("FavouriteItems");return b(),v(P,{onRefresh:p.refresh},{default:o(()=>[a(V,{reveal:"","reveal-offset":"50",class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[a(T,null,{default:o(()=>[a(k,{onClick:t[0]||(t[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(g,{class:"text-weight-bold"},{default:o(()=>[Q(q(e.$t("Favourites")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:"q-pl-md q-pr-md"},{default:o(()=>[a(h,{modelValue:r.tab,"onUpdate:modelValue":t[1]||(t[1]=s=>r.tab=s),dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":"","no-caps":"",class:n({"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}),breakpoint:0},{default:o(()=>[a(d,{name:"restaurant",label:e.$t("Restaurants"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"]),a(d,{name:"food",label:e.$t("Items"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"])]),_:1},8,["modelValue","class"]),a(w,{modelValue:r.tab,"onUpdate:modelValue":t[2]||(t[2]=s=>r.tab=s),animated:"","transition-next":"fade","transition-prev":"fade",class:n({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:o(()=>[a(u,{name:"restaurant",class:"q-pl-none q-pr-none"},{default:o(()=>[a(f,{ref:"fav_resto",is_done:r.is_done},null,8,["is_done"])]),_:1}),a(u,{name:"food",class:"q-pl-none q-pr-none"},{default:o(()=>[a(_,{ref:"fav_items",is_done:r.is_done},null,8,["is_done"])]),_:1})]),_:1},8,["modelValue","class"])]),_:1})]),_:1},8,["onRefresh"])}var K=c(R,[["render",$]]);export{K as default};