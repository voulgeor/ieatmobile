import{Q as S}from"./QSkeleton.cf283b1c.js";import{_ as k,p as f,q as r,S as n,k as t,F as _,t as p,u as d,U as x,R as o,V as h,X as c,ad as g,ae as q,af as b,aa as C}from"./index.e1f31b72.js";import{S as V,a as Q}from"./swiper.min.64c28bed.js";import{u as B}from"./PromoStore.646dec30.js";const D={name:"MerchantPromoSlide",props:["merchant_id"],components:{Swiper:V,SwiperSlide:Q},setup(){return{PromoStore:B()}},data(){return{modal:!1,selected_index:0}},created(){Object.keys(this.PromoStore.data).length<=0?this.PromoStore.loadPromo(this.merchant_id):this.PromoStore.data[this.merchant_id]||this.PromoStore.loadPromo(this.merchant_id)},methods:{showDetails(e){this.selected_index=e,this.modal=!0},refresh(){this.PromoStore.loadPromo(this.merchant_id)}}},z={key:0,class:"row q-gutter-sm q-mb-sm"},N={class:"row fit items-center"},U={class:"col-2"},F={class:"col text-left"},M={class:"text-weight-bold no-margin line-normal ellipsis"},j={class:"text-grey ellipsis"},E={key:0,class:"row items-center q-gutter-sm q-mb-sm q-pb-sm border-bottom"},L={class:"text-weight-bold"},O={class:"text-weight-medium font12"},R={class:"text-grey font13"};function X(e,m,a,s,i,v){const w=f("swiper-slide"),P=f("swiper");return r(),n(_,null,[s.PromoStore.loading?(r(),n("div",z,[t(S,{height:"50px",square:"",class:"col-6 radius8"}),t(S,{height:"50px",square:"",class:"col-5 radius8"})])):(r(),n(_,{key:1},[s.PromoStore.data[a.merchant_id]?(r(),p(P,{key:0,"slides-per-view":1.3,"space-between":10,onSwiper:e.onSwiper,onSlideChange:e.onSlideChange,class:"q-mb-md"},{default:d(()=>[(r(!0),n(_,null,x(s.PromoStore.data[a.merchant_id],(l,y)=>(r(),p(w,{key:l,class:"row"},{default:d(()=>[t(h,{modelValue:e.category,"onUpdate:modelValue":m[0]||(m[0]=u=>e.category=u),unelevated:"","no-caps":"",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",class:"radius8 fit q-pa-sm",size:"sm",onClick:u=>v.showDetails(y)},{default:d(()=>[o("div",N,[o("div",U,[t(h,{round:"",color:"secondary",icon:l.promo_type=="voucher"?"local_offer":"las la-percent",unelevated:"",size:"xs",class:"radius8"},null,8,["icon"])]),o("div",F,[o("div",M,c(l.title),1),o("div",j,c(l.valid_to),1)])])]),_:2},1032,["modelValue","color","text-color","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","onSwiper","onSlideChange"])):g("",!0)],64)),t(C,{modelValue:i.modal,"onUpdate:modelValue":m[1]||(m[1]=l=>i.modal=l),position:"bottom"},{default:d(()=>[t(q,null,{default:d(()=>[t(b,{class:"q-pl-md"},{default:d(()=>[s.PromoStore.data[a.merchant_id][i.selected_index]?(r(),n("div",E,[t(h,{round:"",color:"secondary",icon:"las la-percent",unelevated:"",size:"xs",class:"radius8"}),o("div",null,[o("div",L,c(s.PromoStore.data[a.merchant_id][i.selected_index].title),1),o("div",O,c(s.PromoStore.data[a.merchant_id][i.selected_index].sub_title),1)])])):g("",!0),o("div",R,c(s.PromoStore.data[a.merchant_id][i.selected_index].valid_to),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var J=k(D,[["render",X]]);export{J as default};
