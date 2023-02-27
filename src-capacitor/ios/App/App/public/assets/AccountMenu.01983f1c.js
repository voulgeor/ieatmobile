import{_ as w,m as V,a0 as U,bh as A,a1 as y,n as g,p as B,q as l,R as b,j as e,u as t,a8 as v,F as q,U as s,aa as i,V as r,Q as _,b1 as T,ad as Q,ae as N,ai as d,t as n,b0 as o,a2 as c,ar as u,be as $,S as I,ac as C,v as L,aq as f}from"./index.b5428c1f.js";import{Q as F}from"./QToolbarTitle.ad5aac42.js";import{Q as z}from"./QToolbar.b8f4cf51.js";import{Q as M}from"./QHeader.3c924b64.js";import{Q as E}from"./QImg.b4e6faf5.js";import{Q as x}from"./QSpace.de8f976c.js";import{Q as O}from"./QList.9257b2df.js";import{Q as R}from"./QPage.40760bfd.js";import{u as j}from"./ClientStore.845fd4cd.js";import{S as H}from"./index.79edb11f.js";import"./QResizeObserver.74d4236c.js";const Y={name:"AccountMenu",components:{NotiButton:V(()=>L(()=>import("./NotiButton.c3d3cfba.js"),["assets/NotiButton.c3d3cfba.js","assets/index.b5428c1f.js","assets/index.f7829e99.css","assets/QBadge.0f4a71ae.js"]))},data(){return{data:[],theme_mode:!1,app_push_notifications:!1,promotional_push_notifications:!1,user_settings:{}}},setup(){const a=U(),m=A(),S=j();return{DataStore:a,DataStorePersisted:m,ClientStore:S}},watch:{theme_mode(a,m){this.$q.dark.set(a),this.DataStorePersisted.dark_mode=a}},created(){this.data=y.getUser(),this.authenticate(),this.theme_mode=this.DataStorePersisted.dark_mode,this.$q.dark.set(this.theme_mode),this.app_push_notifications=this.ClientStore.user_settings.app_push_notifications==1,this.promotional_push_notifications=this.ClientStore.user_settings.promotional_push_notifications==1},methods:{authenticate(){y.authenticate().then(a=>{}).catch(a=>{g.notify("dark",a,"error",this.$q),y.logout(),this.$router.push("/user/login")}).then(a=>{})},logout(){this.$q.dialog({title:this.$t("Logout"),message:this.$t("Are you sure you want to logout?"),persistent:!0,position:"standard",transitionShow:"fade",transitionHide:"fade",ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("Yes"),"no-caps":!0},cancel:{unelevated:!0,rounded:!1,color:"grey-3","text-color":"black",size:"md",label:this.$t("Cancel"),"no-caps":!0}}).onOk(()=>{y.logout(),this.ClientStore.user_settings=[],this.$router.push("/home")}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},Updateaccountnotification(){g.fetchDataByTokenPost("Updateaccountnotification","app_push_notifications="+this.app_push_notifications).then(a=>{this.ClientStore.user_settings.app_push_notifications=a.details.app_push_notifications}).catch(a=>{}).then(a=>{})},Updateaccountpromonotification(){g.fetchDataByTokenPost("Updateaccountpromonotification","promotional_push_notifications="+this.promotional_push_notifications).then(a=>{this.ClientStore.user_settings.promotional_push_notifications=a.details.promotional_push_notifications}).catch(a=>{}).then(a=>{})},inviteFriends(){this.$q.capacitor?H.share({title:this.$t(this.DataStore.invite_friend_settings.title),text:this.DataStore.invite_friend_settings.text,url:this.DataStore.invite_friend_settings.url,dialogTitle:""}).then(a=>{}).catch(a=>{}):navigator.share?navigator.share({title:this.$t(this.DataStore.invite_friend_settings.title),text:this.DataStore.invite_friend_settings.text,url:this.DataStore.invite_friend_settings.url}).then(()=>console.log("Successful share")).catch(a=>console.log("Error sharing",a)):this.$q.capacitor?g.showToast(this.$t("Share not supported")):g.notify("dark",this.$t("Share not supported"),"error",this.$q)}}},G={class:"row items-center"},J={class:"col-3"},K={class:"col"},W={class:"text-weight-bold q-ma-none"},X={class:"text-weight-medium q-ma-none"},Z={class:"row items-center q-gutter-sm"},ee={class:"col text-center"},te={class:"col text-center"},ae={class:"col text-center"};function oe(a,m,S,D,h,k){const P=B("NotiButton");return l(),b(q,null,[e(M,{reveal:"","reveal-offset":"50",class:v({"bg-transparent text-white":a.$q.dark.mode,"bg-grey-1 text-dark":!a.$q.dark.mode})},{default:t(()=>[e(z,null,{default:t(()=>[e(s,{to:"/home",flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm","text-color":a.$q.dark.mode?"white":"dark"},null,8,["text-color"]),e(F,{class:"text-weight-bold"},{default:t(()=>[i(r(a.$t("Profile")),1)]),_:1}),e(P)]),_:1})]),_:1},8,["class"]),e(R,{padding:"",class:v(["q-pa-md",{"bg-transparent":a.$q.dark.mode,"bg-grey-1":!a.$q.dark.mode}])},{default:t(()=>[_("div",G,[_("div",J,[e(T,null,{default:t(()=>[e(E,{src:h.data.avatar,lazy:"",style:{height:"50px","max-width":"50px"},"spinner-color":"secondary","spinner-size":"20px"},null,8,["src"])]),_:1})]),_("div",K,[_("h5",W,r(h.data.first_name)+" "+r(h.data.last_name),1),_("p",X,r(h.data.email_address),1)])]),e(x,{class:"q-pa-sm"}),e(Q,{flat:"",class:v(["radius8",{"bg-grey500":a.$q.dark.mode,"bg-white":!a.$q.dark.mode}])},{default:t(()=>[e(N,null,{default:t(()=>[_("div",Z,[_("div",ee,[e(s,{to:"/account/allorder",round:"",color:"secondary",icon:"las la-truck",dense:"",flat:""}),e(s,{to:"/account/allorder",flat:"","no-caps":"",label:a.$t("My All orders"),class:"line-height-one q-pa-none","text-color":a.$q.dark.mode?"bluegrey500":"dark"},null,8,["label","text-color"])]),_("div",te,[e(s,{to:{path:"feed",query:{query:"promo",page_title:"Promo"}},round:"",color:"primary",icon:"las la-percentage",dense:"",flat:""}),e(s,{flat:"","no-caps":"",label:a.$t("Offers & Coupons"),class:"line-height-one q-pa-none",to:{path:"feed",query:{query:"promo",page_title:"Promo"}},"text-color":a.$q.dark.mode?"bluegrey500":"dark"},null,8,["label","text-color"])]),_("div",ae,[e(s,{round:"",color:"yellow-5",icon:"las la-map-marker",dense:"",flat:"",to:"/account/my-address"}),e(s,{to:"/account/my-address",flat:"","no-caps":"",label:a.$t("Your Addresses"),class:"line-height-one q-pa-none","text-color":a.$q.dark.mode?"bluegrey500":"dark"},null,8,["label","text-color"])])])]),_:1})]),_:1},8,["class"]),e(x,{class:"q-pa-sm"}),e(Q,{flat:"",class:v(["radius8",{"bg-transparent":a.$q.dark.mode,"bg-grey-1":!a.$q.dark.mode}])},{default:t(()=>[e(O,{class:"modified-qlist"},{default:t(()=>[d((l(),n(u,{clickable:"",to:"/account/edit-profile"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-user-alt"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Manage Profile")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",to:"/account/change-password"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-lock"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Change Password")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",to:"/account/payments"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-credit-card"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Payments")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",to:"/account/favourites"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"lab la-gratipay"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Favourites")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:""},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-bell"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Push Notifications")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e($,{modelValue:h.app_push_notifications,"onUpdate:modelValue":[m[0]||(m[0]=p=>h.app_push_notifications=p),k.Updateaccountnotification],color:"secondary"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:""},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-bell"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Promotional Notifications")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e($,{modelValue:h.promotional_push_notifications,"onUpdate:modelValue":[m[1]||(m[1]=p=>h.promotional_push_notifications=p),k.Updateaccountpromonotification],color:"secondary"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",to:"/account/language"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-credit-card"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Language")),1)]),_:1}),D.DataStore.language_data?(l(),n(o,{key:0,side:""},{default:t(()=>[(l(!0),b(q,null,I(D.DataStore.language_data.data,p=>(l(),b(q,{key:p},[p.code==this.DataStorePersisted.app_language?(l(),n(s,{key:0,"no-caps":"",label:a.$t(p.title),unelevated:"","text-color":"dark","icon-right":"las la-angle-right",dense:"",class:"text-grey-5 font13"},null,8,["label"])):C("",!0)],64))),128))]),_:1})):C("",!0)]),_:1})),[[f]]),d((l(),n(u,{clickable:""},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-adjust"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Dark Mode")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e($,{modelValue:h.theme_mode,"onUpdate:modelValue":m[2]||(m[2]=p=>h.theme_mode=p),color:"secondary"},null,8,["modelValue"])]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",to:"/account/delete"},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-user-slash"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Delete Account")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",onClick:k.inviteFriends},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-user-friends"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Invite Friends")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1},8,["onClick"])),[[f]]),d((l(),n(u,{to:"/legal",clickable:""},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"grey-5",name:"las la-balance-scale"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Legal")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1})),[[f]]),d((l(),n(u,{clickable:"",onClick:k.logout},{default:t(()=>[e(o,{avatar:""},{default:t(()=>[e(c,{color:"secondary",name:"las la-sign-out-alt"})]),_:1}),e(o,null,{default:t(()=>[i(r(a.$t("Logout")),1)]),_:1}),e(o,{side:""},{default:t(()=>[e(s,{round:"",unelevated:"","text-color":"dark",icon:"las la-angle-right",dense:"",class:"text-grey-5 font13"})]),_:1})]),_:1},8,["onClick"])),[[f]])]),_:1})]),_:1},8,["class"])]),_:1},8,["class"])],64)}var pe=w(Y,[["render",oe]]);export{pe as default};
