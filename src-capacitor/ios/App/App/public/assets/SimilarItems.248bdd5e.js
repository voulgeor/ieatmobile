import{_ as b,m as q,v as Q,r,o as V,p,q as o,R as l,F as c,j as d,Q as s,V as u,t as k,u as f,S as B,aa as C,ac as x,U as I,n as y}from"./index.b5428c1f.js";import{Q as S}from"./QSkeleton.4b3630c4.js";import{Q as D}from"./QImg.b4e6faf5.js";import{u as z}from"./CartStore.5dc457e4.js";import{u as L}from"./MenuStore.acc7e436.js";import{S as N,a as T}from"./swiper.min.0a8a5d49.js";const E={name:"SimilarItems",props:["title","bg","merchant_id"],components:{Swiper:N,SwiperSlide:T,ItemDetails:q(()=>Q(()=>import("./ItemDetails.e26d4f74.js"),["assets/ItemDetails.e26d4f74.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QCircularProgress.af8df0f1.js","assets/format.ec2e0666.js","assets/QImg.b4e6faf5.js","assets/QChip.bdda5644.js","assets/QBtnToggle.becf21c8.js","assets/QSelect.72c93ca6.js","assets/QItemLabel.25732301.js","assets/selection.099be30b.js","assets/rtl.9c6e6d3e.js","assets/QSpace.de8f976c.js","assets/CartStore.5dc457e4.js","assets/FavoriteStore.6c7dae2f.js"]))},setup(a){const v=r(0),n=r(!1),i=r([]),w=r(2),h=r([]),_=r(null),g=r(["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]),m=z(),e=L();return V(()=>{Object.keys(e.data_similar_items).length<=0?e.getSimilarItems(a.merchant_id):e.data_similar_items[a.merchant_id]||e.getSimilarItems(a.merchant_id)}),{slide:v,loading:n,data:i,getSimilarItems:()=>{n.value=!0,y.SimilarItems(y.getStorage("cart_uuid"),w.value).then(t=>{i.value=t.details}).catch(t=>{console.debug(t)}).then(t=>{n.value=!1})},onClickitem:t=>{const A={cat_id:t.cat_id,item_uuid:t.item_uuid};_.value.showItem2(A,m.cart_merchant.slug)},getMoneyConfig:()=>{y.getMoneyConfig().then(t=>{h.value=t.details}).catch(t=>{}).then(t=>{})},moneyConfig:h,CartStore:m,afterAdditems:t=>{m.getCart(!1,g.value)},refItem:_,MenuStore:e}}},P={class:"row q-gutter-sm"},j={class:"col-9"},F={class:"col-2"},H={class:"text-weight-bold q-mb-xs"},O={class:"row fit items-center q-gutter-sm"},R={class:"col-6 text-left"},U={class:"font13 text-weight-bold ellipsis"},G=["innerHTML"],J={class:"text-grey-7 font12 text-weight-medium"},K={class:"col-3"},W={class:"col-1"};function X(a,v,n,i,w,h){const _=p("swiper-slide"),g=p("swiper"),m=p("ItemDetails");return o(),l(c,null,[i.MenuStore.loading_similar_items?(o(),l(c,{key:0},[d(S,{type:"text",style:{width:"80px"}}),s("div",P,[s("div",j,[d(S,{height:"60px",square:"",class:"radius8"})]),s("div",F,[d(S,{height:"60px",square:"",class:"radius8"})])])],64)):(o(),l(c,{key:1},[s("div",H,u(n.title),1),i.MenuStore.data_similar_items[n.merchant_id]?(o(),k(g,{key:0,"slides-per-view":1.2,"space-between":10,onSwiper:a.onSwiper,onSlideChange:a.onSlideChange,class:"q-mb-md"},{default:f(()=>[(o(!0),l(c,null,B(i.MenuStore.data_similar_items[n.merchant_id],e=>(o(),k(_,{key:e,class:"row"},{default:f(()=>[d(I,{unelevated:"","no-caps":"",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark",class:"radius8 fit line-normal",size:"md",onClick:M=>i.onClickitem(e)},{default:f(()=>[s("div",O,[s("div",R,[s("div",U,u(e.item_name),1),s("div",{class:"font12 text-weight-light ellipsis-2-lines fit",innerHTML:e.item_description},null,8,G),s("div",J,[e.price[0]?(o(),l(c,{key:0},[e.price[0].discount>0?(o(),l(c,{key:0},[C(u(e.price[0].pretty_price_after_discount),1)],64)):(o(),l(c,{key:1},[C(u(e.price[0].pretty_price),1)],64))],64)):x("",!0)])]),s("div",K,[d(D,{src:e.url_image,lazy:"",fit:"cover",style:{height:"60px",width:"60px"},"spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),s("div",W,[d(I,{round:"",unelevated:"",color:"primary","text-color":"white",size:"7px",icon:"las la-plus"})])])]),_:2},1032,["color","text-color","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","onSwiper","onSlideChange"])):x("",!0)],64)),d(m,{ref:"refItem",slug:i.CartStore.cart_merchant.slug,money_config:i.MenuStore.money_config,onAfterAdditems:i.afterAdditems},null,8,["slug","money_config","onAfterAdditems"])],64)}var ne=b(E,[["render",X]]);export{ne as default};
