import{b as S,l as v}from"./index.a3a9b403.js";function z(e){return typeof e=="object"&&e!==null}function b(e,r){return e=z(e)?e:Object.create(null),new Proxy(e,{get(s,o,i){return Reflect.get(s,o,i)||Reflect.get(r,o,i)}})}function h(e){return e!==null&&typeof e=="object"}function g(e,r){const s=Array.isArray(e)&&Array.isArray(r),o=h(e)&&h(r);if(!s&&!o)throw new Error("Can only merge object with object or array with array");const i=s?[]:{};return[...Object.keys(e),...Object.keys(r)].forEach(n=>{Array.isArray(e[n])&&Array.isArray(r[n])?i[n]=[...Object.values(g(e[n],r[n]))]:r[n]!==null&&typeof r[n]=="object"&&typeof e[n]=="object"?i[n]=g(e[n],r[n]):e[n]!==void 0&&r[n]===void 0?i[n]=e[n]:e[n]===void 0&&r[n]!==void 0&&(i[n]=r[n])}),i}function j(e,r){return r.reduce((s,o)=>o==="[]"&&Array.isArray(s)?s:s==null?void 0:s[o],e)}function p(e,r,s){const o=r.slice(0,-1).reduce((i,t)=>/^(__proto__)$/.test(t)?{}:i[t]=i[t]||{},e);if(Array.isArray(o[r[r.length-1]])&&Array.isArray(s)){const i=o[r[r.length-1]].map((t,n)=>Array.isArray(t)&&typeof t!="object"?[...t,...s[n]]:typeof t=="object"&&t!==null&&Object.keys(t).some(l=>Array.isArray(t[l]))?g(t,s[n]):{...t,...s[n]});o[r[r.length-1]]=i}else r[r.length-1]===void 0&&Array.isArray(o)&&Array.isArray(s)?o.push(...s):o[r[r.length-1]]=s;return e}function m(e,r){return r.reduce((s,o)=>{const i=o.split(".");if(!i.includes("[]"))return p(s,i,j(e,i));const t=i.indexOf("[]"),n=i.slice(0,t),l=i.slice(0,t+1),c=i.slice(t+1),u=j(e,l),f=[];for(const a of u)c.length!==0&&(Array.isArray(a)||typeof a=="object")?f.push(m(a,[c.join(".")])):f.push(a);return p(s,n,f)},Array.isArray(e)?[]:{})}function O(e,r,s,o,i){try{const t=r==null?void 0:r.getItem(o);t&&e.$patch(s==null?void 0:s.deserialize(t))}catch(t){i&&console.error(t)}}function R(e={}){return r=>{const{options:{persist:s},store:o}=r;if(!s)return;const i=(Array.isArray(s)?s.map(t=>b(t,e)):[b(s,e)]).map(({storage:t=localStorage,beforeRestore:n=null,afterRestore:l=null,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:u=o.$id,paths:f=null,debug:a=!1})=>({storage:t,beforeRestore:n,afterRestore:l,serializer:c,key:u,paths:f,debug:a}));i.forEach(t=>{const{storage:n,serializer:l,key:c,paths:u,beforeRestore:f,afterRestore:a,debug:y}=t;f==null||f(r),O(o,n,l,c,y),a==null||a(r),o.$subscribe((w,d)=>{try{const A=Array.isArray(u)?m(d,u):d;n.setItem(c,l.serialize(A))}catch(A){y&&console.error(A)}},{detached:!0})}),o.$hydrate=({runHooks:t=!0}={})=>{i.forEach(n=>{const{beforeRestore:l,afterRestore:c,storage:u,serializer:f,key:a,debug:y}=n;t&&(l==null||l(r)),O(o,u,f,a,y),t&&(c==null||c(r))})}}}var _=R(),$=S(({app:e})=>{const r=v();r.use(_),e.use(r)});export{$ as default};