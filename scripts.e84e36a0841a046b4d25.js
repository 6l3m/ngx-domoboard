!function(e,t){"use strict";function n(){var e=C.splice(0,C.length);for($e=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)d(e[n],t)}function o(e){return function(t){Pe(t)&&(d(t,e),oe.length&&r(t.querySelectorAll(oe),e))}}function l(e){var t=xe.call(e,"is"),n=e.nodeName.toUpperCase(),r=ae.call(ne,t?J+t.toUpperCase():Y+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<oe.indexOf(e+'[is="'+t+'"]')}function i(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[K]||2,a=e[X]||3;!tt||o&&o!==t||!t[q]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[q](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function u(e){var t=o(e);return function(e){C.push(t,e.target),$e&&clearTimeout($e),$e=setTimeout(n,1)}}function c(e){et&&(et=!1,e.currentTarget.removeEventListener(Q,c)),oe.length&&r((e.target||g).querySelectorAll(oe),e.detail===_?_:U),Se&&function(){for(var e,t=0,n=Re.length;t<n;t++)le.contains(e=Re[t])||(n--,Re.splice(t--,1),d(e,_))}()}function s(e,t){var n=this;Ze.call(n,e,t),w.call(n,{target:n})}function m(e,t,n){var r=t.apply(e,n),o=l(r);return-1<o&&F(r,re[o]),n.pop()&&oe.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)F(t=e[n],re[l(t)])}(r.querySelectorAll(oe)),r}function f(e,t){Ne(e,t),N?N.observe(e,Ke):(Je&&(e.setAttribute=s,e[P]=O(e),e[R](W,w)),e[R]($,i)),e[G]&&tt&&(e.created=!0,e[G](),e.created=!1)}function p(e){throw new Error("A "+e+" type is already registered")}function d(e,t){var n,r,o=l(e);-1<o&&(I(e,re[o]),o=0,t!==U||e[U]?t!==_||e[_]||(e[U]=!1,e[_]=!0,r="disconnected",o=1):(e[_]=!1,e[U]=!0,r="connected",o=1,Se&&ae.call(Re,e)<0&&Re.push(e)),o&&(n=e[t+k]||e[r+k])&&n.call(e))}function h(){}function T(e,t,n){var r=n&&n[x]||"",o=t.prototype,l=Oe(o),a=t.observedAttributes||me,i={prototype:l};Ve(l,G,{value:function(){if(be)be=!1;else if(!this[Le]){this[Le]=!0,new t(this),o[G]&&o[G].call(this);var e=ye[we.get(t)];(!Ee||e.create.length>1)&&E(this)}}}),Ve(l,q,{value:function(e){-1<ae.call(a,e)&&o[q]&&o[q].apply(this,arguments)}}),o[Z]&&Ve(l,B,{value:o[Z]}),o[j]&&Ve(l,z,{value:o[j]}),r&&(i[x]=r),e=e.toUpperCase(),ye[e]={constructor:t,create:r?[r,Ae(e)]:[e]},we.set(t,e),g[V](e.toLowerCase(),i),v(e),Ce[e].r()}function L(e){var t=ye[e.toUpperCase()];return t&&t.constructor}function M(e){return"string"==typeof e?e:e&&e.is||""}function E(e){for(var t,n=e[q],r=n?e.attributes:me,o=r.length;o--;)n.call(e,(t=r[o]).name||t.nodeName,null,t.value||t.nodeValue)}function v(e){return(e=e.toUpperCase())in Ce||(Ce[e]={},Ce[e].p=new ge(function(t){Ce[e].r=t})),Ce[e].p}function H(){Me&&delete e.customElements,se(e,"customElements",{configurable:!0,value:new h}),se(e,"CustomElementRegistry",{configurable:!0,value:h});for(var t=y.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Le]||(be=!0,t=ye[we.get(e.constructor)],(e=(r=Ee&&1===t.create.length)?Reflect.construct(n,me,t.constructor):g.createElement.apply(g,t.create))[Le]=!0,be=!1,r||E(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){se(n,Le,{value:e[t]})}}}(t[n]));g.createElement=function(e,t){var n=M(t);return n?ze.call(this,e,Ae(n)):ze.call(this,e)},Qe||(Ye=!0,g[V](""))}var g=e.document,b=e.Object,y=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e,t){(t=t.toLowerCase())in i||(i[e]=(i[e]||[]).concat(t),i[t]=i[t.toUpperCase()]=e)},i=(b.create||b)(null),u={};for(n in e)for(o in e[n])for(i[o]=r=e[n][o],t=0;t<r.length;t++)i[r[t].toLowerCase()]=i[r[t].toUpperCase()]=o;return u.get=function(e){return"string"==typeof e?i[e]||(l.test(e)?[]:""):function(e){var t,n=[];for(t in i)e.test(t)&&n.push(t);return n}(e)},u.set=function(e,t){return l.test(e)?a(e,t):a(t,e),u},u}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var C,w,A,O,N,D,I,F,S,V="registerElement",P="__"+V+(1e5*e.Math.random()>>0),R="addEventListener",U="attached",k="Callback",_="detached",x="extends",q="attributeChanged"+k,B=U+k,Z="connected"+k,j="disconnected"+k,G="created"+k,z=_+k,K="ADDITION",X="REMOVAL",$="DOMAttrModified",Q="DOMContentLoaded",W="DOMSubtreeModified",Y="<",J="=",ee=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,te=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],ne=[],re=[],oe="",le=g.documentElement,ae=ne.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ie=b.prototype,ue=ie.hasOwnProperty,ce=ie.isPrototypeOf,se=b.defineProperty,me=[],fe=b.getOwnPropertyDescriptor,pe=b.getOwnPropertyNames,de=b.getPrototypeOf,he=b.setPrototypeOf,Te=!!b.__proto__,Le="__dreCEv1",Me=e.customElements,Ee=!/^force/.test(t.type)&&!!(Me&&Me.define&&Me.get&&Me.whenDefined),ve=b.create||b,He=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ae.call(t,e)]},set:function(r,o){(e=ae.call(t,r))<0?n[t.push(r)-1]=o:n[e]=o}}},ge=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={catch:function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},be=!1,ye=ve(null),Ce=ve(null),we=new He,Ae=function(e){return e.toLowerCase()},Oe=b.create||function e(t){return t?(e.prototype=t,new e):this},Ne=he||(Te?function(e,t){return e.__proto__=t,e}:pe&&fe?function(){function e(e,t){for(var n,r=pe(t),o=0,l=r.length;o<l;o++)ue.call(e,n=r[o])||se(e,n,fe(t,n))}return function(t,n){do{e(t,n)}while((n=de(n))&&!ce.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),De=e.MutationObserver||e.WebKitMutationObserver,Ie=e.HTMLAnchorElement,Fe=(e.HTMLElement||e.Element||e.Node).prototype,Se=!ce.call(Fe,le),Ve=Se?function(e,t,n){return e[t]=n.value,e}:se,Pe=Se?function(e){return 1===e.nodeType}:function(e){return ce.call(Fe,e)},Re=Se&&[],Ue=Fe.attachShadow,ke=Fe.cloneNode,_e=Fe.dispatchEvent,xe=Fe.getAttribute,qe=Fe.hasAttribute,Be=Fe.removeAttribute,Ze=Fe.setAttribute,je=g.createElement,Ge=g.importNode,ze=je,Ke=De&&{attributes:!0,characterData:!0,attributeOldValue:!0},Xe=De||function(e){Je=!1,le.removeEventListener($,Xe)},$e=0,Qe=V in g&&!/^force-all/.test(t.type),We=!0,Ye=!1,Je=!0,et=!0,tt=!0;if(De&&((S=g.createElement("div")).innerHTML="<div><div></div></div>",new De(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(S=fe(Fe,"innerHTML"))&&S.set;n&&se(Fe,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),S=null}).observe(S,{childList:!0,subtree:!0}),S.innerHTML=""),Qe||(he||Te?(I=function(e,t){ce.call(t,e)||f(e,t)},F=f):F=I=function(e,t){e[P]||(e[P]=b(!0),f(e,t))},Se?(Je=!1,function(){var e=fe(Fe,R),t=e.value,n=function(e){var t=new CustomEvent($,{bubbles:!0});t.attrName=e,t.prevValue=xe.call(this,e),t.newValue=null,t[X]=t.attrChange=2,Be.call(this,e),_e.call(this,t)},r=function(e,t){var n=qe.call(this,e),r=n&&xe.call(this,e),o=new CustomEvent($,{bubbles:!0});Ze.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[K]=o.attrChange=0,_e.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[P],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],(t=new CustomEvent($,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[K]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,_e.call(n,t))};e.value=function(e,l,a){e===$&&this[q]&&this.setAttribute!==r&&(this[P]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},se(Fe,R,e)}()):De||(le[R]($,Xe),le.setAttribute(P,1),le.removeAttribute(P),Je&&(w=function(e){var t,n,r,o=this;if(o===e.target){for(r in t=o[P],o[P]=n=O(o),n){if(!(r in t))return A(0,o,r,t[r],n[r],K);if(n[r]!==t[r])return A(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return A(2,o,r,t[r],n[r],X)}},A=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,i(a)},O=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)"setAttribute"!==(n=(t=o[l]).name)&&(r[n]=t.value);return r})),g[V]=function(e,t){if(n=e.toUpperCase(),We&&(We=!1,De?(N=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new De(function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)"childList"===(o=r[i]).type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,tt&&l[q]&&"style"!==o.attributeName&&(a=xe.call(l,o.attributeName))!==o.oldValue&&l[q](o.attributeName,o.oldValue,a))})}(o(U),o(_)),(D=function(e){return N.observe(e,{childList:!0,subtree:!0}),e})(g),Ue&&(Fe.attachShadow=function(){return D(Ue.apply(this,arguments))})):(C=[],g[R]("DOMNodeInserted",u(U)),g[R]("DOMNodeRemoved",u(_))),g[R](Q,c),g[R]("readystatechange",c),g.importNode=function(e,t){switch(e.nodeType){case 1:return m(g,Ge,[e,!!t]);case 11:for(var n=g.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(g.importNode(r[l],!!t));return n;default:return ke.call(e,!!t)}},Fe.cloneNode=function(e){return m(this,ke,[!!e])}),Ye)return Ye=!1;if(-2<ae.call(ne,J+n)+ae.call(ne,Y+n)&&p(e),!ee.test(n)||-1<ae.call(te,n))throw new Error("The type "+e+" is invalid");var n,l,a=function(){return s?g.createElement(f,n):g.createElement(f)},i=t||ie,s=ue.call(i,x),f=s?t[x].toUpperCase():n;return s&&-1<ae.call(ne,Y+f)&&p(f),l=ne.push((s?J:Y)+n)-1,oe=oe.concat(oe.length?",":"",s?f+'[is="'+e.toLowerCase()+'"]':f),a.prototype=re[l]=ue.call(i,"prototype")?i.prototype:Oe(Fe),oe.length&&r(g.querySelectorAll(oe),U),a},g.createElement=ze=function(e,t){var n=M(t),r=n?je.call(g,e,Ae(n)):je.call(g,e),o=""+e,l=ae.call(ne,(n?J:Y)+(n||o).toUpperCase()),i=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),i&&(i=a(o.toUpperCase(),n))),tt=!g.createElement.innerHTMLHelper,i&&F(r,re[l]),r}),h.prototype={constructor:h,define:Ee?function(e,t,n){if(n)T(e,t,n);else{var r=e.toUpperCase();ye[r]={constructor:t,create:[r]},we.set(t,r),Me.define(e,t)}}:T,get:Ee?function(e){return Me.get(e)||L(e)}:L,whenDefined:Ee?function(e){return ge.race([Me.whenDefined(e),v(e)])}:v},!Me||/^force/.test(t.type))H();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[x]="a",(t.prototype=Oe(Ie.prototype)).constructor=t,e.customElements.define(r,t,n),!o.test(g.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}(function e(){return Reflect.construct(Ie,[],e)},{},"document-register-element-a")}catch(nt){H()}if(!t.noBuiltIn)try{if(je.call(g,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(rt){Ae=function(e){return{is:e.toLowerCase()}}}}(window);