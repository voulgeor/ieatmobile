import{W as c}from"./index.628e6afe.js";class g extends c{constructor(){super()}loadScript(){if(typeof document=="undefined")return;const e="gapi";if(document==null?void 0:document.getElementById(e))return;const n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.defer=!0,t.async=!0,t.id=e,t.onload=this.platformJsLoaded.bind(this),t.src="https://apis.google.com/js/platform.js",n.appendChild(t)}initialize(e={clientId:"",scopes:[],grantOfflineAccess:!1}){var s,n;if(typeof window=="undefined")return;const t=(s=document.getElementsByName("google-signin-client_id")[0])===null||s===void 0?void 0:s.content,i=e.clientId||t||"";i||console.warn("GoogleAuthPlugin - clientId is empty"),this.options={clientId:i,grantOfflineAccess:(n=e.grantOfflineAccess)!==null&&n!==void 0?n:!1,scopes:e.scopes||[]},this.gapiLoaded=new Promise(o=>{window.gapiResolve=o,this.loadScript()}),this.addUserChangeListener()}platformJsLoaded(){gapi.load("auth2",()=>{const e={client_id:this.options.clientId,plugin_name:"CodetrixStudioCapacitorGoogleAuth"};this.options.scopes.length&&(e.scope=this.options.scopes.join(" ")),gapi.auth2.init(e),window.gapiResolve()})}async signIn(){return new Promise(async(e,s)=>{var n;try{let t;const i=(n=this.options.grantOfflineAccess)!==null&&n!==void 0?n:!1;i?t=(await gapi.auth2.getAuthInstance().grantOfflineAccess()).code:await gapi.auth2.getAuthInstance().signIn();const o=gapi.auth2.getAuthInstance().currentUser.get();i&&await o.reloadAuthResponse();const a=this.getUserFrom(o);a.serverAuthCode=t,e(a)}catch(t){s(t)}})}async refresh(){const e=await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();return{accessToken:e.access_token,idToken:e.id_token,refreshToken:""}}async signOut(){return gapi.auth2.getAuthInstance().signOut()}async addUserChangeListener(){await this.gapiLoaded,gapi.auth2.getAuthInstance().currentUser.listen(e=>{this.notifyListeners("userChange",e.isSignedIn()?this.getUserFrom(e):null)})}getUserFrom(e){const s={},n=e.getBasicProfile();s.email=n.getEmail(),s.familyName=n.getFamilyName(),s.givenName=n.getGivenName(),s.id=n.getId(),s.imageUrl=n.getImageUrl(),s.name=n.getName();const t=e.getAuthResponse(!0);return s.authentication={accessToken:t.access_token,idToken:t.id_token,refreshToken:""},s}}export{g as GoogleAuthWeb};
