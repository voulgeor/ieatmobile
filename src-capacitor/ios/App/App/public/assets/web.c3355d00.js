import{W as i}from"./index.628e6afe.js";class a extends i{constructor(){super({name:"FacebookLogin",platforms:["web"]})}initialize(e){const n={version:"v10.0"};return new Promise((o,t)=>{try{return this.loadScript(e.locale).then(()=>{FB.init(Object.assign(Object.assign({},n),e)),o()})}catch(s){t(s)}})}loadScript(e){if(typeof document=="undefined")return Promise.resolve();const n="fb";if(document==null?void 0:document.getElementById(n))return Promise.resolve();const t=document.getElementsByTagName("head")[0],s=document.createElement("script");return new Promise(r=>{s.defer=!0,s.async=!0,s.id=n,s.onload=()=>{r()},s.src=`https://connect.facebook.net/${e!=null?e:"en_US"}/sdk.js`,t.appendChild(s)})}async login(e){return console.log("FacebookLoginWeb.login",e),new Promise((n,o)=>{FB.login(t=>{console.debug("FB.login",t),t.status==="connected"?n({accessToken:{token:t.authResponse.accessToken}}):o({accessToken:{token:null}})},{scope:e.permissions.join(",")})})}async logout(){return new Promise(e=>{FB.logout(()=>e())})}async reauthorize(){return new Promise(e=>{FB.reauthorize(n=>e(n))})}async getCurrentAccessToken(){return new Promise((e,n)=>{FB.getLoginStatus(o=>{if(o.status==="connected"){const t={accessToken:{applicationId:void 0,declinedPermissions:[],expires:void 0,isExpired:void 0,lastRefresh:void 0,permissions:[],token:o.authResponse.accessToken,userId:o.authResponse.userID}};e(t)}else n({accessToken:{token:null}})})})}async getProfile(e){const n=e.fields.join(",");return new Promise((o,t)=>{FB.api("/me",{fields:n},s=>{if(s.error){t(s.error.message);return}o(s)})})}}export{a as FacebookLoginWeb};
