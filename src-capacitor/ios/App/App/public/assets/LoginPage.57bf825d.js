import{_ as Q,m as g,bk as h,n as l,a2 as p,p as f,q as b,S as _,k as t,u as a,a9 as y,F as k,V as n,ab as V,X as u,R as i,ac as w,a3 as q,bl as C,b2 as I,ad as P,v as $}from"./index.a3a9b403.js";import{Q as T}from"./QToolbarTitle.bdf7696f.js";import{Q as F}from"./QToolbar.84f8e4cf.js";import{Q as A}from"./QHeader.944e3fc5.js";import{Q as E}from"./QForm.ba8ae924.js";import{Q as v}from"./QSpace.eb4aa71a.js";import{Q as z}from"./QPage.36125042.js";import{u as R}from"./ClientStore.10ff10a1.js";import"./QResizeObserver.b1cbdf85.js";const U={name:"LoginPage",data(){return{username:"",password:"",field_type:"password",loading:!1,redirect:"",google_client_id:"",facebook_app_id:"",remember:!1}},setup(){return{ClientStore:R()}},components:{GoogleLogin:g(()=>$(()=>import("./GoogleLogin.ae31eec9.js"),["assets/GoogleLogin.ae31eec9.js","assets/index.a3a9b403.js","assets/index.469535cd.css"])),FacebookLogin:g(()=>$(()=>import("./FacebookLogin.4a824d94.js"),["assets/FacebookLogin.4a824d94.js","assets/index.a3a9b403.js","assets/index.469535cd.css"]))},mounted(){this.redirect=this.$route.query.redirect,this.google_client_id=h.google_client_id,this.facebook_app_id=h.facebook_app_id},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},hasSocialLogin(){return!l.empty(this.google_client_id)||!l.empty(this.facebook_app_id)}},methods:{onSubmit(){this.loading=!0,l.userLogin({username:this.username,password:this.password,local_id:l.getStorage("place_id")}).then(e=>{l.notify("light-green",e.msg,"check_circle",this.$q),p.setUser(e.details.user_data),p.setToken(e.details.user_token),this.ClientStore.user_settings=e.details.user_settings;const o=l.getStorage("place_id");typeof o!="undefined"&&o!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}).catch(e=>{l.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},afterLogin(e){e.place_id=l.getStorage("place_id"),l.socialRegistration(e).then(o=>{let c=!1;if(l.empty(o.details.complete_registration)||(c=o.details.complete_registration),o.details.verification==="1")this.$router.push({path:"/account/verify",query:{uuid:o.details.uuid,msg:o.msg}});else if(console.debug("=>"+c),c)this.$router.push({path:"/account/complete-registration",query:{uuid:o.details.uuid}});else{l.notify("dark",o.msg,"check_circle",this.$q),p.setUser(o.details.user_data),p.setToken(o.details.user_token),this.ClientStore.user_settings=o.details.user_settings;const m=l.getStorage("place_id");typeof m!="undefined"&&m!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}}).catch(o=>{l.notify("dark",o,"error",this.$q)}).then(o=>{})}}},x={class:"full-width q-pa-md"},B={class:"text-weight-bold"},D={class:"text-weight-medium q-ma-none"},N={class:"row"},G={class:"col"},O={class:"col text-right"},j={class:"text-center q-pt-md q-pb-sm"},H={class:"social-login"},M={class:"relative-position q-mb-lg q-mt-md"},X={class:"row justify-between full-width"},Y={class:"col text-left text-white"},J={class:"col-1 text-right text-white"};function K(e,o,c,m,r,d){const S=f("FacebookLogin"),L=f("GoogleLogin");return b(),_(k,null,[t(A,{reveal:"","reveal-offset":"50",class:y({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[t(F,null,{default:a(()=>[t(n,{onClick:o[0]||(o[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(T,{class:"text-weight-bold"},{default:a(()=>[V(u(e.$t("Sigin In")),1)]),_:1})]),_:1})]),_:1},8,["class"]),t(z,{padding:"",class:"flex flex-center"},{default:a(()=>[i("div",x,[i("h5",B,u(e.$t("Let's Sign You In")),1),i("p",D,u(e.$t("Enter your email and password for sigin.")),1),t(n,{flat:"",label:e.$t("Dont have an account?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/signup"},null,8,["label"]),t(E,{onSubmit:d.onSubmit},{default:a(()=>[t(w,{modelValue:r.username,"onUpdate:modelValue":o[1]||(o[1]=s=>r.username=s),label:e.$t("Email"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[s=>s&&s.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),t(w,{modelValue:r.password,"onUpdate:modelValue":o[3]||(o[3]=s=>r.password=s),type:r.field_type,outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",label:e.$t("Password"),"lazy-rules":"",rules:[s=>s&&s.length>0||e.$t("This field is required")]},{append:a(()=>[t(q,{onClick:o[2]||(o[2]=s=>r.field_type=r.field_type=="password"?"text":"password"),name:d.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","bg-color","label-color","label","rules"]),i("div",N,[i("div",G,[t(C,{dense:"",modelValue:r.remember,"onUpdate:modelValue":o[4]||(o[4]=s=>r.remember=s),label:e.$t("Remember Me"),color:"primary"},null,8,["modelValue","label"])]),i("div",O,[t(n,{flat:"",label:e.$t("Forgot Password?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/forgotpass"},null,8,["label"])])]),t(n,{loading:r.loading,type:"submit",label:e.$t("Sign In"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"]),i("div",j,[t(n,{flat:"",label:e.$t("Continue as guest"),"no-caps":"",class:"q-pa-none text-weight-bold min-height",color:"secondary",to:"/home",size:"md"},null,8,["label"])])]),_:1},8,["onSubmit"]),i("div",H,[i("div",M,[t(I,{spaced:"",labe:""}),i("div",{class:y(["absolute-center q-pl-sm q-pr-sm",{"bg-mydark text-grey300":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},u(e.$t("Or")),3)]),t(n,{unelevated:"","no-caps":"",color:"primary",class:"full-width text-weight-bold",size:"lg",to:"/user/login-phone"},{default:a(()=>[i("div",X,[i("div",Y,u(e.$t("Continue with Phone")),1),i("div",J,[t(q,{name:"las la-phone"})])])]),_:1}),t(v,{class:"q-pa-sm"}),d.hasSocialLogin?(b(),_(k,{key:0},[t(S,{ref:"facebook_login",app_id:r.facebook_app_id,onAfterLogin:d.afterLogin},null,8,["app_id","onAfterLogin"]),t(v,{class:"q-pa-sm"}),t(L,{client_id:r.google_client_id,ref:"google_login",onAfterLogin:d.afterLogin},null,8,["client_id","onAfterLogin"])],64)):P("",!0)])])]),_:1})],64)}var ae=Q(U,[["render",K]]);export{ae as default};