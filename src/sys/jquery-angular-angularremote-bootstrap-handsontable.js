/**
 * jquery, angular, angularremote, bootstrap and handsontable
*/

/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

/**
 * angular and angular-patch
*/

/*
 AngularJS v1.0.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,ba,p){'use strict';function m(b,a,c){var d;if(b)if(M(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(I(b)&&wa(b.length))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}
function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function x(b){m(arguments,function(a){a!==b&&m(a,function(a,d){b[d]=a})});return b}function G(b){return parseInt(b,10)}function ya(b,a){return x(new (x(function(){},{prototype:b})),a)}function D(){}function ma(b){return b}function J(b){return function(){return b}}
function t(b){return typeof b=="undefined"}function u(b){return typeof b!="undefined"}function I(b){return b!=null&&typeof b=="object"}function F(b){return typeof b=="string"}function wa(b){return typeof b=="number"}function na(b){return Ta.apply(b)=="[object Date]"}function K(b){return Ta.apply(b)=="[object Array]"}function M(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return F(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&
(b.nodeName||b.bind&&b.find)}function Ua(b,a,c){var d=[];m(b,function(b,g,i){d.push(a.call(c,b,g,i))});return d}function hc(b,a){var c=0,d;if(K(b)||F(b))return b.length;else if(I(b))for(d in b)(!a||b.hasOwnProperty(d))&&c++;return c}function Va(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function za(b,a){var c=Va(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw A("Can't copy Window or Scope");if(a){if(b===
a)throw A("Can't copy equivalent objects or arrays");if(K(b)){for(;a.length;)a.pop();for(var c=0;c<b.length;c++)a.push(U(b[c]))}else for(c in m(a,function(b,c){delete a[c]}),b)a[c]=U(b[c])}else(a=b)&&(K(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):I(b)&&(a=U(b,{})));return a}function ic(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function ga(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
c=="object")if(K(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b){if(d.charAt(0)!=="$"&&!M(b[d])&&!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&!M(a[d]))return!1;return!0}return!1}function Wa(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return M(a)&&!(a instanceof RegExp)?c.length?
function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function jc(b,a){var c=a;/^\$+/.test(b)?c=p:oa(a)?c="$WINDOW":a&&ba===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function ca(b,a){return JSON.stringify(b,jc,a?"  ":null)}function ob(b){return F(b)?JSON.parse(b):b}function Xa(b){b&&b.length!==0?(b=E(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;
return b}function pa(b){b=y(b).clone();try{b.html("")}catch(a){}return y("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+E(b)})}function Ya(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=u(c[1])?decodeURIComponent(c[1]):!0)});return a}function pb(b){var a=[];m(b,function(b,d){a.push(Za(d,!0)+(b===!0?"":"="+Za(b,!0)))});return a.length?a.join("&"):""}function $a(b){return Za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function Za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(a?null:/%20/g,"+")}function kc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,i=["ng:app","ng-app","x-ng-app","data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(i,function(a){i[a]=!0;c(ba.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+
a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&i[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function qb(b,a){b=y(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");var c=rb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,i){a.$apply(function(){b.data("$injector",i);c(b)(a)})}]);return c}function ab(b,a){a=a||"_";return b.replace(lc,
function(b,d){return(d?a:"")+b.toLowerCase()})}function qa(b,a,c){if(!b)throw new A("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function ra(b,a,c){c&&K(b)&&(b=b[b.length-1]);qa(M(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function mc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,
d,e){return function(){b[e||"push"]([c,d,arguments]);return j}}if(!e)throw A("No module: "+d);var b=[],c=[],k=a("$injector","invoke"),j={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:k,run:function(a){c.push(a);
return this}};g&&k(g);return j})}})}function sb(b){return b.replace(nc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(oc,"Moz$1")}function bb(b,a){function c(){var e;for(var b=[this],c=a,i,f,h,k,j,l,n;b.length;){i=b.shift();f=0;for(h=i.length;f<h;f++){k=y(i[f]);c?(n=(j=k.data("events"))&&j.$destroy)&&m(n,function(a){a.handler()}):c=!c;j=0;for(e=(l=k.children()).length,k=e;j<k;j++)b.push(ia(l[j]))}}return d.apply(this,arguments)}var d=ia.fn[b],d=d.$original||d;c.$original=d;ia.fn[b]=c}function P(b){if(b instanceof
P)return b;if(!(this instanceof P)){if(F(b)&&b.charAt(0)!="<")throw A("selectors not implemented");return new P(b)}if(F(b)){var a=ba.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);cb(this,a.childNodes);this.remove()}else cb(this,b)}function db(b){return b.cloneNode(!0)}function sa(b){tb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)sa(b[a])}function ub(b,a,c){var d=da(b,"events");da(b,"handle")&&(t(a)?m(d,function(a,c){eb(b,c,a);delete d[c]}):t(c)?(eb(b,a,d[a]),
delete d[a]):za(d[a],c))}function tb(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ub(b)),delete Ba[a],b[Aa]=p)}function da(b,a,c){var d=b[Aa],d=Ba[d||-1];if(u(c))d||(b[Aa]=d=++pc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function vb(b,a,c){var d=da(b,"data"),e=u(c),g=!e&&u(a),i=g&&!I(a);!d&&!i&&da(b,"data",d={});if(e)d[a]=c;else if(g)if(i)return d&&d[a];else x(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>
-1}function wb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}function xb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function cb(b,a){if(a)for(var a=!a.nodeName&&u(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function yb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=y(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;
b=b.parent()}}function zb(b,a){var c=Ea[a.toLowerCase()];return c&&Ab[b.nodeName]&&c}function qc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||ba;if(t(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],
function(a){a.call(b,c)});$<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function ja(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===p)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function fb(){}function Bb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(rc,
""),c=c.match(sc),m(c[1].split(tc),function(b){b.replace(uc,function(b,c,d){a.push(d)})}),b.$inject=a}else K(b)?(c=b.length-1,ra(b[c],"fn"),a=b.slice(0,c)):ra(b,"fn",!0);return a}function rb(b){function a(a){return function(b,c){if(I(b))m(b,nb(a));else return a(b,c)}}function c(a,b){M(b)&&(b=l.instantiate(b));if(!b.$get)throw A("Provider "+a+" must define $get factory method.");return j[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!k.get(a))if(k.put(a,!0),
F(a)){var c=ta(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],h=g[0]=="$injector"?l:l.get(g[0]);h[g[1]].apply(h,g[2])}}catch(i){throw i.message&&(i.message+=" from "+a),i;}}else if(M(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+a),o;}else if(K(a))try{b.push(l.invoke(a))}catch(n){throw n.message&&(n.message+=" from "+String(a[a.length-1])),n;}else ra(a,"module")});return b}function g(a,b){function c(d){if(typeof d!==
"string")throw A("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===i)throw A("Circular dependency: "+h.join(" <- "));return a[d]}else try{return h.unshift(d),a[d]=i,a[d]=b(d)}finally{h.shift()}}function d(a,b,e){var f=[],g=Bb(a),k,i,o;i=0;for(k=g.length;i<k;i++)o=g[i],f.push(e&&e.hasOwnProperty(o)?e[o]:c(o,h));a.$inject||(a=a[k]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],
f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return I(e)?e:c},get:c,annotate:Bb}}var i=
{},f="Provider",h=[],k=new Fa,j={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,J(b))}),constant:a(function(a,b){j[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},l=g(j,function(){throw A("Unknown provider: "+h.join(" <- "));}),n={},r=n.$injector=g(n,function(a){a=l.get(a+f);return r.invoke(a.$get,
a)});m(e(b),function(a){r.invoke(a||D)});return r}function vc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&E(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});
return g}]}function wc(b,a,c,d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(o--,o===0)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function g(a,b){(function ea(){m(q,function(a){a()});v=b(ea,a)})()}function i(){Y!=f.url()&&(Y=f.url(),m(z,function(a){a(f.url())}))}var f=this,h=a[0],k=b.location,j=b.history,l=b.setTimeout,n=b.clearTimeout,r={};f.isMock=!1;var o=0,w=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){o++};f.notifyWhenNoOutstandingRequests=
function(a){m(q,function(a){a()});o===0?a():w.push(a)};var q=[],v;f.addPollFn=function(a){t(v)&&g(100,l);q.push(a);return a};var Y=k.href,B=a.find("base");f.url=function(a,b){if(a){if(Y!=a)return Y=a,d.history?b?j.replaceState(null,"",a):(j.pushState(null,"",a),B.attr("href",B.attr("href"))):b?k.replace(a):k.href=a,f}else return k.href.replace(/%27/g,"'")};var z=[],L=!1;f.onUrlChange=function(a){L||(d.history&&y(b).bind("popstate",i),d.hashchange?y(b).bind("hashchange",i):f.addPollFn(i),L=!0);z.push(a);
return a};f.baseHref=function(){var a=B.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):a};var V={},s="",N=f.baseHref();f.cookies=function(a,b){var d,e,f,g;if(a)if(b===p)h.cookie=escape(a)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(F(b))d=(h.cookie=escape(a)+"="+escape(b)+";path="+N).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"),V.length>20&&c.warn("Cookie '"+a+"' possibly not set or overflowed because too many cookies were already set ("+
V.length+" > 20 )")}else{if(h.cookie!==s){s=h.cookie;d=s.split("; ");V={};for(f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),g>0&&(V[unescape(e.substring(0,g))]=unescape(e.substring(g+1)))}return V}};f.defer=function(a,b){var c;o++;c=l(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};f.defer.cancel=function(a){return r[a]?(delete r[a],n(a),e(D),!0):!1}}function xc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new wc(b,d,a,c)}]}function yc(){this.$get=function(){function b(b,
d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw A("cacheId "+b+" taken");var i=0,f=x({},d,{id:b}),h={},k=d&&d.capacity||Number.MAX_VALUE,j={},l=null,n=null;return a[b]={put:function(a,b){var c=j[a]||(j[a]={key:a});e(c);t(b)||(a in h||i++,h[a]=b,i>k&&this.remove(n.key))},get:function(a){var b=j[a];if(b)return e(b),h[a]},remove:function(a){var b=j[a];if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete j[a];
delete h[a];i--},removeAll:function(){h={};i=0;j={};l=n=null},destroy:function(){j=f=h=null;delete a[b]},info:function(){return x({},f,{size:i})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function zc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Cb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ";
this.directive=function f(d,e){F(d)?(qa(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],function(a){try{var f=b.invoke(a);if(M(f))f={compile:J(f)};else if(!f.compile&&f.link)f.compile=J(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(g){c(g)}});return e}])),a[d].push(e)):m(d,nb(f));return this};this.$get=["$injector","$interpolate","$exceptionHandler",
"$http","$templateCache","$parse","$controller","$rootScope",function(b,h,k,j,l,n,r,o){function w(a,b,c){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==3&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var d=v(a,b,a,c);return function(b,c){qa(b,"scope");var e=c?ua.clone.call(a):a;e.data("$scope",b);q(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function q(a,b){try{a.addClass(b)}catch(c){}}function v(a,b,c,d){function e(a,c,d,g){for(var k,h,n,j,o,l=0,r=0,q=f.length;l<q;r++)n=c[r],k=f[l++],
h=f[l++],k?(k.scope?(j=a.$new(I(k.scope)),y(n).data("$scope",j)):j=a,(o=k.transclude)||!g&&b?k(h,j,n,d,function(b){return function(c){var d=a.$new();return b(d,c).bind("$destroy",Wa(d,d.$destroy))}}(o||b)):k(h,j,n,p,g)):h&&h(a,n.childNodes,p,g)}for(var f=[],g,k,h,n=0;n<a.length;n++)k=new ea,g=Y(a[n],[],k,d),k=(g=g.length?B(g,a[n],k,b,c):null)&&g.terminal?null:v(a[n].childNodes,g?g.transclude:b),f.push(g),f.push(k),h=h||g||k;return h?e:null}function Y(a,b,c,f){var g=c.$attr,k;switch(a.nodeType){case 1:z(b,
fa(Db(a).toLowerCase()),"E",f);var h,n,j;k=a.attributes;for(var o=0,l=k&&k.length;o<l;o++)if(h=k[o],h.specified)n=h.name,j=fa(n.toLowerCase()),g[j]=n,c[j]=h=Q($&&n=="href"?decodeURIComponent(a.getAttribute(n,2)):h.value),zb(a,j)&&(c[j]=!0),W(a,b,h,j),z(b,j,"A",f);a=a.className;if(F(a))for(;k=e.exec(a);)j=fa(k[2]),z(b,j,"C",f)&&(c[j]=Q(k[3])),a=a.substr(k.index+k[0].length);break;case 3:H(b,a.nodeValue);break;case 8:try{if(k=d.exec(a.nodeValue))j=fa(k[1]),z(b,j,"M",f)&&(c[j]=Q(k[2]))}catch(r){}}b.sort(s);
return b}function B(a,b,c,d,e){function f(a,b){if(a)a.require=C.require,l.push(a);if(b)b.require=C.require,aa.push(b)}function h(a,b){var c,d="data",e=!1;if(F(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw A("No controller: "+a);}else K(a)&&(c=[],m(a,function(a){c.push(h(a,b))}));return c}function j(a,d,e,f,g){var o,q,w,L,Ha;o=b===e?c:ic(c,new ea(y(e),c.$attr));q=o.$$element;if(v&&I(v.scope)){var Y=/^\s*([@=&])\s*(\w*)\s*$/,
s=d.$parent||d;m(v.scope,function(a,b){var c=a.match(Y)||[],e=c[2]||b,f,g,k;switch(c[1]){case "@":o.$observe(e,function(a){d[b]=a});o.$$observers[e].$$scope=s;break;case "=":g=n(o[e]);k=g.assign||function(){f=d[b]=g(s);throw A(Eb+o[e]+" (directive: "+v.name+")");};f=d[b]=g(s);d.$watch(function(){var a=g(s);a!==d[b]&&(a!==f?f=d[b]=a:k(s,f=d[b]));return a});break;case "&":g=n(o[e]);d[b]=function(a){return g(s,a)};break;default:throw A("Invalid isolate scope definition for directive "+v.name+": "+a);
}})}u&&m(u,function(a){var b={$scope:d,$element:q,$attrs:o,$transclude:g};Ha=a.controller;Ha=="@"&&(Ha=o[a.name]);q.data("$"+a.name+"Controller",r(Ha,b))});f=0;for(w=l.length;f<w;f++)try{L=l[f],L(d,q,o,L.require&&h(L.require,q))}catch(Ia){k(Ia,pa(q))}a&&a(d,e.childNodes,p,g);f=0;for(w=aa.length;f<w;f++)try{L=aa[f],L(d,q,o,L.require&&h(L.require,q))}catch(B){k(B,pa(q))}}for(var o=-Number.MAX_VALUE,l=[],aa=[],v=null,B=null,z=null,s=c.$$element=y(b),C,H,W,D,t=d,u,x,X,E=0,G=a.length;E<G;E++){C=a[E];W=
p;if(o>C.priority)break;if(X=C.scope)N("isolated scope",B,C,s),I(X)&&(q(s,"ng-isolate-scope"),B=C),q(s,"ng-scope"),v=v||C;H=C.name;if(X=C.controller)u=u||{},N("'"+H+"' controller",u[H],C,s),u[H]=C;if(X=C.transclude)N("transclusion",D,C,s),D=C,o=C.priority,X=="element"?(W=y(b),s=c.$$element=y("<\!-- "+H+": "+c[H]+" --\>"),b=s[0],Ga(e,y(W[0]),b),t=w(W,d,o)):(W=y(db(b)).contents(),s.html(""),t=w(W,d));if(X=C.template)if(N("template",z,C,s),z=C,X=Ia(X),C.replace){W=y("<div>"+Q(X)+"</div>").contents();
b=W[0];if(W.length!=1||b.nodeType!==1)throw new A(g+X);Ga(e,s,b);H={$attr:{}};a=a.concat(Y(b,a.splice(E+1,a.length-(E+1)),H));L(c,H);G=a.length}else s.html(X);if(C.templateUrl)N("template",z,C,s),z=C,j=V(a.splice(E,a.length-E),j,s,c,e,C.replace,t),G=a.length;else if(C.compile)try{x=C.compile(s,c,t),M(x)?f(null,x):x&&f(x.pre,x.post)}catch(J){k(J,pa(s))}if(C.terminal)j.terminal=!0,o=Math.max(o,C.priority)}j.scope=v&&v.scope;j.transclude=D&&t;return j}function z(d,e,g,h){var j=!1;if(a.hasOwnProperty(e))for(var n,
e=b.get(e+c),o=0,l=e.length;o<l;o++)try{if(n=e[o],(h===p||h>n.priority)&&n.restrict.indexOf(g)!=-1)d.push(n),j=!0}catch(r){k(r)}return j}function L(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){f=="class"?(q(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):f=="style"?e.attr("style",e.attr("style")+";"+b):f.charAt(0)!="$"&&!a.hasOwnProperty(f)&&(a[f]=b,d[f]=c[f])})}function V(a,b,c,d,e,
f,k){var h=[],n,o,r=c[0],q=a.shift(),w=x({},q,{controller:null,templateUrl:null,transclude:null});c.html("");j.get(q.templateUrl,{cache:l}).success(function(j){var l,q,j=Ia(j);if(f){q=y("<div>"+Q(j)+"</div>").contents();l=q[0];if(q.length!=1||l.nodeType!==1)throw new A(g+j);j={$attr:{}};Ga(e,c,l);Y(l,a,j);L(d,j)}else l=r,c.html(j);a.unshift(w);n=B(a,c,d,k);for(o=v(c.contents(),k);h.length;){var aa=h.pop(),j=h.pop();q=h.pop();var s=h.pop(),m=l;q!==r&&(m=db(l),Ga(j,y(q),m));n(function(){b(o,s,m,e,aa)},
s,m,e,aa)}h=null}).error(function(a,b,c,d){throw A("Failed to load template: "+d.url);});return function(a,c,d,e,f){h?(h.push(c),h.push(d),h.push(e),h.push(f)):n(function(){b(o,c,d,e,f)},c,d,e,f)}}function s(a,b){return b.priority-a.priority}function N(a,b,c,d){if(b)throw A("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function H(a,b){var c=h(b,!0);c&&a.push({priority:0,compile:J(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);q(d.data("$binding",e),
"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b,c,d){var e=h(c,!0);e&&b.push({priority:100,compile:J(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=h(c[d],!0));c[d]=p;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function Ga(a,b,c){var d=b[0],e=d.parentNode,f,g;if(a){f=0;for(g=a.length;f<g;f++)if(a[f]==d){a[f]=c;break}}e&&e.replaceChild(c,d);c[y.expando]=d[y.expando];b[0]=c}var ea=function(a,
b){this.$$element=a;this.$attr=b||{}};ea.prototype={$normalize:fa,$set:function(a,b,c,d){var e=zb(this.$$element[0],a),f=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ab(a,"-"));c!==!1&&(b===null||b===p?this.$$element.removeAttr(d):this.$$element.attr(d,b));f&&m(f[a],function(a){try{a(b)}catch(c){k(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);o.$evalAsync(function(){e.$$inter||
b(c[a])});return b}};var D=h.startSymbol(),aa=h.endSymbol(),Ia=D=="{{"||aa=="}}"?ma:function(a){return a.replace(/\{\{/g,D).replace(/}}/g,aa)};return w}]}function fa(b){return sb(b.replace(Ac,""))}function Bc(){var b={};this.register=function(a,c){I(a)?x(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(F(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);ra(d,g,!0)}return a.instantiate(d,e)}}]}function Cc(){this.$get=["$window",function(b){return y(b.document)}]}
function Dc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ec(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",function(c){function d(d,f){for(var h,k,j=0,l=[],n=d.length,r=!1,o=[];j<n;)(h=d.indexOf(b,j))!=-1&&(k=d.indexOf(a,h+e))!=-1?(j!=h&&l.push(d.substring(j,h)),l.push(j=c(r=d.substring(h+e,k))),j.exp=r,j=k+g,r=!0):(j!=n&&l.push(d.substring(j)),j=n);if(!(n=
l.length))l.push(""),n=1;if(!f||r)return o.length=n,j=function(a){for(var b=0,c=n,d;b<c;b++){if(typeof(d=l[b])=="function")d=d(a),d==null||d==p?d="":typeof d!="string"&&(d=ca(d));o[b]=d}return o.join("")},j.exp=d,j.parts=l,j}var e=b.length,g=a.length;d.startSymbol=function(){return b};d.endSymbol=function(){return a};return d}]}function Fb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=$a(b[a]);return b.join("/")}function va(b,a){var c=Gb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Hb[c[1]]||
null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Hb[b]?"":":"+c)}function Fc(b,a,c){var d=va(b);return decodeURIComponent(d.path)!=a||t(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Gc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==a)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",i=a.substr(0,
a.lastIndexOf("/")),f=d.path.substr(i.length);if(d.path.indexOf(i)!==0)throw A('Invalid url "'+b+'", missing path prefix "'+i+'" !');return ka(d.protocol,d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw A('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Ya(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=
function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ja(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw A('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Hc.exec((c.hash||"").substr(a.length));
this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Ya(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=pb(this.$$search),c=this.$$hash?"#"+$a(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ib(b,a,c,d){Ja.apply(this,arguments);
this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ka(b){return function(){return this[b]}}function Jb(b,a){return function(c){if(t(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ic(){var b="",a=!1;this.hashPrefix=function(a){return u(a)?(b=a,this):b};this.html5Mode=function(b){return u(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function i(a){c.$broadcast("$locationChangeSuccess",
f.absUrl(),a)}var f,h,k,j=d.url(),l=va(j);a?(h=d.baseHref()||"/",k=h.substr(0,h.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+k+"/",f=e.history?new hb(Fc(j,h,b),k,l):new Ib(Gc(j,h,b),b,l,h.substr(k.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ja(j,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=y(a.target);E(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);
d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),T.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=j&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);i(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url();if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),f.$$replace),f.$$replace=!1,i(a))});
return n});return f}]}function Jc(){this.$get=["$window",function(b){function a(a){a instanceof A&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||D;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),warn:c("warn"),info:c("info"),error:c("error")}}]}function Kc(b,
a){function c(a){return a.indexOf(q)!=-1}function d(){return o+1<b.length?b.charAt(o+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function h(a,c,d){d=d||o;throw A("Lexer Error: "+a+" at column"+(u(c)?"s "+c+"-"+o+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function k(){for(var a="",c=o;o<b.length;){var g=
E(b.charAt(o));if(g=="."||e(g))a+=g;else{var k=d();if(g=="e"&&f(k))a+=g;else if(f(g)&&k&&e(k)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!k||!e(k))&&a.charAt(a.length-1)=="e")h("Invalid exponent");else break}o++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function j(){for(var c="",d=o,f,k,h;o<b.length;){var j=b.charAt(o);if(j=="."||i(j)||e(j))j=="."&&(f=o),c+=j;else break;o++}if(f)for(k=o;k<b.length;){j=b.charAt(k);if(j=="("){h=c.substr(f-d+1);c=c.substr(0,f-d);o=k;break}if(g(j))k++;
else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=d.json=La[c];else{var l=Kb(c,a);d.fn=x(function(a,b){return l(a,b)},{assign:function(a,b){return Lb(a,c,b)}})}n.push(d);h&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:h,json:!1}))}function l(a){var c=o;o++;for(var d="",e=a,f=!1;o<b.length;){var g=b.charAt(o);e+=g;if(f)g=="u"?(g=b.substring(o+1,o+5),g.match(/[\da-f]{4}/i)||h("Invalid unicode escape [\\u"+g+"]"),o+=4,d+=String.fromCharCode(parseInt(g,16))):(f=Lc[g],d+=f?f:g),
f=!1;else if(g=="\\")f=!0;else if(g==a){o++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;o++}h("Unterminated quote",c)}for(var n=[],r,o=0,w=[],q,v=":";o<b.length;){q=b.charAt(o);if(c("\"'"))l(q);else if(e(q)||c(".")&&e(d()))k();else if(i(q)){if(j(),"{,".indexOf(v)!=-1&&w[0]=="{"&&(r=n[n.length-1]))r.json=r.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:o,text:q,json:":[,".indexOf(v)!=-1&&c("{[")||c("}]:,")}),c("{[")&&w.unshift(q),c("}]")&&w.shift(),
o++;else if(g(q)){o++;continue}else{var m=q+d(),B=La[q],z=La[m];z?(n.push({index:o,text:m,fn:z}),o+=2):B?(n.push({index:o,text:q,fn:B,json:"[,:".indexOf(v)!=-1&&c("+-")}),o+=1):h("Unexpected next character ",o,o+1)}v=q}return n}function Mc(b,a,c,d){function e(a,c){throw A("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(N.length===0)throw A("Unexpected end of expression: "+b);return N[0]}function i(a,
b,c,d){if(N.length>0){var f=N[0],e=f.text;if(e==a||e==b||e==c||e==d||!a&&!b&&!c&&!d)return f}return!1}function f(b,c,d,f){return(b=i(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),N.shift(),b):!1}function h(a){f(a)||e("is unexpected, expecting ["+a+"]",i())}function k(a,b){return function(c,d){return a(c,d,b)}}function j(a,b,c){return function(d,f){return b(d,f,a,c)}}function l(){for(var a=[];;)if(N.length>0&&!i("}",")",";","]")&&a.push(t()),!f(";"))return a.length==1?a[0]:function(b,c){for(var d,
f=0;f<a.length;f++){var e=a[f];e&&(d=e(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(H());else{var e=function(a,c,f){for(var f=[f],e=0;e<d.length;e++)f.push(d[e](a,c));return b.apply(a,f)};return function(){return e}}}function r(){for(var a=o(),b;;)if(b=f("||"))a=j(a,b.fn,o());else return a}function o(){var a=w(),b;if(b=f("&&"))a=j(a,b.fn,o());return a}function w(){var a=q(),b;if(b=f("==","!="))a=j(a,b.fn,w());return a}function q(){var a;a=v();for(var b;b=f("+",
"-");)a=j(a,b.fn,v());if(b=f("<",">","<=",">="))a=j(a,b.fn,q());return a}function v(){for(var a=m(),b;b=f("*","/","%");)a=j(a,b.fn,m());return a}function m(){var a;return f("+")?B():(a=f("-"))?j(V,a.fn,m()):(a=f("!"))?k(a.fn,m()):B()}function B(){var a;if(f("("))a=t(),h(")");else if(f("["))a=z();else if(f("{"))a=L();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=y(a,c),c=null):b.text==="["?(c=a,a=ea(a)):b.text==="."?(c=a,a=u(a)):e("IMPOSSIBLE");
return a}function z(){var a=[];if(g().text!="]"){do a.push(H());while(f(","))}h("]");return function(b,c){for(var d=[],f=0;f<a.length;f++)d.push(a[f](b,c));return d}}function L(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;h(":");var c=H();a.push({key:b,value:c})}while(f(","))}h("}");return function(b,c){for(var d={},f=0;f<a.length;f++){var e=a[f],g=e.value(b,c);d[e.key]=g}return d}}var V=J(0),s,N=Kc(b,d),H=function(){var a=r(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+
b.substring(0,d.index)+"] can not be assigned to",d),c=r(),function(b,d){return a.assign(b,c(b,d),d)}):a},y=function(a,b){var c=[];if(g().text!=")"){do c.push(H());while(f(","))}h(")");return function(d,f){for(var e=[],g=b?b(d,f):d,k=0;k<c.length;k++)e.push(c[k](d,f));k=a(d,f)||D;return k.apply?k.apply(g,e):k(e[0],e[1],e[2],e[3],e[4])}},u=function(a){var b=f().text,c=Kb(b,d);return x(function(b,d){return c(a(b,d),d)},{assign:function(c,d,f){return Lb(a(c,f),b,d)}})},ea=function(a){var b=H();h("]");
return x(function(c,d){var f=a(c,d),e=b(c,d),g;if(!f)return p;if((f=f[e])&&f.then){g=f;if(!("$$v"in f))g.$$v=p,g.then(function(a){g.$$v=a});f=f.$$v}return f},{assign:function(c,d,f){return a(c,f)[b(c,f)]=d}})},t=function(){for(var a=H(),b;;)if(b=f("|"))a=j(a,b.fn,n());else return a};a?(H=r,y=u=ea=t=function(){e("is not valid json",{text:b,index:0})},s=B()):s=l();N.length!==0&&e("is an unexpected token",N[0]);return s}function Lb(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=
b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,i=0;i<g;i++)d=a[i],b&&(b=(e=b)[d]);return!c&&M(b)?Wa(e,b):b}function Mb(b,a,c,d,e){return function(g,i){var f=i&&i.hasOwnProperty(b)?i:g,h;if(f===null||f===p)return f;if((f=f[b])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!a||f===null||f===p)return f;if((f=f[a])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!c||f===
null||f===p)return f;if((f=f[c])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!d||f===null||f===p)return f;if((f=f[d])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}if(!e||f===null||f===p)return f;if((f=f[e])&&f.then){if(!("$$v"in f))h=f,h.$$v=p,h.then(function(a){h.$$v=a});f=f.$$v}return f}}function Kb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Mb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,
g;do g=Mb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=p,a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Nc(){var b={};this.$get=["$filter","$sniffer",
function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Mc(d,!1,a,c.csp);case "function":return d;default:return D}}}]}function Oc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Pc(function(a){b.$evalAsync(a)},a)}]}function Pc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var f=[],h,k;return k={resolve:function(a){if(f){var c=f;f=p;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],
a[1])})}},reject:function(a){k.resolve(i(a))},promise:{then:function(b,g){var k=e(),i=function(d){try{k.resolve((b||c)(d))}catch(f){a(f),k.reject(f)}},o=function(b){try{k.resolve((g||d)(b))}catch(c){a(c),k.reject(c)}};f?f.push([i,o]):h.then(i,o);return k.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},i=function(a){return{then:function(c,g){var j=e();b(function(){j.resolve((g||d)(a))});return j.promise}}};return{defer:e,reject:i,
when:function(f,h,k){var j=e(),l,n=function(b){try{return(h||c)(b)}catch(d){return a(d),i(d)}},r=function(b){try{return(k||d)(b)}catch(c){return a(c),i(c)}};b(function(){g(f).then(function(a){l||(l=!0,j.resolve(g(a).then(n,r)))},function(a){l||(l=!0,j.resolve(r(a)))})});return j.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}function Qc(){var b={};this.when=
function(a,c){b[a]=x({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,i,f){function h(){var b=k(),h=r.current;if(b&&h&&b.$route===h.$route&&ga(b.pathParams,h.pathParams)&&!b.reloadOnSearch&&!n)h.params=b.params,U(h.params,d),a.$broadcast("$routeUpdate",h);else if(b||
h)n=!1,a.$broadcast("$routeChangeStart",b,h),(r.current=b)&&b.redirectTo&&(F(b.redirectTo)?c.path(j(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);c.push(M(b)?g.invoke(b):g.get(b))});if(!u(d=b.template))if(u(d=b.templateUrl))d=i.get(d,{cache:f}).then(function(a){return a.data});u(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c=
{};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==r.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,h)}},function(c){b==r.current&&a.$broadcast("$routeChangeError",b,h,c)})}function k(){var a,d;m(b,function(b,e){if(!d&&(a=l(c.path(),e)))d=ya(b,{params:x({},c.search(),a),pathParams:a}),d.$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function j(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var l=function(a,b){var c="^"+b.replace(/([\.\\\(\)\^\$])/g,"\\$1")+"$",d=[],e={};m(b.split(/\W/),function(a){if(a){var b=RegExp(":"+a+"([\\W])");c.match(b)&&(c=c.replace(b,"([^\\/]*)$1"),d.push(a))}});var f=a.match(RegExp(c));f&&m(d,function(a,b){e[a]=f[b+1]});return f?e:null},n=!1,r={routes:b,reload:function(){n=!0;a.$evalAsync(h)}};a.$on("$locationChangeSuccess",h);return r}]}function Rc(){this.$get=J({})}function Sc(){var b=
10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$asyncQueue=[];this.$$listeners={}}function g(a){if(h.$$phase)throw A(h.$$phase+" already in progress");h.$$phase=a}function i(a,b){var c=d(a);ra(c,b);return c}function f(){}e.prototype={$new:function(a){if(M(a))throw A("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!M(b)){var h=i(b||D,"listener");g.fn=function(a,b,
c){h(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){za(e,g)}},$digest:function(){var a,d,e,i,r,o,m,q=b,v,p=[],B,z;g("$digest");do{m=!1;v=this;do{for(r=v.$$asyncQueue;r.length;)try{v.$eval(r.shift())}catch(L){c(L)}if(i=v.$$watchers)for(o=i.length;o--;)try{if(a=i[o],(d=a.get(v))!==(e=a.last)&&!(a.eq?ga(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,v),q<5&&(B=4-q,p[B]||(p[B]=[]),z=M(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,z+="; newVal: "+ca(d)+"; oldVal: "+ca(e),p[B].push(z))}catch(V){c(V)}if(!(i=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(i=v.$$nextSibling);)v=v.$parent}while(v=i);if(m&&!q--)throw h.$$phase=null,A(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+ca(p));}while(m||r.length);h.$$phase=null},$destroy:function(){if(h!=this){var a=this.$parent;this.$broadcast("$destroy");if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==
this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{h.$$phase=null;try{h.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){za(c,
b)}},$emit:function(a,b){var d=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},i=[h].concat(ha.call(arguments,1)),m,p;do{e=f.$$listeners[a]||d;h.currentScope=f;m=0;for(p=e.length;m<p;m++)try{if(e[m].apply(null,i),g)return h}catch(B){c(B)}f=f.$parent}while(f);return h},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},
g=[f].concat(ha.call(arguments,1));do if(d=e,f.currentScope=d,m(d.$$listeners[a],function(a){try{a.apply(null,g)}catch(b){c(b)}}),!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent;while(d=e);return f}};var h=new e;return h}]}function Tc(){this.$get=["$window",function(b){var a={},c=G((/android (\d+)/.exec(E(b.navigator.userAgent))||[])[1]);return{history:!(!b.history||!b.history.pushState||c<4),hashchange:"onhashchange"in b&&(!b.document.documentMode||
b.document.documentMode>7),hasEvent:function(c){if(c=="input"&&$==9)return!1;if(t(a[c])){var e=b.document.createElement("div");a[c]="on"+c in e}return a[c]},csp:!1}}]}function Uc(){this.$get=J(T)}function Nb(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=E(Q(b.substr(0,e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Ob(b){var a=I(b)?b:p;return function(c){a||(a=Nb(b));return c?a[E(c)]||null:a}}function Pb(b,a,c){if(M(c))return c(b,a);m(c,
function(c){b=c(b,a)});return b}function Vc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){F(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ob(d,!0)));return d}],transformRequest:[function(a){return I(a)&&Ta.apply(a)!=="[object File]"?ca(a):a}],headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},
e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,h,k,j){function l(a){function c(a){var b=x({},a,{data:Pb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:k.reject(b)}a.method=la(a.method);var e=a.transformRequest||d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=x({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[E(a.method)],a.headers),e=Pb(a.data,Ob(g),e),h;t(a.data)&&delete g["Content-Type"];
h=n(a,e,g);h=h.then(c,c);m(w,function(a){h=a(h)});h.success=function(b){h.then(function(c){b(c.data,c.status,c.headers,a)});return h};h.error=function(b){h.then(null,function(c){b(c.data,c.status,c.headers,a)});return h};return h}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(w,[a,b,Nb(c)]):m.remove(w));f(b,a,c);h.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?j.resolve:j.reject)({data:a,status:c,headers:Ob(d),config:b})}function i(){var a=Va(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,
1)}var j=k.defer(),n=j.promise,m,p,w=r(b.url,b.params);l.pendingRequests.push(b);n.then(i,i);b.cache&&b.method=="GET"&&(m=I(b.cache)?b.cache:o);if(m)if(p=m.get(w))if(p.then)return p.then(i,i),p;else K(p)?f(p[1],p[0],U(p[2])):f(p,200,{});else m.put(w,n);p||a(b.method,w,c,e,d,b.timeout,b.withCredentials);return n}function r(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==p||(I(a)&&(a=ca(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==-1?"?":"&")+
c.join("&")}var o=c("$http"),w=[];m(e,function(a){w.push(F(a)?j.get(a):j.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=function(b,c,d){return l(x(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Wc(){this.$get=["$browser","$window","$document",function(b,a,c){return Xc(b,Yc,b.defer,a.angular.callbacks,c[0],
a.location.protocol.replace(":",""))}]}function Xc(b,a,c,d,e,g){function i(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;$?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,h,k,j,l,n,r){function o(a,c,d,e){c=(h.match(Gb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(D)}b.$$incOutstandingRequestCount();h=h||b.url();
if(E(e)=="jsonp"){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a};i(h.replace("JSON_CALLBACK","angular.callbacks."+p),function(){d[p].data?o(j,200,d[p].data):o(j,-2);delete d[p]})}else{var q=new a;q.open(e,h,!0);m(l,function(a,b){a&&q.setRequestHeader(b,a)});var v;q.onreadystatechange=function(){q.readyState==4&&o(j,v||q.status,q.responseText,q.getAllResponseHeaders())};if(r)q.withCredentials=!0;q.send(k||"");n>0&&c(function(){v=-1;q.abort()},n)}}}function Zc(){this.$get=function(){return{id:"en-us",
NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function $c(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,h){var k=c.defer(),j=k.promise,l=u(h)&&!h,f=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),
d(a)}l||b.$apply()},f),h=function(){delete g[j.$$timeoutId]};j.$$timeoutId=f;g[f]=k;j.then(h,h);return j}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Qb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Rb);a("date",Sb);a("filter",ad);a("json",bd);a("limitTo",cd);a("lowercase",dd);a("number",
Tb);a("orderBy",Ub);a("uppercase",ed)}function ad(){return function(b,a){if(!(b instanceof Array))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;
default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],i=0;i<b.length;i++){var f=b[i];c.check(f)&&g.push(f)}return g}}function Rb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(t(d))d=a.CURRENCY_SYM;
return Vb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Tb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Vb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Vb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),i=b+"",f="",h=[];if(i.indexOf("e")!==-1)f=i;else{i=(i.split(Wb)[1]||"").length;t(e)&&(e=Math.min(Math.max(a.minFrac,i),a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(Wb),i=b[0],b=b[1]||"",k=0,j=a.lgSize,l=a.gSize;
if(i.length>=j+l)for(var k=i.length-j,n=0;n<k;n++)(k-n)%l===0&&n!==0&&(f+=c),f+=i.charAt(n);for(n=k;n<i.length;n++)(i.length-n)%j===0&&n!==0&&(f+=c),f+=i.charAt(n);for(;b.length<e;)b+="0";e&&(f+=d+b.substr(0,e))}h.push(g?a.negPre:a.posPre);h.push(f);h.push(g?a.negSuf:a.posSuf);return h.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=
12);return jb(e,a,d)}}function Ma(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Sb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,i=0;b[9]&&(g=G(b[9]+b[10]),i=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-i,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;return function(c,e){var g="",i=[],f,h,e=e||
"mediumDate",e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=fd.test(c)?G(c):a(c));wa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(h=gd.exec(e))?(i=i.concat(ha.call(h,1)),e=i.pop()):(i.push(e),e=null);m(i,function(a){f=hd[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bd(){return function(b){return ca(b,!0)}}function cd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof Array))return c;a>b.length?a=b.length:a<
-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ub(b){return function(a,c,d){function e(a,b){return Xa(b)?function(b,c){return a(c,b)}:a}if(!(a instanceof Array))return a;if(!c)return a;for(var c=K(c)?c:[c],c=Ua(c,function(a){var c=!1,d=a||ma;if(F(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase()),
f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],i=0;i<a.length;i++)g.push(a[i]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function R(b){M(b)&&(b={link:b});b.restrict=b.restrict||"AC";return J(b)}function Xb(b,a){function c(a,c){c=c?"-"+ab(c,"-"):"";b.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}var d=this,e=b.parent().controller("form")||Pa,g=0,i=d.$error={};d.$name=a.name;d.$dirty=!1;d.$pristine=
!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Qa);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(i,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,k){var j=i[a];if(b){if(j&&(za(j,k),!j.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(j){if(Va(j,k)!=-1)return}else i[a]=j=[],g++,c(!1,a),e.$setValidity(a,
!1,d);j.push(k);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Qa).addClass(Yb);d.$dirty=!0;d.$pristine=!1}}function S(b){return t(b)||b===""||b===null||b!==b}function Ra(b,a,c,d,e,g){var i=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",i);else{var f;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||f||(f=g.defer(function(){i();f=null}))});a.bind("change",i)}d.$render=function(){a.val(S(d.$viewValue)?
"":d.$viewValue)};var h=c.ngPattern,k=function(a,b){return S(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),p)};h&&(h.match(/^\/(.*)\/$/)?(h=RegExp(h.substr(1,h.length-2)),e=function(a){return k(h,a)}):e=function(a){var c=b.$eval(h);if(!c||!c.test)throw new A("Expected "+h+" to be a RegExp but was "+c);return k(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var j=G(c.ngMinlength),e=function(a){return!S(a)&&a.length<j?(d.$setValidity("minlength",!1),
p):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var l=G(c.ngMaxlength),c=function(a){return!S(a)&&a.length>l?(d.$setValidity("maxlength",!1),p):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return R(function(c,d,e){c.$watch(e[b],function(b,e){if(a===!0||c.$index%2===a)e&&b!==e&&(I(e)&&!K(e)&&(e=Ua(e,function(a,b){if(a)return b})),d.removeClass(K(e)?e.join(" "):e)),I(b)&&!K(b)&&(b=Ua(b,
function(a,b){if(a)return b})),b&&d.addClass(K(b)?b.join(" "):b)},!0)})}var E=function(b){return F(b)?b.toLowerCase():b},la=function(b){return F(b)?b.toUpperCase():b},A=T.Error,$=G((/msie (\d+)/.exec(E(navigator.userAgent))||[])[1]),y,ia,ha=[].slice,Sa=[].push,Ta=Object.prototype.toString,Zb=T.angular||(T.angular={}),ta,Db,Z=["0","0","0"];D.$inject=[];ma.$inject=[];Db=$<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?
b.nodeName:b[0].nodeName};var lc=/[A-Z]/g,id={full:"1.0.2",major:1,minor:0,dot:2,codeName:"debilitating-awesomeness"},Ba=P.cache={},Aa=P.expando="ng-"+(new Date).getTime(),pc=1,$b=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},eb=T.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},nc=/([\:\-\_]+(.))/g,oc=/^moz([A-Z])/,ua=P.prototype={ready:function(b){function a(){c||
(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);P(T).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?y(this[b]):y(this[this.length+b])},length:0,push:Sa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[E(b)]=b});var Ab={};m("input,select,option,textarea,button,form".split(","),function(b){Ab[la(b)]=!0});m({data:vb,inheritedData:Da,scope:function(b){return Da(b,
"$scope")},controller:yb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=sb(a);if(u(c))b.style[a]=c;else{var d;$<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];$<=8&&(d=d===""?p:d);return d}},attr:function(b,a,c){var d=E(a);if(Ea[d])if(u(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:p;else if(u(c))b.setAttribute(a,
c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?p:b},prop:function(b,a,c){if(u(c))b[a]=c;else return b[a]},text:x($<9?function(b,a){if(b.nodeType==1){if(t(a))return b.innerText;b.innerText=a}else{if(t(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(t(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(t(a))return b.value;b.value=a},html:function(b,a){if(t(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)sa(d[c]);b.innerHTML=a}},function(b,
a){P.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==yb?a:d)===p)if(I(a)){for(e=0;e<this.length;e++)if(b===vb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:tb,dealoc:sa,bind:function a(c,d,e){var g=da(c,"events"),i=da(c,"handle");g||da(c,"events",g={});i||da(c,"handle",i=qc(c,g));m(d.split(" "),function(d){var h=g[d];if(!h){if(d=="mouseenter"||
d=="mouseleave"){var k=0;g.mouseenter=[];g.mouseleave=[];a(c,"mouseover",function(a){k++;k==1&&i(a,"mouseenter")});a(c,"mouseout",function(a){k--;k==0&&i(a,"mouseleave")})}else $b(c,d,i),g[d]=[];h=g[d]}h.push(e)})},unbind:ub,replaceWith:function(a,c){var d,e=a.parentNode;sa(a);m(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeName!="#text"&&c.push(a)});return c},contents:function(a){return a.childNodes},
append:function(a,c){m(new P(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new P(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=y(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){sa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new P(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){t(d)&&(d=!Ca(a,c));(d?xb:wb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){return a.nextSibling},find:function(a,c){return a.getElementsByTagName(c)},clone:db},function(a,c){P.prototype[c]=function(c,e){for(var g,i=0;i<this.length;i++)g==p?(g=a(this[i],c,e),g!==p&&(g=y(g))):cb(g,a(this[i],c,e));return g==p?this:g}});Fa.prototype={put:function(a,c){this[ja(a)]=c},get:function(a){return this[ja(a)]},remove:function(a){var c=this[a=ja(a)];delete this[a];
return c}};fb.prototype={push:function(a,c){var d=this[a=ja(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ja(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()}};var sc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,tc=/,/,uc=/^\s*(_?)(.+?)\1\s*$/,rc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Cb.$inject=["$provide"];var Ac=/^(x[\:\-_]|data[\:\-_])/i,Gb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
Hc=ac,Hb={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ka("$$absUrl"),url:function(a,c){if(t(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ka("$$protocol"),host:Ka("$$host"),port:Ka("$$port"),path:Jb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(t(a))return this.$$search;u(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=
F(a)?Ya(a):a;this.$$compose();return this},hash:Jb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ja.prototype=ya(hb.prototype);Ib.prototype=ya(Ja.prototype);var La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)+(u(e)?e:0)},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)-(u(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/
e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":D,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&
e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Lc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Yc=T.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw new A("This browser does not support XMLHttpRequest.");};Qb.$inject=["$provide"];Rb.$inject=["$locale"];Tb.$inject=["$locale"];
var Wb=".",hd={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Ma("Month"),MMM:Ma("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),EEEE:Ma("Day"),EEE:Ma("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=a.getTimezoneOffset();return jb(a/60,2)+jb(Math.abs(a%60),2)}},gd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
fd=/^\d+$/;Sb.$inject=["$locale"];var dd=J(E),ed=J(la);Ub.$inject=["$parse"];var jd=J({restrict:"E",compile:function(a,c){c.href||c.$set("href","");return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,c){var d=fa("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=fa("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,
e,g){g.$observe(c,function(c){g.$set(a,c);$&&e.prop(a,c)})}}}});var Pa={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D};Xb.$inject=["$element","$attrs","$scope"];var Sa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",controller:Xb,compile:function(){return{pre:function(a,d,i,f){if(!i.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",h);d.bind("$destroy",function(){c(function(){eb(d[0],"submit",h)},0,!1)})}var k=d.parent().controller("form"),
j=i.name||i.ngForm;j&&(a[j]=f);k&&d.bind("$destroy",function(){k.$removeControl(f);j&&(a[j]=p);x(f,Pa)})}}}};return a?x(U(d),{restrict:"EAC"}):d}]},kd=Sa(),ld=Sa(!0),md=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,nd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,od=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Ra,number:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);e.$parsers.push(function(a){var c=S(a);return c||od.test(a)?(e.$setValidity("number",!0),a===""?
null:c?a:parseFloat(a)):(e.$setValidity("number",!1),p)});e.$formatters.push(function(a){return S(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!S(a)&&a<f?(e.$setValidity("min",!1),p):(e.$setValidity("min",!0),a)};e.$parsers.push(a);e.$formatters.push(a)}if(d.max){var h=parseFloat(d.max),d=function(a){return!S(a)&&a>h?(e.$setValidity("max",!1),p):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return S(a)||wa(a)?(e.$setValidity("number",
!0),a):(e.$setValidity("number",!1),p)})},url:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);a=function(a){return S(a)||md.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,i){Ra(a,c,d,e,g,i);a=function(a){return S(a)||nd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),p)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){t(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&
a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,i=d.ngFalseValue;F(g)||(g=!0);F(i)||(i=!1);c.bind("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:i})},hidden:D,button:D,submit:D,reset:D},cc=["$browser","$sniffer",
function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,i){i&&(bc[E(g.type)]||bc.text)(d,e,g,i,c,a)}}}],Oa="ng-valid",Na="ng-invalid",Qa="ng-pristine",Yb="ng-dirty",pd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function i(a,c){c=c?"-"+ab(c,"-"):"";e.removeClass((a?Na:Oa)+c).addClass((a?Oa:Na)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=
!0;this.$invalid=!1;this.$name=d.name;var g=g(d.ngModel),f=g.assign;if(!f)throw A(Eb+d.ngModel+" ("+pa(e)+")");this.$render=D;var h=e.inheritedData("$formController")||Pa,k=0,j=this.$error={};e.addClass(Qa);i(!0);this.$setValidity=function(a,c){if(j[a]!==!c){if(c){if(j[a]&&k--,!k)i(!0),this.$valid=!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,k++;j[a]=!c;i(c,a);h.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=
!1,e.removeClass(Qa).addClass(Yb),h.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,f(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(g,function(a){if(l.$modelValue!==a){var c=l.$formatters,d=c.length;for(l.$modelValue=a;d--;)a=c[d](a);if(l.$viewValue!==a)l.$viewValue=a,l.$render()}})}],qd=function(){return{require:["ngModel","^?form"],controller:pd,link:function(a,c,d,e){var g=e[0],i=e[1]||Pa;i.$addControl(g);
c.bind("$destroy",function(){i.$removeControl(g)})}}},rd=J({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&(S(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},sd=function(){return{require:"ngModel",
link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return K(a)?a.join(", "):p})}}},td=/^(true|false|\d+)$/,ud=function(){return{priority:100,compile:function(a,c){return td.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},vd=R(function(a,c,d){c.addClass("ng-binding").data("$binding",
d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==p?"":a)})}),wd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],xd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],yd=kb("",!0),zd=kb("Odd",0),Ad=kb("Even",1),Bd=R({compile:function(a,c){c.$set("ngCloak",p);
a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,controller:"@"}}],Dd=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),function(a){var c=fa("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,i){var f=d(i[c]);g.bind(E(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Ed=R(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),
Fd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,i){var f=i.ngInclude||i.src,h=i.onload||"",k=i.autoscroll;return function(g,i){var n=0,m,o=function(){m&&(m.$destroy(),m=null);i.html("")};g.$watch(f,function(f){var q=++n;f?a.get(f,{cache:c}).success(function(a){q===n&&(m&&m.$destroy(),m=g.$new(),i.html(a),e(i.contents())(m),u(k)&&(!k||g.$eval(k))&&d(),m.$emit("$includeContentLoaded"),g.$eval(h))}).error(function(){q===n&&
o()}):o()})}}}}],Gd=R({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Hd=R({terminal:!0,priority:1E3}),Id=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,i){var f=i.count,h=g.attr(i.$attr.when),k=i.offset||0,j=e.$eval(h),l={},n=c.startSymbol(),r=c.endSymbol();m(j,function(a,e){l[e]=c(a.replace(d,n+f+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(j[c]||(c=a.pluralCat(c-k)),l[c](e,g,!0))},function(a){g.text(a)})}}}],
Jd=R({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,i){var f=i.ngRepeat,i=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),h,k,j;if(!i)throw A("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=i[1];h=i[2];i=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!i)throw A("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");k=i[3]||i[1];j=i[2];var l=new fb;a.$watch(function(a){var e,f,i=a.$eval(h),m=hc(i,
!0),p,y=new fb,B,z,t,u,s=c;if(K(i))t=i||[];else{t=[];for(B in i)i.hasOwnProperty(B)&&B.charAt(0)!="$"&&t.push(B);t.sort()}e=0;for(f=t.length;e<f;e++){B=i===t?e:t[e];z=i[B];if(u=l.shift(z)){p=u.scope;y.push(z,u);if(e!==u.index)u.index=e,s.after(u.element);s=u.element}else p=a.$new();p[k]=z;j&&(p[j]=B);p.$index=e;p.$first=e===0;p.$last=e===m-1;p.$middle=!(p.$first||p.$last);u||d(p,function(a){s.after(a);u={scope:p,element:s=a,index:e};y.push(z,u)})}for(B in l)if(l.hasOwnProperty(B))for(t=l[B];t.length;)z=
t.pop(),z.element.remove(),z.scope.$destroy();l=y})}}}),Kd=R(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Xa(a)?"":"none")})}),Ld=R(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Xa(a)?"none":"")})}),Md=R(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=J({restrict:"EA",compile:function(a,c){var d=c.ngSwitch||c.on,e={};a.data("ng-switch",e);return function(a,i){var f,h,k;a.$watch(d,function(d){h&&(k.$destroy(),
h.remove(),h=k=null);if(f=e["!"+d]||e["?"])a.$eval(c.change),k=a.$new(),f(k,function(a){h=a;i.append(a)})})}}}),Od=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["!"+c.ngSwitchWhen]=d}}),Pd=R({transclude:"element",priority:500,compile:function(a,c,d){a=a.inheritedData("ng-switch");qa(a);a["?"]=d}}),Qd=R({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Rd=["$http","$templateCache","$route","$anchorScroll","$compile",
"$controller",function(a,c,d,e,g,i){return{restrict:"ECA",terminal:!0,link:function(a,c,k){function j(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=i(m.controller,j),c.contents().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=k.onload||"";a.$on("$routeChangeSuccess",j);j()}}}],Sd=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Td=J({terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,k={},j=e,l;h.databound=d.ngModel;
h.init=function(a,c,d){j=a;l=d};h.addOption=function(c){k[c]=!0;j.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};h.removeOption=function(a){this.hasOption(a)&&(delete k[a],j.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+ja(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};h.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=D})}],link:function(e,i,f,h){function k(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),a===""&&v.prop("selected",!0)):t(a)&&v?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function j(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.children(),function(c){c.selected=u(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.children(),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function h(){var a={"":[]},c=[""],d,i,t,u,s;t=g.$modelValue;u=r(e)||[];var y=l?mb(u):u,z,w,x;w={};s=!1;var C,A;if(o)s=new Fa(t);else if(t===null||q)a[""].push({selected:t===null,id:"",label:""}),s=!0;for(x=0;z=y.length,x<z;x++){w[k]=u[l?w[l]=y[x]:x];d=m(e,w)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);o?d=s.remove(n(e,w))!=p:(d=t===n(e,w),s=s||d);i.push({id:l?y[x]:x,label:j(e,w)||"",selected:d})}!o&&!s&&a[""].unshift({id:"?",
label:"",selected:!0});w=0;for(y=c.length;w<y;w++){d=c[w];i=a[d];if(v.length<=w)t={element:B.clone().attr("label",d),label:i.label},u=[t],v.push(u),f.append(t.element);else if(u=v[w],t=u[0],t.label!=d)t.element.attr("label",t.label=d);C=null;x=0;for(z=i.length;x<z;x++)if(d=i[x],s=u[x+1]){C=s.element;if(s.label!==d.label)C.text(s.label=d.label);if(s.id!==d.id)C.val(s.id=d.id);if(s.element.selected!==d.selected)C.prop("selected",s.selected=d.selected)}else d.id===""&&q?A=q:(A=D.clone()).val(d.id).attr("selected",
d.selected).text(d.label),u.push({element:A,label:d.label,id:d.id,selected:d.selected}),C?C.after(A):t.element.append(A),C=A;for(x++;u.length>x;)u.pop().element.remove()}for(;v.length>w;)v.pop()[0].element.remove()}var i;if(!(i=w.match(d)))throw A("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+w+"'.");var j=c(i[2]||i[1]),k=i[4]||i[6],l=i[5],m=c(i[3]||""),n=c(i[2]?i[1]:k),r=c(i[7]),v=[[{element:f,label:""}]];q&&(a(q)(e),q.removeClass("ng-scope"),
q.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=r(e)||[],d={},h,i,j,m,q,s;if(o){i=[];m=0;for(s=v.length;m<s;m++){a=v[m];j=1;for(q=a.length;j<q;j++)if((h=a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=p:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=h;e.$watch(h)}if(h[1]){for(var n=h[0],r=h[1],o=f.multiple,w=f.ngOptions,q=!1,v,D=y(ba.createElement("option")),B=y(ba.createElement("optgroup")),
z=D.clone(),h=0,x=i.children(),E=x.length;h<E;h++)if(x[h].value==""){v=q=x.eq(h);break}n.init(r,q,z);if(o&&(f.required||f.ngRequired)){var s=function(a){r.$setValidity("required",!f.required||a&&a.length);return a};r.$parsers.push(s);r.$formatters.unshift(s);f.$observe("required",function(){s(r.$viewValue)})}w?l(e,i,r):o?j(e,i,r):k(e,i,r,n)}}}}],Vd=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(t(e.value)){var g=a(d.text(),
!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),j=k.data("$selectController")||k.parent().data("$selectController");j&&j.databound?d.prop("selected",!1):j=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&j.removeOption(c);j.addOption(a)}):j.addOption(e.value);d.bind("$destroy",function(){j.removeOption(e.value)})}}}}],Wd=J({restrict:"E",terminal:!0});(ia=T.jQuery)?(y=ia,x(ia.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),
bb("remove",!0),bb("empty"),bb("html")):y=P;Zb.element=y;(function(a){x(a,{bootstrap:qb,copy:U,extend:x,equals:ga,element:y,forEach:m,injector:rb,noop:D,bind:Wa,toJson:ca,fromJson:ob,identity:ma,isUndefined:t,isDefined:u,isString:F,isFunction:M,isObject:I,isNumber:wa,isElement:gc,isArray:K,version:id,isDate:na,lowercase:E,uppercase:la,callbacks:{counter:0}});ta=mc(T);try{ta("ngLocale")}catch(c){ta("ngLocale",[]).provider("$locale",Zc)}ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",
Cb).directive({a:jd,input:cc,textarea:cc,form:kd,script:Sd,select:Ud,style:Wd,option:Vd,ngBind:vd,ngBindHtmlUnsafe:xd,ngBindTemplate:wd,ngClass:yd,ngClassEven:Ad,ngClassOdd:zd,ngCsp:Dd,ngCloak:Bd,ngController:Cd,ngForm:ld,ngHide:Ld,ngInclude:Fd,ngInit:Gd,ngNonBindable:Hd,ngPluralize:Id,ngRepeat:Jd,ngShow:Kd,ngSubmit:Ed,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Td,ngView:Rd,ngTransclude:Qd,ngModel:qd,ngList:sd,ngChange:rd,required:dc,ngRequired:dc,ngValue:ud}).directive(lb).directive(ec);
a.provider({$anchorScroll:vc,$browser:xc,$cacheFactory:yc,$controller:Bc,$document:Cc,$exceptionHandler:Dc,$filter:Qb,$interpolate:Ec,$http:Vc,$httpBackend:Wc,$location:Ic,$log:Jc,$parse:Nc,$route:Qc,$routeParams:Rc,$rootScope:Sc,$q:Oc,$sniffer:Tc,$templateCache:zc,$timeout:$c,$window:Uc})}])})(Zb);y(ba).ready(function(){kc(ba,qb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');


/**
 * angular-patch 0.1.1-dev
 * 
 * Date: Tue Nov 13 2012 17:36:31 GMT+0100 (Central European Standard Time)
*/

