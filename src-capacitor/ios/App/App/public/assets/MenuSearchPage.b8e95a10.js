import{_ as q,m as C,n as _,p as Q,q as t,R as i,k as a,u as o,t as p,ac as c,F as d,U as y,ab as v,b7 as x,a2 as k,V as s,Q as m,S as I,b1 as A,aa as f,v as F,ai as V,aq as D,ar as P,b0 as S,a$ as z}from"./index.bc7ef6d7.js";import{Q as B}from"./QToolbar.a26cb24b.js";import{Q as M}from"./QHeader.4fce4bc7.js";import{Q as N}from"./QSpace.81d240aa.js";import{Q as L}from"./QImg.6298c716.js";import{Q as b}from"./QItemLabel.655483ba.js";import{Q as O}from"./QList.5beea4c1.js";import{Q as T}from"./QPage.4ade84eb.js";import{Q as E}from"./QFooter.4be05767.js";import{u as R}from"./CartStore.3bfbaea8.js";import"./QResizeObserver.3eefdf89.js";const j={name:"MenuSearchPage",data(){return{q:"",data:[],slug:"",loading:!1,awaitingSearch:!1,money_config:[]}},setup(){return{CartStore:R()}},components:{ItemDetails:C(()=>F(()=>import("./ItemDetails.34bacd94.js"),["assets/ItemDetails.34bacd94.js","assets/index.bc7ef6d7.js","assets/index.f7829e99.css","assets/QCircularProgress.a206f3b9.js","assets/format.a74bec27.js","assets/QImg.6298c716.js","assets/QChip.55a9e2ca.js","assets/QBtnToggle.fb883b69.js","assets/QSelect.bc1c0cc7.js","assets/QItemLabel.655483ba.js","assets/selection.909320b2.js","assets/rtl.6ac1ebea.js","assets/QSpace.81d240aa.js","assets/CartStore.3bfbaea8.js","assets/FavoriteStore.d26d6007.js"]))},mounted(){this.slug=this.$route.params.slug,this.Focus(),this.getMoneyConfig()},computed:{totalFound(){return Object.keys(this.data).length},hasData(){return Object.keys(this.data).length>0},isSearch(){return!_.empty(this.q)}},watch:{q(e,l){if(!this.awaitingSearch){if(typeof this.q=="undefined"||this.q===null||this.q===""||this.q==="null"||this.q==="undefined")return this.data=[],!1;setTimeout(()=>{_.menuSearch(this.q,this.slug).then(g=>{this.data=g.details.data}).catch(g=>{this.data=[]}).then(g=>{this.awaitingSearch=!1})},1e3)}this.awaitingSearch=!0}},methods:{Focus(){this.$refs.items.focus()},clearField(){this.q="",this.Focus()},onSearch(e){this.loading=e},onClickitem(e){const l={cat_id:e.cat_id,item_uuid:e.item_uuid};console.debug(e),this.$refs.item_details.showItem2(l,this.slug)},afterAdditems(){console.debug("afterAdditems"),this.CartStore.getCartCount()},getMoneyConfig(){_.getMoneyConfig().then(e=>{this.money_config=e.details}).catch(e=>{}).then(e=>{})}}},U={key:0,class:"q-pa-md"},H={key:0,class:"no-margin text-weight-bold q-pb-sm"},G={class:"no-margin text-weight-bold"},J={class:"text-grey font13"},K={key:0,class:"q-mr-sm"},W={key:1,class:"q-mr-sm"},X={class:"row full-width items-center"},Y={class:"col text-left"},Z={class:"col text-weight-600"},$={class:"col text-right text-weight-bold"};function ee(e,l,g,h,n,u){const w=Q("ItemDetails");return t(),i(d,null,[a(M,null,{default:o(()=>[a(B,{class:"bg-white text-dark"},{default:o(()=>[a(y,{onClick:l[0]||(l[0]=r=>e.$router.back()),color:"white",rounded:"",unelevated:"","text-color":"dark",icon:"arrow_back",dense:"","no-caps":""}),a(v,{modelValue:n.q,"onUpdate:modelValue":l[2]||(l[2]=r=>n.q=r),ref:"items",label:e.$t("Search menu"),dense:"",outlined:"",color:"grey","bg-color":"white",class:"full-width input-borderless",loading:n.awaitingSearch},x({prepend:o(()=>[a(k,{name:"search"})]),_:2},[n.awaitingSearch?void 0:{name:"append",fn:o(()=>[u.isSearch?(t(),p(k,{key:0,onClick:l[1]||(l[1]=r=>u.clearField()),class:"cursor-pointer",name:"close"})):c("",!0)]),key:"0"}]),1032,["modelValue","label","loading"])]),_:1})]),_:1}),a(T,null,{default:o(()=>[a(N,{class:"q-pa-xs bg-grey-2"}),n.awaitingSearch?c("",!0):(t(),i(d,{key:0},[u.isSearch?(t(),i("div",U,[u.hasData?(t(),i("h5",H,s(e.$t("Search results for"))+" \u201C"+s(n.q)+"\u201D ("+s(u.totalFound)+") ",1)):(t(),i(d,{key:1},[m("h5",G,s(e.$t("No results for"))+" \u201C"+s(n.q)+"\u201D",1),m("p",J,s(e.$t("Sorry, no product matched for your search. Please try again.")),1)],64))])):c("",!0)],64)),n.awaitingSearch?c("",!0):(t(),p(O,{key:1},{default:o(()=>[(t(!0),i(d,null,I(n.data,r=>(t(),i(d,{key:r},[V((t(),p(P,{clickable:"",onClick:te=>u.onClickitem(r)},{default:o(()=>[a(S,{avatar:""},{default:o(()=>[a(L,{src:r.url_image,lazy:"",fit:"cover",style:{height:"50px",width:"50px"},class:"rounded-borders","spinner-color":"amber","spinner-size":"20px"},null,8,["src"])]),_:2},1024),a(S,null,{default:o(()=>[a(b,{lines:"1",class:"font12 text-weight-bold q-mb-sm"},{default:o(()=>[f(s(r.item_name),1)]),_:2},1024),a(b,{class:"font12 text-weight-medium"},{default:o(()=>[r.price[0]?(t(),i(d,{key:0},[r.price[0].discount<=0?(t(),i("span",K,s(r.price[0].size_name)+" "+s(r.price[0].pretty_price),1)):(t(),i("span",W,[f(s(r.price[0].size_name)+" ",1),m("del",null,s(r.price[0].pretty_price),1),f(" "+s(r.price[0].pretty_price_after_discount),1)]))],64)):c("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[D]]),a(z,{inset:""})],64))),128))]),_:1})),a(w,{ref:"item_details",slug:n.slug,money_config:n.money_config,onAfterAdditems:u.afterAdditems},null,8,["slug","money_config","onAfterAdditems"])]),_:1}),h.CartStore.hasData?(t(),p(E,{key:0,reveal:"",class:"bg-white q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:o(()=>[a(y,{to:"/cart",loading:h.CartStore.loading,unelevated:"",color:"primary","text-color":"dark","no-caps":"",class:"radius8 full-width"},{default:o(()=>[m("div",X,[m("div",Y,[a(A,{square:"",size:"24px",color:"amber-2","text-color":"dark",class:"text-weight-bold rounded-borders"},{default:o(()=>[h.CartStore.data?(t(),i(d,{key:0},[f(s(h.CartStore.data.items_count),1)],64)):c("",!0)]),_:1})]),m("div",Z,s(e.$t("View Order")),1),m("div",$,[h.CartStore.data?(t(),i(d,{key:0},[f(s(h.CartStore.data.data.subtotal.value),1)],64)):c("",!0)])])]),_:1},8,["loading"])]),_:1})):c("",!0)],64)}var he=q(j,[["render",ee]]);export{he as default};
