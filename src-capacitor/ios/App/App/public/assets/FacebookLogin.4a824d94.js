import{a8 as l,v as r,_ as c,n as _,q as d,t as h,u as g,R as i,X as f,k as m,a3 as u,V as p}from"./index.a3a9b403.js";const o=l("FacebookLogin",{web:()=>r(()=>import("./web.1729f1d1.js"),["assets/web.1729f1d1.js","assets/index.a3a9b403.js","assets/index.469535cd.css"]).then(e=>new e.FacebookLoginWeb)}),b=["email","user_birthday","user_photos","user_gender"],k={name:"FacebookLogin",props:["app_id"],data(){return{loading:!1}},mounted(){this.init()},methods:{init(){o.initialize({appId:this.app_id})},Signin(){o.login({permissions:b}).then(e=>{this.getFbProfile(e.accessToken.token)}).catch(e=>{}).then(e=>{})},getFbProfile(e){this.loading=!0,o.getProfile({fields:["email","first_name","last_name"]}).then(t=>{console.debug(t);const a={id:t.id,email_address:t.email,first_name:t.first_name,last_name:t.last_name,social_strategy:"facebook",social_token:e};this.$emit("afterLogin",a)}).catch(t=>{_.notify("red-5",t,"error_outline",this.$q)}).then(t=>{this.loading=!1})}}},w={class:"row justify-between full-width"},F={class:"col text-left text-white"},v={class:"col-1 text-right text-white"};function x(e,t,a,P,s,n){return d(),h(p,{onClick:n.Signin,loading:s.loading,unelevated:"","no-caps":"",color:"myblue",class:"full-width text-weight-bold",size:"lg"},{default:g(()=>[i("div",w,[i("div",F,f(e.$t("Continue with Facebook")),1),i("div",v,[m(u,{name:"lab la-facebook"})])])]),_:1},8,["onClick","loading"])}var $=c(k,[["render",x]]);export{$ as default};
