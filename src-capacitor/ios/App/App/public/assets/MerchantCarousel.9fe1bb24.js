import{Q as p}from"./QSkeleton.4f208b76.js";import{Q as k}from"./QChip.3e943c18.js";import{S as C,a as V}from"./swiper.min.b6cd3195.js";import{_ as z,a1 as B,n as u,p as f,q as a,S as i,F as n,U as g,R as d,k as c,t as y,u as m,b6 as F,ad as h,X as _,ab as v,a9 as w}from"./index.a3a9b403.js";const M={props:["list_type","featured_id","filters","index"],name:"MerchantCarousel",components:{Swiper:C,SwiperSlide:V},data(){return{loading:!0,slide:0,data:[],cuisine:[],reviews:[],estimation:[],services:[],items_min_max:[]}},setup(){return{DataStore:B()}},mounted(){u.empty(this.DataStore.car_data[this.index])?this.getData(this.index):Object.keys(this.DataStore.car_data[this.index]).length<=0&&this.getData(this.index)},watch:{filters:{handler(t,s){console.log("carousel new filters"),this.getData(this.index)},deep:!0}},methods:{getData(t){const s={list_type:this.list_type,featured_id:this.featured_id,place_id:u.getStorage("place_id"),rows:0,payload:["cuisine","reviews","estimation","services","items_min_max"],filters:this.filters};this.DataStore.getCarouselData(s,t)},getFeaturedMerchant(){const t={list_type:this.list_type,featured_id:this.featured_id,place_id:u.getStorage("place_id"),rows:0,payload:["cuisine","reviews","estimation","services","items_min_max"],filters:this.filters};this.loading=!0,u.getMerchantFeed(t).then(s=>{this.data=s.details.data,this.cuisine=s.details.cuisine,this.reviews=s.details.reviews,this.estimation=s.details.estimation,this.services=s.details.services,this.items_min_max=s.details.items_min_max}).catch(s=>{this.data=[],this.cuisine=[],this.reviews=[],this.estimation=[],this.services=[],this.items_min_max=[]}).then(s=>{this.loading=!1})}}},N={key:0,class:"row q-gutter-sm items-center"},Q={class:"fit"},P={key:0,class:"absolute-top fit light-dimmed"},j={class:"text-left"},A={class:"ellipsis font13 text-weight-bold q-pt-xs"},E={class:"text-grey font12 line-1 ellipsis"};function I(t,s,o,r,x,L){const S=f("router-link"),D=f("swiper-slide"),q=f("swiper");return r.DataStore.car_loading[o.index]?(a(),i("div",N,[(a(),i(n,null,g(3,e=>d("div",{key:e,class:"col"},[c(p,{height:"90px",class:"full-width"}),c(p,{type:"text",class:"w-75"}),c(p,{type:"text",class:"w-100"})])),64))])):(a(),y(q,{key:1,slidesPerView:r.DataStore.total_found[o.index],spaceBetween:10,loop:!0,onSwiper:t.onSwiper},{default:m(()=>[(a(!0),i(n,null,g(r.DataStore.car_data[o.index],e=>(a(),y(D,{key:e,class:"row"},{default:m(()=>[d("div",Q,[c(S,{to:{name:"menu",params:{slug:e.restaurant_slug}}},{default:m(()=>[d("div",{class:"bg-grey-2 radius8 relative-position",style:F([{height:"90px"},`background-image: url(${e.url_logo}) !important;background-size:cover!important;min-height:100%;`])},[e.open_status==0?(a(),i("div",P)):h("",!0)],4)]),_:2},1032,["to"]),d("div",j,[d("div",A,_(e.restaurant_name),1),d("div",E,[(a(!0),i(n,null,g(e.cuisine_group,l=>(a(),i(n,{key:l},[x.cuisine[l]?(a(),i(n,{key:0},[v(_(x.cuisine[l].name)+", ",1)],64)):h("",!0)],64))),128))]),c(k,{size:"sm","text-color":t.$q.dark.mode?"grey300":"secondary",icon:"star",class:"no-padding transparent"},{default:m(()=>[r.DataStore.car_reviews[e.merchant_id]?(a(),i("span",{key:0,class:w(["text-weight-medium",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},_(r.DataStore.car_reviews[e.merchant_id].ratings),3)):(a(),i("span",{key:1,class:w(["text-weight-medium text-dark",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},"0",2))]),_:2},1032,["text-color"]),c(k,{size:"sm","text-color":t.$q.dark.mode?"grey300":"secondary",icon:"fiber_manual_record",class:"no-padding transparent"},{default:m(()=>[d("span",{class:w(["text-weight-medium",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},[r.DataStore.car_estimation[o.index][e.merchant_id]&&r.DataStore.car_services[o.index][e.merchant_id]?(a(!0),i(n,{key:0},g(r.DataStore.car_services[o.index][e.merchant_id],(l,b)=>(a(),i(n,null,[b<=0?(a(),i(n,{key:0},[r.DataStore.car_estimation[o.index][e.merchant_id][l][e.charge_type]?(a(),i(n,{key:0},[v(_(r.DataStore.car_estimation[o.index][e.merchant_id][l][e.charge_type].estimation)+" "+_(t.$t("min")),1)],64)):h("",!0)],64)):h("",!0)],64))),256)):h("",!0)],2)]),_:2},1032,["text-color"])])])]),_:2},1024))),128))]),_:1},8,["slidesPerView","onSwiper"]))}var X=z(M,[["render",I]]);export{X as default};
