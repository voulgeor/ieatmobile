import{_ as q,a1 as k,n as d,a2 as y,q as _,S as V,k as r,u as a,a9 as Q,F as S,V as m,ab as p,X as i,R as b,ac as t,as as h,bp as $,bq as v,b3 as f,a3 as c}from"./index.fff20017.js";import{Q as I}from"./QToolbarTitle.e49295d2.js";import{Q as F}from"./QToolbar.08817919.js";import{Q as T}from"./QHeader.fb975acc.js";import{Q as U}from"./QImg.dc29da83.js";import{Q as C}from"./QItemLabel.edeba251.js";import{Q as z}from"./QSelect.12278320.js";import{Q as P}from"./QForm.e5bf8d47.js";import{Q as D}from"./QPage.d49d1d2c.js";import{u as B}from"./ClientStore.58c518c1.js";import"./QResizeObserver.48ba7799.js";import"./QChip.369de1c0.js";import"./selection.94eeb582.js";import"./rtl.46960cfe.js";import"./format.a74bec27.js";const N={name:"SignupPage",data(){return{loading:!1,field_type:"password",field_type1:"password",first_name:"",last_name:"",email_address:"",password:"",cpassword:"",mobile_number:"",mobile_prefix:"",options:[],inner_loading:!1}},setup(){const e=k(),o=B();return{DataStore:e,ClientStore:o}},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},FieldIcon1(){return this.field_type1==="password"?"eva-eye-outline":"eva-eye-off-outline"}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,o){Object.keys(e.phone_default_data).length>0&&(this.mobile_prefix="+"+e.phone_default_data.phonecode)}}},methods:{onSubmit(){const e={first_name:this.first_name,last_name:this.last_name,email_address:this.email_address,password:this.password,cpassword:this.cpassword,mobile_prefix:this.mobile_prefix,mobile_number:this.mobile_number,local_id:d.getStorage("place_id")};this.loading=!0,d.registerUser(e).then(o=>{if(o.details.verify)this.$router.push({path:"/account/verify",query:{uuid:o.details.uuid,msg:o.msg}});else{y.setUser(o.details.user_data),y.setToken(o.details.user_token),this.ClientStore.user_settings=o.details.user_settings;const n=d.getStorage("place_id");typeof n!="undefined"&&n!==null?this.$router.push("/home"):this.$router.push("/location")}}).catch(o=>{d.notify("dark",o,null,this.$q)}).then(o=>{this.loading=!1})}}},A={class:"full-width q-pa-md"},E={class:"text-weight-bold"},L={class:"text-weight-medium q-ma-none"};function R(e,o,n,w,s,u){return _(),V(S,null,[r(T,{reveal:"","reveal-offset":"50",class:Q({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[r(F,null,{default:a(()=>[r(m,{onClick:o[0]||(o[0]=l=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(I,{class:"text-weight-bold"},{default:a(()=>[p(i(e.$t("Sigin Up")),1)]),_:1})]),_:1})]),_:1},8,["class"]),r(D,{padding:"",class:"flex flex-center"},{default:a(()=>[b("div",A,[b("h5",E,i(e.$t("Create Account")),1),b("p",L,i(e.$t("Enter your name, email and password for signup.")),1),r(m,{flat:"",label:e.$t("Already have an account?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/login"},null,8,["label"]),r(P,{onSubmit:u.onSubmit},{default:a(()=>[r(t,{modelValue:s.first_name,"onUpdate:modelValue":o[1]||(o[1]=l=>s.first_name=l),label:e.$t("First name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(t,{modelValue:s.last_name,"onUpdate:modelValue":o[2]||(o[2]=l=>s.last_name=l),label:e.$t("Last name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(t,{modelValue:s.email_address,"onUpdate:modelValue":o[3]||(o[3]=l=>s.email_address=l),label:e.$t("Email address"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(t,{modelValue:s.mobile_number,"onUpdate:modelValue":o[5]||(o[5]=l=>s.mobile_number=l),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},{prepend:a(()=>[r(z,{dense:"",modelValue:s.mobile_prefix,"onUpdate:modelValue":o[4]||(o[4]=l=>s.mobile_prefix=l),options:w.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderlessx:"",class:"myq-field"},{option:a(({itemProps:l,opt:g})=>[r(h,$(v(l)),{default:a(()=>[r(f,{avatar:""},{default:a(()=>[r(U,{src:g.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),r(f,null,{default:a(()=>[r(C,null,{default:a(()=>[p(i(g.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":a(()=>[r(h,null,{default:a(()=>[r(f,{class:"text-grey"},{default:a(()=>[p(i(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"]),r(t,{modelValue:s.password,"onUpdate:modelValue":o[7]||(o[7]=l=>s.password=l),type:s.field_type,label:e.$t("Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},{append:a(()=>[r(c,{onClick:o[6]||(o[6]=l=>s.field_type=s.field_type=="password"?"text":"password"),name:u.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","label","bg-color","label-color","rules"]),r(t,{type:s.field_type1,modelValue:s.cpassword,"onUpdate:modelValue":o[9]||(o[9]=l=>s.cpassword=l),label:e.$t("Confirm Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||e.$t("This field is required")]},{append:a(()=>[r(c,{onClick:o[8]||(o[8]=l=>s.field_type1=s.field_type1=="password"?"text":"password"),name:u.FieldIcon1,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["type","modelValue","label","bg-color","label-color","rules"]),r(m,{loading:s.loading,type:"submit",label:e.$t("Sign Up"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1},8,["onSubmit"])])]),_:1})],64)}var re=q(N,[["render",R]]);export{re as default};
