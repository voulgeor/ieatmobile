import{Q as _}from"./QSpace.ac683136.js";import{_ as u,n as a,bV as p,q as y,t as f,u as o,k as s,ae as h,ai as w,U as l,Q as n,V as c,a$ as g,bE as b,ad as v,a9 as q}from"./index.f4219e68.js";import{C as x}from"./ClosePopup.db51029e.js";const $={name:"VivaComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,merchant_id:"",merchant_type:"",redirect:"",absoluteURL:"",order_uuid:"",cart_uuid:"",order_items:[],order_info:[],merchant:[],estimation:[],charge_type:"",payload:["merchant_info","items","order_info","estimation","charge_type"]}},mounted(){const i=this.$router.resolve({path:"/"});this.absoluteURL=new URL(i.href,window.location.origin).href},methods:{showPaymentForm(){this.show_modal=!0},close(){this.show_modal=!1},onSubmit(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.merchant_id=this.payment_credentials[this.payment_code].merchant_id,this.merchant_type=this.payment_credentials[this.payment_code].merchant_type);const i={merchant_id:this.merchant_id,payment_code:this.payment_code};this.loading=!0,a.SavedPaymentProvider(i).then(t=>{this.close(),this.$emit("afterAddpayment")}).catch(t=>{a.notify("negative",t,"error_outline",this.$q)}).then(t=>{this.loading=!1})},PaymentRender(i){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.merchant_id=this.payment_credentials[this.payment_code].merchant_id,this.merchant_type=this.payment_credentials[this.payment_code].merchant_type),this.order_uuid=i.order_uuid,this.cart_uuid=i.cart_uuid;const t={merchant_id:this.merchant_id,merchant_type:this.merchant_type,order_uuid:this.order_uuid,cart_uuid:this.cart_uuid,payment_code:this.payment_code,absoluteURL:this.absoluteURL,local_id:a.getStorage("local_id")};a.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),a.VivaCheckout(t).then(e=>{console.log(e),this.redirect=e.details.redirect,this.openExternal(e)}).catch(e=>{a.notify("negative",e,"error_outline",this.$q)}).then(e=>{a.hideLoadingBox(this.$q)})},openExternal(i){a.openBroswer(i),p.addListener("browserFinished",t=>{a.fetchDataByToken("orderDetails",{order_uuid:this.order_uuid,payload:this.payload}).then(e=>{e.details.data.order.order_info.payment_status=="paid"?(this.$router.push({path:"/order/successful",query:{order_uuid:this.order_uuid}}),this.data=e.details.data,this.order_items=e.details.data.items,this.order_info=e.details.data.order.order_info,this.merchant=e.details.data.merchant,this.estimation=e.details.data.estimation,this.charge_type=e.details.data.charge_type):(this.order_items=[],this.order_info=[],this.merchant=[],this.estimation=[],a.notify("dark",e.details.data.order.payment_status.unpaid.title,"error",this.$q))}).catch(e=>{this.order_items=[],this.order_info=[],this.merchant=[],this.estimation=[],a.notify("dark",e,"error",this.$q)})})}}},C={class:"text-weight-bold no-margin"},V={class:"q-ma-sm"},k={class:"font12"};function B(i,t,e,Q,r,m){return y(),f(q,{modelValue:r.show_modal,"onUpdate:modelValue":t[1]||(t[1]=d=>r.show_modal=d),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[s(v,{style:{width:"500px","max-width":"80vw"}},{default:o(()=>[s(h,{class:"row items-center q-pb-none q-pa-md"},{default:o(()=>[s(_),w(s(l,{icon:"ion-close",flat:"",round:"",dense:""},null,512),[[x]])]),_:1}),s(h,{class:"q-pa-md"},{default:o(()=>[n("h5",C,c(e.title),1),n("div",V,[n("p",k,c(e.label.notes),1)])]),_:1}),s(g,{spaced:""}),s(b,null,{default:o(()=>[s(l,{unelevated:"",roundedx:"",color:"warning","text-color":"black","no-caps":"",class:"full-width q-mb-md",label:i.$t(e.label.submit),size:"17px",loading:r.loading,onClick:t[0]||(t[0]=d=>m.onSubmit())},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var U=u($,[["render",B]]);export{U as default};
