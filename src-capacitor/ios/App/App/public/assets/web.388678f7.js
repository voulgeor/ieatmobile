import{W as n}from"./index.bc7ef6d7.js";class s extends n{async show(e){if(typeof document!="undefined"){let a=2e3;e.duration&&(a=e.duration==="long"?3500:2e3);const t=document.createElement("pwa-toast");t.duration=a,t.message=e.text,document.body.appendChild(t)}}}export{s as ToastWeb};
