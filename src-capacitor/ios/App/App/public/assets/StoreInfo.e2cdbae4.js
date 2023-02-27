import{_ as Q,m as x,p as I,q as s,S as i,k as t,u as a,a9 as k,F as u,V as _,ab as h,X as o,R as n,b2 as y,t as g,ae as C,af as G,U as S,ad as c,v as P,as as z,b3 as b}from"./index.e1f31b72.js";import{Q as O}from"./QToolbarTitle.7746a5f3.js";import{Q as T}from"./QToolbar.9ad6ac15.js";import{Q as V}from"./QHeader.26bcd033.js";import{Q as p}from"./QChip.63c60a46.js";import{Q as M}from"./QList.20d5a18b.js";import{Q as j}from"./QExpansionItem.eaed5774.js";import{Q as v}from"./QImg.032a5332.js";import{Q as B}from"./QPage.0ee62e2e.js";import{u as E}from"./MenuStore.020ed74d.js";import"./QResizeObserver.66815ae3.js";import"./QItemLabel.0c4db6ac.js";import"./QSlideTransition.6abc9280.js";const N={name:"Menu/StoreInfo",components:{ImagePreview:x(()=>P(()=>import("./ImagePreview.40fd42f0.js"),["assets/ImagePreview.40fd42f0.js","assets/QToolbarTitle.7746a5f3.js","assets/index.e1f31b72.js","assets/index.469535cd.css","assets/QSpace.5710b96a.js","assets/QToolbar.9ad6ac15.js","assets/use-panel.f96baa91.js","assets/touch.70a9dd44.js","assets/selection.08c710ee.js","assets/use-cache.b0833c75.js"]))},data(){return{slug:""}},setup(){return{MenuStore:E()}},computed:{hasGallery(){return!!(Object.keys(this.MenuStore.data_gallery).length>0&&this.MenuStore.data_gallery[this.slug])},countGallery(){return Object.keys(this.MenuStore.data_gallery).length>0&&this.MenuStore.data_gallery[this.slug]?Object.keys(this.MenuStore.data_gallery[this.slug]).length-4:0},getGallery(){return Object.keys(this.MenuStore.gallery_images).length>0&&this.MenuStore.gallery_images[this.slug]?this.MenuStore.gallery_images[this.slug]:!1}},created(){this.slug=this.$route.query.slug,Object.keys(this.MenuStore.data_info).length<=0?this.MenuStore.getMerchantInfo(this.slug):this.MenuStore.data_info[this.slug]||this.MenuStore.getMerchantInfo(this.slug)}},A={class:"text-grey"},F={class:"font13 text-grey ellipsis-2-lines"},L={class:"text-grey"},D={class:"row items-center q-gutter-sm"},R={class:"col"},H={class:"font15 text-weight-bold no-margin line-normal"},U={class:"text-grey font12 line-normal"},X={class:"col-3 text-center"},J={class:"text-grey"},K={class:"text-grey"},W={key:0,class:"q-gutter-sm row items-start"},Y={key:0,style:{height:"80px",width:"80px"},class:"relative-position"},Z={class:"text-center text-white z-top text-weight-bold font16"};function $(e,m,ee,r,l,f){const q=I("ImagePreview");return s(),i(u,null,[t(V,{reveal:"","reveal-offset":"10",class:k({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:a(()=>[t(T,null,{default:a(()=>[t(_,{onClick:m[0]||(m[0]=d=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(O,{class:"text-weight-bold"},{default:a(()=>[h(o(e.$t("Info")),1)]),_:1})]),_:1})]),_:1},8,["class"]),t(B,{class:"q-pl-md q-pr-md"},{default:a(()=>[r.MenuStore.loadin_info?(s(),i(u,{key:0},[h(o(e.$t("loading")),1)],64)):(s(),i(u,{key:1},[r.MenuStore.data_info[l.slug]?(s(),i(u,{key:0},[t(p,{dense:"",color:"transparent","text-color":"grey-4",class:"q-pa-none",icon:"las la-map-marker-alt"},{default:a(()=>[n("span",A,o(e.$t("Few words about"))+" "+o(r.MenuStore.data_info[l.slug].restaurant_name),1)]),_:1}),n("div",F,o(r.MenuStore.data_info[l.slug].short_description),1),t(y,{class:"q-mb-sm q-mt-sm"}),t(p,{dense:"",color:"transparent","text-color":"grey-4",class:"q-pa-none",icon:"las la-map-marker-alt"},{default:a(()=>[n("span",L,o(e.$t("Address")),1)]),_:1}),n("div",D,[n("div",R,[n("div",H,o(r.MenuStore.data_info[l.slug].restaurant_name),1),n("div",U,o(r.MenuStore.data_info[l.slug].address),1)]),n("div",X,[this.$q.capacitor?(s(),g(_,{key:0,flat:"",color:e.$q.dark.mode?"secondary":"blue","no-caps":"",label:e.$t("Get directions"),dense:"",size:"sm",href:r.MenuStore.data_info[l.slug].map_direction,target:"_blank"},null,8,["color","label","href"])):(s(),g(_,{key:1,flat:"",color:e.$q.dark.mode?"secondary":"blue","no-caps":"",label:e.$t("Get directions"),dense:"",size:"sm",href:r.MenuStore.data_info[l.slug].map_direction,target:"_blank"},null,8,["color","label","href"]))])]),t(y,{class:"q-mb-sm q-mt-sm"}),t(p,{dense:"",color:"transparent","text-color":"grey-4",class:"q-pa-none",icon:"las la-clock"},{default:a(()=>[n("span",J,o(e.$t("Opening hours")),1)]),_:1}),r.MenuStore.open_at[l.slug]?(s(),g(M,{key:0},{default:a(()=>[t(j,{"expand-separator":"",label:e.$t("Today"),caption:e.$t("Open")+" "+r.MenuStore.open[l.slug]+" - "+r.MenuStore.end[l.slug]},{default:a(()=>[t(C,{class:k({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:a(()=>[t(G,null,{default:a(()=>[t(M,{dense:"",class:"font13"},{default:a(()=>[(s(!0),i(u,null,S(r.MenuStore.opening_hours[l.slug],d=>(s(),g(z,{key:d,style:{padding:"0px !important","min-height":"0"}},{default:a(()=>[t(b,{class:"text-capitalize"},{default:a(()=>[h(o(e.$t(d.day)),1)]),_:2},1024),t(b,{caption:""},{default:a(()=>[h(o(d.start_time)+" - "+o(d.end_time),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["class"])]),_:1},8,["label","caption"])]),_:1})):c("",!0),t(y,{class:"q-mb-sm q-mt-sm"}),f.hasGallery?(s(),i(u,{key:1},[t(p,{dense:"",color:"transparent","text-color":"grey-4",class:"q-pa-none",icon:"las la-photo-video"},{default:a(()=>[n("span",K,o(e.$t("Gallery")),1)]),_:1}),r.MenuStore.data_gallery[l.slug]?(s(),i("div",W,[(s(!0),i(u,null,S(r.MenuStore.data_gallery[l.slug],(d,w)=>(s(),i(u,{key:d},[w<=4?(s(),g(v,{key:0,src:d.thumbnail,"spinner-color":"secondary","spinner-size":"sm",style:{height:"80px","max-width":"80px"},"placeholder-src":"placeholder.png",class:"radius8 cursor-pointer",onClick:m[1]||(m[1]=te=>this.$refs.imagePreview.modal=!this.$refs.imagePreview.modal)},null,8,["src"])):c("",!0)],64))),128)),f.countGallery>0?(s(),i("div",Y,[n("div",{class:"dimmed absolute-top fit z-top flex flex-center cursor-pointer",onClick:m[2]||(m[2]=d=>this.$refs.imagePreview.modal=!this.$refs.imagePreview.modal)},[n("div",Z," +"+o(f.countGallery),1)]),r.MenuStore.data_gallery[l.slug][5]?(s(),g(v,{key:0,src:r.MenuStore.data_gallery[l.slug][5].thumbnail,"spinner-color":"secondary","spinner-size":"sm",style:{height:"80px","max-width":"80px"},"placeholder-src":"placeholder.png",class:"radius8"},null,8,["src"])):c("",!0)])):c("",!0)])):c("",!0)],64)):c("",!0)],64)):c("",!0)],64)),t(q,{ref:"imagePreview",gallery:f.getGallery,title:"Gallery"},null,8,["gallery"])]),_:1})],64)}var he=Q(N,[["render",$]]);export{he as default};
