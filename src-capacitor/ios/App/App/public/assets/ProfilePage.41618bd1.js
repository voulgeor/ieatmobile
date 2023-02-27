import{_ as p,m as g,a2 as m,p as h,q as b,S as x,k as e,u as t,F as Q,V as s,ab as n,X as o,ae as v,af as w,R as d,b4 as i,b2 as k,as as c,b3 as a,v as y}from"./index.744ddfee.js";import{Q as $}from"./QToolbarTitle.edce3d93.js";import{Q as P}from"./QToolbar.01a69a96.js";import{Q as C}from"./QHeader.a6882fe1.js";import{Q as f}from"./QSpace.7abc6e90.js";import{Q as z}from"./QImg.be7f5b67.js";import{Q as u}from"./QItemLabel.c3909d74.js";import{Q as B}from"./QList.dcc86a9b.js";import{Q as S}from"./QPage.9848fef2.js";import"./QResizeObserver.a8794211.js";const N={name:"ProfilePage",data(){return{data:[]}},components:{NotiButton:g(()=>y(()=>import("./NotiButton.98fd8c15.js"),["assets/NotiButton.98fd8c15.js","assets/index.744ddfee.js","assets/index.469535cd.css","assets/QBadge.c3da1f70.js"]))},mounted(){this.data=m.getUser()},methods:{logout(){this.$q.dialog({title:this.$t("Logout"),message:this.$t("Are you sure you want to logout?"),persistent:!0,position:"bottom",ok:{unelevated:!0,color:"warning",rounded:!1,"text-color":"black",size:"md",label:this.$t("Yes"),"no-caps":!0},cancel:{unelevated:!0,rounded:!1,color:"grey-3","text-color":"black",size:"md",label:this.$t("Cancel"),"no-caps":!0}}).onOk(()=>{m.logout(),this.$router.push("/home")}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})}}},q={class:"text-center q-mb-lg"},A={class:"text-h6 text-weight-bold line-normal"},I={class:"font12 text-grey"};function T(l,V,E,L,r,D){const _=h("NotiButton");return b(),x(Q,null,[e(C,{class:"bg-white"},{default:t(()=>[e(P,null,{default:t(()=>[e(s,{to:"/account-menu",flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),e($,{class:"text-dark text-center text-weight-bold"},{default:t(()=>[n(o(l.$t("Profile")),1)]),_:1}),e(_)]),_:1})]),_:1}),e(S,{padding:"",class:"bg-grey-2"},{default:t(()=>[e(f,{class:"q-pa-xs"}),e(v,{flat:"",class:"radius8"},{default:t(()=>[e(w,null,{default:t(()=>[d("div",q,[e(i,null,{default:t(()=>[e(z,{src:r.data.avatar,lazy:"",style:{height:"50px","max-width":"50px"},"spinner-color":"amber","spinner-size":"20px"},null,8,["src"])]),_:1}),d("div",A,o(r.data.first_name)+" "+o(r.data.last_name),1),d("div",I,o(r.data.email_address),1),e(f,{class:"q-pa-xs"}),e(s,{to:"/account/edit-profile",label:l.$t("Edit Profile"),flat:"",dense:"","text-color":"amber-14","no-caps":""},null,8,["label"])]),e(k),e(B,null,{default:t(()=>[e(c,{clickable:"",to:"/account/settings"},{default:t(()=>[e(a,{avatar:"",style:{"min-width":"auto"}},{default:t(()=>[e(i,{rounded:"",color:"amber-2","text-color":"orange-5",icon:"eva-settings-outline",size:"md"})]),_:1}),e(a,null,{default:t(()=>[e(u,{class:"text-weight-medium line-normal ellipsis full-width"},{default:t(()=>[n(o(l.$t("Settings")),1)]),_:1})]),_:1}),e(a,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"chevron_right",dense:""})]),_:1})]),_:1}),e(c,{clickable:"",to:"/account/change-password"},{default:t(()=>[e(a,{avatar:"",style:{"min-width":"auto"}},{default:t(()=>[e(i,{rounded:"",color:"amber-2","text-color":"orange-5",icon:"las la-lock-open",size:"md"})]),_:1}),e(a,null,{default:t(()=>[e(u,{class:"text-weight-medium line-normal ellipsis full-width"},{default:t(()=>[n(o(l.$t("Change Password")),1)]),_:1})]),_:1}),e(a,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"chevron_right",dense:""})]),_:1})]),_:1}),e(c,{clickable:"",to:"/account/manage-account"},{default:t(()=>[e(a,{avatar:"",style:{"min-width":"auto"}},{default:t(()=>[e(i,{rounded:"",color:"amber-2","text-color":"orange-5",icon:"person_outline",size:"md"})]),_:1}),e(a,null,{default:t(()=>[e(u,{class:"text-weight-medium line-normal ellipsis full-width"},{default:t(()=>[n(o(l.$t("Manage Account")),1)]),_:1})]),_:1}),e(a,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"chevron_right",dense:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var J=p(N,[["render",T]]);export{J as default};
