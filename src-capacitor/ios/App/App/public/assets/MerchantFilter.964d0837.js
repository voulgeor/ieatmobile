import{Q as Pe}from"./QToolbarTitle.e49295d2.js";import{Q as ce}from"./QSpace.5bb2b9c8.js";import{a6 as Ee,r as M,c as l,bS as Ue,bK as Y,K as Ke,a4 as Xe,a$ as Ge,g as me,aJ as Je,h as m,aM as We,b1 as Ye,x as He,bf as Ze,w as et,aL as tt,_ as at,a1 as lt,n as I,q,t as B,u as S,k as b,a9 as rt,ab as st,X as D,V as Q,af as ot,R as L,ad as j,S as nt,U as it,F as ut,ae as ct,aa as dt}from"./index.fff20017.js";import{Q as de}from"./QToolbar.08817919.js";import{Q as H,a as vt}from"./QBtnToggle.e9a42da0.js";import{T as mt}from"./QPullToRefresh.5d364774.js";import{b as T}from"./format.a74bec27.js";import{Q as ft}from"./QFooter.a57501dc.js";import{u as bt}from"./DeliverySched.e78dd4e6.js";import"./touch.e7f7558c.js";import"./selection.94eeb582.js";import"./QResizeObserver.48ba7799.js";const ve="q-slider__marker-labels",ht=a=>({value:a}),pt=({marker:a})=>m("div",{key:a.value,style:a.style,class:a.classes},a.label),fe=[34,37,40,33,39,38],gt={...Xe,...Ge,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:a=>a>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},kt=["pan","update:modelValue","change"];function yt({updateValue:a,updatePosition:r,getDragging:$,formAttrs:o}){const{props:e,emit:f,slots:u,proxy:{$q:d}}=me(),R=Ee(e,d),P=Ye(o),p=M(!1),F=M(!1),g=M(!1),V=M(!1),h=l(()=>e.vertical===!0?"--v":"--h"),E=l(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),y=l(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(d.lang.rtl===!0)),C=l(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),x=l(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),c=l(()=>e.disable!==!0&&e.readonly!==!0&&C.value<x.value),k=l(()=>(String(e.step).trim().split(".")[1]||"").length),w=l(()=>e.step===0?1:e.step),be=l(()=>c.value===!0?e.tabindex||0:-1),N=l(()=>e.max-e.min),Z=l(()=>x.value-C.value),A=l(()=>K(C.value)),U=l(()=>K(x.value)),z=l(()=>e.vertical===!0?y.value===!0?"bottom":"top":y.value===!0?"right":"left"),ee=l(()=>e.vertical===!0?"height":"width"),he=l(()=>e.vertical===!0?"width":"height"),te=l(()=>e.vertical===!0?"vertical":"horizontal"),pe=l(()=>{const t={role:"slider","aria-valuemin":C.value,"aria-valuemax":x.value,"aria-orientation":te.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),ge=l(()=>`q-slider q-slider${h.value} q-slider--${p.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(c.value===!0?" q-slider--editable":""))+(g.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(R.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+h.value:""));function O(t){const s="q-slider__"+t;return`${s} ${s}${h.value} ${s}${h.value}${E.value}`}function ae(t){const s="q-slider__"+t;return`${s} ${s}${h.value}`}const ke=l(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),ye=l(()=>ae("markers")+" absolute overflow-hidden"),Ce=l(()=>ae("track-container")),xe=l(()=>O("pin")),_e=l(()=>O("label")),Se=l(()=>O("text-container")),$e=l(()=>O("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),we=l(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),qe=l(()=>{const t={[he.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),Me=l(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),le=l(()=>{const t={[z.value]:`${100*A.value}%`,[ee.value]:`${100*(U.value-A.value)}%`};return e.innerTrackImg!==void 0&&(t.backgroundImage=`url(${e.innerTrackImg}) !important`),t});function Fe(t){const{min:s,max:n,step:i}=e;let v=s+t*(n-s);if(i>0){const _=(v-s)%i;v+=(Math.abs(_)>=i/2?(_<0?-1:1)*i:0)-_}return k.value>0&&(v=parseFloat(v.toFixed(k.value))),T(v,C.value,x.value)}function K(t){return N.value===0?0:(t-e.min)/N.value}function Ve(t,s){const n=Je(t),i=e.vertical===!0?T((n.top-s.top)/s.height,0,1):T((n.left-s.left)/s.width,0,1);return T(y.value===!0?1-i:i,A.value,U.value)}const re=l(()=>Ue(e.markers)===!0?e.markers:w.value),se=l(()=>{const t=[],s=re.value,n=e.max;let i=e.min;do t.push(i),i+=s;while(i<n);return t.push(n),t}),oe=l(()=>{const t=` ${ve}${h.value}-`;return ve+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${y.value===!0?"rtl":"ltr"}`}),X=l(()=>e.markerLabels===!1?null:De(e.markerLabels).map((t,s)=>({index:s,value:t.value,label:t.label||t.value,classes:oe.value+(t.classes!==void 0?" "+t.classes:""),style:{...ie(t.value),...t.style||{}}}))),ne=l(()=>({markerList:X.value,markerMap:Le.value,classes:oe.value,getStyle:ie})),Be=l(()=>{if(Z.value!==0){const t=100*re.value/Z.value;return{...le.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}}return null});function De(t){if(t===!1)return null;if(t===!0)return se.value.map(ht);if(typeof t=="function")return se.value.map(n=>{const i=t(n);return Y(i)===!0?{...i,value:n}:{value:n,label:i}});const s=({value:n})=>n>=e.min&&n<=e.max;return Array.isArray(t)===!0?t.map(n=>Y(n)===!0?n:{value:n}).filter(s):Object.keys(t).map(n=>{const i=t[n],v=Number(n);return Y(i)===!0?{...i,value:v}:{value:v,label:i}}).filter(s)}function ie(t){return{[z.value]:`${100*(t-e.min)/N.value}%`}}const Le=l(()=>{if(e.markerLabels===!1)return null;const t={};return X.value.forEach(s=>{t[s.value]=s}),t});function Te(){if(u["marker-label-group"]!==void 0)return u["marker-label-group"](ne.value);const t=u["marker-label"]||pt;return X.value.map(s=>t({marker:s,...ne.value}))}const Re=l(()=>[[mt,Ne,void 0,{[te.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Ne(t){t.isFinal===!0?(V.value!==void 0&&(r(t.evt),t.touch===!0&&a(!0),V.value=void 0,f("pan","end")),p.value=!1,g.value=!1):t.isFirst===!0?(V.value=$(t.evt),r(t.evt),a(),p.value=!0,f("pan","start")):(r(t.evt),a())}function ue(){g.value=!1}function Ae(t){r(t,$(t)),a(),F.value=!0,p.value=!0,document.addEventListener("mouseup",G,!0)}function G(){F.value=!1,p.value=!1,a(!0),ue(),document.removeEventListener("mouseup",G,!0)}function ze(t){r(t,$(t)),a(!0)}function Oe(t){fe.includes(t.keyCode)&&a(!0)}function Ie(t){if(e.vertical===!0)return null;const s=d.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*s-1} * ${e.thumbSize} / 2 + ${50-100*s}%))`}}function Qe(t){const s=l(()=>F.value===!1&&(g.value===t.focusValue||g.value==="both")?" q-slider--focus":""),n=l(()=>`q-slider__thumb q-slider__thumb${h.value} q-slider__thumb${h.value}-${y.value===!0?"rtl":"ltr"} absolute non-selectable`+s.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),i=l(()=>({width:e.thumbSize,height:e.thumbSize,[z.value]:`${100*t.ratio.value}%`,zIndex:g.value===t.focusValue?2:void 0})),v=l(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),_=l(()=>Ie(t.ratio.value)),J=l(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const W=[m("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[m("path",{d:e.thumbPath})]),m("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(W.push(m("div",{class:xe.value+" absolute fit no-pointer-events"+v.value},[m("div",{class:_e.value,style:{minWidth:e.thumbSize}},[m("div",{class:Se.value,style:_.value},[m("span",{class:J.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&P(W,"push")),m("div",{class:n.value,style:i.value,...t.getNodeData()},W)}}function je(t,s,n,i){const v=[];e.innerTrackColor!=="transparent"&&v.push(m("div",{key:"inner",class:Me.value,style:le.value})),e.selectionColor!=="transparent"&&v.push(m("div",{key:"selection",class:ke.value,style:t.value})),e.markers!==!1&&v.push(m("div",{key:"marker",class:ye.value,style:Be.value})),i(v);const _=[We("div",{key:"trackC",class:Ce.value,tabindex:s.value,...n.value},[m("div",{class:we.value,style:qe.value},v)],"slide",c.value,()=>Re.value)];if(e.markerLabels!==!1){const J=e.switchMarkerLabelsSide===!0?"unshift":"push";_[J](m("div",{key:"markerL",class:$e.value},Te()))}return _}return Ke(()=>{document.removeEventListener("mouseup",G,!0)}),{state:{active:p,focus:g,preventFocus:F,dragging:V,editable:c,classes:ge,tabindex:be,attributes:pe,step:w,decimals:k,trackLen:N,innerMin:C,innerMinRatio:A,innerMax:x,innerMaxRatio:U,positionProp:z,sizeProp:ee,isReversed:y},methods:{onActivate:Ae,onMobileClick:ze,onBlur:ue,onKeyup:Oe,getContent:je,getThumbRenderFn:Qe,convertRatioToModel:Fe,convertModelToRatio:K,getDraggingRatio:Ve}}}const Ct=()=>({});var xt=He({name:"QSlider",props:{...gt,modelValue:{required:!0,default:null,validator:a=>typeof a=="number"||a===null},labelValue:[String,Number]},emits:kt,setup(a,{emit:r}){const{proxy:{$q:$}}=me(),{state:o,methods:e}=yt({updateValue:h,updatePosition:y,getDragging:E,formAttrs:Ze(a)}),f=M(null),u=M(0),d=M(0);function R(){d.value=a.modelValue===null?o.innerMin.value:T(a.modelValue,o.innerMin.value,o.innerMax.value)}et(()=>`${a.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,R),R();const P=l(()=>e.convertModelToRatio(d.value)),p=l(()=>o.active.value===!0?u.value:P.value),F=l(()=>{const c={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(p.value-o.innerMinRatio.value)}%`};return a.selectionImg!==void 0&&(c.backgroundImage=`url(${a.selectionImg}) !important`),c}),g=e.getThumbRenderFn({focusValue:!0,getNodeData:Ct,ratio:p,label:l(()=>a.labelValue!==void 0?a.labelValue:d.value),thumbColor:l(()=>a.thumbColor||a.color),labelColor:l(()=>a.labelColor),labelTextColor:l(()=>a.labelTextColor)}),V=l(()=>o.editable.value!==!0?{}:$.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:C,onBlur:e.onBlur,onKeydown:x,onKeyup:e.onKeyup});function h(c){d.value!==a.modelValue&&r("update:modelValue",d.value),c===!0&&r("change",d.value)}function E(){return f.value.getBoundingClientRect()}function y(c,k=o.dragging.value){const w=e.getDraggingRatio(c,k);d.value=e.convertRatioToModel(w),u.value=a.snap!==!0||a.step===0?w:e.convertModelToRatio(d.value)}function C(){o.focus.value=!0}function x(c){if(!fe.includes(c.keyCode))return;tt(c);const k=([34,33].includes(c.keyCode)?10:1)*o.step.value,w=([34,37,40].includes(c.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(a.vertical===!0?-1:1)*k;d.value=T(parseFloat((d.value+w).toFixed(o.decimals.value)),o.innerMin.value,o.innerMax.value),h()}return()=>{const c=e.getContent(F,o.tabindex,V,k=>{k.push(g())});return m("div",{ref:f,class:o.classes.value+(a.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":a.modelValue},c)}}});const _t={name:"MerchantFilter",props:["cuisine_data"],data(){return{filter:!1,filter_maximize:!0,price_range_data:[],loading:!1,max_delivery_data:[],sortby:"",sort_by:[],price_range:"",max_delivery_fee:"",rating:"",cuisine:[],cuisine_selected:[]}},setup(){const a=bt(),r=lt();return{DeliveryschedStore:a,DataStore:r}},mounted(){Object.keys(this.DataStore.price_range_data).length<=0&&this.DataStore.searchAttributes(),Object.keys(this.cuisine_data).length>=0&&this.setCuisine()},watch:{cuisine:{handler(a,r){this.cuisine_selected=[],Object.keys(this.cuisine).length>0&&Object.entries(this.cuisine).forEach(([$,o])=>{o.onOff&&this.cuisine_selected.push(o.value)})},deep:!0},cuisine_data(a,r){this.setCuisine()}},computed:{hasFilter(){return Object.keys(this.cuisine_selected).length>0||!I.empty(this.sortby)||!I.empty(this.price_range)||!I.empty(this.max_delivery_fee)||!I.empty(this.rating)},hasSortData(){return Object.keys(this.DataStore.sort_by).length>0},hasPriceData(){return Object.keys(this.DataStore.price_range_data).length>0},hasCuisineData(){return Object.keys(this.cuisine).length>0}},methods:{resetFilter(){this.sortby="",this.price_range="",this.max_delivery_fee="",this.cuisine_selected=[],this.rating="",this.cuisine=[],this.setCuisine()},setCuisine(){Object.keys(this.cuisine_data).length>0&&Object.entries(this.cuisine_data).forEach(([a,r])=>{this.cuisine.push({label:this.$t(r.cuisine_name),value:r.cuisine_id,color:this.$q.dark.mode?"grey600":"mygrey",text_color:this.$q.dark.mode?"grey300":"dark",onOff:!1})})},applyFilter(){const a={sortby:this.sortby,price_range:this.price_range,max_delivery_fee:this.max_delivery_fee,cuisine:this.cuisine_selected,transaction_type:this.DeliveryschedStore.transaction_type,rating:this.rating};this.DeliveryschedStore.filters=a,this.$emit("applyFilter",a),this.filter=!1},setActive(a,r){a.onOff?(this.cuisine[r].color="mygrey",this.cuisine[r].text_color="dark",this.cuisine[r].onOff=!1):(this.cuisine[r].color="primary",this.cuisine[r].text_color="white",this.cuisine[r].onOff=!0)}}},St={class:"row justify-between"},$t={class:"font13 text-weight-bold text-h5"},wt={class:"font13 text-weight-bold text-h5"},qt={class:"font13 text-weight-bold text-h5"},Mt={class:"font13 text-weight-bold text-h5"},Ft={class:"font13 text-weight-bold text-h5"};function Vt(a,r,$,o,e,f){return q(),B(dt,{modelValue:e.filter,"onUpdate:modelValue":r[5]||(r[5]=u=>e.filter=u),position:"bottom"},{default:S(()=>[b(ct,null,{default:S(()=>[b(de,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:S(()=>[b(Pe,{class:rt(["text-weight-bold",{"text-white":a.$q.dark.mode,"text-dark":!a.$q.dark.mode}])},{default:S(()=>[st(D(a.$t("Filter Your Search")),1)]),_:1},8,["class"]),b(ce),b(Q,{onClick:r[0]||(r[0]=u=>e.filter=!1),square:"",unelevated:"",color:a.$q.dark.mode?"grey600":"white","text-color":a.$q.dark.mode?"grey300":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"},null,8,["color","text-color"])]),_:1}),b(ot,{class:"q-pt-none q-pl-md"},{default:S(()=>[L("div",St,[L("div",$t,D(a.$t("Filter")),1),f.hasFilter?(q(),B(Q,{key:0,onClick:f.resetFilter,flat:"",dense:"",color:"primary",label:a.$t("Reset"),"no-caps":""},null,8,["onClick","label"])):j("",!0)]),f.hasSortData?(q(),B(H,{key:0,modelValue:e.sortby,"onUpdate:modelValue":r[1]||(r[1]=u=>e.sortby=u),"toggle-color":"secondary",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",options:o.DataStore.sort_by,class:"rounded-group2 text-weight-bold line-1"},null,8,["modelValue","color","text-color","options"])):j("",!0),L("div",wt,D(a.$t("Price Range")),1),f.hasPriceData?(q(),B(H,{key:1,modelValue:e.price_range,"onUpdate:modelValue":r[2]||(r[2]=u=>e.price_range=u),"toggle-color":"secondary",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",options:o.DataStore.price_range_data,class:"rounded-group2 text-weight-bold line-1"},null,8,["modelValue","color","text-color","options"])):j("",!0),L("div",qt,D(a.$t("Max Delivery Fee")),1),b(xt,{modelValue:e.max_delivery_fee,"onUpdate:modelValue":r[3]||(r[3]=u=>e.max_delivery_fee=u),min:1,max:20},null,8,["modelValue"]),L("div",Mt,D(a.$t("Ratings")),1),b(H,{modelValue:e.rating,"onUpdate:modelValue":r[4]||(r[4]=u=>e.rating=u),"toggle-color":"secondary",color:a.$q.dark.mode?"grey600":"mygrey","text-color":a.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1",options:[{label:"1",value:1,"icon-right":"star"},{label:"2",value:2,"icon-right":"star"},{label:"3",value:3,"icon-right":"star"},{label:"4",value:4,"icon-right":"star"},{label:"5",value:5,"icon-right":"star"}]},null,8,["modelValue","color","text-color"]),L("div",Ft,D(a.$t("Cuisine")),1),f.hasCuisineData?(q(),B(vt,{key:2,"no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1"},{default:S(()=>[(q(!0),nt(ut,null,it(e.cuisine,(u,d)=>(q(),B(Q,{"no-caps":"",key:d,color:u.color,"text-color":u.text_color,label:a.$t(u.label),onClick:R=>f.setActive(u,d)},null,8,["color","text-color","label","onClick"]))),128))]),_:1})):j("",!0),b(ce,{class:"q-pa-xl"})]),_:1}),b(ft,{bordered:"",class:"bg-white q-pa-sm no-border"},{default:S(()=>[b(de,null,{default:S(()=>[b(Q,{onClick:f.applyFilter,color:"primary",unelevated:"","text-color":"white",label:a.$t("Apply"),"no-caps":"",class:"full-width",size:"lg"},null,8,["onClick","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Pt=at(_t,[["render",Vt]]);export{Pt as default};