angular.module('StarcounterLib', ['panelApp'])
  .directive('ngApp', ['$http', 'appContext', function ($http, appContext) {
    var directiveDefinitionObject = {
      restrict: 'A',
      compile: function compile(tElement, tAttrs, transclude) {

        var remoteScope = {};
        var rootLoaded = false;

        function overwriteRoot(scope, data) {
          remoteScope = angular.copy(data); //remote is current state of data on server
          for (var i in data) {
            if (data.hasOwnProperty(i)) {              
              scope[i] = data[i];
            }
          }
          findAndSetWatchers(scope);
        }

        function patchRoot(scope, patch) {
          if (patch.length) {
            jsonpatch.apply(remoteScope, angular.copy(patch)); //remote is current state of data on server
            jsonpatch.apply(scope, patch);
          }
        }

        function parseViewModelId(scope) {
          var meta = document.getElementsByTagName('meta');
          for (var i = 0, ilen = meta.length; i < ilen; i++) {
            if (angular.element(meta[i]).attr('name') == 'View-Model') {
              scope['View-Model'] = angular.element(meta[i]).attr('content');
              break;
            }
          }
        }

        function getRequestUrl(scope) {
            return '/__vm/' + scope['View-Model'];
//          return window.location.href + '/../__vm/' + scope['View-Model'];
        }

        function getRoot(scope) {
          $http({
            method: 'GET',
            url: getRequestUrl(scope)
          }).success(function (data, status, headers, config) {
            overwriteRoot(scope, data);            
            rootLoaded = true;
          });
        }
        
        function updateServer(scope, update) {
          $http({
            method: 'PATCH',
            url: getRequestUrl(scope),
            data: update
          }).success(function (data, status, headers, config) {
            patchRoot(scope, data);
            if(!scope.$$phase) { //digest not in progress
              scope.$digest();                
            }
          });
        }

        window.updateServer = updateServer;

        function findAndSetWatchers(scope) {
          var tree = appContext.getScopeTree(scope);
          var watched = [];
          for (var i in tree.locals) {
            if (i == "View-Model") {
              continue;
            }
            if (tree.locals.hasOwnProperty(i)) {
              watched.push(i);
            }
          }
          setWatchers(scope, watched);
        }

        function diffToPatch(obj, path, patch) {
          var path = path || '';
          var patch = patch || [];

          if (typeof path !== '' && typeof obj == 'object') {
            if (angular.isArray(obj)) {
              // changed value
              if (obj.length < 3) {
                patch.push({
                  replace: path,
                  value: obj[obj.length - 1]
                });
              }
              else {
                if (obj[2] == 0) {
                  patch.push({
                    remove: path
                  });
                }
                else if (obj[2] == 2) {
                  // text diff
                  throw new Error("text diff not implemented")
                }
                else {
                  throw new Error("invalid diff type");
                }
              }
            }
            else {
              var p;
              if (obj._t == 'a') {
                // array diff
                for (p in obj) {
                  if (p !== '_t' && obj.hasOwnProperty(p)) {
                    diffToPatch(obj[p], path + '/' + p, patch);
                  }
                }
              }
              else {
                // object diff
                for (p in obj) {
                  if (obj.hasOwnProperty(p)) {
                    diffToPatch(obj[p], path + '/' + p, patch);
                  }
                }
              }
            }
          }
          return patch;
        }

        function setWatchers(scope, props) {
          for (var i = 0, ilen = props.length; i < ilen; i++) {
            scope.$watch(props[i], (function (prop) {
              return (function (current, previous, scope) {
                if (rootLoaded) {
                  // Quick fix for not sending patch to server when watch is set.
                  if (current === previous) {
                    return;
                  }
                  var jsonPointer = '/' + prop.replace(/\./g, '/');
                  var patch = diffToPatch(jsondiffpatch.diff(remoteScope[prop], current), jsonPointer);
                  
                  for(var i= 0, ilen=patch.length; i<ilen; i++) {
                    if(typeof patch[i].replace !== 'undefined' && patch[i].value === '$$null') {
                      /*
                      If value of a property was changed to string '$$null', it means that we want to send real null 
                      to server and keep null as the value in client side.
                      This is a workaround to null -> null changes being not detected by watch mechanism.
                      Null is used as button trigger in Starcounter.
                      */
                      patch[i].value = null; //set the change to null in JSON Patch
                      
                      /* determine if original value was false or null */
                      var test = jsonpatch.apply(remoteScope, [{ 
                        test: patch[i].replace, //check the original value
                        value: false //does original value equal false?
                      }]);
                      jsonpatch.apply(scope, [{ 
                        replace: patch[i].replace, //revert the change in current scope
                        value: (test ? false : null) //use original value from remoteScope cache (false or null)
                      }]);
                    }
                  }
                  
                  if(patch.length) {
                    updateServer(scope, patch);
                  }
                }
              })
            })(props[i]), true);
          }
        }

        return function postLink(scope, element, attrs, controller) {
          // Check if we should load local json file as a scope
          if (attrs.serverScope) {
            // Load local file
            $http.get(attrs.serverScope).success(function (data, status, headers, config) {
              // json file loaded
              console.log("NOTICE: Local scope was loaded (" + attrs.serverScope + ")");
              // apply loaded data to scope
              overwriteRoot(scope, data);
              rootLoaded = true;
            }).error(function (data, status, headers, config) {
              console.log("ERROR: Loading " + attrs.serverScope + " (" + status + ")");
            });
            return;
          }

          if (typeof window.__elim_rq !== 'undefined') {
            overwriteRoot(scope, window.__elim_rq);
            rootLoaded = true;
          }
          else {
            parseViewModelId(scope);
            getRoot(scope);
          }
        }
      }
    };
    return directiveDefinitionObject;
  }])
  
  .directive('uiClick', ['$parse', function ($parse) {
    var directiveDefinitionObject = {
      restrict: 'A',
      compile: function compile(tElement, tAttrs, transclude) {
        var fn = $parse(tAttrs.uiClick + ' = "$$null"');
        return function postLink(scope, element, attrs, controller) {
          element.bind('click', function(event) {
            scope.$apply(function() {
              fn(scope, {
                $event:event
              });
            });
          });
        }
      }
    };
    return directiveDefinitionObject;
  }]);
//excerpt from https://github.com/angular/angularjs-batarang/blob/master/js/services/appContext.js
angular.module('panelApp', []).factory('appContext', function () {
  // cycle.js
  // 2011-08-24
  // https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

  // Make a deep copy of an object or array, assuring that there is at most
  // one instance of each object or array in the resulting structure. The
  // duplicate references (which might be forming cycles) are replaced with
  // an object of the form
  //      {$ref: PATH}
  // where the PATH is a JSONPath string that locates the first occurance.
  var decycle = function decycle(object) {
    var objects = [], // Keep a reference to each unique object or array
      paths = [];     // Keep the path to each unique object or array

    return (function derez(value, path) {
      var i, // The loop counter
        name, // Property name
        nu;         // The new object or array
      switch (typeof value) {
        case 'object':
          if (!value) {
            return null;
          }
          for (i = 0; i < objects.length; i += 1) {
            if (objects[i] === value) {
              return {$ref: paths[i]};
            }
          }
          objects.push(value);
          paths.push(path);
          if (Object.prototype.toString.apply(value) === '[object Array]') {
            nu = [];
            for (i = 0; i < value.length; i += 1) {
              nu[i] = derez(value[i], path + '[' + i + ']');
            }
          } else {
            nu = {};
            for (name in value) {
              if (Object.prototype.hasOwnProperty.call(value, name)) {
                nu[name] = derez(value[name],
                  path + '[' + JSON.stringify(name) + ']');
              }
            }
          }
          return nu;
        case 'number':
        case 'string':
        case 'boolean':
          return value;
      }
    }(object, '$'));
  };

  return {
    getScopeTree: function (scope) {
      var tree = {};
      var getScopeNode = function (scope, node) {

        // copy scope's locals
        node.locals = {};

        var scopeLocals = {};
        for (prop in scope) {
          if (scope.hasOwnProperty(prop) && prop !== 'this' && prop[0] !== '$') {
            scopeLocals[prop] = scope[prop];
          }
        }

        node.locals = decycle(scopeLocals);

        node.id = scope.$id;

        if (window.__ngDebug) {
          node.watchers = __ngDebug.watchers[scope.$id];
        }

        // recursively get children scopes
        node.children = [];
        var child;
        if (scope.$$childHead) {
          child = scope.$$childHead;

          do {
            getScopeNode(child, node.children[node.children.length] = {});
          } while (child = child.$$nextSibling);
        }
      };

      getScopeNode(scope, tree);
      return tree;
    }

  }
});

