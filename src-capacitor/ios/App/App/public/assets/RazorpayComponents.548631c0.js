import{Q as m}from"./QSpace.72e06727.js";import{_ as p,n as r,q as y,t as _,u as s,k as i,V as l,af as u,R as d,X as c,b2 as f,bG as g,ae as w,aa as z}from"./index.7194caca.js";import{Q as b}from"./QToolbar.6e86fa1d.js";import{l as C}from"./index.4f152a18.js";const P={name:"RazorpayComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,credentials:[],orders:[]}},methods:{showPaymentForm(){this.show_modal=!0,this.setCredentials()},close(){this.show_modal=!1},closePayment(){this.$emit("afterCancelPayment")},setCredentials(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.credentials=this.payment_credentials[this.payment_code])},onSubmit(){const a={payment_code:this.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type};this.loading=!0,r.RazorpayCreateCustomer(a).then(t=>{this.close(),this.$emit("afterAddpayment")}).catch(t=>{r.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},PaymentRender(a){this.data=a;const t={cart_uuid:a.cart_uuid,order_uuid:a.order_uuid,payment_code:a.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type};r.showLoadingBox("Getting payment information..<br/>don't close this window",this.$q),r.RazorpayCreateOrder(t).then(e=>{this.orders=e.details,this.initRazorPay()}).catch(e=>{r.notify("dark",e,"error",this.$q)}).then(e=>{r.hideLoadingBox(this.$q)})},initRazorPay(){C("https://checkout.razorpay.com/v1/checkout.js").then(()=>{this.initPayment()}).catch(()=>{r.notify("negative","failed loading script","error_outline",this.$q)})},initPayment(){try{const a={key:this.credentials.attr2,amount:this.orders.amount,currency:this.orders.currency,name:this.orders.name,description:this.orders.description,order_id:this.orders.order_id,customer_id:this.orders.customer_id,handler:e=>{this.verifyPayment(e)},theme:{color:"#3399cc"},modal:{ondismiss:e=>{this.closePayment()}}},t=new Razorpay(a);t.on("payment.failed",e=>{}),t.open()}catch(a){r.notify("dark",a,"error",this.$q)}},verifyPayment(a){this.setCredentials();var t={cart_uuid:this.data.cart_uuid,order_uuid:this.data.order_uuid,payment_code:this.data.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type,razorpay_payment_id:a.razorpay_payment_id,razorpay_order_id:a.razorpay_order_id,razorpay_signature:a.razorpay_signature};r.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),r.RazorpayVerifyPayment(t).then(e=>{this.$emit("afterPayment",e.details)}).catch(e=>{r.notify("dark",e,"error",this.$q)}).then(e=>{r.hideLoadingBox(this.$q)})}}},q={class:"text-weight-bold no-margin"},x={class:"q-ma-sm"},$={class:"font12"};function k(a,t,e,v,o,h){return y(),_(z,{modelValue:o.show_modal,"onUpdate:modelValue":t[2]||(t[2]=n=>o.show_modal=n),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:s(()=>[i(w,{style:{width:"500px","max-width":"80vw"}},{default:s(()=>[i(b,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[i(m),i(l,{onClick:t[0]||(t[0]=n=>o.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),i(u,{class:"q-pa-md"},{default:s(()=>[d("h5",q,c(e.title),1),d("div",x,[d("p",$,c(e.label.notes),1)])]),_:1}),i(f,{spaced:""}),i(g,null,{default:s(()=>[i(l,{label:a.$t(e.label.submit),loading:o.loading,onClick:t[1]||(t[1]=n=>h.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var V=p(P,[["render",k]]);export{V as default};
