import{_ as c,m as l,p as i,q as b,t as v,u as o,j as a,U as Q,aa as k,V as q,a8 as n,v as m}from"./index.ea6274c1.js";import{Q as g}from"./QToolbarTitle.f9df01bd.js";import{Q as T}from"./QToolbar.955f19ff.js";import{Q as V}from"./QHeader.f05143ed.js";import{Q as d}from"./QTab.0d39ff1c.js";import{Q as h}from"./QTabs.b51e3709.js";import{Q as w,a as u}from"./QTabPanels.92bfba1e.js";import{Q as F}from"./QPage.d653db0f.js";import{Q as P}from"./QPullToRefresh.6b5f95ae.js";import"./QResizeObserver.88ce5d1b.js";import"./rtl.4b414a6d.js";import"./use-panel.c9325571.js";import"./touch.70a9dd44.js";import"./selection.ac04f59d.js";import"./use-cache.b0833c75.js";import"./format.2a3572e1.js";const R={name:"FavouritesPage",data(){return{tab:"restaurant",is_done:void 0}},components:{FavouriteRestuarant:l(()=>m(()=>import("./FavouriteRestuarant.9699d306.js"),["assets/FavouriteRestuarant.9699d306.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QInnerLoading.0bbefb19.js","assets/QImg.eab4016e.js","assets/QItemLabel.d788e65f.js","assets/QChip.79d03ed9.js","assets/QList.249c4df0.js"])),FavouriteItems:l(()=>m(()=>import("./FavouriteItems.0932d395.js"),["assets/FavouriteItems.0932d395.js","assets/index.ea6274c1.js","assets/index.f7829e99.css","assets/QInnerLoading.0bbefb19.js","assets/QImg.eab4016e.js"]))},methods:{refresh(e){this.is_done=e}}};function $(e,t,y,I,r,p){const f=i("FavouriteRestuarant"),_=i("FavouriteItems");return b(),v(P,{onRefresh:p.refresh},{default:o(()=>[a(V,{reveal:"","reveal-offset":"50",class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[a(T,null,{default:o(()=>[a(Q,{onClick:t[0]||(t[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(g,{class:"text-weight-bold"},{default:o(()=>[k(q(e.$t("Favourites")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:"q-pl-md q-pr-md"},{default:o(()=>[a(h,{modelValue:r.tab,"onUpdate:modelValue":t[1]||(t[1]=s=>r.tab=s),dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":"","no-caps":"",class:n({"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}),breakpoint:0},{default:o(()=>[a(d,{name:"restaurant",label:e.$t("Restaurants"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"]),a(d,{name:"food",label:e.$t("Items"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"])]),_:1},8,["modelValue","class"]),a(w,{modelValue:r.tab,"onUpdate:modelValue":t[2]||(t[2]=s=>r.tab=s),animated:"","transition-next":"fade","transition-prev":"fade",class:n({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:o(()=>[a(u,{name:"restaurant",class:"q-pl-none q-pr-none"},{default:o(()=>[a(f,{ref:"fav_resto",is_done:r.is_done},null,8,["is_done"])]),_:1}),a(u,{name:"food",class:"q-pl-none q-pr-none"},{default:o(()=>[a(_,{ref:"fav_items",is_done:r.is_done},null,8,["is_done"])]),_:1})]),_:1},8,["modelValue","class"])]),_:1})]),_:1},8,["onRefresh"])}var K=c(R,[["render",$]]);export{K as default};