import{_ as d,bO as n,q as u,t as c,u as a,j as o,ae as _,Q as e,V as i,U as h,ad as m,a9 as p}from"./index.ea6274c1.js";import{Q as f}from"./QSpace.df9ea38d.js";const g={name:"PushDialog",setup(){return{PushStore:n()}}},S={class:"row items-center fit"},P={class:"col"},x={class:"text-weight-bold"},v={class:"col-2 text-right"},Q={class:"font11 text-weight-medium"};function V(l,t,w,s,y,B){return u(),c(p,{modelValue:s.PushStore.push_modal,"onUpdate:modelValue":t[1]||(t[1]=r=>s.PushStore.push_modal=r),position:"top",seamless:!0},{default:a(()=>[o(m,{style:{width:"75% !important","margin-top":"20px"}},{default:a(()=>[o(_,{class:"q-pa-sm"},{default:a(()=>[e("div",S,[e("div",P,[e("div",x,i(s.PushStore.push_message.title),1)]),e("div",v,[o(h,{onClick:t[0]||(t[0]=r=>s.PushStore.push_modal=!1),round:"",color:"grey",icon:"close",size:"7px",unelevated:""})])]),o(f,{class:"q-pa-sm"}),e("div",Q,i(s.PushStore.push_message.body),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var b=d(g,[["render",V]]);export{b as default};