/*
*   Json Diff Patch
*   ---------------
*   https://github.com/benjamine/JsonDiffPatch
*   by Benjamin Eidelman - beneidel@gmail.com
*/
(function(){

    var jdp = {};
    if (typeof jsondiffpatch != 'undefined'){
        jdp = jsondiffpatch;
    }
    
    jdp.config = {
        textDiffMinLength: 60
    };
    

    jdp.dateReviver = function(key, value){
        var a;
        if (typeof value === 'string') {
            a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
            if (a) {
                return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
            }
        }
        return value;
    }
    
    var diff_match_patch_autoconfig = function(){
        var dmp;
        
        if (jdp.config.diff_match_patch) {
            dmp = new jdp.config.diff_match_patch.diff_match_patch();
        }
        if (typeof diff_match_patch != 'undefined') {
            if (typeof diff_match_patch == 'function') {
                dmp = new diff_match_patch();
            }
            else 
                if (typeof diff_match_patch == 'object' &&
                typeof diff_match_patch.diff_match_patch == 'function') {
                    dmp = new diff_match_patch.diff_match_patch();
                }
        }
        
        if (dmp) {
            jdp.config.textDiff = function(txt1, txt2){
                return dmp.patch_toText(dmp.patch_make(txt1, txt2));
            }
            jdp.config.textPatch = function(txt1, patch){
                var results = dmp.patch_apply(dmp.patch_fromText(patch), txt1);
                for (var i = 0; i < results[1].length; i++) {
                    if (!results[1][i]) {
                        throw new Error('text patch failed');
                    }
                }
                return results[0];
            };
            return true;
        }
    }

    var isArray = (typeof Array.isArray == 'function') ?
        // use native function
        Array.isArray :
        // use instanceof operator
        function(a) {
            return typeof a == 'object' && a instanceof Array;
        };

    var isDate = function(d){
        return d instanceof Date || Object.prototype.toString.call(d) === '[object Date]';
    };

    var arrayDiff = function(o, n){
        var adiff, i, idiff, nl = n.length, ol = o.length, addItemDiff;
        
        addItemDiff = function(index){
            idiff = diff(o[index], n[index]);
            if (typeof idiff != 'undefined') {
                if (typeof adiff == 'undefined') {
                    adiff = {
                        _t: 'a'
                    };
                }
                adiff[index] = idiff;
            }
        };
        
        for (i = 0; i < Math.max(nl, ol); i++) {
            addItemDiff(i);
        }
        return adiff;
    };
    
    var arrayDiffByKey = function(o, n, itemKey){
        var adiff, ol = o.length, nl = n.length, getKey, dcount = 0;
        
        if (typeof itemKey == 'function') {
            getKey = itemKey;
        }
        else {
            getKey = function(item){
                return item[itemKey];
            }
        }
        
        for (var i = 0; i < nl; i++) {
            if (typeof adiff == 'undefined') {
                adiff = {
                    _t: 'a'
                };
            }
            // added, changed or unchanged
            adiff[getKey(n[i])] = [n[i]];
            dcount++;
        }
        for (var i = 0; i < ol; i++) {
            var key = getKey(o[i]);
            if (typeof adiff == 'undefined' || typeof adiff[key] == 'undefined') {
                if (typeof adiff == 'undefined') {
                    adiff = {
                        _t: 'a'
                    };
                }
                // deleted
                adiff[key] = [o[i], 0, 0];
                dcount++;
            }
            else {
                var d = diff(o[i], adiff[key][0]);
                if (typeof d == 'undefined') {
                    // unchanged
                    delete adiff[key];
                    dcount--;
                }
                else {
                    // changed
                    adiff[key] = d;
                }
            }
        }
        if (dcount > 0) {
            return adiff;
        }
        else {
            // no changes
            return;
        }
    };
    
    var objectDiff = function(o, n){
    
        var odiff, pdiff, prop, addPropDiff;
        
        addPropDiff = function(name){
        
            if (isArray(n[prop]) && (n[prop + '_key'] || n['_' + prop + '_key'])) {
                n[prop]._key = n[prop + '_key'] || n['_' + prop + '_key'];
            }
            if (isArray(o[prop]) && (o[prop + '_key'] || o['_' + prop + '_key'])) {
                o[prop]._key = o[prop + '_key'] || o['_' + prop + '_key'];
            }
            
            pdiff = diff(o[prop], n[prop]);
            if (typeof pdiff != 'undefined') {
                if (typeof odiff == 'undefined') {
                    odiff = {};
                }
                odiff[prop] = pdiff;
            }
        };
        
        for (prop in n) {
            if (n.hasOwnProperty(prop)) {
                addPropDiff(prop);
            }
        }
        for (prop in o) {
            if (o.hasOwnProperty(prop)) {
                if (typeof n[prop] == 'undefined') {
                    addPropDiff(prop);
                }
            }
        }
        return odiff;
    };
    
    var diff = jdp.diff = function(o, n){
        var ntype, otype, nnull, onull, d;
        
        if (o === n) {
            return;
        }
        ntype = typeof n;
        otype = typeof o;
        nnull = n === null;
        onull = o === null;

        // handle Date objects
        if (otype == 'object' && isDate(o)){
            otype = 'date';
        }
        if (ntype == 'object' && isDate(n)){
            ntype = 'date';
            if (otype == 'date'){
                // check if equal dates
                if (o.getTime() === n.getTime()){
                    return;
                }
            }
        }
        
        if (nnull || onull || ntype == 'undefined' || ntype != otype ||
        ntype == 'number' ||
        otype == 'number' ||
        ntype == 'boolean' ||
        otype == 'boolean' ||
        ntype == 'string' ||
        otype == 'string' ||
        ntype == 'date' ||
        otype == 'date' ||
        ((ntype === 'object') && (isArray(n) != isArray(o)))) {
            // value changed
            d = [];
            if (typeof o != 'undefined') {
                if (typeof n != 'undefined') {
                    var longText = (ntype == 'string' && otype == 'string' && Math.min(o.length, n.length) > jdp.config.textDiffMinLength);
                    if (longText && !jdp.config.textDiff) {
                        diff_match_patch_autoconfig();
                    }
                    if (longText && jdp.config.textDiff) {
                        // get changes form old value to new value as a text diff
                        d.push(jdp.config.textDiff(o, n), 0, 2);
                    }
                    else {
                        // old value changed to new value
                        d.push(o);
                        d.push(n);
                    }
                }
                else {
                    // old value has been removed
                    d.push(o);
                    d.push(0, 0);
                }
            }
            else {
                // new value is added
                d.push(n);
            }
            return d;
        }
        else {
            if (isArray(n)) {
                // diff 2 arrays	
                if (n._key || o._key) {
                    return arrayDiffByKey(o, n, n._key || o._key);
                }
                else {
                    return arrayDiff(o, n);
                }
            }
            else {
                // diff 2 objects
                return objectDiff(o, n);
            }
        }
    };
    
    var objectGet = function(obj, key){
        if (isArray(obj) && obj._key) {
            var getKey = obj._key;
            if (typeof obj._key != 'function') {
                getKey = function(item){
                    return item[obj._key];
                }
            }
            for (var i = 0; i < obj.length; i++) {
                if (getKey(obj[i]) === key) {
                    return obj[i];
                }
            }
            return;
        }
        return obj[key];
    };
    
    jdp.getByKey = objectGet;
    
    var objectSet = function(obj, key, value){
        if (isArray(obj) && obj._key) {
            var getKey = obj._key;
            if (typeof obj._key != 'function') {
                getKey = function(item){
                    return item[obj._key];
                }
            }
            for (var i = 0; i < obj.length; i++) {
                if (getKey(obj[i]) === key) {
                    if (typeof value == 'undefined') {
                        obj.splice(i, 1);
                        i--;
                    }
                    else {
                        obj[i] = value;
                    }
                    return;
                }
            }
            if (typeof value != 'undefined') {
                obj.push(value);
            }
            return;
        }
        if (typeof value == 'undefined') {
            if (isArray(obj)) {
                obj.splice(key, 1);
            } else { 
                delete obj[key];
            }
        }
        else {
            obj[key] = value;
        }
    }

    var textDiffReverse = function(td){

        if (!jdp.config.textDiffReverse){
            jdp.config.textDiffReverse = function(d){

                var i, l, lines, line, lineTmp, header = null, headerRegex = /^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/, lineHeader, lineAdd, lineRemove;

                var diffSwap = function() {
                    // swap
                    if (lineAdd !== null) {
                        lines[lineAdd] = '-' + lines[lineAdd].slice(1);
                    }
                    if (lineRemove !== null) {
                        lines[lineRemove] = '+' + lines[lineRemove].slice(1);
                        if (lineAdd !== null) {
                            lineTmp = lines[lineAdd];
                            lines[lineAdd] = lines[lineRemove];
                            lines[lineRemove] = lineTmp;
                        }
                    }

                    // fix header
                    lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';

                    header = null;
                    lineHeader = null;
                    lineAdd = null;
                    lineRemove = null;
                }

                lines = d.split('\n');
                for (i = 0, l = lines.length; i<l; i++) {
                    line = lines[i];
                    var lineStart = line.slice(0,1);
                    if (lineStart==='@'){
                        if (header !== null) {
                            //diffSwap();
                        }
                        header = headerRegex.exec(line);
                        lineHeader = i;
                        lineAdd = null;
                        lineRemove = null;

                        // fix header
                        lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
                    } else if (lineStart == '+'){
                        lineAdd = i;
                        lines[i] = '-' + lines[i].slice(1);
                    } else if (lineStart == '-'){
                        lineRemove = i;
                        lines[i] = '+' + lines[i].slice(1);
                    }
                }
                if (header !== null) {
                    //diffSwap();
                }
                return lines.join('\n');
            };
        }
        return jdp.config.textDiffReverse(td);
    }

    var reverse = jdp.reverse = function(d){

        var prop, rd;

        if (typeof d == 'undefined')
        {
            return;
        } else if (d === null){
            return null;
        } else if (typeof d == 'object' && !isDate(d)) {
            if (isArray(d)){
                if (d.length < 3) {
                    if (d.length == 1) {
                        // add => delete
                        return [d[0], 0, 0];
                    } else {
                        // modify => reverse modify
                        return [d[1], d[0]];
                    }
                }
                else {
                    if (d[2] == 0) {
                        // undefined, delete value => add value
                        return [d[0]];
                    }
                    else
                        if (d[2] == 2) {
                            return [textDiffReverse(d[0]), 0, 2];
                        }
                        else {
                            throw new Error("invalid diff type");
                        }
                }
            }else {
                rd = {};
                for (prop in d) {
                    if (d.hasOwnProperty(prop)) {
                        rd[prop] = reverse(d[prop]);
                    }
                }
                return rd;
            }
        } else if (typeof d === 'string' && d.slice(0,2) === '@@'){
            return textDiffReverse(d);
        }
        return d;
    }
    
    var patch = jdp.patch = function(o, pname, d, path) {
    
        var p, nvalue, subpath = '', target;
        
        if (typeof pname != 'string') {
            path = d;
            d = pname;
            pname = null;
        }
        else {
            if (typeof o != 'object') {
                pname = null;
            }
        }
        
        if (path) {
            subpath += path;
        }
        subpath += '/';
        if (pname !== null) {
            subpath += pname;
        }
        
        
        if (typeof d == 'object') {
            if (isArray(d)) {
                // changed value
                if (d.length < 3) {
                    nvalue = d[d.length - 1];
                    if (pname !== null) {
                        objectSet(o, pname, nvalue);
                    }
                    return nvalue;
                }
                else {
                    if (d[2] == 0) {
                        // undefined, delete value
                        if (pname !== null) {
                            objectSet(o, pname);
                        }
                        else {
                            return;
                        }
                    }
                    else 
                        if (d[2] == 2) {
                            // text diff
                            if (!jdp.config.textPatch) {
                                diff_match_patch_autoconfig();
                            }
                            if (!jdp.config.textPatch) {
                                throw new Error("textPatch function not found");
                            }
                            try {
                                nvalue = jdp.config.textPatch(objectGet(o, pname), d[0]);
                            } 
                            catch (text_patch_err) {
                                throw new Error('cannot apply patch at "' + subpath + '": ' + text_patch_err);
                            }
                            if (pname !== null) {
                                objectSet(o, pname, nvalue);
                            }
                            return nvalue;
                        }
                        else {
                            throw new Error("invalid diff type");
                        }
                }
            }
            else {
                if (d._t == 'a') {
                    // array diff
                    target = pname === null ? o : objectGet(o, pname);
                    if (typeof target != 'object' || !isArray(target)) {
                        throw new Error('cannot apply patch at "' + subpath + '": array expected');
                    }
                    else {
                        for (p in d) {
                            if (p !== '_t' && d.hasOwnProperty(p)) {
                                patch(target, p, d[p], subpath);
                            }
                        }
                    }
                }
                else {
                    // object diff
                    target = pname === null ? o : objectGet(o, pname);
                    if (typeof target != 'object' || isArray(target)) {
                        throw new Error('cannot apply patch at "' + subpath + '": object expected');
                    }
                    else {
                        for (p in d) {
                            if (d.hasOwnProperty(p)) {
                                patch(target, p, d[p], subpath);
                            }
                        }
                    }
                }
            }
        }
        
        return o;
    }

    var unpatch = jdp.unpatch = function(o, pname, d, path){
        
        if (typeof pname != 'string') {
            return patch(o, reverse(pname), d);
        }

        return patch(o, pname, reverse(d), path);
    }
    
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // CommonJS, eg: node.js
        module.exports = jdp;
    } else if (typeof define === 'function' && define['amd']) {
        // AMD
        define(jdp);
    } else {
        // browser global
        window.jsondiffpatch = jdp;
    }

})();

// Generated by CoffeeScript 1.3.3
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(root, factory) {
    if (typeof exports !== 'undefined') {
      return factory(root, exports);
    } else if (typeof define === 'function' && define.amd) {
      return define(['exports'], function(exports) {
        return root.jsonpatch = factory(root, exports);
      });
    } else {
      return root.jsonpatch = factory(root, {});
    }
  })(this, function(root) {
    var InvalidPatchError, JSONPatch, JSONPatchError, JSONPointer, PatchConflictError, add, apply, compile, hasOwnProperty, isArray, isEqual, isObject, isString, memberProcessors, methodMap, move, operationMembers, remove, replace, test, toString, _isEqual;
    toString = Object.prototype.toString;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    isArray = function(obj) {
      return toString.call(obj) === '[object Array]';
    };
    isObject = function(obj) {
      return toString.call(obj) === '[object Object]';
    };
    isString = function(obj) {
      return toString.call(obj) === '[object String]';
    };
    _isEqual = function(a, b, stack) {
      var className, key, length, result, size;
      if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
      }
      if (a === null || b === null) {
        return a === b;
      }
      className = toString.call(a);
      if (className !== toString.call(b)) {
        return false;
      }
      switch (className) {
        case '[object String]':
          String(a) === String(b);
          break;
        case '[object Number]':
          a = +a;
          b = +b;
          if (a !== a) {
            b !== b;
          } else {
            if (a === 0) {
              1 / a === 1 / b;
            } else {
              a === b;
            }
          }
          break;
        case '[object Boolean]':
          +a === +b;
      }
      if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
      }
      length = stack.length;
      while (length--) {
        if (stack[length] === a) {
          return true;
        }
      }
      stack.push(a);
      size = 0;
      result = true;
      if (className === '[object Array]') {
        size = a.length;
        result = size === b.length;
        if (result) {
          while (size--) {
            if (!(result = __indexOf.call(a, size) >= 0 === __indexOf.call(b, size) >= 0 && _isEqual(a[size], b[size], stack))) {
              break;
            }
          }
        }
      } else {
        if (__indexOf.call(a, "constructor") >= 0 !== __indexOf.call(b, "constructor") >= 0 || a.constructor !== b.constructor) {
          return false;
        }
        for (key in a) {
          if (hasOwnProperty.call(a, key)) {
            size++;
            if (!(result = hasOwnProperty.call(b, key) && _isEqual(a[key], b[key], stack))) {
              break;
            }
          }
        }
        if (result) {
          for (key in b) {
            if (hasOwnProperty.call(b, key) && !size--) {
              break;
            }
          }
          result = !size;
        }
      }
      stack.pop();
      return result;
    };
    isEqual = function(a, b) {
      return _isEqual(a, b, []);
    };
    JSONPatchError = (function(_super) {

      __extends(JSONPatchError, _super);

      function JSONPatchError(message) {
        this.name = 'JSONPatchError';
        this.message = message || 'JSON patch error';
      }

      return JSONPatchError;

    })(Error);
    InvalidPatchError = (function(_super) {

      __extends(InvalidPatchError, _super);

      function InvalidPatchError(message) {
        this.name = 'InvalidPatch';
        this.message = message || 'Invalid patch';
      }

      return InvalidPatchError;

    })(JSONPatchError);
    PatchConflictError = (function(_super) {

      __extends(PatchConflictError, _super);

      function PatchConflictError(message) {
        this.name = 'PatchConflictError';
        this.message = message || 'Patch conflict';
      }

      return PatchConflictError;

    })(JSONPatchError);
    JSONPointer = (function() {

      function JSONPointer(path, shouldExist) {
        var i, loc, steps, _i, _len;
        if (shouldExist == null) {
          shouldExist = true;
        }
        if (path && (steps = path.split('/')).shift() !== '') {
          throw new InvalidPatchError();
        }
        for (i = _i = 0, _len = steps.length; _i < _len; i = ++_i) {
          loc = steps[i];
          steps[i] = decodeURIComponent(loc);
        }
        this.accessor = steps.pop();
        this.path = steps;
      }

      JSONPointer.prototype.getObject = function(obj) {
        var loc, _i, _len, _ref;
        _ref = this.path;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          loc = _ref[_i];
          if (isArray(obj)) {
            loc = parseInt(loc, 10);
          }
          if (!(loc in obj)) {
            throw new PatchConflictError('Array location out of bounds or not an instance property');
          }
          obj = obj[loc];
        }
        return obj;
      };

      return JSONPointer;

    })();
    JSONPatch = (function() {

      function JSONPatch(patch) {
        var key, member, method, preproc, supp;
        for (key in patch) {
          if (!(method = methodMap[key])) {
            continue;
          }
          if (this.operation) {
            throw new InvalidPatchError();
          }
          if ((member = operationMembers[key]) && patch[member] === void 0) {
            throw new InvalidPatchError("Patch member " + member + " not defined");
          }
          this.operation = methodMap[key];
          this.pointer = new JSONPointer(patch[key]);
          supp = patch[member];
          if ((preproc = memberProcessors[key])) {
            supp = preproc(supp);
          }
          this.supplement = supp;
        }
        if (!this.operation) {
          throw new InvalidPatchError();
        }
      }

      JSONPatch.prototype.apply = function(obj) {
        return this.operation(obj, this.pointer, this.supplement);
      };

      return JSONPatch;

    })();
    add = function(root, pointer, value) {
      var acc, obj;
      obj = pointer.getObject(root);
      acc = pointer.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
        if (acc < 0 || acc > obj.length) {
          throw new PatchConflictError("Index " + acc + " out of bounds");
        }
        obj.splice(acc, 0, value);
      } else {
        if (acc in obj) {
          throw new PatchConflictError("Value at " + acc + " exists");
        }
        obj[acc] = value;
      }
    };
    remove = function(root, pointer) {
      var acc, obj;
      obj = pointer.getObject(root);
      acc = pointer.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        obj.splice(acc, 1);
      } else {
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        delete obj[acc];
      }
    };
    replace = function(root, pointer, value) {
      var acc, obj;
      obj = pointer.getObject(root);
      acc = pointer.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        obj.splice(acc, 1, value);
      } else {
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        obj[acc] = value;
      }
    };
    test = function(root, pointer, value) {
      var acc, obj;
      obj = pointer.getObject(root);
      acc = pointer.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
      }
      return isEqual(obj[acc], value);
    };
    move = function(root, from, to) {
      var acc, obj, value;
      obj = from.getObject(root);
      acc = from.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        value = obj.splice(acc, 1)[0];
      } else {
        if (!(acc in obj)) {
          throw new PatchConflictError("Value at " + acc + " does not exist");
        }
        value = obj[acc];
        delete obj[acc];
      }
      obj = to.getObject(root);
      acc = to.accessor;
      if (isArray(obj)) {
        acc = parseInt(acc, 10);
        if (acc < 0 || acc > obj.length) {
          throw new PatchConflictError("Index " + acc + " out of bounds");
        }
        obj.splice(acc, 0, value);
      } else {
        if (acc in obj) {
          throw new PatchConflictError("Value at " + acc + " exists");
        }
        obj[acc] = value;
      }
    };
    methodMap = {
      add: add,
      remove: remove,
      replace: replace,
      move: move,
      test: test
    };
    operationMembers = {
      add: 'value',
      remove: null,
      replace: 'value',
      test: 'value',
      move: 'to'
    };
    memberProcessors = {
      move: function(to) {
        return new JSONPointer(to);
      }
    };
    apply = function(root, patchDocument) {
      return compile(patchDocument)(root);
    };
    compile = function(patchDocument) {
      var operations, patch, _i, _len;
      operations = [];
      for (_i = 0, _len = patchDocument.length; _i < _len; _i++) {
        patch = patchDocument[_i];
        operations.push(new JSONPatch(patch));
      }
      return function(root) {
        var op, result, _j, _len1;
        for (_j = 0, _len1 = operations.length; _j < _len1; _j++) {
          op = operations[_j];
          result = op.apply(root);
        }
        return result;
      };
    };
    root.apply = apply;
    root.compile = compile;
    root.JSONPatchError = JSONPatchError;
    root.InvalidPatchError = InvalidPatchError;
    root.PatchConflictError = PatchConflictError;
    return root;
  });

}).call(this);

/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()},e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")},e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=n,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},to:function(t){var n=this.$element.find(".item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){s.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",e(r[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0]});if(i.hasClass("active"))return;if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}},e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e(document).on("click.carousel.data-api","[data-slide]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data());i.carousel(s),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning)return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning)return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=typeof n=="object"&&n;i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=e(n),r.length||(r=t.parent()),r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||(s.toggleClass("open"),n.focus()),!1},keydown:function(t){var n,r,s,o,u,a;if(!/(38|40|27)/.test(t.keyCode))return;n=e(this),t.preventDefault(),t.stopPropagation();if(n.is(".disabled, :disabled"))return;o=i(n),u=o.hasClass("open");if(!u||u&&t.keyCode==27)return n.click();r=e("[role=menu] li:not(.divider) a",o);if(!r.length)return;a=r.index(r.filter(":focus")),t.keyCode==38&&a>0&&a--,t.keyCode==40&&a<r.length-1&&a++,~a||(a=0),r.eq(a).focus()}},e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e(document).on("click.dropdown.data-api touchstart.dropdown.data-api",r).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(e){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()):t&&t()}},e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):this.options.trigger!="manual"&&(i=this.options.trigger=="hover"?"mouseenter":"focus",s=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(s),e.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),n=this.getPosition(t),r=e[0].offsetWidth,i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}e.offset(o).addClass(s).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function r(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip();return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?r():n.detach(),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);n[n.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content > *")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),r=/^#\w/.test(n)&&e(n);return r&&r.length&&[[r.position().top,n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}},e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=e(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(e){var t=this;setTimeout(function(){t.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")}},e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;t.preventDefault(),n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))},e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);

/**
 * angular-ui-handsontable 0.1.1-dev
 * 
 * Date: Tue Nov 13 2012 16:19:09 GMT+0100 (Central European Standard Time)
*/

