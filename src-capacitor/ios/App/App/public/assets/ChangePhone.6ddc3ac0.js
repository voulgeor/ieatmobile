import{_ as u,m as _,v as c,n as i,p as b,q as g,S as v,k as o,u as s,ae as y,a9 as x,ab as m,X as p,V as d,af as V,R as h,ac as w,as as Q,b3 as C,bG as S,aa as k,F as q}from"./index.a3a9b403.js";import{Q as P}from"./QToolbarTitle.bdf7696f.js";import{Q as A}from"./QSpace.eb4aa71a.js";import{Q as T}from"./QToolbar.84f8e4cf.js";import{Q as I}from"./QSelect.782d8a98.js";import{Q as $}from"./QForm.ba8ae924.js";import"./QChip.3e943c18.js";import"./QItemLabel.0e0c1fe6.js";import"./selection.be4b730a.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";const z={name:"ChangePhone",props:["prefixes","phone_prefix_orig","contact_number_orig"],components:{StepsVerification:_(()=>c(()=>import("./StepsVerification.5d10dbd7.js"),["assets/StepsVerification.5d10dbd7.js","assets/QSpace.eb4aa71a.js","assets/index.a3a9b403.js","assets/index.469535cd.css","assets/QToolbar.84f8e4cf.js","assets/QForm.ba8ae924.js","assets/QInnerLoading.3f992c70.js"]))},data(){return{show_modal:!1,loading:!1,phone_prefix:"",phone_number:"",sent_message:""}},computed:{hasChangePhone(){return!(this.phone_prefix_orig!==this.phone_prefix||this.contact_number_orig!==this.phone_number)}},updated(){i.empty(this.phone_prefix)&&(this.phone_prefix=this.phone_prefix_orig),i.empty(this.phone_number)&&(this.phone_number=this.contact_number_orig)},watch:{phone_prefix_orig(e,t){this.phone_prefix=e},contact_number_orig(e,t){this.phone_number=e}},methods:{showModal(e){this.show_modal=e},beforeSubmit(){this.loading=!0,i.RequestEmailCode().then(e=>{this.sent_message=e.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0}).catch(e=>{i.notify("grey-8",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},afterVerifycode(e){this.$refs.steps_verification.visible=!0;const t={code:e,phone_prefix:this.phone_prefix,phone_number:this.phone_number,cart_uuid:i.getStorage("cart_uuid")};i.ChangePhone(t).then(a=>{this.$refs.steps_verification.show_modal=!1,i.notify("dark",a.msg,"done",this.$q),this.$emit("afterChangephone",a.details)}).catch(a=>{i.notify("dark",a,"error",this.$q)}).then(a=>{this.$refs.steps_verification.visible=!1})}}},B={class:"font12"},E={class:"radius8 q-pa-sm border-grey"};function N(e,t,a,D,r,l){const f=b("StepsVerification");return g(),v(q,null,[o(k,{modelValue:r.show_modal,"onUpdate:modelValue":t[3]||(t[3]=n=>r.show_modal=n),position:"bottom"},{default:s(()=>[o(y,null,{default:s(()=>[o(T,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[o(P,{class:x(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:s(()=>[m(p(e.$t("Your phone number")),1)]),_:1},8,["class"]),o(A),o(d,{onClick:t[0]||(t[0]=n=>r.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),o($,{onSubmit:l.beforeSubmit},{default:s(()=>[o(V,null,{default:s(()=>[h("div",B,p(e.$t("A 6 digit OTP will be sent via SMS to verify your mobile number")),1),h("div",E,[o(w,{modelValue:r.phone_number,"onUpdate:modelValue":t[2]||(t[2]=n=>r.phone_number=n),dense:"",mask:"####################",color:e.$q.dark.mode?"grey300":"dark","bg-color":e.$q.dark.mode?"grey600":"white",borderless:"",size:"lg"},{prepend:s(()=>[o(I,{dense:"",modelValue:r.phone_prefix,"onUpdate:modelValue":t[1]||(t[1]=n=>r.phone_prefix=n),options:a.prefixes,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:""},{"no-option":s(()=>[o(Q,null,{default:s(()=>[o(C,{class:"text-grey"},{default:s(()=>[m(p(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options"])]),_:1},8,["modelValue","color","bg-color"])])]),_:1}),o(S,{vertical:"",align:"center",class:"q-pa-md"},{default:s(()=>[o(d,{disabled:l.hasChangePhone,loading:r.loading,type:"submit",label:e.$t("Save"),unelevated:"",color:l.hasChangePhone==!1?"primary":"grey-5","text-color":l.hasChangePhone==!1?"white":"dark","no-caps":"",class:"full-width",size:"lg"},null,8,["disabled","loading","label","color","text-color"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),o(f,{ref:"steps_verification",sent_message:r.sent_message,phone_prefix:r.phone_prefix,phone_number:r.phone_number,onAfterVerifycode:l.afterVerifycode},null,8,["sent_message","phone_prefix","phone_number","onAfterVerifycode"])],64)}var J=u(z,[["render",N]]);export{J as default};
