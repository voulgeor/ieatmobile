import{_ as c,m as l,p as i,q as b,t as v,u as o,k as a,V as k,ab as Q,X as q,a9 as n,v as m}from"./index.fff20017.js";import{Q as g}from"./QToolbarTitle.e49295d2.js";import{Q as T}from"./QToolbar.08817919.js";import{Q as V}from"./QHeader.fb975acc.js";import{Q as d}from"./QTab.16f69405.js";import{Q as h}from"./QTabs.cc32e71f.js";import{Q as w,a as u}from"./QTabPanels.9d224573.js";import{Q as F}from"./QPage.d49d1d2c.js";import{Q as P}from"./QPullToRefresh.5d364774.js";import"./QResizeObserver.48ba7799.js";import"./rtl.46960cfe.js";import"./use-panel.55f2690d.js";import"./touch.e7f7558c.js";import"./selection.94eeb582.js";import"./use-cache.f338bfdb.js";import"./format.a74bec27.js";const R={name:"FavouritesPage",data(){return{tab:"restaurant",is_done:void 0}},components:{FavouriteRestuarant:l(()=>m(()=>import("./FavouriteRestuarant.bb51dd62.js"),["assets/FavouriteRestuarant.bb51dd62.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QInnerLoading.5b3ceea0.js","assets/QImg.dc29da83.js","assets/QItemLabel.edeba251.js","assets/QChip.369de1c0.js","assets/QList.45f2a341.js"])),FavouriteItems:l(()=>m(()=>import("./FavouriteItems.8f3c1233.js"),["assets/FavouriteItems.8f3c1233.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QInnerLoading.5b3ceea0.js","assets/QImg.dc29da83.js"]))},methods:{refresh(e){this.is_done=e}}};function $(e,t,y,I,r,p){const f=i("FavouriteRestuarant"),_=i("FavouriteItems");return b(),v(P,{onRefresh:p.refresh},{default:o(()=>[a(V,{reveal:"","reveal-offset":"50",class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[a(T,null,{default:o(()=>[a(k,{onClick:t[0]||(t[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(g,{class:"text-weight-bold"},{default:o(()=>[Q(q(e.$t("Favourites")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:"q-pl-md q-pr-md"},{default:o(()=>[a(h,{modelValue:r.tab,"onUpdate:modelValue":t[1]||(t[1]=s=>r.tab=s),dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":"","no-caps":"",class:n({"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}),breakpoint:0},{default:o(()=>[a(d,{name:"restaurant",label:e.$t("Restaurants"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"]),a(d,{name:"food",label:e.$t("Items"),"no-caps":"","content-class":"text-weight-500 "},null,8,["label"])]),_:1},8,["modelValue","class"]),a(w,{modelValue:r.tab,"onUpdate:modelValue":t[2]||(t[2]=s=>r.tab=s),animated:"","transition-next":"fade","transition-prev":"fade",class:n({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:o(()=>[a(u,{name:"restaurant",class:"q-pl-none q-pr-none"},{default:o(()=>[a(f,{ref:"fav_resto",is_done:r.is_done},null,8,["is_done"])]),_:1}),a(u,{name:"food",class:"q-pl-none q-pr-none"},{default:o(()=>[a(_,{ref:"fav_items",is_done:r.is_done},null,8,["is_done"])]),_:1})]),_:1},8,["modelValue","class"])]),_:1})]),_:1},8,["onRefresh"])}var J=c(R,[["render",$]]);export{J as default};