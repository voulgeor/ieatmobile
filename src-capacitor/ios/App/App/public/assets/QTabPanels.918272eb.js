import{u as o,a as c,b as i,c as P}from"./use-panel.0fa1ed89.js";import{x as s,h as m,z as b,a3 as v,a5 as d,c as q,aL as k,g as D}from"./index.b5428c1f.js";var C=s({name:"QTabPanel",props:o,setup(a,{slots:e}){return()=>m("div",{class:"q-tab-panel"},b(e.default))}}),T=s({name:"QTabPanels",props:{...c,...v},emits:i,setup(a,{slots:e}){const n=D(),t=d(a,n.proxy.$q),{updatePanelsList:r,getPanelContent:l,panelDirectives:p}=P(),u=q(()=>"q-tab-panels q-panel-parent"+(t.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(e),k("div",{class:u.value},l(),"pan",a.swipeable,()=>p.value))}});export{T as Q,C as a};
