import{x as r,aO as n,aP as i,c as m,w as c}from"./index.dd7e00fb.js";import{u as b,a as l,b as T}from"./QTabs.33defc83.js";var p=r({name:"QRouteTab",props:{...n,...b},emits:l,setup(a,{slots:t,emit:s}){const e=i(),{renderTab:o,$tabs:u}=T(a,t,s,{exact:m(()=>a.exact),...e});return c(()=>a.name+a.exact+(e.linkRoute.value||{}).href,()=>{u.verifyRouteModel()}),()=>o(e.linkTag.value,e.linkProps.value)}});export{p as Q};
