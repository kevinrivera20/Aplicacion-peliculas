if(!self.define){let e,t={};const o=(o,i)=>(o=new URL(o+".js",i).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let s={};const c=e=>o(e,n),f={module:{uri:n},exports:s,require:c};t[n]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-abf69236"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icono.jpg",revision:"31ce8924f80bdd5589708af4e93a97eb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
