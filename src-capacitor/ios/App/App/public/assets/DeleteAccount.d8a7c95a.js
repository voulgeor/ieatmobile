import{_ as f,m as u,n as s,a2 as h,p,q as g,S as q,k as a,u as t,a9 as r,F as _,V as d,ab as k,X as l,ae as $,af as y,R as m,v as b}from"./index.744ddfee.js";import{Q as v}from"./QToolbarTitle.edce3d93.js";import{Q as w}from"./QToolbar.01a69a96.js";import{Q}from"./QHeader.a6882fe1.js";import{Q as C}from"./QSpace.7abc6e90.js";import{Q as V}from"./QFooter.76206379.js";import{Q as A}from"./QPage.9848fef2.js";import"./QResizeObserver.a8794211.js";const B={name:"DeleteAccount",components:{StepsVerification:u(()=>b(()=>import("./StepsVerification.0ff9cecf.js"),["assets/StepsVerification.0ff9cecf.js","assets/QSpace.7abc6e90.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QToolbar.01a69a96.js","assets/QForm.11aca545.js","assets/QInnerLoading.0d9aac1c.js"]))},data(){return{loading:!1,sent_message:""}},methods:{RequestEmailCode(){this.loading=!0,s.RequestEmailCode().then(e=>{this.sent_message=e.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0}).catch(e=>{s.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},afterVerifycode(e){this.loading=!0,s.showLoadingBox("",this.$q),s.fetchDataByTokenPost("deleteAccount","code="+e).then(o=>{this.$refs.steps_verification.show_modal=!1,h.logout(),this.$router.push("/home")}).catch(o=>{s.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1,s.hideLoadingBox(this.$q)})}}},D={class:"text-weight-bold q-ma-none"},S={class:"text-weight-medium q-ma-none"};function E(e,o,T,P,i,n){const c=p("StepsVerification");return g(),q(_,null,[a(Q,{reveal:"","reveal-offset":"50",class:r({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(w,null,{default:t(()=>[a(d,{onClick:o[0]||(o[0]=R=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(v,{class:"text-weight-bold"},{default:t(()=>[k(l(e.$t("Delete Account")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(A,{padding:"",class:r(["q-pl-md q-pr-md row items-stretch",{"bg-grey-dark":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode}])},{default:t(()=>[a($,{flat:"",class:r(["col-12",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:t(()=>[a(y,null,{default:t(()=>[m("h5",D,l(e.$t("You are requesting to have your account deleted and personal information removed.")),1),a(C,{class:"q-pa-sm"}),m("p",S,l(e.$t("You will permanently lose all your orders, reviews,favorites and profile information, there is no turning back.")),1)]),_:1})]),_:1},8,["class"]),a(V,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[a(d,{label:e.$t("Confirm Deletion"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",loading:i.loading,onClick:n.RequestEmailCode},null,8,["label","loading","onClick"])]),_:1}),a(c,{ref:"steps_verification",sent_message:i.sent_message,onAfterVerifycode:n.afterVerifycode},null,8,["sent_message","onAfterVerifycode"])]),_:1},8,["class"])],64)}var O=f(B,[["render",E]]);export{O as default};