import{Q as p}from"./QSpace.df9ea38d.js";import{_ as f,n as m,q as n,t as c,u as r,j as o,U as u,ae as g,Q as d,V as i,R as h,ac as b,ab as y,ad as _,a9 as w}from"./index.ea6274c1.js";import{Q as C}from"./QToolbar.955f19ff.js";import{Q as k}from"./QForm.109fb9f8.js";import{Q}from"./QInnerLoading.0bbefb19.js";const V={name:"StepsVerification",props:["sent_message"],data(){return{show_modal:!1,loading:!1,visible:!1,code:"",counter:20,timer:void 0,sent_message2:""}},computed:{hasCode(){return!!m.empty(this.code)}},updated(){this.code=""},watch:{counter(e,t){e<=0&&this.stopTimer()},show_modal(e,t){e&&this.startTimer()},sent_message(e,t){this.sent_message2=e}},methods:{onSubmit(){this.$emit("afterVerifycode",this.code)},stopTimer(){clearInterval(this.timer)},startTimer(){this.stopTimer(),this.counter=20,this.timer=setInterval(()=>{this.counter--},1e3)},resendCode(){this.loading=!0,m.RequestEmailCode().then(e=>{this.sent_message2=e.msg,this.startTimer()}).catch(e=>{m.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})}}},q={class:"text-weight-bold q-mt-none"},v={class:"text-weight-medium line-normal"},S={key:0,class:"text-weight-bold font11"},T={class:"q-mb-sm text-center"},x={key:1,class:"font11 q-ma-none"};function z(e,t,B,I,s,a){return n(),c(w,{modelValue:s.show_modal,"onUpdate:modelValue":t[2]||(t[2]=l=>s.show_modal=l),persistent:"",position:"bottom"},{default:r(()=>[o(_,null,{default:r(()=>[o(C,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:r(()=>[o(p),o(u,{onClick:t[0]||(t[0]=l=>s.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),o(k,{onSubmit:a.onSubmit},{default:r(()=>[o(g,{class:"text-center"},{default:r(()=>[d("h4",q,i(e.$t("2-Step Verification")),1),d("p",v,i(e.$t("For your security, we want to make sure it's really you.")),1),s.sent_message2?(n(),h("p",S,i(s.sent_message2),1)):b("",!0),o(y,{"bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:s.code,"onUpdate:modelValue":t[1]||(t[1]=l=>s.code=l),label:e.$t("Code"),maxlength:"6","lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("Code is required")],mask:"######"},null,8,["bg-color","color","modelValue","label","rules"]),o(u,{type:"submit",unelevated:"","no-caps":"",class:"full-width q-mb-md",label:e.$t("Submit"),size:"lg",disabled:a.hasCode,loading:s.loading,color:a.hasCode==!1?"primary":"grey-5","text-color":a.hasCode==!1?"white":"dark"},null,8,["label","disabled","loading","color","text-color"]),d("div",T,[s.counter===0?(n(),c(u,{key:0,onClick:a.resendCode,flat:"",color:"blue","no-caps":"",label:e.$t("Resend"),dense:"",size:"sm"},null,8,["onClick","label"])):(n(),h("p",x,[d("u",null,i(e.$t("Resend Code in"))+" "+i(s.counter),1)]))])]),_:1})]),_:1},8,["onSubmit"]),o(Q,{showing:s.visible,color:"primary",size:"md","label-class":"dark"},null,8,["showing"])]),_:1})]),_:1},8,["modelValue"])}var F=f(V,[["render",z]]);export{F as default};
