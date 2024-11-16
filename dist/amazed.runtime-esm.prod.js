/*!
 * Amazed.js v0.0.2
 * (c) 2021-2024 maomincoding
 * Released under the MIT License.
 */
function t(t){const e=Object.create(null),n=t.split(",");for(let t=0;t<n.length;t++)e[n[t]]=!0;return function(t){return e[t]}}const e=t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),n=t("svg,animate,circle,clippath,cursor,image,defs,desc,ellipse,filter,font-faceforeignobject,g,glyph,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feFlood,feGaussianBlur,feImage,feMerge,feMorphology,feOffset,feSpecularLighting,feTile,feTurbulence,feDistantLight,fePointLight,feSpotLight,linearGradient,stop,radialGradient,animateTransform,animateMotion");function o(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)}const r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(t){return Object.prototype.toString.call(t).match(/\[object (.+?)\]/)[1].toLowerCase()}const l=["object","array","function","regexp","date","math"];function s(t){return l.includes(i(t))}function c(t){return null==t}function a(t,e){return t.tag===e.tag&&t.key===e.key}function u(t,e){return t.hasOwnProperty(e)}function f(t){if(t)return u(t,"tag")&&u(t,"props")&&u(t,"children")&&u(t,"key")&&u(t,"el")}function p(t){return Array.isArray(t)?function(t){return t.every(f)}(t):f(t)}function h(t){console.warn(`[Amazed.js warn]: ${t}`)}function m(t,e){Object.assign(t.style,e)}function d(t,e,n){const o=e.slice(2).toLowerCase();"function"==typeof n&&t.addEventListener(o,n)}function g(t,e,n){const o=e.slice(2).toLowerCase();"function"==typeof n&&t.removeEventListener(o,n)}function b(t,e,n){if(o(e)){const o="http://www.w3.org/1999/xlink";t.setAttributeNS(o,e,n.toString())}else"boolean"!=typeof n?t.setAttribute(e,n.toString()):n?t.setAttribute(e,""):t.removeAttribute(e)}function y(t,e){var n;o(e)?t.removeAttributeNS("http://www.w3.org/1999/xlink",o(n=e)?n.slice(6,n.length):""):t.removeAttribute(e)}function w(t){switch(!0){case e(t):return document.createElement(t);case n(t):return o=function(t){return n(t)?"svg":"math"===t?"math":void 0}(t),i=t,document.createElementNS(r[o],i);case"fragment"===t||"component"===t:return document.createDocumentFragment();case"comment"===t||"null"===t:return document.createComment(t);default:return document.createElement(t)}var o,i}const v="0.0.2",k=["$ref","$is"],j=new WeakMap;let S=new WeakMap;function A(t,e){let n="";if(Array.isArray(t))if(t.length>1){let e=[];for(let n=0;n<t.length;n++){const o=t[n];e.push(s(o)?JSON.stringify(o):o)}n=e.join("")}else n=0===t.length?"":JSON.stringify(t).replace(/,/g,"");else n=s(t)?JSON.stringify(t):t;e.textContent=n}function M(t,e,n){const{tag:o,props:r,children:l}=t;if(!c(o)){const s=w(o);if(t.el=s,!c(r)){const t=Object.keys(r);for(let e=0;e<t.length;e++){const n=t[e],o=r[n],l=i(o);if(n.startsWith("on")&&d(s,n,o),"function"===l||"key"===n||k.includes(n)||b(s,n,o),"style"===n&&"object"===l&&m(s,o),n===k[1]&&"object"===l){const t=o.template();M(t,s),S.set(o,t)}n===k[0]&&"object"===l&&j.set(o,s)}}if("component"!==o&&!c(l))if(p(l)){const t=i(l);if("array"===t)for(let t=0;t<l.length;t++){const e=l[t];f(e)&&M(e,s)}else"object"===t&&M(l,s)}else s&&A(l,s);if(n)e.insertBefore(s,n);else{if(!e)return s;e.appendChild(s)}}}function C(t,e){if(function(t,e){return"component"!==e.tag&&"component"!==t.tag}(t,e))if(a(t,e)){const n=e.el=t.el,o=t.props||{},r=e.props||{},l=Object.keys(r),s=Object.keys(o);for(let t=0;t<l.length;t++){const e=l[t],s=r[e],a=o[e],u=i(s);s!==a&&(c(s)?y(n,e):("function"===u||"key"===e||k.includes(e)||b(n,e,s),"style"===e&&"object"===u&&m(n,s),"function"===u&&s.toString()!==a.toString()&&(g(n,e,a),d(n,e,s))))}for(let t=0;t<s.length;t++){const e=s[t];l.includes(e)||y(n,e)}const u=t.children,h=e.children;"array"===i(u)&&"array"===i(h)?function(t,e,n){const o=e.length;let r=0,i=t.length-1,l=o-1;for(;r<=i&&r<=l&&a(t[r],e[r]);)C(t[r],e[r]),r++;for(;r<=i&&r<=l&&a(t[i],e[l]);)C(t[i],e[l]),i--,l--;if(r>i){if(r<=l){const t=l+1,i=t<o?e[t].el:null;for(;r<=l;)n.insertBefore(M(e[r]),i),r++}}else if(r>l)for(;r<=i;)n.removeChild(t[r].el),r++;else{const s=r,c=r,u=new Map;for(r=c;r<=l;r++){const t=e[r];null!=t.key&&u.set(t.key,r)}let f,p=0;const h=l-c+1;let m=!1,d=0;const g=new Array(h);for(r=0;r<h;r++)g[r]=0;for(let o=s;o<=i;o++){if(p>=h){n.removeChild(t[o].el);continue}let r;if(null!==t[o].key)r=u.get(t[o].key);else for(f=c;f<=l;f++)if(0===g[f-c]&&a(t[o],e[f])){r=f;break}void 0===r?n.removeChild(t[o].el):(g[r-c]=o+1,r>d?d=r:m=!0,C(t[o],e[r]),p++)}const b=m?function(t){const e=t.slice(),n=[0];let o,r,i,l,s;const c=t.length;for(o=0;o<c;o++){const c=t[o];if(0!==c){if(r=n[n.length-1],t[r]<c){e[o]=r,n.push(o);continue}for(i=0,l=n.length-1;i<l;)s=(i+l)/2|0,t[n[s]]<c?i=s+1:l=s;c<t[n[i]]&&(i>0&&(e[o]=n[i-1]),n[i]=o)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=e[l];return n}(g):[];f=b.length-1;for(let t=h-1;t>=0;t--){const r=t+c,i=r+1<o?e[r+1].el:null;0===g[t]?n.insertBefore(M(e[r]),i):m&&(f<0||t!==b[f]?n.insertBefore(e[r].el,i):f--)}}}(u,h,n):f(u)&&f(h)?C(u,h):p(u)||p(h)||u===h||A(h,n)}else{const n=t.el.parentNode,o=t.el.nextSibling;n.removeChild(t.el),M(e,n,o)}}async function L(t,e){if("function"==typeof t&&"undefined"!=typeof Promise)try{await Promise.resolve(t());const n=e||this,o=n.template();C(S.get(n),o),S.set(n,o)}catch(t){h(t)}}let O=[],x=0,E=0;function T(t=null){null!==t&&("function"==typeof t?O.push(t):console.warn("The parameter of onMounted is not a function!"))}function N(){if(O.length>0)for(let t=0,e=O.length;t<e;t++)O[t]&&O[t]();E=x,x=0,O=[]}let B=[];function W(t=null){null!==t&&("function"==typeof t?(x+=1,B.push(t)):console.warn("The parameter of onUnmounted is not a function!"))}let D=Object.create(null);function P(t){!function(){if(B.length>0){for(let t=0;t<E;t++)B[t]&&B[t]();B.splice(0,E)}E=x}(),D.innerHTML="",S=null,S=new WeakMap;const e=t.template();M(e,D),S.set(t,e),N()}function $(t,e){"function"==typeof t&&(e=t,t=Object.create(null));class n{template;static instance;constructor(){const n={content:this,setData:L.bind(this)},o=e.call(this,n);this.template=o;const r=o();if(t.mount){const e=function(t){if("string"==typeof t){const e=document.querySelector(t);if(!e){let e=null;return t.startsWith("#")?(e=document.createElement("div"),e.setAttribute("id",t.substring(1,t.length))):t.startsWith(".")?(e=document.createElement("div"),e.setAttribute("class",t.substring(1,t.length))):h(`Failed to mount app: mount target selector "${t}" returned null.`),document.body.insertAdjacentElement("afterbegin",e),e}return e}return t instanceof HTMLElement?t:window.ShadowRoot&&t instanceof window.ShadowRoot&&"closed"===t.mode?(h('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs.'),null):null}(t.mount);M(r,e),S.set(this,r),D=e,N()}}static getInstance(){return this.instance||(this.instance=new n),this.instance}}return n.getInstance()}export{$ as defineComponent,j as domInfo,T as onMounted,W as onUnmounted,P as resetView,L as setData,v as version};