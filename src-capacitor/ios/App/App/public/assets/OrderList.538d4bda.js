import{_ as O,m as V,n as q,p as v,q as a,S as m,k as r,u as t,aa as z,F as p,a9 as b,V as y,ab as _,X as l,t as h,R as n,ad as f,U as w,ae as Q,af as P,ac as D,v as L,b6 as N,as as x}from"./index.7194caca.js";import{Q as T}from"./QToolbarTitle.2f2c97c6.js";import{Q as B}from"./QToolbar.6e86fa1d.js";import{Q as I}from"./QHeader.14a419b4.js";import{Q as g}from"./QChip.3d0d7cef.js";import{Q as j}from"./QList.5f4666ff.js";import{Q as A}from"./QInnerLoading.62426e89.js";import{Q as E,a as R}from"./QInfiniteScroll.66d19c0d.js";import{Q as H}from"./QPageScroller.6eb100c6.js";import{Q as M}from"./QPage.81b1be82.js";import{Q as F}from"./QPullToRefresh.0c4ce429.js";import{Q as U}from"./QForm.0c4e0343.js";import{S as X,a as Y}from"./swiper.min.b4ecb0a9.js";import"./QResizeObserver.98b17319.js";import"./use-page-sticky.11aba7b9.js";import"./touch.70a9dd44.js";import"./selection.d1a74e34.js";import"./format.2a3572e1.js";const G={name:"OrderList",components:{Swiper:X,SwiperSlide:Y,OrderPreview:V(()=>L(()=>import("./OrderPreview.1dde8071.js"),["assets/OrderPreview.1dde8071.js","assets/index.7194caca.js","assets/index.469535cd.css","assets/QToolbarTitle.2f2c97c6.js","assets/QSpace.72e06727.js","assets/QToolbar.6e86fa1d.js","assets/QImg.1391a400.js","assets/QItemLabel.dda41321.js","assets/QList.5f4666ff.js"]))},data(){return{q:"",data:[],loading:!1,load_more:!1,page:0,merchants:[],services:[],payment_list:[],payment_status:[],status_list:[],order_tab:"all",modal_search:!1,is_search:!1,is_refresh:void 0,order_items:[],items:{},orderTabs:[{label:this.$t("All"),value:"all"},{label:this.$t("Active"),value:"active"},{label:this.$t("Past Order"),value:"past_order"},{label:this.$t("Cancel Order"),value:"cancel_order"}]}},watch:{order_tab(e,d){this.resetPage()}},computed:{hasData(){return this.data.length>0},NodataMessage(){return this.is_search?this.$t("No results found"):this.order_tab=="all"?this.$t("You don't have any orders here!"):this.$t("No results")},NodataMessage2(){return this.is_search?this.$t("Sorry, we couldn't find any results"):this.order_tab=="all"?this.$t("Let's change that"):this.$t("no current order with this status")}},methods:{refresh(e){this.resetPage(),this.is_refresh=e},orderHistory(e,d){this.loading=!0,this.page=e,q.fetchDataByTokenPost("orderHistory","page="+e+"&q="+this.q+"&order_tab="+this.order_tab).then(c=>{c.details.show_next_page==!1&&e>1?this.$refs.nscroll.stop():(this.data.push(c.details.data.data),Object.entries(c.details.data.merchants).forEach(([k,s])=>{this.merchants[k]=s}),this.services=c.details.data.services,this.payment_list=c.details.payment_list,this.status_list=c.details.data.status,this.payment_status=c.details.payment_status,Object.entries(c.details.data.items2).forEach(([k,s])=>{this.items[k]=s}))}).catch(c=>{this.$refs.nscroll&&this.$refs.nscroll.stop()}).then(c=>{this.loading=!1,d(),q.empty(this.is_refresh)||this.is_refresh()})},onSubmit(){console.log("onSubmit"),this.modal_search=!1,this.is_search=!0,this.resetPagination()},resetPage(){this.q="",this.resetPagination(),this.is_search=!1},resetPagination(){this.page=0,this.data=[],this.services=[],this.payment_list=[],this.status_list=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},showQuickDetails(e){console.log(e),this.order_items=e,this.$refs.OrderPreview.dialog=!this.$refs.OrderPreview.dialog}}},J={class:"q-pl-md q-pr-md text-center q-pt-sm"},K={key:0,class:"text-h5 text-weight-bold"},W={key:0,class:"flex flex-center",style:{"min-height":"300px"}},Z={class:"text-center full-width"},ee={class:"text-h5 text-weight-bold"},se={class:"text-grey font12"},te={class:"row justify-between items-center"},re={class:"font13"},ae={class:"text-secondary q-ml-sm text-weight-bold"},oe={class:"row justify-between items-center"},le={key:0,class:"font13"},ie={class:"text-weight-bold font13"},ne={class:"row justify-between items-center"},de={class:"font13"},ce={key:0,class:"font12"},me={class:"row items-center"},ue={key:1,class:"row justify-center absolute-bottom"};function he(e,d,c,k,s,u){const S=v("swiper-slide"),C=v("swiper"),$=v("OrderPreview");return a(),m(p,null,[r(F,{onRefresh:u.refresh},{default:t(()=>[r(I,{reveal:"","reveal-offset":"10",class:b({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-black":!e.$q.dark.mode})},{default:t(()=>[r(B,null,{default:t(()=>[r(y,{onClick:d[0]||(d[0]=i=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(T,{class:"text-weight-bold"},{default:t(()=>[_(l(e.$t("Orders")),1)]),_:1}),s.is_search?(a(),h(y,{key:0,flat:"",round:"",dense:"",icon:"close",onClick:u.resetPage},null,8,["onClick"])):(a(),h(y,{key:1,onClick:d[1]||(d[1]=i=>s.modal_search=!s.modal_search),flat:"",round:"",dense:"",icon:"search"}))]),_:1})]),_:1},8,["class"]),r(M,{class:b({"bg-mydark":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode})},{default:t(()=>[r(E,{ref:"nscroll",onLoad:u.orderHistory,offset:250},{loading:t(()=>[s.page<=1?(a(),h(A,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(a(),m("div",ue,[r(R,{color:"secondary",size:"40px"})]))]),default:t(()=>[n("div",J,[s.is_search?(a(),m(p,{key:0},[u.hasData?(a(),m("div",K,l(e.$t("Search result")),1)):f("",!0)],64)):(a(),h(C,{key:1,slidesPerView:2.3,spaceBetween:10,class:"q-mb-md"},{default:t(()=>[(a(!0),m(p,null,w(s.orderTabs,i=>(a(),h(S,{key:i,class:"row"},{default:t(()=>[r(y,{unelevated:"","no-caps":"",class:"radius8 fit",size:"md",label:e.$t(i.label),onClick:o=>s.order_tab=i.value,color:s.order_tab==i.value?"primary":e.$q.dark.mode?"grey600":"mygrey","text-color":s.order_tab==i.value?"white":e.$q.dark.mode?"grey300":"dark"},null,8,["label","onClick","color","text-color"])]),_:2},1024))),128))]),_:1},8,["slidesPerView"]))]),!u.hasData&&!s.loading?(a(),m("div",W,[n("div",Z,[n("div",ee,l(u.NodataMessage),1),n("p",se,l(u.NodataMessage2),1)])])):f("",!0),r(j,null,{default:t(()=>[(a(!0),m(p,null,w(s.data,i=>(a(),m(p,{key:i},[(a(!0),m(p,null,w(i,o=>(a(),h(x,{key:o.order_id_raw,clickable:"",onClick:_e=>u.showQuickDetails(o)},{default:t(()=>[r(Q,{flat:"",class:"fit radius8"},{default:t(()=>[r(P,{class:"q-pl-md q-pr-md q-pt-sm q-pb-sm"},{default:t(()=>[n("div",te,[r(g,{icon:"las la-calendar",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"grey",size:"sm",class:b({"":e.$q.dark.mode,"q-pl-none":!e.$q.dark.mode})},{default:t(()=>[_(l(o.date_created),1)]),_:2},1032,["color","text-color","class"]),s.status_list[o.status]?(a(),h(g,{key:0,color:"mygrey","text-color":"dark",size:"sm",style:N(`color:${s.status_list[o.status].font_color_hex} !important; background-color:${s.status_list[o.status].background_color_hex} !important; `)},{default:t(()=>[_(l(s.status_list[o.status].status),1)]),_:2},1032,["style"])):f("",!0)]),n("div",re,[_(l(e.$t("Order ID")),1),n("span",ae,"#"+l(o.order_id_raw),1)]),n("div",oe,[s.merchants[o.merchant_id]?(a(),m("div",le,l(s.merchants[o.merchant_id].restaurant_name),1)):f("",!0),n("div",ie,l(o.total),1)]),n("div",ne,[n("div",de,l(e.$t("Payment")),1),s.payment_list[o.payment_code]?(a(),m("div",ce,l(s.payment_list[o.payment_code]),1)):f("",!0)]),n("div",me,[r(g,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",size:"sm"},{default:t(()=>[_(l(o.total_items),1)]),_:2},1032,["color","text-color"]),s.services[o.service_code]?(a(),h(g,{key:0,color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",size:"sm"},{default:t(()=>[_(l(s.services[o.service_code].service_name),1)]),_:2},1032,["color","text-color"])):f("",!0),s.payment_status[o.payment_status]?(a(),h(g,{key:1,color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",size:"sm"},{default:t(()=>[_(l(s.payment_status[o.payment_status].title),1)]),_:2},1032,["color","text-color"])):f("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),r(H,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:t(()=>[r(y,{fab:"",icon:"keyboard_arrow_up",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",padding:"3px"},null,8,["color","text-color"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"]),r(z,{modelValue:s.modal_search,"onUpdate:modelValue":d[3]||(d[3]=i=>s.modal_search=i),position:"top","transition-show":"fade","transition-hide":"fade"},{default:t(()=>[r(Q,{class:b(["no-shadow q-pt-md q-pb-sm",{"text-dark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:t(()=>[r(P,null,{default:t(()=>[r(U,{onSubmit:u.onSubmit},{default:t(()=>[r(D,{modelValue:s.q,"onUpdate:modelValue":d[2]||(d[2]=i=>s.q=i),label:e.$t("Search order"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless cursor-pointer"},{append:t(()=>[r(y,{onClick:u.onSubmit,round:"",color:"primary",flat:"",icon:"eva-search-outline"},null,8,["onClick"])]),_:1},8,["modelValue","label","bg-color","label-color"])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue"]),r($,{ref:"OrderPreview",data:s.order_items,items_details:s.items},null,8,["data","items_details"])],64)}var Le=O(G,[["render",he]]);export{Le as default};
