import{Q as p}from"./QToolbarTitle.7746a5f3.js";import{Q as f}from"./QSpace.5710b96a.js";import{_,a1 as q,q as i,t as g,u as t,k as o,a9 as y,ab as k,X as d,V as u,af as w,R as s,S as c,U as h,b4 as Q,F as v,ae as C,aa as S}from"./index.e1f31b72.js";import{Q as b}from"./QToolbar.9ad6ac15.js";const x={name:"BrowseCuisine",data(){return{modal:!1}},setup(){return{DataStore:q()}},mounted(){this.DataStore.hasDataCuisine()}},D={class:"row q-gutter-md justify-center q-pa-none"},$={class:"row items-center no-wrap full-width"},B={class:"col-12"},V=["src"],z={class:"ellipsis text-center font11 q-pl-sm line-normal"};function T(e,r,N,m,l,A){return i(),g(S,{modelValue:l.modal,"onUpdate:modelValue":r[1]||(r[1]=a=>l.modal=a),position:"bottom"},{default:t(()=>[o(C,null,{default:t(()=>[o(b,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:t(()=>[o(p,{class:y(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:t(()=>[k(d(e.$t("All Cuisine")),1)]),_:1},8,["class"]),o(f),o(u,{onClick:r[0]||(r[0]=a=>l.modal=!1),square:"",unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"},null,8,["color","text-color"])]),_:1}),o(w,{class:"q-pt-none q-pl-md"},{default:t(()=>[s("div",D,[(i(!0),c(v,null,h(m.DataStore.cuisine,(a,n)=>(i(),c("div",{key:a,class:"col-5"},[o(u,{color:n<=0?"primary":e.$q.dark.mode?"grey600":"mygrey",unelevated:"","no-caps":"","text-color":n<=0?"white":e.$q.dark.mode?"grey300":"dark",class:"radius8 full-width row items-center",size:"lg",to:{name:"feed",query:{query:"all",cuisine_id:a.cuisine_id,cuisine_name:a.cuisine_name}}},{default:t(()=>[s("div",$,[s("div",B,[o(Q,{size:"30px"},{default:t(()=>[s("img",{src:a.url_icon},null,8,V)]),_:2},1024),s("div",z,d(a.cuisine_name),1)])])]),_:2},1032,["color","text-color","to"])]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var L=_(x,[["render",T]]);export{L as default};