angular.module('ui.directives', [])
  .directive('uiHandsontable', function () {
    var directiveDefinitionObject = {
      restrict: 'EA',
      compile: function compile(tElement, tAttrs, transclude) {

        var defaultSettings = {
          startRows: 0,
          startCols: 3,
          outsideClickDeselects: false,
          autoComplete: []
        };

        var $container = $('<div class="ui-handsontable-container"></div>');

        var expression = tAttrs.datarows;
        var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
          lhs, rhs;
        if (!match) {
          throw Error("Expected datarows in form of '_item_ in _collection_' but got '" +
            expression + "'.");
        }
        lhs = match[1];
        rhs = match[2];
        tElement.data("uiDatagrid", {
          lhs: lhs,
          rhs: rhs,
          colHeaders: [],
          columns: [],
          settings: angular.extend({}, defaultSettings),
          $container: $container
        });

        return function postLink(scope, element, attrs, controller) {
          var uiDatagrid = element.data("uiDatagrid");
          uiDatagrid.settings = angular.extend(uiDatagrid.settings, scope.$eval(attrs.uiHandsontable || attrs.settings));

          $(element).append($container);

          if (typeof scope[rhs] !== 'undefined') {
            uiDatagrid.settings['data'] = scope[rhs];
            if (uiDatagrid.columns.length > 0) {
              uiDatagrid.settings['columns'] = uiDatagrid.columns;
              uiDatagrid.settings['startCols'] = uiDatagrid.columns.length;
            }
          }

          if (uiDatagrid.colHeaders.length > 0) {
            uiDatagrid.settings['colHeaders'] = uiDatagrid.colHeaders;
          }

          $container.handsontable(uiDatagrid.settings);

          $container.on('datachange.handsontable', function (event, changes, source) {
            if (!scope.$$phase) { //if digest is not in progress
              scope.$digest(); //programmatic change does not trigger digest in AnuglarJS so we need to trigger it automatically
            }
          });

          $container.on('selectionbyprop.handsontable', function (event, r, p, r2, p2) {
            scope.$emit('datagridSelection', $container, r, p, r2, p2);
          });

          scope.$watch(rhs, function (newVal) {
            if (scope[rhs] !== $container.handsontable('getData') && uiDatagrid.columns.length > 0) {
              $container.handsontable('updateSettings', {
                data: scope[rhs],
                columns: uiDatagrid.columns,
                startCols: uiDatagrid.columns.length
              });
            }
            else {
              $container.handsontable('loadData', scope[rhs]);
            }
          }, true);
        }
      }
    };
    return directiveDefinitionObject;
  })
  .directive('datacolumn', function () {
    var directiveDefinitionObject = {
      restrict: 'E',
      priority: 500,
      compile: function compile(tElement, tAttrs, transclude) {

        var keys = [];
        for (var i in tAttrs) {
          if (tAttrs.hasOwnProperty(i)) {
            keys.push(i);
          }
        }

        tElement.data("uiDatagridAutocomplete", {
          value: tAttrs.value,
          source: null,
          live: ($.inArray('live', keys) !== -1), //true if element has attribute 'live'
          strict: ($.inArray('strict', keys) !== -1) //true if element has attribute 'strict'
        });

        return function postLink(scope, element, attrs, controller) {
          var i;
          var uiDatagrid = element.inheritedData("uiDatagrid");

          var pattern = new RegExp("^(" + uiDatagrid.lhs + "\\.)")
            , value = attrs.value.replace(pattern, '')
            , title = scope.$eval(attrs.title)
            , type = scope.$eval(attrs.type)
            , options = attrs.options
            , tmp;

          var childScope = scope.$new();

          var column = scope.$eval(options) || {};
          column.data = value;

          uiDatagrid.colHeaders.push(title);

          switch (type) {
            case 'autocomplete':
              column.type = Handsontable.AutocompleteCell;
              var uiDatagridAutocomplete = element.data("uiDatagridAutocomplete");
              for (i in uiDatagridAutocomplete) {
                if (uiDatagridAutocomplete.hasOwnProperty(i)) {
                  column[i] = uiDatagridAutocomplete[i];
                }
              }
              break;

            case 'checkbox':
              column.type = Handsontable.CheckboxCell;
              tmp = attrs.checkedtemplate;
              if (typeof tmp !== 'undefined') {
                column.checkedTemplate = scope.$eval(tmp); //if undefined then defaults to Boolean true
              }
              tmp = attrs.uncheckedtemplate;
              if (typeof tmp !== 'undefined') {
                column.uncheckedTemplate = scope.$eval(tmp); //if undefined then defaults to Boolean true
              }
              break;

            default:
              if (typeof type === 'object') {
                column.type = type;
              }
          }

          if (typeof attrs.readonly !== 'undefined') {
            column.readOnly = true;
          }

          for (i in attrs) {
            if (attrs.hasOwnProperty(i) && i.charAt(0) !== '$' && typeof column[i] === 'undefined') {
              column[i] = childScope.$eval(attrs[i]);
            }
          }

          uiDatagrid.columns.push(column);
        }
      }
    };
    return directiveDefinitionObject;
  })
  .directive('optionlist', function () {
    var directiveDefinitionObject = {
      restrict: 'E',
      transclude: 'element',
      priority: 510,
      compile: function compile(element, attr, linker) {

        return function postLink(scope, element, attrs, controller) {
          var uiDatagridAutocomplete = element.inheritedData("uiDatagridAutocomplete");
          var uiDatagrid = element.inheritedData("uiDatagrid");

          var expression = attrs.datarows;
          var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
            lhs, rhs;
          if (!match) {
            throw Error("Expected datarows in form of '_item_ in _collection_' but got '" +
              expression + "'.");
          }
          lhs = match[1];
          rhs = match[2];

          var deregister
            , deinterval;

          var childScope = scope.$new();

          var lastItems;
          var lastQuery;

          uiDatagridAutocomplete.source = function (query, process) {
            if ($.trim(query) === lastQuery) {
              return;
            }
            lastQuery = $.trim(query);

            if (deregister) {
              deregister();
              clearInterval(deinterval);
            }
            var row = uiDatagrid.$container.data('handsontable').getSelected()[0];
            childScope[uiDatagrid.lhs] = scope.$eval(uiDatagrid.rhs)[row];
            if (uiDatagridAutocomplete.live) {
              childScope.$eval(uiDatagridAutocomplete.value + ' = "' + $.trim(query).replace(/"/g, '\"') + '"'); //refresh value after each key stroke
              childScope.$digest();
            }
            deinterval = setInterval(function () {
              scope.currentItem = childScope.item = uiDatagrid.$container.data('handsontable').getData()[row];
              scope.$digest();
              childScope.$digest();
            }, 100);
            deregister = childScope.$watch(rhs, function (newVal) {
              lastItems = newVal;
              if (process) {
                process(newVal);
              }
            }, true);
          };

          uiDatagridAutocomplete.sorter = function (items) {
            return items;
          };

          uiDatagridAutocomplete.highlighter = function (item) {
            var el;
            var optionScope = childScope.$new();
            optionScope[lhs] = item;
            linker(optionScope, function (elem) {
              el = elem[0];
              el.style.display = 'block';
            });
            return el;
          };

          uiDatagridAutocomplete.select = function () {
            var instance = uiDatagrid.$container.data('handsontable');
            if (this.$menu.find('.active').length) {
              var index = this.$menu.find('.active').index();
              childScope[lhs] = lastItems[index];
              instance.destroyEditor();
              childScope.$eval(attrs.clickrow);
            }
            else if (!uiDatagridAutocomplete.strict) {
              instance.destroyEditor();
              childScope.$eval(uiDatagridAutocomplete.value + ' = "' + $.trim(this.query).replace(/"/g, '\"') + '"'); //assign current textarea value
            }

            lastQuery = void 0;
            return this.hide();
          };
        }
      }
    };
    return directiveDefinitionObject;
  });
/**
 * Handsontable 0.7.3-dev
 * Handsontable is a simple jQuery plugin for editable tables with basic copy-paste compatibility with Excel and Google Docs
 *
 * Copyright 2012, Marcin Warpechowski
 * Licensed under the MIT license.
 * http://handsontable.com/
 *
 * Date: Mon Nov 12 2012 14:02:00 GMT+0100 (Central European Standard Time)
 */
/*jslint white: true, browser: true, plusplus: true, indent: 4, maxerr: 50 */

var Handsontable = { //class namespace
  extension: {}, //extenstion namespace
  helper: {} //helper namespace
};

(function ($, window, Handsontable) {
  "use strict";
/**
 * Handsontable constructor
 * @param rootElement The jQuery element in which Handsontable DOM will be inserted
 * @param settings
 * @constructor
 */
Handsontable.Core = function (rootElement, settings) {
  this.rootElement = rootElement;

  var priv, datamap, grid, selection, editproxy, highlight, autofill, validate, self = this;

  priv = {
    settings: {},
    selStart: null,
    selEnd: null,
    editProxy: false,
    isPopulated: null,
    scrollable: null,
    undoRedo: null,
    extensions: {},
    colToProp: [],
    propToCol: {},
    dataSchema: null,
    dataType: 'array'
  };

  var hasMinWidthProblem = ($.browser.msie && (parseInt($.browser.version, 10) <= 7));
  /**
   * Used to get over IE7 not respecting CSS min-width (and also not showing border around empty cells)
   * @param {Element} td
   */
  this.minWidthFix = function (td) {
    if (hasMinWidthProblem) {
      if (td.className) {
        td.innerHTML = '<div class="minWidthFix ' + td.className + '">' + td.innerHTML + '</div>';
      }
      else {
        td.innerHTML = '<div class="minWidthFix">' + td.innerHTML + '</div>';
      }
    }
  };

  var hasPositionProblem = ($.browser.msie && (parseInt($.browser.version, 10) <= 7));
  /**
   * Used to get over IE7 returning negative position in demo/buttons.html
   * @param {Object} position
   */
  this.positionFix = function (position) {
    if (hasPositionProblem) {
      if (position.top < 0) {
        position.top = 0;
      }
      if (position.left < 0) {
        position.left = 0;
      }
    }
  };

  datamap = {
    recursiveDuckSchema: function (obj) {
      var schema;
      if ($.isPlainObject(obj)) {
        schema = {};
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if ($.isPlainObject(obj[i])) {
              schema[i] = datamap.recursiveDuckSchema(obj[i]);
            }
            else {
              schema[i] = null;
            }
          }
        }
      }
      else {
        schema = [];
      }
      return schema;
    },

    recursiveDuckColumns: function (schema, lastCol, parent) {
      var prop, i;
      if (typeof lastCol === 'undefined') {
        lastCol = 0;
        parent = '';
      }
      if ($.isPlainObject(schema)) {
        for (i in schema) {
          if (schema.hasOwnProperty(i)) {
            if (schema[i] === null) {
              prop = parent + i;
              priv.colToProp.push(prop);
              priv.propToCol[prop] = lastCol;
              lastCol++;
            }
            else {
              lastCol = datamap.recursiveDuckColumns(schema[i], lastCol, i + '.');
            }
          }
        }
      }
      return lastCol;
    },

    createMap: function () {
      if (typeof datamap.getSchema() === "undefined") {
        throw new Error("trying to create `columns` definition but you didnt' provide `schema` nor `data`");
      }
      var i, ilen, schema = datamap.getSchema();
      priv.colToProp = [];
      priv.propToCol = {};
      if (priv.settings.columns) {
        for (i = 0, ilen = priv.settings.columns.length; i < ilen; i++) {
          priv.colToProp[i] = priv.settings.columns[i].data;
          priv.propToCol[priv.settings.columns[i].data] = i;
        }
      }
      else {
        datamap.recursiveDuckColumns(schema);
      }
    },

    colToProp: function (col) {
      if (typeof priv.colToProp[col] !== 'undefined') {
        return priv.colToProp[col];
      }
      else {
        return col;
      }
    },

    propToCol: function (prop) {
      if (typeof priv.propToCol[prop] !== 'undefined') {
        return priv.propToCol[prop];
      }
      else {
        return prop;
      }

    },

    getSchema: function () {
      return priv.settings.dataSchema || priv.duckDataSchema;
    },

    /**
     * Creates row at the bottom of the data array
     * @param {Object} [coords] Optional. Coords of the cell before which the new row will be inserted
     */
    createRow: function (coords) {
      var row;
      if (priv.dataType === 'array') {
        row = [];
        for (var c = 0; c < self.colCount; c++) {
          row.push(null);
        }
      }
      else {
        row = $.extend(true, {}, datamap.getSchema());
      }
      if (!coords || coords.row >= self.rowCount) {
        priv.settings.data.push(row);
      }
      else {
        priv.settings.data.splice(coords.row, 0, row);
      }
    },

    /**
     * Creates col at the right of the data array
     * @param {Object} [coords] Optional. Coords of the cell before which the new column will be inserted
     */
    createCol: function (coords) {
      if (priv.dataType === 'object' || priv.settings.columns) {
        throw new Error("cannot create column with object data source or columns option specified");
      }
      var r = 0;
      if (!coords || coords.col >= self.colCount) {
        for (; r < self.rowCount; r++) {
          if (typeof priv.settings.data[r] === 'undefined') {
            priv.settings.data[r] = [];
          }
          priv.settings.data[r].push('');
        }
      }
      else {
        for (; r < self.rowCount; r++) {
          priv.settings.data[r].splice(coords.col, 0, '');
        }
      }
    },

    /**
     * Removes row at the bottom of the data array
     * @param {Object} [coords] Optional. Coords of the cell which row will be removed
     * @param {Object} [toCoords] Required if coords is defined. Coords of the cell until which all rows will be removed
     */
    removeRow: function (coords, toCoords) {
      if (!coords || coords.row === self.rowCount - 1) {
        priv.settings.data.pop();
      }
      else {
        priv.settings.data.splice(coords.row, toCoords.row - coords.row + 1);
      }
    },

    /**
     * Removes col at the right of the data array
     * @param {Object} [coords] Optional. Coords of the cell which col will be removed
     * @param {Object} [toCoords] Required if coords is defined. Coords of the cell until which all cols will be removed
     */
    removeCol: function (coords, toCoords) {
      if (priv.dataType === 'object' || priv.settings.columns) {
        throw new Error("cannot remove column with object data source or columns option specified");
      }
      var r = 0;
      if (!coords || coords.col === self.colCount - 1) {
        for (; r < self.rowCount; r++) {
          priv.settings.data[r].pop();
        }
      }
      else {
        var howMany = toCoords.col - coords.col + 1;
        for (; r < self.rowCount; r++) {
          priv.settings.data[r].splice(coords.col, howMany);
        }
      }
    },

    /**
     * Returns single value from the data array
     * @param {Number} row
     * @param {Number} prop
     */
    get: function (row, prop) {
      if (typeof prop === 'string' && prop.indexOf('.') > -1) {
        var sliced = prop.split(".");
        var out = priv.settings.data[row];
        for (var i = 0, ilen = sliced.length; i < ilen; i++) {
          out = out[sliced[i]];
          if (typeof out === 'undefined') {
            return null;
          }
        }
        return out;
      }
      else {
        return priv.settings.data[row] ? priv.settings.data[row][prop] : null;
      }
    },

    /**
     * Saves single value to the data array
     * @param {Number} row
     * @param {Number} prop
     * @param {String} value
     */
    set: function (row, prop, value) {
      if (typeof prop === 'string' && prop.indexOf('.') > -1) {
        var sliced = prop.split(".");
        var out = priv.settings.data[row];
        for (var i = 0, ilen = sliced.length - 1; i < ilen; i++) {
          out = out[sliced[i]];
        }
        out[sliced[i]] = value;
      }
      else {
        priv.settings.data[row][prop] = value;
      }
    },

    /**
     * Clears the data array
     */
    clear: function () {
      for (var r = 0; r < self.rowCount; r++) {
        for (var c = 0; c < self.colCount; c++) {
          datamap.set(r, datamap.colToProp(c), '');
        }
      }
    },

    /**
     * Returns the data array
     * @return {Array}
     */
    getAll: function () {
      return priv.settings.data;
    },

    /**
     * Returns data range as array
     * @param {Object} start Start selection position
     * @param {Object} end End selection position
     * @return {Array}
     */
    getRange: function (start, end) {
      var r, rlen, c, clen, output = [], row;
      rlen = Math.max(start.row, end.row);
      clen = Math.max(start.col, end.col);
      for (r = Math.min(start.row, end.row); r <= rlen; r++) {
        row = [];
        for (c = Math.min(start.col, end.col); c <= clen; c++) {
          row.push(datamap.get(r, datamap.colToProp(c)));
        }
        output.push(row);
      }
      return output;
    },

    /**
     * Return data as text (tab separated columns)
     * @param {Object} start (Optional) Start selection position
     * @param {Object} end (Optional) End selection position
     * @return {String}
     */
    getText: function (start, end) {
      return SheetClip.stringify(datamap.getRange(start, end));
    }
  };

  grid = {
    /**
     * Alter grid
     * @param {String} action Possible values: "insert_row", "insert_col", "remove_row", "remove_col"
     * @param {Object} coords
     * @param {Object} [toCoords] Required only for actions "remove_row" and "remove_col"
     */
    alter: function (action, coords, toCoords) {
      var oldData, newData, changes, r, rlen, c, clen, result;
      oldData = $.extend(true, [], datamap.getAll());

      switch (action) {
        case "insert_row":
          datamap.createRow(coords);
          self.view.createRow(coords);
          self.blockedCols.refresh();
          if (priv.selStart && priv.selStart.row >= coords.row) {
            priv.selStart.row = priv.selStart.row + 1;
            selection.transformEnd(1, 0);
          }
          else {
            selection.transformEnd(0, 0); //refresh selection, otherwise arrow movement does not work
          }
          break;

        case "insert_col":
          datamap.createCol(coords);
          self.view.createCol(coords);
          self.blockedRows.refresh();
          if (priv.selStart && priv.selStart.col >= coords.col) {
            priv.selStart.col = priv.selStart.col + 1;
            selection.transformEnd(0, 1);
          }
          else {
            selection.transformEnd(0, 0); //refresh selection, otherwise arrow movement does not work
          }
          break;

        case "remove_row":
          datamap.removeRow(coords, toCoords);
          self.view.removeRow(coords, toCoords);
          result = grid.keepEmptyRows();
          if (!result) {
            self.blockedCols.refresh();
          }
          selection.transformEnd(0, 0); //refresh selection, otherwise arrow movement does not work
          break;

        case "remove_col":
          datamap.removeCol(coords, toCoords);
          self.view.removeCol(coords, toCoords);
          result = grid.keepEmptyRows();
          if (!result) {
            self.blockedRows.refresh();
          }
          selection.transformEnd(0, 0); //refresh selection, otherwise arrow movement does not work
          break;
      }

      changes = [];
      newData = datamap.getAll();
      for (r = 0, rlen = newData.length; r < rlen; r++) {
        for (c = 0, clen = newData[r].length; c < clen; c++) {
          changes.push([r, c, oldData[r] ? oldData[r][c] : null, newData[r][c]]);
        }
      }
      self.rootElement.triggerHandler("datachange.handsontable", [changes, 'alter']);
    },

    /**
     * Makes sure there are empty rows at the bottom of the table
     * @return recreate {Boolean} TRUE if row or col was added or removed
     */
    keepEmptyRows: function () {
      var r, c, rlen, clen, emptyRows = 0, emptyCols = 0, recreateRows = false, recreateCols = false, val;

      var $tbody = $(priv.tableBody);

      //count currently empty rows
      rows : for (r = self.countRows() - 1; r >= 0; r--) {
        for (c = 0, clen = self.colCount; c < clen; c++) {
          val = datamap.get(r, datamap.colToProp(c));
          if (val !== '' && val !== null && typeof val !== 'undefined') {
            break rows;
          }
        }
        emptyRows++;
      }

      //should I add empty rows to data source to meet startRows?
      rlen = self.countRows();
      if (rlen < priv.settings.startRows) {
        for (r = 0; r < priv.settings.startRows - rlen; r++) {
          datamap.createRow();
        }
      }

      //should I add empty rows to table view to meet startRows?
      if (self.rowCount < priv.settings.startRows) {
        for (; self.rowCount < priv.settings.startRows; emptyRows++) {
          self.view.createRow();
          recreateRows = true;
        }
      }

      //should I add empty rows to meet minSpareRows?
      if (emptyRows < priv.settings.minSpareRows) {
        for (; emptyRows < priv.settings.minSpareRows; emptyRows++) {
          datamap.createRow();
          self.view.createRow();
          recreateRows = true;
        }
      }

      //should I add empty rows to meet minHeight
      //WARNING! jQuery returns 0 as height() for container which is not :visible. this will lead to a infinite loop
      if (priv.settings.minHeight) {
        if ($tbody.height() > 0 && $tbody.height() <= priv.settings.minHeight) {
          while ($tbody.height() <= priv.settings.minHeight) {
            datamap.createRow();
            self.view.createRow();
            recreateRows = true;
          }
        }
      }

      //count currently empty cols
      if (self.countRows() - 1 > 0) {
        cols : for (c = self.colCount - 1; c >= 0; c--) {
          for (r = 0; r < self.countRows(); r++) {
            val = datamap.get(r, datamap.colToProp(c));
            if (val !== '' && val !== null && typeof val !== 'undefined') {
              break cols;
            }
          }
          emptyCols++;
        }
      }

      //should I add empty cols to meet startCols?
      if (self.colCount < priv.settings.startCols) {
        for (; self.colCount < priv.settings.startCols; emptyCols++) {
          if (!priv.settings.columns) {
            datamap.createCol();
          }
          self.view.createCol();
          recreateCols = true;
        }
      }

      //should I add empty cols to meet minSpareCols?
      if (priv.dataType === 'array' && emptyCols < priv.settings.minSpareCols) {
        for (; emptyCols < priv.settings.minSpareCols; emptyCols++) {
          if (!priv.settings.columns) {
            datamap.createCol();
          }
          self.view.createCol();
          recreateCols = true;
        }
      }

      //should I add empty rows to meet minWidth
      //WARNING! jQuery returns 0 as width() for container which is not :visible. this will lead to a infinite loop
      if (priv.settings.minWidth) {
        if ($tbody.width() > 0 && $tbody.width() <= priv.settings.minWidth) {
          while ($tbody.width() <= priv.settings.minWidth) {
            if (!priv.settings.columns) {
              datamap.createCol();
            }
            self.view.createCol();
            recreateCols = true;
          }
        }
      }

      if (!recreateRows && priv.settings.enterBeginsEditing) {
        for (; ((priv.settings.startRows && self.rowCount > priv.settings.startRows) && (priv.settings.minSpareRows && emptyRows > priv.settings.minSpareRows) && (!priv.settings.minHeight || $tbody.height() - $tbody.find('tr:last').height() - 4 > priv.settings.minHeight)); emptyRows--) {
          self.view.removeRow();
          datamap.removeRow();
          recreateRows = true;
        }
      }

      if (recreateRows && priv.selStart) {
        //if selection is outside, move selection to last row
        if (priv.selStart.row > self.rowCount - 1) {
          priv.selStart.row = self.rowCount - 1;
          if (priv.selEnd.row > priv.selStart.row) {
            priv.selEnd.row = priv.selStart.row;
          }
        } else if (priv.selEnd.row > self.rowCount - 1) {
          priv.selEnd.row = self.rowCount - 1;
          if (priv.selStart.row > priv.selEnd.row) {
            priv.selStart.row = priv.selEnd.row;
          }
        }
      }

      if (priv.settings.columns && priv.settings.columns.length) {
        clen = priv.settings.columns.length;
        if (self.colCount !== clen) {
          while (self.colCount > clen) {
            self.view.removeCol();
          }
          while (self.colCount < clen) {
            self.view.createCol();
          }
          recreateCols = true;
        }
      }
      else if (!recreateCols && priv.settings.enterBeginsEditing) {
        for (; ((priv.settings.startCols && self.colCount > priv.settings.startCols) && (priv.settings.minSpareCols && emptyCols > priv.settings.minSpareCols) && (!priv.settings.minWidth || $tbody.width() - $tbody.find('tr:last').find('td:last').width() - 4 > priv.settings.minWidth)); emptyCols--) {
          if (!priv.settings.columns) {
            datamap.removeCol();
          }
          self.view.removeCol();
          recreateCols = true;
        }
      }

      if (recreateCols && priv.selStart) {
        //if selection is outside, move selection to last row
        if (priv.selStart.col > self.colCount - 1) {
          priv.selStart.col = self.colCount - 1;
          if (priv.selEnd.col > priv.selStart.col) {
            priv.selEnd.col = priv.selStart.col;
          }
        } else if (priv.selEnd.col > self.colCount - 1) {
          priv.selEnd.col = self.colCount - 1;
          if (priv.selStart.col > priv.selEnd.col) {
            priv.selStart.col = priv.selEnd.col;
          }
        }
      }

      if (recreateRows || recreateCols) {
        selection.refreshBorders();
        self.blockedCols.refresh();
        self.blockedRows.refresh();
      }

      return (recreateRows || recreateCols);
    },

    /**
     * Is cell writable
     */
    isCellWritable: function ($td, cellProperties) {
      if (priv.isPopulated) {
        var data = $td.data('readOnly');
        if (typeof data === 'undefined') {
          return !cellProperties.readOnly;
        }
        else {
          return data;
        }
      }
      return true;
    },

    /**
     * Populate cells at position with 2d array
     * @param {Object} start Start selection position
     * @param {Array} input 2d array
     * @param {Object} [end] End selection position (only for drag-down mode)
     * @param {String} [source="populateFromArray"]
     * @return {Object|undefined} ending td in pasted area (only if any cell was changed)
     */
    populateFromArray: function (start, input, end, source) {
      var r, rlen, c, clen, td, setData = [], current = {};
      rlen = input.length;
      if (rlen === 0) {
        return false;
      }
      current.row = start.row;
      current.col = start.col;
      for (r = 0; r < rlen; r++) {
        if ((end && current.row > end.row) || (!priv.settings.minSpareRows && current.row > self.rowCount - 1)) {
          break;
        }
        current.col = start.col;
        clen = input[r] ? input[r].length : 0;
        for (c = 0; c < clen; c++) {
          if ((end && current.col > end.col) || (!priv.settings.minSpareCols && current.col > self.colCount - 1)) {
            break;
          }
          td = self.view.getCellAtCoords(current);
          if (self.getCellMeta(current.row, current.col).isWritable) {
            var p = datamap.colToProp(current.col);
            setData.push([current.row, p, input[r][c]]);
          }
          current.col++;
          if (end && c === clen - 1) {
            c = -1;
          }
        }
        current.row++;
        if (end && r === rlen - 1) {
          r = -1;
        }
      }
      self.setDataAtCell(setData, null, null, source || 'populateFromArray');
    },

    /**
     * Clears all cells in the grid
     */
    clear: function () {
      var tds = self.view.getAllCells();
      for (var i = 0, ilen = tds.length; i < ilen; i++) {
        $(tds[i]).empty();
        self.minWidthFix(tds[i]);
      }
    },

    /**
     * Returns the top left (TL) and bottom right (BR) selection coordinates
     * @param {Object[]} coordsArr
     * @returns {Object}
     */
    getCornerCoords: function (coordsArr) {
      function mapProp(func, array, prop) {
        function getProp(el) {
          return el[prop];
        }

        if (Array.prototype.map) {
          return func.apply(Math, array.map(getProp));
        }
        return func.apply(Math, $.map(array, getProp));
      }

      return {
        TL: {
          row: mapProp(Math.min, coordsArr, "row"),
          col: mapProp(Math.min, coordsArr, "col")
        },
        BR: {
          row: mapProp(Math.max, coordsArr, "row"),
          col: mapProp(Math.max, coordsArr, "col")
        }
      };
    },

    /**
     * Returns array of td objects given start and end coordinates
     */
    getCellsAtCoords: function (start, end) {
      var corners = grid.getCornerCoords([start, end]);
      var r, c, output = [];
      for (r = corners.TL.row; r <= corners.BR.row; r++) {
        for (c = corners.TL.col; c <= corners.BR.col; c++) {
          output.push(self.view.getCellAtCoords({
            row: r,
            col: c
          }));
        }
      }
      return output;
    }
  };

  this.selection = selection = { //this public assignment is only temporary
    /**
     * Starts selection range on given td object
     * @param td element
     */
    setRangeStart: function (td) {
      selection.deselect();
      priv.selStart = self.view.getCellCoords(td);
      selection.setRangeEnd(td);
    },

    /**
     * Ends selection range on given td object
     * @param {Element} td
     * @param {Boolean} [scrollToCell=true] If true, viewport will be scrolled to range end
     */
    setRangeEnd: function (td, scrollToCell) {
      var coords = self.view.getCellCoords(td);
      selection.end(coords);
      if (!priv.settings.multiSelect) {
        priv.selStart = coords;
      }
      self.rootElement.triggerHandler("selection.handsontable", [priv.selStart.row, priv.selStart.col, priv.selEnd.row, priv.selEnd.col]);
      self.rootElement.triggerHandler("selectionbyprop.handsontable", [priv.selStart.row, datamap.colToProp(priv.selStart.col), priv.selEnd.row, datamap.colToProp(priv.selEnd.col)]);
      selection.refreshBorders();
      if (scrollToCell !== false) {
        self.view.scrollViewport(td);
      }
    },

    /**
     * Redraws borders around cells
     * @param {Boolean} revertOriginal
     */
    refreshBorders: function (revertOriginal) {
      editproxy.destroy(revertOriginal);
      if (!selection.isSelected()) {
        return;
      }
      if (autofill.handle) {
        autofill.showHandle();
      }
      priv.currentBorder.appear([priv.selStart]);
      highlight.on();
      editproxy.prepare();
    },

    /**
     * Setter/getter for selection start
     */
    start: function (coords) {
      if (typeof coords !== 'undefined') {
        priv.selStart = coords;
      }
      return priv.selStart;
    },

    /**
     * Setter/getter for selection end
     */
    end: function (coords) {
      if (typeof coords !== 'undefined') {
        priv.selEnd = coords;
      }
      return priv.selEnd;
    },

    /**
     * Returns information if we have a multiselection
     * @return {Boolean}
     */
    isMultiple: function () {
      return !(priv.selEnd.col === priv.selStart.col && priv.selEnd.row === priv.selStart.row);
    },

    /**
     * Selects cell relative to current cell (if possible)
     */
    transformStart: function (rowDelta, colDelta, force) {
      if (priv.selStart.row + rowDelta > self.rowCount - 1) {
        if (force && priv.settings.minSpareRows > 0) {
          self.alter("insert_row", self.rowCount);
        }
        else if (priv.settings.autoWrapCol && priv.selStart.col + colDelta < self.colCount - 1) {
          rowDelta = 1 - self.rowCount;
          colDelta = 1;
        }
      }
      else if (priv.settings.autoWrapCol && priv.selStart.row + rowDelta < 0 && priv.selStart.col + colDelta >= 0) {
        rowDelta = self.rowCount - 1;
        colDelta = -1;
      }
      if (priv.selStart.col + colDelta > self.colCount - 1) {
        if (force && priv.settings.minSpareCols > 0) {
          self.alter("insert_col", self.colCount);
        }
        else if (priv.settings.autoWrapRow && priv.selStart.row + rowDelta < self.rowCount - 1) {
          rowDelta = 1;
          colDelta = 1 - self.colCount;
        }
      }
      else if (priv.settings.autoWrapRow && priv.selStart.col + colDelta < 0 && priv.selStart.row + rowDelta >= 0) {
        rowDelta = -1;
        colDelta = self.colCount - 1;
      }
      var td = self.view.getCellAtCoords({
        row: (priv.selStart.row + rowDelta),
        col: priv.selStart.col + colDelta
      });
      if (td) {
        selection.setRangeStart(td);
      }
      else {
        selection.setRangeStart(self.view.getCellAtCoords(priv.selStart)); //rerun some routines
      }
    },

    /**
     * Sets selection end cell relative to current selection end cell (if possible)
     */
    transformEnd: function (rowDelta, colDelta) {
      if (priv.selEnd) {
        var td = self.view.getCellAtCoords({
          row: (priv.selEnd.row + rowDelta),
          col: priv.selEnd.col + colDelta
        });
        if (td) {
          selection.setRangeEnd(td);
        }
      }
    },

    /**
     * Returns true if currently there is a selection on screen, false otherwise
     * @return {Boolean}
     */
    isSelected: function () {
      var selEnd = selection.end();
      if (!selEnd || typeof selEnd.row === "undefined") {
        return false;
      }
      return true;
    },

    /**
     * Returns true if coords is within current selection coords
     * @return {Boolean}
     */
    inInSelection: function (coords) {
      if (!selection.isSelected()) {
        return false;
      }
      var sel = grid.getCornerCoords([priv.selStart, priv.selEnd]);
      return (sel.TL.row <= coords.row && sel.BR.row >= coords.row && sel.TL.col <= coords.col && sel.BR.col >= coords.col);
    },

    /**
     * Deselects all selected cells
     */
    deselect: function () {
      if (!selection.isSelected()) {
        return;
      }
      highlight.off();
      priv.currentBorder.disappear();
      if (autofill.handle) {
        autofill.hideHandle();
      }
      selection.end(false);
      editproxy.destroy();
      self.rootElement.triggerHandler('deselect.handsontable');
    },

    /**
     * Select all cells
     */
    selectAll: function () {
      if (!priv.settings.multiSelect) {
        return;
      }
      var tds = self.view.getAllCells();
      if (tds.length) {
        selection.setRangeStart(tds[0]);
        selection.setRangeEnd(tds[tds.length - 1], false);
      }
    },

    /**
     * Deletes data from selected cells
     */
    empty: function () {
      if (!selection.isSelected()) {
        return;
      }
      var corners = grid.getCornerCoords([priv.selStart, selection.end()]);
      var r, c, changes = [];
      for (r = corners.TL.row; r <= corners.BR.row; r++) {
        for (c = corners.TL.col; c <= corners.BR.col; c++) {
          if (self.getCellMeta(r, c).isWritable) {
            changes.push([r, datamap.colToProp(c), '']);
          }
        }
      }
      self.setDataAtCell(changes);
    }
  };

  highlight = {
    /**
     * Create highlight border
     */
    init: function () {
      priv.selectionBorder = new Handsontable.Border(self, {
        className: 'selection',
        bg: true
      });
    },

    /**
     * Show border around selected cells
     */
    on: function () {
      if (!selection.isSelected()) {
        return false;
      }
      if (selection.isMultiple()) {
        priv.selectionBorder.appear([priv.selStart, selection.end()]);
      }
      else {
        priv.selectionBorder.disappear();
      }
    },

    /**
     * Hide border around selected cells
     */
    off: function () {
      if (!selection.isSelected()) {
        return false;
      }
      priv.selectionBorder.disappear();
    }
  };

  this.autofill = autofill = { //this public assignment is only temporary
    handle: null,
    fillBorder: null,

    /**
     * Create fill handle and fill border objects
     */
    init: function () {
      if (!autofill.handle) {
        autofill.handle = new Handsontable.FillHandle(self);
        autofill.fillBorder = new Handsontable.Border(self, {
          className: 'htFillBorder'
        });

        $(autofill.handle.handle).on('dblclick', autofill.selectAdjacent);
      }
      else {
        autofill.handle.disabled = false;
        autofill.fillBorder.disabled = false;
      }

      self.rootElement.on('beginediting.handsontable', function () {
        autofill.hideHandle();
      });

      self.rootElement.on('finishediting.handsontable', function () {
        if (selection.isSelected()) {
          autofill.showHandle();
        }
      });
    },

    /**
     * Hide fill handle and fill border permanently
     */
    disable: function () {
      autofill.handle.disabled = true;
      autofill.fillBorder.disabled = true;
    },

    /**
     * Selects cells down to the last row in the left column, then fills down to that cell
     */
    selectAdjacent: function () {
      var select, data, r, maxR, c;

      if (selection.isMultiple()) {
        select = priv.selectionBorder.corners;
      }
      else {
        select = priv.currentBorder.corners;
      }

      autofill.fillBorder.disappear();

      data = datamap.getAll();
      rows : for (r = select.BR.row + 1; r < self.rowCount; r++) {
        for (c = select.TL.col; c <= select.BR.col; c++) {
          if (data[r][c]) {
            break rows;
          }
        }
        if (!!data[r][select.TL.col - 1] || !!data[r][select.BR.col + 1]) {
          maxR = r;
        }
      }
      if (maxR) {
        autofill.showBorder(self.view.getCellAtCoords({row: maxR, col: select.BR.col}));
        autofill.apply();
      }
    },

    /**
     * Apply fill values to the area in fill border, omitting the selection border
     */
    apply: function () {
      var drag, select, start, end;

      autofill.handle.isDragged = 0;

      drag = autofill.fillBorder.corners;
      if (!drag) {
        return;
      }

      autofill.fillBorder.disappear();

      if (selection.isMultiple()) {
        select = priv.selectionBorder.corners;
      }
      else {
        select = priv.currentBorder.corners;
      }

      if (drag.TL.row === select.TL.row && drag.TL.col < select.TL.col) {
        start = drag.TL;
        end = {
          row: drag.BR.row,
          col: select.TL.col - 1
        };
      }
      else if (drag.TL.row === select.TL.row && drag.BR.col > select.BR.col) {
        start = {
          row: drag.TL.row,
          col: select.BR.col + 1
        };
        end = drag.BR;
      }
      else if (drag.TL.row < select.TL.row && drag.TL.col === select.TL.col) {
        start = drag.TL;
        end = {
          row: select.TL.row - 1,
          col: drag.BR.col
        };
      }
      else if (drag.BR.row > select.BR.row && drag.TL.col === select.TL.col) {
        start = {
          row: select.BR.row + 1,
          col: drag.TL.col
        };
        end = drag.BR;
      }

      if (start) {
        grid.populateFromArray(start, SheetClip.parse(priv.editProxy.val()), end, 'autofill');

        selection.setRangeStart(self.view.getCellAtCoords(drag.TL));
        selection.setRangeEnd(self.view.getCellAtCoords(drag.BR));
      }
      else {
        //reset to avoid some range bug
        selection.refreshBorders();
      }
    },

    /**
     * Show fill handle
     */
    showHandle: function () {
      autofill.handle.appear([priv.selStart, priv.selEnd]);
    },

    /**
     * Hide fill handle
     */
    hideHandle: function () {
      autofill.handle.disappear();
    },

    /**
     * Show fill border
     */
    showBorder: function (td) {
      var coords = self.view.getCellCoords(td);
      var corners = grid.getCornerCoords([priv.selStart, priv.selEnd]);
      if (priv.settings.fillHandle !== 'horizontal' && (corners.BR.row < coords.row || corners.TL.row > coords.row)) {
        coords = {row: coords.row, col: corners.BR.col};
      }
      else if (priv.settings.fillHandle !== 'vertical') {
        coords = {row: corners.BR.row, col: coords.col};
      }
      else {
        return; //wrong direction
      }
      autofill.fillBorder.appear([priv.selStart, priv.selEnd, coords]);
    }
  };

  this.editproxy = editproxy = { //this public assignment is only temporary
    /**
     * Create input field
     */
    init: function () {
      priv.editProxy = $('<textarea class="handsontableInput">');
      priv.editProxyHolder = $('<div class="handsontableInputHolder">');
      priv.editProxyHolder.append(priv.editProxy);

      function onClick(event) {
        event.stopPropagation();
      }

      function onCut() {
        setTimeout(function () {
          selection.empty();
        }, 100);
      }

      function onPaste() {
        setTimeout(function () {
          self.rootElement.one("datachange.handsontable", function (event, changes, source) {
            if (changes.length) {
              var last = changes[changes.length - 1];
              var endTd = self.view.getCellAtCoords({row: last[0], col: last[1]});
              selection.setRangeEnd(endTd);
            }
          });

          var input = priv.editProxy.val().replace(/^[\r\n]*/g, '').replace(/[\r\n]*$/g, ''), //remove newline from the start and the end of the input
            inputArray = SheetClip.parse(input),
            coords = grid.getCornerCoords([priv.selStart, priv.selEnd]);

          grid.populateFromArray(coords.TL, inputArray, {
            row: Math.max(coords.BR.row, inputArray.length - 1 + coords.TL.row),
            col: Math.max(coords.BR.col, inputArray[0].length - 1 + coords.TL.col)
          }, 'paste');
        }, 100);
      }

      var $body = $(document.body);

      function onKeyDown(event) {
        if ($body.children('.context-menu-list:visible').length) {
          return;
        }

        priv.lastKeyCode = event.keyCode;
        if (selection.isSelected()) {
          var ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey; //catch CTRL but not right ALT (which in some systems triggers ALT+CTRL)
          if (Handsontable.helper.isPrintableChar(event.keyCode) && ctrlDown) {
            if (event.keyCode === 65) { //CTRL + A
              selection.selectAll(); //select all cells
            }
            else if (event.keyCode === 88 && $.browser.opera) { //CTRL + X
              priv.editProxyHolder.triggerHandler('cut'); //simulate oncut for Opera
            }
            else if (event.keyCode === 86 && $.browser.opera) { //CTRL + V
              priv.editProxyHolder.triggerHandler('paste'); //simulate onpaste for Opera
            }
            else if (event.keyCode === 89 || (event.shiftKey && event.keyCode === 90)) { //CTRL + Y or CTRL + SHIFT + Z
              priv.undoRedo && priv.undoRedo.redo();
            }
            else if (event.keyCode === 90) { //CTRL + Z
              priv.undoRedo && priv.undoRedo.undo();
            }
            return;
          }

          var rangeModifier = event.shiftKey ? selection.setRangeEnd : selection.setRangeStart;

          switch (event.keyCode) {
            case 38: /* arrow up */
              if (event.shiftKey) {
                selection.transformEnd(-1, 0);
              }
              else {
                selection.transformStart(-1, 0);
              }
              event.preventDefault();
              break;

            case 9: /* tab */
              var tabMoves = typeof priv.settings.tabMoves === 'function' ? priv.settings.tabMoves(event) : priv.settings.tabMoves;
              if (event.shiftKey) {
                selection.transformStart(-tabMoves.row, -tabMoves.col);
              }
              else {
                selection.transformStart(tabMoves.row, tabMoves.col);
              }
              event.preventDefault();
              break;

            case 39: /* arrow right */
              if (event.shiftKey) {
                selection.transformEnd(0, 1);
              }
              else {
                selection.transformStart(0, 1);
              }
              event.preventDefault();
              break;

            case 37: /* arrow left */
              if (event.shiftKey) {
                selection.transformEnd(0, -1);
              }
              else {
                selection.transformStart(0, -1);
              }
              event.preventDefault();
              break;

            case 8: /* backspace */
            case 46: /* delete */
              selection.empty(event);
              event.preventDefault();
              break;

            case 40: /* arrow down */
              if (event.shiftKey) {
                selection.transformEnd(1, 0); //expanding selection down with shift
              }
              else {
                selection.transformStart(1, 0); //move selection down
              }
              event.preventDefault();
              break;

            case 113: /* F2 */
              event.preventDefault(); //prevent Opera from opening Go to Page dialog
              break;

            case 13: /* return/enter */
              var enterMoves = typeof priv.settings.enterMoves === 'function' ? priv.settings.enterMoves(event) : priv.settings.enterMoves;
              if (event.shiftKey) {
                selection.transformStart(-enterMoves.row, -enterMoves.col); //move selection up
              }
              else {
                selection.transformStart(enterMoves.row, enterMoves.col); //move selection down
              }
              event.preventDefault(); //don't add newline to field
              break;

            case 36: /* home */
              if (event.ctrlKey || event.metaKey) {
                rangeModifier(self.view.getCellAtCoords({row: 0, col: priv.selStart.col}));
              }
              else {
                rangeModifier(self.view.getCellAtCoords({row: priv.selStart.row, col: 0}));
              }
              break;

            case 35: /* end */
              if (event.ctrlKey || event.metaKey) {
                rangeModifier(self.view.getCellAtCoords({row: self.rowCount - 1, col: priv.selStart.col}));
              }
              else {
                rangeModifier(self.view.getCellAtCoords({row: priv.selStart.row, col: self.colCount - 1}));
              }
              break;

            case 33: /* pg up */
              rangeModifier(self.view.getCellAtCoords({row: 0, col: priv.selStart.col}));
              break;

            case 34: /* pg dn */
              rangeModifier(self.view.getCellAtCoords({row: self.rowCount - 1, col: priv.selStart.col}));
              break;

            default:
              break;
          }
        }
      }

      priv.editProxy.on('click', onClick);
      priv.editProxyHolder.on('cut', onCut);
      priv.editProxyHolder.on('paste', onPaste);
      priv.editProxyHolder.on('keydown', onKeyDown);
      self.container.append(priv.editProxyHolder);
    },

    /**
     * Destroy current editor, if exists
     * @param {Boolean} revertOriginal
     */
    destroy: function (revertOriginal) {
      if (typeof priv.editorDestroyer === "function") {
        priv.editorDestroyer(revertOriginal);
        priv.editorDestroyer = null;
      }
    },

    /**
     * Prepare text input to be displayed at given grid cell
     */
    prepare: function () {
      priv.editProxy.height(priv.editProxy.parent().innerHeight() - 4);
      priv.editProxy.val(datamap.getText(priv.selStart, priv.selEnd));
      setTimeout(editproxy.focus, 1);
      priv.editorDestroyer = self.view.applyCellTypeMethod('editor', self.view.getCellAtCoords(priv.selStart), priv.selStart, priv.editProxy);
    },

    /**
     * Sets focus to textarea
     */
    focus: function () {
      priv.editProxy[0].select();
    }
  };

  this.init = function () {
    this.view = new Handsontable.TableView(this);

    if (typeof settings.cols !== 'undefined') {
      settings.startCols = settings.cols; //backwards compatibility
    }

    self.colCount = settings.startCols;
    self.rowCount = 0;

    highlight.init();
    priv.currentBorder = new Handsontable.Border(self, {
      className: 'current',
      bg: true
    });
    editproxy.init();

    bindEvents();
    this.updateSettings(settings);

    Handsontable.PluginHooks.run(self, 'afterInit');
  };

  validate = function (changes, source) {
    var validated = $.Deferred();
    var deferreds = [];

    if (source === 'paste') {
      //validate strict autocompletes
      var process = function (i) {
        var deferred = $.Deferred();
        deferreds.push(deferred);

        var originalVal = changes[i][3];
        var lowercaseVal = typeof originalVal === 'string' ? originalVal.toLowerCase() : null;

        return function (source) {
          var found = false;
          for (var s = 0, slen = source.length; s < slen; s++) {
            if (originalVal === source[s]) {
              found = true; //perfect match
              break;
            }
            else if (lowercaseVal === source[s].toLowerCase()) {
              changes[i][3] = source[s]; //good match, fix the case
              found = true;
              break;
            }
          }
          if (!found) {
            changes[i] = null;
          }
          deferred.resolve();
        }
      };

      for (var i = changes.length - 1; i >= 0; i--) {
        var cellProperties = self.getCellMeta(changes[i][0], changes[i][1]);
        if (cellProperties.strict && cellProperties.source) {
          var items = $.isFunction(cellProperties.source) ? cellProperties.source(changes[i][3], process(i)) : cellProperties.source;
          if (items) {
            process(i)(items)
          }
        }
      }
    }

    $.when(deferreds).then(function () {
      for (var i = changes.length - 1; i >= 0; i--) {
        if (changes[i] === null) {
          changes.splice(i, 1);
        }
      }

      if (priv.settings.onBeforeChange && changes.length) {
        var result = priv.settings.onBeforeChange.apply(self.rootElement[0], [changes, source]);
        if (typeof result === 'function') {
          $.when(result).then(function () {
            validated.resolve();
          });
        }
        else {
          if (result === false) {
            changes.splice(0, changes.length); //invalidate all changes (remove everything from array)
          }
          validated.resolve();
        }
      }
      else {
        validated.resolve();
      }
    });

    return $.when(validated);
  };

  var bindEvents = function () {
    self.rootElement.on("datachange.handsontable", function (event, changes, source) {
      if (priv.settings.onChange) {
        priv.settings.onChange.apply(self.rootElement[0], [changes, source]);
      }
    });
    self.rootElement.on("selection.handsontable", function (event, row, col, endRow, endCol) {
      if (priv.settings.onSelection) {
        priv.settings.onSelection.apply(self.rootElement[0], [row, col, endRow, endCol]);
      }
    });
    self.rootElement.on("selectionbyprop.handsontable", function (event, row, prop, endRow, endProp) {
      if (priv.settings.onSelectionByProp) {
        priv.settings.onSelectionByProp.apply(self.rootElement[0], [row, prop, endRow, endProp]);
      }
    });
  };

  /**
   * Set data at given cell
   * @public
   * @param {Number|Array} row or array of changes in format [[row, col, value], ...]
   * @param {Number} prop
   * @param {String} value
   * @param {String} [source='edit'] String that identifies how this change will be described in changes array (useful in onChange callback)
   */
  this.setDataAtCell = function (row, prop, value, source) {
    var refreshRows = false, refreshCols = false, changes, i, ilen, changesByCol = [];

    if (typeof row === "object") { //is it an array of changes
      changes = row;
    }
    else if ($.isPlainObject(value)) { //backwards compatibility
      changes = value;
    }
    else {
      changes = [
        [row, prop, value]
      ];
    }

    for (i = 0, ilen = changes.length; i < ilen; i++) {
      changes[i].splice(2, 0, datamap.get(changes[i][0], changes[i][1])); //add old value at index 2
    }

    validate(changes, source).then(function () { //when validate is resolved...
      for (i = 0, ilen = changes.length; i < ilen; i++) {
        row = changes[i][0];
        prop = changes[i][1];
        var col = datamap.propToCol(prop);
        value = changes[i][3];
        changesByCol.push([changes[i][0], col, changes[i][2], changes[i][3], changes[i][4]]);

        if (priv.settings.minSpareRows) {
          while (row > self.rowCount - 1) {
            datamap.createRow();
            self.view.createRow();
            refreshRows = true;
          }
        }
        if (priv.dataType === 'array' && priv.settings.minSpareCols) {
          while (col > self.colCount - 1) {
            datamap.createCol();
            self.view.createCol();
            refreshCols = true;
          }
        }
        self.view.render(row, col, prop, value);
        datamap.set(row, prop, value);
      }
      if (refreshRows) {
        self.blockedCols.refresh();
      }
      if (refreshCols) {
        self.blockedRows.refresh();
      }
      var recreated = grid.keepEmptyRows();
      if (!recreated) {
        selection.refreshBorders();
      }
      self.rootElement.triggerHandler("datachange.handsontable", [changes, source || 'edit']);
      self.rootElement.triggerHandler("cellrender.handsontable", [changes, source || 'edit']);
    });
  };

  /**
   * Destroys current editor, renders and selects current cell. If revertOriginal != true, edited data is saved
   * @param {Boolean} revertOriginal
   */
  this.destroyEditor = function (revertOriginal) {
    selection.refreshBorders(revertOriginal);
  };

  /**
   * Populate cells at position with 2d array
   * @param {Object} start Start selection position
   * @param {Array} input 2d array
   * @param {Object} [end] End selection position (only for drag-down mode)
   * @param {String} [source="populateFromArray"]
   * @return {Object|undefined} ending td in pasted area (only if any cell was changed)
   */
  this.populateFromArray = function (start, input, end, source) {
    return grid.populateFromArray(start, input, end, source);
  };

  /**
   * Returns the top left (TL) and bottom right (BR) selection coordinates
   * @param {Object[]} coordsArr
   * @returns {Object}
   */
  this.getCornerCoords = function (coordsArr) {
    return grid.getCornerCoords(coordsArr);
  };

  /**
   * Returns current selection. Returns undefined if there is no selection.
   * @public
   * @return {Array} [topLeftRow, topLeftCol, bottomRightRow, bottomRightCol]
   */
  this.getSelected = function () { //https://github.com/warpech/jquery-handsontable/issues/44  //cjl
    if (selection.isSelected()) {
      var coords = grid.getCornerCoords([priv.selStart, priv.selEnd]);
      return [coords.TL.row, coords.TL.col, coords.BR.row, coords.BR.col];
    }
  };

  /**
   * Render visible data
   * @public
   * @param {Array} changes (Optional) If not given, all visible grid will be rerendered
   * @param {String} source (Optional)
   */
  this.render = function (changes, source) {
    if (typeof changes === "undefined") {
      changes = [];
      var r, c, p, val, clen = (priv.settings.columns && priv.settings.columns.length) || priv.settings.startCols;
      for (r = 0; r < priv.settings.startRows; r++) {
        for (c = 0; c < clen; c++) {
          p = datamap.colToProp(c);
          val = datamap.get(r, p);
          changes.push([r, p, val, val]);
        }
      }
    }
    for (var i = 0, ilen = changes.length; i < ilen; i++) {
      self.view.render(changes[i][0], datamap.propToCol(changes[i][1]), changes[i][1], changes[i][3]);
    }
    self.rootElement.triggerHandler('cellrender.handsontable', [changes, source || 'render']);
  };

  /**
   * Load data from array
   * @public
   * @param {Array} data
   */
  this.loadData = function (data) {
    priv.isPopulated = false;
    priv.settings.data = data;
    if ($.isPlainObject(priv.settings.dataSchema) || $.isPlainObject(data[0])) {
      priv.dataType = 'object';
    }
    else {
      priv.dataType = 'array';
    }
    if (data[0]) {
      priv.duckDataSchema = datamap.recursiveDuckSchema(data[0]);
    }
    else {
      priv.duckDataSchema = {};
    }
    datamap.createMap();
    var dlen = priv.settings.data.length;
    while (priv.settings.startRows > dlen) {
      datamap.createRow();
      dlen++;
    }
    while (self.rowCount < dlen) {
      self.view.createRow();
    }

    grid.keepEmptyRows();
    grid.clear();
    var changes = [];
    var clen = (priv.settings.columns && priv.settings.columns.length) || priv.settings.startCols;
    for (var r = 0; r < dlen; r++) {
      for (var c = 0; c < clen; c++) {
        var p = datamap.colToProp(c);
        changes.push([r, p, "", datamap.get(r, p)])
      }
    }
    self.rootElement.triggerHandler('datachange.handsontable', [changes, 'loadData']);
    self.render(changes, 'loadData');
    priv.isPopulated = true;
    self.clearUndo();
  };

  /**
   * Return the current data object (the same that was passed by `data` configuration option or `loadData` method). Optionally you can provide cell range `r`, `c`, `r2`, `c2` to get only a fragment of grid data
   * @public
   * @param {Number} r (Optional) From row
   * @param {Number} c (Optional) From col
   * @param {Number} r2 (Optional) To row
   * @param {Number} c2 (Optional) To col
   * @return {Array|Object}
   */
  this.getData = function (r, c, r2, c2) {
    if (typeof r === 'undefined') {
      return datamap.getAll();
    }
    else {
      return datamap.getRange({row: r, col: c}, {row: r2, col: c2});
    }
  };

  /**
   * Update settings
   * @public
   */
  this.updateSettings = function (settings) {
    var i, j, recreated;

    if (typeof settings.rows !== "undefined") {
      settings.startRows = settings.rows; //backwards compatibility
    }
    if (typeof settings.cols !== "undefined") {
      settings.startCols = settings.cols; //backwards compatibility
    }

    if (typeof settings.fillHandle !== "undefined") {
      if (autofill.handle && settings.fillHandle === false) {
        autofill.disable();
      }
      else if (!autofill.handle && settings.fillHandle !== false) {
        autofill.init();
      }
    }

    if (typeof settings.undo !== "undefined") {
      if (priv.undoRedo && settings.undo === false) {
        priv.undoRedo = null;
      }
      else if (!priv.undoRedo && settings.undo === true) {
        priv.undoRedo = new Handsontable.UndoRedo(self);
      }
    }

    if (!self.blockedCols) {
      self.blockedCols = new Handsontable.BlockedCols(self);
      self.blockedRows = new Handsontable.BlockedRows(self);
    }

    for (i in settings) {
      if (i === 'data') {
        continue; //loadData will be triggered later
      }
      else if (settings.hasOwnProperty(i)) {
        priv.settings[i] = settings[i];

        //launch extensions
        if (Handsontable.extension[i]) {
          priv.extensions[i] = new Handsontable.extension[i](self, settings[i]);
        }
      }
    }

    if (typeof settings.colHeaders !== "undefined") {
      if (settings.colHeaders === false && priv.extensions["ColHeader"]) {
        priv.extensions["ColHeader"].destroy();
      }
      else if (settings.colHeaders !== false) {
        priv.extensions["ColHeader"] = new Handsontable.ColHeader(self, settings.colHeaders);
      }
    }

    if (typeof settings.rowHeaders !== "undefined") {
      if (settings.rowHeaders === false && priv.extensions["RowHeader"]) {
        priv.extensions["RowHeader"].destroy();
      }
      else if (settings.rowHeaders !== false) {
        priv.extensions["RowHeader"] = new Handsontable.RowHeader(self, settings.rowHeaders);
      }
    }

    var blockedRowsCount = self.blockedRows.count();
    var blockedColsCount = self.blockedCols.count();
    if (blockedRowsCount && blockedColsCount && (typeof settings.rowHeaders !== "undefined" || typeof settings.colHeaders !== "undefined")) {
      if (self.blockedCorner) {
        self.blockedCorner.remove();
        self.blockedCorner = null;
      }

      var position = self.table.position();
      self.positionFix(position);

      var div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = position.top + 'px';
      div.style.left = position.left + 'px';

      var table = document.createElement('table');
      table.cellPadding = 0;
      table.cellSpacing = 0;
      div.appendChild(table);

      var thead = document.createElement('thead');
      table.appendChild(thead);

      var tr, th;
      for (i = 0; i < blockedRowsCount; i++) {
        tr = document.createElement('tr');
        for (j = blockedColsCount - 1; j >= 0; j--) {
          th = document.createElement('th');
          th.className = self.blockedCols.headers[j].className;
          th.innerHTML = self.blockedCols.headerText('&nbsp;');
          self.minWidthFix(th);
          tr.appendChild(th);
        }
        thead.appendChild(tr);
      }
      self.blockedCorner = $(div);
      self.blockedCorner.on('click', function () {
        selection.selectAll();
      });
      self.container.append(self.blockedCorner);
    }
    else {
      if (self.blockedCorner) {
        self.blockedCorner.remove();
        self.blockedCorner = null;
      }
    }

    if (typeof settings.data !== 'undefined') {
      self.loadData(settings.data);
      recreated = true;
    }
    else if (typeof settings.columns !== "undefined") {
      datamap.createMap();
    }

    if (!recreated) {
      recreated = grid.keepEmptyRows();
    }

    if (!recreated) {
      selection.refreshBorders();
    }

    self.blockedCols.update();
    self.blockedRows.update();
  };

  /**
   * Returns current settings object
   * @return {Object}
   */
  this.getSettings = function () {
    return priv.settings;
  };

  /**
   * Clears grid
   * @public
   */
  this.clear = function () {
    selection.selectAll();
    selection.empty();
  };

  /**
   * Return true if undo can be performed, false otherwise
   * @public
   */
  this.isUndoAvailable = function () {
    return priv.undoRedo && priv.undoRedo.isUndoAvailable();
  };

  /**
   * Return true if redo can be performed, false otherwise
   * @public
   */
  this.isRedoAvailable = function () {
    return priv.undoRedo && priv.undoRedo.isRedoAvailable();
  };

  /**
   * Undo last edit
   * @public
   */
  this.undo = function () {
    priv.undoRedo && priv.undoRedo.undo();
  };

  /**
   * Redo edit (used to reverse an undo)
   * @public
   */
  this.redo = function () {
    priv.undoRedo && priv.undoRedo.redo();
  };

  /**
   * Clears undo history
   * @public
   */
  this.clearUndo = function () {
    priv.undoRedo && priv.undoRedo.clear();
  };

  /**
   * Alters the grid
   * @param {String} action See grid.alter for possible values
   * @param {Number} from
   * @param {Number} [to] Optional. Used only for actions "remove_row" and "remove_col"
   * @public
   */
  this.alter = function (action, from, to) {
    if (typeof to === "undefined") {
      to = from;
    }
    switch (action) {
      case "insert_row":
      case "remove_row":
        grid.alter(action, {row: from, col: 0}, {row: to, col: 0});
        break;

      case "insert_col":
      case "remove_col":
        grid.alter(action, {row: 0, col: from}, {row: 0, col: to});
        break;

      default:
        throw Error('There is no such action "' + action + '"');
        break;
    }
  };

  /**
   * Returns <td> element corresponding to params row, col
   * @param {Number} row
   * @param {Number} col
   * @public
   * @return {Element}
   */
  this.getCell = function (row, col) {
    return self.view.getCellAtCoords({row: row, col: col});
  };

  /**
   * Returns property name associated with column number
   * @param {Number} col
   * @public
   * @return {String}
   */
  this.colToProp = function (col) {
    return datamap.colToProp(col);
  };

  /**
   * Returns column number associated with property name
   * @param {String} prop
   * @public
   * @return {Number}
   */
  this.propToCol = function (prop) {
    return datamap.propToCol(prop);
  };

  /**
   * Return cell value at `row`, `col`
   * @param {Number} row
   * @param {Number} col
   * @public
   * @return {string}
   */
  this.getDataAtCell = function (row, col) {
    return datamap.get(row, datamap.colToProp(col));
  };

  /**
   * Returns cell meta data object corresponding to params row, col
   * @param {Number} row
   * @param {Number} col
   * @public
   * @return {Object}
   */
  this.getCellMeta = function (row, col) {
    var cellProperites = {}
      , prop = datamap.colToProp(col);
    if (priv.settings.columns) {
      cellProperites = $.extend(true, cellProperites, priv.settings.columns[col] || {});
    }
    if (priv.settings.cells) {
      cellProperites = $.extend(true, cellProperites, priv.settings.cells(row, col, prop) || {});
    }
    cellProperites.isWritable = grid.isCellWritable($(self.view.getCellAtCoords({row: row, col: col})), cellProperites);
    Handsontable.PluginHooks.run(self, 'afterGetCellMeta', [row, col, cellProperites]);
    return cellProperites;
  };

  /**
   * Sets cell to be readonly
   * @param {Number} row
   * @param {Number} col
   * @public
   */
  this.setCellReadOnly = function (row, col) {
    $(self.view.getCellAtCoords({row: row, col: col})).data("readOnly", true);
  };

  /**
   * Sets cell to be editable (removes readonly)
   * @param {Number} row
   * @param {Number} col
   * @public
   */
  this.setCellEditable = function (row, col) {
    $(self.view.getCellAtCoords({row: row, col: col})).data("readOnly", false);
  };

  /**
   * Returns headers (if they are enabled)
   * @param {Object} obj Instance of rowHeader or colHeader
   * @param {Number} count Number of rows or cols
   * @param {Number} index (Optional) Will return only header at given index
   * @return {Array|String}
   */
  var getHeaderText = function (obj, count, index) {
    if (obj) {
      if (typeof index !== 'undefined') {
        return obj.columnLabel(index);
      }
      else {
        var headers = [];
        for (var i = 0; i < count; i++) {
          headers.push(obj.columnLabel(i));
        }
        return headers;
      }
    }
  };

  /**
   * Return array of row headers (if they are enabled). If param `row` given, return header at given row as string
   * @param {Number} row (Optional)
   * @return {Array|String}
   */
  this.getRowHeader = function (row) {
    return getHeaderText(self.rowHeader, self.rowCount, row);
  };

  /**
   * Return array of col headers (if they are enabled). If param `col` given, return header at given col as string
   * @param {Number} col (Optional)
   * @return {Array|String}
   */
  this.getColHeader = function (col) {
    return getHeaderText(self.colHeader, self.colCount, col);
  };

  /**
   * Return total number of rows in grid
   * @return {Number}
   */
  this.countRows = function () {
    return priv.settings.data.length;
  };

  /**
   * Return total number of columns in grid
   * @return {Number}
   */
  this.countCols = function () {
    return self.colCount;
  };

  /**
   * Selects cell on grid. Optionally selects range to another cell
   * @param {Number} row
   * @param {Number} col
   * @param {Number} [endRow]
   * @param {Number} [endCol]
   * @param {Boolean} [scrollToCell=true] If true, viewport will be scrolled to the selection
   * @public
   */
  this.selectCell = function (row, col, endRow, endCol, scrollToCell) {
    if (typeof row !== 'number' || row < 0 || row >= self.rowCount) {
      return false;
    }
    if (typeof col !== 'number' || col < 0 || col >= self.colCount) {
      return false;
    }
    if (typeof endRow !== "undefined") {
      if (typeof endRow !== 'number' || endRow < 0 || endRow >= self.rowCount) {
        return false;
      }
      if (typeof endCol !== 'number' || endCol < 0 || endCol >= self.colCount) {
        return false;
      }
    }
    selection.start({row: row, col: col});
    if (typeof endRow === "undefined") {
      selection.setRangeEnd(self.getCell(row, col), scrollToCell);
    }
    else {
      selection.setRangeEnd(self.getCell(endRow, endCol), scrollToCell);
    }
  };

  this.selectCellByProp = function (row, prop, endRow, endProp, scrollToCell) {
    arguments[1] = datamap.propToCol(arguments[1]);
    if (typeof arguments[3] !== "undefined") {
      arguments[3] = datamap.propToCol(arguments[3]);
    }
    return self.selectCell.apply(self, arguments);
  };

  /**
   * Deselects current sell selection on grid
   * @public
   */
  this.deselectCell = function () {
    selection.deselect();
  };

  /**
   * Remove grid from DOM
   * @public
   */
  this.destroy = function () {
    self.rootElement.empty();
    self.rootElement.removeData('handsontable');
  };

  /**
   * Handsontable version
   */
  this.version = '0.7.3-dev'; //inserted by grunt from package.json
};

var settings = {
  'data': [],
  'startRows': 5,
  'startCols': 5,
  'minSpareRows': 0,
  'minSpareCols': 0,
  'minHeight': 0,
  'minWidth': 0,
  'multiSelect': true,
  'fillHandle': true,
  'undo': true,
  'outsideClickDeselects': true,
  'enterBeginsEditing': true,
  'enterMoves': {row: 1, col: 0},
  'tabMoves': {row: 0, col: 1},
  'autoWrapRow': false,
  'autoWrapCol': false
};

$.fn.handsontable = function (action, options) {
  var i, ilen, args, output = [];
  if (typeof action !== 'string') { //init
    options = action;
    return this.each(function () {
      var $this = $(this);
      if ($this.data("handsontable")) {
        instance = $this.data("handsontable");
        instance.updateSettings(options);
      }
      else {
        var currentSettings = $.extend(true, {}, settings), instance;
        for (i in options) {
          if (options.hasOwnProperty(i)) {
            currentSettings[i] = options[i];
          }
        }
        instance = new Handsontable.Core($this, currentSettings);
        $this.data("handsontable", instance);
        instance.init();
      }
    });
  }
  else {
    args = [];
    if (arguments.length > 1) {
      for (i = 1, ilen = arguments.length; i < ilen; i++) {
        args.push(arguments[i]);
      }
    }
    this.each(function () {
      output = $(this).data("handsontable")[action].apply(this, args);
    });
    return output;
  }
};
/**
 * Handsontable TableView constructor
 * @param {Object} instance
 */
Handsontable.TableView = function (instance) {
  var that = this;
  this.instance = instance;
  var priv = {};

  var interaction = {
    onMouseDown: function (event) {
      priv.isMouseDown = true;
      if (event.button === 2 && that.instance.selection.inInSelection(that.getCellCoords(this))) { //right mouse button
        //do nothing
      }
      else if (event.shiftKey) {
        that.instance.selection.setRangeEnd(this);
      }
      else {
        that.instance.selection.setRangeStart(this);
      }
    },

    onMouseOver: function () {
      if (priv.isMouseDown) {
        that.instance.selection.setRangeEnd(this);
      }
      else if (that.instance.autofill.handle && that.instance.autofill.handle.isDragged) {
        that.instance.autofill.handle.isDragged++;
        that.instance.autofill.showBorder(this);
      }
    },

    onMouseWheel: function (event, delta, deltaX, deltaY) {
      if (priv.virtualScroll) {
        if (deltaY) {
          priv.virtualScroll.scrollTop(priv.virtualScroll.scrollTop() + 44 * -deltaY);
        }
        else if (deltaX) {
          priv.virtualScroll.scrollLeft(priv.virtualScroll.scrollLeft() + 100 * deltaX);
        }
        event.preventDefault();
      }
    }
  };


  that.instance.container = $('<div class="handsontable"></div>');
  var overflow = that.instance.rootElement.css('overflow');
  if (overflow === 'auto' || overflow === 'scroll') {
    that.instance.container[0].style.overflow = overflow;
    var w = that.instance.rootElement.css('width');
    if (w) {
      that.instance.container[0].style.width = w;
    }
    var h = that.instance.rootElement.css('height');
    if (h) {
      that.instance.container[0].style.height = h;
    }
    that.instance.rootElement[0].style.overflow = 'hidden';
    that.instance.rootElement[0].style.position = 'relative';
  }
  that.instance.rootElement.append(that.instance.container);

//this.init

  function onMouseEnterTable() {
    priv.isMouseOverTable = true;
  }

  function onMouseLeaveTable() {
    priv.isMouseOverTable = false;
  }

  that.instance.curScrollTop = that.instance.curScrollLeft = 0;
  that.instance.lastScrollTop = that.instance.lastScrollLeft = null;
  this.scrollbarSize = this.measureScrollbar();

  var div = $('<div><table class="htCore" cellspacing="0" cellpadding="0"><thead></thead><tbody></tbody></table></div>');
  priv.tableContainer = div[0];
  that.instance.table = $(priv.tableContainer.firstChild);
  this.$tableBody = that.instance.table.find("tbody")[0];
  that.instance.table.on('mousedown', 'td', interaction.onMouseDown);
  that.instance.table.on('mouseover', 'td', interaction.onMouseOver);
  that.instance.table.on('mousewheel', 'td', interaction.onMouseWheel);
  that.instance.container.append(div);

  //...


  that.instance.container.on('mouseenter', onMouseEnterTable).on('mouseleave', onMouseLeaveTable);


  function onMouseUp() {
    if (priv.isMouseDown) {
      setTimeout(that.instance.editproxy.focus, 1);
    }
    priv.isMouseDown = false;
    if (that.instance.autofill.handle && that.instance.autofill.handle.isDragged) {
      if (that.instance.autofill.handle.isDragged > 1) {
        that.instance.autofill.apply();
      }
      that.instance.autofill.handle.isDragged = 0;
    }
  }

  function onOutsideClick(event) {
    if (that.instance.getSettings().outsideClickDeselects) {
      setTimeout(function () {//do async so all mouseenter, mouseleave events will fire before
        if (!priv.isMouseOverTable && event.target !== priv.tableContainer && $(event.target).attr('id') !== 'context-menu-layer') { //if clicked outside the table or directly at container which also means outside
          that.instance.selection.deselect();
        }
      }, 1);
    }
  }

  $("html").on('mouseup', onMouseUp).
    on('click', onOutsideClick);

  if (that.instance.container[0].tagName.toLowerCase() !== "html" && that.instance.container[0].tagName.toLowerCase() !== "body" && (that.instance.container.css('overflow') === 'scroll' || that.instance.container.css('overflow') === 'auto')) {
    that.scrollable = that.instance.container;
  }

  if (that.scrollable) {
    //create fake scrolling div
    priv.virtualScroll = $('<div class="virtualScroll"><div class="spacer"></div></div>');
    that.scrollable = priv.virtualScroll;
    that.instance.container.before(priv.virtualScroll);
    that.instance.table[0].style.position = 'absolute';
    priv.virtualScroll.css({
      width: that.instance.container.width() + 'px',
      height: that.instance.container.height() + 'px',
      overflow: that.instance.container.css('overflow')
    });
    that.instance.container.css({
      overflow: 'hidden',
      position: 'absolute',
      top: '0px',
      left: '0px'
    });
    that.instance.container.width(priv.virtualScroll.innerWidth() - this.scrollbarSize.width);
    that.instance.container.height(priv.virtualScroll.innerHeight() - this.scrollbarSize.height);
    setInterval(function () {
      priv.virtualScroll.find('.spacer').height(that.instance.table.height());
      priv.virtualScroll.find('.spacer').width(that.instance.table.width());
    }, 100);

    that.scrollable.scrollTop(0);
    that.scrollable.scrollLeft(0);

    that.scrollable.on('scroll.handsontable', function () {
      that.instance.curScrollTop = that.scrollable[0].scrollTop;
      that.instance.curScrollLeft = that.scrollable[0].scrollLeft;

      if (that.instance.curScrollTop !== that.instance.lastScrollTop) {
        that.instance.blockedRows.refreshBorders();
        that.instance.blockedCols.main[0].style.top = -that.instance.curScrollTop + 'px';
        that.instance.table[0].style.top = -that.instance.curScrollTop + 'px';
      }

      if (that.instance.curScrollLeft !== that.instance.lastScrollLeft) {
        that.instance.blockedCols.refreshBorders();
        that.instance.blockedRows.main[0].style.left = -that.instance.curScrollLeft + 'px';
        that.instance.table[0].style.left = -that.instance.curScrollLeft + 'px';
      }

      if (that.instance.curScrollTop !== that.instance.lastScrollTop || that.instance.curScrollLeft !== that.instance.lastScrollLeft) {
        that.instance.selection.refreshBorders();

        if (that.instance.blockedCorner) {
          if (that.instance.curScrollTop === 0 && that.instance.curScrollLeft === 0) {
            that.instance.blockedCorner.find("th:last-child").css({borderRightWidth: 0});
            that.instance.blockedCorner.find("tr:last-child th").css({borderBottomWidth: 0});
          }
          else if (that.instance.lastScrollTop === 0 && that.instance.lastScrollLeft === 0) {
            that.instance.blockedCorner.find("th:last-child").css({borderRightWidth: '1px'});
            that.instance.blockedCorner.find("tr:last-child th").css({borderBottomWidth: '1px'});
          }
        }
      }

      that.instance.lastScrollTop = that.instance.curScrollTop;
      that.instance.lastScrollLeft = that.instance.curScrollLeft;

      that.instance.selection.refreshBorders();
    });

    Handsontable.PluginHooks.push('afterInit', function () {
      that.scrollable.trigger('scroll.handsontable');
    });
  }
  else {
    that.scrollable = $(window);
    if (that.instance.blockedCorner) {
      that.instance.blockedCorner.find("th:last-child").css({borderRightWidth: 0});
      that.instance.blockedCorner.find("tr:last-child th").css({borderBottomWidth: 0});
    }
  }

  that.scrollable.on('scroll', function (e) {
    e.stopPropagation();
  });

  $(window).on('resize', function () {
    //https://github.com/warpech/jquery-handsontable/issues/193
    that.instance.blockedCols.update();
    that.instance.blockedRows.update();
  });

  $('.context-menu-root').on('mouseenter', onMouseEnterTable).on('mouseleave', onMouseLeaveTable);

};

/**
 * Measure the width and height of browser scrollbar
 * @return {Object}
 */
Handsontable.TableView.prototype.measureScrollbar = function () {
  var div = $('<div style="width:150px;height:150px;overflow:hidden;position:absolute;top:200px;left:200px"><div style="width:100%;height:100%;position:absolute">x</div>');
  $('body').append(div);
  var subDiv = $(div[0].firstChild);
  var w1 = subDiv.innerWidth();
  var h1 = subDiv.innerHeight();
  div[0].style.overflow = 'scroll';
  w1 -= subDiv.innerWidth();
  h1 -= subDiv.innerHeight();
  if (w1 === 0) {
    w1 = 17;
  }
  if (h1 === 0) {
    h1 = 17;
  }
  div.remove();
  return {width: w1, height: h1};
};

/**
 * Creates row at the bottom of the <table>
 * @param {Object} [coords] Optional. Coords of the cell before which the new row will be inserted
 */
Handsontable.TableView.prototype.createRow = function (coords) {
  var tr, c, r, td, p;
  tr = document.createElement('tr');
  this.instance.blockedCols.createRow(tr);
  for (c = 0; c < this.instance.colCount; c++) {
    tr.appendChild(td = document.createElement('td'));
    this.instance.minWidthFix(td);
  }
  if (!coords || coords.row >= this.instance.rowCount) {
    this.$tableBody.appendChild(tr);
    r = this.instance.rowCount;
  }
  else {
    var oldTr = this.instance.getCell(coords.row, coords.col).parentNode;
    this.$tableBody.insertBefore(tr, oldTr);
    r = coords.row;
  }
  this.instance.rowCount++;
  for (c = 0; c < this.instance.colCount; c++) {
    p = this.instance.colToProp(c);
    this.render(r, c, p, this.instance.getData()[r][p]);
  }
};

/**
 * Creates col at the right of the <table>
 * @param {Object} [coords] Optional. Coords of the cell before which the new column will be inserted
 */
Handsontable.TableView.prototype.createCol = function (coords) {
  var trs = this.$tableBody.childNodes, r, c, td, p;
  this.instance.blockedRows.createCol();
  if (!coords || coords.col >= this.instance.colCount) {
    for (r = 0; r < this.instance.rowCount; r++) {
      trs[r].appendChild(td = document.createElement('td'));
      this.instance.minWidthFix(td);
    }
    c = this.instance.colCount;
  }
  else {
    for (r = 0; r < this.instance.rowCount; r++) {
      trs[r].insertBefore(td = document.createElement('td'), this.instance.getCell(r, coords.col));
      this.instance.minWidthFix(td);
    }
    c = coords.col;
  }
  this.instance.colCount++;
  for (r = 0; r < this.instance.rowCount; r++) {
    p = this.instance.colToProp(c);
    this.render(r, c, p, this.instance.getData()[r][p]);
  }
};

/**
 * Removes row at the bottom of the <table>
 * @param {Object} [coords] Optional. Coords of the cell which row will be removed
 * @param {Object} [toCoords] Required if coords is defined. Coords of the cell until which all rows will be removed
 */
Handsontable.TableView.prototype.removeRow = function (coords, toCoords) {
  if (!coords || coords.row === this.instance.rowCount - 1) {
    $(this.$tableBody.childNodes[this.instance.rowCount - 1]).remove();
    this.instance.rowCount--;
  }
  else {
    for (var i = toCoords.row; i >= coords.row; i--) {
      $(this.$tableBody.childNodes[i]).remove();
      this.instance.rowCount--;
    }
  }
};

/**
 * Removes col at the right of the <table>
 * @param {Object} [coords] Optional. Coords of the cell which col will be removed
 * @param {Object} [toCoords] Required if coords is defined. Coords of the cell until which all cols will be removed
 */
Handsontable.TableView.prototype.removeCol = function (coords, toCoords) {
  var trs = this.$tableBody.childNodes, colThs, i;
  if (this.instance.blockedRows) {
    colThs = this.instance.table.find('thead th');
  }
  var r = 0;
  if (!coords || coords.col === this.instance.colCount - 1) {
    for (; r < this.instance.rowCount; r++) {
      $(trs[r].childNodes[this.instance.colCount + this.instance.blockedCols.count() - 1]).remove();
      if (colThs) {
        colThs.eq(this.instance.colCount + this.instance.blockedCols.count() - 1).remove();
      }
    }
    this.instance.colCount--;
  }
  else {
    for (; r < this.instance.rowCount; r++) {
      for (i = toCoords.col; i >= coords.col; i--) {
        $(trs[r].childNodes[i + this.instance.blockedCols.count()]).remove();

      }
    }
    if (colThs) {
      for (i = toCoords.col; i >= coords.col; i--) {
        colThs.eq(i + this.instance.blockedCols.count()).remove();
      }
    }
    this.instance.colCount -= toCoords.col - coords.col + 1;
  }
};


Handsontable.TableView.prototype.render = function (row, col, prop, value) {
  var coords = {row: row, col: col};
  var td = this.instance.getCell(row, col);
  this.applyCellTypeMethod('renderer', td, coords, value);
  this.instance.minWidthFix(td);
  return td;
};


Handsontable.TableView.prototype.applyCellTypeMethod = function (methodName, td, coords, extraParam) {
  var prop = this.instance.colToProp(coords.col)
    , method
    , cellProperties = this.instance.getCellMeta(coords.row, coords.col);

  if (cellProperties.type && typeof cellProperties.type[methodName] === "function") {
    method = cellProperties.type[methodName];
  }
  if (typeof method !== "function") {
    method = Handsontable.TextCell[methodName];
  }
  return method(this.instance, td, coords.row, coords.col, prop, extraParam, cellProperties);
};

/**
 * Returns coordinates given td object
 */
Handsontable.TableView.prototype.getCellCoords = function (td) {
  return {
    row: td.parentNode.rowIndex - this.instance.blockedRows.count(),
    col: td.cellIndex - this.instance.blockedCols.count()
  };
};

/**
 * Returns td object given coordinates
 */
Handsontable.TableView.prototype.getCellAtCoords = function (coords) {
  if (coords.row < 0 || coords.col < 0) {
    return null;
  }
  var tr = this.$tableBody.childNodes[coords.row];
  if (tr) {
    return tr.childNodes[coords.col + this.instance.blockedCols.count()];
  }
  else {
    return null;
  }
};

/**
 * Returns all td objects in grid
 */
Handsontable.TableView.prototype.getAllCells = function () {
  var tds = [], trs, r, rlen, c, clen;
  trs = this.$tableBody.childNodes;
  rlen = this.instance.rowCount;
  if (rlen > 0) {
    clen = this.instance.colCount;
    for (r = 0; r < rlen; r++) {
      for (c = 0; c < clen; c++) {
        tds.push(trs[r].childNodes[c + this.instance.blockedCols.count()]);
      }
    }
  }
  return tds;
};

/**
 * Scroll viewport to selection
 * @param td
 */
Handsontable.TableView.prototype.scrollViewport = function (td) {
  if (!this.instance.selection.isSelected()) {
    return false;
  }

  var $td = $(td);
  var tdOffset = $td.offset();
  var scrollLeft = this.scrollable.scrollLeft(); //scrollbar position
  var scrollTop = this.scrollable.scrollTop(); //scrollbar position
  var scrollOffset = this.scrollable.offset();
  var rowHeaderWidth = this.instance.blockedCols.count() ? $(this.instance.blockedCols.main[0].firstChild).outerWidth() : 2;
  var colHeaderHeight = this.instance.blockedRows.count() ? $(this.instance.blockedRows.main[0].firstChild).outerHeight() : 2;

  var offsetTop = tdOffset.top;
  var offsetLeft = tdOffset.left;
  var scrollWidth, scrollHeight;
  if (scrollOffset) { //if is not the window
    scrollWidth = this.scrollable.outerWidth();
    scrollHeight = this.scrollable.outerHeight();
    offsetTop += scrollTop - scrollOffset.top;
    offsetLeft += scrollLeft - scrollOffset.left;
  }
  else {
    scrollWidth = this.scrollable.width(); //don't use outerWidth with window (http://api.jquery.com/outerWidth/)
    scrollHeight = this.scrollable.height();
  }
  scrollWidth -= this.scrollbarSize.width;
  scrollHeight -= this.scrollbarSize.height;

  var height = $td.outerHeight();
  var width = $td.outerWidth();

  var that = this;
  if (scrollLeft + scrollWidth <= offsetLeft + width) {
    setTimeout(function () {
      that.scrollable.scrollLeft(offsetLeft + width - scrollWidth);
    }, 1);
  }
  else if (scrollLeft > offsetLeft - rowHeaderWidth) {
    setTimeout(function () {
      that.scrollable.scrollLeft(offsetLeft - rowHeaderWidth);
    }, 1);
  }

  if (scrollTop + scrollHeight <= offsetTop + height) {
    setTimeout(function () {
      that.scrollable.scrollTop(offsetTop + height - scrollHeight);
    }, 1);
  }
  else if (scrollTop > offsetTop - colHeaderHeight) {
    setTimeout(function () {
      that.scrollable.scrollTop(offsetTop - colHeaderHeight);
    }, 1);
  }
};
/**
 * Returns true if keyCode represents a printable character
 * @param {Number} keyCode
 * @return {Boolean}
 */
Handsontable.helper.isPrintableChar = function (keyCode) {
  return ((keyCode == 32) || //space
    (keyCode >= 48 && keyCode <= 57) || //0-9
    (keyCode >= 96 && keyCode <= 111) || //numpad
    (keyCode >= 186 && keyCode <= 192) || //;=,-./`
    (keyCode >= 219 && keyCode <= 222) || //[]{}\|"'
    keyCode >= 226 || //special chars (229 for Asian chars)
    (keyCode >= 65 && keyCode <= 90)); //a-z
};

/**
 * Converts a value to string
 * @param value
 * @return {String}
 */
Handsontable.helper.stringify = function (value) {
  switch (typeof value) {
    case 'string':
    case 'number':
      return value + '';
      break;

    case 'object':
      if (value === null) {
        return '';
      }
      else {
        return value.toString();
      }
      break;

    case 'undefined':
      return '';
      break;

    default:
      return value.toString();
  }
};

/**
 * Create DOM elements for selection border lines (top, right, bottom, left) and optionally background
 * @constructor
 * @param {Object} instance Handsontable instance
 * @param {Object} options Configurable options
 * @param {Boolean} [options.bg] Should include a background
 * @param {String} [options.className] CSS class for border elements
 */
Handsontable.Border = function (instance, options) {
  this.instance = instance;
  this.$container = instance.container;
  var container = this.$container[0];

  if (options.bg) {
    this.bg = document.createElement("div");
    this.bg.className = 'htBorderBg ' + options.className;
    container.insertBefore(this.bg, container.firstChild);
  }

  this.main = document.createElement("div");
  this.main.style.position = 'absolute';
  this.main.style.top = 0;
  this.main.style.left = 0;
  this.main.innerHTML = (new Array(5)).join('<div class="htBorder ' + options.className + '"></div>');
  this.disappear();
  container.appendChild(this.main);

  var nodes = this.main.childNodes;
  this.top = nodes[0];
  this.left = nodes[1];
  this.bottom = nodes[2];
  this.right = nodes[3];

  this.borderWidth = $(this.left).width();
};

Handsontable.Border.prototype = {
  /**
   * Show border around one or many cells
   * @param {Object[]} coordsArr
   */
  appear: function (coordsArr) {
    var $from, $to, fromOffset, toOffset, containerOffset, top, minTop, left, minLeft, height, width;
    if (this.disabled) {
      return;
    }

    this.corners = this.instance.getCornerCoords(coordsArr);

    $from = $(this.instance.getCell(this.corners.TL.row, this.corners.TL.col));
    $to = (coordsArr.length > 1) ? $(this.instance.getCell(this.corners.BR.row, this.corners.BR.col)) : $from;
    fromOffset = $from.offset();
    toOffset = (coordsArr.length > 1) ? $to.offset() : fromOffset;
    containerOffset = this.$container.offset();

    minTop = fromOffset.top;
    height = toOffset.top + $to.outerHeight() - minTop;
    minLeft = fromOffset.left;
    width = toOffset.left + $to.outerWidth() - minLeft;

    top = minTop - containerOffset.top + this.$container.scrollTop() - 1;
    left = minLeft - containerOffset.left + this.$container.scrollLeft() - 1;

    if (parseInt($from.css('border-top-width')) > 0) {
      top += 1;
      height -= 1;
    }
    if (parseInt($from.css('border-left-width')) > 0) {
      left += 1;
      width -= 1;
    }

    if (this.bg) {
      this.bg.style.top = top + 'px';
      this.bg.style.left = left + 'px';
      this.bg.style.width = width + 'px';
      this.bg.style.height = height + 'px';
      this.bg.style.display = 'block';
    }

    this.top.style.top = top + 'px';
    this.top.style.left = left + 'px';
    this.top.style.width = width + 'px';

    this.left.style.top = top + 'px';
    this.left.style.left = left + 'px';
    this.left.style.height = height + 'px';

    var delta = Math.floor(this.borderWidth / 2);

    this.bottom.style.top = top + height - delta + 'px';
    this.bottom.style.left = left + 'px';
    this.bottom.style.width = width + 'px';

    this.right.style.top = top + 'px';
    this.right.style.left = left + width - delta + 'px';
    this.right.style.height = height + 1 + 'px';

    this.main.style.display = 'block';
  },

  /**
   * Hide border
   */
  disappear: function () {
    this.main.style.display = 'none';
    if (this.bg) {
      this.bg.style.display = 'none';
    }
    this.corners = null;
  }
};
/**
 * Create DOM element for drag-down handle
 * @constructor
 * @param {Object} instance Handsontable instance
 */
Handsontable.FillHandle = function (instance) {
  this.instance = instance;
  this.$container = instance.container;
  var container = this.$container[0];

  this.handle = document.createElement("div");
  this.handle.className = "htFillHandle";
  this.disappear();
  container.appendChild(this.handle);

  var that = this;
  $(this.handle).mousedown(function () {
    that.isDragged = 1;
  });

  this.$container.find('table').on('selectstart', function (event) {
    //https://github.com/warpech/jquery-handsontable/issues/160
    //selectstart is IE only event. Prevent text from being selected when performing drag down in IE8
    event.preventDefault();
  });
};

Handsontable.FillHandle.prototype = {
  /**
   * Show handle in cell cornerl
   * @param {Object[]} coordsArr
   */
  appear: function (coordsArr) {
    if (this.disabled) {
      return;
    }

    var $td, tdOffset, containerOffset, top, left, height, width;

    var corners = this.instance.getCornerCoords(coordsArr);

    $td = $(this.instance.getCell(corners.BR.row, corners.BR.col));
    tdOffset = $td.offset();
    containerOffset = this.$container.offset();

    top = tdOffset.top - containerOffset.top + this.$container.scrollTop() - 1;
    left = tdOffset.left - containerOffset.left + this.$container.scrollLeft() - 1;
    height = $td.outerHeight();
    width = $td.outerWidth();

    this.handle.style.top = top + height - 3 + 'px';
    this.handle.style.left = left + width - 3 + 'px';
    this.handle.style.display = 'block';
  },

  /**
   * Hide handle
   */
  disappear: function () {
    this.handle.style.display = 'none';
  }
};
/**
 * Handsontable UndoRedo class
 */
Handsontable.UndoRedo = function (instance) {
  var that = this;
  this.instance = instance;
  this.clear();
  instance.rootElement.on("datachange.handsontable", function (event, changes, origin) {
    if (origin !== 'undo' && origin !== 'redo') {
      that.add(changes);
    }
  });
};

/**
 * Undo operation from current revision
 */
Handsontable.UndoRedo.prototype.undo = function () {
  var i, ilen;
  if (this.isUndoAvailable()) {
    var setData = $.extend(true, [], this.data[this.rev]);
    for (i = 0, ilen = setData.length; i < ilen; i++) {
      setData[i].splice(3, 1);
    }
    this.instance.setDataAtCell(setData, null, null, 'undo');
    this.rev--;
  }
};

/**
 * Redo operation from current revision
 */
Handsontable.UndoRedo.prototype.redo = function () {
  var i, ilen;
  if (this.isRedoAvailable()) {
    this.rev++;
    var setData = $.extend(true, [], this.data[this.rev]);
    for (i = 0, ilen = setData.length; i < ilen; i++) {
      setData[i].splice(2, 1);
    }
    this.instance.setDataAtCell(setData, null, null, 'redo');
  }
};

/**
 * Returns true if undo point is available
 * @return {Boolean}
 */
Handsontable.UndoRedo.prototype.isUndoAvailable = function () {
  return (this.rev >= 0);
};

/**
 * Returns true if redo point is available
 * @return {Boolean}
 */
Handsontable.UndoRedo.prototype.isRedoAvailable = function () {
  return (this.rev < this.data.length - 1);
};

/**
 * Add new history poins
 * @param changes
 */
Handsontable.UndoRedo.prototype.add = function (changes) {
  this.rev++;
  this.data.splice(this.rev); //if we are in point abcdef(g)hijk in history, remove everything after (g)
  this.data.push(changes);
};

/**
 * Clears undo history
 */
Handsontable.UndoRedo.prototype.clear = function () {
  this.data = [];
  this.rev = -1;
};
/**
 * Handsontable BlockedRows class
 * @param {Object} instance
 */
Handsontable.BlockedRows = function (instance) {
  var that = this;
  this.instance = instance;
  this.headers = [];
  var position = instance.table.position();
  instance.positionFix(position);
  this.main = $('<div style="position: absolute; top: ' + position.top + 'px; left: ' + position.left + 'px"><table class="htBlockedRows" cellspacing="0" cellpadding="0"><thead></thead></table></div>');
  this.instance.container.append(this.main);
  this.hasCSS3 = !($.browser.msie && (parseInt($.browser.version, 10) <= 8)); //Used to get over IE8- not having :last-child selector
  this.update();
  this.instance.rootElement.on('cellrender.handsontable', function (event, changes, source) {
    setTimeout(function () {
      that.dimensions();
    }, 10);
  });
};

/**
 * Returns number of blocked cols
 */
Handsontable.BlockedRows.prototype.count = function () {
  return this.headers.length;
};

/**
 * Create column header in the grid table
 */
Handsontable.BlockedRows.prototype.createCol = function (className) {
  var $tr, th, h, hlen = this.count();
  for (h = 0; h < hlen; h++) {
    $tr = this.main.find('thead tr.' + this.headers[h].className);
    if (!$tr.length) {
      $tr = $('<tr class="' + this.headers[h].className + '"></tr>');
      this.main.find('thead').append($tr);
    }
    $tr = this.instance.table.find('thead tr.' + this.headers[h].className);
    if (!$tr.length) {
      $tr = $('<tr class="' + this.headers[h].className + '"></tr>');
      this.instance.table.find('thead').append($tr);
    }

    th = document.createElement('th');
    th.className = this.headers[h].className;
    if (className) {
      th.className += ' ' + className;
    }
    th.innerHTML = this.headerText('&nbsp;');
    this.instance.minWidthFix(th);
    this.instance.table.find('thead tr.' + this.headers[h].className)[0].appendChild(th);

    th = document.createElement('th');
    th.className = this.headers[h].className;
    if (className) {
      th.className += ' ' + className;
    }
    this.instance.minWidthFix(th);
    this.main.find('thead tr.' + this.headers[h].className)[0].appendChild(th);
  }
};

/**
 * Create column header in the grid table
 */
Handsontable.BlockedRows.prototype.create = function () {
  var c;
  if (this.count() > 0) {
    this.instance.table.find('thead').empty();
    this.main.find('thead').empty();
    var offset = this.instance.blockedCols.count();
    for (c = offset - 1; c >= 0; c--) {
      this.createCol(this.instance.blockedCols.headers[c].className);
    }
    for (c = 0; c < this.instance.colCount; c++) {
      this.createCol();
    }
  }
  if (!this.hasCSS3) {
    this.instance.container.find('thead tr.lastChild').not(':last-child').removeClass('lastChild');
    this.instance.container.find('thead tr:last-child').not('.lastChild').addClass('lastChild');
  }
};

/**
 * Copy table column header onto the floating layer above the grid
 */
Handsontable.BlockedRows.prototype.refresh = function () {
  var label;
  if (this.count() > 0) {
    var that = this;
    var hlen = this.count(), h;
    for (h = 0; h < hlen; h++) {
      var $tr = this.main.find('thead tr.' + this.headers[h].className);
      var tr = $tr[0];
      var ths = tr.childNodes;
      var thsLen = ths.length;
      var offset = this.instance.blockedCols.count();

      while (thsLen > this.instance.colCount + offset) {
        //remove excessive cols
        thsLen--;
        $(tr.childNodes[thsLen]).remove();
      }

      for (h = 0; h < hlen; h++) {
        var realThs = this.instance.table.find('thead th.' + this.headers[h].className);
        for (var i = 0; i < thsLen; i++) {
          label = that.headers[h].columnLabel(i - offset);
          if (this.headers[h].format && this.headers[h].format === 'small') {
            realThs[i].innerHTML = this.headerText(label);
            ths[i].innerHTML = this.headerText(label);
          }
          else {
            realThs[i].innerHTML = label;
            ths[i].innerHTML = label;
          }
          this.instance.minWidthFix(realThs[i]);
          this.instance.minWidthFix(ths[i]);
          ths[i].style.minWidth = realThs.eq(i).width() + 'px';
        }
      }
    }

    this.ths = this.main.find('tr:last-child th');
    this.refreshBorders();
  }
};

/**
 * Refresh border width
 */
Handsontable.BlockedRows.prototype.refreshBorders = function () {
  if (this.count() > 0) {
    if (this.instance.curScrollTop === 0) {
      this.ths.css('borderBottomWidth', 0);
    }
    else if (this.instance.lastScrollTop === 0) {
      this.ths.css('borderBottomWidth', '1px');
    }
  }
};

/**
 * Recalculate column widths on the floating layer above the grid
 */
Handsontable.BlockedRows.prototype.dimensions = function () {
  if (this.count() > 0) {
    var realThs = this.instance.table.find('thead th');
    for (var i = 0, ilen = realThs.length; i < ilen; i++) {
      this.ths[i].style.minWidth = $(realThs[i]).width() + 'px';
    }
  }
};


/**
 * Update settings of the column header
 */
Handsontable.BlockedRows.prototype.update = function () {
  this.create();
  this.refresh();
};

/**
 * Add column header to DOM
 */
Handsontable.BlockedRows.prototype.addHeader = function (header) {
  for (var h = this.count() - 1; h >= 0; h--) {
    if (this.headers[h].className === header.className) {
      this.headers.splice(h, 1); //if exists, remove then add to recreate
    }
  }
  this.headers.push(header);
  this.headers.sort(function (a, b) {
    return a.priority || 0 - b.priority || 0
  });
  this.update();
};

/**
 * Remove column header from DOM
 */
Handsontable.BlockedRows.prototype.destroyHeader = function (className) {
  for (var h = this.count() - 1; h >= 0; h--) {
    if (this.headers[h].className === className) {
      this.main.find('thead tr.' + this.headers[h].className).remove();
      this.instance.table.find('thead tr.' + this.headers[h].className).remove();
      this.headers.splice(h, 1);
    }
  }
};

/**
 * Puts string to small text template
 */
Handsontable.BlockedRows.prototype.headerText = function (str) {
  return '&nbsp;<span class="small">' + str + '</span>&nbsp;';
};
/**
 * Handsontable BlockedCols class
 * @param {Object} instance
 */
Handsontable.BlockedCols = function (instance) {
  var that = this;
  this.instance = instance;
  this.headers = [];
  var position = instance.table.position();
  instance.positionFix(position);
  this.main = $('<div style="position: absolute; top: ' + position.top + 'px; left: ' + position.left + 'px"><table class="htBlockedCols" cellspacing="0" cellpadding="0"><thead><tr></tr></thead><tbody></tbody></table></div>');
  this.instance.container.append(this.main);
  this.heightMethod = this.determineCellHeightMethod();
  this.instance.rootElement.on('cellrender.handsontable', function (/*event, changes, source*/) {
    setTimeout(function () {
      that.dimensions();
    }, 10);
  });
};

/**
 * Determine cell height method
 * @return {String}
 */
Handsontable.BlockedCols.prototype.determineCellHeightMethod = function () {
  return 'height';
};

/**
 * Returns number of blocked cols
 */
Handsontable.BlockedCols.prototype.count = function () {
  return this.headers.length;
};

/**
 * Create row header in the grid table
 */
Handsontable.BlockedCols.prototype.createRow = function (tr) {
  var th;
  var mainTr = document.createElement('tr');

  for (var h = 0, hlen = this.count(); h < hlen; h++) {
    th = document.createElement('th');
    th.className = this.headers[h].className;
    this.instance.minWidthFix(th);
    tr.insertBefore(th, tr.firstChild);

    th = document.createElement('th');
    th.className = this.headers[h].className;
    mainTr.insertBefore(th, mainTr.firstChild);
  }

  this.main.find('tbody')[0].appendChild(mainTr);
};

/**
 * Create row header in the grid table
 */
Handsontable.BlockedCols.prototype.create = function () {
  var hlen = this.count(), h, th;
  this.main.find('tbody').empty();
  this.instance.table.find('tbody th').remove();
  var $theadTr = this.main.find('thead tr');
  $theadTr.empty();

  if (hlen > 0) {
    var offset = this.instance.blockedRows.count();
    if (offset) {
      for (h = 0; h < hlen; h++) {
        th = $theadTr[0].getElementsByClassName ? $theadTr[0].getElementsByClassName(this.headers[h].className)[0] : $theadTr.find('.' + this.headers[h].className.replace(/\s/i, '.'))[0];
        if (!th) {
          th = document.createElement('th');
          th.className = this.headers[h].className;
          th.innerHTML = this.headerText('&nbsp;');
          this.instance.minWidthFix(th);
          $theadTr[0].insertBefore(th, $theadTr[0].firstChild);
        }
      }
    }

    var trs = this.instance.table.find('tbody')[0].childNodes;
    for (var r = 0; r < this.instance.rowCount; r++) {
      this.createRow(trs[r]);
    }
  }
};

/**
 * Copy table row header onto the floating layer above the grid
 */
Handsontable.BlockedCols.prototype.refresh = function () {
  var hlen = this.count(), h, th, realTh, i, label;
  if (hlen > 0) {
    var $tbody = this.main.find('tbody');
    var tbody = $tbody[0];
    var trs = tbody.childNodes;
    var trsLen = trs.length;
    while (trsLen > this.instance.rowCount) {
      //remove excessive rows
      trsLen--;
      $(tbody.childNodes[trsLen]).remove();
    }

    var realTrs = this.instance.table.find('tbody tr');
    for (i = 0; i < trsLen; i++) {
      for (h = 0; h < hlen; h++) {
        label = this.headers[h].columnLabel(i);
        realTh = realTrs[i].getElementsByClassName ? realTrs[i].getElementsByClassName(this.headers[h].className)[0] : $(realTrs[i]).find('.' + this.headers[h].className.replace(/\s/i, '.'))[0];
        th = trs[i].getElementsByClassName ? trs[i].getElementsByClassName(this.headers[h].className)[0] : $(trs[i]).find('.' + this.headers[h].className.replace(/\s/i, '.'))[0];
        if (this.headers[h].format && this.headers[h].format === 'small') {
          realTh.innerHTML = this.headerText(label);
          th.innerHTML = this.headerText(label);
        }
        else {
          realTh.innerHTML = label;
          th.innerHTML = label;
        }
        this.instance.minWidthFix(th);
        th.style.height = $(realTh)[this.heightMethod]() + 'px';
      }
    }

    this.ths = this.main.find('th:last-child');
    this.refreshBorders();
  }
};

/**
 * Refresh border width
 */
Handsontable.BlockedCols.prototype.refreshBorders = function () {
  if (this.count() > 0) {
    if (this.instance.curScrollLeft === 0) {
      this.ths.css('borderRightWidth', 0);
    }
    else if (this.instance.lastScrollLeft === 0) {
      this.ths.css('borderRightWidth', '1px');
    }
  }
};

/**
 * Recalculate row heights on the floating layer above the grid
 */
Handsontable.BlockedCols.prototype.dimensions = function () {
  if (this.count() > 0) {
    var realTrs = this.instance.table[0].getElementsByTagName('tbody')[0].childNodes;
    var trs = this.main[0].firstChild.getElementsByTagName('tbody')[0].childNodes;
    for (var i = 0, ilen = realTrs.length; i < ilen; i++) {
      trs[i].firstChild.style.height = $(realTrs[i].firstChild)[this.heightMethod]() + 'px';
    }
  }
};

/**
 * Update settings of the row header
 */
Handsontable.BlockedCols.prototype.update = Handsontable.BlockedRows.prototype.update;

/**
 * Add row header to DOM
 */
Handsontable.BlockedCols.prototype.addHeader = function (header) {
  for (var h = this.count() - 1; h >= 0; h--) {
    if (this.headers[h].className === header.className) {
      this.headers.splice(h, 1); //if exists, remove then add to recreate
    }
  }
  this.headers.push(header);
  this.headers.sort(function (a, b) {
    return a.priority || 0 - b.priority || 0
  });
};

/**
 * Remove row header from DOM
 */
Handsontable.BlockedCols.prototype.destroyHeader = function (className) {
  for (var h = this.count() - 1; h >= 0; h--) {
    if (this.headers[h].className === className) {
      this.headers.splice(h, 1);
    }
  }
};

/**
 * Puts string to small text template
 */
Handsontable.BlockedCols.prototype.headerText = Handsontable.BlockedRows.prototype.headerText;
/**
 * Handsontable RowHeader extension
 * @param {Object} instance
 * @param {Array|Boolean} [labels]
 */
Handsontable.RowHeader = function (instance, labels) {
  var that = this;
  this.className = 'htRowHeader';
  instance.blockedCols.main.on('mousedown', 'th.htRowHeader', function (event) {
    if (!$(event.target).hasClass('btn') && !$(event.target).hasClass('btnContainer')) {
      instance.deselectCell();
      $(this).addClass('active');
      that.lastActive = this;
      var offset = instance.blockedRows.count();
      instance.selectCell(this.parentNode.rowIndex - offset, 0, this.parentNode.rowIndex - offset, instance.colCount - 1, false);
    }
  });
  instance.rootElement.on('deselect.handsontable', function () {
    that.deselect();
  });
  this.labels = labels;
  this.instance = instance;
  this.instance.rowHeader = this;
  this.format = 'small';
  instance.blockedCols.addHeader(this);
};

/**
 * Return custom row label or automatically generate one
 * @param {Number} index Row index
 * @return {String}
 */
Handsontable.RowHeader.prototype.columnLabel = function (index) {
  if (typeof this.labels[index] !== 'undefined') {
    return this.labels[index];
  }
  return index + 1;
};

/**
 * Remove current highlight of a currently selected row header
 */
Handsontable.RowHeader.prototype.deselect = function () {
  if (this.lastActive) {
    $(this.lastActive).removeClass('active');
    this.lastActive = null;
  }
};

/**
 *
 */
Handsontable.RowHeader.prototype.destroy = function () {
  this.instance.blockedCols.destroyHeader(this.className);
};
/**
 * Handsontable ColHeader extension
 * @param {Object} instance
 * @param {Array|Boolean} [labels]
 */
Handsontable.ColHeader = function (instance, labels) {
  var that = this;
  this.className = 'htColHeader';
  instance.blockedRows.main.on('mousedown', 'th.htColHeader', function () {
    instance.deselectCell();
    var $th = $(this);
    $th.addClass('active');
    that.lastActive = this;
    var index = $th.index();
    var offset = instance.blockedCols ? instance.blockedCols.count() : 0;
    instance.selectCell(0, index - offset, instance.countRows() - 1, index - offset, false);
  });
  instance.rootElement.on('deselect.handsontable', function () {
    that.deselect();
  });
  this.instance = instance;
  this.labels = labels;
  this.instance.colHeader = this;
  this.format = 'small';
  instance.blockedRows.addHeader(this);
};

/**
 * Return custom column label or automatically generate one
 * @param {Number} index Row index
 * @return {String}
 */
Handsontable.ColHeader.prototype.columnLabel = function (index) {
  if (typeof this.labels[index] !== 'undefined') {
    return this.labels[index];
  }
  var dividend = index + 1;
  var columnLabel = '';
  var modulo;
  while (dividend > 0) {
    modulo = (dividend - 1) % 26;
    columnLabel = String.fromCharCode(65 + modulo) + columnLabel;
    dividend = parseInt((dividend - modulo) / 26);
  }
  return columnLabel;
};

/**
 * Remove current highlight of a currently selected column header
 */
Handsontable.ColHeader.prototype.deselect = Handsontable.RowHeader.prototype.deselect;

/**
 *
 */
Handsontable.ColHeader.prototype.destroy = function () {
  this.instance.blockedRows.destroyHeader(this.className);
};
/**
 * Default text renderer
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param value Value to render (remember to escape unsafe HTML before inserting to DOM!)
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.TextRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  escaped = escaped.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"); //escape html special chars
  td.innerHTML = escaped.replace(/\n/g, '<br/>');
};
/**
 * Autocomplete renderer
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param value Value to render (remember to escape unsafe HTML before inserting to DOM!)
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.AutocompleteRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  var $td = $(td);
  var $text = $('<div class="htAutocomplete"></div>');
  var $arrow = $('<div class="htAutocompleteArrow">&#x25BC;</div>');
  $arrow.mouseup(function(){
    $td.triggerHandler('dblclick.editor');
  });

  Handsontable.TextCell.renderer(instance, $text[0], row, col, prop, value, cellProperties);

  if($text.html() === '') {
    $text.html('&nbsp;');
  }

  $text.append($arrow);
  $td.empty().append($text);
};
/**
 * Checkbox renderer
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param value Value to render (remember to escape unsafe HTML before inserting to DOM!)
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.CheckboxRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  if (typeof cellProperties.checkedTemplate === "undefined") {
    cellProperties.checkedTemplate = true;
  }
  if (typeof cellProperties.uncheckedTemplate === "undefined") {
    cellProperties.uncheckedTemplate = false;
  }
  if (value === cellProperties.checkedTemplate || value === Handsontable.helper.stringify(cellProperties.checkedTemplate)) {
    td.innerHTML = "<input type='checkbox' checked autocomplete='no'>";
  }
  else if (value === cellProperties.uncheckedTemplate || value === Handsontable.helper.stringify(cellProperties.uncheckedTemplate)) {
    td.innerHTML = "<input type='checkbox' autocomplete='no'>";
  }
  else if (value === null) { //default value
    td.innerHTML = "<input type='checkbox' autocomplete='no' style='opacity: 0.5'>";
  }
  else {
    td.innerHTML = "#bad value#";
  }

  $(td).find('input').change(function () {
    if ($(this).is(':checked')) {
      instance.setDataAtCell(row, prop, cellProperties.checkedTemplate);
    }
    else {
      instance.setDataAtCell(row, prop, cellProperties.uncheckedTemplate);
    }
  });

  return td;
};
var texteditor = {
  isCellEdited: false,

  /**
   * Returns caret position in edit proxy
   * @author http://stackoverflow.com/questions/263743/how-to-get-caret-position-in-textarea
   * @return {Number}
   */
  getCaretPosition: function (keyboardProxy) {
    var el = keyboardProxy[0];
    if (el.selectionStart) {
      return el.selectionStart;
    }
    else if (document.selection) {
      el.focus();
      var r = document.selection.createRange();
      if (r == null) {
        return 0;
      }
      var re = el.createTextRange(),
        rc = re.duplicate();
      re.moveToBookmark(r.getBookmark());
      rc.setEndPoint('EndToStart', re);
      return rc.text.length;
    }
    return 0;
  },

  /**
   * Sets caret position in edit proxy
   * @author http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
   * @param {Number}
   */
  setCaretPosition: function (keyboardProxy, pos) {
    var el = keyboardProxy[0];
    if (el.setSelectionRange) {
      el.focus();
      el.setSelectionRange(pos, pos);
    }
    else if (el.createTextRange) {
      var range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  },

  /**
   * Shows text input in grid cell
   */
  beginEditing: function (instance, td, row, col, prop, keyboardProxy, useOriginalValue, suffix) {
    if (texteditor.isCellEdited) {
      return;
    }

    keyboardProxy.on('cut.editor', function (event) {
      event.stopPropagation();
    });

    keyboardProxy.on('paste.editor', function (event) {
      event.stopPropagation();
    });

    var $td = $(td);

    if (!instance.getCellMeta(row, col).isWritable) {
      return;
    }

    texteditor.isCellEdited = true;

    if (useOriginalValue) {
      var original = instance.getDataAtCell(row, prop);
      original = Handsontable.helper.stringify(original) + (suffix || '');
      keyboardProxy.val(original);
      texteditor.setCaretPosition(keyboardProxy, original.length);
    }
    else {
      keyboardProxy.val('');
    }

    var width = $td.width()
      , height = $td.outerHeight() - 4;

    if (parseInt($td.css('border-top-width')) > 0) {
      height -= 1;
    }
    if (parseInt($td.css('border-left-width')) > 0) {
      if (instance.blockedCols.count() > 0) {
        width -= 1;
      }
    }

    keyboardProxy.autoResize({
      maxHeight: 200,
      minHeight: height,
      minWidth: width,
      maxWidth: Math.max(168, width),
      animate: false,
      extraSpace: 0
    });
    keyboardProxy.parent().removeClass('htHidden');

    instance.rootElement.triggerHandler('beginediting.handsontable');

    setTimeout(function () {
      //async fix for Firefox 3.6.28 (needs manual testing)
      keyboardProxy.parent().css({
        overflow: 'visible'
      });
    }, 1);
  },

  /**
   * Finishes text input in selected cells
   */
  finishEditing: function (instance, td, row, col, prop, keyboardProxy, isCancelled, ctrlDown) {
    if (texteditor.triggerOnlyByDestroyer) {
      return;
    }
    if (texteditor.isCellEdited) {
      texteditor.isCellEdited = false;
      var val;
      if (isCancelled) {
        val = [
          [texteditor.originalValue]
        ];
      }
      else {
        val = [
          [$.trim(keyboardProxy.val())]
        ];
      }
      if (ctrlDown) { //if ctrl+enter and multiple cells selected, behave like Excel (finish editing and apply to all cells)
        var sel = instance.handsontable('getSelected');
        instance.populateFromArray({row: sel[0], col: sel[1]}, val, {row: sel[2], col: sel[3]}, false, 'edit');
      }
      else {
        instance.populateFromArray({row: row, col: col}, val, null, false, 'edit');
      }
    }
    keyboardProxy.off(".editor");
    $(td).off('.editor');

    keyboardProxy.css({
      width: 0,
      height: 0
    });
    keyboardProxy.parent().addClass('htHidden').css({
      overflow: 'hidden'
    });

    instance.container.find('.htBorder.current').off('.editor');
    instance.rootElement.triggerHandler('finishediting.handsontable');
  }
};

/**
 * Default text editor
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param {Object} keyboardProxy jQuery element of keyboard proxy that contains current editing value
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.TextEditor = function (instance, td, row, col, prop, keyboardProxy, cellProperties) {
  texteditor.isCellEdited = false;
  texteditor.originalValue = instance.getDataAtCell(row, prop);
  texteditor.triggerOnlyByDestroyer = cellProperties.strict;

  var $current = $(td);
  var currentOffset = $current.offset();
  var containerOffset = instance.container.offset();
  var scrollTop = instance.container.scrollTop();
  var scrollLeft = instance.container.scrollLeft();
  var editTop = currentOffset.top - containerOffset.top + scrollTop - 1;
  var editLeft = currentOffset.left - containerOffset.left + scrollLeft - 1;

  if (editTop < 0) {
    editTop = 0;
  }
  if (editLeft < 0) {
    editLeft = 0;
  }

  if (instance.blockedRows.count() > 0 && parseInt($current.css('border-top-width')) > 0) {
    editTop += 1;
  }
  if (instance.blockedCols.count() > 0 && parseInt($current.css('border-left-width')) > 0) {
    editLeft += 1;
  }

  if ($.browser.msie && parseInt($.browser.version, 10) <= 7) {
    editTop -= 1;
  }

  keyboardProxy.parent().addClass('htHidden').css({
    top: editTop,
    left: editLeft,
    overflow: 'hidden'
  });
  keyboardProxy.css({
    width: 0,
    height: 0
  });

  keyboardProxy.on("keydown.editor", function (event) {
    var ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey; //catch CTRL but not right ALT (which in some systems triggers ALT+CTRL)
    if (Handsontable.helper.isPrintableChar(event.keyCode)) {
      if (!texteditor.isCellEdited && !ctrlDown) { //disregard CTRL-key shortcuts
        texteditor.beginEditing(instance, td, row, col, prop, keyboardProxy);
        event.stopImmediatePropagation();
      }
      else if (ctrlDown) {
        if (texteditor.isCellEdited && event.keyCode === 65) { //CTRL + A
          event.stopPropagation();
        }
        else if (texteditor.isCellEdited && event.keyCode === 88 && $.browser.opera) { //CTRL + X
          event.stopPropagation();
        }
        else if (texteditor.isCellEdited && event.keyCode === 86 && $.browser.opera) { //CTRL + V
          event.stopPropagation();
        }
      }
      return;
    }

    switch (event.keyCode) {
      case 38: /* arrow up */
        if (texteditor.isCellEdited) {
          texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false);
        }
        break;

      case 9: /* tab */
        if (texteditor.isCellEdited) {
          texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false);
        }
        event.preventDefault();
        break;

      case 39: /* arrow right */
        if (texteditor.isCellEdited) {
          if (texteditor.getCaretPosition(keyboardProxy) === keyboardProxy.val().length) {
            texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false);

          }
          else {
            event.stopPropagation();
          }
        }
        break;

      case 37: /* arrow left */
        if (texteditor.isCellEdited) {
          if (texteditor.getCaretPosition(keyboardProxy) === 0) {
            texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false);
          }
          else {
            event.stopPropagation();
          }
        }
        break;

      case 8: /* backspace */
      case 46: /* delete */
        if (texteditor.isCellEdited) {
          event.stopPropagation();
        }
        break;

      case 40: /* arrow down */
        if (texteditor.isCellEdited) {
          texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false);
        }
        break;

      case 27: /* ESC */
        if (texteditor.isCellEdited) {
          instance.destroyEditor(true);
          event.stopPropagation();
        }
        break;

      case 113: /* F2 */
        if (!texteditor.isCellEdited) {
          texteditor.beginEditing(instance, td, row, col, prop, keyboardProxy, true); //show edit field
          event.stopPropagation();
          event.preventDefault(); //prevent Opera from opening Go to Page dialog
        }
        break;

      case 13: /* return/enter */
        if (texteditor.isCellEdited) {
          var selected = instance.getSelected();
          var isMultipleSelection = !(selected[0] === selected[2] && selected[1] === selected[3]);
          if ((event.ctrlKey && !isMultipleSelection) || event.altKey) { //if ctrl+enter or alt+enter, add new line
            keyboardProxy.val(keyboardProxy.val() + '\n');
            keyboardProxy[0].focus();
            event.stopPropagation();
          }
          else {
            texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, false, ctrlDown);
          }
        }
        else if (instance.getSettings().enterBeginsEditing) {
          if ((ctrlDown && !selection.isMultiple()) || event.altKey) { //if ctrl+enter or alt+enter, add new line
            texteditor.beginEditing(instance, td, row, col, prop, keyboardProxy, true, '\n'); //show edit field
          }
          else {
            texteditor.beginEditing(instance, td, row, col, prop, keyboardProxy, true); //show edit field
          }
          event.stopPropagation();
        }
        event.preventDefault(); //don't add newline to field
        break;

      case 36: /* home */
        event.stopPropagation();
        break;

      case 35: /* end */
        event.stopPropagation();
        break;
    }
  });

  function onDblClick() {
    keyboardProxy[0].focus();
    texteditor.beginEditing(instance, td, row, col, prop, keyboardProxy, true);
  }

  $current.on('dblclick.editor', onDblClick);
  instance.container.find('.htBorder.current').on('dblclick.editor', onDblClick);

  return function (isCancelled) {
    texteditor.triggerOnlyByDestroyer = false;
    texteditor.finishEditing(instance, td, row, col, prop, keyboardProxy, isCancelled);
  }
};
function isAutoComplete(keyboardProxy) {
  var typeahead = keyboardProxy.data("typeahead");
  if (typeahead && typeahead.$menu.is(":visible")) {
    return typeahead;
  }
  else {
    return false;
  }
}

