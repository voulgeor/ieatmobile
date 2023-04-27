import{_ as c,n as a,a2 as f,q as w,S as Q,k as t,u as i,F as V,V as b,ae as S,R as u,X as g,ac as n,as as _,bp as q,bq as C,b3 as m,ab as I,a3 as h,bG as k}from"./index.e230319b.js";import{Q as v}from"./QToolbar.6df38dcd.js";import{Q as F}from"./QHeader.4854892c.js";import{Q as T}from"./QInnerLoading.0b8a8d1f.js";import{Q as z}from"./QImg.0fbb4b94.js";import{Q as U}from"./QItemLabel.a48bebab.js";import{Q as P}from"./QSelect.e624ffdf.js";import{Q as y}from"./QSpace.e9701f98.js";import{Q as x}from"./QForm.014ed36c.js";import{Q as L}from"./QPage.225bb278.js";import{u as B}from"./ClientStore.18d0d64a.js";import"./QResizeObserver.14e0edf7.js";import"./QChip.cd74be9a.js";import"./selection.69ceab22.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";const N={name:"CompleteRegistration",data(){return{loading:!1,field_type:"password",field_type1:"password",first_name:"",last_name:"",email_address:"",password:"",cpassword:"",mobile_number:"",mobile_prefix:"",options:[],inner_loading:!1,client_uuid:""}},setup(){return{ClientStore:B()}},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},FieldIcon1(){return this.field_type1==="password"?"eva-eye-outline":"eva-eye-off-outline"}},mounted(){this.client_uuid=this.$route.query.uuid,this.getCustomerInfo()},methods:{getCustomerInfo(){this.inner_loading=!0,a.getCustomerInfo(this.client_uuid).then(l=>{this.first_name=l.details.first_name,this.last_name=l.details.last_name,this.email_address=l.details.email_address,this.mobile_prefix="+"+l.details.default_data.phonecode,Object.keys(l.details.data).length>0&&Object.entries(l.details.data).forEach(([s,r])=>{this.options.push({label:"+"+r.phonecode+" "+r.country_name,value:"+"+r.phonecode,flag:r.flag})})}).catch(l=>{a.notify("red-5",l,"error_outline",this.$q)}).then(l=>{this.inner_loading=!1})},onSubmit(){const l={client_uuid:this.client_uuid,first_name:this.first_name,last_name:this.last_name,password:this.password,cpassword:this.cpassword,mobile_prefix:this.mobile_prefix,mobile_number:this.mobile_number,local_id:a.getStorage("place_id")};this.loading=!0,a.completeSocialSignup(l).then(s=>{f.setUser(s.details.user_data),f.setToken(s.details.user_token),this.ClientStore.user_settings=s.details.user_settings;const r=a.getStorage("place_id");console.debug("=>"+r),typeof r!="undefined"&&r!==null?this.$router.push("/home"):this.$router.push("/location")}).catch(s=>{a.notify("red-5",s,null,this.$q)}).then(s=>{this.loading=!1})}}},R={class:"text-center"},E={class:"text-weight-bold q-mb-lg"},H={class:"w-75 margin-auto"};function $(l,s,r,j,o,d){return w(),Q(V,null,[t(F,{reveal:"","reveal-offset":"50",class:"bg-white"},{default:i(()=>[t(v,null,{default:i(()=>[t(b,{onClick:s[0]||(s[0]=e=>l.$router.back()),flat:"",round:"",dense:"",icon:"arrow_back",class:"q-mr-sm",color:"dark"})]),_:1})]),_:1}),t(L,{padding:""},{default:i(()=>[t(S,{flat:""},{default:i(()=>[t(T,{showing:o.inner_loading,color:"primary",size:"md"},null,8,["showing"]),u("div",R,[t(x,{onSubmit:d.onSubmit,class:"q-gutter-md"},{default:i(()=>[u("h5",E,g(l.$t("Fill your information")),1),u("div",H,[t(n,{modelValue:o.first_name,"onUpdate:modelValue":s[1]||(s[1]=e=>o.first_name=e),label:l.$t("First name"),"lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},null,8,["modelValue","label","rules"]),t(n,{modelValue:o.last_name,"onUpdate:modelValue":s[2]||(s[2]=e=>o.last_name=e),label:l.$t("Last name"),"lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},null,8,["modelValue","label","rules"]),t(n,{modelValue:o.email_address,"onUpdate:modelValue":s[3]||(s[3]=e=>o.email_address=e),label:l.$t("Email address"),disable:"","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},null,8,["modelValue","label","rules"]),t(n,{modelValue:o.mobile_number,"onUpdate:modelValue":s[5]||(s[5]=e=>o.mobile_number=e),dense:"",mask:"##############","lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},{prepend:i(()=>[t(P,{dense:"",modelValue:o.mobile_prefix,"onUpdate:modelValue":s[4]||(s[4]=e=>o.mobile_prefix=e),options:o.options,onFilter:l.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:""},{option:i(({itemProps:e,opt:p})=>[t(_,q(C(e)),{default:i(()=>[t(m,{avatar:""},{default:i(()=>[t(z,{src:p.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),t(m,null,{default:i(()=>[t(U,{innerHTML:p.label},null,8,["innerHTML"])]),_:2},1024)]),_:2},1040)]),"no-option":i(()=>[t(_,null,{default:i(()=>[t(m,{class:"text-grey"},{default:i(()=>[I(g(l.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","rules"]),t(n,{modelValue:o.password,"onUpdate:modelValue":s[7]||(s[7]=e=>o.password=e),type:o.field_type,label:l.$t("Password"),"lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},{append:i(()=>[t(h,{onClick:s[6]||(s[6]=e=>o.field_type=o.field_type=="password"?"text":"password"),name:d.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","label","rules"]),t(n,{type:o.field_type1,modelValue:o.cpassword,"onUpdate:modelValue":s[9]||(s[9]=e=>o.cpassword=e),label:l.$t("Confirm Password"),"lazy-rules":"",rules:[e=>e&&e.length>0||l.$t("This field is required")]},{append:i(()=>[t(h,{onClick:s[8]||(s[8]=e=>o.field_type1=o.field_type1=="password"?"text":"password"),name:d.FieldIcon1,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["type","modelValue","label","rules"]),t(y,{class:"q-pa-md"}),t(k,{vertical:"",align:"center"},{default:i(()=>[t(b,{loading:o.loading,type:"submit",label:l.$t("Submit"),unelevated:"",color:"primary","text-color":"white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1}),t(y,{class:"q-pa-md"})])]),_:1},8,["onSubmit"])])]),_:1})]),_:1})],64)}var ie=c(N,[["render",$]]);export{ie as default};
