!function(c){function e(e){for(var n,r,t=e[0],i=e[1],o=e[2],u=0,a=[];u<t.length;u++)r=t[u],Object.prototype.hasOwnProperty.call(f,r)&&f[r]&&a.push(f[r][0]),f[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(c[n]=i[n]);for(l&&l(e);a.length;)a.shift()();return d.push.apply(d,o||[]),s()}function s(){for(var e,n=0;n<d.length;n++){for(var r=d[n],t=!0,i=1;i<r.length;i++){var o=r[i];0!==f[o]&&(t=!1)}t&&(d.splice(n--,1),e=u(u.s=r[0]))}return e}var r={},f={0:0},d=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return c[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=c,u.c=r,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(r,t,function(e){return n[e]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var n=window.webpackJsonp=window.webpackJsonp||[],t=n.push.bind(n);n.push=e,n=n.slice();for(var i=0;i<n.length;i++)e(n[i]);var l=t;d.push([190,1]),s()}({190:function(e,n,r){"use strict";r.r(n);r(64),r(76),r(148),r(90);var t=r(63);function c(e,n,r,t,i,o,u){try{var a=e[o](u),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(t,i)}var i=function(){function e(e){this.stage=e,this.$stage=document.querySelector("#"+e),this.codeReader=new t.BrowserMultiFormatReader,this.isLisning=!1}var n=e.prototype;return n.listen=function(){var i=this;return new Promise(function(){var a,r=(a=regeneratorRuntime.mark(function e(n,r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i.isLisning)return r("already listening"),e.abrupt("return");e.next=3;break;case 3:return i.$stage.hidden=!1,i.isLisning=!0,e.prev=5,e.next=8,i.codeReader.decodeFromInputVideoDevice(void 0,i.stage);case 8:t=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5);case 14:i.$stage.hidden=!0,i.isLisning?(n(t),i.isLisning=!1):r("処理が中断されました");case 16:case"end":return e.stop()}},e,null,[[5,11]])}),function(){var e=this,u=arguments;return new Promise(function(n,r){var t=a.apply(e,u);function i(e){c(t,n,r,i,o,"next",e)}function o(e){c(t,n,r,i,o,"throw",e)}i(void 0)})});return function(e,n){return r.apply(this,arguments)}}())},n.unlisten=function(){this.isLisning=!1,window.codeReader=this.codeReader,this.codeReader.stopStreams()},e}();function s(e,n,r,t,i,o,u){try{var a=e[o](u),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(t,i)}function o(a){return function(){var e=this,u=arguments;return new Promise(function(n,r){var t=a.apply(e,u);function i(e){s(t,n,r,i,o,"next",e)}function o(e){s(t,n,r,i,o,"throw",e)}i(void 0)})}}if(navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia){var u,a=document.querySelector("#try"),f=document.querySelector("#prev"),d=document.querySelector("#code");a.addEventListener("click",o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((u=u||new i("reader")).isLisning)return e.abrupt("return");e.next=4;break;case 4:a.innerHTML="読込中",a.disabled=!0,u.listen().then(function(e){e&&(d.value=e)}).catch(function(e){}).finally(function(){a.innerHTML="再読み込み",a.disabled=!1});case 7:case"end":return e.stop()}},e)}))),f.addEventListener("click",o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.unlisten();case 1:case"end":return e.stop()}},e)})))}}});