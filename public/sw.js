if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const d=e=>i(e,o),t={module:{uri:o},exports:n,require:d};s[o]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"App.css",revision:"88c7fadb968269b5acc99c83f1ec217a"},{url:"App.jsx",revision:"1177d2bc47182081a0f42a70fedcd709"},{url:"componentes/Libro.jsx",revision:"bcaad876496378fbdae69cb9f7c54e89"},{url:"componentes/Resultados.jsx",revision:"137cd397259be2cbb808f612f63bc35b"},{url:"index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"index.js",revision:"92c3480c7a5e156886281f2625b6f3b2"},{url:"logo.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"utils/AsyncUtils.js",revision:"2eb7986af0c91b0814fd3a1a8dc2618d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map