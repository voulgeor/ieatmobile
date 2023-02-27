import{_ as O,m as v,n as u,p as y,q as l,S as h,k as e,u as r,t as m,a9 as q,ad as w,F as _,V as g,ab as H,X as f,R as n,ac as L,a3 as F,U as b,v as C,as as k,b3 as A}from"./index.744ddfee.js";import{Q as P}from"./QToolbarTitle.edce3d93.js";import{Q as B}from"./QToolbar.01a69a96.js";import{Q as E}from"./QHeader.a6882fe1.js";import{Q as j}from"./QSpace.7abc6e90.js";import{Q}from"./QTab.a9079b2e.js";import{Q as D}from"./QTabs.772ec70c.js";import{Q as S}from"./QList.dcc86a9b.js";import{Q as J,a as x}from"./QTabPanels.e232f2a0.js";import{Q as p}from"./QSkeleton.518780b8.js";import{Q as U}from"./QBtnToggle.c850cb3d.js";import{Q as z}from"./QImg.be7f5b67.js";import{Q as M}from"./QPage.9848fef2.js";import{Q as X}from"./QFooter.76206379.js";import{u as G}from"./CartStore.0e1db4ba.js";import"./QResizeObserver.a8794211.js";import"./rtl.8137048b.js";import"./use-panel.24579740.js";import"./touch.16a8a914.js";import"./selection.96b055eb.js";import"./use-cache.b95af379.js";const K={name:"QuickSearchResultsPage",data(){return{tab:"all",q:"",merchant_data:[],cuisine:[],food_list:[],merchant_list:[],money_config:[],loading:!1,awaitingSearch:!1,data_recent:[],search_history:[],all_data:[],slug:"",item_added:!1}},setup(){return{CartStore:G()}},components:{SearchListMerchant:v(()=>C(()=>import("./SearchListMerchant.370aaaa9.js"),["assets/SearchListMerchant.370aaaa9.js","assets/QImg.be7f5b67.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QChip.3142caef.js","assets/QItemLabel.c3909d74.js"])),SearchListFood:v(()=>C(()=>import("./SearchListFood.94708ea5.js"),["assets/SearchListFood.94708ea5.js","assets/QImg.be7f5b67.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QChip.3142caef.js","assets/QItemLabel.c3909d74.js"])),ItemDetails:v(()=>C(()=>import("./ItemDetails.e596e857.js"),["assets/ItemDetails.e596e857.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QCircularProgress.c5db608e.js","assets/format.ec2e0666.js","assets/QImg.be7f5b67.js","assets/QChip.3142caef.js","assets/QBtnToggle.c850cb3d.js","assets/QSelect.1170d3a9.js","assets/QItemLabel.c3909d74.js","assets/selection.96b055eb.js","assets/rtl.8137048b.js","assets/QSpace.7abc6e90.js","assets/CartStore.0e1db4ba.js","assets/FavoriteStore.e12dd1fd.js"]))},created(){this.getSearchHistory()},computed:{hasHistory(){return Object.keys(this.data_recent).length>0},hasFilter(){return!u.empty(this.q)},hasResults(){return Object.keys(this.all_data).length>0}},watch:{q(t,s){if(!this.awaitingSearch){if(typeof this.q=="undefined"||this.q===null||this.q===""||this.q==="null"||this.q==="undefined")return!1;setTimeout(()=>{this.saveHistory(),this.tab="all",u.Search(this.q,u.getStorage("place_id")).then(i=>{console.debug(i),this.merchant_data=i.details.merchant_data,this.cuisine=i.details.cuisine,this.food_list=i.details.food_list,this.merchant_list=i.details.merchant_list,this.money_config=i.details.money_config,this.all_data=this.merchant_data.concat(this.food_list)}).catch(i=>{this.merchant_data=[],this.cuisine=[],this.food_list=[],this.merchant_list=[]}).then(i=>{this.awaitingSearch=!1})},1e3)}this.awaitingSearch=!0}},methods:{clearField(){this.q="",this.Focus()},getSearchHistory(){const t=u.getStorage("search_history");if(!u.empty(t)){let s=JSON.parse(t);Object.keys(s).length>0&&(this.data_recent=[],Object.entries(s).forEach(([i,c])=>{this.data_recent.push({label:c,value:c})}))}},saveHistory(){console.log("saveHistory");const t=u.getStorage("search_history");let s=[],i=0;u.empty(t)?(s.push(this.q),u.setStorage("search_history",JSON.stringify(s))):(s=JSON.parse(t),i=s.length,console.log(s),i>4&&s.splice(0,1),s.includes(this.q)||(s.push(this.q),u.setStorage("search_history",JSON.stringify(s))),this.getSearchHistory())},removeHistory(){this.data_recent=[],u.setStorage("search_history",JSON.stringify(this.data_recent))},onClickResult(t){if(console.log(t),t.restaurant_name)this.$router.push({name:"menu",params:{slug:t.restaurant_slug}});else{this.item_added=!1,this.slug=t.slug;const s={cat_id:t.cat_id,item_uuid:t.item_uuid};this.$refs.refItem.showItem2(s,this.slug)}},afterAdditems(){console.log("afterAdditems"),this.item_added=!0,this.CartStore.getCart(!1,this.CartStore.cart_payload)}}},W={class:"q-pl-md q-pr-md"},Y={key:0,class:"min-height-inherit flex flex-center"},Z={class:"full-width text-center q-pb-xl"},$={class:"text-h5 text-weight-bold"},ee={class:"text-grey font12"},te={key:1,class:"q-pl-md q-pr-md"},ae={class:"row item-center justify-between"},se={class:"font13 text-weight-bold text-h5"},re={key:0},oe={class:"flex flex-center",style:{"min-height":"300px"}},le={class:"full-width text-center"},ie={class:"text-h5 text-weight-bold"},ne={class:"text-grey font12"},ce={class:"row items-center justify-between fit"},de={class:"text-weight-bold"},ue={class:"text-weight-bold"};function he(t,s,i,c,a,d){const T=y("NotiButton"),V=y("SearchListMerchant"),R=y("SearchListFood"),N=y("ItemDetails");return l(),h(_,null,[e(E,{reveal:"","reveal-offset":"50",class:"bg-transparent text-dark"},{default:r(()=>[e(B,null,{default:r(()=>[e(g,{to:"/home",flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),e(P,{class:q(["text-weight-bold",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},{default:r(()=>[H(f(t.$t("Search")),1)]),_:1},8,["class"]),e(T)]),_:1})]),_:1}),e(M,null,{default:r(()=>[n("div",W,[e(L,{modelValue:a.q,"onUpdate:modelValue":s[1]||(s[1]=o=>a.q=o),label:t.$t("Search food and restaurants"),outlined:"","lazy-rules":"","bg-color":t.$q.dark.mode?"grey600":"input","label-color":t.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},{prepend:r(()=>[e(F,{name:"eva-search-outline",size:"sm"})]),append:r(()=>[d.hasFilter?(l(),m(F,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:s[0]||(s[0]=o=>this.q="")})):w("",!0)]),_:1},8,["modelValue","label","bg-color","label-color"])]),e(j,{class:"q-pa-xs"}),d.hasResults&&d.hasFilter&&!a.awaitingSearch?(l(),h(_,{key:0},[e(D,{modelValue:a.tab,"onUpdate:modelValue":s[2]||(s[2]=o=>a.tab=o),dense:"","active-color":"red","indicator-color":"white",align:"justify","narrow-indicator":"",shrink:"","switch-indicator":"false",class:"text-grey"},{default:r(()=>[e(Q,{name:"all","no-caps":"",class:"no-wrap q-pa-none"},{default:r(()=>[e(g,{label:t.$t("All"),unelevated:"","no-caps":"",color:a.tab=="all"?"primary":"mygrey","text-color":a.tab=="all"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1}),e(Q,{name:"restaurant","no-caps":"",class:"q-pa-none"},{default:r(()=>[e(g,{label:t.$t("Restaurants"),unelevated:"","no-caps":"",color:a.tab=="restaurant"?"primary":"mygrey","text-color":a.tab=="restaurant"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1}),e(Q,{name:"food","no-caps":"",class:"q-pa-none"},{default:r(()=>[e(g,{label:t.$t("Food"),unelevated:"","no-caps":"",color:a.tab=="food"?"primary":"mygrey","text-color":a.tab=="food"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1})]),_:1},8,["modelValue"]),e(J,{modelValue:a.tab,"onUpdate:modelValue":s[3]||(s[3]=o=>a.tab=o),animated:"","transition-next":"fade","transition-prev":"fade",class:q({"bg-mydark ":t.$q.dark.mode,"bg-white ":!t.$q.dark.mode})},{default:r(()=>[e(x,{name:"all",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(_,null,b(a.all_data,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[o.restaurant_name?(l(),m(V,{key:0,items:o,cuisine:a.cuisine},null,8,["items","cuisine"])):(l(),m(R,{key:1,items:o,merchant_list:a.merchant_list,money_config:a.money_config},null,8,["items","merchant_list","money_config"]))]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),e(x,{name:"restaurant",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(_,null,b(a.merchant_data,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[e(V,{items:o,cuisine:a.cuisine},null,8,["items","cuisine"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),e(x,{name:"food",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(_,null,b(a.food_list,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[e(R,{items:o,merchant_list:a.merchant_list,money_config:a.money_config},null,8,["items","merchant_list","money_config"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"])],64)):d.hasFilter&&a.awaitingSearch?(l(),m(S,{key:1},{default:r(()=>[(l(),h(_,null,b(8,o=>e(k,{key:o},{default:r(()=>[e(A,{avatar:""},{default:r(()=>[e(p,{width:"80px",height:"80px"})]),_:1}),e(A,null,{default:r(()=>[e(p,{type:"text"}),e(p,{type:"text",class:"w-50"}),e(p,{type:"text",class:"w-70"}),e(p,{type:"text",class:"w-25"})]),_:1})]),_:2},1024)),64))]),_:1})):(l(),h(_,{key:2},[d.hasFilter&&!a.awaitingSearch?(l(),h("div",Y,[n("div",Z,[n("div",$,f(t.$t("No Restaurants found.")),1),n("p",ee,f(t.$t("Sorry, we couldn't find any results")),1)])])):(l(),h("div",te,[n("div",ae,[n("div",se,f(t.$t("Recently Search")),1),d.hasHistory?(l(),h("div",re,[e(g,{onClick:d.removeHistory,round:"",color:"grey",icon:"las la-times",size:"xs",flat:""},null,8,["onClick"])])):w("",!0)]),e(U,{modelValue:a.search_history,"onUpdate:modelValue":s[4]||(s[4]=o=>a.search_history=o),"toggle-color":"secondary",color:t.$q.dark.mode?"grey600":"mygrey","text-color":t.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1",options:a.data_recent,onClick:s[5]||(s[5]=o=>this.q=this.search_history)},null,8,["modelValue","color","text-color","options"]),n("div",oe,[n("div",le,[e(z,{src:"cuttery.png",fit:"fill","spinner-color":"primary",style:{height:"150px","max-width":"130px"}}),n("div",ie,f(t.$t("Search Restaurants")),1),n("p",ne,f(t.$t("Search your favourite cuisine and restaurants")),1)])])]))],64)),e(N,{ref:"refItem",slug:a.slug,onAfterAdditems:d.afterAdditems},null,8,["slug","onAfterAdditems"])]),_:1}),c.CartStore.items_count>0&&a.item_added==!0?(l(),m(X,{key:0,reveal:"",class:q(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark",{"bg-primary":!c.CartStore.cart_reloading,"bg-grey-5":c.CartStore.cart_reloading}])},{default:r(()=>[e(g,{to:"/checkout",loading:c.CartStore.cart_loading,disable:!c.CartStore.canProceed,unelevated:"","text-color":"white","no-caps":"",class:"radius10 fit",color:{primary:!c.CartStore.cart_reloading,"grey-5":c.CartStore.cart_reloading}},{default:r(()=>[n("div",ce,[n("div",de,f(t.$t("Checkout")),1),n("div",ue,f(c.CartStore.cart_subtotal.value),1)])]),_:1},8,["loading","disable","color"])]),_:1},8,["class"])):w("",!0)],64)}var Ne=O(K,[["render",he]]);export{Ne as default};
