import{r as S,c as q,g as le,aI as ue,aL as oe,aD as de,h as p,a4 as ce,a6 as pe,bm as ve,z as fe,bH as me,w as _e,K as ge,j as he,bI as Fe,bJ as be,Z as V,a3 as ye,V as ee,x as qe,bK as Se}from"./index.a3a9b403.js";import{Q as ze}from"./QCircularProgress.2ac8493e.js";import{h as ae}from"./format.2a3572e1.js";function M(r,v,a,_){const n=[];return r.forEach(g=>{_(g)===!0?n.push(g):v.push({failedPropValidation:a,file:g})}),n}function H(r){r&&r.dataTransfer&&(r.dataTransfer.dropEffect="copy"),oe(r)}const Ue={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},xe=["rejected"];function we({editable:r,dnd:v,getFileInput:a,addFilesToQueue:_}){const{props:n,emit:g,proxy:w}=le(),P=S(null),N=q(()=>n.accept!==void 0?n.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),U=q(()=>parseInt(n.maxFiles,10)),I=q(()=>parseInt(n.maxTotalSize,10));function O(l){if(r.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ue(l);else{const b=a();b&&b!==l.target&&b.click(l)}}function C(l){r.value&&l&&_(null,l)}function t(l,b,E,j){let o=Array.from(b||l.target.files);const h=[],z=()=>{h.length>0&&g("rejected",h)};if(n.accept!==void 0&&N.value.indexOf("*/")===-1&&(o=M(o,h,"accept",d=>N.value.some(f=>d.type.toUpperCase().startsWith(f)||d.name.toUpperCase().endsWith(f))),o.length===0))return z();if(n.maxFileSize!==void 0){const d=parseInt(n.maxFileSize,10);if(o=M(o,h,"max-file-size",f=>f.size<=d),o.length===0)return z()}if(n.multiple!==!0&&o.length>0&&(o=[o[0]]),o.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),j===!0){const d=E.map(f=>f.__key);o=M(o,h,"duplicate",f=>d.includes(f.__key)===!1)}if(o.length===0)return z();if(n.maxTotalSize!==void 0){let d=j===!0?E.reduce((f,L)=>f+L.size,0):0;if(o=M(o,h,"max-total-size",f=>(d+=f.size,d<=I.value)),o.length===0)return z()}if(typeof n.filter=="function"){const d=n.filter(o);o=M(o,h,"filter",f=>d.includes(f))}if(n.maxFiles!==void 0){let d=j===!0?E.length:0;if(o=M(o,h,"max-files",()=>(d++,d<=U.value)),o.length===0)return z()}if(z(),o.length>0)return o}function u(l){H(l),v.value!==!0&&(v.value=!0)}function m(l){oe(l),(l.relatedTarget!==null||de.is.safari!==!0?l.relatedTarget!==P.value:document.elementsFromPoint(l.clientX,l.clientY).includes(P.value)===!1)===!0&&(v.value=!1)}function x(l){H(l);const b=l.dataTransfer.files;b.length>0&&_(null,b),v.value=!1}function c(l){if(v.value===!0)return p("div",{ref:P,class:`q-${l}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:m,onDrop:x})}return Object.assign(w,{pickFiles:O,addFiles:C}),{pickFiles:O,addFiles:C,onDragover:u,onDragleave:m,processFiles:t,getDndNode:c,maxFilesNumber:U,maxTotalSizeNumber:I}}function te(r){return(r*100).toFixed(2)+"%"}const ke={...ce,...Ue,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},re=[...xe,"start","finish","added","removed"];function Be(r){const v=le(),{props:a,slots:_,emit:n,proxy:g}=v,{$q:w}=g,P=pe(a,w);function N(e,s,F){if(e.__status=s,s==="idle"){e.__uploaded=0,e.__progress=0,e.__sizeLabel=ae(e.size),e.__progressLabel="0.00%";return}if(s==="failed"){g.$forceUpdate();return}e.__uploaded=s==="uploaded"?e.size:F,e.__progress=s==="uploaded"?1:Math.min(.9999,e.__uploaded/e.size),e.__progressLabel=te(e.__progress),g.$forceUpdate()}const U=q(()=>a.disable!==!0&&a.readonly!==!0),I=S(!1),O=S(null),C=S(null),t={files:S([]),queuedFiles:S([]),uploadedFiles:S([]),uploadedSize:S(0),updateFileStatus:N,isAlive:()=>ve(v)===!1},{pickFiles:u,addFiles:m,onDragover:x,onDragleave:c,processFiles:l,getDndNode:b,maxFilesNumber:E,maxTotalSizeNumber:j}=we({editable:U,dnd:I,getFileInput:Y,addFilesToQueue:G});Object.assign(t,r({props:a,slots:_,emit:n,helpers:t})),t.isBusy===void 0&&(t.isBusy=S(!1));const o=S(0),h=q(()=>o.value===0?0:t.uploadedSize.value/o.value),z=q(()=>te(h.value)),d=q(()=>ae(o.value)),f=q(()=>U.value===!0&&t.isUploading.value!==!0&&(a.multiple===!0||t.queuedFiles.value.length===0)&&(a.maxFiles===void 0||t.files.value.length<E.value)&&(a.maxTotalSize===void 0||o.value<j.value)),L=q(()=>U.value===!0&&t.isBusy.value!==!0&&t.isUploading.value!==!0&&t.queuedFiles.value.length>0);fe(me,J);const i=q(()=>"q-uploader column no-wrap"+(P.value===!0?" q-uploader--dark q-dark":"")+(a.bordered===!0?" q-uploader--bordered":"")+(a.square===!0?" q-uploader--square no-border-radius":"")+(a.flat===!0?" q-uploader--flat no-shadow":"")+(a.disable===!0?" disabled q-uploader--disable":"")+(I.value===!0?" q-uploader--dnd":"")),T=q(()=>"q-uploader__header"+(a.color!==void 0?` bg-${a.color}`:"")+(a.textColor!==void 0?` text-${a.textColor}`:""));_e(t.isUploading,(e,s)=>{s===!1&&e===!0?n("start"):s===!0&&e===!1&&n("finish")});function A(){a.disable===!1&&(t.abort(),t.uploadedSize.value=0,o.value=0,X(),t.files.value=[],t.queuedFiles.value=[],t.uploadedFiles.value=[])}function Q(){a.disable===!1&&W(["uploaded"],()=>{t.uploadedFiles.value=[]})}function k(){W(["idle","failed"],({size:e})=>{o.value-=e,t.queuedFiles.value=[]})}function W(e,s){if(a.disable===!0)return;const F={files:[],size:0},B=t.files.value.filter(y=>e.indexOf(y.__status)===-1?!0:(F.size+=y.size,F.files.push(y),y.__img!==void 0&&window.URL.revokeObjectURL(y.__img.src),!1));F.files.length>0&&(t.files.value=B,s(F),n("removed",F.files))}function K(e){a.disable||(e.__status==="uploaded"?t.uploadedFiles.value=t.uploadedFiles.value.filter(s=>s.__key!==e.__key):e.__status==="uploading"?e.__abort():o.value-=e.size,t.files.value=t.files.value.filter(s=>s.__key!==e.__key?!0:(s.__img!==void 0&&window.URL.revokeObjectURL(s.__img.src),!1)),t.queuedFiles.value=t.queuedFiles.value.filter(s=>s.__key!==e.__key),n("removed",[e]))}function X(){t.files.value.forEach(e=>{e.__img!==void 0&&window.URL.revokeObjectURL(e.__img.src)})}function Y(){return C.value||O.value.getElementsByClassName("q-uploader__input")[0]}function G(e,s){const F=l(e,s,t.files.value,!0),B=Y();B!=null&&(B.value=""),F!==void 0&&(F.forEach(y=>{if(t.updateFileStatus(y,"idle"),o.value+=y.size,a.noThumbnails!==!0&&y.type.toUpperCase().startsWith("IMAGE")){const Z=new Image;Z.src=window.URL.createObjectURL(y),y.__img=Z}}),t.files.value=t.files.value.concat(F),t.queuedFiles.value=t.queuedFiles.value.concat(F),n("added",F),a.autoUpload===!0&&t.upload())}function ne(){L.value===!0&&t.upload()}function $(e,s,F){if(e===!0){const B={type:"a",key:s,icon:w.iconSet.uploader[s],flat:!0,dense:!0};let y;return s==="add"?(B.onClick=u,y=J):B.onClick=F,p(ee,B,y)}}function J(){return p("input",{ref:C,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:a.accept,multiple:a.multiple===!0?"multiple":void 0,capture:a.capture,onMousedown:ue,onClick:u,onChange:G})}function ie(){return _.header!==void 0?_.header(D):[p("div",{class:"q-uploader__header-content column"},[p("div",{class:"flex flex-center no-wrap q-gutter-xs"},[$(t.queuedFiles.value.length>0,"removeQueue",k),$(t.uploadedFiles.value.length>0,"removeUploaded",Q),t.isUploading.value===!0?p(V,{class:"q-uploader__spinner"}):null,p("div",{class:"col column justify-center"},[a.label!==void 0?p("div",{class:"q-uploader__title"},[a.label]):null,p("div",{class:"q-uploader__subtitle"},[d.value+" / "+z.value])]),$(f.value,"add"),$(a.hideUploadBtn===!1&&L.value===!0,"upload",t.upload),$(t.isUploading.value,"clear",t.abort)])])]}function se(){return _.list!==void 0?_.list(D):t.files.value.map(e=>p("div",{key:e.__key,class:"q-uploader__file relative-position"+(a.noThumbnails!==!0&&e.__img!==void 0?" q-uploader__file--img":"")+(e.__status==="failed"?" q-uploader__file--failed":e.__status==="uploaded"?" q-uploader__file--uploaded":""),style:a.noThumbnails!==!0&&e.__img!==void 0?{backgroundImage:'url("'+e.__img.src+'")'}:null},[p("div",{class:"q-uploader__file-header row flex-center no-wrap"},[e.__status==="failed"?p(ye,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,p("div",{class:"q-uploader__file-header-content col"},[p("div",{class:"q-uploader__title"},[e.name]),p("div",{class:"q-uploader__subtitle row items-center no-wrap"},[e.__sizeLabel+" / "+e.__progressLabel])]),e.__status==="uploading"?p(ze,{value:e.__progress,min:0,max:1,indeterminate:e.__progress===0}):p(ee,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[e.__status==="uploaded"?"done":"clear"],onClick:()=>{K(e)}})])]))}ge(()=>{t.isUploading.value===!0&&t.abort(),t.files.value.length>0&&X()});const D={};for(const e in t)he(t[e])===!0?Fe(D,e,()=>t[e].value):D[e]=t[e];return Object.assign(D,{upload:ne,reset:A,removeUploadedFiles:Q,removeQueuedFiles:k,removeFile:K,pickFiles:u,addFiles:m}),be(D,{canAddFiles:()=>f.value,canUpload:()=>L.value,uploadSizeLabel:()=>d.value,uploadProgressLabel:()=>z.value}),Object.assign(g,D),()=>{const e=[p("div",{class:T.value},ie()),p("div",{class:"q-uploader__list scroll"},se()),b("uploader")];t.isBusy.value===!0&&e.push(p("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[p(V)]));const s={ref:O,class:i.value};return f.value===!0&&Object.assign(s,{onDragover:x,onDragleave:c}),p("div",s,e)}}const Re=()=>!0;function Ce(r){const v={};return r.forEach(a=>{v[a]=Re}),v}const Ee=Ce(re);var je=({name:r,props:v,emits:a,injectPlugin:_})=>qe({name:r,props:{...ke,...v},emits:Se(a)===!0?{...Ee,...a}:[...re,...a],setup(){return Be(_)}});function R(r){return typeof r=="function"?r:()=>r}const Le={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>r=>r.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Pe=["factoryFailed","uploaded","failed","uploading"];function Ie({props:r,emit:v,helpers:a}){const _=S([]),n=S([]),g=S(0),w=q(()=>({url:R(r.url),method:R(r.method),headers:R(r.headers),formFields:R(r.formFields),fieldName:R(r.fieldName),withCredentials:R(r.withCredentials),sendRaw:R(r.sendRaw),batch:R(r.batch)})),P=q(()=>g.value>0),N=q(()=>n.value.length>0);let U;function I(){_.value.forEach(u=>{u.abort()}),n.value.length>0&&(U=!0)}function O(){const u=a.queuedFiles.value.slice(0);a.queuedFiles.value=[],w.value.batch(u)?C(u):u.forEach(m=>{C([m])})}function C(u){if(g.value++,typeof r.factory!="function"){t(u,{});return}const m=r.factory(u);if(!m)v("factoryFailed",new Error("QUploader: factory() does not return properly"),u),g.value--;else if(typeof m.catch=="function"&&typeof m.then=="function"){n.value.push(m);const x=c=>{a.isAlive()===!0&&(n.value=n.value.filter(l=>l!==m),n.value.length===0&&(U=!1),a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(l=>{a.updateFileStatus(l,"failed")}),v("factoryFailed",c,u),g.value--)};m.then(c=>{U===!0?x(new Error("Aborted")):a.isAlive()===!0&&(n.value=n.value.filter(l=>l!==m),t(u,c))}).catch(x)}else t(u,m||{})}function t(u,m){const x=new FormData,c=new XMLHttpRequest,l=(i,T)=>m[i]!==void 0?R(m[i])(T):w.value[i](T),b=l("url",u);if(!b){console.error("q-uploader: invalid or no URL specified"),g.value--;return}const E=l("formFields",u);E!==void 0&&E.forEach(i=>{x.append(i.name,i.value)});let j=0,o=0,h=0,z=0,d;c.upload.addEventListener("progress",i=>{if(d===!0)return;const T=Math.min(z,i.loaded);a.uploadedSize.value+=T-h,h=T;let A=h-o;for(let Q=j;A>0&&Q<u.length;Q++){const k=u[Q];if(A>k.size)A-=k.size,j++,o+=k.size,a.updateFileStatus(k,"uploading",k.size);else{a.updateFileStatus(k,"uploading",A);return}}},!1),c.onreadystatechange=()=>{c.readyState<4||(c.status&&c.status<400?(a.uploadedFiles.value=a.uploadedFiles.value.concat(u),u.forEach(i=>{a.updateFileStatus(i,"uploaded")}),v("uploaded",{files:u,xhr:c})):(d=!0,a.uploadedSize.value-=h,a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(i=>{a.updateFileStatus(i,"failed")}),v("failed",{files:u,xhr:c})),g.value--,_.value=_.value.filter(i=>i!==c))},c.open(l("method",u),b),l("withCredentials",u)===!0&&(c.withCredentials=!0);const f=l("headers",u);f!==void 0&&f.forEach(i=>{c.setRequestHeader(i.name,i.value)});const L=l("sendRaw",u);u.forEach(i=>{a.updateFileStatus(i,"uploading",0),L!==!0&&x.append(l("fieldName",i),i,i.name),i.xhr=c,i.__abort=()=>{c.abort()},z+=i.size}),v("uploading",{files:u,xhr:c}),_.value.push(c),L===!0?c.send(new Blob(u)):c.send(x)}return{isUploading:P,isBusy:N,abort:I,upload:O}}var Oe={name:"QUploader",props:Le,emits:Pe,injectPlugin:Ie},Ae=je(Oe);export{Ae as Q};
