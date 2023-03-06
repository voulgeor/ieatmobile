import{Q as h}from"./QSpace.5710b96a.js";import{_ as g,n as o,q as P,S as q,k as t,u as i,ae as u,V as c,af as p,R as l,X as m,b2 as _,bG as y,aa as f,aj as v,F as x}from"./index.e1f31b72.js";import{Q as C}from"./QToolbar.9ad6ac15.js";import{C as Q}from"./ClosePopup.bde3ffe6.js";import{l as V}from"./index.4f152a18.js";let w;const k={name:"PaypalComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,payment_modal:!1,client_id:""}},methods:{showPaymentForm(){this.show_modal=!0},close(){this.show_modal=!1},onSubmit(){let a=0;typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(a=this.payment_credentials[this.payment_code].merchant_id);const e={merchant_id:a,payment_code:this.payment_code};this.loading=!0,o.SavedPaymentProvider(e).then(s=>{this.close(),this.$emit("afterAddpayment")}).catch(s=>{o.notify("dark",s,"error",this.$q)}).then(s=>{this.loading=!1})},PaymentRender(a){this.data=a,this.payment_modal=!0,typeof this.payment_credentials[a.payment_code]!="undefined"&&this.payment_credentials[a.payment_code]!==null&&(this.client_id=this.payment_credentials[a.payment_code].attr2),this.initPaypal()},initPaypal(){V("https://www.paypal.com/sdk/js?client-id="+this.client_id+"&currency="+this.data.currency+"&disable-funding=credit,card").then(()=>{this.renderPaypal()}).catch(()=>{o.notify("negative","failed loading script","error_outline",this.$q)})},renderPaypal(){w=paypal.Buttons({createOrder:(a,e)=>e.order.create({purchase_units:[{amount:{value:this.data.total}}]}),onCancel:a=>{},onError:a=>{o.notify("dark",a,"error",this.$q)},onApprove:(a,e)=>e.order.capture().then(s=>{const d=s.purchase_units[0].payments.captures[0];this.CompletePaymentRequest(d.status,d.id,s.id)})}),w.render(this.$refs.paypal_button)},CompletePaymentRequest(a,e,s){let d={transaction_id:e,order_id:s,order_uuid:this.data.order_uuid,cart_uuid:this.data.cart_uuid};o.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),o.PaypalVerifyPayment(d).then(n=>{this.$emit("afterPayment",n.details)}).catch(n=>{o.notify("dark",n,"error",this.$q)}).then(n=>{o.hideLoadingBox(this.$q)})}}},S={class:"text-weight-bold no-margin"},B={class:"q-ma-sm"},$={class:"font12"},A={class:"text-weight-bold no-margin"},R={class:"q-ma-sm"},F={class:"font12"},j={ref:"paypal_button",class:"margin-auto full-width"};function z(a,e,s,d,n,b){return P(),q(x,null,[t(f,{modelValue:n.show_modal,"onUpdate:modelValue":e[2]||(e[2]=r=>n.show_modal=r),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:i(()=>[t(u,{style:{width:"500px","max-width":"80vw"}},{default:i(()=>[t(C,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:i(()=>[t(h),t(c,{onClick:e[0]||(e[0]=r=>n.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),t(p,{class:"q-pa-md"},{default:i(()=>[l("h5",S,m(s.title),1),l("div",B,[l("p",$,m(s.label.notes),1)])]),_:1}),t(_,{spaced:""}),t(y,null,{default:i(()=>[t(c,{label:a.$t(s.label.submit),loading:n.loading,onClick:e[1]||(e[1]=r=>b.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(f,{modelValue:n.payment_modal,"onUpdate:modelValue":e[3]||(e[3]=r=>n.payment_modal=r),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[t(u,{style:{width:"500px","max-width":"80vw"}},{default:i(()=>[t(p,{class:"row items-center q-pb-none q-pa-none"},{default:i(()=>[t(h),v(t(c,{icon:"eva-close-outline",flat:"",round:"",dense:""},null,512),[[Q]])]),_:1}),t(p,{class:"q-pa-md"},{default:i(()=>[l("h5",A,m(s.label.payment_title),1),l("div",R,[l("p",F,m(s.label.payment_subtitle),1)])]),_:1}),t(_,{spaced:""}),t(y,null,{default:i(()=>[l("div",j,null,512)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var U=g(k,[["render",z]]);export{U as default};