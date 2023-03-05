import{_ as Q,a0 as q,bh as S,n as $,bM as p,q as o,t as f,u as t,j as a,U as c,aa as d,V as i,a8 as l,ad as _,ae as w,R as v,S as y,F as D,ai as P,aq as L,ar as C,b0 as n,b1 as I,bg as R}from"./index.ea6274c1.js";import{Q as V}from"./QToolbarTitle.f9df01bd.js";import{Q as T}from"./QToolbar.955f19ff.js";import{Q as x}from"./QHeader.f05143ed.js";import{Q as B}from"./QImg.eab4016e.js";import{Q as h}from"./QItemLabel.d788e65f.js";import{Q as z}from"./QList.249c4df0.js";import{Q as A}from"./QFooter.289e68ec.js";import{Q as F}from"./QPage.d653db0f.js";import{Q as N}from"./QPullToRefresh.6b5f95ae.js";import{u as U}from"./vue-i18n.esm-bundler.33d61fc2.js";import"./QResizeObserver.88ce5d1b.js";import"./touch.70a9dd44.js";import"./selection.ac04f59d.js";import"./format.2a3572e1.js";const j={name:"LanguagePage",setup(){const{locale:e}=U({useScope:"global"}),r=q(),u=S();return{DataStore:r,DataStorePersisted:u,locale:e}},data(){return{language:""}},created(){this.language=this.DataStorePersisted.app_language,this.locale=this.DataStorePersisted.app_language},methods:{setLanguage(){this.DataStorePersisted.app_language=this.language,this.locale=this.language,this.$i18n.locale=this.language,$.setStorage("language_code",this.language),p.defaults.params={},p.defaults.params.language=this.$i18n.locale,this.$router.push("/account-menu")},refresh(e){this.DataStore.getAttributes(e)}}};function E(e,r,u,b,g,m){return o(),f(N,{onRefresh:m.refresh},{default:t(()=>[a(x,{reveal:"","reveal-offset":"50",class:l({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(T,null,{default:t(()=>[a(c,{onClick:r[0]||(r[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(V,{class:"text-weight-bold"},{default:t(()=>[d(i(e.$t("Language")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{padding:"",class:l(["q-pl-md q-pr-md row items-stretch",{"bg-mydark":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode}])},{default:t(()=>[a(_,{flat:"",class:l(["radius8 col-12",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:t(()=>[a(w,null,{default:t(()=>[a(z,null,{default:t(()=>[(o(!0),v(D,null,y(b.DataStore.language_data.data,s=>P((o(),f(C,{key:s,tag:"label",clickable:"",class:l(["border-grey radius10 q-mb-sm",{"bg-dark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[a(n,{avatar:""},{default:t(()=>[a(I,{square:""},{default:t(()=>[a(B,{src:s.flag,"spinner-color":"secondary",style:{height:"25px","max-width":"40px"},"spinner-size":"sm"},null,8,["src"])]),_:2},1024)]),_:2},1024),a(n,null,{default:t(()=>[a(h,{lines:"1"},{default:t(()=>[d(i(s.title),1)]),_:2},1024),a(h,{lines:"1",caption:""},{default:t(()=>[d(i(s.description),1)]),_:2},1024)]),_:2},1024),a(n,{side:""},{default:t(()=>[a(R,{modelValue:g.language,"onUpdate:modelValue":r[1]||(r[1]=k=>g.language=k),val:s.code},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1032,["class"])),[[L]])),128))]),_:1})]),_:1})]),_:1},8,["class"]),a(A,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[a(c,{label:e.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",onClick:m.setLanguage},null,8,["label","onClick"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var la=Q(j,[["render",E]]);export{la as default};
