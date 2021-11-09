/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransforms3d-csstransitions-history-placeholder-videoautoplay-prefixed-setclasses !*/
!function (A, e, t) { function n(A, e) { return typeof A === e } function o() { var A, e, t, o, i, r, a; for (var s in E) if (E.hasOwnProperty(s)) { if (A = [], e = E[s], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (t = 0; t < e.options.aliases.length; t++) A.push(e.options.aliases[t].toLowerCase()); for (o = n(e.fn, "function") ? e.fn() : e.fn, i = 0; i < A.length; i++) r = A[i], a = r.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), R.push((o ? "" : "no-") + a.join("-")) } } function i(A) { var e = v.className, t = Modernizr._config.classPrefix || ""; if (B && (e = e.baseVal), Modernizr._config.enableJSClass) { var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); e = e.replace(n, "$1" + t + "js$2") } Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t), B ? v.className.baseVal = e : v.className = e) } function r(A) { return A.replace(/([a-z])-([a-z])/g, function (A, e, t) { return e + t.toUpperCase() }).replace(/^-/, "") } function a() { return "function" != typeof e.createElement ? e.createElement(arguments[0]) : B ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments) } function s(A, e) { return !!~("" + A).indexOf(e) } function l(A, e) { return function () { return A.apply(e, arguments) } } function d(A, e, t) { var o; for (var i in A) if (A[i] in e) return t === !1 ? A[i] : (o = e[A[i]], n(o, "function") ? l(o, t || e) : o); return !1 } function c() { var A = e.body; return A || (A = a(B ? "svg" : "body"), A.fake = !0), A } function u(A, t, n, o) { var i, r, s, l, d = "modernizr", u = a("div"), p = c(); if (parseInt(n, 10)) for (; n--;) s = a("div"), s.id = o ? o[n] : d + (n + 1), u.appendChild(s); return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : u).appendChild(i), p.appendChild(u), i.styleSheet ? i.styleSheet.cssText = A : i.appendChild(e.createTextNode(A)), u.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = v.style.overflow, v.style.overflow = "hidden", v.appendChild(p)), r = t(u, A), p.fake ? (p.parentNode.removeChild(p), v.style.overflow = l, v.offsetHeight) : u.parentNode.removeChild(u), !!r } function p(A) { return A.replace(/([A-Z])/g, function (A, e) { return "-" + e.toLowerCase() }).replace(/^ms-/, "-ms-") } function f(e, n) { var o = e.length; if ("CSS" in A && "supports" in A.CSS) { for (; o--;) if (A.CSS.supports(p(e[o]), n)) return !0; return !1 } if ("CSSSupportsRule" in A) { for (var i = []; o--;) i.push("(" + p(e[o]) + ":" + n + ")"); return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (A) { return "absolute" == getComputedStyle(A, null).position }) } return t } function h(A, e, o, i) { function l() { c && (delete M.style, delete M.modElem) } if (i = n(i, "undefined") ? !1 : i, !n(o, "undefined")) { var d = f(A, o); if (!n(d, "undefined")) return d } for (var c, u, p, h, m, g = ["modernizr", "tspan", "samp"]; !M.style && g.length;) c = !0, M.modElem = a(g.shift()), M.style = M.modElem.style; for (p = A.length, u = 0; p > u; u++) if (h = A[u], m = M.style[h], s(h, "-") && (h = r(h)), M.style[h] !== t) { if (i || n(o, "undefined")) return l(), "pfx" == e ? h : !0; try { M.style[h] = o } catch (w) { } if (M.style[h] != m) return l(), "pfx" == e ? h : !0 } return l(), !1 } function m(A, e, t, o, i) { var r = A.charAt(0).toUpperCase() + A.slice(1), a = (A + " " + x.join(r + " ") + r).split(" "); return n(e, "string") || n(e, "undefined") ? h(a, e, o, i) : (a = (A + " " + Q.join(r + " ") + r).split(" "), d(a, e, t)) } function g(A, e, n) { return m(A, t, t, e, n) } function w(A, e) { if ("object" == typeof A) for (var t in A) P(A, t) && w(t, A[t]); else { A = A.toLowerCase(); var n = A.split("."), o = Modernizr[n[0]]; if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr; e = "function" == typeof e ? e() : e, 1 == n.length ? Modernizr[n[0]] = e : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = e), i([(e && 0 != e ? "" : "no-") + n.join("-")]), Modernizr._trigger(A, e) } return Modernizr } var R = [], E = [], y = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (A, e) { var t = this; setTimeout(function () { e(t[A]) }, 0) }, addTest: function (A, e, t) { E.push({ name: A, fn: e, options: t }) }, addAsyncTest: function (A) { E.push({ name: null, fn: A }) } }, Modernizr = function () { }; Modernizr.prototype = y, Modernizr = new Modernizr, Modernizr.addTest("history", function () { var e = navigator.userAgent; return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") ? A.history && "pushState" in A.history : !1 }); var v = e.documentElement, B = "svg" === v.nodeName.toLowerCase(), T = "CSS" in A && "supports" in A.CSS, F = "supportsCSS" in A; Modernizr.addTest("supports", T || F), Modernizr.addTest("placeholder", "placeholder" in a("input") && "placeholder" in a("textarea")); var G = "Moz O ms Webkit", x = y._config.usePrefixes ? G.split(" ") : []; y._cssomPrefixes = x; var C = function (e) { var n, o = prefixes.length, i = A.CSSRule; if ("undefined" == typeof i) return t; if (!e) return !1; if (e = e.replace(/^@/, ""), n = e.replace(/-/g, "_").toUpperCase() + "_RULE", n in i) return "@" + e; for (var r = 0; o > r; r++) { var a = prefixes[r], s = a.toUpperCase() + "_" + n; if (s in i) return "@-" + a.toLowerCase() + "-" + e } return !1 }; y.atRule = C; var Q = y._config.usePrefixes ? G.toLowerCase().split(" ") : []; y._domPrefixes = Q; var Z = y.testStyles = u, Y = { elem: a("modernizr") }; Modernizr._q.push(function () { delete Y.elem }); var M = { style: Y.elem.style }; Modernizr._q.unshift(function () { delete M.style }), y.testAllProps = m; y.prefixed = function (A, e, t) { return 0 === A.indexOf("@") ? C(A) : (-1 != A.indexOf("-") && (A = r(A)), e ? m(A, e, t) : m(A, "pfx")) }; y.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("csstransforms", function () { return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0) }), Modernizr.addTest("csstransforms3d", function () { var A = !!g("perspective", "1px", !0), e = Modernizr._config.usePrefixes; if (A && (!e || "webkitPerspective" in v.style)) { var t, n = "#modernizr{width:0;height:0}"; Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", e && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", Z(n + t, function (e) { A = 7 === e.offsetWidth && 18 === e.offsetHeight }) } return A }), Modernizr.addTest("csstransitions", g("transition", "all", !0)), Modernizr.addTest("video", function () { var A = a("video"), e = !1; try { (e = !!A.canPlayType) && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")) } catch (t) { } return e }); var P; !function () { var A = {}.hasOwnProperty; P = n(A, "undefined") || n(A.call, "undefined") ? function (A, e) { return e in A && n(A.constructor.prototype[e], "undefined") } : function (e, t) { return A.call(e, t) } }(), y._l = {}, y.on = function (A, e) { this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () { Modernizr._trigger(A, Modernizr[A]) }, 0) }, y._trigger = function (A, e) { if (this._l[A]) { var t = this._l[A]; setTimeout(function () { var A, n; for (A = 0; A < t.length; A++) (n = t[A])(e) }, 0), delete this._l[A] } }, Modernizr._q.push(function () { y.addTest = w }), Modernizr.addAsyncTest(function () { function A(r) { o++, clearTimeout(e); var a = r && "playing" === r.type || 0 !== i.currentTime; return !a && n > o ? void (e = setTimeout(A, t)) : (i.removeEventListener("playing", A, !1), w("videoautoplay", a), void i.parentNode.removeChild(i)) } var e, t = 200, n = 5, o = 0, i = a("video"), r = i.style; if (!(Modernizr.video && "autoplay" in i)) return void w("videoautoplay", !1); r.position = "absolute", r.height = 0, r.width = 0; try { if (Modernizr.video.ogg) i.src = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A"; else { if (!Modernizr.video.h264) return void w("videoautoplay", !1); i.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==" } } catch (s) { return void w("videoautoplay", !1) } i.setAttribute("autoplay", ""), i.style.cssText = "display:none", v.appendChild(i), setTimeout(function () { i.addEventListener("playing", A, !1), e = setTimeout(A, t) }, 0) }), o(), i(R), delete y.addTest, delete y.addAsyncTest; for (var S = 0; S < Modernizr._q.length; S++) Modernizr._q[S](); A.Modernizr = Modernizr }(window, document);

/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a,b){a(function(){"use strict";function a(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function c(a,b){var c,d,e=a.length;if(!e||!b)return!1;for(c=b.toLowerCase(),d=0;d<e;++d)if(c===a[d].toLowerCase())return!0;return!1}function d(a){for(var b in a)i.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function e(a){return(a||"").substr(0,500)}function f(a,b){this.ua=e(a),this._cache={},this.maxPhoneWidth=b||600}var g={};g.mobileDetectRules={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",Samsung:"\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",NokiaLumia:"Lumia [0-9]{3,4}",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",Wiko:"KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo (3DS|Switch)",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)",GoogleTablet:"Android.*Pixel C",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",LenovoTablet:"Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",NokiaLumiaTablet:"Lumia 2520",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9|TECNO DP8D",JXDTablet:"Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",VerizonTablet:"QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",OndaTablet:"\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",AocTablet:"MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",MpmanTablet:"MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",WolderTablet:"miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",MediacomTablet:"M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",LeaderTablet:"TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",KocasoTablet:"\\b(TB-1207)\\b",HisenseTablet:"\\b(F5281|E2371)\\b",Hudl:"Hudl HT7S3|Hudl 2",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",Edge:"Mobile Safari/[.0-9]* Edge",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",PaleMoon:"Android.*PaleMoon|Mobile.*PaleMoon"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:["Firefox/[VER]","FxiOS/[VER]"],Fennec:"Fennec/[VER]",Edge:"Edge/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];","Trident/[0-9.]+;.*rv:[VER]"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]",UCBrowser:["UCWEB[VER]","UC.*Browser/[VER]"],MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",SamsungBrowser:"SamsungBrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",PaleMoon:"PaleMoon/[VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",Goanna:"Goanna/[VER]",iOS:" \\bi?OS\\b [VER][ ;]{1}",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{Bot:"Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",MobileBot:"Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},g.detectMobileBrowsers={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
tabletPattern:/android|ipad|playbook|silk/i};var h,i=Object.prototype.hasOwnProperty;return g.FALLBACK_PHONE="UnknownPhone",g.FALLBACK_TABLET="UnknownTablet",g.FALLBACK_MOBILE="UnknownMobile",h="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var a,b,c,e,f,j,k=g.mobileDetectRules;for(a in k.props)if(i.call(k.props,a)){for(b=k.props[a],h(b)||(b=[b]),f=b.length,e=0;e<f;++e)c=b[e],j=c.indexOf("[VER]"),j>=0&&(c=c.substring(0,j)+"([\\w._\\+]+)"+c.substring(j+5)),b[e]=new RegExp(c,"i");k.props[a]=b}d(k.oss),d(k.phones),d(k.tablets),d(k.uas),d(k.utils),k.oss0={WindowsPhoneOS:k.oss.WindowsPhoneOS,WindowsMobileOS:k.oss.WindowsMobileOS}}(),g.findMatch=function(a,b){for(var c in a)if(i.call(a,c)&&a[c].test(b))return c;return null},g.findMatches=function(a,b){var c=[];for(var d in a)i.call(a,d)&&a[d].test(b)&&c.push(d);return c},g.getVersionStr=function(a,b){var c,d,e,f,h=g.mobileDetectRules.props;if(i.call(h,a))for(c=h[a],e=c.length,d=0;d<e;++d)if(f=c[d].exec(b),null!==f)return f[1];return null},g.getVersion=function(a,b){var c=g.getVersionStr(a,b);return c?g.prepareVersionNo(c):NaN},g.prepareVersionNo=function(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)},g.isMobileFallback=function(a){return g.detectMobileBrowsers.fullPattern.test(a)||g.detectMobileBrowsers.shortPattern.test(a.substr(0,4))},g.isTabletFallback=function(a){return g.detectMobileBrowsers.tabletPattern.test(a)},g.prepareDetectionCache=function(a,c,d){if(a.mobile===b){var e,h,i;return(h=g.findMatch(g.mobileDetectRules.tablets,c))?(a.mobile=a.tablet=h,void(a.phone=null)):(e=g.findMatch(g.mobileDetectRules.phones,c))?(a.mobile=a.phone=e,void(a.tablet=null)):void(g.isMobileFallback(c)?(i=f.isPhoneSized(d),i===b?(a.mobile=g.FALLBACK_MOBILE,a.tablet=a.phone=null):i?(a.mobile=a.phone=g.FALLBACK_PHONE,a.tablet=null):(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null)):g.isTabletFallback(c)?(a.mobile=a.tablet=g.FALLBACK_TABLET,a.phone=null):a.mobile=a.tablet=a.phone=null)}},g.mobileGrade=function(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":(a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2,"C")},g.detectOS=function(a){return g.findMatch(g.mobileDetectRules.oss0,a)||g.findMatch(g.mobileDetectRules.oss,a)},g.getDeviceSmallerSide=function(){return window.screen.width<window.screen.height?window.screen.width:window.screen.height},f.prototype={constructor:f,mobile:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return g.prepareDetectionCache(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=g.findMatch(g.mobileDetectRules.uas,this.ua)),this._cache.userAgent},userAgents:function(){return this._cache.userAgents===b&&(this._cache.userAgents=g.findMatches(g.mobileDetectRules.uas,this.ua)),this._cache.userAgents},os:function(){return this._cache.os===b&&(this._cache.os=g.detectOS(this.ua)),this._cache.os},version:function(a){return g.getVersion(a,this.ua)},versionStr:function(a){return g.getVersionStr(a,this.ua)},is:function(b){return c(this.userAgents(),b)||a(b,this.os())||a(b,this.phone())||a(b,this.tablet())||c(g.findMatches(g.mobileDetectRules.utils,this.ua),b)},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return f.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=g.mobileGrade(this)),this._cache.grade}},"undefined"!=typeof window&&window.screen?f.isPhoneSized=function(a){return a<0?b:g.getDeviceSmallerSide()<=a}:f.isPhoneSized=function(){},f._impl=g,f.version="1.4.2 2018-06-10",f})}(function(a){if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}());
/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (a) { var r = a.fn.domManip, d = "_tmplitem", q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, b = {}, f = {}, e, p = { key: 0, data: {} }, i = 0, c = 0, l = []; function g(g, d, h, e) { var c = { data: e || (e === 0 || e === false) ? e : d ? d.data : {}, _wrap: d ? d._wrap : null, tmpl: null, parent: d || null, nodes: [], calls: u, nest: w, wrap: x, html: v, update: t }; g && a.extend(c, g, { nodes: [], parent: d }); if (h) { c.tmpl = h; c._ctnt = c._ctnt || c.tmpl(a, c); c.key = ++i; (l.length ? f : b)[i] = c } return c } a.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (f, d) { a.fn[f] = function (n) { var g = [], i = a(n), k, h, m, l, j = this.length === 1 && this[0].parentNode; e = b || {}; if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) { i[d](this[0]); g = this } else { for (h = 0, m = i.length; h < m; h++) { c = h; k = (h > 0 ? this.clone(true) : this).get(); a(i[h])[d](k); g = g.concat(k) } c = 0; g = this.pushStack(g, f, i.selector) } l = e; e = null; a.tmpl.complete(l); return g } }); a.fn.extend({ tmpl: function (d, c, b) { return a.tmpl(this[0], d, c, b) }, tmplItem: function () { return a.tmplItem(this[0]) }, template: function (b) { return a.template(b, this[0]) }, domManip: function (d, m, k) { if (d[0] && a.isArray(d[0])) { var g = a.makeArray(arguments), h = d[0], j = h.length, i = 0, f; while (i < j && !(f = a.data(h[i++], "tmplItem"))); if (f && c) g[2] = function (b) { a.tmpl.afterManip(this, b, k) }; r.apply(this, g) } else r.apply(this, arguments); c = 0; !e && a.tmpl.complete(b); return this } }); a.extend({ tmpl: function (d, h, e, c) { var i, k = !c; if (k) { c = p; d = a.template[d] || a.template(null, d); f = {} } else if (!d) { d = c.tmpl; b[c.key] = c; c.nodes = []; c.wrapped && n(c, c.wrapped); return a(j(c, null, c.tmpl(a, c))) } if (!d) return []; if (typeof h === "function") h = h.call(c || {}); e && e.wrapped && n(e, e.wrapped); i = a.isArray(h) ? a.map(h, function (a) { return a ? g(e, c, d, a) : null }) : [g(e, c, d, h)]; return k ? a(j(c, null, i)) : i }, tmplItem: function (b) { var c; if (b instanceof a) b = b[0]; while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode)); return c || p }, template: function (c, b) { if (b) { if (typeof b === "string") b = o(b); else if (b instanceof a) b = b[0] || {}; if (b.nodeType) b = a.data(b, "tmpl") || a.data(b, "tmpl", o(b.innerHTML)); return typeof c === "string" ? (a.template[c] = b) : b } return c ? typeof c !== "string" ? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c : a(c)) : null }, encode: function (a) { return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;") } }); a.extend(a.tmpl, { tag: { tmpl: { _default: { $2: "null" }, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}" }, wrap: { _default: { $2: "null" }, open: "$item.calls(__,$1,$2);__=[];", close: "call=$item.calls();__=call._.concat($item.wrap(call,__));" }, each: { _default: { $2: "$index, $value" }, open: "if($notnull_1){$.each($1a,function($2){with(this){", close: "}});}" }, "if": { open: "if(($notnull_1) && $1a){", close: "}" }, "else": { _default: { $1: "true" }, open: "}else if(($notnull_1) && $1a){" }, html: { open: "if($notnull_1){__.push($1a);}" }, "=": { _default: { $1: "$data" }, open: "if($notnull_1){__.push($.encode($1a));}" }, "!": { open: "" } }, complete: function () { b = {} }, afterManip: function (f, b, d) { var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : []; d.call(f, b); m(e); c++ } }); function j(e, g, f) { var b, c = f ? a.map(f, function (a) { return typeof a === "string" ? e.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + d + '="' + e.key + '" $2') : a : j(a, e, a._ctnt) }) : e; if (g) return c; c = c.join(""); c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (f, c, e, d) { b = a(e).get(); m(b); if (c) b = k(c).concat(b); if (d) b = b.concat(k(d)) }); return b ? b : k(c) } function k(c) { var b = document.createElement("div"); b.innerHTML = c; return a.makeArray(b.childNodes) } function o(b) { return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (m, l, k, g, b, c, d) { var j = a.tmpl.tag[k], i, e, f; if (!j) throw "Unknown template tag: " + k; i = j._default || []; if (c && !/\w$/.test(b)) { b += c; c = "" } if (b) { b = h(b); d = d ? "," + h(d) + ")" : c ? ")" : ""; e = c ? b.indexOf(".") > -1 ? b + h(c) : "(" + b + ").call($item" + d : b; f = c ? e : "(typeof(" + b + ")==='function'?(" + b + ").call($item):(" + b + "))" } else f = e = i.$1 || "null"; g = h(g); return "');" + j[l ? "close" : "open"].split("$notnull_1").join(b ? "typeof(" + b + ")!=='undefined' && (" + b + ")!=null" : "true").split("$1a").join(f).split("$1").join(e).split("$2").join(g || i.$2 || "") + "__.push('" }) + "');}return __;") } function n(c, b) { c._wrap = j(c, true, a.isArray(b) ? b : [q.test(b) ? b : a(b).html()]).join("") } function h(a) { return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null } function s(b) { var a = document.createElement("div"); a.appendChild(b.cloneNode(true)); return a.innerHTML } function m(o) { var n = "_" + c, k, j, l = {}, e, p, h; for (e = 0, p = o.length; e < p; e++) { if ((k = o[e]).nodeType !== 1) continue; j = k.getElementsByTagName("*"); for (h = j.length - 1; h >= 0; h--) m(j[h]); m(k) } function m(j) { var p, h = j, k, e, m; if (m = j.getAttribute(d)) { while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(p = h.getAttribute(d))); if (p !== m) { h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(d) || 0 : 0; if (!(e = b[m])) { e = f[m]; e = g(e, b[h] || f[h]); e.key = ++i; b[i] = e } c && o(m) } j.removeAttribute(d) } else if (c && (e = a.data(j, "tmplItem"))) { o(e.key); b[e.key] = e; h = a.data(j.parentNode, "tmplItem"); h = h ? h.key : 0 } if (e) { k = e; while (k && k.key != h) { k.nodes.push(j); k = k.parent } delete e._ctnt; delete e._wrap; a.data(j, "tmplItem", e) } function o(a) { a = a + n; e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent) } } } function u(a, d, c, b) { if (!a) return l.pop(); l.push({ _: a, tmpl: d, item: this, data: c, options: b }) } function w(d, c, b) { return a.tmpl(a.template(d), c, b, this) } function x(b, d) { var c = b.options || {}; c.wrapped = d; return a.tmpl(a.template(b.tmpl), b.data, c, b.item) } function v(d, c) { var b = this._wrap; return a.map(a(a.isArray(b) ? b.join("") : b).filter(d || "*"), function (a) { return c ? a.innerText || a.textContent : a.outerHTML || s(a) }) } function t() { var b = this.nodes; a.tmpl(null, null, null, this).insertBefore(b[0]); a(b).remove() } })(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) { }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Swiper = factory());
}(this, (function () {
    'use strict';

    /**
     * SSR Window 1.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2018, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: February 10, 2018
     */
    var d;
    if (typeof document === 'undefined') {
        d = {
            body: {},
            addEventListener: function addEventListener() { },
            removeEventListener: function removeEventListener() { },
            activeElement: {
                blur: function blur() { },
                nodeName: '',
            },
            querySelector: function querySelector() {
                return null;
            },
            querySelectorAll: function querySelectorAll() {
                return [];
            },
            getElementById: function getElementById() {
                return null;
            },
            createEvent: function createEvent() {
                return {
                    initEvent: function initEvent() { },
                };
            },
            createElement: function createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function setAttribute() { },
                    getElementsByTagName: function getElementsByTagName() {
                        return [];
                    },
                };
            },
            location: { hash: '' },
        };
    } else {
        // eslint-disable-next-line
        d = document;
    }

    var doc = d;

    var w;
    if (typeof window === 'undefined') {
        w = {
            document: doc,
            navigator: {
                userAgent: '',
            },
            location: {},
            history: {},
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener: function addEventListener() { },
            removeEventListener: function removeEventListener() { },
            getComputedStyle: function getComputedStyle() {
                return {
                    getPropertyValue: function getPropertyValue() {
                        return '';
                    },
                };
            },
            Image: function Image() { },
            Date: function Date() { },
            screen: {},
            setTimeout: function setTimeout() { },
            clearTimeout: function clearTimeout() { },
        };
    } else {
        // eslint-disable-next-line
        w = window;
    }

    var win = w;

    /**
     * Dom7 2.0.3
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2018, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: February 21, 2018
     */

    var Dom7 = function Dom7(arr) {
        var self = this;
        // Create array-like object
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        // Return collection with methods
        return this;
    };

    function $(selector, context) {
        var arr = [];
        var i = 0;
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            // String
            if (typeof selector === 'string') {
                var els;
                var tempParent;
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
                    if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
                    if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
                    if (html.indexOf('<option') === 0) { toCreate = 'select'; }
                    tempParent = doc.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        // Pure ID selector
                        els = [doc.getElementById(selector.trim().split('#')[1])];
                    } else {
                        // Other selectors
                        els = (context || doc).querySelectorAll(selector.trim());
                    }
                    for (i = 0; i < els.length; i += 1) {
                        if (els[i]) { arr.push(els[i]); }
                    }
                }
            } else if (selector.nodeType || selector === win || selector === doc) {
                // Node/element
                arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
                // Array of elements or instance of Dom
                for (i = 0; i < selector.length; i += 1) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }

    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
        var uniqueArray = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
        }
        return uniqueArray;
    }

    // Classes and attributes
    function addClass(className) {
        var this$1 = this;

        if (typeof className === 'undefined') {
            return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); }
            }
        }
        return this;
    }
    function removeClass(className) {
        var this$1 = this;

        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); }
            }
        }
        return this;
    }
    function hasClass(className) {
        if (!this[0]) { return false; }
        return this[0].classList.contains(className);
    }
    function toggleClass(className) {
        var this$1 = this;

        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); }
            }
        }
        return this;
    }
    function attr(attrs, value) {
        var arguments$1 = arguments;
        var this$1 = this;

        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) { return this[0].getAttribute(attrs); }
            return undefined;
        }

        // Set attrs
        for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
                // String
                this$1[i].setAttribute(attrs, value);
            } else {
                // Object
                // eslint-disable-next-line
                for (var attrName in attrs) {
                    this$1[i][attrName] = attrs[attrName];
                    this$1[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        return this;
    }
    // eslint-disable-next-line
    function removeAttr(attr) {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].removeAttribute(attr);
        }
        return this;
    }
    function data(key, value) {
        var this$1 = this;

        var el;
        if (typeof value === 'undefined') {
            el = this[0];
            // Get value
            if (el) {
                if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                    return el.dom7ElementDataStorage[key];
                }

                var dataKey = el.getAttribute(("data-" + key));
                if (dataKey) {
                    return dataKey;
                }
                return undefined;
            }
            return undefined;
        }

        // Set value
        for (var i = 0; i < this.length; i += 1) {
            el = this$1[i];
            if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
            el.dom7ElementDataStorage[key] = value;
        }
        return this;
    }
    // Transforms
    // eslint-disable-next-line
    function transform(transform) {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
        }
        return this;
    }
    function transition(duration) {
        var this$1 = this;

        if (typeof duration !== 'string') {
            duration = duration + "ms"; // eslint-disable-line
        }
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
        }
        return this;
    }
    // Events
    function on() {
        var this$1 = this;
        var assign;

        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) { return; }
            var eventData = e.target.dom7EventData || [];
            eventData.unshift(e);
            if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
            else {
                var parents = $(target).parents(); // eslint-disable-line
                for (var k = 0; k < parents.length; k += 1) {
                    if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
                }
            }
        }
        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            eventData.unshift(e);
            listener.apply(this, eventData);
        }
        var events = eventType.split(' ');
        var j;
        for (var i = 0; i < this.length; i += 1) {
            var el = this$1[i];
            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    if (!el.dom7Listeners) { el.dom7Listeners = []; }
                    el.dom7Listeners.push({
                        type: eventType,
                        listener: listener,
                        proxyListener: handleEvent,
                    });
                    el.addEventListener(events[j], handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    if (!el.dom7LiveListeners) { el.dom7LiveListeners = []; }
                    el.dom7LiveListeners.push({
                        type: eventType,
                        listener: listener,
                        proxyListener: handleLiveEvent,
                    });
                    el.addEventListener(events[j], handleLiveEvent, capture);
                }
            }
        }
        return this;
    }
    function off() {
        var this$1 = this;
        var assign;

        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) { capture = false; }

        var events = eventType.split(' ');
        for (var i = 0; i < events.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                var el = this$1[j];
                if (!targetSelector) {
                    if (el.dom7Listeners) {
                        for (var k = 0; k < el.dom7Listeners.length; k += 1) {
                            if (listener) {
                                if (el.dom7Listeners[k].listener === listener) {
                                    el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
                                }
                            } else if (el.dom7Listeners[k].type === events[i]) {
                                el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
                            }
                        }
                    }
                } else if (el.dom7LiveListeners) {
                    for (var k$1 = 0; k$1 < el.dom7LiveListeners.length; k$1 += 1) {
                        if (listener) {
                            if (el.dom7LiveListeners[k$1].listener === listener) {
                                el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
                            }
                        } else if (el.dom7LiveListeners[k$1].type === events[i]) {
                            el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
                        }
                    }
                }
            }
        }
        return this;
    }
    function trigger() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var events = args[0].split(' ');
        var eventData = args[1];
        for (var i = 0; i < events.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                var evt = (void 0);
                try {
                    evt = new win.CustomEvent(events[i], {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true,
                    });
                } catch (e) {
                    evt = doc.createEvent('Event');
                    evt.initEvent(events[i], true, true);
                    evt.detail = eventData;
                }
                // eslint-disable-next-line
                this$1[j].dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
                this$1[j].dispatchEvent(evt);
                this$1[j].dom7EventData = [];
                delete this$1[j].dom7EventData;
            }
        }
        return this;
    }
    function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;
        function fireCallBack(e) {
            /* jshint validthis:true */
            if (e.target !== this) { return; }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i += 1) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }
    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
            return this[0].offsetWidth;
        }
        return null;
    }
    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                // eslint-disable-next-line
                var styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
            return this[0].offsetHeight;
        }
        return null;
    }
    function offset() {
        if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = doc.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === win ? win.scrollY : el.scrollTop;
            var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
            return {
                top: (box.top + scrollTop) - clientTop,
                left: (box.left + scrollLeft) - clientLeft,
            };
        }

        return null;
    }
    function styles() {
        if (this[0]) { return win.getComputedStyle(this[0], null); }
        return {};
    }
    function css(props, value) {
        var this$1 = this;

        var i;
        if (arguments.length === 1) {
            if (typeof props === 'string') {
                if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
            } else {
                for (i = 0; i < this.length; i += 1) {
                    // eslint-disable-next-line
                    for (var prop in props) {
                        this$1[i].style[prop] = props[prop];
                    }
                }
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === 'string') {
            for (i = 0; i < this.length; i += 1) {
                this$1[i].style[props] = value;
            }
            return this;
        }
        return this;
    }
    // Iterate over the collection passing elements to `callback`
    function each(callback) {
        var this$1 = this;

        // Don't bother continuing without a callback
        if (!callback) { return this; }
        // Iterate over the current collection
        for (var i = 0; i < this.length; i += 1) {
            // If the callback returns false
            if (callback.call(this$1[i], i, this$1[i]) === false) {
                // End the loop early
                return this$1;
            }
        }
        // Return `this` to allow chained DOM operations
        return this;
    }
    // eslint-disable-next-line
    function html(html) {
        var this$1 = this;

        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : undefined;
        }

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].innerHTML = html;
        }
        return this;
    }
    // eslint-disable-next-line
    function text(text) {
        var this$1 = this;

        if (typeof text === 'undefined') {
            if (this[0]) {
                return this[0].textContent.trim();
            }
            return null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this$1[i].textContent = text;
        }
        return this;
    }
    function is(selector) {
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') { return false; }
        if (typeof selector === 'string') {
            if (el.matches) { return el.matches(selector); }
            else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
            else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        } else if (selector === doc) { return el === doc; }
        else if (selector === win) { return el === win; }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) { return true; }
            }
            return false;
        }
        return false;
    }
    function index() {
        var child = this[0];
        var i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) { i += 1; }
            }
            return i;
        }
        return undefined;
    }
    // eslint-disable-next-line
    function eq(index) {
        if (typeof index === 'undefined') { return this; }
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
            return new Dom7([]);
        }
        if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) { return new Dom7([]); }
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
    }
    function append() {
        var this$1 = this;
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var newChild;

        for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = doc.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this$1[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this$1[i].appendChild(newChild[j]);
                    }
                } else {
                    this$1[i].appendChild(newChild);
                }
            }
        }

        return this;
    }
    function prepend(newChild) {
        var this$1 = this;

        var i;
        var j;
        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = doc.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
                }
            } else {
                this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
            }
        }
        return this;
    }
    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return new Dom7([this[0].nextElementSibling]);
                }
                return new Dom7([]);
            }

            if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.nextElementSibling) {
            var next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if ($(next).is(selector)) { nextEls.push(next); }
            } else { nextEls.push(next); }
            el = next;
        }
        return new Dom7(nextEls);
    }
    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];
            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return new Dom7([el.previousElementSibling]);
                }
                return new Dom7([]);
            }

            if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
            return new Dom7([]);
        }
        return new Dom7([]);
    }
    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) { return new Dom7([]); }
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if ($(prev).is(selector)) { prevEls.push(prev); }
            } else { prevEls.push(prev); }
            el = prev;
        }
        return new Dom7(prevEls);
    }
    function parent(selector) {
        var this$1 = this;

        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode !== null) {
                if (selector) {
                    if ($(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); }
                } else {
                    parents.push(this$1[i].parentNode);
                }
            }
        }
        return $(unique(parents));
    }
    function parents(selector) {
        var this$1 = this;

        var parents = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var parent = this$1[i].parentNode; // eslint-disable-line
            while (parent) {
                if (selector) {
                    if ($(parent).is(selector)) { parents.push(parent); }
                } else {
                    parents.push(parent);
                }
                parent = parent.parentNode;
            }
        }
        return $(unique(parents));
    }
    function closest(selector) {
        var closest = this; // eslint-disable-line
        if (typeof selector === 'undefined') {
            return new Dom7([]);
        }
        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }
        return closest;
    }
    function find(selector) {
        var this$1 = this;

        var foundElements = [];
        for (var i = 0; i < this.length; i += 1) {
            var found = this$1[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }
        return new Dom7(foundElements);
    }
    function children(selector) {
        var this$1 = this;

        var children = []; // eslint-disable-line
        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this$1[i].childNodes;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector) {
                    if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
                } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }
        return new Dom7(unique(children));
    }
    function remove() {
        var this$1 = this;

        for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); }
        }
        return this;
    }
    function add() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var dom = this;
        var i;
        var j;
        for (i = 0; i < args.length; i += 1) {
            var toAdd = $(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
                dom[dom.length] = toAdd[j];
                dom.length += 1;
            }
        }
        return dom;
    }

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        remove: remove,
        add: add,
        styles: styles,
    };

    Object.keys(Methods).forEach(function (methodName) {
        $.fn[methodName] = Methods[methodName];
    });

    var Utils = {
        deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function (key) {
                try {
                    object[key] = null;
                } catch (e) {
                    // no getter for object
                }
                try {
                    delete object[key];
                } catch (e) {
                    // something got wrong
                }
            });
        },
        nextTick: function nextTick(callback, delay) {
            if (delay === void 0) delay = 0;

            return setTimeout(callback, delay);
        },
        now: function now() {
            return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
            if (axis === void 0) axis = 'x';

            var matrix;
            var curTransform;
            var transformMatrix;

            var curStyle = win.getComputedStyle(el, null);

            if (win.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
                    // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
                    // Normal Browsers
                else { curTransform = parseFloat(matrix[4]); }
            }
            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
                    // Crazy IE10 Matrix
                else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
                    // Normal Browsers
                else { curTransform = parseFloat(matrix[5]); }
            }
            return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
                length = params.length;

                for (i = 0; i < length; i += 1) {
                    param = params[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                }
            }
            return query;
        },
        isObject: function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
            var args = [], len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];

            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null) {
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }
            return to;
        },
    };

    var Support = (function Support() {
        var testDiv = doc.createElement('div');
        return {
            touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
                return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            }()),

            pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent),
            prefixedPointerEvents: !!win.navigator.msPointerEnabled,

            transition: (function checkTransition() {
                var style = testDiv.style;
                return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
            }()),
            transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
                var style = testDiv.style;
                return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
            }()),

            flexbox: (function checkFlexbox() {
                var style = testDiv.style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i += 1) {
                    if (styles[i] in style) { return true; }
                }
                return false;
            }()),

            observer: (function checkObserver() {
                return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
            }()),

            passiveListener: (function checkPassiveListener() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        // eslint-disable-next-line
                        get: function get() {
                            supportsPassive = true;
                        },
                    });
                    win.addEventListener('testPassiveListener', null, opts);
                } catch (e) {
                    // No support
                }
                return supportsPassive;
            }()),

            gestures: (function checkGestures() {
                return 'ongesturestart' in win;
            }()),
        };
    }());

    var SwiperClass = function SwiperClass(params) {
        if (params === void 0) params = {};

        var self = this;
        self.params = params;

        // Events
        self.eventsListeners = {};

        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function (eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    };

    var staticAccessors = { components: { configurable: true } };
    SwiperClass.prototype.on = function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
            if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
            self.eventsListeners[event][method](handler);
        });
        return self;
    };
    SwiperClass.prototype.once = function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') { return self; }
        function onceHandler() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];

            handler.apply(self, args);
            self.off(events, onceHandler);
        }
        return self.on(events, onceHandler, priority);
    };
    SwiperClass.prototype.off = function off(events, handler) {
        var self = this;
        events.split(' ').forEach(function (event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else {
                self.eventsListeners[event].forEach(function (eventHandler, index) {
                    if (eventHandler === handler) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.emit = function emit() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var self = this;
        if (!self.eventsListeners) { return self; }
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
            if (self.eventsListeners[event]) {
                var handlers = [];
                self.eventsListeners[event].forEach(function (eventHandler) {
                    handlers.push(eventHandler);
                });
                handlers.forEach(function (eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };
    SwiperClass.prototype.useModules = function useModules(modulesParams) {
        if (modulesParams === void 0) modulesParams = {};

        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
                Object.keys(module.instance).forEach(function (modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            // Add event listeners
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function (moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }

            // Module create callback
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };
    staticAccessors.components.set = function (components) {
        var Class = this;
        if (!Class.use) { return; }
        Class.use(components);
    };
    SwiperClass.installModule = function installModule(module) {
        var params = [], len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];

        var Class = this;
        if (!Class.prototype.modules) { Class.prototype.modules = {}; }
        var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
        Class.prototype.modules[name] = module;
        // Prototype
        if (module.proto) {
            Object.keys(module.proto).forEach(function (key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        // Class
        if (module.static) {
            Object.keys(module.static).forEach(function (key) {
                Class[key] = module.static[key];
            });
        }
        // Callback
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };
    SwiperClass.use = function use(module) {
        var params = [], len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];

        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function (m) { return Class.installModule(m); });
            return Class;
        }
        return Class.installModule.apply(Class, [module].concat(params));
    };

    Object.defineProperties(SwiperClass, staticAccessors);

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;
        if (typeof swiper.params.width !== 'undefined') {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined') {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return;
        }

        // Subtract paddings
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

        Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
        });
    }

    function updateSlides() {
        var swiper = this;
        var params = swiper.params;

        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtlTranslate;
        var wrongRTL = swiper.wrongRTL;
        var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        var offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSlidesLength = slidesLength;
        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;

        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
        }

        swiper.virtualSize = -spaceBetween;

        // reset margins
        if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
        else { slides.css({ marginRight: '', marginBottom: '' }); }

        var slidesNumberEvenToRows;
        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }
            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        }

        // Calc slides
        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = (void 0);
                var column = (void 0);
                var row = (void 0);
                if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - (column * slidesPerColumn);
                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                        row += 1;
                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                    newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                    slide
                      .css({
                          '-webkit-box-ordinal-group': newSlideOrderIndex,
                          '-moz-box-ordinal-group': newSlideOrderIndex,
                          '-ms-flex-order': newSlideOrderIndex,
                          '-webkit-order': newSlideOrderIndex,
                          order: newSlideOrderIndex,
                      });
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - (row * slidesPerRow);
                }
                slide
                  .css(
                    ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
                    (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
                  )
                  .attr('data-swiper-column', column)
                  .attr('data-swiper-row', row);
            }
            if (slide.css('display') === 'none') { continue; } // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                var slideStyles = win.getComputedStyle(slide[0], null);
                if (swiper.isHorizontal()) {
                    slideSize = slide[0].getBoundingClientRect().width +
                      parseFloat(slideStyles.getPropertyValue('margin-left')) +
                      parseFloat(slideStyles.getPropertyValue('margin-right'));
                } else {
                    slideSize = slide[0].getBoundingClientRect().height +
                      parseFloat(slideStyles.getPropertyValue('margin-top')) +
                      parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                }
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }
            } else {
                slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                if (params.roundLengths) { slideSize = Math.floor(slideSize); }

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);


            if (params.centeredSlides) {
                slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
            } else {
                if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;

            prevSlideSize = slideSize;

            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (
          rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
        }
        if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            if (params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                    if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(snapGrid[i$1]); }
                }
                snapGrid = newSlidesGrid;
            }
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(snapGrid[i$2]);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (snapGrid.length === 0) { snapGrid = [0]; }

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
                else { slides.css({ marginRight: (spaceBetween + "px") }); }
            } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
        }

        Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid,
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView) ; i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length) { break; }
                activeSlides.push(swiper.slides.eq(index)[0]);
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }

        // Update Height
        if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) translate = this.translate || 0;

        var swiper = this;
        var params = swiper.params;

        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;

        if (slides.length === 0) { return; }
        if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

        var offsetCenter = -translate;
        if (rtl) { offsetCenter = translate; }

        // Visible Slides
        slides.removeClass(params.slideVisibleClass);

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress =
              (
                (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
              ) / (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible =
                          (slideBefore >= 0 && slideBefore < swiper.size) ||
                          (slideAfter > 0 && slideAfter <= swiper.size) ||
                          (slideBefore <= 0 && slideAfter >= swiper.size);
                if (isVisible) {
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
        }
    }

    function updateProgress(translate) {
        if (translate === void 0) translate = this.translate || 0;

        var swiper = this;
        var params = swiper.params;

        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / (translatesDiff);
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd,
        });

        if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;

        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;

        slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

        var activeSlide;
        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
        } else {
            activeSlide = slides.eq(activeIndex);
        }

        // Active classes
        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                  .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
                  .addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl
                  .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
                  .addClass(params.slideDuplicateActiveClass);
            }
        }
        // Next Slide
        var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        }
        // Prev Slide
        var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                  .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                  .addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl
                  .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
                  .addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl
                  .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                  .addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl
                  .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
                  .addClass(params.slideDuplicatePrevClass);
            }
        }
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;
        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            }
            // Normalize slideIndex
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
            }
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }

        // Get real index
        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

        Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex,
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest(("." + (params.slideClass)))[0];
        var slideFound = false;
        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) { slideFound = true; }
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide,
    };

    function getTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';

        var swiper = this;

        var params = swiper.params;
        var rtl = swiper.rtlTranslate;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
        if (rtl) { currentTranslate = -currentTranslate; }

        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (!params.virtualTranslate) {
            if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
            else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
        }

        swiper.translate = swiper.isHorizontal() ? x : y;

        // Check if we need to update progress
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return (-this.snapGrid[0]);
    }

    function maxTranslate() {
        return (-this.snapGrid[this.snapGrid.length - 1]);
    }

    var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
    };

    function setTransition(duration, byController) {
        var swiper = this;

        swiper.$wrapperEl.transition(duration);

        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }

        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) { dir = 'next'; }
            else if (activeIndex < previousIndex) { dir = 'prev'; }
            else { dir = 'reset'; }
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }
            swiper.emit('slideChangeTransitionStart');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        swiper.animating = false;
        swiper.setTransition(0);

        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) { dir = 'next'; }
            else if (activeIndex < previousIndex) { dir = 'prev'; }
            else { dir = 'reset'; }
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }
            swiper.emit('slideChangeTransitionEnd');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1,
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) { slideIndex = 0; }

        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        if (swiper.animating && params.preventIntercationOnTransition) {
            return false;
        }

        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex];

        // Update progress
        swiper.updateProgress(translate);

        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) { return false; }
            }
        }

        var direction;
        if (slideIndex > activeIndex) { direction = 'next'; }
        else if (slideIndex < activeIndex) { direction = 'prev'; }
        else { direction = 'reset'; }


        // Update Index
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }

        if (speed === 0 || !Support.transition) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (!swiper.animating) {
                swiper.animating = true;
                $wrapperEl.transitionEnd(function () {
                    if (!swiper || swiper.destroyed) { return; }
                    swiper.transitionEnd(runCallbacks, direction);
                });
            }
        }

        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var newIndex = index;
        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;

        if (params.loop) {
            if (animating) { return false; }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;

        var swiper = this;
        var index = swiper.activeIndex;
        var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

        if (snapIndex < swiper.snapGrid.length - 1) {
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
                index = swiper.params.slidesPerGroup;
            }
        }

        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;

        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;
        if (params.loop) {
            if (swiper.animating) { return; }
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if (
                  (slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) ||
                  (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
                ) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl
                      .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                      .eq(0)
                      .index();

                    Utils.nextTick(function () {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl
                  .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
                  .eq(0)
                  .index();

                Utils.nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide,
    };

    function loopCreate() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        // Remove duplicated slides
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

        var slides = $wrapperEl.children(("." + (params.slideClass)));

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                    $wrapperEl.append(blankNode);
                }
                slides = $wrapperEl.children(("." + (params.slideClass)));
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

        swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (index, el) {
            var slide = $(el);
            if (index < swiper.loopedSlides) { appendSlides.push(el); }
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
            slide.attr('data-swiper-slide-index', index);
        });
        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var snapGrid = swiper.snapGrid;
        var rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;

        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate();


        // Fix For Negative Oversliding
        if (activeIndex < loopedSlides) {
            newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex > slides.length - (params.slidesPerView * 2))) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged$1 && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
        slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy,
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (Support.touch || !swiper.params.simulateTouch) { return; }
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;
        if (Support.touch) { return; }
        swiper.el.style.cursor = '';
    }

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor,
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        if (params.loop) {
            swiper.loopDestroy();
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.append(slides[i]); }
            }
        } else {
            $wrapperEl.append(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }
        var newActiveIndex = activeIndex + 1;
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) { $wrapperEl.prepend(slides[i]); }
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var newActiveIndex = activeIndex;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
                if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
            if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;

        var slidesIndexes = [];
        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
    };

    var Device = (function Device() {
        var ua = win.navigator.userAgent;

        var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap,
        };

        var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


        // Windows
        if (windows) {
            device.os = 'windows';
            device.osVersion = windows[2];
            device.windows = true;
        }
        // Android
        if (android && !windows) {
            device.os = 'android';
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        // iOS
        if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, '.');
            device.iphone = true;
        }
        if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, '.');
            device.ipad = true;
        }
        if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            device.iphone = true;
        }
        // iOS 8+ changed UA
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
            if (device.osVersion.split('.')[0] === '10') {
                device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
            }
        }

        // Desktop
        device.desktop = !(device.os || device.android || device.webView);

        // Webview
        device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

        // Minimal UI
        if (device.os && device.os === 'ios') {
            var osVersionArr = device.osVersion.split('.');
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi =
              !device.webView &&
              (ipod || iphone) &&
              (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
              metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
        }

        // Pixel Ratio
        device.pixelRatio = win.devicePixelRatio || 1;

        // Export object
        return device;
    }());

    function onTouchStart(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        if (swiper.animating && params.preventIntercationOnTransition) {
            return;
        }
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
        if (data.isTouched && data.isMoved) { return; }
        if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$(e).closest(params.swipeHandler)[0]) { return; }
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY;

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

        if (
          Device.ios &&
          !Device.cordova &&
          params.iOSEdgeSwipeDetection &&
          (startX <= params.iOSEdgeSwipeThreshold) &&
          (startX >= win.screen.width - params.iOSEdgeSwipeThreshold)
        ) {
            return;
        }

        Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
        });

        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) { data.allowThresholdMove = false; }
        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($(e.target).is(data.formElements)) { preventDefault = false; }
            if (
              doc.activeElement &&
              $(doc.activeElement).is(data.formElements) &&
              doc.activeElement !== e.target
            ) {
                doc.activeElement.blur();
            }
            if (preventDefault && swiper.allowTouchMove) {
                e.preventDefault();
            }
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        if (data.isTouchEvent && e.type === 'mousemove') { return; }
        var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;
            if (data.isTouched) {
                Utils.extend(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                });
                data.touchStartTime = Utils.now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (
                  (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
                  (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
                ) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (
              (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
              (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
            ) {
                return;
            }
        }
        if (data.isTouchEvent && doc.activeElement) {
            if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) { return; }

        touches.currentX = pageX;
        touches.currentY = pageY;

        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;
            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if ((diffX * diffX) + (diffY * diffY) >= 25) {
                    touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;

        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;

        diff *= params.touchRatio;
        if (rtl) { diff = -diff; }

        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;

        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow((-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio)); }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow((swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio)); }
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }


        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger) { return; }

        // Update active index in free mode
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime,
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: Utils.now(),
            });
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;

        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) { e = e.originalEvent; }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }

        // Time diff
        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime;

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap', e);
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                data.clickTimeout = Utils.nextTick(function () {
                    if (!swiper || swiper.destroyed) { return; }
                    swiper.emit('click', e);
                }, 300);
            }
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                swiper.emit('doubleTap', e);
            }
        }

        data.lastClickTime = Utils.now();
        Utils.nextTick(function () {
            if (!swiper.destroyed) { swiper.allowClick = true; }
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;

        var currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }

        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            } else if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();

                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeModeMomentumVelocityRatio;

                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;

                var newPosition = swiper.translate + momentumDistance;
                if (rtl) { newPosition = -newPosition; }

                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                } else if (params.freeModeSticky) {
                    var nextSlide;
                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }

                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
                        swiper.emit('momentumBounce');

                        swiper.setTransition(params.speed);
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) { return; }
                            swiper.transitionEnd();
                        });
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) { return; }
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            return;
        }

        // Find current slide
        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];
        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }

        // Find current slide size
        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                else { swiper.slideTo(stopIndex); }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;

        var params = swiper.params;
        var el = swiper.el;

        if (el && el.offsetWidth === 0) { return; }

        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }

        // Save locks
        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;

        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;

        swiper.updateSize();
        swiper.updateSlides();

        if (params.freeMode) {
            var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                //swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    }

    function onClick(e) {
        var swiper = this;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) { e.preventDefault(); }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function attachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
                    target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.onTouchStart, false);
                    doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.addEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.on('resize observerUpdate', onResize, true);
    }

    function detachEvents() {
        var swiper = this;

        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;

        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested;

        // Touch Events
        {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.onTouchStart, false);
                    doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
                target.removeEventListener('click', swiper.onClick, true);
            }
        }

        // Resize handler
        swiper.off('resize observerUpdate', onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents,
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var loopedSlides = swiper.loopedSlides; if (loopedSlides === void 0) loopedSlides = 0;
        var params = swiper.params;
        var breakpoints = params.breakpoints;
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
        // Set breakpoint for window width and update parameters
        var breakpoint = swiper.getBreakpoint(breakpoints);
        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
            var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);

            Utils.extend(swiper.params, breakPointsParams);

            Utils.extend(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });

            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakPointsParams);
        }
    }

    function getBreakpoint(breakpoints) {
        // Get breakpoint for window width
        if (!breakpoints) { return undefined; }
        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function (point) {
            points.push(point);
        });
        points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
        for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (point >= win.innerWidth && !breakpoint) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }

    var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

    var Browser = (function Browser() {
        function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        return {
            isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
        };
    }());

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];

        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }
        if (!Support.flexbox) {
            suffixes.push('no-flexbox');
        }
        if (params.autoHeight) {
            suffixes.push('autoheight');
        }
        if (rtl) {
            suffixes.push('rtl');
        }
        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');
        }
        if (Device.android) {
            suffixes.push('android');
        }
        if (Device.ios) {
            suffixes.push('ios');
        }
        // WP8 Touch Events Fix
        if (Browser.isIE && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            suffixes.push(("wp8-" + (params.direction)));
        }

        suffixes.forEach(function (suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });

        $el.addClass(classNames.join(' '));
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;

        $el.removeClass(classNames.join(' '));
    }

    var classes = { addClasses: addClasses, removeClasses: removeClasses };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;
        function onReady() {
            if (callback) { callback(); }
        }
        if (!imageEl.complete || !checkForComplete) {
            if (src) {
                image = new win.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                    image.sizes = sizes;
                }
                if (srcset) {
                    image.srcset = srcset;
                }
                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');
        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
            if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) { swiper.update(); }
                swiper.emit('imagesReady');
            }
        }
        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(
              imageEl,
              imageEl.currentSrc || imageEl.getAttribute('src'),
              imageEl.srcset || imageEl.getAttribute('srcset'),
              imageEl.sizes || imageEl.getAttribute('sizes'),
              true,
              onReady
            );
        }
    }

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages,
    };

    function checkOverflow() {
        var swiper = this;
        var wasLocked = swiper.isLocked;

        swiper.isLocked = swiper.snapGrid.length === 1;
        swiper.allowTouchMove = !swiper.isLocked;

        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            swiper.navigation.update();
        }
    }

    var checkOverflow$1 = { checkOverflow: checkOverflow };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        //
        preventIntercationOnTransition: false,

        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 20,

        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,

        // Autoheight
        autoHeight: false,

        // Set wrapper width
        setWrapperSize: false,

        // Virtual Translate
        virtualTranslate: false,

        // Effects
        effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,

        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0, // in px
        slidesOffsetAfter: 0, // in px
        normalizeSlideIndex: true,

        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,

        // Round length
        roundLengths: false,

        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchReleaseOnEdges: false,

        // Unique Navigation Elements
        uniqueNavElements: true,

        // Resistance
        resistance: true,
        resistanceRatio: 0.85,

        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Cursor
        grabCursor: false,

        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,

        // Images
        preloadImages: true,
        updateOnImagesReady: true,

        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,

        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null, // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,

        // Passive Listeners
        passiveListeners: true,

        // NS
        containerModifierClass: 'swiper-container-', // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',

        // Callbacks
        runCallbacksOnInit: true,
    };

    var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images,
    };

    var extendedDefaults = {};

    var Swiper = (function (SwiperClass$$1) {
        function Swiper() {
            var assign;

            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            var el;
            var params;
            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                (assign = args, el = assign[0], params = assign[1]);
            }
            if (!params) { params = {}; }

            params = Utils.extend({}, params);
            if (el && !params.el) { params.el = el; }

            SwiperClass$$1.call(this, params);

            Object.keys(prototypes).forEach(function (prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });

            // Swiper Instance
            var swiper = this;
            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }
            Object.keys(swiper.modules).forEach(function (moduleName) {
                var module = swiper.modules[moduleName];
                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object') { return; }
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = { enabled: true };
                    }
                    if (
                      typeof params[moduleParamName] === 'object' &&
                      !('enabled' in params[moduleParamName])
                    ) {
                        params[moduleParamName].enabled = true;
                    }
                    if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
                }
            });

            // Extend defaults with modules params
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);

            // Extend defaults with passed params
            swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);

            // Save Dom lib
            swiper.$ = $;

            // Find el
            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function (index, containerEl) {
                    var newParams = Utils.extend({}, params, { el: containerEl });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper;
            $el.data('swiper', swiper);

            // Find Wrapper
            var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

            // Extend Swiper
            Utils.extend(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],

                // Classes
                classNames: [],

                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],

                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',

                // Indexes
                activeIndex: 0,
                realIndex: 0,

                //
                isBeginning: true,
                isEnd: false,

                // Props
                translate: 0,
                progress: 0,
                velocity: 0,
                animating: false,

                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,

                // Touch Events
                touchEvents: (function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];
                    if (Support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    } else if (Support.prefixedPointerEvents) {
                        desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                    }
                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2],
                    };
                    return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }()),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, option, textarea, button, video',
                    // Last click time
                    lastClickTime: Utils.now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined,
                },

                // Clicks
                allowClick: true,

                // Touches
                allowTouchMove: swiper.params.allowTouchMove,

                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },

                // Images
                imagesToLoad: [],
                imagesLoaded: 0,

            });

            // Install Modules
            swiper.useModules();

            // Init
            if (swiper.params.init) {
                swiper.init();
            }

            // Return app instance
            return swiper;
        }

        if (SwiperClass$$1) Swiper.__proto__ = SwiperClass$$1;
        Swiper.prototype = Object.create(SwiperClass$$1 && SwiperClass$$1.prototype);
        Swiper.prototype.constructor = Swiper;

        var staticAccessors = { extendedDefaults: { configurable: true }, defaults: { configurable: true }, Class: { configurable: true }, $: { configurable: true } };
        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;
                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
                for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                    if (slides[i$1] && !breakLoop) {
                        slideSize += slides[i$1].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) { breakLoop = true; }
                    }
                }
            } else {
                for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                    if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }
            return spv;
        };
        Swiper.prototype.update = function update$$1() {
            var swiper = this;
            if (!swiper || swiper.destroyed) { return; }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
                setTranslate();
                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            swiper.emit('update');
        };
        Swiper.prototype.init = function init() {
            var swiper = this;
            if (swiper.initialized) { return; }

            swiper.emit('beforeInit');

            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate();
            }

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }

            // Set Grab Cursor
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            }

            // Slide To Initial Slide
            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            }

            // Attach events
            swiper.attachEvents();

            // Init Flag
            swiper.initialized = true;

            // Emit
            swiper.emit('init');
        };
        Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;

            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            swiper.emit('beforeDestroy');

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                    slides
                      .removeClass([
                        params.slideVisibleClass,
                        params.slideActiveClass,
                        params.slideNextClass,
                        params.slidePrevClass].join(' '))
                      .removeAttr('style')
                      .removeAttr('data-swiper-slide-index')
                      .removeAttr('data-swiper-column')
                      .removeAttr('data-swiper-row');
                }
            }

            swiper.emit('destroy');

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(function (eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                swiper.$el.data('swiper', null);
                Utils.deleteProps(swiper);
            }
            swiper.destroyed = true;
        };
        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
        };
        staticAccessors.extendedDefaults.get = function () {
            return extendedDefaults;
        };
        staticAccessors.defaults.get = function () {
            return defaults;
        };
        staticAccessors.Class.get = function () {
            return SwiperClass$$1;
        };
        staticAccessors.$.get = function () {
            return $;
        };

        Object.defineProperties(Swiper, staticAccessors);

        return Swiper;
    }(SwiperClass));

    var Device$1 = {
        name: 'device',
        proto: {
            device: Device,
        },
        static: {
            device: Device,
        },
    };

    var Support$1 = {
        name: 'support',
        proto: {
            support: Support,
        },
        static: {
            support: Support,
        },
    };

    var Browser$1 = {
        name: 'browser',
        proto: {
            browser: Browser,
        },
        static: {
            browser: Browser,
        },
    };

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                        swiper.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                // Emit resize
                win.addEventListener('resize', swiper.resize.resizeHandler);

                // Emit orientationchange
                win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy() {
                var swiper = this;
                win.removeEventListener('resize', swiper.resize.resizeHandler);
                win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
        },
    };

    var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
            if (options === void 0) options = {};

            var swiper = this;

            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    swiper.emit('observerUpdate', mutation);
                });
            });

            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            });

            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) { return; }
            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();
                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            }
            // Observe container
            swiper.observer.attach(swiper.$el[0], { childList: false });

            // Observe wrapper
            swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function (observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        },
    };

    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                observer: {
                    init: Observer.init.bind(swiper),
                    attach: Observer.attach.bind(swiper),
                    destroy: Observer.destroy.bind(swiper),
                    observers: [],
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.observer.init();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.destroy();
            },
        },
    };

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.virtual;
            var previousFrom = ref$1.from;
            var previousTo = ref$1.to;
            var slides = ref$1.slides;
            var previousSlidesGrid = ref$1.slidesGrid;
            var renderSlide = ref$1.renderSlide;
            var previousOffset = ref$1.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;

            var offsetProp;
            if (swiper.rtlTranslate) { offsetProp = 'right'; }
            else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1);
                slidesBefore = slidesPerGroup;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

            Utils.extend(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid,
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, (offset + "px"));
                }
                swiper.updateProgress();
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: (function getSlides() {
                        var slidesToRender = [];
                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()),
                });
                onRendered();
                return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
                swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
                    }
                }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (i$1 >= from && i$1 <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(i$1);
                    } else {
                        if (i$1 > previousTo) { appendIndexes.push(i$1); }
                        if (i$1 < previousFrom) { prependIndexes.push(i$1); }
                    }
                }
            }
            appendIndexes.forEach(function (index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function (a, b) { return a < b; }).forEach(function (index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide
              ? $(params.renderSlide.call(swiper, slide, index))
              : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
            if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
            if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
            return $slideEl;
        },
        appendSlide: function appendSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.push(slide);
            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.unshift(slide);
            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function (cachedIndex) {
                    newCache[cachedIndex + 1] = cache[cachedIndex];
                });
                swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideNext(0);
        },
    };

    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                virtual: {
                    update: Virtual.update.bind(swiper),
                    appendSlide: Virtual.appendSlide.bind(swiper),
                    prependSlide: Virtual.prependSlide.bind(swiper),
                    renderSlide: Virtual.renderSlide.bind(swiper),
                    slides: swiper.params.virtual.slides,
                    cache: {},
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                var overwriteParams = {
                    watchSlidesProgress: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);

                swiper.virtual.update();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) { return; }
                swiper.virtual.update();
            },
        },
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
                return false;
            }
            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
                var inView = false;
                // Check that swiper should be inside of visible area of window
                if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
                    return undefined;
                }
                var windowWidth = win.innerWidth;
                var windowHeight = win.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
                var swiperCoord = [
                  [swiperOffset.left, swiperOffset.top],
                  [swiperOffset.left + swiper.width, swiperOffset.top],
                  [swiperOffset.left, swiperOffset.top + swiper.height],
                  [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (
                      point[0] >= 0 && point[0] <= windowWidth &&
                      point[1] >= 0 && point[1] <= windowHeight
                    ) {
                        inView = true;
                    }
                }
                if (!inView) { return undefined; }
            }
            if (swiper.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
                if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) { e.preventDefault(); }
                    else { e.returnValue = false; }
                }
                if (kc === 40) { swiper.slideNext(); }
                if (kc === 38) { swiper.slidePrev(); }
            }
            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) { return; }
            $(doc).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) { return; }
            $(doc).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        },
    };

    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                keyboard: {
                    enabled: false,
                    enable: Keyboard.enable.bind(swiper),
                    disable: Keyboard.disable.bind(swiper),
                    handle: Keyboard.handle.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            },
        },
    };

    function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;

        if (!isSupported) {
            var element = doc.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported &&
          doc.implementation &&
          doc.implementation.hasFeature &&
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
          doc.implementation.hasFeature('', '') !== true
        ) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }
    var Mousewheel = {
        lastScrollTime: Utils.now(),
        event: (function getEvent() {
            if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
            return isEventSupported() ? 'wheel' : 'mousewheel';
        }()),
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;

            var sX = 0;
            var sY = 0; // spinX, spinY
            var pX = 0;
            var pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) { // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else { // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = (pX < 1) ? -1 : 1;
            }
            if (pY && !sY) {
                sY = (pY < 1) ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY,
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

            if (e.originalEvent) { e = e.originalEvent; } // jquery fix
            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;

            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
                    else { return true; }
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
                else { return true; }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) { return true; }

            if (params.invert) { delta = -delta; }

            if (!swiper.params.freeMode) {
                if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) { return true; }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        swiper.emit('scroll', e);
                    } else if (params.releaseOnEdges) { return true; }
                }
                swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
            } else {
                // Freemode or scrollContainer:
                var position = swiper.getTranslate() + (delta * params.sensitivity);
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;

                if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
                if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();

                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }

                if (swiper.params.freeModeSticky) {
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = Utils.nextTick(function () {
                        swiper.slideToClosest();
                    }, 300);
                }
                // Emit event
                swiper.emit('scroll', e);

                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.stopAutoplay(); }
                // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
            }

            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            return false;
        },
        enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) { return false; }
            if (!swiper.mousewheel.enabled) { return false; }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        },
    };

    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarged: 'container',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                mousewheel: {
                    enabled: false,
                    enable: Mousewheel.enable.bind(swiper),
                    disable: Mousewheel.disable.bind(swiper),
                    handle: Mousewheel.handle.bind(swiper),
                    handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
                    handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
                    lastScrollTime: Utils.now(),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
            },
        },
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }
                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }
                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) { return; }

            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
                $nextEl = $(params.nextEl);
                if (
                  swiper.params.uniqueNavElements &&
                  typeof params.nextEl === 'string' &&
                  $nextEl.length > 1 &&
                  swiper.$el.find(params.nextEl).length === 1
                ) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }
            if (params.prevEl) {
                $prevEl = $(params.prevEl);
                if (
                  swiper.params.uniqueNavElements &&
                  typeof params.prevEl === 'string' &&
                  $prevEl.length > 1 &&
                  swiper.$el.find(params.prevEl).length === 1
                ) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', function (e) {
                    e.preventDefault();
                    if (swiper.isEnd && !swiper.params.loop) { return; }
                    swiper.slideNext();
                });
            }
            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', function (e) {
                    e.preventDefault();
                    if (swiper.isBeginning && !swiper.params.loop) { return; }
                    swiper.slidePrev();
                });
            }

            Utils.extend(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
                $nextEl.off('click');
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off('click');
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        },
    };

    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,

                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                navigation: {
                    init: Navigation.init.bind(swiper),
                    update: Navigation.update.bind(swiper),
                    destroy: Navigation.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.navigation.destroy();
            },
            click: function click(e) {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if (
                  swiper.params.navigation.hideOnClick &&
                  !$(e.target).is($prevEl) &&
                  !$(e.target).is($nextEl)
                ) {
                    if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
                    if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
                }
            },
        },
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            // Current/Total
            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                    current -= (slidesLength - (swiper.loopedSlides * 2));
                }
                if (current > total - 1) { current -= total; }
                if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;
                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
                        if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
                if ($el.length > 1) {
                    bullets.each(function (index, bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(((params.bulletActiveClass) + "-main"));
                            }
                            if (bulletIndex === firstIndex) {
                                $bullet
                                  .prev()
                                  .addClass(((params.bulletActiveClass) + "-prev"))
                                  .prev()
                                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
                            }
                            if (bulletIndex === lastIndex) {
                                $bullet
                                  .next()
                                  .addClass(((params.bulletActiveClass) + "-next"))
                                  .next()
                                  .addClass(((params.bulletActiveClass) + "-next-next"));
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);
                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
                        }
                        $firstDisplayedBullet
                          .prev()
                          .addClass(((params.bulletActiveClass) + "-prev"))
                          .prev()
                          .addClass(((params.bulletActiveClass) + "-prev-prev"));
                        $lastDisplayedBullet
                          .next()
                          .addClass(((params.bulletActiveClass) + "-next"))
                          .next()
                          .addClass(((params.bulletActiveClass) + "-next-next"));
                    }
                }
                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                }
            }
            if (params.type === 'fraction') {
                $el.find(("." + (params.currentClass))).text(current + 1);
                $el.find(("." + (params.totalClass))).text(total);
            }
            if (params.type === 'progressbar') {
                var scale = (current + 1) / total;
                var scaleX = scale;
                var scaleY = 1;
                if (!swiper.isHorizontal()) {
                    scaleY = scale;
                    scaleX = 1;
                }
                $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
            }
            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', swiper, $el[0]);
            } else {
                swiper.emit('paginationUpdate', swiper, $el[0]);
            }
            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

            var $el = swiper.pagination.$el;
            var paginationHTML = '';
            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
                    }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML =
                    "<span class=\"" + (params.currentClass) + "\"></span>" +
                    ' / ' +
                    "<span class=\"" + (params.totalClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) { return; }

            var $el = $(params.el);
            if ($el.length === 0) { return; }

            if (
              swiper.params.uniqueNavElements &&
              typeof params.el === 'string' &&
              $el.length > 1 &&
              swiper.$el.find(params.el).length === 1
            ) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
                swiper.pagination.dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }

            if (params.clickable) {
                $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) { index += swiper.loopedSlides; }
                    swiper.slideTo(index);
                });
            }

            Utils.extend(swiper.pagination, {
                $el: $el,
                el: $el[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
            var $el = swiper.pagination.$el;

            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
            if (params.clickable) {
                $el.off('click', ("." + (params.bulletClass)));
            }
        },
    };

    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-', // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                clickableClass: 'swiper-pagination-clickable', // NEW
                lockClass: 'swiper-pagination-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                pagination: {
                    init: Pagination.init.bind(swiper),
                    render: Pagination.render.bind(swiper),
                    update: Pagination.update.bind(swiper),
                    destroy: Pagination.destroy.bind(swiper),
                    dynamicBulletIndex: 0,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.pagination.destroy();
            },
            click: function click(e) {
                var swiper = this;
                if (
                  swiper.params.pagination.el &&
                  swiper.params.pagination.hideOnClick &&
                  swiper.pagination.$el.length > 0 &&
                  !$(e.target).hasClass(swiper.params.pagination.bulletClass)
                ) {
                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            },
        },
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;

            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
                } else {
                    $dragEl.transform(("translateX(" + newPos + "px)"));
                }
                $dragEl[0].style.width = newSize + "px";
            } else {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
                } else {
                    $dragEl.transform(("translateY(" + newPos + "px)"));
                }
                $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function () {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;

            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }
            if (swiper.params.scrollbarHide) {
                $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize,
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;

            var pointerPosition;
            if (swiper.isHorizontal()) {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
            } else {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
            }
            var positionRatio;
            positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }

            var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            e.preventDefault();
            e.stopPropagation();

            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);

            clearTimeout(swiper.scrollbar.dragTimeout);

            $el.transition(0);
            if (params.hide) {
                $el.css('opacity', 1);
            }
            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;

            if (!swiper.scrollbar.isTouched) { return; }
            if (e.preventDefault) { e.preventDefault(); }
            else { e.returnValue = false; }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;

            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;

            if (!swiper.scrollbar.isTouched) { return; }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }
            swiper.emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var touchEvents = swiper.touchEvents;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListener ? { passive: false, capture: false } : false;
            var passiveListener = Support.passiveListener && params.passiveListener ? { passive: true, capture: false } : false;
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                if (Support.touch) {
                    target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
                    target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
                    target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
                    doc.addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
                    doc.addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
                }
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var touchEvents = swiper.touchEvents;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListener ? { passive: false, capture: false } : false;
            var passiveListener = Support.passiveListener && params.passiveListener ? { passive: true, capture: false } : false;
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                if (Support.touch) {
                    target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
                    target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
                    target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
                    doc.removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
                    doc.removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
                }
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) { return; }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;

            var $el = $(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
            if ($dragEl.length === 0) {
                $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
                $el.append($dragEl);
            }

            Utils.extend(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0],
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        },
    };

    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                scrollbar: {
                    init: Scrollbar.init.bind(swiper),
                    destroy: Scrollbar.destroy.bind(swiper),
                    updateSize: Scrollbar.updateSize.bind(swiper),
                    setTranslate: Scrollbar.setTranslate.bind(swiper),
                    setTransition: Scrollbar.setTransition.bind(swiper),
                    enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                    disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                    setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                    onDragStart: Scrollbar.onDragStart.bind(swiper),
                    onDragMove: Scrollbar.onDragMove.bind(swiper),
                    onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            resize: function resize() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.destroy();
            },
        },
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;

            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;

            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if ((x).indexOf('%') >= 0) {
                x = (parseInt(x, 10) * progress * rtlFactor) + "%";
            } else {
                x = (x * progress * rtlFactor) + "px";
            }
            if ((y).indexOf('%') >= 0) {
                y = (parseInt(y, 10) * progress) + "%";
            } else {
                y = (y * progress) + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === 'undefined' || scale === null) {
                $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
            } else {
                var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            var snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
              .each(function (index, el) {
                  swiper.parallax.setTransform(el, progress);
              });
            slides.each(function (slideIndex, slideEl) {
                var slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
                  .each(function (index, el) {
                      swiper.parallax.setTransform(el, slideProgress);
                  });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) duration = this.params.speed;

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
              .each(function (index, parallaxEl) {
                  var $parallaxEl = $(parallaxEl);
                  var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                  if (duration === 0) { parallaxDuration = 0; }
                  $parallaxEl.transition(parallaxDuration);
              });
        },
    };

    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                parallax: {
                    setTransform: Parallax.setTransform.bind(swiper),
                    setTranslate: Parallax.setTranslate.bind(swiper),
                    setTransition: Parallax.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) { return; }
                swiper.params.watchSlidesProgress = true;
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.parallax) { return; }
                swiper.parallax.setTransition(duration);
            },
        },
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) { return 1; }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
            if (!Support.gestures) {
                if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest('.swiper-slide');
                if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (Support.gestures) {
                swiper.zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = (gesture.maxRatio - 1) + (Math.pow(((zoom.scale - gesture.maxRatio) + 1), 0.5));
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = (params.minRatio + 1) - (Math.pow(((params.minRatio - zoom.scale) + 1), 0.5));
            }
            gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }
                if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
                    return;
                }
                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) { gesture.$slideEl = undefined; }
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (image.isTouched) { return; }
            if (Device.android) { e.preventDefault(); }
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) { return; }

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            }
            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;

            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;

            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (
                  swiper.isHorizontal() &&
                  (
                    (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
                    (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
                  )
                ) {
                    image.isTouched = false;
                    return;
                } else if (
                  !swiper.isHorizontal() &&
                  (
                    (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
                    (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
                  )
                ) {
                    image.isTouched = false;
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();

            image.isMoved = true;
            image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
            image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = (image.minX + 1) - (Math.pow(((image.minX - image.currentX) + 1), 0.8));
            }
            if (image.currentX > image.maxX) {
                image.currentX = (image.maxX - 1) + (Math.pow(((image.currentX - image.maxX) + 1), 0.8));
            }

            if (image.currentY < image.minY) {
                image.currentY = (image.minY + 1) - (Math.pow(((image.minY - image.currentY) + 1), 0.8));
            }
            if (image.currentY > image.maxY) {
                image.currentY = (image.maxY - 1) + (Math.pow(((image.currentY - image.maxY) + 1), 0.8));
            }

            // Velocity
            if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
            if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
            if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();

            gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
            if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

            image.currentX = newPositionX;
            image.currentY = newPositionY;

            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

            gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;

                zoom.scale = 1;
                zoom.currentScale = 1;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function in$1(e) {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = (offsetX + (slideWidth / 2)) - touchX;
                diffY = (offsetY + (slideHeight / 2)) - touchY;

                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;

                translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;

                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
            gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        out: function out() {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
            gesture.$slideEl = undefined;
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) { return; }
            zoom.enabled = true;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) { return; }

            swiper.zoom.enabled = false;

            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

            // Scale image
            if (Support.gestures) {
                swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }

            // Move image
            swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
    };

    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
            },
        },
        create: function create() {
            var swiper = this;
            var zoom = {
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3,
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined,
                },
            };
            ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
            });
            Utils.extend(swiper, {
                zoom: zoom,
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) { return; }
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
                var swiper = this;
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
        },
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) loadInDuplicate = true;

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') { return; }
            if (swiper.slides.length === 0) { return; }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

            var $slideEl = isVirtual
              ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
              : swiper.slides.eq(index);

            var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) { return; }

            $images.each(function (imageIndex, imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);

                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');

                swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
                    if (background) {
                        $imageEl.css('background-image', ("url(\"" + background + "\")"));
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }
                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }
                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(("." + (params.preloaderClass))).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                });

                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;

            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
                        return true;
                    }
                } else if (slides[index]) { return true; }
                return false;
            }
            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }
                return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    // Next Slides
                    for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                        if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
                    }
                    // Prev Slides
                    for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                        if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
                    }
                } else {
                    var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                    if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

                    var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                    if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
                }
            }
        },
    };

    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,

                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                lazy: {
                    initialImageLoaded: false,
                    load: Lazy.load.bind(swiper),
                    loadInSlide: Lazy.loadInSlide.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll() {
                var swiper = this;
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
        },
    };

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function (array, val) {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }());
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) { return 0; }

                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;

                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
            };
            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ?
                  new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) :
                  new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;
            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    c.$wrapperEl.transitionEnd(function () {
                        if (!controlled) { return; }
                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        },
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide', // or 'container'
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                controller: {
                    control: swiper.params.controller.control,
                    getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
                    setTranslate: Controller.setTranslate.bind(swiper),
                    setTransition: Controller.setTransition.bind(swiper),
                },
            });
        },
        on: {
            update: function update() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(translate, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                if (!swiper.controller.control) { return; }
                swiper.controller.setTransition(duration, byController);
            },
        },
    };

    var a11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) { return; }
            var $targetEl = $(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) { return; }
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;

            if (swiper.params.loop) { return; }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;

            swiper.$el.append(swiper.a11y.liveRegion);

            // Navigation
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            }

            // Pagination
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
    };
    var A11y = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                a11y: {
                    liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
                },
            });
            Object.keys(a11y).forEach(function (methodName) {
                swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) { return; }
                swiper.a11y.destroy();
            },
        },
    };

    var History = {
        init: function init() {
            var swiper = this;
            if (!swiper.params.history) { return; }
            if (!win.history || !win.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) { return; }
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                win.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
                win.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
            var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return { key: key, value: value };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));
            if (!win.location.pathname.includes(key)) {
                value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                win.history.replaceState({ value: value }, null, value);
            } else {
                win.history.pushState({ value: value }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        },
    };

    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                history: {
                    init: History.init.bind(swiper),
                    setHistory: History.setHistory.bind(swiper),
                    setHistoryPopState: History.setHistoryPopState.bind(swiper),
                    scrollToSlide: History.scrollToSlide.bind(swiper),
                    destroy: History.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
        },
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
                swiper.slideTo(swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index());
            }
        },
        setHash: function setHash() {
            var swiper = this;
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
            if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
                win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                doc.location.hash = hash || '';
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace('#', '');
            if (hash) {
                var speed = 0;
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) {
                $(win).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
                $(win).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                hashNavigation: {
                    initialized: false,
                    init: HashNavigation.init.bind(swiper),
                    destroy: HashNavigation.destroy.bind(swiper),
                    setHash: HashNavigation.setHash.bind(swiper),
                    onHashCange: HashNavigation.onHashCange.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
        },
    };

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
            swiper.autoplay.timeout = Utils.nextTick(function () {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
            if (swiper.autoplay.running) { return false; }
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) { return false; }
            if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) { return; }
            if (swiper.autoplay.paused) { return; }
            if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl.transitionEnd(function () {
                    if (!swiper || swiper.destroyed) { return; }
                    swiper.autoplay.paused = false;
                    if (!swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.run();
                    }
                });
            }
        },
    };

    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                autoplay: {
                    running: false,
                    paused: false,
                    run: Autoplay.run.bind(swiper),
                    start: Autoplay.start.bind(swiper),
                    stop: Autoplay.stop.bind(swiper),
                    pause: Autoplay.pause.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                }
            },
            beforeTransitionStart: function beforeTransitionStart(speed, internal) {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }
            },
        },
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = swiper.params.fadeEffect.crossFade ?
                  Math.max(1 - Math.abs($slideEl[0].progress), 0) :
                  1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl
                  .css({
                      opacity: slideOpacity,
                  })
                  .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                    if (eventTriggered) { return; }
                    if (!swiper || swiper.destroyed) { return; }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                fadeEffect: {
                    setTranslate: Fade.setTranslate.bind(swiper),
                    setTransition: Fade.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'fade') { return; }
                swiper.fadeEffect.setTransition(duration);
            },
        },
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtlTranslate;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({ height: (swiperWidth + "px") });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - (
                      (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
                      (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
                    );
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                }
            }
            var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl
              .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides
              .transition(duration)
              .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
              .transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    };

    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                cubeEffect: {
                    setTranslate: Cube.setTranslate.bind(swiper),
                    setTransition: Cube.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'cube') { return; }
                swiper.cubeEffect.setTransition(duration);
            },
        },
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                    if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                }
                $slideEl
                  .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides
              .transition(duration)
              .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
              .transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                // eslint-disable-next-line
                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) { return; }
                    if (!swiper || swiper.destroyed) { return; }
                    // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };

    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                flipEffect: {
                    setTranslate: Flip.setTranslate.bind(swiper),
                    setTransition: Flip.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'flip') { return; }
                swiper.flipEffect.setTransition(duration);
            },
        },
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            // Each slide offset from center
            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                var translateZ = -translate * Math.abs(offsetMultiplier);

                var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) { translateX = 0; }
                if (Math.abs(translateY) < 0.001) { translateY = 0; }
                if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
                if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
                if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
                    if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
                }
            }

            // Set correct perspective for IE10
            if (Support.pointerEvents || Support.prefixedPointerEvents) {
                var ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = center + "px 50%";
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides
              .transition(duration)
              .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
              .transition(duration);
        },
    };

    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                coverflowEffect: {
                    setTranslate: Coverflow.setTranslate.bind(swiper),
                    setTransition: Coverflow.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }

                swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') { return; }
                swiper.coverflowEffect.setTransition(duration);
            },
        },
    };

    // Swiper Class

    var components = [
      Device$1,
      Support$1,
      Browser$1,
      Resize,
      Observer$1,
      Virtual$1,
      Keyboard$1,
      Mousewheel$1,
      Navigation$1,
      Pagination$1,
      Scrollbar$1,
      Parallax$1,
      Zoom$1,
      Lazy$1,
      Controller$1,
      A11y,
      History$1,
      HashNavigation$1,
      Autoplay$1,
      EffectFade,
      EffectCube,
      EffectFlip,
      EffectCoverflow
    ];

    if (typeof Swiper.use === 'undefined') {
        Swiper.use = Swiper.Class.use;
        Swiper.installModule = Swiper.Class.installModule;
    }

    Swiper.use(components);

    return Swiper;

})));

