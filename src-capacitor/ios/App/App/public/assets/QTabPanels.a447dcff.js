import{u,a as c,b as i,c as P}from"./use-panel.8fc1c2a3.js";import{x as s,h as m,B as b,a4 as v,a6 as d,c as q,aM as k,g as D}from"./index.a3a9b403.js";var C=s({name:"QTabPanel",props:u,setup(a,{slots:e}){return()=>m("div",{class:"q-tab-panel",role:"tabpanel"},b(e.default))}}),T=s({name:"QTabPanels",props:{...c,...v},emits:i,setup(a,{slots:e}){const n=D(),t=d(a,n.proxy.$q),{updatePanelsList:r,getPanelContent:l,panelDirectives:p}=P(),o=q(()=>"q-tab-panels q-panel-parent"+(t.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(e),k("div",{class:o.value},l(),"pan",a.swipeable,()=>p.value))}});export{T as Q,C as a};
