import{Q as p}from"./QSpace.df9ea38d.js";import{_,n as i,q as u,t as y,u as o,j as s,U as c,ae as f,Q as m,V as d,ab as b,a$ as g,bE as w,ad as S,a9 as v}from"./index.ea6274c1.js";import{Q as C}from"./QToolbar.955f19ff.js";import{Q as $}from"./QInnerLoading.0bbefb19.js";import{Q as q}from"./QForm.109fb9f8.js";const Q={name:"StripeComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,visible:!1,client_secret:"",customer_id:"",publish_key:"",stripe:void 0,cardElement:void 0,cardholder_name:"",merchant_id:"",merchant_type:""}},methods:{showPaymentForm(){this.show_modal=!0,this.createCustomer()},close(){this.show_modal=!1},createCustomer(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.merchant_id=this.payment_credentials[this.payment_code].merchant_id,this.merchant_type=this.payment_credentials[this.payment_code].merchant_type);const e={merchant_id:this.merchant_id,payment_code:this.payment_code,merchant_type:this.merchant_type,reference:""};this.loading=!0,this.visible=!0,i.StripeCreateCustomer(e).then(t=>{this.client_secret=t.details.client_secret,this.customer_id=t.details.customer_id,this.initStripe()}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1,this.visible=!1})},initStripe(){window.Stripe==null?new Promise(e=>{const t=window.document,a="stripe-script",l=t.createElement("script");l.id=a,l.setAttribute("src","https://js.stripe.com/v3/"),t.head.appendChild(l),l.onload=()=>{e()}}).then(()=>{this.renderCard()}):this.renderCard()},renderCard(){const e={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}};if(typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null){this.publish_key=this.payment_credentials[this.payment_code].attr2,this.stripe=Stripe(this.publish_key);const t=this.stripe.elements();this.cardElement=t.create("card",{style:e}),setTimeout(()=>{this.cardElement.mount(this.$refs.card_element)},500)}else i.notify("dark","invalid payment credentials","warning",this.$q)},onSubmit(){this.loading=!0,this.visible=!0,this.stripe.confirmCardSetup(this.client_secret,{payment_method:{card:this.cardElement,billing_details:{name:this.cardholder_name}}}).then(e=>{this.loading=!1,this.visible=!1,e.error?e.error.code==="setup_intent_unexpected_state"&&this.createIntent():this.savePayment(e.setupIntent.payment_method)})},savePayment(e){this.loading=!0;const t={payment_method_id:e,merchant_id:this.merchant_id,payment_code:this.payment_code,merchant_type:this.merchant_type,reference:this.reference};i.StripeSavePayment(t).then(a=>{this.close(),this.$emit("afterAddpayment")}).catch(a=>{i.notify("dark",a,"error",this.$q)}).then(a=>{this.loading=!1})},createIntent(){const e={customer_id:this.customer_id,merchant_id:this.merchant_id,payment_code:this.payment_code,merchant_type:this.merchant_type};i.StripeCreateIntent(e).then(t=>{this.close(),this.$emit("afterAddpayment")}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},PaymentRender(e){const t={cart_uuid:e.cart_uuid,order_uuid:e.order_uuid,payment_uuid:e.payment_uuid,payment_code:e.payment_code};i.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),i.StripePaymentIntent(t).then(a=>{this.$emit("afterPayment",a.details)}).catch(a=>{i.notify("dark",a,"error",this.$q)}).then(a=>{i.hideLoadingBox(this.$q)})}}},k={class:"text-weight-bold no-margin"},I={class:"q-ma-sm"},P={class:"font12"},V={class:"q-mb-md",ref:"card_element"},x={class:"font11"};function B(e,t,a,l,n,h){return u(),y(v,{modelValue:n.show_modal,"onUpdate:modelValue":t[2]||(t[2]=r=>n.show_modal=r),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:o(()=>[s(S,{style:{width:"500px","max-width":"80vw"}},{default:o(()=>[s(C,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:o(()=>[s(p),s(c,{onClick:t[0]||(t[0]=r=>n.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),s(q,{onSubmit:h.onSubmit},{default:o(()=>[s(f,{class:"q-pa-md",style:{"padding-bottom":"0px"}},{default:o(()=>[m("h5",k,d(a.title),1),m("div",I,[m("p",P,d(a.label.notes),1)]),s(b,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:n.cardholder_name,"onUpdate:modelValue":t[1]||(t[1]=r=>n.cardholder_name=r),rules:[r=>r&&r.length>0||e.$t("this field is required")],label:e.$t("Cardholder name")},null,8,["bg-color","color","modelValue","rules","label"]),m("div",V,null,512),m("p",x,d(e.$t("I authorise {website_name} to send instructions to the financial"))+" "+d(e.$t("institution that issued my card to take payments from my card"))+" "+d(e.$t("account in accordance with the terms of my agreement with"))+" "+d(e.$t("{website_name}")),1),s($,{showing:n.visible,"label-style":"font-size: 1.1em"},null,8,["showing"])]),_:1}),s(g,{spaced:""}),s(w,null,{default:o(()=>[s(c,{type:"submit",label:e.$t(a.label.submit),loading:n.loading,unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])}var N=_(Q,[["render",B]]);export{N as default};