/**
 * Autocomplete editor
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param {Object} keyboardProxy jQuery element of keyboard proxy that contains current editing value
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.AutocompleteEditor = function (instance, td, row, col, prop, keyboardProxy, cellProperties) {
  var typeahead = keyboardProxy.data('typeahead')
    , dontHide = false;

  if (!typeahead) {
    keyboardProxy.typeahead();
    typeahead = keyboardProxy.data('typeahead');
    typeahead._show = typeahead.show;
    typeahead._hide = typeahead.hide;
    typeahead._render = typeahead.render;
    typeahead._highlighter = typeahead.highlighter;
  }
  else {
    typeahead.$menu.off(); //remove previous typeahead bindings
    keyboardProxy.off(); //remove previous typeahead bindings. Removing this will cause prepare to register 2 keydown listeners in typeahead
    typeahead.listen(); //add typeahead bindings
  }

  typeahead.minLength = 0;
  typeahead.highlighter = typeahead._highlighter;

  typeahead.show = function () {
    if (keyboardProxy.parent().hasClass('htHidden')) {
      return;
    }
    return typeahead._show.call(this);
  };

  typeahead.hide = function () {
    if (!dontHide) {
      dontHide = false; //set to true by dblclick handler, otherwise appears and disappears immediately after double click
      return typeahead._hide.call(this);
    }
  };

  typeahead.lookup = function () {
    var items;
    this.query = this.$element.val();
    items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
    return items ? this.process(items) : this;
  };

  typeahead.matcher = function () {
    return true;
  };

  typeahead.select = function () {
    var val = this.$menu.find('.active').attr('data-value') || keyboardProxy.val();
    destroyer(true);
    instance.setDataAtCell(row, prop, typeahead.updater(val));
    return this.hide();
  };

  typeahead.render = function (items) {
    typeahead._render.call(this, items);
    if (!cellProperties.strict) {
      this.$menu.find('li:eq(0)').removeClass('active');
    }
    return this;
  };

  /* overwrite typeahead methods (matcher, sorter, highlighter, updater, etc) if provided in cellProperties */
  for (var i in cellProperties) {
    if ((typeahead.hasOwnProperty(i) || i === 'render') && i !== 'options') {
      typeahead[i] = cellProperties[i];
    }
  }

  var wasDestroyed = false;

  keyboardProxy.on("keydown.editor", function (event) {
    switch (event.keyCode) {
      case 27: /* ESC */
        dontHide = false;
        break;

      case 37: /* arrow left */
      case 39: /* arrow right */
      case 38: /* arrow up */
      case 40: /* arrow down */
      case 9: /* tab */
      case 13: /* return/enter */
        if (!keyboardProxy.parent().hasClass('htHidden')) {
          event.stopImmediatePropagation();
        }
        event.preventDefault();
    }
  });

  keyboardProxy.on("keyup.editor", function (event) {
      if (wasDestroyed) {
        return;
      }

      switch (event.keyCode) {
        case 9: /* tab */
        case 13: /* return/enter */
          if (!isAutoComplete(keyboardProxy)) {
            var ev = $.Event('keyup');
            ev.keyCode = 113; //113 triggers lookup, in contrary to 13 or 9 which only trigger hide
            keyboardProxy.trigger(ev);
          }
          else {
            setTimeout(function () { //so pressing enter will move one row down after change is applied by 'select' above
              var ev = $.Event('keydown');
              ev.keyCode = event.keyCode;
              keyboardProxy.parent().trigger(ev);
            }, 10);
          }
          break;

        default:
          if (!Handsontable.helper.isPrintableChar(event.keyCode)) { //otherwise Del or F12 would open suggestions list
            event.stopImmediatePropagation();
          }
      }
    }
  );

  var textDestroyer = Handsontable.TextEditor(instance, td, row, col, prop, keyboardProxy, cellProperties);

  function onDblClick() {
    dontHide = true;
    setTimeout(function () { //otherwise is misaligned in IE9
      keyboardProxy.data('typeahead').lookup();
    }, 1);
  }

  $(td).on('dblclick.editor', onDblClick);
  instance.container.find('.htBorder.current').on('dblclick.editor', onDblClick);

  var destroyer = function (isCancelled) {
    wasDestroyed = true;
    keyboardProxy.off(); //remove typeahead bindings
    textDestroyer(isCancelled);
    dontHide = false;
    if (isAutoComplete(keyboardProxy)) {
      isAutoComplete(keyboardProxy).hide();
    }
  };

  return destroyer;
};
function toggleCheckboxCell(instance, row, prop, cellProperties) {
  if (Handsontable.helper.stringify(instance.getDataAtCell(row, prop)) === Handsontable.helper.stringify(cellProperties.checkedTemplate)) {
    instance.setDataAtCell(row, prop, cellProperties.uncheckedTemplate);
  }
  else {
    instance.setDataAtCell(row, prop, cellProperties.checkedTemplate);
  }
}

