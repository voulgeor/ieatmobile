import{_ as T,n as k,q as s,t as y,u as d,k as o,V as w,ab as c,X as e,a9 as g,S as a,R as r,F as n,ad as h,b3 as u,U as b,as as S}from"./index.e230319b.js";import{Q as B}from"./QToolbarTitle.259c42a1.js";import{Q as I}from"./QToolbar.6df38dcd.js";import{Q as O}from"./QHeader.4854892c.js";import{Q as z}from"./QInnerLoading.0b8a8d1f.js";import{Q as v}from"./QSpace.e9701f98.js";import{Q as x}from"./QImg.0fbb4b94.js";import{Q as p}from"./QItemLabel.a48bebab.js";import{Q as L}from"./QBadge.49f13d31.js";import{Q}from"./QList.4869120a.js";import{Q as R}from"./QExpansionItem.e757d565.js";import{Q as V}from"./QFooter.10036f87.js";import{Q as j}from"./QPage.225bb278.js";import{Q as E}from"./QPullToRefresh.e2610cc4.js";import"./QResizeObserver.14e0edf7.js";import"./QSlideTransition.a6aae68e.js";import"./touch.70a9dd44.js";import"./selection.69ceab22.js";import"./format.2a3572e1.js";const N={name:"OrderSuccess",data(){return{order_uuid:"",loading:!0,data:[],order_items:[],order_info:[],merchant:[],estimation:[],charge_type:"",payload:["merchant_info","items","order_info","estimation","charge_type"]}},created(){this.order_uuid=this.$route.query.order_uuid,this.orderDetails()},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{refresh(t){this.orderDetails(t)},orderDetails(t){this.loading=!0,k.fetchDataByToken("orderDetails",{order_uuid:this.order_uuid,payload:this.payload}).then(_=>{this.data=_.details.data,this.order_items=_.details.data.items,this.order_info=_.details.data.order.order_info,this.merchant=_.details.data.merchant,this.estimation=_.details.data.estimation,this.charge_type=_.details.data.charge_type}).catch(_=>{this.order_items=[],this.order_info=[],this.merchant=[],this.estimation=[]}).then(_=>{this.loading=!1,k.empty(t)||t()})},estimatedLabel(t){return t=="pickup"?this.$t("Estimated Pickup Time"):t=="dinein"?this.$t("Estimated Dinein Time"):this.$t("Estimated Delivery Time")}}},P={key:1,class:"text-center full-width"},C={class:"text-h5 text-weight-bold"},F={class:"text-grey font12"},$={class:"text-center q-mb-md"},A={class:"text-grey text-weight-600"},H=r("div",{class:"border-grey-top"},null,-1),M={class:"text-h5 text-weight-bold"},U={class:"row items-start justify-between"},X={class:"text-grey"},Y={class:"text-weight-bold"},G={class:"row items-start justify-between"},J={class:"text-grey"},K={class:"text-weight-bold"},W={class:"row items-start justify-between"},Z={class:"text-grey col-2"},ee={class:"col-8 text-right"},te={class:"row items-start justify-between"},re={class:"text-grey col text-weight-bold"},se={class:"col text-right text-weight-bold"},oe={class:"text-weight-bold"},ie={class:"text-grey font13 q-ml-sm"},ae=c(" )"),le={class:"no-margin"},de={class:"m-0 text-grey"},ne={key:0,class:"no-margin"},ce={key:1,class:"no-margin"},_e={key:2,class:"no-margin"},he=c(", "),me={key:0,class:"no-margin"},ue={key:1,class:"no-margin"};function pe(t,_,fe,ye,i,m){return s(),y(E,{onRefresh:m.refresh},{default:d(()=>[o(O,{reveal:"","reveal-offset":"50",class:g({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:d(()=>[o(I,null,{default:d(()=>[o(w,{flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark",to:"/home",replace:"true"},null,8,["color"]),o(B,{class:"text-weight-bold"},{default:d(()=>[c(e(t.$t("Your Order Successfully!")),1)]),_:1})]),_:1})]),_:1},8,["class"]),o(j,{padding:"",class:g(["q-pl-md q-pr-md",{"flex flex-center":!m.hasData&&!i.loading}])},{default:d(()=>[i.loading?(s(),y(z,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):!i.loading&&!m.hasData?(s(),a("div",P,[r("div",C,e(t.$t("No results data")),1),r("p",F,e(t.$t("Sorry we cannot find what your looking for.")),1)])):(s(),a(n,{key:2},[r("div",$,[r("div",A,e(m.estimatedLabel(i.order_info.service_code)),1),r("div",{class:g(["text-weight-bold text-h5",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},[i.order_info.whento_deliver=="now"?(s(),a(n,{key:0},[i.estimation[i.order_info.service_code]?(s(),a(n,{key:0},[c(e(i.estimation[i.order_info.service_code][i.charge_type].estimation)+" Mins ",1)],64)):h("",!0)],64)):(s(),a(n,{key:1},[c(e(i.order_info.delivery_date)+" "+e(i.order_info.delivery_time),1)],64))],2),o(v,{class:"q-pa-sm"}),o(x,{src:"onboarding-3.png","spinner-color":"primary",style:{"max-width":"100%",height:"150px"},fit:"contain"})]),H,r("div",M,e(t.$t("Order Details")),1),r("div",U,[r("div",X,e(t.$t("Order"))+" #",1),r("div",Y,e(i.order_info.order_id),1)]),r("div",G,[r("div",J,e(t.$t("Order from")),1),r("div",K,e(i.merchant.restaurant_name),1)]),r("div",W,[r("div",Z,e(t.$t("Delivery")),1),r("div",ee,e(i.order_info.delivery_address),1)]),r("div",te,[r("div",re,e(t.$t("Total")),1),r("div",se,e(i.order_info.pretty_total),1)]),o(v,{class:"q-pa-sm"}),o(Q,{class:"qlist-no-padding border-grey-top border-bottom q-mb-md"},{default:d(()=>[o(R,{"expand-separator":""},{header:d(()=>[o(u,null,{default:d(()=>[o(p,null,{default:d(()=>[r("span",oe,e(t.$t("View Details")),1),r("span",ie,[c("("+e(i.order_items.length)+" ",1),i.order_items.length>2?(s(),a(n,{key:0},[c(e(t.$t("items")),1)],64)):(s(),a(n,{key:1},[c(e(t.$t("item")),1)],64)),ae])]),_:1})]),_:1})]),default:d(()=>[o(Q,null,{default:d(()=>[(s(!0),a(n,null,b(i.order_items,l=>(s(),y(S,{key:l},{default:d(()=>[o(u,{avatar:"",top:""},{default:d(()=>[o(x,{src:l.url_image,lazy:"",fit:"cover",style:{height:"50px",width:"50px"},class:"rounded-borders"},null,8,["src"])]),_:2},1024),o(u,null,{default:d(()=>[o(p,{class:"text-weight-bold q-mb-xs font12"},{default:d(()=>[r("p",le,[c(e(l.qty)+" x "+e(l.item_name)+" ",1),l.price.size_name!=""?(s(),a(n,{key:0},[c(" ("+e(l.price.size_name)+") ",1)],64)):h("",!0),l.item_changes=="replacement"?(s(),a(n,{key:1},[r("div",de,e(t.$t("Replace"))+' "'+e(l.item_name_replace)+'" ',1),o(L,{color:"primary","text-color":"white",label:t.$t("Replacement")},null,8,["label"])],64)):h("",!0)])]),_:2},1024),o(p,{caption:"",class:"text-weight-medium font12"},{default:d(()=>[l.price.discount>0?(s(),a("p",ne,[r("del",null,e(l.price.pretty_price),1),c(" "+e(l.price.pretty_price_after_discount),1)])):(s(),a("p",ce,e(l.price.pretty_price),1)),l.special_instructions!=""?(s(),a("p",_e,e(l.special_instructions),1)):h("",!0),l.attributes!=""?(s(!0),a(n,{key:3},b(l.attributes,f=>(s(),a("p",{key:f,class:"no-margin"},[(s(!0),a(n,null,b(f,(q,D)=>(s(),a(n,null,[c(e(q),1),D<f.length-1?(s(),a(n,{key:0},[he],64)):h("",!0)],64))),256))]))),128)):h("",!0)]),_:2},1024)]),_:2},1024),o(u,{side:"",top:""},{default:d(()=>[o(p,{caption:"",class:"text-weight-bold font12"},{default:d(()=>[l.price.discount<=0?(s(),a("p",me,e(l.price.pretty_total),1)):(s(),a("p",ue,e(l.price.pretty_total_after_discount),1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),o(V,{reveal:"",class:"q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark bg-white"},{default:d(()=>[o(w,{unelevated:"","no-caps":"",size:"lg",label:t.$t("Track your order"),color:"primary","text-color":"white",class:"full-width",to:{path:"/account/trackorder",query:{order_uuid:i.order_info.order_uuid}}},null,8,["label","to"])]),_:1})],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var Ee=T(N,[["render",pe]]);export{Ee as default};