/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.4.1 (Oct, 2014)

  Copyright (c) 2014 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
!function (e) { "use strict"; e.fn.serializeJSON = function (n) { var r, a, t, s, i, u, l; return u = e.serializeJSON, l = u.optsWithDefaults(n), u.validateOptions(l), a = e(this).find("input, select, textarea").serializeArray(), u.readCheckboxUncheckedValues(a, this, l), r = {}, e.each(a, function (e, n) { var a = n.name, o = a.lastIndexOf("$"); t = u.splitInputNameIntoKeysArray(a.substr(o + 1, a.length)), s = t.pop(), "skip" !== s && (i = u.parseValue(n.value, s, l), l.parseWithFunction && "_" === s && (i = l.parseWithFunction(i, n.name)), u.deepSet(r, t, i, l)) }), r }, e.serializeJSON = { defaultOptions: { parseNumbers: !1, parseBooleans: !1, parseNulls: !1, parseAll: !1, parseWithFunction: null, checkboxUncheckedValue: void 0, useIntKeysAsArrayIndex: !1 }, optsWithDefaults: function (n) { var r, a; return null == n && (n = {}), r = e.serializeJSON, a = r.optWithDefaults("parseAll", n), { parseNumbers: a || r.optWithDefaults("parseNumbers", n), parseBooleans: a || r.optWithDefaults("parseBooleans", n), parseNulls: a || r.optWithDefaults("parseNulls", n), parseWithFunction: r.optWithDefaults("parseWithFunction", n), checkboxUncheckedValue: r.optWithDefaults("checkboxUncheckedValue", n), useIntKeysAsArrayIndex: r.optWithDefaults("useIntKeysAsArrayIndex", n) } }, optWithDefaults: function (n, r) { return r[n] !== !1 && "" !== r[n] && (r[n] || e.serializeJSON.defaultOptions[n]) }, validateOptions: function (n) { var r, a; a = ["parseNumbers", "parseBooleans", "parseNulls", "parseAll", "parseWithFunction", "checkboxUncheckedValue", "useIntKeysAsArrayIndex"]; for (r in n) if (e.inArray(r, a) < 0) throw new Error("serializeJSON ERROR: invalid option '" + r + "'. Please use one of " + a.join(",")) }, parseValue: function (n, r, a) { var t; return t = e.serializeJSON, "string" == r ? n : "number" == r || a.parseNumbers && t.isNumeric(n) ? Number(n) : "boolean" == r || a.parseBooleans && ("true" === n || "false" === n) ? -1 === ["false", "null", "undefined", "", "0"].indexOf(n) : "null" == r || a.parseNulls && "null" == n ? -1 !== ["false", "null", "undefined", "", "0"].indexOf(n) ? null : n : "array" == r || "object" == r ? JSON.parse(n) : "auto" == r ? t.parseValue(n, null, { parseNumbers: !0, parseBooleans: !0, parseNulls: !0 }) : n }, isObject: function (e) { return e === Object(e) }, isUndefined: function (e) { return void 0 === e }, isValidArrayIndex: function (e) { return /^[0-9]+$/.test(String(e)) }, isNumeric: function (e) { return e - parseFloat(e) >= 0 }, splitInputNameIntoKeysArray: function (n) { var r, a, t, s, i; return i = e.serializeJSON, s = i.extractTypeFromInputName(n), a = s[0], t = s[1], r = a.split("["), r = e.map(r, function (e) { return e.replace(/]/g, "") }), "" === r[0] && r.shift(), r.push(t), r }, extractTypeFromInputName: function (n) { var r, a; if (a = e.serializeJSON, r = n.match(/(.*):([^:]+)$/)) { var t = ["string", "number", "boolean", "null", "array", "object", "skip", "auto"]; if (e.inArray(r[2], t) >= 0) return [r[1], r[2]]; throw new Error("serializeJSON ERROR: Invalid type " + r[2] + " found in input name '" + n + "', please use one of " + t.join(", ")) } return [n, "_"] }, deepSet: function (n, r, a, t) { var s, i, u, l, o, p; if (null == t && (t = {}), p = e.serializeJSON, p.isUndefined(n)) throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); if (!r || 0 === r.length) throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); s = r[0], 1 === r.length ? "" === s ? n.push(a) : n[s] = a : (i = r[1], "" === s && (l = n.length - 1, o = n[l], s = p.isObject(o) && (p.isUndefined(o[i]) || r.length > 2) ? l : l + 1), p.isUndefined(n[s]) && ("" === i ? n[s] = [] : t.useIntKeysAsArrayIndex && p.isValidArrayIndex(i) ? n[s] = [] : n[s] = {}), u = r.slice(1), p.deepSet(n[s], u, a, t)) }, readCheckboxUncheckedValues: function (n, r, a) { var t, s, i, u, l; null == a && (a = {}), l = e.serializeJSON, t = "input[type=checkbox][name]:not(:checked)", s = r.find(t).add(r.filter(t)), s.each(function (r, t) { i = e(t), u = i.attr("data-unchecked-value"), u ? n.push({ name: t.name, value: u }) : l.isUndefined(a.checkboxUncheckedValue) || n.push({ name: t.name, value: a.checkboxUncheckedValue }) }) } } }(window.jQuery || window.Zepto || window.$);

