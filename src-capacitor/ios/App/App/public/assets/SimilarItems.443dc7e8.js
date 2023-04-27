import{_ as A,m as q,v as V,r,o as B,p as f,q as o,S as l,F as c,k as d,R as s,X as u,t as k,u as g,U as D,ab as C,ad as x,V as I,n as y}from"./index.a3a9b403.js";import{Q as S}from"./QSkeleton.4f208b76.js";import{Q}from"./QImg.d7a45a76.js";import{u as z}from"./CartStore.f7f72421.js";import{u as L}from"./MenuStore.4f007aa7.js";import{S as N,a as T}from"./swiper.min.b6cd3195.js";const E={name:"SimilarItems",props:["title","bg","merchant_id"],components:{Swiper:N,SwiperSlide:T,ItemDetails:q(()=>V(()=>import("./ItemDetails.7fc07743.js"),["assets/ItemDetails.7fc07743.js","assets/index.a3a9b403.js","assets/index.469535cd.css","assets/QCircularProgress.2ac8493e.js","assets/format.2a3572e1.js","assets/QImg.d7a45a76.js","assets/QChip.3e943c18.js","assets/QBtnToggle.06d0f9e4.js","assets/QSelect.782d8a98.js","assets/QItemLabel.0e0c1fe6.js","assets/selection.be4b730a.js","assets/rtl.b51694b1.js","assets/QSpace.eb4aa71a.js","assets/CartStore.f7f72421.js","assets/FavoriteStore.c2e4b362.js"]))},setup(a){const v=r(0),n=r(!1),i=r([]),w=r(2),h=r([]),_=r(null),p=r(["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]),m=z(),e=L();return B(()=>{Object.keys(e.data_similar_items).length<=0?e.getSimilarItems(a.merchant_id):e.data_similar_items[a.merchant_id]||e.getSimilarItems(a.merchant_id)}),{slide:v,loading:n,data:i,getSimilarItems:()=>{n.value=!0,y.SimilarItems(y.getStorage("cart_uuid"),w.value).then(t=>{i.value=t.details}).catch(t=>{console.debug(t)}).then(t=>{n.value=!1})},onClickitem:t=>{const b={cat_id:t.cat_id,item_uuid:t.item_uuid};_.value.showItem2(b,m.cart_merchant.slug)},getMoneyConfig:()=>{y.getMoneyConfig().then(t=>{h.value=t.details}).catch(t=>{}).then(t=>{})},moneyConfig:h,CartStore:m,afterAdditems:t=>{m.getCart(!1,p.value)},refItem:_,MenuStore:e}}},P={class:"row q-gutter-sm"},F={class:"col-9"},H={class:"col-2"},O={class:"text-weight-bold q-mb-xs"},R={class:"row fit items-center q-gutter-sm"},j={class:"col-6 text-left"},U={class:"font13 text-weight-bold ellipsis"},X=["innerHTML"],G={class:"text-white-1 font12 text-weight-medium"},J={class:"col-3"},K={class:"col-1"};function W(a,v,n,i,w,h){const _=f("swiper-slide"),p=f("swiper"),m=f("ItemDetails");return o(),l(c,null,[i.MenuStore.loading_similar_items?(o(),l(c,{key:0},[d(S,{type:"text",style:{width:"80px"}}),s("div",P,[s("div",F,[d(S,{height:"60px",square:"",class:"radius8"})]),s("div",H,[d(S,{height:"60px",square:"",class:"radius8"})])])],64)):(o(),l(c,{key:1},[s("div",O,u(n.title),1),i.MenuStore.data_similar_items[n.merchant_id]?(o(),k(p,{key:0,"slides-per-view":1.2,"space-between":10,onSwiper:a.onSwiper,onSlideChange:a.onSlideChange,class:"q-mb-md"},{default:g(()=>[(o(!0),l(c,null,D(i.MenuStore.data_similar_items[n.merchant_id],e=>(o(),k(_,{key:e,class:"row"},{default:g(()=>[d(I,{unelevated:"","no-caps":"",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark",class:"radius8 fit line-normal",size:"md",onClick:M=>i.onClickitem(e)},{default:g(()=>[s("div",R,[s("div",j,[s("div",U,u(e.item_name),1),s("div",{class:"font12 text-weight-light ellipsis-2-lines fit",innerHTML:e.item_description},null,8,X),s("div",G,[e.price[0]?(o(),l(c,{key:0},[e.price[0].discount>0?(o(),l(c,{key:0},[C(u(e.price[0].pretty_price_after_discount),1)],64)):(o(),l(c,{key:1},[C(u(e.price[0].pretty_price),1)],64))],64)):x("",!0)])]),s("div",J,[d(Q,{src:e.url_image,lazy:"",fit:"cover",style:{height:"60px",width:"60px"},"spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),s("div",K,[d(I,{round:"",unelevated:"",color:"primary","text-color":"white",size:"7px",icon:"las la-plus"})])])]),_:2},1032,["color","text-color","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","onSwiper","onSlideChange"])):x("",!0)],64)),d(m,{ref:"refItem",slug:i.CartStore.cart_merchant.slug,money_config:i.MenuStore.money_config,onAfterAdditems:i.afterAdditems},null,8,["slug","money_config","onAfterAdditems"])],64)}var ne=A(E,[["render",W]]);export{ne as default};