/**
 * Checkbox editor
 * @param {Object} instance Handsontable instance
 * @param {Element} td Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param {Object} keyboardProxy jQuery element of keyboard proxy that contains current editing value
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */
Handsontable.CheckboxEditor = function (instance, td, row, col, prop, keyboardProxy, cellProperties) {
  if (typeof cellProperties === "undefined") {
    cellProperties = {};
  }
  if (typeof cellProperties.checkedTemplate === "undefined") {
    cellProperties.checkedTemplate = true;
  }
  if (typeof cellProperties.uncheckedTemplate === "undefined") {
    cellProperties.uncheckedTemplate = false;
  }

  keyboardProxy.on("keydown.editor", function (event) {
    var ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey; //catch CTRL but not right ALT (which in some systems triggers ALT+CTRL)
    if (!ctrlDown && Handsontable.helper.isPrintableChar(event.keyCode)) {
      toggleCheckboxCell(instance, row, prop, cellProperties);
      event.stopPropagation();
    }
  });

  function onDblClick() {
    toggleCheckboxCell(instance, row, prop, cellProperties);
  }

  var $td = $(td);
  $td.on('dblclick.editor', onDblClick);
  instance.container.find('.htBorder.current').on('dblclick.editor', onDblClick);

  return function () {
    keyboardProxy.off(".editor");
    $td.off(".editor");
    instance.container.find('.htBorder.current').off(".editor");
  }
};
Handsontable.AutocompleteCell = {
  renderer: Handsontable.AutocompleteRenderer,
  editor: Handsontable.AutocompleteEditor
};

