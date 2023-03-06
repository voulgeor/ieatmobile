import{W as p,bW as d}from"./index.f4219e68.js";import{C as s,a as l}from"./EditProfile.7802fc82.js";import"./QToolbarTitle.5cae28fa.js";import"./QToolbar.9e0c5c2c.js";import"./QHeader.93fda4a5.js";import"./QResizeObserver.8f0e5734.js";import"./QImg.9e5fc9bf.js";import"./QUploader.8aa90f4d.js";import"./QCircularProgress.9f9db7d0.js";import"./format.2a3572e1.js";import"./QItemLabel.5e2891ed.js";import"./QSelect.ecc94997.js";import"./QChip.1607d7b2.js";import"./selection.babb8692.js";import"./rtl.4b414a6d.js";import"./QSpace.ac683136.js";import"./QForm.bd9e2742.js";import"./QPage.11bfb4d0.js";class u extends p{async getPhoto(e){return new Promise(async(t,a)=>{if(e.webUseInput||e.source===s.Photos)this.fileInputExperience(e,t);else if(e.source===s.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=e.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",async n=>{n.detail===0?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)})}else this.cameraExperience(e,t,a)})}async pickImages(e){return new Promise(async t=>{this.multipleFileInputExperience(t)})}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=e.direction===l.Front?"user":"environment",document.body.appendChild(i);try{await i.componentOnReady(),i.addEventListener("onPhoto",async n=>{const r=n.detail;r===null?a(new d("User cancelled photos app")):r instanceof Error?a(r):t(await this._getCameraPhoto(r,e)),i.dismiss(),document.body.removeChild(i)}),i.present()}catch{this.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const i=()=>{var n;(n=a.parentNode)===null||n===void 0||n.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",n=>{const r=a.files[0];let o="jpeg";if(r.type==="image/png"?o="png":r.type==="image/gif"&&(o="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const c=new FileReader;c.addEventListener("load",()=>{if(e.resultType==="dataUrl")t({dataUrl:c.result,format:o});else if(e.resultType==="base64"){const m=c.result.split(",")[1];t({base64String:m,format:o})}i()}),c.readAsDataURL(r)}else t({webPath:URL.createObjectURL(r),format:o}),i()})),a.accept="image/*",a.capture=!0,e.source===s.Photos||e.source===s.Prompt?a.removeAttribute("capture"):e.direction===l.Front?a.capture="user":e.direction===l.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e){let t=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var i;(i=t.parentNode)===null||i===void 0||i.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",i=>{const n=[];for(let r=0;r<t.files.length;r++){const o=t.files[r];let c="jpeg";o.type==="image/png"?c="png":o.type==="image/gif"&&(c="gif"),n.push({webPath:URL.createObjectURL(o),format:c})}e({photos:n}),a()})),t.accept="image/*",t.click()}_getCameraPhoto(e,t){return new Promise((a,i)=>{const n=new FileReader,r=e.type.split("/")[1];t.resultType==="uri"?a({webPath:URL.createObjectURL(e),format:r,saved:!1}):(n.readAsDataURL(e),n.onloadend=()=>{const o=n.result;t.resultType==="dataUrl"?a({dataUrl:o,format:r,saved:!1}):a({base64String:o.split(",")[1],format:r,saved:!1})},n.onerror=o=>{i(o)})})}async checkPermissions(){if(typeof navigator=="undefined"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const k=new u;export{k as Camera,u as CameraWeb};