import{Q as J}from"./QToolbarTitle.00ffb145.js";import{Q as G}from"./QSpace.665629e1.js";import{x as z,c as d,h as u,z as K,r as W,bT as X,w as b,bU as E,f as Y,o as L,J as M,g as U,a3 as Z,a5 as ee,bQ as te,aL as ae,U as w,H as ne,_ as le,q,t as p,u as g,k as _,aa as oe,V as re,ae as ie,Q as se,R as ue,S as ce,F as de,ac as ve,ad as me,a9 as fe}from"./index.628e6afe.js";import{Q as ge}from"./QToolbar.380b4d8f.js";import{u as _e,a as he,b as xe,c as ye}from"./use-panel.cb68c669.js";import"./touch.70a9dd44.js";import"./selection.e42c4336.js";import"./use-cache.b0833c75.js";var be=z({name:"QCarouselSlide",props:{..._e,imgSrc:String},setup(e,{slots:t}){const l=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>u("div",{class:"q-carousel__slide",style:l.value},K(t.default))}});let y=0;const Ce={fullscreen:Boolean,noRouteFullscreenExit:Boolean},qe=["update:fullscreen","fullscreen"];function we(){const e=U(),{props:t,emit:l,proxy:s}=e;let a,c,o;const r=W(!1);X(e)===!0&&b(()=>s.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&v()}),b(()=>t.fullscreen,m=>{r.value!==m&&h()}),b(r,m=>{l("update:fullscreen",m),l("fullscreen",m)});function h(){r.value===!0?v():f()}function f(){r.value!==!0&&(r.value=!0,o=s.$el.parentNode,o.replaceChild(c,s.$el),document.body.appendChild(s.$el),y++,y===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:v},E.add(a))}function v(){r.value===!0&&(a!==void 0&&(E.remove(a),a=void 0),o.replaceChild(s.$el,c),r.value=!1,y=Math.max(0,y-1),y===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return Y(()=>{c=document.createElement("span")}),L(()=>{t.fullscreen===!0&&f()}),M(v),Object.assign(s,{toggleFullscreen:h,setFullscreen:f,exitFullscreen:v}),{inFullscreen:r,toggleFullscreen:h}}const Se=["top","right","bottom","left"],ke=["regular","flat","outline","push","unelevated"];var Pe=z({name:"QCarousel",props:{...Z,...he,...Ce,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ke.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Se.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...qe,...xe],setup(e,{slots:t}){const{proxy:{$q:l}}=U(),s=ee(e,l);let a,c;const{updatePanelsList:o,getPanelContent:r,panelDirectives:h,goToPanel:f,previousPanel:v,nextPanel:m,getEnabledPanels:O,panelIndex:C}=ye(),{inFullscreen:$}=we(),R=d(()=>$.value!==!0&&e.height!==void 0?{height:e.height}:{}),S=d(()=>e.vertical===!0?"vertical":"horizontal"),A=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+($.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${B.value}`:"")),Q=d(()=>{const n=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?n.reverse():n}),V=d(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),H=d(()=>e.navigationActiveIcon||V.value),B=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));b(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(a),P())}),b(()=>e.autoplay,n=>{n?P():clearInterval(a)});function P(){const n=te(e.autoplay)===!0?e.autoplay:5e3;a=setTimeout(n>=0?m:v,Math.abs(n))}L(()=>{e.autoplay&&P()}),M(()=>{clearInterval(a)});function T(n,x){return u("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${n} q-carousel__navigation--${B.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[u("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},O().map(x))])}function j(){const n=[];if(e.navigation===!0){const x=t["navigation-icon"]!==void 0?t["navigation-icon"]:i=>u(w,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),I=c-1;n.push(T("buttons",(i,F)=>{const N=i.props.name,D=C.value===F;return x({index:F,maxIndex:I,name:N,active:D,btnProps:{icon:D===!0?H.value:V.value,size:"sm",...k.value},onClick:()=>{f(N)}})}))}else if(e.thumbnails===!0){const x=e.controlColor!==void 0?` text-${e.controlColor}`:"";n.push(T("thumbnails",I=>{const i=I.props;return u("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+x,src:i.imgSrc||i["img-src"],onClick:()=>{f(i.name)}})}))}return e.arrows===!0&&C.value>=0&&((e.infinite===!0||C.value>0)&&n.push(u("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[u(w,{icon:Q.value[0],...k.value,onClick:v})])),(e.infinite===!0||C.value<c-1)&&n.push(u("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[u(w,{icon:Q.value[1],...k.value,onClick:m})]))),ne(t.control,n)}return()=>(c=o(t),u("div",{class:A.value,style:R.value},[ae("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>h.value)].concat(j())))}});const Ie={name:"ImagePreview",props:["gallery","title"],data(){return{modal:!1,slide:0}},setup(){return{}},computed:{hasData(){return Object.keys(this.gallery).length>0}}},pe={class:"fit"};function $e(e,t,l,s,a,c){return q(),p(fe,{modelValue:a.modal,"onUpdate:modelValue":t[2]||(t[2]=o=>a.modal=o),persistent:"",maximized:!0,class:"z-max","transition-show":"fade","transition-hide":"fade"},{default:g(()=>[_(me,{class:"bg-dark"},{default:g(()=>[_(ge,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:g(()=>[_(J,{class:"text-white text-weight-bold"},{default:g(()=>[oe(re(l.title),1)]),_:1}),_(G),_(w,{onClick:t[0]||(t[0]=o=>a.modal=!1),color:"dark",unelevated:"","text-color":"white",icon:"las la-times",dense:"","no-caps":"",size:"sm",rounded:""})]),_:1}),c.hasData?(q(),p(ie,{key:0,class:"flex flex-center text-white",style:{"min-height":"90%"}},{default:g(()=>[se("div",pe,[_(Pe,{animated:"",modelValue:a.slide,"onUpdate:modelValue":t[1]||(t[1]=o=>a.slide=o),arrows:"",navigation:"",infinite:"",swipeable:""},{default:g(()=>[(q(!0),ue(de,null,ce(l.gallery,(o,r)=>(q(),p(be,{key:o,name:r,"img-src":o},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])])]),_:1})):ve("",!0)]),_:1})]),_:1},8,["modelValue"])}var ze=le(Ie,[["render",$e]]);export{ze as default};
