import{_ as c,m as l,p as i,q as b,t as v,u as o,k as a,V as k,ab as Q,X as q,a9 as n,v as m}from"./index.e230319b.js";import{Q as g}from"./QToolbarTitle.259c42a1.js";import{Q as T}from"./QToolbar.6df38dcd.js";import{Q as V}from"./QHeader.4854892c.js";import{Q as d}from"./QTab.662a0d40.js";import{Q as h}from"./QTabs.1d697748.js";import{Q as w,a as u}from"./QTabPanels.ae3c5c15.js";import{Q as F}from"./QPage.225bb278.js";import{Q as P}from"./QPullToRefresh.e2610cc4.js";import"./QResizeObserver.14e0edf7.js";import"./rtl.b51694b1.js";import"./use-panel.381ee395.js";import"./touch.70a9dd44.js";import"./selection.69ceab22.js";import"./use-cache.b0833c75.js";import"./format.2a3572e1.js";const R={name:"FavouritesPage",data(){return{tab:"restaurant",is_done:void 0}},components:{FavouriteRestuarant:l(()=>m(()=>import("./FavouriteRestuarant.4dfcfcf9.js"),["assets/FavouriteRestuarant.4dfcfcf9.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QInnerLoading.0b8a8d1f.js","assets/QImg.0fbb4b94.js","assets/QItemLabel.a48bebab.js","assets/QChip.cd74be9a.js","assets/QList.4869120a.js"])),FavouriteItems:l(()=>m(()=>import("./FavouriteItems.c6179e39.js"),["assets/FavouriteItems.c6179e39.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QInnerLoading.0b8a8d1f.js","assets/QImg.0fbb4b94.js"]))},methods:{refresh(e){this.is_done=e}}};function $(e,t,y,I,r,p){const f=i("FavouriteRestuarant"),_=i("FavouriteItems");return b(),v(P,{onRefresh:p.refresh},{default:o(()=>[a(V,{reveal:"","reveal-offset":"50",class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[a(T,null,{default:o(()=>[a(k,{onClick:t[0]||(t[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(g,{class:"text-weight-bold"},{default:o(()=>[Q(q(e.$t("Favourites")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:"q-pl-md q-pr-md"},{default:o(()=>[a(h,{modelValue:r.tab,"onUpdate:modelValue":t[1]||(t[1]=s=>r.tab=s),dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":"","no-caps":"",class:n({"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}),breakpoint:0},{default:o(()=>[a(d,{name:"restaurant",label:e.$t("Restaurants"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"]),a(d,{name:"food",label:e.$t("Items"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"])]),_:1},8,["modelValue","class"]),a(w,{modelValue:r.tab,"onUpdate:modelValue":t[2]||(t[2]=s=>r.tab=s),animated:"","transition-next":"fade","transition-prev":"fade",class:n({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:o(()=>[a(u,{name:"restaurant",class:"q-pl-none q-pr-none"},{default:o(()=>[a(f,{ref:"fav_resto",is_done:r.is_done},null,8,["is_done"])]),_:1}),a(u,{name:"food",class:"q-pl-none q-pr-none"},{default:o(()=>[a(_,{ref:"fav_items",is_done:r.is_done},null,8,["is_done"])]),_:1})]),_:1},8,["modelValue","class"])]),_:1})]),_:1},8,["onRefresh"])}var J=c(R,[["render",$]]);export{J as default};