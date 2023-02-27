import{Q as h}from"./QSpace.ac683136.js";import{_ as y,n as l,q as n,t as _,u as a,k as t,ae as m,ai as f,U as r,R as c,V as o,Q as i,ac as C,bE as k,aa as p,ad as q,a9 as x}from"./index.f4219e68.js";import{C as g}from"./ClosePopup.db51029e.js";const v={name:"CancelOrder",data(){return{loading:!1,show_modal:!1,order_uuid:"",cancel_status:!1,cancel_msg:"",cancel_response:[]}},methods:{showModal(e){this.order_uuid=e,this.show_modal=!0},cancelOrderStatus(){this.loading=!0,l.cancelOrderStatus(this.order_uuid).then(e=>{this.cancel_status=e.details.cancel_status,this.cancel_msg=e.details.cancel_msg,this.cancel_response=e.details}).catch(e=>{l.notify("grey-8",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},applyCancelOrder(){this.loading=!0,l.applyCancelOrder(this.order_uuid).then(e=>{this.show_modal=!1,l.notify("light-green",e.msg,"check_circle",this.$q),this.$emit("afterCancelorder")}).catch(e=>{l.notify("grey-8",e,"warning",this.$q)}).then(e=>{this.loading=!1})}}},O={key:0,class:"text-weight-bold no-margin"},Q={key:1,class:"text-weight-bold no-margin"},S={class:"q-mt-md"},V={class:"font12 text-weight-light"},b={key:2,class:"q-mt-md q-mb-sm"},B={class:"font12 text-weight-light"};function D(e,d,N,A,s,u){return n(),_(x,{modelValue:s.show_modal,"onUpdate:modelValue":d[0]||(d[0]=w=>s.show_modal=w),persistent:"",onBeforeShow:u.cancelOrderStatus,"transition-show":"fade","transition-hide":"fade"},{default:a(()=>[t(q,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[t(m,{class:"row items-center q-pb-none q-pa-none"},{default:a(()=>[t(h),f(t(r,{icon:"eva-close-outline",flat:"",round:"",dense:""},null,512),[[g]])]),_:1}),t(m,null,{default:a(()=>[s.cancel_response.refund_status==="full_refund"?(n(),c("h5",O,o(e.$t("Are you sure?")),1)):(n(),c("h5",Q,o(e.$t("How would you like to proceed?")),1)),i("div",S,[i("p",V,o(s.cancel_msg),1)]),s.cancel_response.refund_msg?(n(),c("div",b,[i("p",B,o(s.cancel_response.refund_msg),1)])):C("",!0)]),_:1}),t(k,null,{default:a(()=>[t(r,{unelevated:"",color:"secondary","text-color":"white","no-caps":"",class:"full-width",disable:!s.cancel_status,loading:s.loading,onClick:u.applyCancelOrder,size:"md"},{default:a(()=>[p(o(e.$t("Cancel order")),1)]),_:1},8,["disable","loading","onClick"]),t(h,{class:"q-pa-sm"}),f((n(),_(r,{unelevated:"",color:"mygrey","text-color":"dark","no-caps":"",class:"full-width",size:"md"},{default:a(()=>[p(o(e.$t("Don't Cancel")),1)]),_:1})),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var U=y(v,[["render",D]]);export{U as default};
