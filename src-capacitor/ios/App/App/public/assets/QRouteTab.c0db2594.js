import{x as u,aP as n,aQ as i,c as m,w as b}from"./index.fff20017.js";import{u as c,a as l,b as T}from"./QTabs.cc32e71f.js";var R=u({name:"QRouteTab",props:{...n,...c},emits:l,setup(e,{slots:t,emit:s}){const a=i({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=T(e,t,s,{exact:m(()=>e.exact),...a});return b(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{R as Q};
