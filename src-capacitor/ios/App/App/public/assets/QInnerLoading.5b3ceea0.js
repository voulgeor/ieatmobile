import{x as b,a4 as v,a5 as f,a6 as S,a7 as m,c as t,h as n,Y as y,g as C,Z as h}from"./index.fff20017.js";var q=b({name:"QInnerLoading",props:{...v,...f,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:a}){const s=C(),i=S(e,s.proxy.$q),{transitionProps:r,transitionStyle:o}=m(e),u=t(()=>"q-inner-loading absolute-full column flex-center"+(i.value===!0?" q-inner-loading--dark":"")),c=t(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const l=[n(h,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(n("div",{class:c.value,style:e.labelStyle},[e.label])),l}function g(){return e.showing===!0?n("div",{class:u.value,style:o.value},a.default!==void 0?a.default():d()):null}return()=>n(y,r.value,g)}});export{q as Q};
