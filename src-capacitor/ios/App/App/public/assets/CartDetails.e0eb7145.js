import{_ as w,m as q,v as z,n as m,p as S,q as a,t as f,u as c,k as l,S as s,U as y,R as i,V as v,b3 as x,ab as g,X as d,F as n,ad as k,a9 as b,as as V}from"./index.744ddfee.js";import{Q as D}from"./QInnerLoading.0d9aac1c.js";import{Q as F}from"./QImg.be7f5b67.js";import{Q as R}from"./QItemLabel.c3909d74.js";import{Q as $}from"./QSlideItem.a22de7be.js";import{Q as A}from"./QList.dcc86a9b.js";import{u as B}from"./CartStore.0e1db4ba.js";import"./QPullToRefresh.1523fcfc.js";import"./touch.16a8a914.js";import"./selection.96b055eb.js";import"./format.ec2e0666.js";import"./use-cache.b95af379.js";const L={name:"CartDetails",props:["payload","is_checkout","page"],components:{FavsItem:q(()=>z(()=>import("./FavsItem.0c1c9694.js"),["assets/FavsItem.0c1c9694.js","assets/index.744ddfee.js","assets/index.469535cd.css"]))},data(){return{loading:!1,items_count:0,cart_loading:!0,cart_reloading:!1,cart_uuid:"",cart_items:[],cart_summary:[],cart_merchant:[],cart_total:[],cart_subtotal:[],error:[],qty_options:[1,2,3,4,5,6,7,8,9],transaction_data:[],delivery_option:[],services_list:[],out_of_range:!1,is_close_slide:!1,data_slide:{}}},setup(){return{CartStore:B()}},methods:{updateCartQty(t,r,_){let h=r+t;_.qty=h,this.updateCartItems(h,_)},updateCartItems(t,r){this.loading=!0,m.updateCartItems(this.CartStore.cart_uuid,r.cart_row,t).then(_=>{this.CartStore.getCart(!1,this.payload)}).catch(_=>{m.notify("dark",_,"error",this.$q)}).then(_=>{this.loading=!1})},closeSlide(t){console.log(t),this.data_slide[t]&&(console.log(this.data_slide[t]),this.data_slide[t].reset())},onRight(t,r){this.data_slide[r]=t},removeItem(t){this.loading=!0,m.removeCartItem(this.CartStore.cart_uuid,t.cart_row).then(r=>{this.CartStore.getCart(!1,this.payload)}).catch(r=>{m.notify("dark",r,"error",this.$q)}).then(r=>{this.loading=!1})},clearCart(){this.loading=!1,m.clearCart(m.getStorage("cart_uuid")).then(t=>{this.CartStore.getCart(!1,this.payload)}).catch(t=>{m.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},afterSavefav(t){this.removeItem(t)},lineItemTotal(t,r){return console.log(t+"x"+r),parseFloat(r)*parseInt(t)}}},N={class:"row items-center inline q-gutter-md"},T={class:"font13 text-weight-bold no-margin line-normal"},E={class:"text-grey ellipsis-2-linesx font11 line-normal"},P={key:0,class:"text-dark"},j={class:"row justify-between items-center"},O={class:"text-grey-7 font12 text-weight-medium"},U={class:"col-5"},X={class:"row items-center justify-center"},G={class:"col no-padding text-center"},H={class:"col no-padding text-center text-weight-medium"},J={class:"col no-padding text-center"};function K(t,r,_,h,M,u){const C=S("DIV"),Q=S("FavsItem");return h.CartStore.cart_loading?(a(),f(C,{key:0},{default:c(()=>[l(D,{showing:!0,color:"primary",size:"md","label-class":"dark"})]),_:1})):(a(),f(C,{key:1},{default:c(()=>[h.CartStore.items_count>0?(a(),f(A,{key:0,separator:"",dense:""},{default:c(()=>[(a(!0),s(n,null,y(h.CartStore.cart_items,(e,I)=>(a(),f($,{key:e.item_id,onRight:o=>u.onRight(o,I),"left-color":"white","right-color":t.$q.dark.mode?"grey600":"white"},{right:c(()=>[i("div",N,[l(v,{round:"",unelevated:"",color:"lightprimary","text-color":"primary",size:"sm",icon:"las la-times",onClick:o=>u.closeSlide(I)},null,8,["onClick"]),l(Q,{ref_for:!0,ref:"favs",layout:2,item_token:e.item_token,cat_id:e.cat_id,active:!1,size:"md",onAfterSavefav:o=>u.afterSavefav(e)},null,8,["item_token","cat_id","onAfterSavefav"]),l(v,{round:"",unelevated:"",color:"lightprimary","text-color":"primary",size:"sm",icon:"las la-trash-alt",onClick:o=>u.removeItem(e)},null,8,["onClick"])])]),default:c(()=>[l(V,{class:b({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-black":!t.$q.dark.mode})},{default:c(()=>[l(x,{avatar:""},{default:c(()=>[l(F,{src:e.url_image,lazy:"",fit:"cover",style:{height:"70px",width:"70px"},class:"radius8","spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),_:2},1024),l(x,null,{default:c(()=>[l(R,null,{default:c(()=>[i("div",T,[g(d(e.item_name)+" ",1),e.price.size_name!=""?(a(),s(n,{key:0},[g(" ("+d(e.price.size_name)+") ",1)],64)):k("",!0)]),i("div",E,[(a(!0),s(n,null,y(e.attributes,o=>(a(),s(n,{key:o},[(a(!0),s(n,null,y(o,p=>(a(),s("span",{key:p,class:"q-mr-xs"},d(p)+",",1))),128))],64))),128)),(a(!0),s(n,null,y(e.addons,o=>(a(),s(n,{key:o},[(a(!0),s(n,null,y(o.addon_items,p=>(a(),s("div",{key:p},d(p.sub_item_name)+" (+"+d(p.pretty_addons_total)+") ",1))),128))],64))),128)),e.special_instructions!=""?(a(),s("div",P,' "'+d(e.special_instructions)+'" ',1)):k("",!0)]),i("div",j,[i("div",O,[e.price.discount<=0?(a(),s(n,{key:0},[g(d(e.price.pretty_total),1)],64)):(a(),s(n,{key:1},[g(d(e.price.pretty_total_after_discount),1)],64))]),i("div",U,[i("div",X,[i("div",G,[e.qty==1?(a(),f(v,{key:0,unelevated:"",dense:"",size:"11px",icon:"delete",color:"primary",class:"radius8",onClick:o=>u.removeItem(e)},null,8,["onClick"])):(a(),f(v,{key:1,unelevated:"",dense:"",size:"11px",icon:"remove",color:"primary",class:"radius8",onClick:o=>u.updateCartQty(-1,e.qty,e)},null,8,["onClick"]))]),i("div",H,d(e.qty),1),i("div",J,[l(v,{unelevated:"",dense:"",size:"11px",color:"primary",icon:"add",class:"radius8",onClick:o=>u.updateCartQty(1,e.qty,e)},null,8,["onClick"])])])])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1032,["onRight","right-color"]))),128))]),_:1})):k("",!0)]),_:1}))}var ct=w(L,[["render",K]]);export{ct as default};
