import{a7 as a,v as l,_ as r,n as c,q as d,t as g,u as _,Q as t,V as h,j as f,a2 as u,U as m}from"./index.ea6274c1.js";const i=a("GoogleAuth",{web:()=>l(()=>import("./web.cf6e112e.js"),["assets/web.cf6e112e.js","assets/index.ea6274c1.js","assets/index.f7829e99.css"]).then(e=>new e.GoogleAuthWeb)}),p={name:"GoogleLogin",props:["client_id"],data(){return{loading:!1}},mounted(){this.init()},methods:{init(){this.$q.platform.is.desktop?i.initialize({clientId:this.client_id,scopes:["profile","email"],grantOfflineAccess:!0}):i.initialize()},Signin(){this.loading=!0,i.signIn().then(e=>{const o={id:e.id,email_address:e.email,first_name:e.givenName,last_name:e.familyName,social_strategy:"google",social_token:e.authentication.idToken};this.$emit("afterLogin",o)}).catch(e=>{e.code==10&&c.notify("dark","Error app is not signin","error",this.$q)}).then(e=>{this.loading=!1})}}},k={class:"row justify-between full-width"},v={class:"col text-left text-dark"},w={class:"col-1 text-right text-dark"};function x(e,o,y,$,s,n){return d(),g(m,{onClick:n.Signin,loading:s.loading,unelevated:"","no-caps":"",color:"mygrey",class:"full-width text-weight-bold",size:"lg"},{default:_(()=>[t("div",k,[t("div",v,h(e.$t("Continue with Google")),1),t("div",w,[f(u,{name:"lab la-google-plus-g"})])])]),_:1},8,["onClick","loading"])}var G=r(p,[["render",x]]);export{G as default};
