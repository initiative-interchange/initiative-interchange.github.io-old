!function(t){function e(e){for(var n,a,u=e[0],c=e[1],l=e[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={3:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;i.push([163,0,9]),r()}({163:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),i=r(2),a=r(158),u=r.n(a);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){l=function(t,e){return new i(t,void 0,e)};var r=f(RegExp),n=RegExp.prototype,o=new WeakMap;function i(t,e,n){var i=r.call(this,t,e);return o.set(i,n||o.get(t)),i}function a(t,e){var r=o.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(i,r),i.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=a(e,this)),e},i.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=o.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var i=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==c(t[t.length-1])&&t.push(a(t,i)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)})(t)}function s(t,e,r){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t){var e,r,n,a,u=function(){var t=i.Engine.create();return t.world.gravity.scale=0,t}(),c=100;function l(){var o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e=i.Bodies.circle(t.width()/2,t.height()/2,0,{isStatic:!0,plugin:{attractors:[function(t,e){var r=1e-9*e.area;return{x:(t.position.x-e.position.x)*r,y:(t.position.y-e.position.y)*r}}]}}),i.World.add(u.world,e),r=i.Bodies.rectangle(t.width()/2,-c/2,t.width(),c,{isStatic:!0}),i.World.add(u.world,r),n=i.Bodies.rectangle(t.width()/2,t.height()+c/2,t.width(),c,{isStatic:!0}),i.World.add(u.world,n),a=t.children(".circle").toArray().map((function(t){return h.fromDOMNode(t,o)}));var l=!0,f=!1,s=void 0;try{for(var p,y=a[Symbol.iterator]();!(l=(p=y.next()).done);l=!0){var d=p.value;i.World.add(u.world,d.body)}}catch(t){f=!0,s=t}finally{try{l||null==y.return||y.return()}finally{if(f)throw s}}}l(),t.on("setActive",(function(t,e){var r=!0,n=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var c=i.value;c.setActive(c.id===e)}}catch(t){n=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(n)throw o}}})),t.click((function(e){e.target===t.get(0)&&t.trigger("setActive",-1)})),o()(window).resize((function(){return setTimeout((function(){var t=!0,o=!1,c=void 0;try{for(var f,s=a[Symbol.iterator]();!(t=(f=s.next()).done);t=!0){var p=f.value;i.World.remove(u.world,p.body)}}catch(t){o=!0,c=t}finally{try{t||null==s.return||s.return()}finally{if(o)throw c}}i.World.remove(u.world,r),i.World.remove(u.world,n),i.World.remove(u.world,e),l(!0)}),400)})),requestAnimationFrame((function(){!function e(r){if(t){var n=Math.min(r-t,100);i.Engine.update(u,n)}t=r;requestAnimationFrame(e);var o=!0;var c=!1;var l=void 0;try{for(var f,s=a[Symbol.iterator]();!(o=(f=s.next()).done);o=!0){var p=f.value,y=p.body.position,d=p.element,v=y.y-d.height()/2,h=y.x-d.width()/2;d.css("transform","translate3d(".concat(h,"px, ").concat(v,"px, 0)"))}}catch(t){c=!0,l=t}finally{try{o||null==s.return||s.return()}finally{if(c)throw l}}}();var t,e=!0,r=!1,n=void 0;try{for(var o,c=a[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){o.value.element.removeClass("hidden")}}catch(t){r=!0,n=t}finally{try{e||null==c.return||c.return()}finally{if(r)throw n}}}))}Object(i.use)(u.a),o()((function(){v(o()("#interaction-circles")),v(o()("#administration-circles")),v(o()("#philantropy-circles"))}));var h=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.element=r,this.body=n,this.element.click((function(){return r.parent().trigger("setActive",e)}))}var e,r,n;return e=t,n=[{key:"fromDOMNode",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o()(e),a=n.parent(),u=parseFloat(n.css("margin-top")),c=n.data("id"),f=Math.random()*a.width(),s=Math.random()*a.height();if(r){var p=n.css("transform"),y=l(/^matrix\(1, 0, 0, 1, ([0-9]+(?:\.[0-9]+)), ([0-9]+(?:\.[0-9]+))\)$/,{x:1,y:2}),d=p.match(y);d&&(f=parseFloat(d.groups.x)+n.width()/2,s=parseFloat(d.groups.y)+n.height()/2)}var v=i.Bodies.circle(f,s,n.width()/2+u,{plugin:{attractors:[function(t,e){return{x:1e-6*(t.position.x-e.position.x),y:1e-6*(t.position.y-e.position.y)}}]}});return new t(c,n,v)}}],(r=[{key:"setActive",value:function(t){if(this.active!==t){var e=this.body;t?(r(2.45),this.element.addClass("active")):(this.element.removeClass("active"),r(1/2.45))}function r(t){i.Body.scale(e,t,t)}}},{key:"active",get:function(){return this.element.hasClass("active")}}])&&d(e.prototype,r),n&&d(e,n),t}()}});