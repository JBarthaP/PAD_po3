if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const o=e=>c(e,d),t={module:{uri:d},exports:n,require:o};i[d]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"97b7d9f6fd78822e75af5262f5f46d63"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"generic-book.jpg",revision:"f99035ed201d5cd6f927fcbba5102ad5"},{url:"index.html",revision:"cbab041fd7d3ffc739dd221f4bc54dd7"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"40eaab462bf6e96dc19e5b55d36b2ca9"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"static/css/main.a751d517.css",revision:"ddd970cac38f84c7fd314ed6c77295c6"},{url:"static/js/787.80920d77.chunk.js",revision:"6f1c5a9a043f7949b67bb0ceb3ae7ea2"},{url:"static/js/main.e74fdaa6.js",revision:"ebe566ee2a68087e8978cc5bf70f1635"},{url:"static/js/main.e74fdaa6.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map