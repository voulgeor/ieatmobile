import{_ as b,m as q,v as Q,r,o as V,p,q as o,R as l,F as c,k as d,Q as s,V as u,t as k,u as f,S as B,aa as C,ac as x,U as I,n as y}from"./index.f4219e68.js";import{Q as S}from"./QSkeleton.bf39a4ee.js";import{Q as D}from"./QImg.9e5fc9bf.js";import{u as z}from"./CartStore.400c9d7e.js";import{u as L}from"./MenuStore.17c43ebf.js";import{S as N,a as T}from"./swiper.min.3fe7e42b.js";const E={name:"SimilarItems",props:["title","bg","merchant_id"],components:{Swiper:N,SwiperSlide:T,ItemDetails:q(()=>Q(()=>import("./ItemDetails.7c90864a.js"),["assets/ItemDetails.7c90864a.js","assets/index.f4219e68.js","assets/index.f7829e99.css","assets/QCircularProgress.9f9db7d0.js","assets/format.2a3572e1.js","assets/QImg.9e5fc9bf.js","assets/QChip.1607d7b2.js","assets/QBtnToggle.8af201e3.js","assets/QSelect.ecc94997.js","assets/QItemLabel.5e2891ed.js","assets/selection.babb8692.js","assets/rtl.4b414a6d.js","assets/QSpace.ac683136.js","assets/CartStore.400c9d7e.js","assets/FavoriteStore.44c9e337.js"]))},setup(a){const v=r(0),n=r(!1),i=r([]),w=r(2),h=r([]),_=r(null),g=r(["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]),m=z(),e=L();return V(()=>{Object.keys(e.data_similar_items).length<=0?e.getSimilarItems(a.merchant_id):e.data_similar_items[a.merchant_id]||e.getSimilarItems(a.merchant_id)}),{slide:v,loading:n,data:i,getSimilarItems:()=>{n.value=!0,y.SimilarItems(y.getStorage("cart_uuid"),w.value).then(t=>{i.value=t.details}).catch(t=>{console.debug(t)}).then(t=>{n.value=!1})},onClickitem:t=>{const A={cat_id:t.cat_id,item_uuid:t.item_uuid};_.value.showItem2(A,m.cart_merchant.slug)},getMoneyConfig:()=>{y.getMoneyConfig().then(t=>{h.value=t.details}).catch(t=>{}).then(t=>{})},moneyConfig:h,CartStore:m,afterAdditems:t=>{m.getCart(!1,g.value)},refItem:_,MenuStore:e}}},P={class:"row q-gutter-sm"},F={class:"col-9"},H={class:"col-2"},O={class:"text-weight-bold q-mb-xs"},R={class:"row fit items-center q-gutter-sm"},j={class:"col-6 text-left"},U={class:"font13 text-weight-bold ellipsis"},G=["innerHTML"],J={class:"text-grey-7 font12 text-weight-medium"},K={class:"col-3"},W={class:"col-1"};function X(a,v,n,i,w,h){const _=p("swiper-slide"),g=p("swiper"),m=p("ItemDetails");return o(),l(c,null,[i.MenuStore.loading_similar_items?(o(),l(c,{key:0},[d(S,{type:"text",style:{width:"80px"}}),s("div",P,[s("div",F,[d(S,{height:"60px",square:"",class:"radius8"})]),s("div",H,[d(S,{height:"60px",square:"",class:"radius8"})])])],64)):(o(),l(c,{key:1},[s("div",O,u(n.title),1),i.MenuStore.data_similar_items[n.merchant_id]?(o(),k(g,{key:0,"slides-per-view":1.2,"space-between":10,onSwiper:a.onSwiper,onSlideChange:a.onSlideChange,class:"q-mb-md"},{default:f(()=>[(o(!0),l(c,null,B(i.MenuStore.data_similar_items[n.merchant_id],e=>(o(),k(_,{key:e,class:"row"},{default:f(()=>[d(I,{unelevated:"","no-caps":"",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark",class:"radius8 fit line-normal",size:"md",onClick:M=>i.onClickitem(e)},{default:f(()=>[s("div",R,[s("div",j,[s("div",U,u(e.item_name),1),s("div",{class:"font12 text-weight-light ellipsis-2-lines fit",innerHTML:e.item_description},null,8,G),s("div",J,[e.price[0]?(o(),l(c,{key:0},[e.price[0].discount>0?(o(),l(c,{key:0},[C(u(e.price[0].pretty_price_after_discount),1)],64)):(o(),l(c,{key:1},[C(u(e.price[0].pretty_price),1)],64))],64)):x("",!0)])]),s("div",K,[d(D,{src:e.url_image,lazy:"",fit:"cover",style:{height:"60px",width:"60px"},"spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),s("div",W,[d(I,{round:"",unelevated:"",color:"primary","text-color":"white",size:"7px",icon:"las la-plus"})])])]),_:2},1032,["color","text-color","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","onSwiper","onSlideChange"])):x("",!0)],64)),d(m,{ref:"refItem",slug:i.CartStore.cart_merchant.slug,money_config:i.MenuStore.money_config,onAfterAdditems:i.afterAdditems},null,8,["slug","money_config","onAfterAdditems"])],64)}var ne=b(E,[["render",X]]);export{ne as default};
