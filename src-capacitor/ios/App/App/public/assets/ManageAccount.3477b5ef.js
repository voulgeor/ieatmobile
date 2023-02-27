import{_ as m,m as p,n as o,a1 as _,p as g,q as c,R as d,k as t,u as s,F as u,U as h,aa as y,V as a,ad as b,ae as $,Q as n,a$ as v,v as w}from"./index.628e6afe.js";import{Q as k}from"./QToolbarTitle.00ffb145.js";import{Q as A}from"./QToolbar.380b4d8f.js";import{Q}from"./QHeader.c2c457f8.js";import{Q as q}from"./QSpace.665629e1.js";import{Q as D}from"./QInnerLoading.320be028.js";import{Q as C}from"./QPage.19e693fb.js";import"./QResizeObserver.23b01bb0.js";const V={name:"ManageAccount",components:{StepsVerification:p(()=>w(()=>import("./StepsVerification.5bcfb22f.js"),["assets/StepsVerification.5bcfb22f.js","assets/QSpace.665629e1.js","assets/index.628e6afe.js","assets/index.f7829e99.css","assets/QToolbar.380b4d8f.js","assets/QForm.44b35dda.js","assets/QInnerLoading.320be028.js"]))},data(){return{loading:!1,code:"",account_deleted:!1}},methods:{requestData(){o.requestData().then(e=>{}).catch(e=>{o.notify("red-5",e,"error_outline",this.$q)}).then(e=>{})},beforeDelete(){this.loading=!0,this.code="",o.RequestEmailCode().then(e=>{this.sent_message=e.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0}).catch(e=>{o.notify("negative",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},afterVerifycode(e){this.code=e,o.verifyAccountDelete(e).then(i=>{this.$refs.steps_verification.show_modal=!1,this.confirmDeletion()}).catch(i=>{o.notify("red-5",i,"error_outline",this.$q)}).then(i=>{this.loading=!1})},confirmDeletion(){this.$q.dialog({title:this.$t("Confirm account deletion"),message:this.$t(`Are you sure you want to delete your account and customer data? 
  This action is permanent and cannot be undone.`),persistent:!0,position:"bottom",ok:{unelevated:!0,color:"warning",rounded:!1,"text-color":"black",size:"md",label:this.$t("Yes delete my account"),"no-caps":!0},cancel:{unelevated:!0,rounded:!1,color:"grey-3","text-color":"black",size:"md",label:this.$t("Cancel"),"no-caps":!0}}).onOk(()=>{this.deleteAccount()}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},deleteAccount(){this.loading=!0,o.deleteAccount(this.code).then(e=>{this.account_deleted=!0,setTimeout(()=>{_.logout(),this.$router.push("/home")},5e3)}).catch(e=>{o.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})}}},x=n("div",null,null,-1),S={class:"text-h6 text-weight-bold"},T={class:"font12"},Y={class:"font12"},z={class:"text-h6"},R={class:"font12"},B={class:"text-h6"},E={class:"font12"};function N(e,i,P,I,r,l){const f=g("StepsVerification");return c(),d(u,null,[t(Q,{class:"bg-white"},{default:s(()=>[t(A,null,{default:s(()=>[t(h,{to:"/account/profile",flat:"",round:"",dense:"",icon:"arrow_back",color:"dark",disable:r.account_deleted},null,8,["disable"]),t(k,{class:"text-dark text-center text-weight-bold"},{default:s(()=>[y(a(e.$t("Manage Account")),1)]),_:1}),x]),_:1})]),_:1}),t(C,{padding:"",class:"bg-grey-2"},{default:s(()=>[t(q,{class:"q-pa-xs"}),t(b,{flat:"",class:"radius8"},{default:s(()=>[t($,{class:"q-pa-md"},{default:s(()=>[r.account_deleted?(c(),d(u,{key:0},[n("div",S,a(e.$t("Your account is being deleted")),1),n("p",T,a(e.$t("You will be automatically logged out. Your account will be deleted in the next few minutes.")),1),n("p",Y,a(e.$t("Note: We may retain some information when permitted by law.")),1)],64)):(c(),d(u,{key:1},[n("div",z,a(e.$t("Account Data")),1),n("p",R,a(e.$t("You can request an archive of your personal information. We'll notify you when it's ready to download.")),1),t(h,{onClick:l.requestData,label:e.$t("Request Archive"),size:"md",flat:"",dense:"","text-color":"primary","no-caps":""},null,8,["onClick","label"]),t(v,{spaced:""}),n("div",B,a(e.$t("Delete Account")),1),n("p",E,a(e.$t("You can request to have your account deleted and personal information removed.")),1),t(h,{onClick:l.beforeDelete,label:e.$t("Request Delete Account"),size:"md",flat:"",dense:"","text-color":"primary","no-caps":""},null,8,["onClick","label"])],64))]),_:1}),t(D,{showing:r.loading,color:"primary",size:"md"},null,8,["showing"])]),_:1}),t(f,{ref:"steps_verification",sent_message:e.sent_message,phone_prefix:e.phone_prefix,phone_number:e.phone_number,onAfterVerifycode:l.afterVerifycode},null,8,["sent_message","phone_prefix","phone_number","onAfterVerifycode"])]),_:1})],64)}var G=m(V,[["render",N]]);export{G as default};
