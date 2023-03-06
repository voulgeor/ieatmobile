import{x as B,c as i,h as g,z as C,aZ as V,U as q,H as S,a_ as x}from"./index.bc7ef6d7.js";var Q=B({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const u=i(()=>{const d=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${d.length>0?" "+d:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>g("div",{class:u.value},C(n.default))}}),p=B({name:"QBtnToggle",props:{...V,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(n=>("label"in n||"icon"in n||"slot"in n)&&"value"in n)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:n,emit:u}){const d=i(()=>e.options.find(l=>l.value===e.modelValue)!==void 0),r=i(()=>({type:"hidden",name:e.name,value:e.modelValue})),m=x(r),v=i(()=>e.options.map((l,a)=>{const{attrs:c,value:s,slot:b,...t}=l;return{slot:b,props:{key:a,onClick(y){f(s,l,y)},"aria-pressed":s===e.modelValue?"true":"false",...c,...t,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,dense:e.dense,disable:e.disable===!0||t.disable===!0,color:s===e.modelValue?o(t,"toggleColor"):o(t,"color"),textColor:s===e.modelValue?o(t,"toggleTextColor"):o(t,"textColor"),noCaps:o(t,"noCaps")===!0,noWrap:o(t,"noWrap")===!0,size:o(t,"size"),padding:o(t,"padding"),ripple:o(t,"ripple"),stack:o(t,"stack")===!0,stretch:o(t,"stretch")===!0}}}));function f(l,a,c){e.readonly!==!0&&(e.modelValue===l?e.clearable===!0&&(u("update:modelValue",null,null),u("clear")):u("update:modelValue",l,a),u("click",c))}function o(l,a){return l[a]===void 0?e[a]:l[a]}function h(){const l=v.value.map(a=>g(q,a.props,a.slot!==void 0?n[a.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&d.value===!0&&m(l,"push"),S(n.default,l)}return()=>g(Q,{class:"q-btn-toggle",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,stretch:e.stretch,unelevated:e.unelevated,glossy:e.glossy,spread:e.spread},h)}});export{p as Q,Q as a};