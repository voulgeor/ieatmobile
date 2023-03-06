import{_ as A,m as D,n as m,p as C,q as l,t as v,u as t,j as e,U as k,aa as _,V as s,a8 as $,R as d,ar as f,b0 as n,Q as c,b3 as T,a2 as q,ac as h,F as u,S as b,ad as L,a$ as Q,bE as S,v as O}from"./index.b5428c1f.js";import{Q as E}from"./QToolbarTitle.ad5aac42.js";import{Q as P}from"./QToolbar.b8f4cf51.js";import{Q as V}from"./QHeader.3c924b64.js";import{Q as F}from"./QInnerLoading.e8a064f8.js";import{Q as p}from"./QItemLabel.25732301.js";import{Q as z}from"./QChip.bdda5644.js";import{Q as x}from"./QList.9257b2df.js";import{Q as N}from"./QExpansionItem.20b97a67.js";import{Q as j}from"./QImg.b4e6faf5.js";import{Q as H}from"./QBadge.0f4a71ae.js";import{Q as M}from"./QPage.40760bfd.js";import{Q as U}from"./QFooter.04730c47.js";import{Q as W}from"./QPullToRefresh.2c3dbebe.js";import"./QResizeObserver.74d4236c.js";import"./QSlideTransition.d455a2fc.js";import"./touch.16a8a914.js";import"./selection.099be30b.js";import"./format.ec2e0666.js";const G={name:"OrderDetails",components:{CancelOrder:D(()=>O(()=>import("./CancelOrder.ef7114f6.js"),["assets/CancelOrder.ef7114f6.js","assets/QSpace.de8f976c.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/ClosePopup.43f4e78b.js"])),OrderDeliveryDetails:D(()=>O(()=>import("./OrderDeliveryDetails.80eafee9.js"),["assets/OrderDeliveryDetails.80eafee9.js","assets/QToolbarTitle.ad5aac42.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QSpace.de8f976c.js","assets/QToolbar.b8f4cf51.js"]))},data(){return{order_uuid:"",order_data:[],loading:!1,order_items:[],order_summary:[],order_info:[],order_label:[],refund_transaction:[],order_status:[],order_services:[],merchant:[],progress:0,data_progress:[],progress_order_status:"",progress_order_status_details:"",allowed_to_cancel:!1,pdf_link:"",delivery_timeline:[],order_delivery_status:[],allowed_to_review:!1,payload:["merchant_info","items","summary","order_info","progress","refund_transaction","status_allowed_cancelled","pdf_link","delivery_timeline","order_delivery_status","allowed_to_review"]}},created(){this.order_uuid=this.$route.query.order_uuid,this.orderDetails()},computed:{hasRefund(){return this.refund_transaction.length>0}},methods:{refresh(r){this.orderDetails(r)},orderDetails(r){this.loading=!0,m.fetchDataByToken("orderDetails",{order_uuid:this.order_uuid,payload:this.payload}).then(o=>{this.order_data=o.details,this.merchant=o.details.data.merchant,this.order_items=o.details.data.items,this.order_summary=o.details.data.summary,this.order_info=o.details.data.order.order_info,this.order_label=o.details.data.label,this.refund_transaction=o.details.data.refund_transaction,this.order_status=o.details.data.order.status,this.order_services=o.details.data.order.services,this.data_progress=o.details.data.progress,this.progress=o.details.data.progress.order_progress,this.allowed_to_cancel=o.details.data.allowed_to_cancel,this.pdf_link=o.details.data.pdf_link,this.delivery_timeline=o.details.data.delivery_timeline,this.order_delivery_status=o.details.data.order_delivery_status,this.allowed_to_review=o.details.data.allowed_to_review,this.progress_order_status=o.details.data.progress.order_status,this.progress_order_status_details=o.details.data.progress.order_status_details,this.order_services=this.order_services[this.order_info.service_code],this.order_status=this.order_status[this.order_info.status]}).catch(o=>{m.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1,m.empty(r)||r()})},afterReceive(r){if(r.order_id!==this.order_info.order_id)return!1;r.order_progress===0?(this.progress=r.order_progress,this.progress_order_status=r.order_status,this.progress_order_status_details=r.order_status_details):r.order_progress===-1||(this.progress=r.order_progress,this.progress_order_status=r.order_status,this.progress_order_status_details=r.order_status_details)},defineColors(r){return this.progress<=0?"grey-8":this.progress>r?"primary":"grey-4"},copyClipboard(r){navigator.clipboard.writeText(r),m.notify("light-green",this.$t("Copied"),"check_circle",this.$q)},Buyagain(){const r={cart_uuid:m.getStorage("cart_uuid"),order_uuid:this.order_uuid};m.showLoadingBox("",this.$q),m.orderBuyAgain(r).then(o=>{m.setStorage("cart_uuid",o.details.cart_uuid),this.$router.push("/cart")}).catch(o=>{m.notify("grey-8",o,"error_outline",this.$q)}).then(o=>{m.hideLoadingBox(this.$q)})},afterCancelorder(){console.debug("afterCancelorder"),this.$refs.cancel_order.show_modal=!1,this.orderDetails()}}},J={class:"q-mr-sm text-weight-bold"},K={class:"text-weight-bold"},X={class:"text-weight-light font11"},Y={class:"text-weight-bold"},Z={class:"text-weight-light font11"},ee={class:"text-weight-bold"},te={class:"text-weight-light font11"},re={class:"no-margin"},se={class:"m-0 text-grey"},ae={key:0,class:"no-margin"},oe={key:1,class:"no-margin"},le={key:2,class:"no-margin"},ie=_(", "),de={key:0,class:"no-margin"},ne={key:1,class:"no-margin"},_e={class:"no-margin font12 text-weight-bold"},ue={class:"row full-width items-center text-center"},ce={class:"col"},pe={class:"col"};function fe(r,o,me,he,i,w){const R=C("CancelOrder"),I=C("OrderDeliveryDetails");return l(),v(W,{onRefresh:w.refresh},{default:t(()=>[e(V,{reveal:"","reveal-offset":"50",class:$(["",{"bg-mydark text-white":r.$q.dark.mode,"bg-grey-1 text-dark":!r.$q.dark.mode}])},{default:t(()=>[e(P,null,{default:t(()=>[e(k,{onClick:o[0]||(o[0]=a=>r.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:r.$q.dark.mode?"white":"dark"},null,8,["color"]),e(E,{class:"text-weight-bold"},{default:t(()=>[_(s(r.$t("Orders Details")),1)]),_:1})]),_:1})]),_:1},8,["class"]),e(M,{class:$(["b q-pl-md q-pr-md q-pb-md",{"bg-mydark text-white":r.$q.dark.mode,"bg-grey-1 text-dark":!r.$q.dark.mode}])},{default:t(()=>[i.loading?(l(),v(F,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(l(),d(u,{key:1},[e(x,null,{default:t(()=>[e(f,{class:"q-pl-none q-pr-none"},{default:t(()=>[e(n,null,{default:t(()=>[e(p,{class:"text-dark text-weight-bold"},{default:t(()=>[_(s(r.$t("Order ID")),1)]),_:1}),e(p,{caption:"",class:"font12"},{default:t(()=>[c("span",J,"#"+s(i.order_info.order_id),1),e(z,{color:r.$q.dark.mode?"grey600":"mygrey","text-color":r.$q.dark.mode?"grey300":"dark",size:"sm",class:"q-ma-none"},{default:t(()=>[_(s(i.order_services.service_name),1)]),_:1},8,["color","text-color"])]),_:1}),e(p,{caption:"",class:"font12"},{default:t(()=>[c("div",K,s(i.order_info.payment_name),1),c("div",X,s(i.order_info.place_on),1)]),_:1})]),_:1}),e(n,{side:"",top:""},{default:t(()=>[e(z,{color:"mygrey","text-color":"dark",size:"sm",style:T(`color:${i.order_status.font_color_hex} !important; background-color:${i.order_status.background_color_hex} !important; `),class:"q-ma-none"},{default:t(()=>[_(s(i.order_status.status),1)]),_:1},8,["style"])]),_:1})]),_:1}),e(f,{onClick:o[1]||(o[1]=a=>this.$refs.OrderDeliveryDetails.dialog=!0),clickable:"",class:"q-pl-none q-pr-none q-pt-none"},{default:t(()=>[e(n,null,{default:t(()=>[e(p,{caption:"",class:"font12"},{default:t(()=>[c("div",Y,s(i.progress_order_status),1),c("div",Z,s(i.progress_order_status_details),1)]),_:1})]),_:1}),e(n,{avatar:""},{default:t(()=>[e(q,{color:"grey",size:"15px",name:"las la-angle-right"})]),_:1})]),_:1}),i.allowed_to_review?(l(),v(f,{key:0,to:{name:"write-review",params:{order_uuid:i.order_info.order_uuid,back_url:"/orders"}},clickable:"",class:"q-pl-none q-pr-none q-pt-none"},{default:t(()=>[e(n,null,{default:t(()=>[e(p,{caption:"",class:"font12"},{default:t(()=>[c("div",ee,s(r.$t("Write Review")),1),c("div",te,s(r.$t("Rate your order!")),1)]),_:1})]),_:1}),e(n,{avatar:""},{default:t(()=>[e(q,{color:"grey",size:"15px",name:"las la-angle-right"})]),_:1})]),_:1},8,["to"])):h("",!0)]),_:1}),w.hasRefund?(l(),v(x,{key:0,class:"qlist-no-padding"},{default:t(()=>[e(N,{"expand-separator":"",label:r.$t("Refund Issued")},{default:t(()=>[e(x,null,{default:t(()=>[e(f,null,{default:t(()=>[e(n,null,{default:t(()=>[(l(!0),d(u,null,b(i.refund_transaction,a=>(l(),d(u,{key:a},[e(p,{caption:"",class:"font12"},{default:t(()=>[_(s(r.$t("Description"))+": "+s(a.description),1)]),_:2},1024),e(p,{caption:"",class:"font12"},{default:t(()=>[_(s(r.$t("Amount"))+": "+s(a.trans_amount),1)]),_:2},1024),e(p,{caption:"",class:"font12"},{default:t(()=>[_(s(r.$t("Issued to"))+": "+s(a.used_card),1)]),_:2},1024),e(p,{caption:"",class:"font12"},{default:t(()=>[_(s(r.$t("Date issued"))+": "+s(a.date),1)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["label"])]),_:1})):h("",!0),e(L,{flat:"",class:"radius8"},{default:t(()=>[e(x,{class:"q-pb-md"},{default:t(()=>[e(f,null,{default:t(()=>[e(n,null,{default:t(()=>[e(p,{lines:"1",class:"text-weight-medium text-grey font13"},{default:t(()=>[_(s(i.order_label.your_order_from)+" :",1)]),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(p,{lines:"1",class:"text-weight-bold font13"},{default:t(()=>[e(k,{flat:"",unelevated:"","no-caps":"",class:"q-pa-none min-height",to:{name:"menu",params:{slug:i.merchant.restaurant_slug}}},{default:t(()=>[_(s(i.merchant.restaurant_name),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1}),(l(!0),d(u,null,b(i.order_items,a=>(l(),d(u,{key:a.item_id},[e(f,null,{default:t(()=>[e(n,{avatar:"",top:""},{default:t(()=>[e(j,{src:a.url_image,lazy:"",fit:"cover",style:{height:"50px",width:"50px"},class:"rounded-borders"},null,8,["src"])]),_:2},1024),e(n,null,{default:t(()=>[e(p,{class:"text-weight-bold q-mb-xs font12"},{default:t(()=>[c("p",re,[_(s(a.qty)+" x "+s(a.item_name)+" ",1),a.price.size_name!=""?(l(),d(u,{key:0},[_(" ("+s(a.price.size_name)+") ",1)],64)):h("",!0),a.item_changes=="replacement"?(l(),d(u,{key:1},[c("div",se,s(r.$t("Replace"))+' "'+s(a.item_name_replace)+'" ',1),e(H,{color:"primary","text-color":"white",label:r.$t("Replacement")},null,8,["label"])],64)):h("",!0)])]),_:2},1024),e(p,{caption:"",class:"text-weight-medium font12"},{default:t(()=>[a.price.discount>0?(l(),d("p",ae,[c("del",null,s(a.price.pretty_price),1),_(" "+s(a.price.pretty_price_after_discount),1)])):(l(),d("p",oe,s(a.price.pretty_price),1)),a.special_instructions!=""?(l(),d("p",le,s(a.special_instructions),1)):h("",!0),a.attributes!=""?(l(!0),d(u,{key:3},b(a.attributes,g=>(l(),d("p",{key:g,class:"no-margin"},[(l(!0),d(u,null,b(g,(y,B)=>(l(),d(u,null,[_(s(y),1),B<g.length-1?(l(),d(u,{key:0},[ie],64)):h("",!0)],64))),256))]))),128)):h("",!0)]),_:2},1024)]),_:2},1024),e(n,{side:"",top:""},{default:t(()=>[e(p,{caption:"",class:"text-weight-bold font12"},{default:t(()=>[a.price.discount<=0?(l(),d("p",de,s(a.price.pretty_total),1)):(l(),d("p",ne,s(a.price.pretty_total_after_discount),1))]),_:2},1024)]),_:2},1024)]),_:2},1024),(l(!0),d(u,null,b(a.addons,g=>(l(),d(u,{key:g},[e(f,{class:"q-item-small"},{default:t(()=>[e(n,{avatar:""}),e(n,null,{default:t(()=>[e(p,{class:"text-weight-bold font12"},{default:t(()=>[_(s(g.subcategory_name),1)]),_:2},1024)]),_:2},1024),e(n,{side:"",top:""})]),_:2},1024),(l(!0),d(u,null,b(g.addon_items,y=>(l(),v(f,{key:y,class:"q-item-small"},{default:t(()=>[e(n,{avatar:""}),e(n,null,{default:t(()=>[e(p,{lines:"1",class:"font12 text-weight-medium"},{default:t(()=>[_(s(y.qty)+" x "+s(y.pretty_price)+" "+s(y.sub_item_name),1)]),_:2},1024)]),_:2},1024),e(n,{side:"",top:""},{default:t(()=>[c("p",_e,s(y.pretty_addons_total),1)]),_:2},1024)]),_:2},1024))),128))],64))),128)),e(Q,{inset:""})],64))),128)),e(f,{class:"q-pb-none",style:{"min-height":"auto"}},{default:t(()=>[e(n,{class:"text-weight-medium font13"},{default:t(()=>[_(s(r.$t("Summary")),1)]),_:1})]),_:1}),(l(!0),d(u,null,b(i.order_summary,a=>(l(),d(u,{key:a.name},[a.type=="total"?(l(),d(u,{key:0},[e(Q,{spaced:"",inset:""}),e(f,{dense:"",class:"q-pb-none",style:{"min-height":"auto"}},{default:t(()=>[e(n,{class:"font13 text-weight-medium"},{default:t(()=>[_(s(a.name),1)]),_:2},1024),e(n,{side:"",class:"font13 text-weight-medium"},{default:t(()=>[_(s(a.value),1)]),_:2},1024)]),_:2},1024)],64)):(l(),v(f,{key:1,dense:"",class:"q-pb-none",style:{"min-height":"auto"}},{default:t(()=>[e(n,{class:"font13 text-weight-medium"},{default:t(()=>[_(s(a.name),1)]),_:2},1024),e(n,{side:"",class:"font13 text-weight-medium"},{default:t(()=>[_(s(a.value),1)]),_:2},1024)]),_:2},1024))],64))),128))]),_:1}),e(Q),e(S,null,{default:t(()=>[c("div",ue,[c("div",ce,[e(k,{flat:"","no-caps":"",class:"q-pa-none text-weight-bold line-1 min-height",color:"secondary",disable:!i.allowed_to_cancel,onClick:o[2]||(o[2]=a=>this.$refs.cancel_order.showModal(this.order_uuid))},{default:t(()=>[c("div",null,s(r.$t("Cancel")),1),e(q,{right:"",name:"las la-angle-right",size:"15px",class:"text-grey q-ml-sm"})]),_:1},8,["disable"])]),c("div",pe,[e(k,{flat:"","no-caps":"",class:"q-pa-none text-weight-bold line-1 min-height",color:"grey",href:i.pdf_link,target:"_blank"},{default:t(()=>[c("div",null,s(r.$t("Download PDF")),1),e(q,{right:"",name:"las la-angle-right",size:"15px",class:"text-grey q-ml-sm"})]),_:1},8,["href"])])])]),_:1})]),_:1})],64))]),_:1},8,["class"]),e(R,{ref:"cancel_order",onAfterCancelorder:w.afterCancelorder},null,8,["onAfterCancelorder"]),e(I,{ref:"OrderDeliveryDetails",data:i.delivery_timeline,order_status:i.order_delivery_status,progress:i.data_progress},null,8,["data","order_status","progress"]),i.loading?h("",!0):(l(),v(U,{key:0,class:"bg-grey-1 row q-gutter-md q-pl-md q-pr-md q-pb-sm"},{default:t(()=>[e(k,{label:r.$t(i.order_label.buy_again),unelevated:"","no-caps":"",color:"mygrey","text-color":"dark",class:"col",onClick:o[3]||(o[3]=a=>w.Buyagain()),size:"lg"},null,8,["label"]),e(k,{to:{path:"/account/trackorder",query:{order_uuid:this.order_uuid,back_url:1}},label:r.$t(i.order_label.track),unelevated:"","no-caps":"",color:"primary text-white",class:"col",size:"lg"},null,8,["to","label"])]),_:1}))]),_:1},8,["onRefresh"])}var Le=A(G,[["render",fe]]);export{Le as default};