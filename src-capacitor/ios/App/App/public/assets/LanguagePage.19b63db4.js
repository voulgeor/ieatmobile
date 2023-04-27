import{_ as Q,a1 as q,bj as $,n as S,bO as p,q as o,t as f,u as t,k as e,V as c,ab as d,X as i,a9 as l,ae as w,af as v,S as y,U as _,F as D,aj as P,ar as L,as as C,b3 as n,b4 as I,bi as V}from"./index.e230319b.js";import{Q as R}from"./QToolbarTitle.259c42a1.js";import{Q as T}from"./QToolbar.6df38dcd.js";import{Q as B}from"./QHeader.4854892c.js";import{Q as z}from"./QImg.0fbb4b94.js";import{Q as h}from"./QItemLabel.a48bebab.js";import{Q as A}from"./QList.4869120a.js";import{Q as F}from"./QFooter.10036f87.js";import{Q as j}from"./QPage.225bb278.js";import{Q as x}from"./QPullToRefresh.e2610cc4.js";import{u as N}from"./vue-i18n.4a6cd91e.js";import"./QResizeObserver.14e0edf7.js";import"./touch.70a9dd44.js";import"./selection.69ceab22.js";import"./format.2a3572e1.js";const U={name:"LanguagePage",setup(){const{locale:a}=N({useScope:"global"}),r=q(),u=$();return{DataStore:r,DataStorePersisted:u,locale:a}},data(){return{language:""}},created(){this.language=this.DataStorePersisted.app_language,this.locale=this.DataStorePersisted.app_language},methods:{setLanguage(){this.DataStorePersisted.app_language=this.language,this.locale=this.language,this.$i18n.locale=this.language,S.setStorage("language_code",this.language),p.defaults.params={},p.defaults.params.language=this.$i18n.locale,this.$router.push("/account-menu")},refresh(a){this.DataStore.getAttributes(a)}}};function E(a,r,u,b,g,m){return o(),f(x,{onRefresh:m.refresh},{default:t(()=>[e(B,{reveal:"","reveal-offset":"50",class:l({"bg-mydark text-white":a.$q.dark.mode,"bg-grey-1 text-dark":!a.$q.dark.mode})},{default:t(()=>[e(T,null,{default:t(()=>[e(c,{onClick:r[0]||(r[0]=s=>a.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:a.$q.dark.mode?"white":"dark"},null,8,["color"]),e(R,{class:"text-weight-bold"},{default:t(()=>[d(i(a.$t("Language")),1)]),_:1})]),_:1})]),_:1},8,["class"]),e(j,{padding:"",class:l(["q-pl-md q-pr-md row items-stretch",{"bg-mydark":a.$q.dark.mode,"bg-grey-1":!a.$q.dark.mode}])},{default:t(()=>[e(w,{flat:"",class:l(["radius8 col-12",{"bg-mydark ":a.$q.dark.mode,"bg-white ":!a.$q.dark.mode}])},{default:t(()=>[e(v,null,{default:t(()=>[e(A,null,{default:t(()=>[(o(!0),y(D,null,_(b.DataStore.language_data.data,s=>P((o(),f(C,{key:s,tag:"label",clickable:"",class:l(["border-grey radius10 q-mb-sm",{"bg-dark text-white":a.$q.dark.mode,"bg-white text-black":!a.$q.dark.mode}])},{default:t(()=>[e(n,{avatar:""},{default:t(()=>[e(I,{square:""},{default:t(()=>[e(z,{src:s.flag,"spinner-color":"secondary",style:{height:"25px","max-width":"40px"},"spinner-size":"sm"},null,8,["src"])]),_:2},1024)]),_:2},1024),e(n,null,{default:t(()=>[e(h,{lines:"1"},{default:t(()=>[d(i(a.$t(s.title)),1)]),_:2},1024),e(h,{lines:"1",caption:""},{default:t(()=>[d(i(a.$t(s.description)),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:t(()=>[e(V,{modelValue:g.language,"onUpdate:modelValue":r[1]||(r[1]=k=>g.language=k),val:s.code},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1032,["class"])),[[L]])),128))]),_:1})]),_:1})]),_:1},8,["class"]),e(F,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[e(c,{label:a.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",onClick:m.setLanguage},null,8,["label","onClick"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var la=Q(U,[["render",E]]);export{la as default};
