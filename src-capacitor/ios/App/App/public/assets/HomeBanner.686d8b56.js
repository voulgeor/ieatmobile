import{Q as u}from"./QSkeleton.9911c710.js";import{Q as _}from"./QImg.1391a400.js";import{S as f,a as h}from"./swiper.min.b4ecb0a9.js";import{_ as S,a1 as g,p as n,q as e,t as a,S as s,u as o,F as i,U as k,k as D,ad as w}from"./index.7194caca.js";const y={name:"HomeBanner",components:{Swiper:f,SwiperSlide:h},data(){return{loading:!1,slide:1,data:[]}},setup(){return{DataStore:g()}},mounted(){Object.keys(this.DataStore.banner).length<=0&&this.DataStore.getBanner()},computed:{hasData(){return this.DataStore.banner.length>0}},methods:{}};function b(l,B,x,t,Q,c){const m=n("swiper-slide"),p=n("swiper");return t.DataStore.banner_loading?(e(),a(u,{key:0,height:"130px"})):(e(),s(i,{key:1},[c.hasData?(e(),a(p,{key:0,slidesPerView:1,spaceBetween:0,loop:!0,class:"q-mb-md"},{default:o(()=>[(e(!0),s(i,null,k(t.DataStore.banner,(r,d)=>(e(),a(m,{key:r.banner_id,name:d,style:{height:"130px"}},{default:o(()=>[D(_,{src:r.image,class:"fit radius10",fit:"cover",loading:"lazy","spinner-color":"primary","spinner-size":"md"},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1})):w("",!0)],64))}var z=S(y,[["render",b]]);export{z as default};