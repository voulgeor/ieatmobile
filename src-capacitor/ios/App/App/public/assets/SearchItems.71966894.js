import{_ as V,m as y,n as S,p as k,q as r,R as m,k as t,u as a,a8 as b,t as f,ac as g,F as u,U as w,aa as p,V as d,Q as n,ab as D,a2 as q,S as C,v,ar as Q,b0 as I}from"./index.f4219e68.js";import{Q as L}from"./QToolbarTitle.5cae28fa.js";import{Q as P}from"./QToolbar.9e0c5c2c.js";import{Q as T}from"./QHeader.93fda4a5.js";import{Q as x}from"./QList.e84f5512.js";import{Q as _}from"./QSkeleton.bf39a4ee.js";import{Q as B}from"./QImg.9e5fc9bf.js";import{Q as E}from"./QPage.11bfb4d0.js";import{Q as N}from"./QFooter.9460f9d6.js";import{u as R}from"./MenuStore.17c43ebf.js";import{u as M}from"./CartStore.400c9d7e.js";import"./QResizeObserver.8f0e5734.js";const z={name:"SearchItems",components:{SearchListFood:y(()=>v(()=>import("./SearchListFood.85fad1c9.js"),["assets/SearchListFood.85fad1c9.js","assets/QImg.9e5fc9bf.js","assets/index.f4219e68.js","assets/index.f7829e99.css","assets/QChip.1607d7b2.js","assets/QItemLabel.5e2891ed.js"])),ItemDetails:y(()=>v(()=>import("./ItemDetails.7c90864a.js"),["assets/ItemDetails.7c90864a.js","assets/index.f4219e68.js","assets/index.f7829e99.css","assets/QCircularProgress.9f9db7d0.js","assets/format.2a3572e1.js","assets/QImg.9e5fc9bf.js","assets/QChip.1607d7b2.js","assets/QBtnToggle.8af201e3.js","assets/QSelect.ecc94997.js","assets/QItemLabel.5e2891ed.js","assets/selection.babb8692.js","assets/rtl.4b414a6d.js","assets/QSpace.ac683136.js","assets/CartStore.400c9d7e.js","assets/FavoriteStore.44c9e337.js"]))},data(){return{slug:"",q:"",food_list:[],awaitingSearch:!1,item_added:!1}},setup(){const e=R(),s=M();return{MenuStore:e,CartStore:s}},created(){this.slug=this.$route.query.slug},watch:{q(e,s){if(!this.awaitingSearch){if(typeof this.q=="undefined"||this.q===null||this.q===""||this.q==="null"||this.q==="undefined")return!1;setTimeout(()=>{S.fetchDataPost("searchItems","q="+this.q+"&slug="+this.slug).then(h=>{console.debug(h),this.food_list=h.details.data}).catch(h=>{this.food_list=[]}).then(h=>{this.awaitingSearch=!1})},1e3)}this.awaitingSearch=!0}},computed:{hasFilter(){return!S.empty(this.q)},hasResults(){return Object.keys(this.food_list).length>0}},methods:{onClickitem(e){this.item_added=!1;const s={cat_id:e.cat_id,item_uuid:e.item_uuid};this.$refs.refItem.showItem2(s,this.slug)},afterAdditems(){this.item_added=!0,this.CartStore.getCart(!1,this.CartStore.cart_payload)}}},O={class:"col-12"},j={key:2,class:"flex flex-center",style:{"min-height":"89%"}},U={class:"text-center full-width"},H={class:"text-h5 text-weight-bold"},G={class:"text-grey font12"},J={class:"text-h5 text-weight-bold"},K={class:"text-grey font12"},W={class:"row items-center justify-between fit"},X={class:"text-weight-bold"},Y={class:"text-weight-bold"};function Z(e,s,h,o,l,c){const F=k("SearchListFood"),A=k("ItemDetails");return r(),m(u,null,[t(T,{reveal:"","reveal-offset":"10",class:b({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:a(()=>[t(P,null,{default:a(()=>[t(w,{onClick:s[0]||(s[0]=i=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(L,{class:"text-weight-bold"},{default:a(()=>[p(d(e.$t("Search menu items")),1)]),_:1})]),_:1})]),_:1},8,["class"]),t(E,{class:"q-pl-md q-pr-md row items-stretch"},{default:a(()=>[n("div",O,[t(D,{modelValue:l.q,"onUpdate:modelValue":s[2]||(s[2]=i=>l.q=i),label:e.$t("Search"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":"grey",borderless:"",class:"input-borderless"},{prepend:a(()=>[t(q,{name:"eva-search-outline",size:"sm"})]),append:a(()=>[c.hasFilter?(r(),f(q,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:s[1]||(s[1]=i=>this.q="")})):g("",!0)]),_:1},8,["modelValue","label","bg-color"]),c.hasResults&&c.hasFilter&&!l.awaitingSearch?(r(),f(x,{key:0,separator:""},{default:a(()=>[(r(!0),m(u,null,C(l.food_list,i=>(r(),f(Q,{key:i,onClick:$=>c.onClickitem(i),clickable:""},{default:a(()=>[t(F,{items:i,merchant_list:e.merchant_list},null,8,["items","merchant_list"])]),_:2},1032,["onClick"]))),128))]),_:1})):c.hasFilter&&l.awaitingSearch?(r(),f(x,{key:1},{default:a(()=>[(r(),m(u,null,C(8,i=>t(Q,{key:i},{default:a(()=>[t(I,{avatar:""},{default:a(()=>[t(_,{width:"80px",height:"80px"})]),_:1}),t(I,null,{default:a(()=>[t(_,{type:"text"}),t(_,{type:"text",class:"w-50"}),t(_,{type:"text",class:"w-70"}),t(_,{type:"text",class:"w-25"})]),_:1})]),_:2},1024)),64))]),_:1})):(r(),m("div",j,[n("div",U,[c.hasFilter&&!l.awaitingSearch?(r(),m(u,{key:0},[n("div",H,d(e.$t("No items found")),1),n("p",G,d(e.$t("Sorry, we couldn't find any results")),1)],64)):(r(),m(u,{key:1},[t(B,{src:"search.png",fit:"fill","spinner-color":"primary",style:{height:"80px","max-width":"80px"}}),n("div",J,d(e.$t("Search Items")),1),n("p",K,[p(d(e.$t("Search items from"))+" ",1),o.MenuStore.data_info[l.slug]?(r(),m(u,{key:0},[p(d(o.MenuStore.data_info[l.slug].restaurant_name),1)],64)):g("",!0)])],64))])]))]),t(A,{ref:"refItem",slug:l.slug,onAfterAdditems:c.afterAdditems},null,8,["slug","onAfterAdditems"])]),_:1}),o.CartStore.items_count>0&&l.item_added==!0?(r(),f(N,{key:0,reveal:"",class:b(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark",{"bg-primary":!o.CartStore.cart_reloading,"bg-grey-5":o.CartStore.cart_reloading}])},{default:a(()=>[t(w,{to:"/checkout",loading:o.CartStore.cart_loading,disable:!o.CartStore.canProceed,unelevated:"","text-color":"white","no-caps":"",class:"radius10 fit",color:{primary:!o.CartStore.cart_reloading,"grey-5":o.CartStore.cart_reloading}},{default:a(()=>[n("div",W,[n("div",X,d(e.$t("Checkout")),1),n("div",Y,d(o.CartStore.cart_subtotal.value),1)])]),_:1},8,["loading","disable","color"])]),_:1},8,["class"])):g("",!0)],64)}var ue=V(z,[["render",Z]]);export{ue as default};