Handsontable.CheckboxCell = {
  renderer: Handsontable.CheckboxRenderer,
  editor: Handsontable.CheckboxEditor
};

Handsontable.TextCell = {
  renderer: Handsontable.TextRenderer,
  editor: Handsontable.TextEditor
};
Handsontable.PluginHooks = {
  hooks: {
    afterInit: [],
    afterGetCellMeta: []
  },

  push: function (hook, fn) {
    this.hooks[hook].push(fn);
  },

  unshift: function (hook, fn) {
    this.hooks[hook].unshift(fn);
  },

  run: function (instance, hook, args) {
    for (var i = 0, ilen = this.hooks[hook].length; i < ilen; i++) {
      if (args) {
        this.hooks[hook][i].apply(instance, args);
      }
      else {
        this.hooks[hook][i].call(instance);
      }
    }
  }
};
function createContextMenu() {
  var instance = this
    , defaultOptions = {
      selector: "#" + instance.rootElement.attr('id') + ' table, #' + instance.rootElement.attr('id') + ' div',
      trigger: 'right',
      callback: onContextClick
    },
    allItems = {
      "row_above": {name: "Insert row above", disabled: isDisabled},
      "row_below": {name: "Insert row below", disabled: isDisabled},
      "hsep1": "---------",
      "col_left": {name: "Insert column on the left", disabled: isDisabled},
      "col_right": {name: "Insert column on the right", disabled: isDisabled},
      "hsep2": "---------",
      "remove_row": {name: "Remove row", disabled: isDisabled},
      "remove_col": {name: "Remove column", disabled: isDisabled},
      "hsep3": "---------",
      "undo": {name: "Undo", disabled: function () {
        return !instance.isUndoAvailable();
      }},
      "redo": {name: "Redo", disabled: function () {
        return !instance.isRedoAvailable();
      }}
    }
    , options = {}
    , i
    , ilen
    , settings = instance.getSettings();

  function onContextClick(key) {
    var corners = instance.getSelected(); //[top left row, top left col, bottom right row, bottom right col]

    switch (key) {
      case "row_above":
        instance.alter("insert_row", corners[0]);
        break;

      case "row_below":
        instance.alter("insert_row", corners[2] + 1);
        break;

      case "col_left":
        instance.alter("insert_col", corners[1]);
        break;

      case "col_right":
        instance.alter("insert_col", corners[3] + 1);
        break;

      case "remove_row":
        instance.alter(key, corners[0], corners[2]);
        break;

      case "remove_col":
        instance.alter(key, corners[1], corners[3]);
        break;

      case "undo":
        instance.undo();
        break;

      case "redo":
        instance.redo();
        break;
    }
  }

  function isDisabled(key) {
    if (instance.blockedCols.main.find('th.htRowHeader.active').length && (key === "remove_col" || key === "col_left" || key === "col_right")) {
      return true;
    }
    else if (instance.blockedRows.main.find('th.htColHeader.active').length && (key === "remove_row" || key === "row_above" || key === "row_below")) {
      return true;
    }
    else {
      return false;
    }
  }

  if (!settings.contextMenu) {
    return;
  }
  else if (settings.contextMenu === true) { //contextMenu is true
    options.items = allItems;
  }
  else if (Object.prototype.toString.apply(settings.contextMenu) === '[object Array]') { //contextMenu is an array
    options.items = {};
    for (i = 0, ilen = settings.contextMenu.length; i < ilen; i++) {
      var key = settings.contextMenu[i];
      if (typeof allItems[key] === 'undefined') {
        throw new Error('Context menu key "' + key + '" is not recognised');
      }
      options.items[key] = allItems[key];
    }
  }
  else if (Object.prototype.toString.apply(settings.contextMenu) === '[object Object]') { //contextMenu is an options object as defined in http://medialize.github.com/jQuery-contextMenu/docs.html
    options = settings.contextMenu;
    if (options.items) {
      for (i in options.items) {
        if (options.items.hasOwnProperty(i) && allItems[i]) {
          if (typeof options.items[i] === 'string') {
            options.items[i] = allItems[i];
          }
          else {
            options.items[i] = $.extend(true, allItems[i], options.items[i]);
          }
        }
      }
    }
    else {
      options.items = allItems;
    }

    if (options.callback) {
      var handsontableCallback = defaultOptions.callback;
      var customCallback = options.callback;
      options.callback = function (key, options) {
        handsontableCallback(key, options);
        customCallback(key, options);
      }
    }
  }

  if (!instance.rootElement.attr('id')) {
    throw new Error("Handsontable container must have an id");
  }

  $.contextMenu($.extend(true, defaultOptions, options));
}

Handsontable.PluginHooks.push('afterInit', createContextMenu);
/**
 * This plugin adds support for legacy features, deprecated APIs, etc.
 */

/**
 * Support for old autocomplete syntax
 * For old syntax, see: https://github.com/warpech/jquery-handsontable/blob/8c9e701d090ea4620fe08b6a1a048672fadf6c7e/README.md#defining-autocomplete
 */
Handsontable.PluginHooks.push('afterGetCellMeta', function (row, col, cellProperties) {
  var settings = this.getSettings(), data = this.getData(), i, ilen, a;
  if (settings.autoComplete) {
    for (i = 0, ilen = settings.autoComplete.length; i < ilen; i++) {
      if (settings.autoComplete[i].match(row, col, data)) {
        if (typeof cellProperties.type === 'undefined') {
          cellProperties.type = Handsontable.AutocompleteCell;
        }
        else {
          if (typeof cellProperties.type.renderer === 'undefined') {
            cellProperties.type.renderer = Handsontable.AutocompleteCell.renderer;
          }
          if (typeof cellProperties.type.editor === 'undefined') {
            cellProperties.type.editor = Handsontable.AutocompleteCell.editor;
          }
        }
        for (a in settings.autoComplete[i]) {
          if (settings.autoComplete[i].hasOwnProperty(a) && a !== 'match' && typeof cellProperties[i] === 'undefined') {
            if(a === 'source') {
              cellProperties[a] = settings.autoComplete[i][a](row, col);
            }
            else {
              cellProperties[a] = settings.autoComplete[i][a];
            }
          }
        }
        break;
      }
    }
  }
});
/*
 * jQuery.fn.autoResize 1.1+
 * --
 * https://github.com/warpech/jQuery.fn.autoResize
 *
 * This fork differs from others in a way that it autoresizes textarea in 2-dimensions (horizontally and vertically).
 * It was originally forked from alexbardas's repo but maybe should be merged with dpashkevich's repo in future.
 *
 * originally forked from:
 * https://github.com/jamespadolsey/jQuery.fn.autoResize
 * which is now located here:
 * https://github.com/alexbardas/jQuery.fn.autoResize
 * though the mostly maintained for is here:
 * https://github.com/dpashkevich/jQuery.fn.autoResize/network
 *
 * --
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */

(function($){

  autoResize.defaults = {
    onResize: function(){},
    animate: {
      duration: 200,
      complete: function(){}
    },
    extraSpace: 50,
    minHeight: 'original',
    maxHeight: 500,
    minWidth: 'original',
    maxWidth: 500
  };

  autoResize.cloneCSSProperties = [
    'lineHeight', 'textDecoration', 'letterSpacing',
    'fontSize', 'fontFamily', 'fontStyle', 'fontWeight',
    'textTransform', 'textAlign', 'direction', 'wordSpacing', 'fontSizeAdjust',
    'padding'
  ];

  autoResize.cloneCSSValues = {
    position: 'absolute',
    top: -9999,
    left: -9999,
    opacity: 0,
    overflow: 'hidden',
    border: '1px solid black',
    padding: '0.49em' //this must be about the width of caps W character
  };

  autoResize.resizableFilterSelector = 'textarea,input:not(input[type]),input[type=text],input[type=password]';

  autoResize.AutoResizer = AutoResizer;

  $.fn.autoResize = autoResize;

  function autoResize(config) {
    this.filter(autoResize.resizableFilterSelector).each(function(){
      new AutoResizer( $(this), config );
    });
    return this;
  }

  function AutoResizer(el, config) {

    if(this.clones) return;

    this.config = $.extend({}, autoResize.defaults, config);

    this.el = el;

    this.nodeName = el[0].nodeName.toLowerCase();

    this.previousScrollTop = null;

    if (config.maxWidth === 'original') config.maxWidth = el.width();
    if (config.minWidth === 'original') config.minWidth = el.width();
    if (config.maxHeight === 'original') config.maxHeight = el.height();
    if (config.minHeight === 'original') config.minHeight = el.height();

    if (this.nodeName === 'textarea') {
      el.css({
        resize: 'none',
        overflowY: 'hidden'
      });
    }

    el.data('AutoResizer', this);

    this.createClone();
    this.injectClone();
    this.bind();

  }

  AutoResizer.prototype = {

    bind: function() {

      var check = $.proxy(function(){
        this.check();
        return true;
      }, this);

      this.unbind();

      this.el
        .bind('keyup.autoResize', check)
        //.bind('keydown.autoResize', check)
        .bind('change.autoResize', check);

      this.check(null, true);

    },

    unbind: function() {
      this.el.unbind('.autoResize');
    },

    createClone: function() {

      var el = this.el,
        self = this,
        config = this.config;

      this.clones = $();

      if (config.minHeight !== 'original' || config.maxHeight !== 'original') {
        this.hClone = el.clone().height('auto');
        this.clones = this.clones.add(this.hClone);
      }
      if (config.minWidth !== 'original' || config.maxWidth !== 'original') {
        this.wClone = $('<div/>').width('auto').css({
          whiteSpace: 'nowrap',
          'float': 'left'
        });
        this.clones = this.clones.add(this.wClone);
      }

      $.each(autoResize.cloneCSSProperties, function(i, p){
        self.clones.css(p, el.css(p));
      });

      this.clones
        .removeAttr('name')
        .removeAttr('id')
        .attr('tabIndex', -1)
        .css(autoResize.cloneCSSValues);

    },

    check: function(e, immediate) {

      var config = this.config,
        wClone = this.wClone,
        hClone = this.hClone,
        el = this.el,
        value = el.val();

      if (wClone) {

        wClone.text(value);

        // Calculate new width + whether to change
        var cloneWidth = wClone.outerWidth(),
          newWidth = (cloneWidth + config.extraSpace) >= config.minWidth ?
            cloneWidth + config.extraSpace : config.minWidth,
          currentWidth = el.width();

        newWidth = Math.min(newWidth, config.maxWidth);

        if (
          (newWidth < currentWidth && newWidth >= config.minWidth) ||
            (newWidth >= config.minWidth && newWidth <= config.maxWidth)
          ) {

          config.onResize.call(el);

          el.scrollLeft(0);

          config.animate && !immediate ?
            el.stop(1,1).animate({
              width: newWidth
            }, config.animate)
            : el.width(newWidth);

        }

      }

      if (hClone) {

        if (newWidth) {
          hClone.width(newWidth);
        }

        hClone.height(0).val(value).scrollTop(10000);

        var scrollTop = hClone[0].scrollTop + config.extraSpace;

        // Don't do anything if scrollTop hasen't changed:
        if (this.previousScrollTop === scrollTop) {
          return;
        }

        this.previousScrollTop = scrollTop;

        if (scrollTop >= config.maxHeight) {
          el.css('overflowY', '');
          return;
        }

        el.css('overflowY', 'hidden');

        if (scrollTop < config.minHeight) {
          scrollTop = config.minHeight;
        }

        config.onResize.call(el);

        // Either animate or directly apply height:
        config.animate && !immediate ?
          el.stop(1,1).animate({
            height: scrollTop
          }, config.animate)
          : el.height(scrollTop);
      }
    },

    destroy: function() {
      this.unbind();
      this.el.removeData('AutoResizer');
      this.clones.remove();
      delete this.el;
      delete this.hClone;
      delete this.wClone;
      delete this.clones;
    },

    injectClone: function() {
      (
        autoResize.cloneContainer ||
          (autoResize.cloneContainer = $('<arclones/>').appendTo('body'))
        ).append(this.clones);
    }

  };

})(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/**
 * SheetClip - Spreadsheet Clipboard Parser
 * version 0.2
 *
 * This tiny library transforms JavaScript arrays to strings that are pasteable by LibreOffice, OpenOffice,
 * Google Docs and Microsoft Excel.
 *
 * Copyright 2012, Marcin Warpechowski
 * Licensed under the MIT license.
 * http://github.com/warpech/sheetclip/
 */
/*jslint white: true*/
(function (global) {
  "use strict";

  function countQuotes(str) {
    return str.split('"').length - 1;
  }

  global.SheetClip = {
    parse: function (str) {
      var r, rlen, rows, arr = [], a = 0, c, clen, multiline, last;
      rows = str.split('\n');
      if (rows.length > 1 && rows[rows.length - 1] === '') {
        rows.pop();
      }
      for (r = 0, rlen = rows.length; r < rlen; r += 1) {
        rows[r] = rows[r].split('\t');
        for (c = 0, clen = rows[r].length; c < clen; c += 1) {
          if (!arr[a]) {
            arr[a] = [];
          }
          if (multiline && c === 0) {
            last = arr[a].length - 1;
            arr[a][last] = arr[a][last] + '\n' + rows[r][0];
            if (multiline && countQuotes(rows[r][0]) % 2 === 1) {
              multiline = false;
              arr[a][last] = arr[a][last].substring(0, arr[a][last].length - 1).replace(/""/g, '"');
            }
          }
          else {
            if (c === clen - 1 && rows[r][c].indexOf('"') === 0) {
              arr[a].push(rows[r][c].substring(1).replace(/""/g, '"'));
              multiline = true;
            }
            else {
              arr[a].push(rows[r][c].replace(/""/g, '"'));
              multiline = false;
            }
          }
        }
        if (!multiline) {
          a += 1;
        }
      }
      return arr;
    },

    stringify: function (arr) {
      var r, rlen, c, clen, str = '', val;
      for (r = 0, rlen = arr.length; r < rlen; r += 1) {
        for (c = 0, clen = arr[r].length; c < clen; c += 1) {
          if (c > 0) {
            str += '\t';
          }
          val = arr[r][c];
          if (typeof val === 'string') {
            if (val.indexOf('\n') > -1) {
              str += '"' + val.replace(/"/g, '""') + '"';
            }
            else {
              str += val;
            }
          }
          else if (val === null || val === void 0) { //void 0 resolves to undefined
            str += '';
          }
          else {
            str += val;
          }
        }
        str += '\n';
      }
      return str;
    }
  };
}(window));
})(jQuery, window, Handsontable);
/* =============================================================
 * bootstrap-typeahead.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.$menu = $(this.options.menu).appendTo('body')
    this.source = this.options.source
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.offset(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu.css({
        top: pos.top + pos.height
      , left: pos.left
      })

      this.$menu.show()
      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if ($.browser.chrome || $.browser.webkit || $.browser.msie) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = !~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /*   TYPEAHEAD DATA-API
  * ================== */

  $(function () {
    $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      e.preventDefault()
      $this.typeahead($this.data())
    })
  })

}(window.jQuery);
/*!
 * jQuery contextMenu - Plugin for simple contextMenu handling
 *
 * Version: 1.5.25
 *
 * Authors: Rodney Rehm, Addy Osmani (patches for FF)
 * Web: http://medialize.github.com/jQuery-contextMenu/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */

