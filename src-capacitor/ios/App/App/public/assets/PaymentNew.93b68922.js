import{_ as w,m as d,n as u,p as s,q as r,t as l,u as n,k as t,V as R,ab as h,X as y,a9 as c,S as _,R as f,ae as V,af as E,F as A,U as T,v as m,Y as q,aj as D,ar as I,as as L,b3 as P,a3 as O}from"./index.fff20017.js";import{Q as z}from"./QToolbarTitle.e49295d2.js";import{Q as B}from"./QToolbar.08817919.js";import{Q as M}from"./QHeader.fb975acc.js";import{Q as N}from"./QInnerLoading.5b3ceea0.js";import{Q as F}from"./QImg.dc29da83.js";import{Q as x}from"./QList.45f2a341.js";import{Q as Y}from"./QPage.d49d1d2c.js";import{Q as j}from"./QPullToRefresh.5d364774.js";import{u as H}from"./PaymentStore.b2c3940c.js";import"./QResizeObserver.48ba7799.js";import"./touch.e7f7558c.js";import"./selection.94eeb582.js";import"./format.a74bec27.js";const U={name:"PaymentNew",data(){return{params:""}},setup(){return{PaymentStore:H()}},components:{codComponents:d(()=>m(()=>import("./codComponents.e1755f90.js"),["assets/codComponents.e1755f90.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js"])),ocrComponents:d(()=>m(()=>import("./ocrComponents.6348923d.js"),["assets/ocrComponents.6348923d.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js","assets/QForm.e5bf8d47.js"])),StripeComponents:d(()=>m(()=>import("./StripeComponents.46638b17.js"),["assets/StripeComponents.46638b17.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js","assets/QInnerLoading.5b3ceea0.js","assets/QForm.e5bf8d47.js"])),PaypalComponents:d(()=>m(()=>import("./PaypalComponents.37ba3705.js"),["assets/PaypalComponents.37ba3705.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js","assets/ClosePopup.d326ff37.js","assets/index.dbe2d8de.js"])),RazorpayComponents:d(()=>m(()=>import("./RazorpayComponents.67e47184.js"),["assets/RazorpayComponents.67e47184.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js","assets/index.dbe2d8de.js"])),MercadopagoComponents:d(()=>m(()=>import("./MercadopagoComponents.9ae06392.js"),["assets/MercadopagoComponents.9ae06392.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js","assets/QSelect.12278320.js","assets/QChip.369de1c0.js","assets/QItemLabel.edeba251.js","assets/selection.94eeb582.js","assets/rtl.46960cfe.js","assets/format.a74bec27.js","assets/QForm.e5bf8d47.js","assets/ClosePopup.d326ff37.js","assets/index.dbe2d8de.js"])),BankComponents:d(()=>m(()=>import("./BankComponents.f12fb285.js"),["assets/BankComponents.f12fb285.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/QToolbar.08817919.js"])),VivaComponents:d(()=>m(()=>import("./VivaComponents.e1371dfa.js"),["assets/VivaComponents.e1371dfa.js","assets/QSpace.5bb2b9c8.js","assets/index.fff20017.js","assets/index.469535cd.css","assets/ClosePopup.d326ff37.js"]))},created(){this.$route.query.redirect=="/checkout"&&(this.params="cart_uuid="+u.getStorage("cart_uuid")),this.PaymentStore.PaymentMethod(null,this.params)},methods:{refresh(e){this.PaymentStore.PaymentMethod(e,this.params)},onchoosePayment(e){try{this.$refs[e.payment_code].showPaymentForm()}catch(p){u.notify("grey-8",p,"error_outline",this.$q)}},afterAddpayment(){this.$route.query.redirect=="/checkout"?this.$router.push("/checkout?refresh_payment=1"):this.$router.back()}}},X={key:0,class:"min-height-inherit flex flex-center"},G={class:"full-width text-center q-pb-xl"},J={class:"text-h5 text-weight-bold"},K={class:"text-grey font12"};function W(e,p,Z,a,ee,o){const b=s("codComponents"),g=s("ocrComponents"),k=s("StripeComponents"),v=s("PaypalComponents"),C=s("RazorpayComponents"),S=s("MercadopagoComponents"),Q=s("BankComponents"),$=s("VivaComponents");return r(),l(j,{onRefresh:o.refresh},{default:n(()=>[t(M,{reveal:"","reveal-offset":"50",class:c({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:n(()=>[t(B,null,{default:n(()=>[t(R,{onClick:p[0]||(p[0]=i=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(z,{class:"text-weight-bold"},{default:n(()=>[h(y(e.$t("New Payment")),1)]),_:1})]),_:1})]),_:1},8,["class"]),t(Y,{class:c(["q-pl-md q-pr-md",{"flex flex-center":!a.PaymentStore.hasData&&!a.PaymentStore.loading2,"row items-stretch ":a.PaymentStore.hasData&&!a.PaymentStore.loading2,"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}])},{default:n(()=>[!a.PaymentStore.hasData&&!a.PaymentStore.loading2?(r(),_("div",X,[f("div",G,[f("div",J,y(e.$t("No Payment available")),1),f("p",K,y(e.$t("There is no payment available")),1)])])):(r(),_(A,{key:1},[a.PaymentStore.loading2?(r(),l(N,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(r(),l(V,{key:1,flat:"",class:c(["radius8 col-12",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:n(()=>[t(E,null,{default:n(()=>[t(x,null,{default:n(()=>[(r(!0),_(A,null,T(a.PaymentStore.payment_list,i=>(r(),l(q,{key:i.payment_code,appear:"","leave-active-class":"animated fadeOut"},{default:n(()=>[D((r(),l(L,{onClick:te=>o.onchoosePayment(i),clickable:"",class:"border-grey radius10 q-mb-sm"},{default:n(()=>[t(P,{avatar:""},{default:n(()=>[i.logo_type==="icon"?(r(),l(O,{key:0,color:"warning",name:"credit_card"})):(r(),l(F,{key:1,src:i.logo_image,fit:"contain",style:{height:"35px","max-width":"35px"}},null,8,["src"]))]),_:2},1024),t(P,null,{default:n(()=>[h(y(i.payment_name),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[I]])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["class"]))],64)),t(b,{ref:"cod",payment_code:"cod",title:e.$t("Add Cash On delivery"),label:{submit:this.$t("Add Cash"),notes:this.$t("Cash on Delivery or COD is a payment method that allows pay for the items you have ordered only when it gets delivered.")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(g,{ref:"ocr",payment_code:"ocr",title:e.$t("Add Credit card"),label:{submit:e.$t("Add Card"),notes:""},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(k,{ref:"stripe",payment_code:"stripe",title:e.$t("Add Stripe"),label:{submit:this.$t("Add Stripe"),notes:this.$t("Add your card account")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(v,{ref:"paypal",payment_code:"paypal",title:e.$t("Add Paypal"),label:{submit:this.$t("Add Paypal"),notes:this.$t("Pay using your paypal account"),payment_title:this.$t("Pay using Paypal"),payment_subtitle:this.$t("You will re-direct to paypal account to login to your account.")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(C,{ref:"razorpay",payment_code:"razorpay",title:e.$t("Add Razorpay"),label:{submit:this.$t("Submit"),notes:this.$t("Pay using your Razorpay account")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(S,{ref:"mercadopago",payment_code:"mercadopago",title:e.$t("Add Mercadopago"),label:{submit:this.$t("Add Mercadopago"),notes:this.$t("Pay using your mercadopago account")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t(Q,{ref:"bank",payment_code:"bank",title:e.$t("Add Bank Transfer"),label:{submit:this.$t("Add Payment"),notes:this.$t("Pay using bank Transfer")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"]),t($,{ref:"viva",payment_code:"viva",title:e.$t("Add Viva payment"),label:{submit:this.$t("Add Viva payment"),notes:this.$t("Pay using your Viva account")},payment_credentials:a.PaymentStore.payment_credentials,onAfterAddpayment:o.afterAddpayment},null,8,["title","label","payment_credentials","onAfterAddpayment"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ue=w(U,[["render",W]]);export{ue as default};
