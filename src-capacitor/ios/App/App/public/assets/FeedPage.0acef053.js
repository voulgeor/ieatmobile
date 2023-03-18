import{_ as I,m as h,a1 as M,n as c,a2 as P,p as u,q as i,t as p,u as a,k as r,V as k,S as n,ab as f,X as _,F as l,ad as R,a9 as D,R as S,a3 as w,U as q,v as y,aj as C,ar as E,as as V,at as z}from"./index.e230319b.js";import{Q as N}from"./QToolbarTitle.259c42a1.js";import{Q as O}from"./QToolbar.6df38dcd.js";import{Q as B}from"./QHeader.4854892c.js";import{Q as $}from"./QSkeleton.2766fce7.js";import{Q as j}from"./QList.4869120a.js";import{Q as H,a as U}from"./QInfiniteScroll.aad24f73.js";import{Q as X}from"./QPage.225bb278.js";import{Q as G}from"./QPullToRefresh.e2610cc4.js";import{u as J}from"./CartStore.2b560f43.js";import"./QResizeObserver.14e0edf7.js";import"./touch.70a9dd44.js";import"./selection.69ceab22.js";import"./format.2a3572e1.js";const K={name:"FeedPage",components:{MerchantListInline:h(()=>y(()=>import("./MerchantListInline.7587c2d4.js"),["assets/MerchantListInline.7587c2d4.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QImg.0fbb4b94.js","assets/QChip.cd74be9a.js","assets/QItemLabel.a48bebab.js"])),MerchantListTpl:h(()=>y(()=>import("./MerchantListTpl.3e1d1538.js"),["assets/MerchantListTpl.3e1d1538.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QImg.0fbb4b94.js","assets/QChip.cd74be9a.js"])),MerchantListSkeleton:h(()=>y(()=>import("./MerchantListSkeleton.71fcb9eb.js"),["assets/MerchantListSkeleton.71fcb9eb.js","assets/QSkeleton.2766fce7.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QList.4869120a.js"])),SortList:h(()=>y(()=>import("./SortList.349c0cef.js"),["assets/SortList.349c0cef.js","assets/QItemLabel.a48bebab.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QList.4869120a.js"])),MerchantFilter:h(()=>y(()=>import("./MerchantFilter.fd753dec.js"),["assets/MerchantFilter.fd753dec.js","assets/QToolbarTitle.259c42a1.js","assets/index.e230319b.js","assets/index.469535cd.css","assets/QSpace.e9701f98.js","assets/QToolbar.6df38dcd.js","assets/QBtnToggle.2ee9a314.js","assets/QPullToRefresh.e2610cc4.js","assets/touch.70a9dd44.js","assets/selection.69ceab22.js","assets/format.2a3572e1.js","assets/QFooter.10036f87.js","assets/QResizeObserver.14e0edf7.js","assets/DeliverySched.b3fa3c7a.js"])),NoResults:h(()=>y(()=>import("./NoResults.45df3ae5.js"),["assets/NoResults.45df3ae5.js","assets/QImg.0fbb4b94.js","assets/index.e230319b.js","assets/index.469535cd.css"]))},data(){return{loading:!0,list_type:"",featured_id:"",data:[],cuisine:[],reviews:[],estimation:[],services:[],items_min_max:[],title:"",page:0,sort_by:"",total_found:0,filters:[],transactionType:"",menu_type:"column",cuisine_id:"",cuisine_name:"",page_title:"",promos:[],payload:["cuisine","reviews","estimation","services","items_min_max","offers","promo"]}},setup(){const e=J(),o=M();return{CartStore:e,DataStore:o}},watch:{menu_type(e,o){console.log(e),c.setStorage("listType",e)}},created(){this.transactionType=c.getStorage("transaction_type"),this.list_type=this.$route.query.query,this.featured_id=this.$route.query.featured_id,this.cuisine_id=this.$route.query.cuisine_id,this.cuisine_name=this.$route.query.cuisine_name,this.page_title=this.$route.query.page_title,this.cuisine_id>0&&(this.filters={cuisine:[this.cuisine_id]});let e=c.getStorage("listType");c.empty(e)||(this.menu_type=e),Object.keys(this.DataStore.featured_data).length<=0&&this.DataStore.getFeaturedList(),this.DataStore.hasDataCuisine()||this.DataStore.CuisineList()},computed:{hasData(){return this.data.length>0},switchIconList(){return this.menu_type=="list"?"grid_view":"reorder"}},methods:{refresh(e){e(),this.resetPagination()},getMerchantFeed(e,o){const g={list_type:this.list_type,featured_id:this.featured_id,place_id:c.getStorage("place_id"),payload:this.payload,page:e,sort_by:this.sort_by,filters:this.filters};this.list_type==="featured"&&(g.featured_id=this.featured_id),this.loading=!0,P.authenticated()?c.fetchDataByToken("getMerchantFeed2",g).then(t=>{this.page=e,t.code==1?(this.data.push(t.details.data),this.cuisine=t.details.cuisine,this.reviews=t.details.reviews,this.estimation=t.details.estimation,this.services=t.details.services,this.items_min_max=t.details.items_min_max,this.total_found=t.details.total_found,this.promos=t.details.promos):(this.total_found=t.details.total_found,this.$refs.nscroll.stop())}).catch(t=>{this.$refs.nscroll&&this.$refs.nscroll.stop(),this.total_found=0}).then(t=>{this.loading=!1,o()}):c.getMerchantFeed(g).then(t=>{this.page=e,t.code==1?(this.data.push(t.details.data),this.cuisine=t.details.cuisine,this.reviews=t.details.reviews,this.estimation=t.details.estimation,this.services=t.details.services,this.items_min_max=t.details.items_min_max,this.total_found=t.details.total_found,this.promos=t.details.promos):(this.total_found=t.details.total_found,this.$refs.nscroll.stop())}).catch(t=>{this.$refs.nscroll.stop(),this.total_found=0}).then(t=>{this.loading=!1,o()})},afterSelectsort(e){console.log("afterSelectsort=>"+e),this.sort_by=e,this.resetPagination(),this.page=0},applyFilter(e){this.filters=e,this.filters.transaction_type=this.transactionType,this.resetPagination(),this.page=0},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},filterAgain(){console.log("filterAgain"),this.$refs.merchant_filter.filter=!0}}},W={class:"row items-center justify-between no-wrap"},Y={class:"row items-center no-wrap full-width"},Z={class:"text-center q-pr-sm"},ee={key:0,class:"text-grey q-pt-sm q-pb-xs"},te={key:1,class:"row justify-center absolute-bottom"};function se(e,o,g,t,s,m){const L=u("NoResults"),x=u("DIV"),F=u("MerchantListInline"),T=u("MerchantListTpl"),b=u("MerchantListSkeleton"),Q=u("SortList"),A=u("MerchantFilter");return i(),p(G,{onRefresh:m.refresh},{default:a(()=>[r(B,{reveal:"","reveal-offset":"50",class:D({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[r(O,null,{default:a(()=>[r(k,{onClick:o[0]||(o[0]=d=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(N,{class:"text-weight-bold"},{default:a(()=>[t.DataStore.featured_data[this.featured_id]?(i(),n(l,{key:0},[f(_(e.$t(t.DataStore.featured_data[this.featured_id])),1)],64)):s.cuisine_name?(i(),n(l,{key:1},[f(_(e.$t(s.cuisine_name)),1)],64)):s.page_title?(i(),n(l,{key:2},[f(_(e.$t(s.page_title)),1)],64)):R("",!0)]),_:1})]),_:1})]),_:1},8,["class"]),r(X,{padding:""},{default:a(()=>[r(x,{class:"q-pl-md q-pr-md"},{default:a(()=>[S("div",W,[r(k,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark","icon-size":"11px",unelevated:"","no-caps":"",size:"md",class:"radius10",onClick:o[1]||(o[1]=d=>this.$refs.sort_list.show_modal=!0)},{default:a(()=>[S("div",Y,[S("div",Z,[t.DataStore.sort_list[s.sort_by]?(i(),n(l,{key:0},[f(_(t.DataStore.sort_list[s.sort_by]),1)],64)):(i(),n(l,{key:1},[f(_(e.$t("Sort")),1)],64))]),r(w,{name:"las la-angle-down",size:"15px"})])]),_:1},8,["color","text-color"]),S("div",null,[r(k,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",unelevated:"","no-caps":"",round:"",size:"12px",class:"q-mr-sm",onClick:o[2]||(o[2]=d=>this.menu_type=this.menu_type=="list"?"column":"list")},{default:a(()=>[r(w,{name:m.switchIconList},null,8,["name"])]),_:1},8,["color","text-color"]),r(k,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",unelevated:"","no-caps":"",round:"",size:"12px",onClick:o[3]||(o[3]=d=>this.$refs.merchant_filter.filter=!0)},{default:a(()=>[r(w,{name:"tune"})]),_:1},8,["color","text-color"])])]),s.loading&&s.page<=0?(i(),n("div",ee,[r($,{type:"text",style:{width:"100px"}})])):(i(),n("div",{key:1,class:D(["text-grey q-pt-sm q-pb-xs",{"min-height-inherit flex flex-center q-pa-none":!m.hasData}])},[m.hasData?(i(),n(l,{key:0},[f(_(s.total_found)+" "+_(e.$t("restaurant")),1)],64)):(i(),p(L,{key:1,onFilterAgain:m.filterAgain},null,8,["onFilterAgain"]))],2))]),_:1}),r(H,{ref:"nscroll",onLoad:m.getMerchantFeed,offset:250},{loading:a(()=>[s.page<=0?(i(),p(b,{key:0})):(i(),n("div",te,[r(U,{color:"secondary",size:"40px"})]))]),default:a(()=>[r(j,{class:"no-wrap"},{default:a(()=>[(i(!0),n(l,null,q(s.data,d=>(i(),n(l,{key:d},[(i(!0),n(l,null,q(d,v=>C((i(),p(V,{key:v.merchant_id,clickable:"",onClick:z(ie=>this.$router.push({name:"menu",params:{slug:v.restaurant_slug}}),["stop"])},{default:a(()=>[s.menu_type==="list"?(i(),p(F,{key:0,items:v,cuisine:s.cuisine,reviews:s.reviews,estimation:s.estimation,services:s.services,items_min_max:s.items_min_max,promos:s.promos},null,8,["items","cuisine","reviews","estimation","services","items_min_max","promos"])):(i(),p(T,{key:1,items:v,cuisine:s.cuisine,reviews:s.reviews,estimation:s.estimation,services:s.services,items_min_max:s.items_min_max,promos:s.promos},null,8,["items","cuisine","reviews","estimation","services","items_min_max","promos"]))]),_:2},1032,["onClick"])),[[E]])),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),r(Q,{ref:"sort_list",onAfterSelectsort:m.afterSelectsort},null,8,["onAfterSelectsort"]),r(A,{ref:"merchant_filter",cuisine_data:t.DataStore.cuisine,onApplyFilter:m.applyFilter,onRunFilter:e.runFilter},null,8,["cuisine_data","onApplyFilter","onRunFilter"])]),_:1})]),_:1},8,["onRefresh"])}var ge=I(K,[["render",se]]);export{ge as default};
