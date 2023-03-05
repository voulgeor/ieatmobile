import{_ as y,a0 as w,bi as c,n as a,a1 as u,q as k,R as q,k as o,u as r,a8 as Q,F as S,U as n,aa as m,V as d,Q as i,ab as g,ar as h,bm as v,bn as V,b0 as p,a2 as $,bj as x}from"./index.dd7e00fb.js";import{Q as I}from"./QToolbarTitle.b1bd964d.js";import{Q as P}from"./QToolbar.8b195103.js";import{Q as F}from"./QHeader.29791060.js";import{Q as D}from"./QImg.f2e4421e.js";import{Q as T}from"./QItemLabel.a9f52d7c.js";import{Q as C}from"./QSelect.787a612b.js";import{Q as L}from"./QForm.2f2766d7.js";import{Q as U}from"./QPage.d286c01b.js";import"./QResizeObserver.e43a870f.js";import"./QChip.e6b8778e.js";import"./selection.3817dd43.js";import"./rtl.4b414a6d.js";import"./format.2a3572e1.js";const z={name:"LoginPage",data(){return{mobile_number:"",mobile_prefix:"",password:"",field_type:"password",loading:!1,redirect:"",google_client_id:"",facebook_app_id:"",remember:!1}},components:{},setup(){return{DataStore:w()}},mounted(){this.redirect=this.$route.query.redirect,this.google_client_id=c.google_client_id,this.facebook_app_id=c.facebook_app_id},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},hasSocialLogin(){return!a.empty(this.google_client_id)||!a.empty(this.facebook_app_id)}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,t){Object.keys(e.phone_default_data).length>0&&(this.mobile_prefix="+"+e.phone_default_data.phonecode)}}},methods:{onSubmit(){this.loading=!0,a.fetchData("userLoginPhone",{mobile_prefix:this.mobile_prefix,mobile_number:this.mobile_number,password:this.password,local_id:a.getStorage("place_id")}).then(e=>{a.notify("light-green",e.msg,"check_circle",this.$q),u.setUser(e.details.user_data),u.setToken(e.details.user_token),u.setStorage("user_settings",e.details.user_settings);const t=a.getStorage("place_id");typeof t!="undefined"&&t!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}).catch(e=>{a.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},B={class:"full-width q-pa-md"},N={class:"text-weight-bold"},R={class:"text-weight-medium q-ma-none"},j={class:"row"},E={class:"col"},W={class:"col text-right"},A={class:"text-center q-pa-sm"};function H(e,t,M,_,s,b){return k(),q(S,null,[o(F,{reveal:"","reveal-offset":"50",class:Q({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:r(()=>[o(P,null,{default:r(()=>[o(n,{onClick:t[0]||(t[0]=l=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(I,{class:"text-weight-bold"},{default:r(()=>[m(d(e.$t("Sigin With Phone")),1)]),_:1})]),_:1})]),_:1},8,["class"]),o(U,{padding:"",class:"flex flex-center"},{default:r(()=>[i("div",B,[i("h5",N,d(e.$t("Let's Sign You In")),1),i("p",R,d(e.$t("Enter your phone number and password for sigin.")),1),o(n,{flat:"",label:e.$t("Dont have an account?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/signup"},null,8,["label"]),o(L,{onSubmit:b.onSubmit},{default:r(()=>[o(g,{modelValue:s.mobile_number,"onUpdate:modelValue":t[2]||(t[2]=l=>s.mobile_number=l),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||"This field is required"]},{prepend:r(()=>[o(C,{dense:"",modelValue:s.mobile_prefix,"onUpdate:modelValue":t[1]||(t[1]=l=>s.mobile_prefix=l),options:_.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:"",class:"myq-field"},{option:r(({itemProps:l,opt:f})=>[o(h,v(V(l)),{default:r(()=>[o(p,{avatar:""},{default:r(()=>[o(D,{src:f.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),o(p,null,{default:r(()=>[o(T,null,{default:r(()=>[m(d(f.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":r(()=>[o(h,null,{default:r(()=>[o(p,{class:"text-grey"},{default:r(()=>[m(d(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"]),o(g,{modelValue:s.password,"onUpdate:modelValue":t[4]||(t[4]=l=>s.password=l),type:s.field_type,outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",label:e.$t("Password"),"lazy-rules":"",rules:[l=>l&&l.length>0||"This field is required"]},{append:r(()=>[o($,{onClick:t[3]||(t[3]=l=>s.field_type=s.field_type=="password"?"text":"password"),name:b.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","bg-color","label-color","label","rules"]),i("div",j,[i("div",E,[o(x,{dense:"",modelValue:s.remember,"onUpdate:modelValue":t[5]||(t[5]=l=>s.remember=l),label:e.$t("Remember Me"),color:"primary"},null,8,["modelValue","label"])]),i("div",W,[o(n,{flat:"",label:e.$t("Forgot Password?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/forgotpass"},null,8,["label"])])]),o(n,{loading:s.loading,type:"submit",label:e.$t("Sign In"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"]),i("div",A,[o(n,{flat:"",label:e.$t("Continue as guest"),"no-caps":"",class:"q-pa-none text-weight-bold min-height",color:"secondary",to:"/home",replace:""},null,8,["label"])])]),_:1},8,["onSubmit"])])]),_:1})],64)}var ie=y(z,[["render",H]]);export{ie as default};
