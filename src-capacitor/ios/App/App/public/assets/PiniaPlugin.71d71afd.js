import{b as S,k as v}from"./index.ea6274c1.js";function z(e){return typeof e=="object"&&e!==null}function b(e,r){return e=z(e)?e:Object.create(null),new Proxy(e,{get(s,o,i){return Reflect.get(s,o,i)||Reflect.get(r,o,i)}})}function h(e){return e!==null&&typeof e=="object"}function g(e,r){const s=Array.isArray(e)&&Array.isArray(r),o=h(e)&&h(r);if(!s&&!o)throw new Error("Can only merge object with object or array with array");const i=s?[]:{};return[...Object.keys(e),...Object.keys(r)].forEach(n=>{Array.isArray(e[n])&&Array.isArray(r[n])?i[n]=[...Object.values(g(e[n],r[n]))]:r[n]!==null&&typeof r[n]=="object"&&typeof e[n]=="object"?i[n]=g(e[n],r[n]):e[n]!==void 0&&r[n]===void 0?i[n]=e[n]:e[n]===void 0&&r[n]!==void 0&&(i[n]=r[n])}),i}function j(e,r){return r.reduce((s,o)=>o==="[]"&&Array.isArray(s)?s:s==null?void 0:s[o],e)}function p(e,r,s){const o=r.slice(0,-1).reduce((i,t)=>/^(__proto__)$/.test(t)?{}:i[t]=i[t]||{},e);if(Array.isArray(o[r[r.length-1]])&&Array.isArray(s)){const i=o[r[r.length-1]].map((t,n)=>Array.isArray(t)&&typeof t!="object"?[...t,...s[n]]:typeof t=="object"&&t!==null&&Object.keys(t).some(a=>Array.isArray(t[a]))?g(t,s[n]):{...t,...s[n]});o[r[r.length-1]]=i}else r[r.length-1]===void 0&&Array.isArray(o)&&Array.isArray(s)?o.push(...s):o[r[r.length-1]]=s;return e}function m(e,r){return r.reduce((s,o)=>{const i=o.split(".");if(!i.includes("[]"))return p(s,i,j(e,i));const t=i.indexOf("[]"),n=i.slice(0,t),a=i.slice(0,t+1),l=i.slice(t+1),u=j(e,a),f=[];for(const c of u)l.length!==0&&(Array.isArray(c)||typeof c=="object")?f.push(m(c,[l.join(".")])):f.push(c);return p(s,n,f)},Array.isArray(e)?[]:{})}function O(e,r,s,o,i){try{const t=r==null?void 0:r.getItem(o);t&&e.$patch(s==null?void 0:s.deserialize(t))}catch(t){i&&console.error(t)}}function R(e={}){return r=>{const{options:{persist:s},store:o}=r;if(!s)return;const i=(Array.isArray(s)?s.map(t=>b(t,e)):[b(s,e)]).map(({storage:t=localStorage,beforeRestore:n=null,afterRestore:a=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=o.$id,paths:f=null,debug:c=!1})=>({storage:t,beforeRestore:n,afterRestore:a,serializer:l,key:u,paths:f,debug:c}));i.forEach(t=>{const{storage:n,serializer:a,key:l,paths:u,beforeRestore:f,afterRestore:c,debug:y}=t;f==null||f(r),O(o,n,a,l,y),c==null||c(r),o.$subscribe((w,d)=>{try{const A=Array.isArray(u)?m(d,u):d;n.setItem(l,a.serialize(A))}catch(A){y&&console.error(A)}},{detached:!0})}),o.$hydrate=({runHooks:t=!0}={})=>{i.forEach(n=>{const{beforeRestore:a,afterRestore:l,storage:u,serializer:f,key:c,debug:y}=n;t&&(a==null||a(r)),O(o,u,f,c,y),t&&(l==null||l(r))})}}}var _=R(),$=S(({app:e})=>{const r=v();r.use(_),e.use(r)});export{$ as default};
