import{r as S,c as y,g as le,aH as ue,h as p,aK as oe,a3 as de,a5 as ce,aV as pe,y as ve,bF as fe,w as _e,J as me,j as ge,bG as he,bH as be,Y as V,a2 as Fe,U as ee,x as ye,bI as qe}from"./index.bc7ef6d7.js";import{Q as Se}from"./QCircularProgress.a206f3b9.js";import{h as ae}from"./format.a74bec27.js";function M(r,v,a,_){const n=[];return r.forEach(m=>{_(m)===!0?n.push(m):v.push({failedPropValidation:a,file:m})}),n}function H(r){r&&r.dataTransfer&&(r.dataTransfer.dropEffect="copy"),oe(r)}const ze={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ue=["rejected"];function xe({editable:r,dnd:v,getFileInput:a,addFilesToQueue:_}){const{props:n,emit:m,proxy:w}=le(),D=S(null),N=y(()=>n.accept!==void 0?n.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),U=y(()=>parseInt(n.maxFiles,10)),P=y(()=>parseInt(n.maxTotalSize,10));function O(l){if(r.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ue(l);else{const q=a();q&&q!==l.target&&q.click(l)}}function C(l){r.value&&l&&_(null,l)}function t(l,q,E,j){let o=Array.from(q||l.target.files);const h=[],z=()=>{h.length>0&&m("rejected",h)};if(n.accept!==void 0&&N.value.indexOf("*/")===-1&&(o=M(o,h,"accept",d=>N.value.some(f=>d.type.toUpperCase().startsWith(f)||d.name.toUpperCase().endsWith(f))),o.length===0))return z();if(n.maxFileSize!==void 0){const d=parseInt(n.maxFileSize,10);if(o=M(o,h,"max-file-size",f=>f.size<=d),o.length===0)return z()}if(n.multiple!==!0&&o.length>0&&(o=[o[0]]),o.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),j===!0){const d=E.map(f=>f.__key);o=M(o,h,"duplicate",f=>d.includes(f.__key)===!1)}if(o.length===0)return z();if(n.maxTotalSize!==void 0){let d=j===!0?E.reduce((f,L)=>f+L.size,0):0;if(o=M(o,h,"max-total-size",f=>(d+=f.size,d<=P.value)),o.length===0)return z()}if(typeof n.filter=="function"){const d=n.filter(o);o=M(o,h,"filter",f=>d.includes(f))}if(n.maxFiles!==void 0){let d=j===!0?E.length:0;if(o=M(o,h,"max-files",()=>(d++,d<=U.value)),o.length===0)return z()}if(z(),o.length>0)return o}function u(l){H(l),v.value!==!0&&(v.value=!0)}function g(l){oe(l),l.relatedTarget!==D.value&&(v.value=!1)}function x(l){H(l);const q=l.dataTransfer.files;q.length>0&&_(null,q),v.value=!1}function c(l){if(v.value===!0)return p("div",{ref:D,class:`q-${l}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:g,onDrop:x})}return Object.assign(w,{pickFiles:O,addFiles:C}),{pickFiles:O,addFiles:C,onDragover:u,processFiles:t,getDndNode:c,maxFilesNumber:U,maxTotalSizeNumber:P}}function te(r){return(r*100).toFixed(2)+"%"}const we={...de,...ze,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},re=[...Ue,"start","finish","added","removed"];function ke(r){const v=le(),{props:a,slots:_,emit:n,proxy:m}=v,{$q:w}=m,D=ce(a,w);function N(e,s,b){if(e.__status=s,s==="idle"){e.__uploaded=0,e.__progress=0,e.__sizeLabel=ae(e.size),e.__progressLabel="0.00%";return}if(s==="failed"){m.$forceUpdate();return}e.__uploaded=s==="uploaded"?e.size:b,e.__progress=s==="uploaded"?1:Math.min(.9999,e.__uploaded/e.size),e.__progressLabel=te(e.__progress),m.$forceUpdate()}const U=y(()=>a.disable!==!0&&a.readonly!==!0),P=S(!1),O=S(null),C=S(null),t={files:S([]),queuedFiles:S([]),uploadedFiles:S([]),uploadedSize:S(0),updateFileStatus:N,isAlive:()=>pe(v)===!1},{pickFiles:u,addFiles:g,onDragover:x,onDragleave:c,processFiles:l,getDndNode:q,maxFilesNumber:E,maxTotalSizeNumber:j}=xe({editable:U,dnd:P,getFileInput:X,addFilesToQueue:Y});Object.assign(t,r({props:a,slots:_,emit:n,helpers:t})),t.isBusy===void 0&&(t.isBusy=S(!1));const o=S(0),h=y(()=>o.value===0?0:t.uploadedSize.value/o.value),z=y(()=>te(h.value)),d=y(()=>ae(o.value)),f=y(()=>U.value===!0&&t.isUploading.value!==!0&&(a.multiple===!0||t.queuedFiles.value.length===0)&&(a.maxFiles===void 0||t.files.value.length<E.value)&&(a.maxTotalSize===void 0||o.value<j.value)),L=y(()=>U.value===!0&&t.isBusy.value!==!0&&t.isUploading.value!==!0&&t.queuedFiles.value.length>0);ve(fe,J);const i=y(()=>"q-uploader column no-wrap"+(D.value===!0?" q-uploader--dark q-dark":"")+(a.bordered===!0?" q-uploader--bordered":"")+(a.square===!0?" q-uploader--square no-border-radius":"")+(a.flat===!0?" q-uploader--flat no-shadow":"")+(a.disable===!0?" disabled q-uploader--disable":"")+(P.value===!0?" q-uploader--dnd":"")),I=y(()=>"q-uploader__header"+(a.color!==void 0?` bg-${a.color}`:"")+(a.textColor!==void 0?` text-${a.textColor}`:""));_e(t.isUploading,(e,s)=>{s===!1&&e===!0?n("start"):s===!0&&e===!1&&n("finish")});function A(){a.disable===!1&&(t.abort(),t.uploadedSize.value=0,o.value=0,K(),t.files.value=[],t.queuedFiles.value=[],t.uploadedFiles.value=[])}function Q(){a.disable===!1&&W(["uploaded"],()=>{t.uploadedFiles.value=[]})}function k(){W(["idle","failed"],({size:e})=>{o.value-=e,t.queuedFiles.value=[]})}function W(e,s){if(a.disable===!0)return;const b={files:[],size:0},B=t.files.value.filter(F=>e.indexOf(F.__status)===-1?!0:(b.size+=F.size,b.files.push(F),F.__img!==void 0&&window.URL.revokeObjectURL(F.__img.src),!1));b.files.length>0&&(t.files.value=B,s(b),n("removed",b.files))}function G(e){a.disable||(e.__status==="uploaded"?t.uploadedFiles.value=t.uploadedFiles.value.filter(s=>s.__key!==e.__key):e.__status==="uploading"?e.__abort():o.value-=e.size,t.files.value=t.files.value.filter(s=>s.__key!==e.__key?!0:(s.__img!==void 0&&window.URL.revokeObjectURL(s.__img.src),!1)),t.queuedFiles.value=t.queuedFiles.value.filter(s=>s.__key!==e.__key),n("removed",[e]))}function K(){t.files.value.forEach(e=>{e.__img!==void 0&&window.URL.revokeObjectURL(e.__img.src)})}function X(){return C.value||O.value.getElementsByClassName("q-uploader__input")[0]}function Y(e,s){const b=l(e,s,t.files.value,!0),B=X();B!=null&&(B.value=""),b!==void 0&&(b.forEach(F=>{if(t.updateFileStatus(F,"idle"),o.value+=F.size,a.noThumbnails!==!0&&F.type.toUpperCase().startsWith("IMAGE")){const Z=new Image;Z.src=window.URL.createObjectURL(F),F.__img=Z}}),t.files.value=t.files.value.concat(b),t.queuedFiles.value=t.queuedFiles.value.concat(b),n("added",b),a.autoUpload===!0&&t.upload())}function ne(){L.value===!0&&t.upload()}function $(e,s,b){if(e===!0){const B={type:"a",key:s,icon:w.iconSet.uploader[s],flat:!0,dense:!0};let F;return s==="add"?(B.onClick=u,F=J):B.onClick=b,p(ee,B,F)}}function J(){return p("input",{ref:C,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:a.accept,multiple:a.multiple===!0?"multiple":void 0,capture:a.capture,onMousedown:ue,onClick:u,onChange:Y})}function ie(){return _.header!==void 0?_.header(T):[p("div",{class:"q-uploader__header-content column"},[p("div",{class:"flex flex-center no-wrap q-gutter-xs"},[$(t.queuedFiles.value.length>0,"removeQueue",k),$(t.uploadedFiles.value.length>0,"removeUploaded",Q),t.isUploading.value===!0?p(V,{class:"q-uploader__spinner"}):null,p("div",{class:"col column justify-center"},[a.label!==void 0?p("div",{class:"q-uploader__title"},[a.label]):null,p("div",{class:"q-uploader__subtitle"},[d.value+" / "+z.value])]),$(f.value,"add"),$(a.hideUploadBtn===!1&&L.value===!0,"upload",t.upload),$(t.isUploading.value,"clear",t.abort)])])]}function se(){return _.list!==void 0?_.list(T):t.files.value.map(e=>p("div",{key:e.__key,class:"q-uploader__file relative-position"+(a.noThumbnails!==!0&&e.__img!==void 0?" q-uploader__file--img":"")+(e.__status==="failed"?" q-uploader__file--failed":e.__status==="uploaded"?" q-uploader__file--uploaded":""),style:a.noThumbnails!==!0&&e.__img!==void 0?{backgroundImage:'url("'+e.__img.src+'")'}:null},[p("div",{class:"q-uploader__file-header row flex-center no-wrap"},[e.__status==="failed"?p(Fe,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,p("div",{class:"q-uploader__file-header-content col"},[p("div",{class:"q-uploader__title"},[e.name]),p("div",{class:"q-uploader__subtitle row items-center no-wrap"},[e.__sizeLabel+" / "+e.__progressLabel])]),e.__status==="uploading"?p(Se,{value:e.__progress,min:0,max:1,indeterminate:e.__progress===0}):p(ee,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[e.__status==="uploaded"?"done":"clear"],onClick:()=>{G(e)}})])]))}me(()=>{t.isUploading.value===!0&&t.abort(),t.files.value.length>0&&K()});const T={};for(const e in t)ge(t[e])===!0?he(T,e,()=>t[e].value):T[e]=t[e];return Object.assign(T,{upload:ne,reset:A,removeUploadedFiles:Q,removeQueuedFiles:k,removeFile:G,pickFiles:u,addFiles:g}),be(T,{canAddFiles:()=>f.value,canUpload:()=>L.value,uploadSizeLabel:()=>d.value,uploadProgressLabel:()=>z.value}),Object.assign(m,T),()=>{const e=[p("div",{class:I.value},ie()),p("div",{class:"q-uploader__list scroll"},se()),q("uploader")];t.isBusy.value===!0&&e.push(p("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[p(V)]));const s={ref:O,class:i.value};return f.value===!0&&Object.assign(s,{onDragover:x,onDragleave:c}),p("div",s,e)}}const Be=()=>!0;function Re(r){const v={};return r.forEach(a=>{v[a]=Be}),v}const Ce=Re(re);var Ee=({name:r,props:v,emits:a,injectPlugin:_})=>ye({name:r,props:{...we,...v},emits:qe(a)===!0?{...Ce,...a}:[...re,...a],setup(){return ke(_)}});function R(r){return typeof r=="function"?r:()=>r}const je={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>r=>r.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Le=["factory-failed","uploaded","failed","uploading"];function Pe({props:r,emit:v,helpers:a}){const _=S([]),n=S([]),m=S(0),w=y(()=>({url:R(r.url),method:R(r.method),headers:R(r.headers),formFields:R(r.formFields),fieldName:R(r.fieldName),withCredentials:R(r.withCredentials),sendRaw:R(r.sendRaw),batch:R(r.batch)})),D=y(()=>m.value>0),N=y(()=>n.value.length>0);let U;function P(){_.value.forEach(u=>{u.abort()}),n.value.length>0&&(U=!0)}function O(){const u=a.queuedFiles.value.slice(0);a.queuedFiles.value=[],w.value.batch(u)?C(u):u.forEach(g=>{C([g])})}function C(u){if(m.value++,typeof r.factory!="function"){t(u,{});return}const g=r.factory(u);if(!g)v("factory-failed",new Error("QUploader: factory() does not return properly"),u),m.value--;else if(typeof g.catch=="function"&&typeof g.then=="function"){n.value.push(g);const x=c=>{a.isAlive()===!0&&(n.value=n.value.filter(l=>l!==g),n.value.length===0&&(U=!1),a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(l=>{a.updateFileStatus(l,"failed")}),v("factory-failed",c,u),m.value--)};g.then(c=>{U===!0?x(new Error("Aborted")):a.isAlive()===!0&&(n.value=n.value.filter(l=>l!==g),t(u,c))}).catch(x)}else t(u,g||{})}function t(u,g){const x=new FormData,c=new XMLHttpRequest,l=(i,I)=>g[i]!==void 0?R(g[i])(I):w.value[i](I),q=l("url",u);if(!q){console.error("q-uploader: invalid or no URL specified"),m.value--;return}const E=l("formFields",u);E!==void 0&&E.forEach(i=>{x.append(i.name,i.value)});let j=0,o=0,h=0,z=0,d;c.upload.addEventListener("progress",i=>{if(d===!0)return;const I=Math.min(z,i.loaded);a.uploadedSize.value+=I-h,h=I;let A=h-o;for(let Q=j;A>0&&Q<u.length;Q++){const k=u[Q];if(A>k.size)A-=k.size,j++,o+=k.size,a.updateFileStatus(k,"uploading",k.size);else{a.updateFileStatus(k,"uploading",A);return}}},!1),c.onreadystatechange=()=>{c.readyState<4||(c.status&&c.status<400?(a.uploadedFiles.value=a.uploadedFiles.value.concat(u),u.forEach(i=>{a.updateFileStatus(i,"uploaded")}),v("uploaded",{files:u,xhr:c})):(d=!0,a.uploadedSize.value-=h,a.queuedFiles.value=a.queuedFiles.value.concat(u),u.forEach(i=>{a.updateFileStatus(i,"failed")}),v("failed",{files:u,xhr:c})),m.value--,_.value=_.value.filter(i=>i!==c))},c.open(l("method",u),q),l("withCredentials",u)===!0&&(c.withCredentials=!0);const f=l("headers",u);f!==void 0&&f.forEach(i=>{c.setRequestHeader(i.name,i.value)});const L=l("sendRaw",u);u.forEach(i=>{a.updateFileStatus(i,"uploading",0),L!==!0&&x.append(l("fieldName",i),i,i.name),i.xhr=c,i.__abort=()=>{c.abort()},z+=i.size}),v("uploading",{files:u,xhr:c}),_.value.push(c),L===!0?c.send(new Blob(u)):c.send(x)}return{isUploading:D,isBusy:N,abort:P,upload:O}}var Oe={name:"QUploader",props:je,emits:Le,injectPlugin:Pe},Ne=Ee(Oe);export{Ne as Q};