/********************************************************************
* Limit the characters that may be entered in a text field
* Common options: alphanumeric, alphabetic or numeric
* Kevin Sheedy, 2012
* http://github.com/KevinSheedy/jquery.alphanum
*********************************************************************/
!function (e) { function t() { var e = "!@#$%^&*()+=[]\\';,/{}|\":<>?~`.-_"; return e += " " } function n() { var e = "¬€£¦"; return e } function r(t, n, r) { t.each(function () { var t = e(this); t.bind("keyup change paste", function (e) { var a = ""; e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData && (a = e.originalEvent.clipboardData.getData("text/plain")), setTimeout(function () { i(t, n, r, a) }, 0) }), t.bind("keypress", function (e) { var a = e.charCode ? e.charCode : e.which; if (!(l(a) || e.ctrlKey || e.metaKey)) { var o = String.fromCharCode(a), i = t.selection(), u = i.start, c = i.end, s = t.val(), f = s.substring(0, u) + o + s.substring(c), p = n(f, r); p != f && e.preventDefault() } }) }) } function a(t, n) { var r = parseFloat(e(t).val()), a = e(t); return isNaN(r) ? void a.val("") : (o(n.min) && r < n.min && a.val(""), void (o(n.max) && r > n.max && a.val(""))) } function o(e) { return !isNaN(e) } function l(e) { return e >= 32 ? !1 : 10 == e ? !1 : 13 == e ? !1 : !0 } function i(e, t, n, r) { var a = e.val(); "" == a && r.length > 0 && (a = r); var o = t(a, n); if (a != o) { var l = e.alphanum_caret(); e.val(o), a.length == o.length + 1 ? e.alphanum_caret(l - 1) : e.alphanum_caret(l) } } function u(t, n) { "undefined" == typeof n && (n = D); var r, a = {}; return r = "string" == typeof t ? O[t] : "undefined" == typeof t ? {} : t, e.extend(a, n, r), "undefined" == typeof a.blacklist && (a.blacklistSet = y(a.allow, a.disallow)), a } function c(t) { var n, r = {}; return n = "string" == typeof t ? _[t] : "undefined" == typeof t ? {} : t, e.extend(r, L, n), r } function s(e, t, n) { return n.maxLength && e.length >= n.maxLength ? !1 : n.allow.indexOf(t) >= 0 ? !0 : n.allowSpace && " " == t ? !0 : n.blacklistSet.contains(t) ? !1 : !n.allowNumeric && A[t] ? !1 : !n.allowUpper && x(t) ? !1 : !n.allowLower && N(t) ? !1 : !n.allowCaseless && T(t) ? !1 : !n.allowLatin && M.contains(t) ? !1 : n.allowOtherCharSets ? !0 : A[t] || M.contains(t) ? !0 : !1 } function f(e, t, n) { if (A[t]) return v(e, n) ? !1 : d(e, n) ? !1 : h(e, n) ? !1 : m(e + t, n) ? !1 : g(e + t, n) ? !1 : !0; if (n.allowPlus && "+" == t && "" == e) return !0; if (n.allowMinus && "-" == t && "" == e) return !0; if (t == j && n.allowThouSep && R(e, t)) return !0; if (t == k) { if (e.indexOf(k) >= 0) return !1; if (n.allowDecSep) return !0 } return !1 } function p(e) { return e += "", e.replace(/[^0-9]/g, "").length } function v(e, t) { var n = t.maxDigits; if ("" == n || isNaN(n)) return !1; var r = p(e); return r >= n ? !0 : !1 } function h(e, t) { var n = t.maxDecimalPlaces; if ("" == n || isNaN(n)) return !1; var r = e.indexOf(k); if (-1 == r) return !1; var a = e.substring(r), o = p(a); return o >= n ? !0 : !1 } function d(e, t) { var n = t.maxPreDecimalPlaces; if ("" == n || isNaN(n)) return !1; var r = e.indexOf(k); if (r >= 0) return !1; var a = p(e); return a >= n ? !0 : !1 } function m(e, t) { if (!t.max || t.max < 0) return !1; var n = parseFloat(e); return n > t.max ? !0 : !1 } function g(e, t) { if (!t.min || t.min > 0) return !1; var n = parseFloat(e); return n < t.min ? !0 : !1 } function w(e, t) { if ("string" != typeof e) return e; var n, r = e.split(""), a = [], o = 0; for (o = 0; o < r.length; o++) { n = r[o]; var l = a.join(""); s(l, n, t) && a.push(n) } var i = a.join(""); return t.forceLower ? i = i.toLowerCase() : t.forceUpper && (i = i.toUpperCase()), i } function S(e, t) { if ("string" != typeof e) return e; var n, r = e.split(""), a = [], o = 0; for (o = 0; o < r.length; o++) { n = r[o]; var l = a.join(""); f(l, n, t) && a.push(n) } return a.join("") } function x(e) { var t = e.toUpperCase(), n = e.toLowerCase(); return e == t && t != n ? !0 : !1 } function N(e) { var t = e.toUpperCase(), n = e.toLowerCase(); return e == n && t != n ? !0 : !1 } function T(e) { return e.toUpperCase() == e.toLowerCase() ? !0 : !1 } function y(e, t) { var n = new P(U + t), r = new P(e), a = n.subtract(r); return a } function C() { var e, t = "0123456789".split(""), n = {}, r = 0; for (r = 0; r < t.length; r++) e = t[r], n[e] = !0; return n } function E() { var e = "abcdefghijklmnopqrstuvwxyz", t = e.toUpperCase(), n = new P(e + t); return n } function R(e, t) { if (0 == e.length) return !1; var n = e.indexOf(k); if (n >= 0) return !1; var r = e.indexOf(j); if (0 > r) return !0; var a = e.lastIndexOf(j), o = e.length - a - 1; if (3 > o) return !1; var l = p(e.substring(r)); return l % 3 > 0 ? !1 : !0 } function P(e) { "string" == typeof e ? this.map = b(e) : this.map = {} } function b(e) { var t, n = {}, r = e.split(""), a = 0; for (a = 0; a < r.length; a++) t = r[a], n[t] = !0; return n } e.fn.alphanum = function (e) { var t = u(e), n = this; return r(n, w, t), this }, e.fn.alpha = function (e) { var t = u("alpha"), n = u(e, t), a = this; return r(a, w, n), this }, e.fn.numeric = function (e) { var t = c(e), n = this; return r(n, S, t), n.blur(function () { a(this, e) }), this }; var D = { allow: "", disallow: "", allowSpace: !0, allowNumeric: !0, allowUpper: !0, allowLower: !0, allowCaseless: !0, allowLatin: !0, allowOtherCharSets: !0, forceUpper: !1, forceLower: !1, maxLength: NaN }, L = { allowPlus: !1, allowMinus: !0, allowThouSep: !0, allowDecSep: !0, allowLeadingSpaces: !1, maxDigits: NaN, maxDecimalPlaces: NaN, maxPreDecimalPlaces: NaN, max: NaN, min: NaN }, O = { alpha: { allowNumeric: !1 }, upper: { allowNumeric: !1, allowUpper: !0, allowLower: !1, allowCaseless: !0 }, lower: { allowNumeric: !1, allowUpper: !1, allowLower: !0, allowCaseless: !0 } }, _ = { integer: { allowPlus: !1, allowMinus: !0, allowThouSep: !1, allowDecSep: !1 }, positiveInteger: { allowPlus: !1, allowMinus: !1, allowThouSep: !1, allowDecSep: !1 } }, U = t() + n(), j = ",", k = ".", A = C(), M = E(); P.prototype.add = function (e) { var t = this.clone(); for (var n in e.map) t.map[n] = !0; return t }, P.prototype.subtract = function (e) { var t = this.clone(); for (var n in e.map) delete t.map[n]; return t }, P.prototype.contains = function (e) { return this.map[e] ? !0 : !1 }, P.prototype.clone = function () { var e = new P; for (var t in this.map) e.map[t] = !0; return e }, e.fn.alphanum.backdoorAlphaNum = function (e, t) { var n = u(t); return w(e, n) }, e.fn.alphanum.backdoorNumeric = function (e, t) { var n = c(t); return S(e, n) }, e.fn.alphanum.setNumericSeparators = function (e) { 1 == e.thousandsSeparator.length && 1 == e.decimalSeparator.length && (j = e.thousandsSeparator, k = e.decimalSeparator) } }(jQuery), function (e) { function t(e, t) { if (e.createTextRange) { var n = e.createTextRange(); n.move("character", t), n.select() } else null != e.selectionStart && (e.focus(), e.setSelectionRange(t, t)) } function n(e) { if ("selection" in document) { var t = e.createTextRange(); try { t.setEndPoint("EndToStart", document.selection.createRange()) } catch (n) { return 0 } return t.text.length } return null != e.selectionStart ? e.selectionStart : void 0 } e.fn.alphanum_caret = function (r, a) { return "undefined" == typeof r ? n(this.get(0)) : this.queue(function (n) { if (isNaN(r)) { var o = e(this).val().indexOf(r); a === !0 ? o += r.length : "undefined" != typeof a && (o += a), t(this, o) } else t(this, r); n() }) } }(jQuery), function (e) { var t = function (e) { return e ? e.ownerDocument.defaultView || e.ownerDocument.parentWindow : window }, n = function (t, n) { var r = e.Range.current(t).clone(), a = e.Range(t).select(t); return r.overlaps(a) ? (r.compare("START_TO_START", a) < 1 ? (startPos = 0, r.move("START_TO_START", a)) : (fromElementToCurrent = a.clone(), fromElementToCurrent.move("END_TO_START", r), startPos = fromElementToCurrent.toString().length), r.compare("END_TO_END", a) >= 0 ? endPos = a.toString().length : endPos = startPos + r.toString().length, { start: startPos, end: endPos }) : null }, r = function (r) { var a = t(r); if (void 0 !== r.selectionStart) return document.activeElement && document.activeElement != r && r.selectionStart == r.selectionEnd && 0 == r.selectionStart ? { start: r.value.length, end: r.value.length } : { start: r.selectionStart, end: r.selectionEnd }; if (a.getSelection) return n(r, a); try { if ("input" == r.nodeName.toLowerCase()) { var o = t(r).document.selection.createRange(), l = r.createTextRange(); l.setEndPoint("EndToStart", o); var i = l.text.length; return { start: i, end: i + o.text.length } } var u = n(r, a); if (!u) return u; var c = e.Range.current().clone(), s = c.clone().collapse().range, f = c.clone().collapse(!1).range; return s.moveStart("character", -1), f.moveStart("character", -1), 0 != u.startPos && "" == s.text && (u.startPos += 2), 0 != u.endPos && "" == f.text && (u.endPos += 2), u } catch (p) { return { start: r.value.length, end: r.value.length } } }, a = function (e, n, r) { var a = t(e); if (e.setSelectionRange) void 0 === r ? (e.focus(), e.setSelectionRange(n, n)) : (e.select(), e.selectionStart = n, e.selectionEnd = r); else if (e.createTextRange) { var o = e.createTextRange(); o.moveStart("character", n), r = r || n, o.moveEnd("character", r - e.value.length), o.select() } else if (a.getSelection) { var i = a.document, u = a.getSelection(), c = i.createRange(), s = [n, void 0 !== r ? r : n]; l([e], s), c.setStart(s[0].el, s[0].count), c.setEnd(s[1].el, s[1].count), u.removeAllRanges(), u.addRange(c) } else if (a.document.body.createTextRange) { var c = document.body.createTextRange(); c.moveToElementText(e), c.collapse(), c.moveStart("character", n), c.moveEnd("character", void 0 !== r ? r : n), c.select() } }, o = function (e, t, n, r) { "number" == typeof n[0] && n[0] < t && (n[0] = { el: r, count: n[0] - e }), "number" == typeof n[1] && n[1] <= t && (n[1] = { el: r, count: n[1] - e }) }, l = function (e, t, n) { var r, a; n = n || 0; for (var i = 0; e[i]; i++) r = e[i], 3 === r.nodeType || 4 === r.nodeType ? (a = n, n += r.nodeValue.length, o(a, n, t, r)) : 8 !== r.nodeType && (n = l(r.childNodes, t, n)); return n }; jQuery.fn.selection = function (e, t) { return void 0 !== e ? this.each(function () { a(this, e, t) }) : r(this[0]) }, e.fn.selection.getCharElement = l }(jQuery);

// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,e,d){var c={invalid:[],getCaret:function(){try{var r,b=0,e=a.get(0),d=document.selection,f=e.selectionStart;if(d&&-1===navigator.appVersion.indexOf("MSIE 10"))r=d.createRange(),r.moveStart("character",-c.val().length),b=r.text.length;else if(f||"0"===f)b=f;return b}catch(g){}},setCaret:function(r){try{if(a.is(":focus")){var c,
b=a.get(0);b.setSelectionRange?(b.focus(),b.setSelectionRange(r,r)):(c=b.createTextRange(),c.collapse(!0),c.moveEnd("character",r),c.moveStart("character",r),c.select())}}catch(e){}},events:function(){a.on("keydown.mask",function(c){a.data("mask-keycode",c.keyCode||c.which)}).on(b.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){n===
c.val()||a.data("changed")||a.trigger("change");a.data("changed",!1)}).on("blur.mask",function(){n=c.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],c,b,d,f,l=0;l<e.length;l++)(c=g.translation[e.charAt(l)])?(b=c.pattern.toString().replace(/.{1}$|^.{1}/g,""),d=c.optional,(c=c.recursive)?(a.push(e.charAt(l)),f={digit:e.charAt(l),pattern:b}):a.push(d||
c?b+"?":b)):a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");f&&(a=a.replace(new RegExp("("+f.digit+"(.*"+f.digit+")?)"),"($1)?").replace(new RegExp(f.digit,"g"),f.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(c){var b=a.is("input")?"val":"text";if(0<arguments.length){if(a[b]()!==c)a[b](c);b=a}else b=a[b]();return b},getMCharsBeforeCount:function(a,c){for(var b=0,d=0,
f=e.length;d<f&&d<a;d++)g.translation[e.charAt(d)]||(a=c?a+1:a,b++);return b},caretPos:function(a,b,d,h){return g.translation[e.charAt(Math.min(a-1,e.length-1))]?Math.min(a+d-b-h,d):c.caretPos(a+1,b,d,h)},behaviour:function(d){d=d||window.event;c.invalid=[];var e=a.data("mask-keycode");if(-1===b.inArray(e,g.byPassKeys)){var m=c.getCaret(),h=c.val().length,f=c.getMasked(),l=f.length,k=c.getMCharsBeforeCount(l-1)-c.getMCharsBeforeCount(h-1),n=m<h;c.val(f);n&&(8!==e&&46!==e&&(m=c.caretPos(m,h,l,k)),
c.setCaret(m));return c.callbacks(d)}},getMasked:function(a,b){var m=[],h=void 0===b?c.val():b+"",f=0,l=e.length,k=0,n=h.length,q=1,p="push",u=-1,t,w;d.reverse?(p="unshift",q=-1,t=0,f=l-1,k=n-1,w=function(){return-1<f&&-1<k}):(t=l-1,w=function(){return f<l&&k<n});for(;w();){var x=e.charAt(f),v=h.charAt(k),s=g.translation[x];if(s)v.match(s.pattern)?(m[p](v),s.recursive&&(-1===u?u=f:f===t&&(f=u-q),t===u&&(f-=q)),f+=q):s.optional?(f+=q,k-=q):s.fallback?(m[p](s.fallback),f+=q,k-=q):c.invalid.push({p:k,
v:v,e:s.pattern}),k+=q;else{if(!a)m[p](x);v===x&&(k+=q);f+=q}}h=e.charAt(t);l!==n+1||g.translation[h]||m.push(h);return m.join("")},callbacks:function(b){var g=c.val(),m=g!==n,h=[g,b,a,d],f=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};f("onChange",!0===m,h);f("onKeyPress",!0===m,h);f("onComplete",g.length===e.length,h);f("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,d])}};a=b(a);var g=this,n=c.val(),p;e="function"===typeof e?e(c.val(),void 0,a,d):e;g.mask=e;g.options=d;g.remove=
function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.getMaskedVal=function(a){return c.getMasked(!1,a)};g.init=function(e){e=e||!1;d=d||{};g.clearIfNotMatch=b.jMaskGlobals.clearIfNotMatch;g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.extend({},b.jMaskGlobals.translation,d.translation);g=b.extend(!0,{},g,d);p=c.getRegexMask();!1===e?(d.placeholder&&a.attr("placeholder",d.placeholder),
a.data("mask")&&a.attr("autocomplete","off"),c.destroyEvents(),c.events(),e=c.getCaret(),c.val(c.getMasked()),c.setCaret(e+c.getMCharsBeforeCount(e,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),e={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(e.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(z(a,d,e))return a.data("mask",new y(this,
d,e))},z=function(a,e,d){d=d||{};var c=b(a).data("mask"),g=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===typeof e&&(e=e(a)),"object"!==typeof c||g(c.options)!==g(d)||c.mask!==e}catch(n){}};b.fn.mask=function(a,e){e=e||{};var d=this.selector,c=b.jMaskGlobals,g=c.watchInterval,c=e.watchInputs||c.watchInputs,n=function(){if(z(this,a,e))return b(this).data("mask",new y(this,a,e))};b(this).each(n);d&&""!==d&&c&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(n)},
g));return this};b.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",
dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,"return;"),d="function"===typeof b[a]);return d}("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);
p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

// Raphaël 2.1.0 - JavaScript Vector Library 
!function (t) { var e, r, i = "0.3.4", n = "hasOwnProperty", a = /[\.\/]/, s = function () { }, o = function (t, e) { return t - e }, l = { n: {} }, h = function (t, i) { var n, a = r, s = Array.prototype.slice.call(arguments, 2), l = h.listeners(t), u = 0, c = [], f = {}, p = [], d = e; e = t, r = 0; for (var g = 0, v = l.length; g < v; g++) "zIndex" in l[g] && (c.push(l[g].zIndex), l[g].zIndex < 0 && (f[l[g].zIndex] = l[g])); for (c.sort(o) ; c[u] < 0;) if (n = f[c[u++]], p.push(n.apply(i, s)), r) return r = a, p; for (g = 0; g < v; g++) if ("zIndex" in (n = l[g])) if (n.zIndex == c[u]) { if (p.push(n.apply(i, s)), r) break; do { if ((n = f[c[++u]]) && p.push(n.apply(i, s)), r) break } while (n) } else f[n.zIndex] = n; else if (p.push(n.apply(i, s)), r) break; return r = a, e = d, p.length ? p : null }; h.listeners = function (t) { var e, r, i, n, s, o, h, u, c = t.split(a), f = l, p = [f], d = []; for (n = 0, s = c.length; n < s; n++) { for (u = [], o = 0, h = p.length; o < h; o++) for (r = [(f = p[o].n)[c[n]], f["*"]], i = 2; i--;) (e = r[i]) && (u.push(e), d = d.concat(e.f || [])); p = u } return d }, h.on = function (t, e) { for (var r = t.split(a), i = l, n = 0, o = r.length; n < o; n++) !(i = i.n)[r[n]] && (i[r[n]] = { n: {} }), i = i[r[n]]; for (i.f = i.f || [], n = 0, o = i.f.length; n < o; n++) if (i.f[n] == e) return s; return i.f.push(e), function (t) { +t == +t && (e.zIndex = +t) } }, h.stop = function () { r = 1 }, h.nt = function (t) { return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e }, h.off = h.unbind = function (t, e) { var r, i, s, o, h, u, c, f = t.split(a), p = [l]; for (o = 0, h = f.length; o < h; o++) for (u = 0; u < p.length; u += s.length - 2) { if (s = [u, 1], r = p[u].n, "*" != f[o]) r[f[o]] && s.push(r[f[o]]); else for (i in r) r[n](i) && s.push(r[i]); p.splice.apply(p, s) } for (o = 0, h = p.length; o < h; o++) for (r = p[o]; r.n;) { if (e) { if (r.f) { for (u = 0, c = r.f.length; u < c; u++) if (r.f[u] == e) { r.f.splice(u, 1); break } !r.f.length && delete r.f } for (i in r.n) if (r.n[n](i) && r.n[i].f) { var d = r.n[i].f; for (u = 0, c = d.length; u < c; u++) if (d[u] == e) { d.splice(u, 1); break } !d.length && delete r.n[i].f } } else { delete r.f; for (i in r.n) r.n[n](i) && r.n[i].f && delete r.n[i].f } r = r.n } }, h.once = function (t, e) { var r = function () { var i = e.apply(this, arguments); return h.unbind(t, r), i }; return h.on(t, r) }, h.version = i, h.toString = function () { return "You are running Eve " + i }, "undefined" != typeof module && module.exports ? module.exports = h : "undefined" != typeof define ? define("eve", [], function () { return h }) : t.eve = h }(this), function () { function t(r) { if (t.is(r, "function")) return e ? r() : eve.on("raphael.DOMload", r); if (t.is(r, A)) return t._engine.create[u](t, r.splice(0, 3 + t.is(r[0], B))).add(r); var i = Array.prototype.slice.call(arguments, 0); if (t.is(i[i.length - 1], "function")) { var n = i.pop(); return e ? n.call(t._engine.create[u](t, i)) : eve.on("raphael.DOMload", function () { n.call(t._engine.create[u](t, i)) }) } return t._engine.create[u](t, arguments) } t.version = "2.1.0", t.eve = eve; var e, r, i = /[, ]+/, n = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 }, a = /\{(\d+)\}/g, s = "hasOwnProperty", o = { doc: document, win: window }, l = { was: Object.prototype[s].call(o.win, "Raphael"), is: o.win.Raphael }, h = function () { this.ca = this.customAttributes = {} }, u = "apply", c = "concat", f = "createTouch" in o.doc, p = " ", d = String, g = "split", v = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[g](p), x = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, y = d.prototype.toLowerCase, m = Math, b = m.max, _ = m.min, w = m.abs, k = m.pow, C = m.PI, B = "number", S = "string", A = "array", T = Object.prototype.toString, N = (t._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), L = { NaN: 1, Infinity: 1, "-Infinity": 1 }, M = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, z = m.round, E = parseFloat, F = parseInt, R = d.prototype.toUpperCase, P = t._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0 }, I = t._availableAnimAttrs = { blur: B, "clip-rect": "csv", cx: B, cy: B, fill: "colour", "fill-opacity": B, "font-size": B, height: B, opacity: B, path: "path", r: B, rx: B, ry: B, stroke: "colour", "stroke-opacity": B, "stroke-width": B, transform: "transform", width: B, x: B, y: B }, j = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, q = { hs: 1, rg: 1 }, D = /,?([achlmqrstvxz]),?/gi, V = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, O = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, Y = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, G = (t._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}), W = function (t, e) { return E(t) - E(e) }, X = function (t) { return t }, H = t._rectPath = function (t, e, r, i, n) { return n ? [["M", t + n, e], ["l", r - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, i - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - r, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - i], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]] }, U = function (t, e, r, i) { return null == i && (i = r), [["M", t, e], ["m", 0, -i], ["a", r, i, 0, 1, 1, 0, 2 * i], ["a", r, i, 0, 1, 1, 0, -2 * i], ["z"]] }, $ = t._getPath = { path: function (t) { return t.attr("path") }, circle: function (t) { var e = t.attrs; return U(e.cx, e.cy, e.r) }, ellipse: function (t) { var e = t.attrs; return U(e.cx, e.cy, e.rx, e.ry) }, rect: function (t) { var e = t.attrs; return H(e.x, e.y, e.width, e.height, e.r) }, image: function (t) { var e = t.attrs; return H(e.x, e.y, e.width, e.height) }, text: function (t) { var e = t._getBBox(); return H(e.x, e.y, e.width, e.height) } }, Z = t.mapPath = function (t, e) { if (!e) return t; var r, i, n, a, s, o, l; for (n = 0, s = (t = St(t)).length; n < s; n++) for (a = 1, o = (l = t[n]).length; a < o; a += 2) r = e.x(l[a], l[a + 1]), i = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = i; return t }; if (t._g = o, t.type = o.win.SVGAngle || o.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == t.type) { var Q, J = o.doc.createElement("div"); if (J.innerHTML = '<v:shape adj="1"/>', (Q = J.firstChild).style.behavior = "url(#default#VML)", !Q || "object" != typeof Q.adj) return t.type = ""; J = null } function K(t) { if (Object(t) !== t) return t; var e = new t.constructor; for (var r in t) t[s](r) && (e[r] = K(t[r])); return e } t.svg = !(t.vml = "VML" == t.type), t._Paper = h, t.fn = r = h.prototype = t.prototype, t._id = 0, t._oid = 0, t.is = function (t, e) { return "finite" == (e = y.call(e)) ? !L[s](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || T.call(t).slice(8, -1).toLowerCase() == e }, t.angle = function (e, r, i, n, a, s) { if (null == a) { var o = e - i, l = r - n; return o || l ? (180 + 180 * m.atan2(-l, -o) / C + 360) % 360 : 0 } return t.angle(e, r, a, s) - t.angle(i, n, a, s) }, t.rad = function (t) { return t % 360 * C / 180 }, t.deg = function (t) { return 180 * t / C % 360 }, t.snapTo = function (e, r, i) { if (i = t.is(i, "finite") ? i : 10, t.is(e, A)) { for (var n = e.length; n--;) if (w(e[n] - r) <= i) return e[n] } else { var a = r % (e = +e); if (a < i) return r - a; if (a > e - i) return r - a + e } return r }; var tt, et; t.createUUID = (tt = /[xy]/g, et = function (t) { var e = 16 * m.random() | 0; return ("x" == t ? e : 3 & e | 8).toString(16) }, function () { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(tt, et).toUpperCase() }); t.setWindow = function (e) { eve("raphael.setWindow", t, o.win, e), o.win = e, o.doc = o.win.document, t._engine.initWin && t._engine.initWin(o.win) }; var rt = function (e) { if (t.vml) { var r, i = /^\s+|\s+$/g; try { var n = new ActiveXObject("htmlfile"); n.write("<body>"), n.close(), r = n.body } catch (t) { r = createPopup().document.body } var a = r.createTextRange(); rt = lt(function (t) { try { r.style.color = d(t).replace(i, ""); var e = a.queryCommandValue("ForeColor"); return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6) } catch (t) { return "none" } }) } else { var s = o.doc.createElement("i"); s.title = "Raphaël Colour Picker", s.style.display = "none", o.doc.body.appendChild(s), rt = lt(function (t) { return s.style.color = t, o.doc.defaultView.getComputedStyle(s, "").getPropertyValue("color") }) } return rt(e) }, it = function () { return "hsb(" + [this.h, this.s, this.b] + ")" }, nt = function () { return "hsl(" + [this.h, this.s, this.l] + ")" }, at = function () { return this.hex }, st = function (e, r, i) { if (null == r && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (i = e.b, r = e.g, e = e.r), null == r && t.is(e, S)) { var n = t.getRGB(e); e = n.r, r = n.g, i = n.b } return (e > 1 || r > 1 || i > 1) && (e /= 255, r /= 255, i /= 255), [e, r, i] }, ot = function (e, r, i, n) { var a = { r: e *= 255, g: r *= 255, b: i *= 255, hex: t.rgb(e, r, i), toString: at }; return t.is(n, "finite") && (a.opacity = n), a }; function lt(t, e, r) { return function i() { var n = Array.prototype.slice.call(arguments, 0), a = n.join("␀"), o = i.cache = i.cache || {}, l = i.count = i.count || []; return o[s](a) ? (function (t, e) { for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return t.push(t.splice(r, 1)[0]) }(l, a), r ? r(o[a]) : o[a]) : (l.length >= 1e3 && delete o[l.shift()], l.push(a), o[a] = t[u](e, n), r ? r(o[a]) : o[a]) } } t.color = function (e) { var r; return t.is(e, "object") && "h" in e && "s" in e && "b" in e ? (r = t.hsb2rgb(e), e.r = r.r, e.g = r.g, e.b = r.b, e.hex = r.hex) : t.is(e, "object") && "h" in e && "s" in e && "l" in e ? (r = t.hsl2rgb(e), e.r = r.r, e.g = r.g, e.b = r.b, e.hex = r.hex) : (t.is(e, "string") && (e = t.getRGB(e)), t.is(e, "object") && "r" in e && "g" in e && "b" in e ? (r = t.rgb2hsl(e), e.h = r.h, e.s = r.s, e.l = r.l, r = t.rgb2hsb(e), e.v = r.b) : (e = { hex: "none" }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1), e.toString = at, e }, t.hsb2rgb = function (t, e, r, i) { var n, a, s, o, l; return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = (t = t.h).o), o = (l = r * e) * (1 - w((t = (t *= 360) % 360 / 60) % 2 - 1)), n = a = s = r - l, ot(n += [l, o, 0, 0, o, l][t = ~~t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], i) }, t.hsl2rgb = function (t, e, r, i) { var n, a, s, o, l; return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), t = (t *= 360) % 360 / 60, o = (l = 2 * e * (r < .5 ? r : 1 - r)) * (1 - w(t % 2 - 1)), n = a = s = r - l / 2, ot(n += [l, o, 0, 0, o, l][t = ~~t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], i) }, t.rgb2hsb = function (t, e, r) { var i, n; return t = (r = st(t, e, r))[0], e = r[1], r = r[2], { h: ((0 == (n = (i = b(t, e, r)) - _(t, e, r)) ? null : i == t ? (e - r) / n : i == e ? (r - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360, s: 0 == n ? 0 : n / i, b: i, toString: it } }, t.rgb2hsl = function (t, e, r) { var i, n, a, s; return t = (r = st(t, e, r))[0], e = r[1], r = r[2], i = ((n = b(t, e, r)) + (a = _(t, e, r))) / 2, { h: ((0 == (s = n - a) ? null : n == t ? (e - r) / s : n == e ? (r - t) / s + 2 : (t - e) / s + 4) + 360) % 6 * 60 / 360, s: 0 == s ? 0 : i < .5 ? s / (2 * i) : s / (2 - 2 * i), l: i, toString: nt } }, t._path2string = function () { return this.join(",").replace(D, "$1") }; t._preload = function (t, e) { var r = o.doc.createElement("img"); r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () { e.call(this), this.onload = null, o.doc.body.removeChild(this) }, r.onerror = function () { o.doc.body.removeChild(this) }, o.doc.body.appendChild(r), r.src = t }; function ht() { return this.hex } function ut(t, e) { for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) { var a = [{ x: +t[i - 2], y: +t[i - 1] }, { x: +t[i], y: +t[i + 1] }, { x: +t[i + 2], y: +t[i + 3] }, { x: +t[i + 4], y: +t[i + 5] }]; e ? i ? n - 4 == i ? a[3] = { x: +t[0], y: +t[1] } : n - 2 == i && (a[2] = { x: +t[0], y: +t[1] }, a[3] = { x: +t[2], y: +t[3] }) : a[0] = { x: +t[n - 2], y: +t[n - 1] } : n - 4 == i ? a[3] = a[2] : i || (a[0] = { x: +t[i], y: +t[i + 1] }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]) } return r } t.getRGB = lt(function (e) { if (!e || (e = d(e)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ht }; if ("none" == e) return { r: -1, g: -1, b: -1, hex: "none", toString: ht }; !q[s](e.toLowerCase().substring(0, 2)) && "#" != e.charAt() && (e = rt(e)); var r, i, n, a, o, l, h = e.match(N); return h ? (h[2] && (n = F(h[2].substring(5), 16), i = F(h[2].substring(3, 5), 16), r = F(h[2].substring(1, 3), 16)), h[3] && (n = F((o = h[3].charAt(3)) + o, 16), i = F((o = h[3].charAt(2)) + o, 16), r = F((o = h[3].charAt(1)) + o, 16)), h[4] && (l = h[4][g](j), r = E(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = E(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = E(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), h[5] ? (l = h[5][g](j), r = E(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = E(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = E(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), t.hsb2rgb(r, i, n, a)) : h[6] ? (l = h[6][g](j), r = E(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = E(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = E(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), t.hsl2rgb(r, i, n, a)) : ((h = { r: r, g: i, b: n, toString: ht }).hex = "#" + (16777216 | n | i << 8 | r << 16).toString(16).slice(1), t.is(a, "finite") && (h.opacity = a), h)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ht } }, t), t.hsb = lt(function (e, r, i) { return t.hsb2rgb(e, r, i).hex }), t.hsl = lt(function (e, r, i) { return t.hsl2rgb(e, r, i).hex }), t.rgb = lt(function (t, e, r) { return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1) }), t.getColor = function (t) { var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || .75 }, r = this.hsb2rgb(e.h, e.s, e.b); return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), r.hex }, t.getColor.reset = function () { delete this.start }, t.parsePathString = function (e) { if (!e) return null; var r = ct(e); if (r.arr) return yt(r.arr); var i = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 }, n = []; return t.is(e, A) && t.is(e[0], A) && (n = yt(e)), n.length || d(e).replace(V, function (t, e, r) { var a = [], s = e.toLowerCase(); if (r.replace(Y, function (t, e) { e && a.push(+e) }), "m" == s && a.length > 2 && (n.push([e][c](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][c](a)); else for (; a.length >= i[s] && (n.push([e][c](a.splice(0, i[s]))), i[s]) ;); }), n.toString = t._path2string, r.arr = yt(n), n }, t.parseTransformString = lt(function (e) { if (!e) return null; var r = []; return t.is(e, A) && t.is(e[0], A) && (r = yt(e)), r.length || d(e).replace(O, function (t, e, i) { var n = []; y.call(e); i.replace(Y, function (t, e) { e && n.push(+e) }), r.push([e][c](n)) }), r.toString = t._path2string, r }); var ct = function (t) { var e = ct.ps = ct.ps || {}; return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function () { for (var r in e) e[s](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r]) }), e[t] }; function ft(t, e, r, i, n) { return t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r } function pt(t, e, r, i, n, a, s, o, l) { null == l && (l = 1); for (var h = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; p < 12; p++) { var d = h * u[p] + h, g = ft(d, t, r, n, s), v = ft(d, e, i, a, o), x = g * g + v * v; f += c[p] * m.sqrt(x) } return h * f } function dt(t, e, r, i, n, a, s, o) { if (!(b(t, r) < _(n, s) || _(t, r) > b(n, s) || b(e, i) < _(a, o) || _(e, i) > b(a, o))) { var l = (t - r) * (a - o) - (e - i) * (n - s); if (l) { var h = ((t * i - e * r) * (n - s) - (t - r) * (n * o - a * s)) / l, u = ((t * i - e * r) * (a - o) - (e - i) * (n * o - a * s)) / l, c = +h.toFixed(2), f = +u.toFixed(2); if (!(c < +_(t, r).toFixed(2) || c > +b(t, r).toFixed(2) || c < +_(n, s).toFixed(2) || c > +b(n, s).toFixed(2) || f < +_(e, i).toFixed(2) || f > +b(e, i).toFixed(2) || f < +_(a, o).toFixed(2) || f > +b(a, o).toFixed(2))) return { x: h, y: u } } } } function gt(e, r, i) { var n = t.bezierBBox(e), a = t.bezierBBox(r); if (!t.isBBoxIntersect(n, a)) return i ? 0 : []; for (var s = ~~(pt.apply(0, e) / 5), o = ~~(pt.apply(0, r) / 5), l = [], h = [], u = {}, c = i ? 0 : [], f = 0; f < s + 1; f++) { var p = t.findDotsAtSegment.apply(t, e.concat(f / s)); l.push({ x: p.x, y: p.y, t: f / s }) } for (f = 0; f < o + 1; f++) p = t.findDotsAtSegment.apply(t, r.concat(f / o)), h.push({ x: p.x, y: p.y, t: f / o }); for (f = 0; f < s; f++) for (var d = 0; d < o; d++) { var g = l[f], v = l[f + 1], x = h[d], y = h[d + 1], m = w(v.x - g.x) < .001 ? "y" : "x", b = w(y.x - x.x) < .001 ? "y" : "x", _ = dt(g.x, g.y, v.x, v.y, x.x, x.y, y.x, y.y); if (_) { if (u[_.x.toFixed(4)] == _.y.toFixed(4)) continue; u[_.x.toFixed(4)] = _.y.toFixed(4); var k = g.t + w((_[m] - g[m]) / (v[m] - g[m])) * (v.t - g.t), C = x.t + w((_[b] - x[b]) / (y[b] - x[b])) * (y.t - x.t); k >= 0 && k <= 1 && C >= 0 && C <= 1 && (i ? c++ : c.push({ x: _.x, y: _.y, t1: k, t2: C })) } } return c } function vt(e, r, i) { e = t._path2curve(e), r = t._path2curve(r); for (var n, a, s, o, l, h, u, c, f, p, d = i ? 0 : [], g = 0, v = e.length; g < v; g++) { var x = e[g]; if ("M" == x[0]) n = l = x[1], a = h = x[2]; else { "C" == x[0] ? (n = (f = [n, a].concat(x.slice(1)))[6], a = f[7]) : (f = [n, a, n, a, l, h, l, h], n = l, a = h); for (var y = 0, m = r.length; y < m; y++) { var b = r[y]; if ("M" == b[0]) s = u = b[1], o = c = b[2]; else { "C" == b[0] ? (s = (p = [s, o].concat(b.slice(1)))[6], o = p[7]) : (p = [s, o, s, o, u, c, u, c], s = u, o = c); var _ = gt(f, p, i); if (i) d += _; else { for (var w = 0, k = _.length; w < k; w++) _[w].segment1 = g, _[w].segment2 = y, _[w].bez1 = f, _[w].bez2 = p; d = d.concat(_) } } } } } return d } t.findDotsAtSegment = function (t, e, r, i, n, a, s, o, l) { var h = 1 - l, u = k(h, 3), c = k(h, 2), f = l * l, p = f * l, d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s, g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o, v = t + 2 * l * (r - t) + f * (n - 2 * r + t), x = e + 2 * l * (i - e) + f * (a - 2 * i + e), y = r + 2 * l * (n - r) + f * (s - 2 * n + r), b = i + 2 * l * (a - i) + f * (o - 2 * a + i), _ = h * t + l * r, w = h * e + l * i, B = h * n + l * s, S = h * a + l * o, A = 90 - 180 * m.atan2(v - y, x - b) / C; return (v > y || x < b) && (A += 180), { x: d, y: g, m: { x: v, y: x }, n: { x: y, y: b }, start: { x: _, y: w }, end: { x: B, y: S }, alpha: A } }, t.bezierBBox = function (e, r, i, n, a, s, o, l) { t.is(e, "array") || (e = [e, r, i, n, a, s, o, l]); var h = Bt.apply(null, e); return { x: h.min.x, y: h.min.y, x2: h.max.x, y2: h.max.y, width: h.max.x - h.min.x, height: h.max.y - h.min.y } }, t.isPointInsideBBox = function (t, e, r) { return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2 }, t.isBBoxIntersect = function (e, r) { var i = t.isPointInsideBBox; return i(r, e.x, e.y) || i(r, e.x2, e.y) || i(r, e.x, e.y2) || i(r, e.x2, e.y2) || i(e, r.x, r.y) || i(e, r.x2, r.y) || i(e, r.x, r.y2) || i(e, r.x2, r.y2) || (e.x < r.x2 && e.x > r.x || r.x < e.x2 && r.x > e.x) && (e.y < r.y2 && e.y > r.y || r.y < e.y2 && r.y > e.y) }, t.pathIntersection = function (t, e) { return vt(t, e) }, t.pathIntersectionNumber = function (t, e) { return vt(t, e, 1) }, t.isPointInsidePath = function (e, r, i) { var n = t.pathBBox(e); return t.isPointInsideBBox(n, r, i) && vt(e, [["M", r, i], ["H", n.x2 + 10]], 1) % 2 == 1 }, t._removedFactory = function (t) { return function () { eve("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t) } }; var xt = t.pathBBox = function (t) { var e = ct(t); if (e.bbox) return e.bbox; if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 }; for (var r, i = 0, n = 0, a = [], s = [], o = 0, l = (t = St(t)).length; o < l; o++) if ("M" == (r = t[o])[0]) i = r[1], n = r[2], a.push(i), s.push(n); else { var h = Bt(i, n, r[1], r[2], r[3], r[4], r[5], r[6]); a = a[c](h.min.x, h.max.x), s = s[c](h.min.y, h.max.y), i = r[5], n = r[6] } var f = _[u](0, a), p = _[u](0, s), d = b[u](0, a), g = b[u](0, s), v = { x: f, y: p, x2: d, y2: g, width: d - f, height: g - p }; return e.bbox = K(v), v }, yt = function (e) { var r = K(e); return r.toString = t._path2string, r }, mt = t._pathToRelative = function (e) { var r = ct(e); if (r.rel) return yt(r.rel); t.is(e, A) && t.is(e && e[0], A) || (e = t.parsePathString(e)); var i = [], n = 0, a = 0, s = 0, o = 0, l = 0; "M" == e[0][0] && (s = n = e[0][1], o = a = e[0][2], l++, i.push(["M", n, a])); for (var h = l, u = e.length; h < u; h++) { var c = i[h] = [], f = e[h]; if (f[0] != y.call(f[0])) switch (c[0] = y.call(f[0]), c[0]) { case "a": c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - n).toFixed(3), c[7] = +(f[7] - a).toFixed(3); break; case "v": c[1] = +(f[1] - a).toFixed(3); break; case "m": s = f[1], o = f[2]; default: for (var p = 1, d = f.length; p < d; p++) c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3) } else { c = i[h] = [], "m" == f[0] && (s = f[1] + n, o = f[2] + a); for (var g = 0, v = f.length; g < v; g++) i[h][g] = f[g] } var x = i[h].length; switch (i[h][0]) { case "z": n = s, a = o; break; case "h": n += +i[h][x - 1]; break; case "v": a += +i[h][x - 1]; break; default: n += +i[h][x - 2], a += +i[h][x - 1] } } return i.toString = t._path2string, r.rel = yt(i), i }, bt = t._pathToAbsolute = function (e) { var r = ct(e); if (r.abs) return yt(r.abs); if (t.is(e, A) && t.is(e && e[0], A) || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]]; var i = [], n = 0, a = 0, s = 0, o = 0, l = 0; "M" == e[0][0] && (s = n = +e[0][1], o = a = +e[0][2], l++, i[0] = ["M", n, a]); for (var h, u, f = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), p = l, d = e.length; p < d; p++) { if (i.push(h = []), (u = e[p])[0] != R.call(u[0])) switch (h[0] = R.call(u[0]), h[0]) { case "A": h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5], h[6] = +(u[6] + n), h[7] = +(u[7] + a); break; case "V": h[1] = +u[1] + a; break; case "H": h[1] = +u[1] + n; break; case "R": for (var g = [n, a][c](u.slice(1)), v = 2, x = g.length; v < x; v++) g[v] = +g[v] + n, g[++v] = +g[v] + a; i.pop(), i = i[c](ut(g, f)); break; case "M": s = +u[1] + n, o = +u[2] + a; default: for (v = 1, x = u.length; v < x; v++) h[v] = +u[v] + (v % 2 ? n : a) } else if ("R" == u[0]) g = [n, a][c](u.slice(1)), i.pop(), i = i[c](ut(g, f)), h = ["R"][c](u.slice(-2)); else for (var y = 0, m = u.length; y < m; y++) h[y] = u[y]; switch (h[0]) { case "Z": n = s, a = o; break; case "H": n = h[1]; break; case "V": a = h[1]; break; case "M": s = h[h.length - 2], o = h[h.length - 1]; default: n = h[h.length - 2], a = h[h.length - 1] } } return i.toString = t._path2string, r.abs = yt(i), i }, _t = function (t, e, r, i) { return [t, e, r, i, r, i] }, wt = function (t, e, r, i, n, a) { return [1 / 3 * t + 2 / 3 * r, 1 / 3 * e + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * a + 2 / 3 * i, n, a] }, kt = function (t, e, r, i, n, a, s, o, l, h) { var u, f = 120 * C / 180, p = C / 180 * (+n || 0), d = [], v = lt(function (t, e, r) { return { x: t * m.cos(r) - e * m.sin(r), y: t * m.sin(r) + e * m.cos(r) } }); if (h) T = h[0], N = h[1], S = h[2], A = h[3]; else { t = (u = v(t, e, -p)).x, e = u.y, o = (u = v(o, l, -p)).x, l = u.y; m.cos(C / 180 * n), m.sin(C / 180 * n); var x = (t - o) / 2, y = (e - l) / 2, b = x * x / (r * r) + y * y / (i * i); b > 1 && (r *= b = m.sqrt(b), i *= b); var _ = r * r, k = i * i, B = (a == s ? -1 : 1) * m.sqrt(w((_ * k - _ * y * y - k * x * x) / (_ * y * y + k * x * x))), S = B * r * y / i + (t + o) / 2, A = B * -i * x / r + (e + l) / 2, T = m.asin(((e - A) / i).toFixed(9)), N = m.asin(((l - A) / i).toFixed(9)); T = t < S ? C - T : T, N = o < S ? C - N : N, T < 0 && (T = 2 * C + T), N < 0 && (N = 2 * C + N), s && T > N && (T -= 2 * C), !s && N > T && (N -= 2 * C) } var L = N - T; if (w(L) > f) { var M = N, z = o, E = l; N = T + f * (s && N > T ? 1 : -1), o = S + r * m.cos(N), l = A + i * m.sin(N), d = kt(o, l, r, i, n, 0, s, z, E, [N, M, S, A]) } L = N - T; var F = m.cos(T), R = m.sin(T), P = m.cos(N), I = m.sin(N), j = m.tan(L / 4), q = 4 / 3 * r * j, D = 4 / 3 * i * j, V = [t, e], O = [t + q * R, e - D * F], Y = [o + q * I, l - D * P], G = [o, l]; if (O[0] = 2 * V[0] - O[0], O[1] = 2 * V[1] - O[1], h) return [O, Y, G][c](d); for (var W = [], X = 0, H = (d = [O, Y, G][c](d).join()[g](",")).length; X < H; X++) W[X] = X % 2 ? v(d[X - 1], d[X], p).y : v(d[X], d[X + 1], p).x; return W }, Ct = function (t, e, r, i, n, a, s, o, l) { var h = 1 - l; return { x: k(h, 3) * t + 3 * k(h, 2) * l * r + 3 * h * l * l * n + k(l, 3) * s, y: k(h, 3) * e + 3 * k(h, 2) * l * i + 3 * h * l * l * a + k(l, 3) * o } }, Bt = lt(function (t, e, r, i, n, a, s, o) { var l, h = n - 2 * r + t - (s - 2 * n + r), c = 2 * (r - t) - 2 * (n - r), f = t - r, p = (-c + m.sqrt(c * c - 4 * h * f)) / 2 / h, d = (-c - m.sqrt(c * c - 4 * h * f)) / 2 / h, g = [e, o], v = [t, s]; return w(p) > "1e12" && (p = .5), w(d) > "1e12" && (d = .5), p > 0 && p < 1 && (l = Ct(t, e, r, i, n, a, s, o, p), v.push(l.x), g.push(l.y)), d > 0 && d < 1 && (l = Ct(t, e, r, i, n, a, s, o, d), v.push(l.x), g.push(l.y)), h = a - 2 * i + e - (o - 2 * a + i), f = e - i, p = (-(c = 2 * (i - e) - 2 * (a - i)) + m.sqrt(c * c - 4 * h * f)) / 2 / h, d = (-c - m.sqrt(c * c - 4 * h * f)) / 2 / h, w(p) > "1e12" && (p = .5), w(d) > "1e12" && (d = .5), p > 0 && p < 1 && (l = Ct(t, e, r, i, n, a, s, o, p), v.push(l.x), g.push(l.y)), d > 0 && d < 1 && (l = Ct(t, e, r, i, n, a, s, o, d), v.push(l.x), g.push(l.y)), { min: { x: _[u](0, v), y: _[u](0, g) }, max: { x: b[u](0, v), y: b[u](0, g) } } }), St = t._path2curve = lt(function (t, e) { var r = !e && ct(t); if (!e && r.curve) return yt(r.curve); for (var i = bt(t), n = e && bt(e), a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, o = function (t, e) { if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) { case "M": e.X = t[1], e.Y = t[2]; break; case "A": t = ["C"][c](kt[u](0, [e.x, e.y][c](t.slice(1)))); break; case "S": t = ["C", e.x + (e.x - (e.bx || e.x)), e.y + (e.y - (e.by || e.y))][c](t.slice(1)); break; case "T": e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][c](wt(e.x, e.y, e.qx, e.qy, t[1], t[2])); break; case "Q": e.qx = t[1], e.qy = t[2], t = ["C"][c](wt(e.x, e.y, t[1], t[2], t[3], t[4])); break; case "L": t = ["C"][c](_t(e.x, e.y, t[1], t[2])); break; case "H": t = ["C"][c](_t(e.x, e.y, t[1], e.y)); break; case "V": t = ["C"][c](_t(e.x, e.y, e.x, t[1])); break; case "Z": t = ["C"][c](_t(e.x, e.y, e.X, e.Y)) } return t }, l = function (t, e) { if (t[e].length > 7) { t[e].shift(); for (var r = t[e]; r.length;) t.splice(e++, 0, ["C"][c](r.splice(0, 6))); t.splice(e, 1), p = b(i.length, n && n.length || 0) } }, h = function (t, e, r, a, s) { t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], p = b(i.length, n && n.length || 0)) }, f = 0, p = b(i.length, n && n.length || 0) ; f < p; f++) { i[f] = o(i[f], a), l(i, f), n && (n[f] = o(n[f], s)), n && l(n, f), h(i, n, a, s, f), h(n, i, s, a, f); var d = i[f], g = n && n[f], v = d.length, x = n && g.length; a.x = d[v - 2], a.y = d[v - 1], a.bx = E(d[v - 4]) || a.x, a.by = E(d[v - 3]) || a.y, s.bx = n && (E(g[x - 4]) || s.x), s.by = n && (E(g[x - 3]) || s.y), s.x = n && g[x - 2], s.y = n && g[x - 1] } return n || (r.curve = yt(i)), n ? [i, n] : i }, null, yt), At = (t._parseDots = lt(function (e) { for (var r = [], i = 0, n = e.length; i < n; i++) { var a = {}, s = e[i].match(/^([^:]*):?([\d\.]*)/); if (a.color = t.getRGB(s[1]), a.color.error) return null; a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), r.push(a) } for (i = 1, n = r.length - 1; i < n; i++) if (!r[i].offset) { for (var o = E(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++) if (r[h].offset) { l = r[h].offset; break } l || (l = 100, h = n); for (var u = ((l = E(l)) - o) / (h - i + 1) ; i < h; i++) o += u, r[i].offset = o + "%" } return r }), t._tear = function (t, e) { t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next) }), Tt = (t._tofront = function (t, e) { e.top !== t && (At(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t) }, t._toback = function (t, e) { e.bottom !== t && (At(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t) }, t._insertafter = function (t, e, r) { At(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t }, t._insertbefore = function (t, e, r) { At(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e }, t.toMatrix = function (t, e) { var r = xt(t), i = { _: { transform: "" }, getBBox: function () { return r } }; return Nt(i, e), i.matrix }), Nt = (t.transformPath = function (t, e) { return Z(t, Tt(t, e)) }, t._extractTransform = function (e, r) { if (null == r) return e._.transform; r = d(r).replace(/\.{3}|\u2026/g, e._.transform || ""); var i, n, a = t.parseTransformString(r), s = 0, o = 1, l = 1, h = e._, u = new zt; if (h.transform = a || [], a) for (var c = 0, f = a.length; c < f; c++) { var p, g, v, x, y, m = a[c], b = m.length, _ = d(m[0]).toLowerCase(), w = m[0] != _, k = w ? u.invert() : 0; "t" == _ && 3 == b ? w ? (p = k.x(0, 0), g = k.y(0, 0), v = k.x(m[1], m[2]), x = k.y(m[1], m[2]), u.translate(v - p, x - g)) : u.translate(m[1], m[2]) : "r" == _ ? 2 == b ? (y = y || e.getBBox(1), u.rotate(m[1], y.x + y.width / 2, y.y + y.height / 2), s += m[1]) : 4 == b && (w ? (v = k.x(m[2], m[3]), x = k.y(m[2], m[3]), u.rotate(m[1], v, x)) : u.rotate(m[1], m[2], m[3]), s += m[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || e.getBBox(1), u.scale(m[1], m[b - 1], y.x + y.width / 2, y.y + y.height / 2), o *= m[1], l *= m[b - 1]) : 5 == b && (w ? (v = k.x(m[3], m[4]), x = k.y(m[3], m[4]), u.scale(m[1], m[2], v, x)) : u.scale(m[1], m[2], m[3], m[4]), o *= m[1], l *= m[2]) : "m" == _ && 7 == b && u.add(m[1], m[2], m[3], m[4], m[5], m[6]), h.dirtyT = 1, e.matrix = u } e.matrix = u, h.sx = o, h.sy = l, h.deg = s, h.dx = i = u.e, h.dy = n = u.f, 1 == o && 1 == l && !s && h.bbox ? (h.bbox.x += +i, h.bbox.y += +n) : h.dirtyT = 1 }), Lt = function (t) { var e = t[0]; switch (e.toLowerCase()) { case "t": return [e, 0, 0]; case "m": return [e, 1, 0, 0, 1, 0, 0]; case "r": return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0]; case "s": return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1] } }, Mt = t._equaliseTransform = function (e, r) { r = d(r).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], r = t.parseTransformString(r) || []; for (var i, n, a, s, o = b(e.length, r.length), l = [], h = [], u = 0; u < o; u++) { if (a = e[u] || Lt(r[u]), s = r[u] || Lt(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return; for (l[u] = [], h[u] = [], i = 0, n = b(a.length, s.length) ; i < n; i++) i in a && (l[u][i] = a[i]), i in s && (h[u][i] = s[i]) } return { from: l, to: h } }; function zt(t, e, r, i, n, a) { null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) } t._getContainer = function (e, r, i, n) { var a; if (null != (a = null != n || t.is(e, "object") ? e : o.doc.getElementById(e))) return a.tagName ? null == r ? { container: a, width: a.style.pixelWidth || a.offsetWidth, height: a.style.pixelHeight || a.offsetHeight } : { container: a, width: r, height: i } : { container: 1, x: e, y: r, width: i, height: n } }, t.pathToRelative = mt, t._engine = {}, t.path2curve = St, t.matrix = function (t, e, r, i, n, a) { return new zt(t, e, r, i, n, a) }, function (e) { function r(t) { return t[0] * t[0] + t[1] * t[1] } function i(t) { var e = m.sqrt(r(t)); t[0] && (t[0] /= e), t[1] && (t[1] /= e) } e.add = function (t, e, r, i, n, a) { var s, o, l, h, u = [[], [], []], c = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], f = [[t, r, n], [e, i, a], [0, 0, 1]]; for (t && t instanceof zt && (f = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; s < 3; s++) for (o = 0; o < 3; o++) { for (h = 0, l = 0; l < 3; l++) h += c[s][l] * f[l][o]; u[s][o] = h } this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2] }, e.invert = function () { var t = this, e = t.a * t.d - t.b * t.c; return new zt(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e) }, e.clone = function () { return new zt(this.a, this.b, this.c, this.d, this.e, this.f) }, e.translate = function (t, e) { this.add(1, 0, 0, 1, t, e) }, e.scale = function (t, e, r, i) { null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i) }, e.rotate = function (e, r, i) { e = t.rad(e), r = r || 0, i = i || 0; var n = +m.cos(e).toFixed(9), a = +m.sin(e).toFixed(9); this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i) }, e.x = function (t, e) { return t * this.a + e * this.c + this.e }, e.y = function (t, e) { return t * this.b + e * this.d + this.f }, e.get = function (t) { return +this[d.fromCharCode(97 + t)].toFixed(4) }, e.toString = function () { return t.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, e.toFilter = function () { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, e.offset = function () { return [this.e.toFixed(4), this.f.toFixed(4)] }, e.split = function () { var e = {}; e.dx = this.e, e.dy = this.f; var n = [[this.a, this.c], [this.b, this.d]]; e.scalex = m.sqrt(r(n[0])), i(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = m.sqrt(r(n[1])), i(n[1]), e.shear /= e.scaley; var a = -n[0][1], s = n[1][1]; return s < 0 ? (e.rotate = t.deg(m.acos(s)), a < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(m.asin(a)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e }, e.toTransformString = function (t) { var e = t || this[g](); return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : "") + (e.rotate ? "r" + [e.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] } }(zt.prototype); var Et = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/); "Apple Computer, Inc." == navigator.vendor && (Et && Et[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Et && Et[1] < 8 ? r.safari = function () { var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: "none" }); setTimeout(function () { t.remove() }) } : r.safari = function () { }; for (var Ft = function () { this.returnValue = !1 }, Rt = function () { return this.originalEvent.preventDefault() }, Pt = function () { this.cancelBubble = !0 }, It = function () { return this.originalEvent.stopPropagation() }, jt = o.doc.addEventListener ? function (t, e, r, i) { var n = f && x[e] ? x[e] : e, a = function (n) { var a = o.doc.documentElement.scrollTop || o.doc.body.scrollTop, l = o.doc.documentElement.scrollLeft || o.doc.body.scrollLeft, h = n.clientX + l, u = n.clientY + a; if (f && x[s](e)) for (var c = 0, p = n.targetTouches && n.targetTouches.length; c < p; c++) if (n.targetTouches[c].target == t) { var d = n; (n = n.targetTouches[c]).originalEvent = d, n.preventDefault = Rt, n.stopPropagation = It; break } return r.call(i, n, h, u) }; return t.addEventListener(n, a, !1), function () { return t.removeEventListener(n, a, !1), !0 } } : o.doc.attachEvent ? function (t, e, r, i) { var n = function (t) { t = t || o.win.event; var e = o.doc.documentElement.scrollTop || o.doc.body.scrollTop, n = o.doc.documentElement.scrollLeft || o.doc.body.scrollLeft, a = t.clientX + n, s = t.clientY + e; return t.preventDefault = t.preventDefault || Ft, t.stopPropagation = t.stopPropagation || Pt, r.call(i, t, a, s) }; return t.attachEvent("on" + e, n), function () { return t.detachEvent("on" + e, n), !0 } } : void 0, qt = [], Dt = function (t) { for (var e, r = t.clientX, i = t.clientY, n = o.doc.documentElement.scrollTop || o.doc.body.scrollTop, a = o.doc.documentElement.scrollLeft || o.doc.body.scrollLeft, s = qt.length; s--;) { if (e = qt[s], f) { for (var l, h = t.touches.length; h--;) if ((l = t.touches[h]).identifier == e.el._drag.id) { r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault(); break } } else t.preventDefault(); var u, c = e.el.node, p = c.nextSibling, d = c.parentNode, g = c.style.display; o.win.opera && d.removeChild(c), c.style.display = "none", u = e.el.paper.getElementByPoint(r, i), c.style.display = g, o.win.opera && (p ? d.insertBefore(c, p) : d.appendChild(c)), u && eve("raphael.drag.over." + e.el.id, e.el, u), r += a, i += n, eve("raphael.drag.move." + e.el.id, e.move_scope || e.el, r - e.el._drag.x, i - e.el._drag.y, r, i, t) } }, Vt = function (e) { t.unmousemove(Dt).unmouseup(Vt); for (var r, i = qt.length; i--;) (r = qt[i]).el._drag = {}, eve("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, e); qt = [] }, Ot = t.el = {}, Yt = v.length; Yt--;) !function (e) { t[e] = Ot[e] = function (r, i) { return t.is(r, "function") && (this.events = this.events || [], this.events.push({ name: e, f: r, unbind: jt(this.shape || this.node || o.doc, e, r, i || this) })), this }, t["un" + e] = Ot["un" + e] = function (t) { for (var r = this.events || [], i = r.length; i--;) if (r[i].name == e && r[i].f == t) return r[i].unbind(), r.splice(i, 1), !r.length && delete this.events, this; return this } }(v[Yt]); Ot.data = function (e, r) { var i = G[this.id] = G[this.id] || {}; if (1 == arguments.length) { if (t.is(e, "object")) { for (var n in e) e[s](n) && this.data(n, e[n]); return this } return eve("raphael.data.get." + this.id, this, i[e], e), i[e] } return i[e] = r, eve("raphael.data.set." + this.id, this, r, e), this }, Ot.removeData = function (t) { return null == t ? G[this.id] = {} : G[this.id] && delete G[this.id][t], this }, Ot.hover = function (t, e, r, i) { return this.mouseover(t, r).mouseout(e, i || r) }, Ot.unhover = function (t, e) { return this.unmouseover(t).unmouseout(e) }; var Gt = []; Ot.drag = function (e, r, i, n, a, s) { function l(l) { (l.originalEvent || l).preventDefault(); var h = o.doc.documentElement.scrollTop || o.doc.body.scrollTop, u = o.doc.documentElement.scrollLeft || o.doc.body.scrollLeft; this._drag.x = l.clientX + u, this._drag.y = l.clientY + h, this._drag.id = l.identifier, !qt.length && t.mousemove(Dt).mouseup(Vt), qt.push({ el: this, move_scope: n, start_scope: a, end_scope: s }), r && eve.on("raphael.drag.start." + this.id, r), e && eve.on("raphael.drag.move." + this.id, e), i && eve.on("raphael.drag.end." + this.id, i), eve("raphael.drag.start." + this.id, a || n || this, l.clientX + u, l.clientY + h, l) } return this._drag = {}, Gt.push({ el: this, start: l }), this.mousedown(l), this }, Ot.onDragOver = function (t) { t ? eve.on("raphael.drag.over." + this.id, t) : eve.unbind("raphael.drag.over." + this.id) }, Ot.undrag = function () { for (var e = Gt.length; e--;) Gt[e].el == this && (this.unmousedown(Gt[e].start), Gt.splice(e, 1), eve.unbind("raphael.drag.*." + this.id)); !Gt.length && t.unmousemove(Dt).unmouseup(Vt) }, r.circle = function (e, r, i) { var n = t._engine.circle(this, e || 0, r || 0, i || 0); return this.__set__ && this.__set__.push(n), n }, r.rect = function (e, r, i, n, a) { var s = t._engine.rect(this, e || 0, r || 0, i || 0, n || 0, a || 0); return this.__set__ && this.__set__.push(s), s }, r.ellipse = function (e, r, i, n) { var a = t._engine.ellipse(this, e || 0, r || 0, i || 0, n || 0); return this.__set__ && this.__set__.push(a), a }, r.path = function (e) { e && !t.is(e, S) && !t.is(e[0], A) && (e += ""); var r = t._engine.path(t.format[u](t, arguments), this); return this.__set__ && this.__set__.push(r), r }, r.image = function (e, r, i, n, a) { var s = t._engine.image(this, e || "about:blank", r || 0, i || 0, n || 0, a || 0); return this.__set__ && this.__set__.push(s), s }, r.text = function (e, r, i) { var n = t._engine.text(this, e || 0, r || 0, d(i)); return this.__set__ && this.__set__.push(n), n }, r.set = function (e) { !t.is(e, "array") && (e = Array.prototype.splice.call(arguments, 0, arguments.length)); var r = new le(e); return this.__set__ && this.__set__.push(r), r }, r.setStart = function (t) { this.__set__ = t || this.set() }, r.setFinish = function (t) { var e = this.__set__; return delete this.__set__, e }, r.setSize = function (e, r) { return t._engine.setSize.call(this, e, r) }, r.setViewBox = function (e, r, i, n, a) { return t._engine.setViewBox.call(this, e, r, i, n, a) }, r.top = r.bottom = null, r.raphael = t; function Wt() { return this.x + p + this.y + p + this.width + " × " + this.height } r.getElementByPoint = function (t, e) { var r, i, n, a, s, l, h, u = this.canvas, c = o.doc.elementFromPoint(t, e); if (o.win.opera && "svg" == c.tagName) { var f = (i = (r = u).getBoundingClientRect(), n = r.ownerDocument, a = n.body, s = n.documentElement, l = s.clientTop || a.clientTop || 0, h = s.clientLeft || a.clientLeft || 0, { y: i.top + (o.win.pageYOffset || s.scrollTop || a.scrollTop) - l, x: i.left + (o.win.pageXOffset || s.scrollLeft || a.scrollLeft) - h }), p = u.createSVGRect(); p.x = t - f.x, p.y = e - f.y, p.width = p.height = 1; var d = u.getIntersectionList(p, null); d.length && (c = d[d.length - 1]) } if (!c) return null; for (; c.parentNode && c != u.parentNode && !c.raphael;) c = c.parentNode; return c == this.canvas.parentNode && (c = u), c = c && c.raphael ? this.getById(c.raphaelid) : null }, r.getById = function (t) { for (var e = this.bottom; e;) { if (e.id == t) return e; e = e.next } return null }, r.forEach = function (t, e) { for (var r = this.bottom; r;) { if (!1 === t.call(e, r)) return this; r = r.next } return this }, r.getElementsByPoint = function (t, e) { var r = this.set(); return this.forEach(function (i) { i.isPointInside(t, e) && r.push(i) }), r }, Ot.isPointInside = function (e, r) { var i = this.realPath = this.realPath || $[this.type](this); return t.isPointInsidePath(i, e, r) }, Ot.getBBox = function (t) { if (this.removed) return {}; var e = this._; return t ? (!e.dirty && e.bboxwt || (this.realPath = $[this.type](this), e.bboxwt = xt(this.realPath), e.bboxwt.toString = Wt, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = $[this.type](this)), e.bbox = xt(Z(this.realPath, this.matrix)), e.bbox.toString = Wt, e.dirty = e.dirtyT = 0), e.bbox) }, Ot.clone = function () { if (this.removed) return null; var t = this.paper[this.type]().attr(this.attr()); return this.__set__ && this.__set__.push(t), t }, Ot.glow = function (t) { if ("text" == this.type) return null; var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || !1, opacity: t.opacity || .5, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" }, r = e.width / 2, i = this.paper, n = i.set(), a = this.realPath || $[this.type](this); a = this.matrix ? Z(a, this.matrix) : a; for (var s = 1; s < r + 1; s++) n.push(i.path(a).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / r * s).toFixed(3), opacity: +(e.opacity / r).toFixed(3) })); return n.insertBefore(this).translate(e.offsetx, e.offsety) }; var Xt = function (e, r, i, n, a, s, o, l, h) { return null == h ? pt(e, r, i, n, a, s, o, l) : t.findDotsAtSegment(e, r, i, n, a, s, o, l, function (t, e, r, i, n, a, s, o, l) { if (!(l < 0 || pt(t, e, r, i, n, a, s, o) < l)) { var h, u = .5, c = 1 - u; for (h = pt(t, e, r, i, n, a, s, o, c) ; w(h - l) > .01;) u /= 2, h = pt(t, e, r, i, n, a, s, o, c += (h < l ? 1 : -1) * u); return c } }(e, r, i, n, a, s, o, l, h)) }, Ht = function (e, r) { return function (i, n, a) { for (var s, o, l, h, u, c = "", f = {}, p = 0, d = 0, g = (i = St(i)).length; d < g; d++) { if ("M" == (l = i[d])[0]) s = +l[1], o = +l[2]; else { if (p + (h = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6])) > n) { if (r && !f.start) { if (c += ["C" + (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], a) return c; f.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += h, s = +l[5], o = +l[6]; continue } if (!e && !r) return { x: (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).x, y: u.y, alpha: u.alpha } } p += h, s = +l[5], o = +l[6] } c += l.shift() + l } return f.end = c, (u = e ? p : r ? f : t.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (u = { x: u.x, y: u.y, alpha: u.alpha }), u } }, Ut = Ht(1), $t = Ht(), Zt = Ht(0, 1); t.getTotalLength = Ut, t.getPointAtLength = $t, t.getSubpath = function (t, e, r) { if (this.getTotalLength(t) - r < 1e-6) return Zt(t, e).end; var i = Zt(t, r, 1); return e ? Zt(i, e).end : i }, Ot.getTotalLength = function () { if ("path" == this.type) return this.node.getTotalLength ? this.node.getTotalLength() : Ut(this.attrs.path) }, Ot.getPointAtLength = function (t) { if ("path" == this.type) return $t(this.attrs.path, t) }, Ot.getSubpath = function (e, r) { if ("path" == this.type) return t.getSubpath(this.attrs.path, e, r) }; var Qt = t.easing_formulas = { linear: function (t) { return t }, "<": function (t) { return k(t, 1.7) }, ">": function (t) { return k(t, .48) }, "<>": function (t) { var e = .48 - t / 1.04, r = m.sqrt(.1734 + e * e), i = r - e, n = -r - e, a = k(w(i), 1 / 3) * (i < 0 ? -1 : 1) + k(w(n), 1 / 3) * (n < 0 ? -1 : 1) + .5; return 3 * (1 - a) * a * a + a * a * a }, backIn: function (t) { return t * t * (2.70158 * t - 1.70158) }, backOut: function (t) { return (t -= 1) * t * (2.70158 * t + 1.70158) + 1 }, elastic: function (t) { return t == !!t ? t : k(2, -10 * t) * m.sin(2 * C * (t - .075) / .3) + 1 }, bounce: function (t) { var e = 7.5625, r = 2.75; return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375 } }; Qt.easeIn = Qt["ease-in"] = Qt["<"], Qt.easeOut = Qt["ease-out"] = Qt[">"], Qt.easeInOut = Qt["ease-in-out"] = Qt["<>"], Qt["back-in"] = Qt.backIn, Qt["back-out"] = Qt.backOut; var Jt = [], Kt = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) { setTimeout(t, 16) }, te = function () { for (var e = +new Date, r = 0; r < Jt.length; r++) { var i = Jt[r]; if (!i.el.removed && !i.paused) { var n, a, o = e - i.start, l = i.ms, h = i.easing, u = i.from, f = i.diff, d = i.to, g = (i.t, i.el), v = {}, x = {}; if (i.initstatus ? (o = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * l, i.status = i.initstatus, delete i.initstatus, i.stop && Jt.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (o / l)) / i.anim.top, !(o < 0)) if (o < l) { var y = h(o / l); for (var m in u) if (u[s](m)) { switch (I[m]) { case B: n = +u[m] + y * l * f[m]; break; case "colour": n = "rgb(" + [ee(z(u[m].r + y * l * f[m].r)), ee(z(u[m].g + y * l * f[m].g)), ee(z(u[m].b + y * l * f[m].b))].join(",") + ")"; break; case "path": n = []; for (var b = 0, _ = u[m].length; b < _; b++) { n[b] = [u[m][b][0]]; for (var w = 1, k = u[m][b].length; w < k; w++) n[b][w] = +u[m][b][w] + y * l * f[m][b][w]; n[b] = n[b].join(p) } n = n.join(p); break; case "transform": if (f[m].real) for (n = [], b = 0, _ = u[m].length; b < _; b++) for (n[b] = [u[m][b][0]], w = 1, k = u[m][b].length; w < k; w++) n[b][w] = u[m][b][w] + y * l * f[m][b][w]; else { var C = function (t) { return +u[m][t] + y * l * f[m][t] }; n = [["m", C(0), C(1), C(2), C(3), C(4), C(5)]] } break; case "csv": if ("clip-rect" == m) for (n = [], b = 4; b--;) n[b] = +u[m][b] + y * l * f[m][b]; break; default: var S = [][c](u[m]); for (n = [], b = g.paper.customAttributes[m].length; b--;) n[b] = +S[b] + y * l * f[m][b] } v[m] = n } g.attr(v), function (t, e, r) { setTimeout(function () { eve("raphael.anim.frame." + t, e, r) }) }(g.id, g, i.anim) } else { if (function (e, r, i) { setTimeout(function () { eve("raphael.anim.frame." + r.id, r, i), eve("raphael.anim.finish." + r.id, r, i), t.is(e, "function") && e.call(r) }) }(i.callback, g, i.anim), g.attr(d), Jt.splice(r--, 1), i.repeat > 1 && !i.next) { for (a in d) d[s](a) && (x[a] = i.totalOrigin[a]); i.el.attr(x), ne(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1) } i.next && !i.stop && ne(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat) } } } t.svg && g && g.paper && g.paper.safari(), Jt.length && Kt(te) }, ee = function (t) { return t > 255 ? 255 : t < 0 ? 0 : t }; function re(t, e, r, i, n, a) { var s, o = 3 * e, l = 3 * (i - e) - o, h = 1 - o - l, u = 3 * r, c = 3 * (n - r) - u, f = 1 - u - c; function p(t) { return ((h * t + l) * t + o) * t } return s = function (t, e) { var r, i, n, a, s, u; for (n = t, u = 0; u < 8; u++) { if (a = p(n) - t, w(a) < e) return n; if (w(s = (3 * h * n + 2 * l) * n + o) < 1e-6) break; n -= a / s } if (i = 1, (n = t) < (r = 0)) return r; if (n > i) return i; for (; r < i;) { if (a = p(n), w(a - t) < e) return n; t > a ? r = n : i = n, n = (i - r) / 2 + r } return n }(t, 1 / (200 * a)), ((f * s + c) * s + u) * s } function ie(t, e) { var r = [], i = {}; if (this.ms = e, this.times = 1, t) { for (var n in t) t[s](n) && (i[E(n)] = t[n], r.push(E(n))); r.sort(W) } this.anim = i, this.top = r[r.length - 1], this.percents = r } function ne(e, r, n, a, o, l) { n = E(n); var h, u, f, p, v, x, y = e.ms, m = {}, b = {}, _ = {}; if (a) for (k = 0, C = Jt.length; k < C; k++) { var w = Jt[k]; if (w.el.id == r.id && w.anim == e) { w.percent != n ? (Jt.splice(k, 1), f = 1) : u = w, r.attr(w.totalOrigin); break } } else a = +b; for (var k = 0, C = e.percents.length; k < C; k++) { if (e.percents[k] == n || e.percents[k] > a * e.top) { n = e.percents[k], v = e.percents[k - 1] || 0, y = y / e.top * (n - v), p = e.percents[k + 1], h = e.anim[n]; break } a && r.attr(e.anim[e.percents[k]]) } if (h) { if (u) u.initstatus = a, u.start = new Date - u.ms * a; else { for (var S in h) if (h[s](S) && (I[s](S) || r.paper.customAttributes[s](S))) switch (m[S] = r.attr(S), null == m[S] && (m[S] = P[S]), b[S] = h[S], I[S]) { case B: _[S] = (b[S] - m[S]) / y; break; case "colour": m[S] = t.getRGB(m[S]); var A = t.getRGB(b[S]); _[S] = { r: (A.r - m[S].r) / y, g: (A.g - m[S].g) / y, b: (A.b - m[S].b) / y }; break; case "path": var T = St(m[S], b[S]), N = T[1]; for (m[S] = T[0], _[S] = [], k = 0, C = m[S].length; k < C; k++) { _[S][k] = [0]; for (var L = 1, z = m[S][k].length; L < z; L++) _[S][k][L] = (N[k][L] - m[S][k][L]) / y } break; case "transform": var F = r._, R = Mt(F[S], b[S]); if (R) for (m[S] = R.from, b[S] = R.to, _[S] = [], _[S].real = !0, k = 0, C = m[S].length; k < C; k++) for (_[S][k] = [m[S][k][0]], L = 1, z = m[S][k].length; L < z; L++) _[S][k][L] = (b[S][k][L] - m[S][k][L]) / y; else { var j = r.matrix || new zt, q = { _: { transform: F.transform }, getBBox: function () { return r.getBBox(1) } }; m[S] = [j.a, j.b, j.c, j.d, j.e, j.f], Nt(q, b[S]), b[S] = q._.transform, _[S] = [(q.matrix.a - j.a) / y, (q.matrix.b - j.b) / y, (q.matrix.c - j.c) / y, (q.matrix.d - j.d) / y, (q.matrix.e - j.e) / y, (q.matrix.f - j.f) / y] } break; case "csv": var D = d(h[S])[g](i), V = d(m[S])[g](i); if ("clip-rect" == S) for (m[S] = V, _[S] = [], k = V.length; k--;) _[S][k] = (D[k] - m[S][k]) / y; b[S] = D; break; default: for (D = [][c](h[S]), V = [][c](m[S]), _[S] = [], k = r.paper.customAttributes[S].length; k--;) _[S][k] = ((D[k] || 0) - (V[k] || 0)) / y } var O = h.easing, Y = t.easing_formulas[O]; if (!Y) if ((Y = d(O).match(M)) && 5 == Y.length) { var G = Y; Y = function (t) { return re(t, +G[1], +G[2], +G[3], +G[4], y) } } else Y = X; if (w = { anim: e, percent: n, timestamp: x = h.start || e.start || +new Date, start: x + (e.del || 0), status: 0, initstatus: a || 0, stop: !1, ms: y, easing: Y, from: m, diff: _, to: b, el: r, callback: h.callback, prev: v, next: p, repeat: l || e.times, origin: r.attr(), totalOrigin: o }, Jt.push(w), a && !u && !f && (w.stop = !0, w.start = new Date - y * a, 1 == Jt.length)) return te(); f && (w.start = new Date - w.ms * a), 1 == Jt.length && Kt(te) } eve("raphael.anim.start." + r.id, r, e) } } function ae(t) { for (var e = 0; e < Jt.length; e++) Jt[e].el.paper == t && Jt.splice(e--, 1) } Ot.animateWith = function (e, r, i, n, a, s) { var o = this; if (o.removed) return s && s.call(o), o; var l = i instanceof ie ? i : t.animation(i, n, a, s); ne(l, o, l.percents[0], null, o.attr()); for (var h = 0, u = Jt.length; h < u; h++) if (Jt[h].anim == r && Jt[h].el == e) { Jt[u - 1].start = Jt[h].start; break } return o }, Ot.onAnimation = function (t) { return t ? eve.on("raphael.anim.frame." + this.id, t) : eve.unbind("raphael.anim.frame." + this.id), this }, ie.prototype.delay = function (t) { var e = new ie(this.anim, this.ms); return e.times = this.times, e.del = +t || 0, e }, ie.prototype.repeat = function (t) { var e = new ie(this.anim, this.ms); return e.del = this.del, e.times = m.floor(b(t, 0)) || 1, e }, t.animation = function (e, r, i, n) { if (e instanceof ie) return e; !t.is(i, "function") && i || (n = n || i || null, i = null), e = Object(e), r = +r || 0; var a, o, l = {}; for (o in e) e[s](o) && E(o) != o && E(o) + "%" != o && (a = !0, l[o] = e[o]); return a ? (i && (l.easing = i), n && (l.callback = n), new ie({ 100: l }, r)) : new ie(e, r) }, Ot.animate = function (e, r, i, n) { var a = this; if (a.removed) return n && n.call(a), a; var s = e instanceof ie ? e : t.animation(e, r, i, n); return ne(s, a, s.percents[0], null, a.attr()), a }, Ot.setTime = function (t, e) { return t && null != e && this.status(t, _(e, t.ms) / t.ms), this }, Ot.status = function (t, e) { var r, i, n = [], a = 0; if (null != e) return ne(t, this, -1, _(e, 1)), this; for (r = Jt.length; a < r; a++) if ((i = Jt[a]).el.id == this.id && (!t || i.anim == t)) { if (t) return i.status; n.push({ anim: i.anim, status: i.status }) } return t ? 0 : n }, Ot.pause = function (t) { for (var e = 0; e < Jt.length; e++) Jt[e].el.id != this.id || t && Jt[e].anim != t || !1 !== eve("raphael.anim.pause." + this.id, this, Jt[e].anim) && (Jt[e].paused = !0); return this }, Ot.resume = function (t) { for (var e = 0; e < Jt.length; e++) if (Jt[e].el.id == this.id && (!t || Jt[e].anim == t)) { var r = Jt[e]; !1 !== eve("raphael.anim.resume." + this.id, this, r.anim) && (delete r.paused, this.status(r.anim, r.status)) } return this }, Ot.stop = function (t) { for (var e = 0; e < Jt.length; e++) Jt[e].el.id != this.id || t && Jt[e].anim != t || !1 !== eve("raphael.anim.stop." + this.id, this, Jt[e].anim) && Jt.splice(e--, 1); return this }, eve.on("raphael.remove", ae), eve.on("raphael.clear", ae), Ot.toString = function () { return "Raphaël’s object" }; var se, oe, le = function (t) { if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, r = t.length; e < r; e++) !t[e] || t[e].constructor != Ot.constructor && t[e].constructor != le || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++) }, he = le.prototype; he.push = function () { for (var t, e, r = 0, i = arguments.length; r < i; r++) !(t = arguments[r]) || t.constructor != Ot.constructor && t.constructor != le || (this[e = this.items.length] = this.items[e] = t, this.length++); return this }, he.pop = function () { return this.length && delete this[this.length--], this.items.pop() }, he.forEach = function (t, e) { for (var r = 0, i = this.items.length; r < i; r++) if (!1 === t.call(e, this.items[r], r)) return this; return this }; for (var ue in Ot) Ot[s](ue) && (he[ue] = function (t) { return function () { var e = arguments; return this.forEach(function (r) { r[t][u](r, e) }) } }(ue)); he.attr = function (e, r) { if (e && t.is(e, A) && t.is(e[0], "object")) for (var i = 0, n = e.length; i < n; i++) this.items[i].attr(e[i]); else for (var a = 0, s = this.items.length; a < s; a++) this.items[a].attr(e, r); return this }, he.clear = function () { for (; this.length;) this.pop() }, he.splice = function (t, e, r) { t = t < 0 ? b(this.length + t, 0) : t, e = b(0, _(this.length - t, e)); var i, n = [], a = [], s = []; for (i = 2; i < arguments.length; i++) s.push(arguments[i]); for (i = 0; i < e; i++) a.push(this[t + i]); for (; i < this.length - t; i++) n.push(this[t + i]); var o = s.length; for (i = 0; i < o + n.length; i++) this.items[t + i] = this[t + i] = i < o ? s[i] : n[i - o]; for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++]; return new le(a) }, he.exclude = function (t) { for (var e = 0, r = this.length; e < r; e++) if (this[e] == t) return this.splice(e, 1), !0 }, he.animate = function (e, r, i, n) { (t.is(i, "function") || !i) && (n = i || null); var a, s, o = this.items.length, l = o, h = this; if (!o) return this; n && (s = function () { !--o && n.call(h) }), i = t.is(i, S) ? i : s; var u = t.animation(e, r, i, s); for (a = this.items[--l].animate(u) ; l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, u, u); return this }, he.insertAfter = function (t) { for (var e = this.items.length; e--;) this.items[e].insertAfter(t); return this }, he.getBBox = function () { for (var t = [], e = [], r = [], i = [], n = this.items.length; n--;) if (!this.items[n].removed) { var a = this.items[n].getBBox(); t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height) } return { x: t = _[u](0, t), y: e = _[u](0, e), x2: r = b[u](0, r), y2: i = b[u](0, i), width: r - t, height: i - e } }, he.clone = function (t) { t = new le; for (var e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone()); return t }, he.toString = function () { return "Raphaël‘s set" }, t.registerFont = function (t) { if (!t.face) return t; this.fonts = this.fonts || {}; var e = { w: t.w, face: {}, glyphs: {} }, r = t.face["font-family"]; for (var i in t.face) t.face[s](i) && (e.face[i] = t.face[i]); if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) { e.face["units-per-em"] = F(t.face["units-per-em"], 10); for (var n in t.glyphs) if (t.glyphs[s](n)) { var a = t.glyphs[n]; if (e.glyphs[n] = { w: a.w, k: {}, d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function (t) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[t] || "M" }) + "z" }, a.k) for (var o in a.k) a[s](o) && (e.glyphs[n].k[o] = a.k[o]) } } return t }, r.getFont = function (e, r, i, n) { if (n = n || "normal", i = i || "normal", r = +r || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[r] || 400, t.fonts) { var a, o = t.fonts[e]; if (!o) { var l = new RegExp("(^|\\s)" + e.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)", "i"); for (var h in t.fonts) if (t.fonts[s](h) && l.test(h)) { o = t.fonts[h]; break } } if (o) for (var u = 0, c = o.length; u < c && ((a = o[u]).face["font-weight"] != r || a.face["font-style"] != i && a.face["font-style"] || a.face["font-stretch"] != n) ; u++); return a } }, r.print = function (e, r, n, a, s, o, l) { o = o || "middle", l = b(_(l || 0, 1), -1); var h, u = d(n)[g](""), c = 0, f = 0, p = ""; if (t.is(a, n) && (a = this.getFont(a)), a) { h = (s || 16) / a.face["units-per-em"]; for (var v = a.face.bbox[g](i), x = +v[0], y = v[3] - v[1], m = 0, w = +v[1] + ("baseline" == o ? y + +a.face.descent : y / 2), k = 0, C = u.length; k < C; k++) { if ("\n" == u[k]) c = 0, S = 0, f = 0, m += y; else { var B = f && a.glyphs[u[k - 1]] || {}, S = a.glyphs[u[k]]; c += f ? (B.w || a.w) + (B.k && B.k[u[k]] || 0) + a.w * l : 0, f = 1 } S && S.d && (p += t.transformPath(S.d, ["t", c * h, m * h, "s", h, h, x, w, "t", (e - x) / h, (r - w) / h])) } } return this.path(p).attr({ fill: "#000", stroke: "none" }) }, r.add = function (e) { if (t.is(e, "array")) for (var r, i = this.set(), a = 0, o = e.length; a < o; a++) r = e[a] || {}, n[s](r.type) && i.push(this[r.type]().attr(r)); return i }, t.format = function (e, r) { var i = t.is(r, A) ? [0][c](r) : arguments; return e && t.is(e, S) && i.length - 1 && (e = e.replace(a, function (t, e) { return null == i[++e] ? "" : i[e] })), e || "" }, t.fullfill = (se = /\{([^\}]+)\}/g, oe = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function (t, e) { return String(t).replace(se, function (t, r) { return i = t, a = n = e, r.replace(oe, function (t, e, r, i, n) { e = e || i, a && (e in a && (a = a[e]), "function" == typeof a && n && (a = a())) }), a = (null == a || a == n ? i : a) + ""; var i, n, a }) }), t.ninja = function () { return l.was ? o.win.Raphael = l.is : delete Raphael, t }, t.st = he, function (e, r, i) { null == e.readyState && e.addEventListener && (e.addEventListener(r, i = function () { e.removeEventListener(r, i, !1), e.readyState = "complete" }, !1), e.readyState = "loading"), function r() { /in/.test(e.readyState) ? setTimeout(r, 9) : t.eve("raphael.DOMload") }() }(document, "DOMContentLoaded"), l.was ? o.win.Raphael = t : Raphael = t, eve.on("raphael.DOMload", function () { e = !0 }) }(), window.Raphael.svg && function (t) { var e = "hasOwnProperty", r = String, i = parseFloat, n = parseInt, a = Math, s = a.max, o = a.abs, l = a.pow, h = /[, ]+/, u = t.eve, c = "http://www.w3.org/1999/xlink", f = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" }, p = {}; t.toString = function () { return "Your browser supports SVG.\nYou are running Raphaël " + this.version }; var d = function (i, n) { if (n) { "string" == typeof i && (i = d(i)); for (var a in n) n[e](a) && ("xlink:" == a.substring(0, 6) ? i.setAttributeNS(c, a.substring(6), r(n[a])) : i.setAttribute(a, r(n[a]))) } else (i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i)).style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)"); return i }, g = function (e, n) { var h = "linear", u = e.id + n, c = .5, f = .5, p = e.node, g = e.paper, v = p.style, x = t._g.doc.getElementById(u); if (!x) { if (n = (n = r(n).replace(t._radial_gradient, function (t, e, r) { if (h = "radial", e && r) { c = i(e); var n = 2 * ((f = i(r)) > .5) - 1; l(c - .5, 2) + l(f - .5, 2) > .25 && (f = a.sqrt(.25 - l(c - .5, 2)) * n + .5) && .5 != f && (f = f.toFixed(5) - 1e-5 * n) } return "" })).split(/\s*\-\s*/), "linear" == h) { var y = n.shift(); if (y = -i(y), isNaN(y)) return null; var m = [0, 0, a.cos(t.rad(y)), a.sin(t.rad(y))], b = 1 / (s(o(m[2]), o(m[3])) || 1); m[2] *= b, m[3] *= b, m[2] < 0 && (m[0] = -m[2], m[2] = 0), m[3] < 0 && (m[1] = -m[3], m[3] = 0) } var _ = t._parseDots(n); if (!_) return null; if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && u != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) { x = d(h + "Gradient", { id: u }), e.gradient = x, d(x, "radial" == h ? { fx: c, fy: f } : { x1: m[0], y1: m[1], x2: m[2], y2: m[3], gradientTransform: e.matrix.invert() }), g.defs.appendChild(x); for (var w = 0, k = _.length; w < k; w++) x.appendChild(d("stop", { offset: _[w].offset ? _[w].offset : w ? "100%" : "0%", "stop-color": _[w].color || "#fff" })) } } return d(p, { fill: "url(#" + u + ")", opacity: 1, "fill-opacity": 1 }), v.fill = "", v.opacity = 1, v.fillOpacity = 1, 1 }, v = function (t) { var e = t.getBBox(1); d(t.pattern, { patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")" }) }, x = function (i, n, a) { if ("path" == i.type) { for (var s, o, l, h, u, c = r(n).toLowerCase().split("-"), g = i.paper, v = a ? "end" : "start", x = i.node, y = i.attrs, m = y["stroke-width"], b = c.length, _ = "classic", w = 3, k = 3, C = 5; b--;) switch (c[b]) { case "block": case "classic": case "oval": case "diamond": case "open": case "none": _ = c[b]; break; case "wide": k = 5; break; case "narrow": k = 2; break; case "long": w = 5; break; case "short": w = 2 } if ("open" == _ ? (w += 2, k += 2, C += 2, l = 1, h = a ? 4 : 1, u = { fill: "none", stroke: y.stroke }) : (h = l = w / 2, u = { fill: y.stroke, stroke: "none" }), i._.arrows ? a ? (i._.arrows.endPath && p[i._.arrows.endPath]--, i._.arrows.endMarker && p[i._.arrows.endMarker]--) : (i._.arrows.startPath && p[i._.arrows.startPath]--, i._.arrows.startMarker && p[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != _) { var B = "raphael-marker-" + _, S = "raphael-marker-" + v + _ + w + k; t._g.doc.getElementById(B) ? p[B]++ : (g.defs.appendChild(d(d("path"), { "stroke-linecap": "round", d: f[_], id: B })), p[B] = 1); var A, T = t._g.doc.getElementById(S); T ? (p[S]++, A = T.getElementsByTagName("use")[0]) : (T = d(d("marker"), { id: S, markerHeight: k, markerWidth: w, orient: "auto", refX: h, refY: k / 2 }), A = d(d("use"), { "xlink:href": "#" + B, transform: (a ? "rotate(180 " + w / 2 + " " + k / 2 + ") " : "") + "scale(" + w / C + "," + k / C + ")", "stroke-width": (1 / ((w / C + k / C) / 2)).toFixed(4) }), T.appendChild(A), g.defs.appendChild(T), p[S] = 1), d(A, u); var N = l * ("diamond" != _ && "oval" != _); a ? (s = i._.arrows.startdx * m || 0, o = t.getTotalLength(y.path) - N * m) : (s = N * m, o = t.getTotalLength(y.path) - (i._.arrows.enddx * m || 0)), (u = {})["marker-" + v] = "url(#" + S + ")", (o || s) && (u.d = Raphael.getSubpath(y.path, s, o)), d(x, u), i._.arrows[v + "Path"] = B, i._.arrows[v + "Marker"] = S, i._.arrows[v + "dx"] = N, i._.arrows[v + "Type"] = _, i._.arrows[v + "String"] = n } else a ? (s = i._.arrows.startdx * m || 0, o = t.getTotalLength(y.path) - s) : (s = 0, o = t.getTotalLength(y.path) - (i._.arrows.enddx * m || 0)), i._.arrows[v + "Path"] && d(x, { d: Raphael.getSubpath(y.path, s, o) }), delete i._.arrows[v + "Path"], delete i._.arrows[v + "Marker"], delete i._.arrows[v + "dx"], delete i._.arrows[v + "Type"], delete i._.arrows[v + "String"]; for (u in p) if (p[e](u) && !p[u]) { var L = t._g.doc.getElementById(u); L && L.parentNode.removeChild(L) } } }, y = { "": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] }, m = function (t, e, i) { if (e = y[r(e).toLowerCase()]) { for (var n = t.attrs["stroke-width"] || "1", a = { round: n, square: n, butt: 0 }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * n + (o % 2 ? 1 : -1) * a; d(t.node, { "stroke-dasharray": s.join(",") }) } }, b = function (i, a) { var l = i.node, u = i.attrs, f = l.style.visibility; l.style.visibility = "hidden"; for (var p in a) if (a[e](p)) { if (!t._availableAttrs[e](p)) continue; var y = a[p]; switch (u[p] = y, p) { case "blur": i.blur(y); break; case "href": case "title": case "target": var b = l.parentNode; if ("a" != b.tagName.toLowerCase()) { var w = d("a"); b.insertBefore(w, l), w.appendChild(l), b = w } "target" == p ? b.setAttributeNS(c, "show", "blank" == y ? "new" : y) : b.setAttributeNS(c, p, y); break; case "cursor": l.style.cursor = y; break; case "transform": i.transform(y); break; case "arrow-start": x(i, y); break; case "arrow-end": x(i, y, 1); break; case "clip-rect": var k = r(y).split(h); if (4 == k.length) { i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode); var C = d("clipPath"), B = d("rect"); C.id = t.createUUID(), d(B, { x: k[0], y: k[1], width: k[2], height: k[3] }), C.appendChild(B), i.paper.defs.appendChild(C), d(l, { "clip-path": "url(#" + C.id + ")" }), i.clip = B } if (!y) { var S = l.getAttribute("clip-path"); if (S) { var A = t._g.doc.getElementById(S.replace(/(^url\(#|\)$)/g, "")); A && A.parentNode.removeChild(A), d(l, { "clip-path": "" }), delete i.clip } } break; case "path": "path" == i.type && (d(l, { d: y ? u.path = t._pathToAbsolute(y) : "M0,0" }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1))); break; case "width": if (l.setAttribute(p, y), i._.dirty = 1, !u.fx) break; p = "x", y = u.x; case "x": u.fx && (y = -u.x - (u.width || 0)); case "rx": if ("rx" == p && "rect" == i.type) break; case "cx": l.setAttribute(p, y), i.pattern && v(i), i._.dirty = 1; break; case "height": if (l.setAttribute(p, y), i._.dirty = 1, !u.fy) break; p = "y", y = u.y; case "y": u.fy && (y = -u.y - (u.height || 0)); case "ry": if ("ry" == p && "rect" == i.type) break; case "cy": l.setAttribute(p, y), i.pattern && v(i), i._.dirty = 1; break; case "r": "rect" == i.type ? d(l, { rx: y, ry: y }) : l.setAttribute(p, y), i._.dirty = 1; break; case "src": "image" == i.type && l.setAttributeNS(c, "href", y); break; case "stroke-width": 1 == i._.sx && 1 == i._.sy || (y /= s(o(i._.sx), o(i._.sy)) || 1), i.paper._vbSize && (y *= i.paper._vbSize), l.setAttribute(p, y), u["stroke-dasharray"] && m(i, u["stroke-dasharray"], a), i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1)); break; case "stroke-dasharray": m(i, y, a); break; case "fill": var T = r(y).match(t._ISURL); if (T) { C = d("pattern"); var N = d("image"); C.id = t.createUUID(), d(C, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), d(N, { x: 0, y: 0, "xlink:href": T[1] }), C.appendChild(N), function (e) { t._preload(T[1], function () { var t = this.offsetWidth, r = this.offsetHeight; d(e, { width: t, height: r }), d(N, { width: t, height: r }), i.paper.safari() }) }(C), i.paper.defs.appendChild(C), d(l, { fill: "url(#" + C.id + ")" }), i.pattern = C, i.pattern && v(i); break } var L = t.getRGB(y); if (L.error) { if (("circle" == i.type || "ellipse" == i.type || "r" != r(y).charAt()) && g(i, y)) { if ("opacity" in u || "fill-opacity" in u) { var M = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, "")); if (M) { var z = M.getElementsByTagName("stop"); d(z[z.length - 1], { "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1) }) } } u.gradient = y, u.fill = "none"; break } } else delete a.gradient, delete u.gradient, !t.is(u.opacity, "undefined") && t.is(a.opacity, "undefined") && d(l, { opacity: u.opacity }), !t.is(u["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && d(l, { "fill-opacity": u["fill-opacity"] }); L[e]("opacity") && d(l, { "fill-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity }); case "stroke": L = t.getRGB(y), l.setAttribute(p, L.hex), "stroke" == p && L[e]("opacity") && d(l, { "stroke-opacity": L.opacity > 1 ? L.opacity / 100 : L.opacity }), "stroke" == p && i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1)); break; case "gradient": ("circle" == i.type || "ellipse" == i.type || "r" != r(y).charAt()) && g(i, y); break; case "opacity": u.gradient && !u[e]("stroke-opacity") && d(l, { "stroke-opacity": y > 1 ? y / 100 : y }); case "fill-opacity": if (u.gradient) { (M = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (z = M.getElementsByTagName("stop"), d(z[z.length - 1], { "stop-opacity": y })); break } default: "font-size" == p && (y = n(y, 10) + "px"); var E = p.replace(/(\-.)/g, function (t) { return t.substring(1).toUpperCase() }); l.style[E] = y, i._.dirty = 1, l.setAttribute(p, y) } } _(i, a), l.style.visibility = f }, _ = function (i, a) { if ("text" == i.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) { var s = i.attrs, o = i.node, l = o.firstChild ? n(t._g.doc.defaultView.getComputedStyle(o.firstChild, "").getPropertyValue("font-size"), 10) : 10; if (a[e]("text")) { for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild); for (var h, u = r(a.text).split("\n"), c = [], f = 0, p = u.length; f < p; f++) h = d("tspan"), f && d(h, { dy: 1.2 * l, x: s.x }), h.appendChild(t._g.doc.createTextNode(u[f])), o.appendChild(h), c[f] = h } else for (f = 0, p = (c = o.getElementsByTagName("tspan")).length; f < p; f++) f ? d(c[f], { dy: 1.2 * l, x: s.x }) : d(c[0], { dy: 0 }); d(o, { x: s.x, y: s.y }), i._.dirty = 1; var g = i._getBBox(), v = s.y - (g.y + g.height / 2); v && t.is(v, "finite") && d(c[0], { dy: v }) } }, w = function (e, r) { this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null }, k = t.el; w.prototype = k, k.constructor = w, t._engine.path = function (t, e) { var r = d("path"); e.canvas && e.canvas.appendChild(r); var i = new w(r, e); return i.type = "path", b(i, { fill: "none", stroke: "#000", path: t }), i }, k.rotate = function (t, e, n) { if (this.removed) return this; if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) { var a = this.getBBox(1); e = a.x + a.width / 2, n = a.y + a.height / 2 } return this.transform(this._.transform.concat([["r", t, e, n]])), this }, k.scale = function (t, e, n, a) { if (this.removed) return this; if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3])), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1); return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this }, k.translate = function (t, e) { return this.removed ? this : ((t = r(t).split(h)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this) }, k.transform = function (r) { var i = this._; if (null == r) return i.transform; if (t._extractTransform(this, r), this.clip && d(this.clip, { transform: this.matrix.invert() }), this.pattern && v(this), this.node && d(this.node, { transform: this.matrix }), 1 != i.sx || 1 != i.sy) { var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1; this.attr({ "stroke-width": n }) } return this }, k.hide = function () { return !this.removed && this.paper.safari(this.node.style.display = "none"), this }, k.show = function () { return !this.removed && this.paper.safari(this.node.style.display = ""), this }, k.remove = function () { if (!this.removed && this.node.parentNode) { var e = this.paper; e.__set__ && e.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node); for (var r in this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null; this.removed = !0 } }, k._getBBox = function () { if ("none" == this.node.style.display) { this.show(); var t = !0 } var e = {}; try { e = this.node.getBBox() } catch (t) { } finally { e = e || {} } return t && this.hide(), e }, k.attr = function (r, i) { if (this.removed) return this; if (null == r) { var n = {}; for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]); return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n } if (null == i && t.is(r, "string")) { if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; if ("transform" == r) return this._.transform; for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++) (r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r]; return c - 1 ? o : o[s[0]] } if (null == i && t.is(r, "array")) { for (o = {}, l = 0, c = r.length; l < c; l++) o[r[l]] = this.attr(r[l]); return o } if (null != i) { var f = {}; f[r] = i } else null != r && t.is(r, "object") && (f = r); for (var p in f) u("raphael.attr." + p + "." + this.id, this, f[p]); for (p in this.paper.customAttributes) if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) { var d = this.paper.customAttributes[p].apply(this, [].concat(f[p])); this.attrs[p] = f[p]; for (var g in d) d[e](g) && (f[g] = d[g]) } return b(this, f), this }, k.toFront = function () { if (this.removed) return this; "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node); var e = this.paper; return e.top != this && t._tofront(this, e), this }, k.toBack = function () { if (this.removed) return this; var e = this.node.parentNode; "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper); this.paper; return this }, k.insertAfter = function (e) { if (this.removed) return this; var r = e.node || e[e.length - 1].node; return r.nextSibling ? r.parentNode.insertBefore(this.node, r.nextSibling) : r.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this }, k.insertBefore = function (e) { if (this.removed) return this; var r = e.node || e[0].node; return r.parentNode.insertBefore(this.node, r), t._insertbefore(this, e, this.paper), this }, k.blur = function (e) { var r = this; if (0 != +e) { var i = d("filter"), n = d("feGaussianBlur"); r.attrs.blur = e, i.id = t.createUUID(), d(n, { stdDeviation: +e || 1.5 }), i.appendChild(n), r.paper.defs.appendChild(i), r._blur = i, d(r.node, { filter: "url(#" + i.id + ")" }) } else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter") }, t._engine.circle = function (t, e, r, i) { var n = d("circle"); t.canvas && t.canvas.appendChild(n); var a = new w(n, t); return a.attrs = { cx: e, cy: r, r: i, fill: "none", stroke: "#000" }, a.type = "circle", d(n, a.attrs), a }, t._engine.rect = function (t, e, r, i, n, a) { var s = d("rect"); t.canvas && t.canvas.appendChild(s); var o = new w(s, t); return o.attrs = { x: e, y: r, width: i, height: n, r: a || 0, rx: a || 0, ry: a || 0, fill: "none", stroke: "#000" }, o.type = "rect", d(s, o.attrs), o }, t._engine.ellipse = function (t, e, r, i, n) { var a = d("ellipse"); t.canvas && t.canvas.appendChild(a); var s = new w(a, t); return s.attrs = { cx: e, cy: r, rx: i, ry: n, fill: "none", stroke: "#000" }, s.type = "ellipse", d(a, s.attrs), s }, t._engine.image = function (t, e, r, i, n, a) { var s = d("image"); d(s, { x: r, y: i, width: n, height: a, preserveAspectRatio: "none" }), s.setAttributeNS(c, "href", e), t.canvas && t.canvas.appendChild(s); var o = new w(s, t); return o.attrs = { x: r, y: i, width: n, height: a, src: e }, o.type = "image", o }, t._engine.text = function (e, r, i, n) { var a = d("text"); e.canvas && e.canvas.appendChild(a); var s = new w(a, e); return s.attrs = { x: r, y: i, "text-anchor": "middle", text: n, font: t._availableAttrs.font, stroke: "none", fill: "#000" }, s.type = "text", b(s, s.attrs), s }, t._engine.setSize = function (t, e) { return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this }, t._engine.create = function () { var e = t._getContainer.apply(0, arguments), r = e && e.container, i = e.x, n = e.y, a = e.width, s = e.height; if (!r) throw new Error("SVG container not found."); var o, l = d("svg"), h = "overflow:hidden;"; return i = i || 0, n = n || 0, a = a || 512, d(l, { height: s = s || 342, version: 1.1, width: a, xmlns: "http://www.w3.org/2000/svg" }), 1 == r ? (l.style.cssText = h + "position:absolute;left:" + i + "px;top:" + n + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = h + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), (r = new t._Paper).width = a, r.height = s, r.canvas = l, r.clear(), r._left = r._top = 0, o && (r.renderfix = function () { }), r.renderfix(), r }, t._engine.setViewBox = function (t, e, r, i, n) { u("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]); var a, o, l = s(r / this.width, i / this.height), h = this.top, c = n ? "meet" : "xMinYMin"; for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + " " + this.height) : (this._vbSize = l, a = t + " " + e + " " + r + " " + i), d(this.canvas, { viewBox: a, preserveAspectRatio: c }) ; l && h;) o = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({ "stroke-width": o }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev; return this._viewBox = [t, e, r, i, !!n], this }, t.prototype.renderfix = function () { var t, e = this.canvas, r = e.style; try { t = e.getScreenCTM() || e.createSVGMatrix() } catch (r) { t = e.createSVGMatrix() } var i = -t.e % 1, n = -t.f % 1; (i || n) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), n && (this._top = (this._top + n) % 1, r.top = this._top + "px")) }, t.prototype.clear = function () { t.eve("raphael.clear", this); for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild); this.bottom = this.top = null, (this.desc = d("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = d("defs")) }, t.prototype.remove = function () { u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas); for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null }; var C = t.st; for (var B in k) k[e](B) && !C[e](B) && (C[B] = function (t) { return function () { var e = arguments; return this.forEach(function (r) { r[t].apply(r, e) }) } }(B)) }(window.Raphael), window.Raphael.vml && function (t) { var e = "hasOwnProperty", r = String, i = parseFloat, n = Math, a = n.round, s = n.max, o = n.min, l = n.abs, h = "fill", u = /[, ]+/, c = t.eve, f = " ", p = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" }, d = /([clmz]),?([^clmz]*)/gi, g = / progid:\S+Blur\([^\)]+\)/g, v = /-?[^,\s-]+/g, x = "position:absolute;left:0;top:0;width:1px;height:1px", y = 21600, m = { path: 1, rect: 1, image: 1 }, b = { circle: 1, ellipse: 1 }, _ = function (e, r, i) { var n = t.matrix(); return n.rotate(-e, .5, .5), { dx: n.x(r, i), dy: n.y(r, i) } }, w = function (t, e, r, i, n, a) { var s = t._, o = t.matrix, u = s.fillpos, c = t.node, p = c.style, d = 1, g = "", v = y / e, x = y / r; if (p.visibility = "hidden", e && r) { if (c.coordsize = l(v) + f + l(x), p.rotation = a * (e * r < 0 ? -1 : 1), a) { var m = _(a, i, n); i = m.dx, n = m.dy } if (e < 0 && (g += "x"), r < 0 && (g += " y") && (d = -1), p.flip = g, c.coordorigin = i * -v + f + n * -x, u || s.fillsize) { var b = c.getElementsByTagName(h); b = b && b[0], c.removeChild(b), u && (m = _(a, o.x(u[0], u[1]), o.y(u[0], u[1])), b.position = m.dx * d + f + m.dy * d), s.fillsize && (b.size = s.fillsize[0] * l(e) + f + s.fillsize[1] * l(r)), c.appendChild(b) } p.visibility = "visible" } }; t.toString = function () { return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version }; var k, C = function (t, e, i) { for (var n = r(e).toLowerCase().split("-"), a = i ? "end" : "start", s = n.length, o = "classic", l = "medium", h = "medium"; s--;) switch (n[s]) { case "block": case "classic": case "oval": case "diamond": case "open": case "none": o = n[s]; break; case "wide": case "narrow": h = n[s]; break; case "long": case "short": l = n[s] } var u = t.node.getElementsByTagName("stroke")[0]; u[a + "arrow"] = o, u[a + "arrowlength"] = l, u[a + "arrowwidth"] = h }, B = function (n, l) { n.attrs = n.attrs || {}; var c = n.node, g = n.attrs, x = c.style, _ = m[n.type] && (l.x != g.x || l.y != g.y || l.width != g.width || l.height != g.height || l.cx != g.cx || l.cy != g.cy || l.rx != g.rx || l.ry != g.ry || l.r != g.r), B = b[n.type] && (g.cx != l.cx || g.cy != l.cy || g.r != l.r || g.rx != l.rx || g.ry != l.ry), A = n; for (var T in l) l[e](T) && (g[T] = l[T]); if (_ && (g.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (c.href = l.href), l.title && (c.title = l.title), l.target && (c.target = l.target), l.cursor && (x.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || _) && (c.path = function (e) { var i = /[ahqstv]/gi, n = t._pathToAbsolute; if (r(e).match(i) && (n = t._path2curve), i = /[clmz]/g, n == t._pathToAbsolute && !r(e).match(i)) { var s = r(e).replace(d, function (t, e, r) { var i = [], n = "m" == e.toLowerCase(), s = p[e]; return r.replace(v, function (t) { n && 2 == i.length && (s += i + p["m" == e ? "l" : "L"], i = []), i.push(a(t * y)) }), s + i }); return s } var o, l, h = n(e); s = []; for (var u = 0, c = h.length; u < c; u++) { o = h[u], "z" == (l = h[u][0].toLowerCase()) && (l = "x"); for (var g = 1, x = o.length; g < x; g++) l += a(o[g] * y) + (g != x - 1 ? "," : ""); s.push(l) } return s.join(f) }(~r(g.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(g.path) : g.path), "image" == n.type && (n._.fillpos = [g.x, g.y], n._.fillsize = [g.width, g.height], w(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), B) { var N = +g.cx, L = +g.cy, M = +g.rx || +g.r || 0, z = +g.ry || +g.r || 0; c.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((N - M) * y), a((L - z) * y), a((N + M) * y), a((L + z) * y), a(N * y)) } if ("clip-rect" in l) { var E = r(l["clip-rect"]).split(u); if (4 == E.length) { E[2] = +E[2] + +E[0], E[3] = +E[3] + +E[1]; var F = c.clipRect || t._g.doc.createElement("div"), R = F.style; R.clip = t.format("rect({1}px {2}px {3}px {0}px)", E), c.clipRect || (R.position = "absolute", R.top = 0, R.left = 0, R.width = n.paper.width + "px", R.height = n.paper.height + "px", c.parentNode.insertBefore(F, c), F.appendChild(c), c.clipRect = F) } l["clip-rect"] || c.clipRect && (c.clipRect.style.clip = "auto") } if (n.textpath) { var P = n.textpath.style; l.font && (P.font = l.font), l["font-family"] && (P.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), l["font-size"] && (P.fontSize = l["font-size"]), l["font-weight"] && (P.fontWeight = l["font-weight"]), l["font-style"] && (P.fontStyle = l["font-style"]) } if ("arrow-start" in l && C(A, l["arrow-start"]), "arrow-end" in l && C(A, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) { var I = c.getElementsByTagName(h); if (!(I = I && I[0]) && (I = k(h)), "image" == n.type && l.src && (I.src = l.src), l.fill && (I.on = !0), null != I.on && "none" != l.fill && null !== l.fill || (I.on = !1), I.on && l.fill) { var j = r(l.fill).match(t._ISURL); if (j) { I.parentNode == c && c.removeChild(I), I.rotate = !0, I.src = j[1], I.type = "tile"; var q = n.getBBox(1); I.position = q.x + f + q.y, n._.fillpos = [q.x, q.y], t._preload(j[1], function () { n._.fillsize = [this.offsetWidth, this.offsetHeight] }) } else I.color = t.getRGB(l.fill).hex, I.src = "", I.type = "solid", t.getRGB(l.fill).error && (A.type in { circle: 1, ellipse: 1 } || "r" != r(l.fill).charAt()) && S(A, l.fill, I) && (g.fill = "none", g.gradient = l.fill, I.rotate = !1) } if ("fill-opacity" in l || "opacity" in l) { var D = ((+g["fill-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1); D = o(s(D, 0), 1), I.opacity = D, I.src && (I.color = "none") } c.appendChild(I); var V = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0], O = !1; !V && (O = V = k("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (V.on = !0), ("none" == l.stroke || null === l.stroke || null == V.on || 0 == l.stroke || 0 == l["stroke-width"]) && (V.on = !1); var Y = t.getRGB(l.stroke); V.on && l.stroke && (V.color = Y.hex), D = ((+g["stroke-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+Y.o + 1 || 2) - 1); var G = .75 * (i(l["stroke-width"]) || 1); if (D = o(s(D, 0), 1), null == l["stroke-width"] && (G = g["stroke-width"]), l["stroke-width"] && (V.weight = G), G && G < 1 && (D *= G) && (V.weight = 1), V.opacity = D, l["stroke-linejoin"] && (V.joinstyle = l["stroke-linejoin"] || "miter"), V.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (V.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) { var W = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" }; V.dashstyle = W[e](l["stroke-dasharray"]) ? W[l["stroke-dasharray"]] : "" } O && c.appendChild(V) } if ("text" == A.type) { A.paper.canvas.style.display = ""; var X = A.paper.span, H = g.font && g.font.match(/\d+(?:\.\d*)?(?=px)/); x = X.style, g.font && (x.font = g.font), g["font-family"] && (x.fontFamily = g["font-family"]), g["font-weight"] && (x.fontWeight = g["font-weight"]), g["font-style"] && (x.fontStyle = g["font-style"]), H = i(g["font-size"] || H && H[0]) || 10, x.fontSize = 100 * H + "px", A.textpath.string && (X.innerHTML = r(A.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>")); var U = X.getBoundingClientRect(); A.W = g.w = (U.right - U.left) / 100, A.H = g.h = (U.bottom - U.top) / 100, A.X = g.x, A.Y = g.y + A.H / 2, ("x" in l || "y" in l) && (A.path.v = t.format("m{0},{1}l{2},{1}", a(g.x * y), a(g.y * y), a(g.x * y) + 1)); for (var $ = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, Q = $.length; Z < Q; Z++) if ($[Z] in l) { A._.dirty = 1; break } switch (g["text-anchor"]) { case "start": A.textpath.style["v-text-align"] = "left", A.bbx = A.W / 2; break; case "end": A.textpath.style["v-text-align"] = "right", A.bbx = -A.W / 2; break; default: A.textpath.style["v-text-align"] = "center", A.bbx = 0 } A.textpath.style["v-text-kern"] = !0 } }, S = function (e, a, s) { e.attrs = e.attrs || {}; e.attrs; var o = Math.pow, l = "linear", h = ".5 .5"; if (e.attrs.gradient = a, a = (a = r(a).replace(t._radial_gradient, function (t, e, r) { return l = "radial", e && r && (e = i(e), r = i(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = n.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), h = e + f + r), "" })).split(/\s*\-\s*/), "linear" == l) { var u = a.shift(); if (u = -i(u), isNaN(u)) return null } var c = t._parseDots(a); if (!c) return null; if (e = e.shape || e.node, c.length) { e.removeChild(s), s.on = !0, s.method = "none", s.color = c[0].color, s.color2 = c[c.length - 1].color; for (var p = [], d = 0, g = c.length; d < g; d++) c[d].offset && p.push(c[d].offset + f + c[d].color); s.colors = p.length ? p.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = h, s.angle = 0) : (s.type = "gradient", s.angle = (270 - u) % 360), e.appendChild(s) } return 1 }, A = function (e, r) { this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null }, T = t.el; A.prototype = T, T.constructor = A, T.transform = function (e) { if (null == e) return this._.transform; var i, n = this.paper._viewBoxShift, a = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : ""; n && (i = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || "")), t._extractTransform(this, a + e); var s, o = this.matrix.clone(), l = this.skew, h = this.node, u = ~r(this.attrs.fill).indexOf("-"), c = !r(this.attrs.fill).indexOf("url("); if (o.translate(-.5, -.5), c || u || "image" == this.type) if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), u && s.noRotation || !s.isSimple) { h.style.filter = o.toFilter(); var p = this.getBBox(), d = this.getBBox(1), g = p.x - d.x, v = p.y - d.y; h.coordorigin = g * -y + f + v * -y, w(this, 1, 1, g, v, 0) } else h.style.filter = "", w(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate); else h.style.filter = "", l.matrix = r(o), l.offset = o.offset(); return i && (this._.transform = i), this }, T.rotate = function (t, e, n) { if (this.removed) return this; if (null != t) { if ((t = r(t).split(u)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) { var a = this.getBBox(1); e = a.x + a.width / 2, n = a.y + a.height / 2 } return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, n]])), this } }, T.translate = function (t, e) { return this.removed ? this : ((t = r(t).split(u)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this) }, T.scale = function (t, e, n, a) { if (this.removed) return this; if ((t = r(t).split(u)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3]), isNaN(n) && (n = null), isNaN(a) && (a = null)), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1); return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this._.dirtyT = 1, this }, T.hide = function () { return !this.removed && (this.node.style.display = "none"), this }, T.show = function () { return !this.removed && (this.node.style.display = ""), this }, T._getBBox = function () { return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, T.remove = function () { if (!this.removed && this.node.parentNode) { this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape); for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null; this.removed = !0 } }, T.attr = function (r, i) { if (this.removed) return this; if (null == r) { var n = {}; for (var a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]); return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n } if (null == i && t.is(r, "string")) { if (r == h && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; for (var s = r.split(u), o = {}, l = 0, f = s.length; l < f; l++) (r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r]; return f - 1 ? o : o[s[0]] } if (this.attrs && null == i && t.is(r, "array")) { for (o = {}, l = 0, f = r.length; l < f; l++) o[r[l]] = this.attr(r[l]); return o } var p; null != i && ((p = {})[r] = i), null == i && t.is(r, "object") && (p = r); for (var d in p) c("raphael.attr." + d + "." + this.id, this, p[d]); if (p) { for (d in this.paper.customAttributes) if (this.paper.customAttributes[e](d) && p[e](d) && t.is(this.paper.customAttributes[d], "function")) { var g = this.paper.customAttributes[d].apply(this, [].concat(p[d])); this.attrs[d] = p[d]; for (var v in g) g[e](v) && (p[v] = g[v]) } p.text && "text" == this.type && (this.textpath.string = p.text), B(this, p) } return this }, T.toFront = function () { return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this }, T.toBack = function () { return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this) }, T.insertAfter = function (e) { return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this) }, T.insertBefore = function (e) { return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this) }, T.blur = function (e) { var r = this.node.runtimeStyle, i = r.filter; i = i.replace(g, ""), 0 != +e ? (this.attrs.blur = e, r.filter = i + f + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = i, r.margin = 0, delete this.attrs.blur) }, t._engine.path = function (t, e) { var r = k("shape"); r.style.cssText = x, r.coordsize = y + f + y, r.coordorigin = e.coordorigin; var i = new A(r, e), n = { fill: "none", stroke: "#000" }; t && (n.path = t), i.type = "path", i.path = [], i.Path = "", B(i, n), e.canvas.appendChild(r); var a = k("skew"); return a.on = !0, r.appendChild(a), i.skew = a, i.transform(""), i }, t._engine.rect = function (e, r, i, n, a, s) { var o = t._rectPath(r, i, n, a, s), l = e.path(o), h = l.attrs; return l.X = h.x = r, l.Y = h.y = i, l.W = h.width = n, l.H = h.height = a, h.r = s, h.path = o, l.type = "rect", l }, t._engine.ellipse = function (t, e, r, i, n) { var a = t.path(); a.attrs; return a.X = e - i, a.Y = r - n, a.W = 2 * i, a.H = 2 * n, a.type = "ellipse", B(a, { cx: e, cy: r, rx: i, ry: n }), a }, t._engine.circle = function (t, e, r, i) { var n = t.path(); n.attrs; return n.X = e - i, n.Y = r - i, n.W = n.H = 2 * i, n.type = "circle", B(n, { cx: e, cy: r, r: i }), n }, t._engine.image = function (e, r, i, n, a, s) { var o = t._rectPath(i, n, a, s), l = e.path(o).attr({ stroke: "none" }), u = l.attrs, c = l.node, f = c.getElementsByTagName(h)[0]; return u.src = r, l.X = u.x = i, l.Y = u.y = n, l.W = u.width = a, l.H = u.height = s, u.path = o, l.type = "image", f.parentNode == c && c.removeChild(f), f.rotate = !0, f.src = r, f.type = "tile", l._.fillpos = [i, n], l._.fillsize = [a, s], c.appendChild(f), w(l, 1, 1, 0, 0, 0), l }, t._engine.text = function (e, i, n, s) { var o = k("shape"), l = k("path"), h = k("textpath"); i = i || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(i * y), a(n * y), a(i * y) + 1), l.textpathok = !0, h.string = r(s), h.on = !0, o.style.cssText = x, o.coordsize = y + f + y, o.coordorigin = "0 0"; var u = new A(o, e), c = { fill: "#000", stroke: "none", font: t._availableAttrs.font, text: s }; u.shape = o, u.path = l, u.textpath = h, u.type = "text", u.attrs.text = r(s), u.attrs.x = i, u.attrs.y = n, u.attrs.w = 1, u.attrs.h = 1, B(u, c), o.appendChild(h), o.appendChild(l), e.canvas.appendChild(o); var p = k("skew"); return p.on = !0, o.appendChild(p), u.skew = p, u.transform(""), u }, t._engine.setSize = function (e, r) { var i = this.canvas.style; return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), i.width = e, i.height = r, i.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this }, t._engine.setViewBox = function (e, r, i, n, a) { t.eve("raphael.setViewBox", this, this._viewBox, [e, r, i, n, a]); var o, l, h = this.width, u = this.height, c = 1 / s(i / h, n / u); return a && (l = h / i, i * (o = u / n) < h && (e -= (h - i * o) / 2 / o), n * l < u && (r -= (u - n * l) / 2 / l)), this._viewBox = [e, r, i, n, !!a], this._viewBoxShift = { dx: -e, dy: -r, scale: c }, this.forEach(function (t) { t.transform("...") }), this }, t._engine.initWin = function (t) { var e = t.document; e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"); try { !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), k = function (t) { return e.createElement("<rvml:" + t + ' class="rvml">') } } catch (t) { k = function (t) { return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, t._engine.initWin(t._g.win), t._engine.create = function () { var e = t._getContainer.apply(0, arguments), r = e.container, i = e.height, n = e.width, a = e.x, s = e.y; if (!r) throw new Error("VML container not found."); var o = new t._Paper, l = o.canvas = t._g.doc.createElement("div"), h = l.style; return a = a || 0, s = s || 0, n = n || 512, i = i || 342, o.width = n, o.height = i, n == +n && (n += "px"), i == +i && (i += "px"), o.coordsize = 216e5 + f + 216e5, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), h.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, i), 1 == r ? (t._g.doc.body.appendChild(l), h.left = a + "px", h.top = s + "px", h.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function () { }, o }, t.prototype.clear = function () { t.eve("raphael.clear", this), this.canvas.innerHTML = "", this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, t.prototype.remove = function () { t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas); for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null; return !0 }; var N = t.st; for (var L in T) T[e](L) && !N[e](L) && (N[L] = function (t) { return function () { var e = arguments; return this.forEach(function (r) { r[t].apply(r, e) }) } }(L)) }(window.Raphael);

// jQuery print https://github.com/DoersGuild/jQuery.print
!function (a) { "use strict"; function b(b) { var c = a(""); try { c = a(b).clone() } catch (d) { c = a("<span />").html(b) } return c } function c(b, c, d) { var e = a.Deferred(); try { b = b.contentWindow || b.contentDocument || b; var f = b.document || b.contentDocument || b; d.doctype && f.write(d.doctype), f.write(c), f.close(); var g = !1, h = function () { if (!g) { b.focus(); try { b.document.execCommand("print", !1, null) || b.print(), a("body").focus() } catch (a) { b.print() } b.close(), g = !0, e.resolve() } }; a(b).on("load", h), setTimeout(h, d.timeout) } catch (a) { e.reject(a) } return e } function d(b, d) { var f = a(d.iframe + ""), g = f.length; return 0 === g && (f = a('<iframe height="0" width="0" border="0" wmode="Opaque"/>').prependTo("body").css({ position: "absolute", top: -999, left: -999 })), c(f.get(0), b, d).done(function () { setTimeout(function () { 0 === g && f.remove() }, 1e3) }).fail(function (a) { console.error("Failed to print from iframe", a), e(b, d) }).always(function () { try { d.deferred.resolve() } catch (a) { console.warn("Error notifying deferred", a) } }) } function e(a, b) { return c(window.open(), a, b).always(function () { try { b.deferred.resolve() } catch (a) { console.warn("Error notifying deferred", a) } }) } function f(a) { return !!("object" == typeof Node ? a instanceof Node : a && "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName) } a.print = a.fn.print = function () { var c, g, h = this; h instanceof a && (h = h.get(0)), f(h) ? (g = a(h), arguments.length > 0 && (c = arguments[0])) : arguments.length > 0 ? (g = a(arguments[0]), f(g[0]) ? arguments.length > 1 && (c = arguments[1]) : (c = arguments[0], g = a("html"))) : g = a("html"); var i = { globalStyles: !0, mediaPrint: !1, stylesheet: null, noPrintSelector: ".no-print", iframe: !0, append: null, prepend: null, manuallyCopyFormValues: !0, deferred: a.Deferred(), timeout: 750, title: null, doctype: "<!doctype html>" }; c = a.extend({}, i, c || {}); var j = a(""); c.globalStyles ? j = a("style, link, meta, base, title") : c.mediaPrint && (j = a("link[media=print]")), c.stylesheet && (j = a.merge(j, a('<link rel="stylesheet" href="' + c.stylesheet + '">'))); var k = g.clone(); if (k = a("<span/>").append(k), k.find(c.noPrintSelector).remove(), k.append(j.clone()), c.title) { var l = a("title", k); 0 === l.length && (l = a("<title />"), k.append(l)), l.text(c.title) } k.append(b(c.append)), k.prepend(b(c.prepend)), c.manuallyCopyFormValues && (k.find("input").each(function () { var b = a(this); b.is("[type='radio']") || b.is("[type='checkbox']") ? b.prop("checked") && b.attr("checked", "checked") : b.attr("value", b.val()) }), k.find("select").each(function () { a(this).find(":selected").attr("selected", "selected") }), k.find("textarea").each(function () { var b = a(this); b.text(b.val()) })); var m = k.html(); try { c.deferred.notify("generated_markup", m, k) } catch (a) { console.warn("Error notifying deferred", a) } if (k.remove(), c.iframe) try { d(m, c) } catch (a) { console.error("Failed to print from iframe", a.stack, a.message), e(m, c) } else e(m, c); return this } }(jQuery);