import{Q as n}from"./QImg.d7a45a76.js";import{Q as a}from"./QSpace.eb4aa71a.js";import{_ as c,n as s,bP as l,q as d,t as h,u as p,R as o,k as t,X as r,V as m}from"./index.a3a9b403.js";import{Q as f}from"./QPage.36125042.js";const u={name:"NetworkError",methods:{async CheckNetwork(){s.showLoadingBox("",this.$q),(await l.getStatus()).connected===!0?(s.hideLoadingBox(this.$q),this.$router.push("/home")):s.hideLoadingBox(this.$q)}}},k={class:"full-width text-center"},g={class:"text-h5 text-weight-bold"},_={class:"text-grey font12"};function w(e,x,y,$,q,i){return d(),h(f,{class:"q-pl-md q-pr-md flex flex-center"},{default:p(()=>[o("div",k,[t(n,{src:"network-error.png",fit:"fill","spinner-color":"primary",style:{"max-width":"150px"}}),t(a,{class:"q-pa-sm"}),o("div",g,r("We're having trouble loading"),1),o("div",_,r(e.$t("Please check your Network connectivity and try again")),1),t(a,{class:"q-pa-sm"}),t(m,{onClick:i.CheckNetwork,outline:"",style:{color:"dark"},label:e.$t("Try Again"),"no-caps":""},null,8,["onClick","label"])])]),_:1})}var b=c(u,[["render",w]]);export{b as default};
