(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(354),r=t.n(o),a=t(314),s=t.n(a),i=t(417),c=t.n(i),l=new URL(t(777),t.b),d=s()(r()),u=c()(l);d.push([e.id,`/* CSS RESET: use box-sizing model; remove default margin & form typography styles; */\n*, *::before, *::after { box-sizing: border-box; }\n* { margin: 0; }\ninput, button, textarea, select { font: inherit; }\n/* imported google fonts examples */\n/* .roboto { font-family: "Roboto"; font-weight: 400,500; font-style: normal; } */\n/* variables---------------------------------------------------------------- */\n/* tailwind CSS Lime palette */\n:root{\n  --bg950: hsl(13, 81%, 15%);\n  --bg900: hsl(15, 75%, 28%);\n  --bg800: hsl(15, 79%, 34%);\n  --bg700: hsl(17, 88%, 40%);\n  --bg600: hsl(21, 90%, 48%);\n  --mg500: hsl(25, 95%, 53%);\n  --fg400: hsl(27, 96%, 61%);\n  --fg300: hsl(31, 97%, 72%);\n  --fg200: hsl(32, 98%, 83%);\n  --fg100: hsl(34, 100%, 92%);\n  --fg50:  hsl(33, 100%, 96%);\n}\n\n/* main CSS */\nbody{\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  background-color: var(--bg950);\n  color: var(--fg50);\n  header{\n    display: flex;\n    background-color: var(--bg700);\n    margin: 0 0 1rem 0;\n    #restaurantLogo {\n      margin: 0.5rem auto 0.5rem 0.5rem;\n    }\n    nav{\n      display: flex;\n      gap: 1rem;\n      margin: 0.25rem;\n    }\n  }\n}\n#interiorImageWrapper{\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  div {\n    background-image: url(${u});\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 80vw;\n    height: 46vw; /*based off width to work like aspect ratio. overshoot a little*/\n  }\n}\n\n/* menu page CSS */\n.menuPageElementsWrapper{\n  ul {\n    list-style-type: none;\n    padding-inline-start: 1.25rem;\n  }\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,qFAAqF;AACrF,yBAAyB,sBAAsB,EAAE;AACjD,IAAI,SAAS,EAAE;AACf,kCAAkC,aAAa,EAAE;AACjD,mCAAmC;AACnC,iFAAiF;AACjF,8EAA8E;AAC9E,8BAA8B;AAC9B;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA,aAAa;AACb;EACE,mDAAmD;EACnD,gBAAgB;EAChB,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB;IACE,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB;MACE,iCAAiC;IACnC;IACA;MACE,aAAa;MACb,SAAS;MACT,eAAe;IACjB;EACF;AACF;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf;IACE,yDAAyD;IACzD,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,YAAY,EAAE,gEAAgE;EAChF;AACF;;AAEA,kBAAkB;AAClB;EACE;IACE,qBAAqB;IACrB,6BAA6B;EAC/B;AACF",sourcesContent:["/* CSS RESET: use box-sizing model; remove default margin & form typography styles; */\n*, *::before, *::after { box-sizing: border-box; }\n* { margin: 0; }\ninput, button, textarea, select { font: inherit; }\n/* imported google fonts examples */\n/* .roboto { font-family: \"Roboto\"; font-weight: 400,500; font-style: normal; } */\n/* variables---------------------------------------------------------------- */\n/* tailwind CSS Lime palette */\n:root{\n  --bg950: hsl(13, 81%, 15%);\n  --bg900: hsl(15, 75%, 28%);\n  --bg800: hsl(15, 79%, 34%);\n  --bg700: hsl(17, 88%, 40%);\n  --bg600: hsl(21, 90%, 48%);\n  --mg500: hsl(25, 95%, 53%);\n  --fg400: hsl(27, 96%, 61%);\n  --fg300: hsl(31, 97%, 72%);\n  --fg200: hsl(32, 98%, 83%);\n  --fg100: hsl(34, 100%, 92%);\n  --fg50:  hsl(33, 100%, 96%);\n}\n\n/* main CSS */\nbody{\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  background-color: var(--bg950);\n  color: var(--fg50);\n  header{\n    display: flex;\n    background-color: var(--bg700);\n    margin: 0 0 1rem 0;\n    #restaurantLogo {\n      margin: 0.5rem auto 0.5rem 0.5rem;\n    }\n    nav{\n      display: flex;\n      gap: 1rem;\n      margin: 0.25rem;\n    }\n  }\n}\n#interiorImageWrapper{\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  div {\n    background-image: url('./assets/restaurantInterior.jpeg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 80vw;\n    height: 46vw; /*based off width to work like aspect ratio. overshoot a little*/\n  }\n}\n\n/* menu page CSS */\n.menuPageElementsWrapper{\n  ul {\n    list-style-type: none;\n    padding-inline-start: 1.25rem;\n  }\n}"],sourceRoot:""}]);const p=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(A);else{var m=r(A,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},777:(e,n,t)=>{e.exports=t.p+"f4545134e43e46333057.jpeg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),s=t.n(a),i=t(56),c=t.n(i),l=t(540),d=t.n(l),u=t(113),p=t.n(u),A=t(365),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(A.A,m),A.A&&A.A.locals&&A.A.locals;const f=()=>{const e=document.createElement("div");e.className="welcomeText";const n=document.createElement("h2");n.textContent="Welcome to Lit Tapas";const t=document.createElement("p");t.textContent="Our restaurant hosts fun experiences in a bright and modern setting. Do it for the gram! Enjoy trendy decor, mesmerizing art installations along with your duck confit",e.append(n,t);const o=document.createElement("div");o.className="BBLButtons";const r=document.createElement("button");r.textContent="Book Table";const a=document.createElement("button");a.textContent="Location";const s=document.createElement("button");s.textContent="Buy Merch",o.append(r,a,s);const i=document.createElement("div");i.id="interiorImageWrapper";const c=document.createElement("div");i.append(c);const l=document.createElement("div");return l.className="homePageElementsWrapper",l.append(e,o,i),l},g=document.querySelector("body"),h=document.createElement("header"),C=document.createElement("div");C.id="restaurantLogo",C.textContent="logo";const E=document.createElement("nav"),v=document.createElement("button");v.textContent="Home";const b=document.createElement("button");b.textContent="Menu";const B=document.createElement("button");B.textContent="Contact",E.append(v,b,B),h.append(C,E);const y=document.createElement("div");g.append(h,y),y.append(f());const x=()=>{y.textContent=""};v.addEventListener("click",(e=>{x(),y.append(f())})),b.addEventListener("click",(e=>{x(),y.append((()=>{const e=document.createElement("ul");[{dish:"Tuna Tartare",desc:"Fresh tuna served with avocado, cucumber, and soy dressing."},{dish:"Foie Gras",desc:"Pan-seared foie gras served with caramelized onions and brioche."},{dish:"Coq au Vin",desc:"Braised chicken cooked in red wine with mushrooms, onions, and bacon."},{dish:"Beef Wellington",desc:"Tender beef fillet wrapped in puff pastry with mushroom duxelles."},{dish:"Crème Brûlée",desc:"Classic French dessert consisting of rich custard topped with caramelized sugar."}].forEach((n=>{const t=document.createElement("li"),o=document.createElement("h3");o.textContent=n.dish;const r=document.createElement("div");var a;r.className=`dishImage ${a=n.dish,a.replace(/\s(.)/g,(e=>e.toUpperCase().trim())).replace(/\s/g,"").replace(/^(.)/,(e=>e.toLowerCase()))}`;const s=document.createElement("p");s.textContent=n.desc,t.append(o,r,s),e.append(t)}));const n=document.createElement("div");return n.className="menuPageElementsWrapper",n.appendChild(e),n})())})),B.addEventListener("click",(e=>{x(),y.append((()=>{const e=document.createElement("div");e.className="contactInfo";const n=document.createElement("p");n.textContent="123 Toronto Street, Suite 123, Toronto, ON M#K 2H3";const t=document.createElement("p");t.textContent="Phone: (111) 111-1111";const o=document.createElement("p");o.textContent="Email: info@littapas.ca",e.append(n,t,o);const r=document.createElement("div");return r.className="contactPageElementsWrapper",r.append(e),r})())}))})()})();
//# sourceMappingURL=main.bundle.js.map