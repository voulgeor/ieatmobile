import{a8 as a,v as l,_ as r,n as c,q as d,t as g,u as _,R as i,X as f,k as h,a3 as u,V as p}from"./index.e230319b.js";const t=a("GoogleAuth",{web:()=>l(()=>import("./web.b2bdd72b.js"),["assets/web.b2bdd72b.js","assets/index.e230319b.js","assets/index.469535cd.css"]).then(e=>new e.GoogleAuthWeb)}),m={name:"GoogleLogin",props:["client_id"],data(){return{loading:!1}},mounted(){this.init()},methods:{init(){this.$q.platform.is.desktop?t.initialize({clientId:this.client_id,scopes:["profile","email"],grantOfflineAccess:!0}):t.initialize({clientId:this.client_id,scopes:["profile","email"],grantOfflineAccess:!0})},Signin(){this.loading=!0,t.signIn().then(e=>{console.log(e);const o={id:e.id,email_address:e.email,first_name:e.givenName,last_name:e.familyName,social_strategy:"google",social_token:e.authentication.idToken};this.$emit("afterLogin",o)}).catch(e=>{e.code==10&&c.notify("dark","Error app is not signin","error",this.$q)}).then(e=>{this.loading=!1})}}},k={class:"row justify-between full-width"},v={class:"col text-left text-dark"},w={class:"col-1 text-right text-dark"};function x(e,o,y,A,s,n){return d(),g(p,{onClick:n.Signin,loading:s.loading,unelevated:"","no-caps":"",color:"mygrey",class:"full-width text-weight-bold",size:"lg"},{default:_(()=>[i("div",k,[i("div",v,f(e.$t("Continue with Google")),1),i("div",w,[h(u,{name:"lab la-google-plus-g"})])])]),_:1},8,["onClick","loading"])}var G=r(m,[["render",x]]);export{G as default};