(function($, undefined){
    
    // TODO: -
        // ARIA stuff: menuitem, menuitemcheckbox und menuitemradio
        // create <menu> structure if $.support[htmlCommand || htmlMenuitem] and !opt.disableNative

// determine html5 compatibility
$.support.htmlMenuitem = ('HTMLMenuItemElement' in window);
$.support.htmlCommand = ('HTMLCommandElement' in window);
$.support.eventSelectstart = ("onselectstart" in document.documentElement);
/* // should the need arise, test for css user-select
$.support.cssUserSelect = (function(){
    var t = false,
        e = document.createElement('div');
    
    $.each('Moz|Webkit|Khtml|O|ms|Icab|'.split('|'), function(i, prefix) {
        var propCC = prefix + (prefix ? 'U' : 'u') + 'serSelect',
            prop = (prefix ? ('-' + prefix.toLowerCase() + '-') : '') + 'user-select';
            
        e.style.cssText = prop + ': text;';
        if (e.style[propCC] == 'text') {
            t = true;
            return false;
        }
        
        return true;
    });
    
    return t;
})();
*/

var // currently active contextMenu trigger
    $currentTrigger = null,
    // is contextMenu initialized with at least one menu?
    initialized = false,
    // window handle
    $win = $(window),
    // number of registered menus
    counter = 0,
    // mapping selector to namespace
    namespaces = {},
    // mapping namespace to options
    menus = {},
    // custom command type handlers
    types = {},
    // default values
    defaults = {
        // selector of contextMenu trigger
        selector: null,
        // where to append the menu to
        appendTo: null,
        // method to trigger context menu ["right", "left", "hover"]
        trigger: "right",
        // hide menu when mouse leaves trigger / menu elements
        autoHide: false,
        // ms to wait before showing a hover-triggered context menu
        delay: 200,
        // determine position to show menu at
        determinePosition: function($menu) {
            // position to the lower middle of the trigger element
            if ($.ui && $.ui.position) {
                // .position() is provided as a jQuery UI utility
                // (...and it won't work on hidden elements)
                $menu.css('display', 'block').position({
                    my: "center top",
                    at: "center bottom",
                    of: this,
                    offset: "0 5",
                    collision: "fit"
                }).css('display', 'none');
            } else {
                // determine contextMenu position
                var offset = this.offset();
                offset.top += this.outerHeight();
                offset.left += this.outerWidth() / 2 - $menu.outerWidth() / 2;
                $menu.css(offset);
            }
        },
        // position menu
        position: function(opt, x, y) {
            var $this = this,
                offset;
            // determine contextMenu position
            if (!x && !y) {
                opt.determinePosition.call(this, opt.$menu);
                return;
            } else if (x === "maintain" && y === "maintain") {
                // x and y must not be changed (after re-show on command click)
                offset = opt.$menu.position();
            } else {
                // x and y are given (by mouse event)
                var triggerIsFixed = opt.$trigger.parents().andSelf()
                    .filter(function() {
                        return $(this).css('position') == "fixed";
                    }).length;

                if (triggerIsFixed) {
                    y -= $win.scrollTop();
                    x -= $win.scrollLeft();
                }
                offset = {top: y, left: x};
            }
            
            // correct offset if viewport demands it
            var bottom = $win.scrollTop() + $win.height(),
                right = $win.scrollLeft() + $win.width(),
                height = opt.$menu.height(),
                width = opt.$menu.width();
            
            if (offset.top + height > bottom) {
                offset.top -= height;
            }
            
            if (offset.left + width > right) {
                offset.left -= width;
            }
            
            opt.$menu.css(offset);
        },
        // position the sub-menu
        positionSubmenu: function($menu) {
            if ($.ui && $.ui.position) {
                // .position() is provided as a jQuery UI utility
                // (...and it won't work on hidden elements)
                $menu.css('display', 'block').position({
                    my: "left top",
                    at: "right top",
                    of: this,
                    collision: "fit"
                }).css('display', '');
            } else {
                // determine contextMenu position
                var offset = {
                    top: 0,
                    left: this.outerWidth()
                };
                $menu.css(offset);
            }
        },
        // offset to add to zIndex
        zIndex: 1,
        // show hide animation settings
        animation: {
            duration: 50,
            show: 'slideDown',
            hide: 'slideUp'
        },
        // events
        events: {
            show: $.noop,
            hide: $.noop
        },
        // default callback
        callback: null,
        // list of contextMenu items
        items: {}
    },
    // mouse position for hover activation
    hoveract = {
        timer: null,
        pageX: null,
        pageY: null
    },
    // determine zIndex
    zindex = function($t) {
        var zin = 0,
            $tt = $t;

        while (true) {
            zin = Math.max(zin, parseInt($tt.css('z-index'), 10) || 0);
            $tt = $tt.parent();
            if (!$tt || !$tt.length || "html body".indexOf($tt.prop('nodeName').toLowerCase()) > -1 ) {
                break;
            }
        }
        
        return zin;
    },
    // event handlers
    handle = {
        // abort anything
        abortevent: function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
        },
        
        // contextmenu show dispatcher
        contextmenu: function(e) {
            var $this = $(this);
            
            // disable actual context-menu
            e.preventDefault();
            e.stopImmediatePropagation();
            
            // abort native-triggered events unless we're triggering on right click
            if (e.data.trigger != 'right' && e.originalEvent) {
                return;
            }
            
            if (!$this.hasClass('context-menu-disabled')) {
                // theoretically need to fire a show event at <menu>
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#context-menus
                // var evt = jQuery.Event("show", { data: data, pageX: e.pageX, pageY: e.pageY, relatedTarget: this });
                // e.data.$menu.trigger(evt);
                
                $currentTrigger = $this;
                if (e.data.build) {
                    var built = e.data.build($currentTrigger, e);
                    // abort if build() returned false
                    if (built === false) {
                        return;
                    }
                    
                    // dynamically build menu on invocation
                    e.data = $.extend(true, {}, defaults, e.data, built || {});

                    // abort if there are no items to display
                    if (!e.data.items || $.isEmptyObject(e.data.items)) {
                        // Note: jQuery captures and ignores errors from event handlers
                        if (window.console) {
                            (console.error || console.log)("No items specified to show in contextMenu");
                        }
                        
                        throw new Error('No Items sepcified');
                    }
                    
                    // backreference for custom command type creation
                    e.data.$trigger = $currentTrigger;
                    
                    op.create(e.data);
                }
                // show menu
                op.show.call($this, e.data, e.pageX, e.pageY);
            }
        },
        // contextMenu left-click trigger
        click: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).trigger($.Event("contextmenu", { data: e.data, pageX: e.pageX, pageY: e.pageY }));
        },
        // contextMenu right-click trigger
        mousedown: function(e) {
            // register mouse down
            var $this = $(this);
            
            // hide any previous menus
            if ($currentTrigger && $currentTrigger.length && !$currentTrigger.is($this)) {
                $currentTrigger.data('contextMenu').$menu.trigger('contextmenu:hide');
            }
            
            // activate on right click
            if (e.button == 2) {
                $currentTrigger = $this.data('contextMenuActive', true);
            }
        },
        // contextMenu right-click trigger
        mouseup: function(e) {
            // show menu
            var $this = $(this);
            if ($this.data('contextMenuActive') && $currentTrigger && $currentTrigger.length && $currentTrigger.is($this) && !$this.hasClass('context-menu-disabled')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $currentTrigger = $this;
                $this.trigger($.Event("contextmenu", { data: e.data, pageX: e.pageX, pageY: e.pageY }));
            }
            
            $this.removeData('contextMenuActive');
        },
        // contextMenu hover trigger
        mouseenter: function(e) {
            var $this = $(this),
                $related = $(e.relatedTarget),
                $document = $(document);
            
            // abort if we're coming from a menu
            if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                return;
            }
            
            // abort if a menu is shown
            if ($currentTrigger && $currentTrigger.length) {
                return;
            }
            
            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
            hoveract.data = e.data;
            $document.on('mousemove.contextMenuShow', handle.mousemove);
            hoveract.timer = setTimeout(function() {
                hoveract.timer = null;
                $document.off('mousemove.contextMenuShow');
                $currentTrigger = $this;
                $this.trigger($.Event("contextmenu", { data: hoveract.data, pageX: hoveract.pageX, pageY: hoveract.pageY }));
            }, e.data.delay );
        },
        // contextMenu hover trigger
        mousemove: function(e) {
            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
        },
        // contextMenu hover trigger
        mouseleave: function(e) {
            // abort if we're leaving for a menu
            var $related = $(e.relatedTarget);
            if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                return;
            }
            
            try {
                clearTimeout(hoveract.timer);
            } catch(e) {}
            
            hoveract.timer = null;
        },
        
        // click on layer to hide contextMenu
        layerClick: function(e) {
            var $this = $(this),
                root = $this.data('contextMenuRoot'),
                mouseup = false,
                button = e.button,
                x = e.pageX,
                y = e.pageY,
                target, 
                offset,
                selectors;
                
            e.preventDefault();
            e.stopImmediatePropagation();
            
            // This hack looks about as ugly as it is
            // Firefox 12 (at least) fires the contextmenu event directly "after" mousedown
            // for some reason `root.$layer.hide(); document.elementFromPoint()` causes this
            // contextmenu event to be triggered on the uncovered element instead of on the
            // layer (where every other sane browser, including Firefox nightly at the time)
            // triggers the event. This workaround might be obsolete by September 2012.
            $this.on('mouseup', function() {
                mouseup = true;
            });
            setTimeout(function() {
                var $window, hideshow;
                // test if we need to reposition the menu
                if ((root.trigger == 'left' && button == 0) || (root.trigger == 'right' && button == 2)) {
                    if (document.elementFromPoint) {
                        root.$layer.hide();
                        target = document.elementFromPoint(x - $win.scrollLeft(), y - $win.scrollTop());
                        root.$layer.show();

                        selectors = [];
                        for (var s in namespaces) {
                            selectors.push(s);
                        }

                        target = $(target).closest(selectors.join(', '));

                        if (target.length) {
                            if (target.is(root.$trigger[0])) {
                                root.position.call(root.$trigger, root, x, y);
                                return;
                            }
                        }
                    } else {
                        offset = root.$trigger.offset();
                        $window = $(window);
                        // while this looks kinda awful, it's the best way to avoid
                        // unnecessarily calculating any positions
                        offset.top += $window.scrollTop();
                        if (offset.top <= e.pageY) {
                            offset.left += $window.scrollLeft();
                            if (offset.left <= e.pageX) {
                                offset.bottom = offset.top + root.$trigger.outerHeight();
                                if (offset.bottom >= e.pageY) {
                                    offset.right = offset.left + root.$trigger.outerWidth();
                                    if (offset.right >= e.pageX) {
                                        // reposition
                                        root.position.call(root.$trigger, root, x, y);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }

                hideshow = function(e) {
                    if (e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }

                    root.$menu.trigger('contextmenu:hide');
                    if (target && target.length) {
                        setTimeout(function() {
                            target.contextMenu({x: x, y: y});
                        }, 50);
                    }
                };
            
                if (mouseup) {
                    // mouseup has already happened
                    hideshow();
                } else {
                    // remove only after mouseup has completed
                    $this.on('mouseup', hideshow);
                }
            }, 50);
        },
        // key handled :hover
        keyStop: function(e, opt) {
            if (!opt.isInput) {
                e.preventDefault();
            }
            
            e.stopPropagation();
        },
        key: function(e) {
            var opt = $currentTrigger.data('contextMenu') || {},
                $children = opt.$menu.children(),
                $round;

            switch (e.keyCode) {
                case 9:
                case 38: // up
                    handle.keyStop(e, opt);
                    // if keyCode is [38 (up)] or [9 (tab) with shift]
                    if (opt.isInput) {
                        if (e.keyCode == 9 && e.shiftKey) {
                            e.preventDefault();
                            opt.$selected && opt.$selected.find('input, textarea, select').blur();
                            opt.$menu.trigger('prevcommand');
                            return;
                        } else if (e.keyCode == 38 && opt.$selected.find('input, textarea, select').prop('type') == 'checkbox') {
                            // checkboxes don't capture this key
                            e.preventDefault();
                            return;
                        }
                    } else if (e.keyCode != 9 || e.shiftKey) {
                        opt.$menu.trigger('prevcommand');
                        return;
                    }
                    // omitting break;
                    
                // case 9: // tab - reached through omitted break;
                case 40: // down
                    handle.keyStop(e, opt);
                    if (opt.isInput) {
                        if (e.keyCode == 9) {
                            e.preventDefault();
                            opt.$selected && opt.$selected.find('input, textarea, select').blur();
                            opt.$menu.trigger('nextcommand');
                            return;
                        } else if (e.keyCode == 40 && opt.$selected.find('input, textarea, select').prop('type') == 'checkbox') {
                            // checkboxes don't capture this key
                            e.preventDefault();
                            return;
                        }
                    } else {
                        opt.$menu.trigger('nextcommand');
                        return;
                    }
                    break;
                
                case 37: // left
                    handle.keyStop(e, opt);
                    if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                        break;
                    }
                
                    if (!opt.$selected.parent().hasClass('context-menu-root')) {
                        var $parent = opt.$selected.parent().parent();
                        opt.$selected.trigger('contextmenu:blur');
                        opt.$selected = $parent;
                        return;
                    }
                    break;
                    
                case 39: // right
                    handle.keyStop(e, opt);
                    if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                        break;
                    }
                    
                    var itemdata = opt.$selected.data('contextMenu') || {};
                    if (itemdata.$menu && opt.$selected.hasClass('context-menu-submenu')) {
                        opt.$selected = null;
                        itemdata.$selected = null;
                        itemdata.$menu.trigger('nextcommand');
                        return;
                    }
                    break;
                
                case 35: // end
                case 36: // home
                    if (opt.$selected && opt.$selected.find('input, textarea, select').length) {
                        return;
                    } else {
                        (opt.$selected && opt.$selected.parent() || opt.$menu)
                            .children(':not(.disabled, .not-selectable)')[e.keyCode == 36 ? 'first' : 'last']()
                            .trigger('contextmenu:focus');
                        e.preventDefault();
                        return;
                    }
                    break;
                    
                case 13: // enter
                    handle.keyStop(e, opt);
                    if (opt.isInput) {
                        if (opt.$selected && !opt.$selected.is('textarea, select')) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    }
                    opt.$selected && opt.$selected.trigger('mouseup');
                    return;
                    
                case 32: // space
                case 33: // page up
                case 34: // page down
                    // prevent browser from scrolling down while menu is visible
                    handle.keyStop(e, opt);
                    return;
                    
                case 27: // esc
                    handle.keyStop(e, opt);
                    opt.$menu.trigger('contextmenu:hide');
                    return;
                    
                default: // 0-9, a-z
                    var k = (String.fromCharCode(e.keyCode)).toUpperCase();
                    if (opt.accesskeys[k]) {
                        // according to the specs accesskeys must be invoked immediately
                        opt.accesskeys[k].$node.trigger(opt.accesskeys[k].$menu
                            ? 'contextmenu:focus'
                            : 'mouseup'
                        );
                        return;
                    }
                    break;
            }
            // pass event to selected item, 
            // stop propagation to avoid endless recursion
            e.stopPropagation();
            opt.$selected && opt.$selected.trigger(e);
        },

        // select previous possible command in menu
        prevItem: function(e) {
            e.stopPropagation();
            var opt = $(this).data('contextMenu') || {};

            // obtain currently selected menu
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data('contextMenu') || {};
                opt.$selected = $s;
            }
            
            var $children = opt.$menu.children(),
                $prev = !opt.$selected || !opt.$selected.prev().length ? $children.last() : opt.$selected.prev(),
                $round = $prev;
            
            // skip disabled
            while ($prev.hasClass('disabled') || $prev.hasClass('not-selectable')) {
                if ($prev.prev().length) {
                    $prev = $prev.prev();
                } else {
                    $prev = $children.last();
                }
                if ($prev.is($round)) {
                    // break endless loop
                    return;
                }
            }
            
            // leave current
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }
            
            // activate next
            handle.itemMouseenter.call($prev.get(0), e);
            
            // focus input
            var $input = $prev.find('input, textarea, select');
            if ($input.length) {
                $input.focus();
            }
        },
        // select next possible command in menu
        nextItem: function(e) {
            e.stopPropagation();
            var opt = $(this).data('contextMenu') || {};

            // obtain currently selected menu
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data('contextMenu') || {};
                opt.$selected = $s;
            }

            var $children = opt.$menu.children(),
                $next = !opt.$selected || !opt.$selected.next().length ? $children.first() : opt.$selected.next(),
                $round = $next;

            // skip disabled
            while ($next.hasClass('disabled') || $next.hasClass('not-selectable')) {
                if ($next.next().length) {
                    $next = $next.next();
                } else {
                    $next = $children.first();
                }
                if ($next.is($round)) {
                    // break endless loop
                    return;
                }
            }
            
            // leave current
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }
            
            // activate next
            handle.itemMouseenter.call($next.get(0), e);
            
            // focus input
            var $input = $next.find('input, textarea, select');
            if ($input.length) {
                $input.focus();
            }
        },
        
        // flag that we're inside an input so the key handler can act accordingly
        focusInput: function(e) {
            var $this = $(this).closest('.context-menu-item'),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            root.$selected = opt.$selected = $this;
            root.isInput = opt.isInput = true;
        },
        // flag that we're inside an input so the key handler can act accordingly
        blurInput: function(e) {
            var $this = $(this).closest('.context-menu-item'),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            root.isInput = opt.isInput = false;
        },
        
        // :hover on menu
        menuMouseenter: function(e) {
            var root = $(this).data().contextMenuRoot;
            root.hovering = true;
        },
        // :hover on menu
        menuMouseleave: function(e) {
            var root = $(this).data().contextMenuRoot;
            if (root.$layer && root.$layer.is(e.relatedTarget)) {
                root.hovering = false;
            }
        },
        
        // :hover done manually so key handling is possible
        itemMouseenter: function(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;
            
            root.hovering = true;

            // abort if we're re-entering
            if (e && root.$layer && root.$layer.is(e.relatedTarget)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            // make sure only one item is selected
            (opt.$menu ? opt : root).$menu
                .children('.hover').trigger('contextmenu:blur');

            if ($this.hasClass('disabled') || $this.hasClass('not-selectable')) {
                opt.$selected = null;
                return;
            }
            
            $this.trigger('contextmenu:focus');
        },
        // :hover done manually so key handling is possible
        itemMouseleave: function(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            if (root !== opt && root.$layer && root.$layer.is(e.relatedTarget)) {
                root.$selected && root.$selected.trigger('contextmenu:blur');
                e.preventDefault();
                e.stopImmediatePropagation();
                root.$selected = opt.$selected = opt.$node;
                return;
            }
            
            $this.trigger('contextmenu:blur');
        },
        // contextMenu item click
        itemClick: function(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot,
                key = data.contextMenuKey,
                callback;

            // abort if the key is unknown or disabled or is a menu
            if (!opt.items[key] || $this.hasClass('disabled') || $this.hasClass('context-menu-submenu')) {
                return;
            }

            e.preventDefault();
            e.stopImmediatePropagation();

            if ($.isFunction(root.callbacks[key])) {
                // item-specific callback
                callback = root.callbacks[key];
            } else if ($.isFunction(root.callback)) {
                // default callback
                callback = root.callback;                
            } else {
                // no callback, no action
                return;
            }

            // hide menu if callback doesn't stop that
            if (callback.call(root.$trigger, key, root) !== false) {
                root.$menu.trigger('contextmenu:hide');
            } else if (root.$menu.parent().length) {
                op.update.call(root.$trigger, root);
            }
        },
        // ignore click events on input elements
        inputClick: function(e) {
            e.stopImmediatePropagation();
        },
        
        // hide <menu>
        hideMenu: function(e, data) {
            var root = $(this).data('contextMenuRoot');
            op.hide.call(root.$trigger, root, data && data.force);
        },
        // focus <command>
        focusItem: function(e) {
            e.stopPropagation();
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            $this.addClass('hover')
                .siblings('.hover').trigger('contextmenu:blur');
            
            // remember selected
            opt.$selected = root.$selected = $this;
            
            // position sub-menu - do after show so dumb $.ui.position can keep up
            if (opt.$node) {
                root.positionSubmenu.call(opt.$node, opt.$menu);
            }
        },
        // blur <command>
        blurItem: function(e) {
            e.stopPropagation();
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;
            
            $this.removeClass('hover');
            opt.$selected = null;
        }
    },
    // operations
    op = {
        show: function(opt, x, y) {
            var $this = $(this),
                offset,
                css = {};

            // hide any open menus
            $('#context-menu-layer').trigger('mousedown');

            // backreference for callbacks
            opt.$trigger = $this;

            // show event
            if (opt.events.show.call($this, opt) === false) {
                $currentTrigger = null;
                return;
            }

            // create or update context menu
            op.update.call($this, opt);
            
            // position menu
            opt.position.call($this, opt, x, y);

            // make sure we're in front
            if (opt.zIndex) {
                css.zIndex = zindex($this) + opt.zIndex;
            }
            
            // add layer
            op.layer.call(opt.$menu, opt, css.zIndex);
            
            // adjust sub-menu zIndexes
            opt.$menu.find('ul').css('zIndex', css.zIndex + 1);
            
            // position and show context menu
            opt.$menu.css( css )[opt.animation.show](opt.animation.duration);
            // make options available
            $this.data('contextMenu', opt);
            // register key handler
            $(document).off('keydown.contextMenu').on('keydown.contextMenu', handle.key);
            // register autoHide handler
            if (opt.autoHide) {
                // trigger element coordinates
                var pos = $this.position();
                pos.right = pos.left + $this.outerWidth();
                pos.bottom = pos.top + this.outerHeight();
                // mouse position handler
                $(document).on('mousemove.contextMenuAutoHide', function(e) {
                    if (opt.$layer && !opt.hovering && (!(e.pageX >= pos.left && e.pageX <= pos.right) || !(e.pageY >= pos.top && e.pageY <= pos.bottom))) {
                        // if mouse in menu...
                        opt.$menu.trigger('contextmenu:hide');
                    }
                });
            }
        },
        hide: function(opt, force) {
            var $this = $(this);
            if (!opt) {
                opt = $this.data('contextMenu') || {};
            }
            
            // hide event
            if (!force && opt.events && opt.events.hide.call($this, opt) === false) {
                return;
            }
            
            if (opt.$layer) {
                // keep layer for a bit so the contextmenu event can be aborted properly by opera
                setTimeout((function($layer){ return function(){
                        $layer.remove();
                    };
                })(opt.$layer), 10);
                
                try {
                    delete opt.$layer;
                } catch(e) {
                    opt.$layer = null;
                }
            }
            
            // remove handle
            $currentTrigger = null;
            // remove selected
            opt.$menu.find('.hover').trigger('contextmenu:blur');
            opt.$selected = null;
            // unregister key and mouse handlers
            //$(document).off('.contextMenuAutoHide keydown.contextMenu'); // http://bugs.jquery.com/ticket/10705
            $(document).off('.contextMenuAutoHide').off('keydown.contextMenu');
            // hide menu
            opt.$menu && opt.$menu[opt.animation.hide](opt.animation.duration, function (){
                // tear down dynamically built menu after animation is completed.
                if (opt.build) {
                    opt.$menu.remove();
                    $.each(opt, function(key, value) {
                        switch (key) {
                            case 'ns':
                            case 'selector':
                            case 'build':
                            case 'trigger':
                                return true;

                            default:
                                opt[key] = undefined;
                                try {
                                    delete opt[key];
                                } catch (e) {}
                                return true;
                        }
                    });
                }
            });
        },
        create: function(opt, root) {
            if (root === undefined) {
                root = opt;
            }
            // create contextMenu
            opt.$menu = $('<ul class="context-menu-list ' + (opt.className || "") + '"></ul>').data({
                'contextMenu': opt,
                'contextMenuRoot': root
            });
            
            $.each(['callbacks', 'commands', 'inputs'], function(i,k){
                opt[k] = {};
                if (!root[k]) {
                    root[k] = {};
                }
            });
            
            root.accesskeys || (root.accesskeys = {});
            
            // create contextMenu items
            $.each(opt.items, function(key, item){
                var $t = $('<li class="context-menu-item ' + (item.className || "") +'"></li>'),
                    $label = null,
                    $input = null;
                
                item.$node = $t.data({
                    'contextMenu': opt,
                    'contextMenuRoot': root,
                    'contextMenuKey': key
                });
                
                // register accesskey
                // NOTE: the accesskey attribute should be applicable to any element, but Safari5 and Chrome13 still can't do that
                if (item.accesskey) {
                    var aks = splitAccesskey(item.accesskey);
                    for (var i=0, ak; ak = aks[i]; i++) {
                        if (!root.accesskeys[ak]) {
                            root.accesskeys[ak] = item;
                            item._name = item.name.replace(new RegExp('(' + ak + ')', 'i'), '<span class="context-menu-accesskey">$1</span>');
                            break;
                        }
                    }
                }
                
                if (typeof item == "string") {
                    $t.addClass('context-menu-separator not-selectable');
                } else if (item.type && types[item.type]) {
                    // run custom type handler
                    types[item.type].call($t, item, opt, root);
                    // register commands
                    $.each([opt, root], function(i,k){
                        k.commands[key] = item;
                        if ($.isFunction(item.callback)) {
                            k.callbacks[key] = item.callback;
                        }
                    });
                } else {
                    // add label for input
                    if (item.type == 'html') {
                        $t.addClass('context-menu-html not-selectable');
                    } else if (item.type) {
                        $label = $('<label></label>').appendTo($t);
                        $('<span></span>').html(item._name || item.name).appendTo($label);
                        $t.addClass('context-menu-input');
                        opt.hasTypes = true;
                        $.each([opt, root], function(i,k){
                            k.commands[key] = item;
                            k.inputs[key] = item;
                        });
                    } else if (item.items) {
                        item.type = 'sub';
                    }
                
                    switch (item.type) {
                        case 'text':
                            $input = $('<input type="text" value="1" name="context-menu-input-'+ key +'" value="">')
                                .val(item.value || "").appendTo($label);
                            break;
                    
                        case 'textarea':
                            $input = $('<textarea name="context-menu-input-'+ key +'"></textarea>')
                                .val(item.value || "").appendTo($label);

                            if (item.height) {
                                $input.height(item.height);
                            }
                            break;

                        case 'checkbox':
                            $input = $('<input type="checkbox" value="1" name="context-menu-input-'+ key +'" value="">')
                                .val(item.value || "").prop("checked", !!item.selected).prependTo($label);
                            break;

                        case 'radio':
                            $input = $('<input type="radio" value="1" name="context-menu-input-'+ item.radio +'" value="">')
                                .val(item.value || "").prop("checked", !!item.selected).prependTo($label);
                            break;
                    
                        case 'select':
                            $input = $('<select name="context-menu-input-'+ key +'">').appendTo($label);
                            if (item.options) {
                                $.each(item.options, function(value, text) {
                                    $('<option></option>').val(value).text(text).appendTo($input);
                                });
                                $input.val(item.selected);
                            }
                            break;
                        
                        case 'sub':
                            $('<span></span>').html(item._name || item.name).appendTo($t);
                            item.appendTo = item.$node;
                            op.create(item, root);
                            $t.data('contextMenu', item).addClass('context-menu-submenu');
                            item.callback = null;
                            break;
                        
                        case 'html':
                            $(item.html).appendTo($t);
                            break;
                        
                        default:
                            $.each([opt, root], function(i,k){
                                k.commands[key] = item;
                                if ($.isFunction(item.callback)) {
                                    k.callbacks[key] = item.callback;
                                }
                            });
                            
                            $('<span></span>').html(item._name || item.name || "").appendTo($t);
                            break;
                    }
                    
                    // disable key listener in <input>
                    if (item.type && item.type != 'sub' && item.type != 'html') {
                        $input
                            .on('focus', handle.focusInput)
                            .on('blur', handle.blurInput);
                        
                        if (item.events) {
                            $input.on(item.events, opt);
                        }
                    }
                
                    // add icons
                    if (item.icon) {
                        $t.addClass("icon icon-" + item.icon);
                    }
                }
                
                // cache contained elements
                item.$input = $input;
                item.$label = $label;

                // attach item to menu
                $t.appendTo(opt.$menu);
                
                // Disable text selection
                if (!opt.hasTypes && $.support.eventSelectstart) {
                    // browsers support user-select: none, 
                    // IE has a special event for text-selection
                    // browsers supporting neither will not be preventing text-selection
                    $t.on('selectstart.disableTextSelect', handle.abortevent);
                }
            });
            // attach contextMenu to <body> (to bypass any possible overflow:hidden issues on parents of the trigger element)
            if (!opt.$node) {
                opt.$menu.css('display', 'none').addClass('context-menu-root');
            }
            opt.$menu.appendTo(opt.appendTo || document.body);
        },
        update: function(opt, root) {
            var $this = this;
            if (root === undefined) {
                root = opt;
                // determine widths of submenus, as CSS won't grow them automatically
                // position:absolute > position:absolute; min-width:100; max-width:200; results in width: 100;
                // kinda sucks hard...
                opt.$menu.find('ul').andSelf().css({position: 'static', display: 'block'}).each(function(){
                    var $this = $(this);
                    $this.width($this.css('position', 'absolute').width())
                        .css('position', 'static');
                }).css({position: '', display: ''});
            }
            // re-check disabled for each item
            opt.$menu.children().each(function(){
                var $item = $(this),
                    key = $item.data('contextMenuKey'),
                    item = opt.items[key],
                    disabled = ($.isFunction(item.disabled) && item.disabled.call($this, key, root)) || item.disabled === true;

                // dis- / enable item
                $item[disabled ? 'addClass' : 'removeClass']('disabled');
                
                if (item.type) {
                    // dis- / enable input elements
                    $item.find('input, select, textarea').prop('disabled', disabled);
                    
                    // update input states
                    switch (item.type) {
                        case 'text':
                        case 'textarea':
                            item.$input.val(item.value || "");
                            break;
                            
                        case 'checkbox':
                        case 'radio':
                            item.$input.val(item.value || "").prop('checked', !!item.selected);
                            break;
                            
                        case 'select':
                            item.$input.val(item.selected || "");
                            break;
                    }
                }
                
                if (item.$menu) {
                    // update sub-menu
                    op.update.call($this, item, root);
                }
            });
        },
        layer: function(opt, zIndex) {
            // add transparent layer for click area
            // filter and background for Internet Explorer, Issue #23
            var $layer = opt.$layer = $('<div id="context-menu-layer" style="position:fixed; z-index:' + zIndex + '; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>')
                .css({height: $win.height(), width: $win.width(), display: 'block'})
                .data('contextMenuRoot', opt)
                .insertBefore(this)
                .on('contextmenu', handle.abortevent)
                .on('mousedown', handle.layerClick);
            
            // IE6 doesn't know position:fixed;
            if (!$.support.fixedPosition) {
                $layer.css({
                    'position' : 'absolute',
                    'height' : $(document).height()
                });
            }
            
            return $layer;
        }
    };

// split accesskey according to http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#assigned-access-key
function splitAccesskey(val) {
    var t = val.split(/\s+/),
        keys = [];
        
    for (var i=0, k; k = t[i]; i++) {
        k = k[0].toUpperCase(); // first character only
        // theoretically non-accessible characters should be ignored, but different systems, different keyboard layouts, ... screw it.
        // a map to look up already used access keys would be nice
        keys.push(k);
    }
    
    return keys;
}

// handle contextMenu triggers
$.fn.contextMenu = function(operation) {
    if (operation === undefined) {
        this.first().trigger('contextmenu');
    } else if (operation.x && operation.y) {
        this.first().trigger($.Event("contextmenu", {pageX: operation.x, pageY: operation.y}));
    } else if (operation === "hide") {
        var $menu = this.data('contextMenu').$menu;
        $menu && $menu.trigger('contextmenu:hide');
    } else if (operation) {
        this.removeClass('context-menu-disabled');
    } else if (!operation) {
        this.addClass('context-menu-disabled');
    }
    
    return this;
};

// manage contextMenu instances
$.contextMenu = function(operation, options) {
    if (typeof operation != 'string') {
        options = operation;
        operation = 'create';
    }
    
    if (typeof options == 'string') {
        options = {selector: options};
    } else if (options === undefined) {
        options = {};
    }
    
    // merge with default options
    var o = $.extend(true, {}, defaults, options || {}),
        $document = $(document);
    
    switch (operation) {
        case 'create':
            // no selector no joy
            if (!o.selector) {
                throw new Error('No selector specified');
            }
            // make sure internal classes are not bound to
            if (o.selector.match(/.context-menu-(list|item|input)($|\s)/)) {
                throw new Error('Cannot bind to selector "' + o.selector + '" as it contains a reserved className');
            }
            if (!o.build && (!o.items || $.isEmptyObject(o.items))) {
                throw new Error('No Items sepcified');
            }
            counter ++;
            o.ns = '.contextMenu' + counter;
            namespaces[o.selector] = o.ns;
            menus[o.ns] = o;
            
            // default to right click
            if (!o.trigger) {
                o.trigger = 'right';
            }
            
            if (!initialized) {
                // make sure item click is registered first
                $document
                    .on({
                        'contextmenu:hide.contextMenu': handle.hideMenu,
                        'prevcommand.contextMenu': handle.prevItem,
                        'nextcommand.contextMenu': handle.nextItem,
                        'contextmenu.contextMenu': handle.abortevent,
                        'mouseenter.contextMenu': handle.menuMouseenter,
                        'mouseleave.contextMenu': handle.menuMouseleave
                    }, '.context-menu-list')
                    .on('mouseup.contextMenu', '.context-menu-input', handle.inputClick)
                    .on({
                        'mouseup.contextMenu': handle.itemClick,
                        'contextmenu:focus.contextMenu': handle.focusItem,
                        'contextmenu:blur.contextMenu': handle.blurItem,
                        'contextmenu.contextMenu': handle.abortevent,
                        'mouseenter.contextMenu': handle.itemMouseenter,
                        'mouseleave.contextMenu': handle.itemMouseleave
                    }, '.context-menu-item');

                initialized = true;
            }
            
            // engage native contextmenu event
            $document
                .on('contextmenu' + o.ns, o.selector, o, handle.contextmenu);
            
            switch (o.trigger) {
                case 'hover':
                        $document
                            .on('mouseenter' + o.ns, o.selector, o, handle.mouseenter)
                            .on('mouseleave' + o.ns, o.selector, o, handle.mouseleave);                    
                    break;
                    
                case 'left':
                        $document.on('click' + o.ns, o.selector, o, handle.click);
                    break;
                /*
                default:
                    // http://www.quirksmode.org/dom/events/contextmenu.html
                    $document
                        .on('mousedown' + o.ns, o.selector, o, handle.mousedown)
                        .on('mouseup' + o.ns, o.selector, o, handle.mouseup);
                    break;
                */
            }
            
            // create menu
            if (!o.build) {
                op.create(o);
            }
            break;
        
        case 'destroy':
            if (!o.selector) {
                $document.off('.contextMenu .contextMenuAutoHide');
                $.each(namespaces, function(key, value) {
                    $document.off(value);
                });
                
                namespaces = {};
                menus = {};
                counter = 0;
                initialized = false;
                
                $('#context-menu-layer, .context-menu-list').remove();
            } else if (namespaces[o.selector]) {
                var $visibleMenu = $('.context-menu-list').filter(':visible');
                if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is(o.selector)) {
                    $visibleMenu.trigger('contextmenu:hide', {force: true});
                }
                
                try {
                    if (menus[namespaces[o.selector]].$menu) {
                        menus[namespaces[o.selector]].$menu.remove();
                    }
                    
                    delete menus[namespaces[o.selector]];
                } catch(e) {
                    menus[namespaces[o.selector]] = null;
                }
                
                $document.off(namespaces[o.selector]);
            }
            break;
        
        case 'html5':
            // if <command> or <menuitem> are not handled by the browser,
            // or options was a bool true,
            // initialize $.contextMenu for them
            if ((!$.support.htmlCommand && !$.support.htmlMenuitem) || (typeof options == "boolean" && options)) {
                $('menu[type="context"]').each(function() {
                    if (this.id) {
                        $.contextMenu({
                            selector: '[contextmenu=' + this.id +']',
                            items: $.contextMenu.fromMenu(this)
                        });
                    }
                }).css('display', 'none');
            }
            break;
        
        default:
            throw new Error('Unknown operation "' + operation + '"');
    }
    
    return this;
};

// import values into <input> commands
$.contextMenu.setInputValues = function(opt, data) {
    if (data === undefined) {
        data = {};
    }
    
    $.each(opt.inputs, function(key, item) {
        switch (item.type) {
            case 'text':
            case 'textarea':
                item.value = data[key] || "";
                break;

            case 'checkbox':
                item.selected = data[key] ? true : false;
                break;
                
            case 'radio':
                item.selected = (data[item.radio] || "") == item.value ? true : false;
                break;
            
            case 'select':
                item.selected = data[key] || "";
                break;
        }
    });
};

// export values from <input> commands
$.contextMenu.getInputValues = function(opt, data) {
    if (data === undefined) {
        data = {};
    }
    
    $.each(opt.inputs, function(key, item) {
        switch (item.type) {
            case 'text':
            case 'textarea':
            case 'select':
                data[key] = item.$input.val();
                break;

            case 'checkbox':
                data[key] = item.$input.prop('checked');
                break;
                
            case 'radio':
                if (item.$input.prop('checked')) {
                    data[item.radio] = item.value;
                }
                break;
        }
    });
    
    return data;
};

// find <label for="xyz">
function inputLabel(node) {
    return (node.id && $('label[for="'+ node.id +'"]').val()) || node.name;
}

// convert <menu> to items object
function menuChildren(items, $children, counter) {
    if (!counter) {
        counter = 0;
    }
    
    $children.each(function() {
        var $node = $(this),
            node = this,
            nodeName = this.nodeName.toLowerCase(),
            label,
            item;
        
        // extract <label><input>
        if (nodeName == 'label' && $node.find('input, textarea, select').length) {
            label = $node.text();
            $node = $node.children().first();
            node = $node.get(0);
            nodeName = node.nodeName.toLowerCase();
        }
        
        /*
         * <menu> accepts flow-content as children. that means <embed>, <canvas> and such are valid menu items.
         * Not being the sadistic kind, $.contextMenu only accepts:
         * <command>, <menuitem>, <hr>, <span>, <p> <input [text, radio, checkbox]>, <textarea>, <select> and of course <menu>.
         * Everything else will be imported as an html node, which is not interfaced with contextMenu.
         */
        
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#concept-command
        switch (nodeName) {
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#the-menu-element
            case 'menu':
                item = {name: $node.attr('label'), items: {}};
                counter = menuChildren(item.items, $node.children(), counter);
                break;
            
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-a-element-to-define-a-command
            case 'a':
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-button-element-to-define-a-command
            case 'button':
                item = {
                    name: $node.text(),
                    disabled: !!$node.attr('disabled'),
                    callback: (function(){ return function(){ $node.click(); }; })()
                };
                break;
            
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-command-element-to-define-a-command

            case 'menuitem':
            case 'command':
                switch ($node.attr('type')) {
                    case undefined:
                    case 'command':
                    case 'menuitem':
                        item = {
                            name: $node.attr('label'),
                            disabled: !!$node.attr('disabled'),
                            callback: (function(){ return function(){ $node.click(); }; })()
                        };
                        break;
                        
                    case 'checkbox':
                        item = {
                            type: 'checkbox',
                            disabled: !!$node.attr('disabled'),
                            name: $node.attr('label'),
                            selected: !!$node.attr('checked')
                        };
                        break;
                        
                    case 'radio':
                        item = {
                            type: 'radio',
                            disabled: !!$node.attr('disabled'),
                            name: $node.attr('label'),
                            radio: $node.attr('radiogroup'),
                            value: $node.attr('id'),
                            selected: !!$node.attr('checked')
                        };
                        break;
                        
                    default:
                        item = undefined;
                }
                break;
 
            case 'hr':
                item = '-------';
                break;
                
            case 'input':
                switch ($node.attr('type')) {
                    case 'text':
                        item = {
                            type: 'text',
                            name: label || inputLabel(node),
                            disabled: !!$node.attr('disabled'),
                            value: $node.val()
                        };
                        break;
                        
                    case 'checkbox':
                        item = {
                            type: 'checkbox',
                            name: label || inputLabel(node),
                            disabled: !!$node.attr('disabled'),
                            selected: !!$node.attr('checked')
                        };
                        break;
                        
                    case 'radio':
                        item = {
                            type: 'radio',
                            name: label || inputLabel(node),
                            disabled: !!$node.attr('disabled'),
                            radio: !!$node.attr('name'),
                            value: $node.val(),
                            selected: !!$node.attr('checked')
                        };
                        break;
                    
                    default:
                        item = undefined;
                        break;
                }
                break;
                
            case 'select':
                item = {
                    type: 'select',
                    name: label || inputLabel(node),
                    disabled: !!$node.attr('disabled'),
                    selected: $node.val(),
                    options: {}
                };
                $node.children().each(function(){
                    item.options[this.value] = $(this).text();
                });
                break;
                
            case 'textarea':
                item = {
                    type: 'textarea',
                    name: label || inputLabel(node),
                    disabled: !!$node.attr('disabled'),
                    value: $node.val()
                };
                break;
            
            case 'label':
                break;
            
            default:
                item = {type: 'html', html: $node.clone(true)};
                break;
        }
        
        if (item) {
            counter++;
            items['key' + counter] = item;
        }
    });
    
    return counter;
}

// convert html5 menu
$.contextMenu.fromMenu = function(element) {
    var $this = $(element),
        items = {};
        
    menuChildren(items, $this.children());
    
    return items;
};

// make defaults accessible
$.contextMenu.defaults = defaults;
$.contextMenu.types = types;

})(jQuery);

/*!
 * jQuery UI Position 1.9.0-RC1
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function( $, undefined ) {

$.ui = $.ui || {};

var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	round = Math.round,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseInt( offsets[ 0 ], 10 ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseInt( offsets[ 1 ], 10 ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}
function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[0];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[0].clientWidth;
		}

		div.remove();

		return (cachedScrollbarWidth = w1 - w2);
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow ? "" : within.element.css( "overflow-x" ),
			overflowY = within.isWindow ? "" : within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
		return {
			width: hasOverflowX ? $.position.scrollbarWidth() : 0,
			height: hasOverflowY ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[0] );
		return {
			element: withinElement,
			isWindow: isWindow,
			offset: withinElement.offset() || { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: isWindow ? withinElement.width() : withinElement.outerWidth(),
			height: isWindow ? withinElement.height() : withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		targetElem = target[0],
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	if ( targetElem.nodeType === 9 ) {
		targetWidth = target.width();
		targetHeight = target.height();
		targetOffset = { top: 0, left: 0 };
	} else if ( $.isWindow( targetElem ) ) {
		targetWidth = target.width();
		targetHeight = target.height();
		targetOffset = { top: target.scrollTop(), left: target.scrollLeft() };
	} else if ( targetElem.preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
		targetWidth = targetHeight = 0;
		targetOffset = { top: targetElem.pageY, left: targetElem.pageX };
	} else {
		targetWidth = target.outerWidth();
		targetHeight = target.outerHeight();
		targetOffset = target.offset();
	}
	// clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each(function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		// if the browser doesn't support fractions, then round for consistent results
		if ( !$.support.offsetFractions ) {
			position.left = round( position.left );
			position.top = round( position.top );
		}

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem : elem
				});
			}
		});

		if ( $.fn.bgiframe ) {
			elem.bgiframe();
		}

		if ( options.using ) {
			// adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			}
			else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
			else if ( overBottom > 0 ) {
				newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

// fraction support test
(function () {
	var testElement, testElementParent, testElementStyle, offsetLeft, i,
		body = document.getElementsByTagName( "body" )[ 0 ],
		div = document.createElement( "div" );

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px;";

	offsetLeft = $( div ).offset().left;
	$.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );
})();

// DEPRECATED
if ( $.uiBackCompat !== false ) {
	// offset option
	(function( $ ) {
		var _position = $.fn.position;
		$.fn.position = function( options ) {
			if ( !options || !options.offset ) {
				return _position.call( this, options );
			}
			var offset = options.offset.split( " " ),
				at = options.at.split( " " );
			if ( offset.length === 1 ) {
				offset[ 1 ] = offset[ 0 ];
			}
			if ( /^\d/.test( offset[ 0 ] ) ) {
				offset[ 0 ] = "+" + offset[ 0 ];
			}
			if ( /^\d/.test( offset[ 1 ] ) ) {
				offset[ 1 ] = "+" + offset[ 1 ];
			}
			if ( at.length === 1 ) {
				if ( /left|center|right/.test( at[ 0 ] ) ) {
					at[ 1 ] = "center";
				} else {
					at[ 1 ] = at[ 0 ];
					at[ 0 ] = "center";
				}
			}
			return _position.call( this, $.extend( options, {
				at: at[ 0 ] + offset[ 0 ] + " " + at[ 1 ] + offset[ 1 ],
				offset: undefined
			} ) );
		};
	}( jQuery ) );
}

}( jQuery ) );