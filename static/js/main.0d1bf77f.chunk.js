(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(265)},116:function(e,t,n){},117:function(e,t,n){},22:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return Ze}),n.d(t,"b",function(){return Xe}),n.d(t,"c",function(){return Ke}),n.d(t,"d",function(){return et});var a=n(0),r=n.n(a);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=Array.isArray,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},u="object"==typeof s&&s&&s.Object===Object&&s,m="object"==typeof self&&self&&self.Object===Object&&self,q=u||m||Function("return this")(),d=q.Symbol,g=Object.prototype,V=g.hasOwnProperty,f=g.toString,w=d?d.toStringTag:void 0;var E=function(e){var t=V.call(e,w),n=e[w];try{e[w]=void 0;var a=!0}catch(o){}var r=f.call(e);return a&&(t?e[w]=n:delete e[w]),r},p=Object.prototype.toString;var v=function(e){return p.call(e)},h="[object Null]",b="[object Undefined]",y=d?d.toStringTag:void 0;var C=function(e){return null==e?void 0===e?b:h:y&&y in Object(e)?E(e):v(e)};var B=function(e){return null!=e&&"object"==typeof e},D="[object Symbol]";var O=function(e){return"symbol"==typeof e||B(e)&&C(e)==D},M=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var I=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||j.test(e)||!M.test(e)||null!=t&&e in Object(t)};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k="[object AsyncFunction]",G="[object Function]",P="[object GeneratorFunction]",T="[object Proxy]";var Y=function(e){if(!S(e))return!1;var t=C(e);return t==G||t==P||t==k||t==T},N=q["__core-js_shared__"],x=function(){var e=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var Q=function(e){return!!x&&x in e},_=Function.prototype.toString;var R=function(e){if(null!=e){try{return _.call(e)}catch(t){}try{return e+""}catch(t){}}return""},F=/^\[object .+?Constructor\]$/,L=Function.prototype,H=Object.prototype,z=L.toString,J=H.hasOwnProperty,U=RegExp("^"+z.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var W=function(e){return!(!S(e)||Q(e))&&(Y(e)?U:F).test(R(e))};var X=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=X(e,t);return W(n)?n:void 0},K=Z(Object,"create");var $=function(){this.__data__=K?K(null):{},this.size=0};var ee=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},te="__lodash_hash_undefined__",ne=Object.prototype.hasOwnProperty;var ae=function(e){var t=this.__data__;if(K){var n=t[e];return n===te?void 0:n}return ne.call(t,e)?t[e]:void 0},re=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;return K?void 0!==t[e]:re.call(t,e)},ce="__lodash_hash_undefined__";var ie=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=K&&void 0===t?ce:t,this};function le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}le.prototype.clear=$,le.prototype.delete=ee,le.prototype.get=ae,le.prototype.has=oe,le.prototype.set=ie;var Ae=le;var se=function(){this.__data__=[],this.size=0};var ue=function(e,t){return e===t||e!==e&&t!==t};var me=function(e,t){for(var n=e.length;n--;)if(ue(e[n][0],t))return n;return-1},qe=Array.prototype.splice;var de=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,!0)};var ge=function(e){var t=this.__data__,n=me(t,e);return n<0?void 0:t[n][1]};var Ve=function(e){return me(this.__data__,e)>-1};var fe=function(e,t){var n=this.__data__,a=me(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function we(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}we.prototype.clear=se,we.prototype.delete=de,we.prototype.get=ge,we.prototype.has=Ve,we.prototype.set=fe;var Ee=we,pe=Z(q,"Map");var ve=function(){this.size=0,this.__data__={hash:new Ae,map:new(pe||Ee),string:new Ae}};var he=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var be=function(e,t){var n=e.__data__;return he(t)?n["string"==typeof t?"string":"hash"]:n.map};var ye=function(e){var t=be(this,e).delete(e);return this.size-=t?1:0,t};var Ce=function(e){return be(this,e).get(e)};var Be=function(e){return be(this,e).has(e)};var De=function(e,t){var n=be(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Oe.prototype.clear=ve,Oe.prototype.delete=ye,Oe.prototype.get=Ce,Oe.prototype.has=Be,Oe.prototype.set=De;var Me=Oe,je="Expected a function";function Ie(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(je);var n=function n(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var c=e.apply(this,a);return n.cache=o.set(r,c)||o,c};return n.cache=new(Ie.Cache||Me),n}Ie.Cache=Me;var Se=Ie,ke=500;var Ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pe=/\\(\\)?/g,Te=function(e){var t=Se(e,function(e){return n.size===ke&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ge,function(e,n,a,r){t.push(a?r.replace(Pe,"$1"):n||e)}),t});var Ye=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},Ne=1/0,xe=d?d.prototype:void 0,Qe=xe?xe.toString:void 0;var _e=function e(t){if("string"==typeof t)return t;if(A(t))return Ye(t,e)+"";if(O(t))return Qe?Qe.call(t):"";var n=t+"";return"0"==n&&1/t==-Ne?"-0":n};var Re=function(e){return null==e?"":_e(e)};var Fe=function(e,t){return A(e)?e:I(e,t)?[e]:Te(Re(e))},Le=1/0;var He=function(e){if("string"==typeof e||O(e))return e;var t=e+"";return"0"==t&&1/e==-Le?"-0":t};var ze=function(e,t){for(var n=0,a=(t=Fe(t,e)).length;null!=e&&n<a;)e=e[He(t[n++])];return n&&n==a?e:void 0};var Je=function(e,t,n){var a=null==e?void 0:ze(e,t);return void 0===a?n:a},Ue=Object(a.createContext)({initialized:!1,connected:!1,deviceName:"",player:null,playerController:null});var We=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"load",value:function(){return new Promise(function(t,n){window.__onGCastApiAvailable=function(n){return e.onGCastApiAvailable(n,t)},e.loadCastSDK().then(function(){console.warn("Cast sender lib has been loaded successfully")}).catch(function(e){console.warn("Cast sender lib loading failed",e),n(e)})})}},{key:"loadCastSDK",value:function(){return window.cast&&window.cast.framework?Promise.resolve():(e="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",new Promise(function(t,n){var a=!1,r=document.getElementsByTagName("script")[0],o=document.createElement("script");o.type="text/javascript",o.src=e,o.async=!0,o.onload=o.onreadystatechange=function(){a||this.readyState&&"complete"!==this.readyState||(a=!0,t(this))},o.onerror=o.onabort=n,r&&r.parentNode&&r.parentNode.insertBefore(o,r)}));var e}},{key:"onGCastApiAvailable",value:function(e,t){e?t():console.warn("Google cast API isn't available yet")}}],(n=null)&&o(t.prototype,n),a&&o(t,a),e}(),Xe=function(e){var t=e.children,n=e.receiverApplicationId,o=e.autoJoinPolicy,c=void 0===o?Je(window.chrome,"cast.AutoJoinPolicy.ORIGIN_SCOPED","origin_scoped"):o,i=e.language,A=e.resumeSavedSession,s=l(Object(a.useState)(!1),2),u=s[0],m=s[1],q=l(Object(a.useState)(""),2),d=q[0],g=q[1],V=l(Object(a.useState)(!1),2),f=V[0],w=V[1],E=l(Object(a.useState)(null),2),p=E[0],v=E[1],h=l(Object(a.useState)(null),2),b=h[0],y=h[1];Object(a.useEffect)(function(){We.load().then(function(){w(!0)})},[]);var C=Object(a.useCallback)(function(){m(!1),g(""),v(null),y(null)},[]);Object(a.useEffect)(function(){if(window.cast){window.cast.framework.CastContext.getInstance().setOptions({receiverApplicationId:n,resumeSavedSession:A,autoJoinPolicy:c,language:i});var e=new window.cast.framework.RemotePlayer;v(e),y(new window.cast.framework.RemotePlayerController(e)),window.cast.framework.CastContext.getInstance().addEventListener(window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,function(e){e.sessionState!==window.cast.framework.SessionState.SESSION_RESUMED&&e.sessionState!==window.cast.framework.SessionState.SESSION_STARTED||m(!0),e.sessionState===window.cast.framework.SessionState.SESSION_ENDED&&(C(),m(!1))})}},[c,f,i,n,C,A]),Object(a.useEffect)(function(){var e=function(e){m(!0);var t=window.cast.framework.CastContext.getInstance().getCurrentSession();t&&g(t.getSessionObj().receiver.friendlyName)};return b&&b.addEventListener(window.cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,e),function(){b&&b.removeEventListener(window.cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,e)}},[b]);var B=Object(a.useMemo)(function(){return{connected:u,initialized:f,deviceName:d,player:p,playerController:b}},[f,u,d,p,b]);return r.a.createElement(Ue.Provider,{value:B},t)},Ze=function(e){var t=i({},e);return Object(a.createElement)("google-cast-launcher",i({style:{cursor:"pointer"}},t))};Ze.propTypes={};var Ke=function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({},Object(a.useContext)(Ue))},$e="data:image/png;base64,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",et=function(){var e=Ke(),t=e.connected,n=e.player,r=e.playerController,o=l(Object(a.useState)([]),2),c=o[0],i=o[1],A=l(Object(a.useState)(0),2),s=A[0],u=A[1],m=l(Object(a.useState)(0),2),q=m[0],d=m[1],g=l(Object(a.useState)(!1),2),V=g[0],f=g[1],w=l(Object(a.useState)(!1),2),E=w[0],p=w[1],v=l(Object(a.useState)(!1),2),h=v[0],b=v[1],y=l(Object(a.useState)("No title"),2),C=y[0],B=y[1],D=l(Object(a.useState)($e),2),O=D[0],M=D[1];Object(a.useEffect)(function(){t||(i([]),u(0),d(0),f(!1),p(!1),b(!1),M($e),B("No title"))},[t]),Object(a.useEffect)(function(){function e(e){u(e.value)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,e)}},[r,u]),Object(a.useEffect)(function(){function e(e){d(e.value)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.DURATION_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.DURATION_CHANGED,e)}},[r,d]),Object(a.useEffect)(function(){function e(e){f(e.value)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED,e)}},[r,f]),Object(a.useEffect)(function(){function e(e){p(e.value)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED,e)}},[r,p]),Object(a.useEffect)(function(){function e(e){b(e.value)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED,e)}},[r,b]),Object(a.useEffect)(function(){function e(e){var t=Je(e,"value.metadata.title","No title"),n=Je(e,"value.metadata.images[0].url",$e),a=Je(e,"value.tracks",[]);c.length!==a.length&&i(a),C!==t&&B(t),O!==n&&M(n)}return r&&r.addEventListener(window.cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED,e),function(){r&&r.removeEventListener(window.cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED,e)}},[r,B,C,i,c,O,M]);var j=Object(a.useCallback)(function(e){var t=window.cast.framework.CastContext.getInstance().getCurrentSession();return t?t.loadMedia(e):Promise.reject("No CastSession has been created")},[]),I=Object(a.useCallback)(function(){r&&r.playOrPause()},[r]),S=Object(a.useCallback)(function(){r&&r.muteOrUnmute()},[r]),k=Object(a.useCallback)(function(e){n&&r&&(n.currentTime=e,r.seek())},[n,r]),G=Object(a.useCallback)(function(e){n&&r&&(n.volumeLevel=e,r.setVolumeLevel())},[n,r]),P=Object(a.useCallback)(function(e,t){var n=window.cast.framework.CastContext.getInstance().getCurrentSession();if(n){var a=t||function(){var e=new window.chrome.cast.media.TextTrackStyle;return e.backgroundColor="#00000000",e.edgeType=window.chrome.cast.media.TextTrackEdgeType.DROP_SHADOW,e.fontGenericFamily=window.chrome.cast.media.TextTrackFontGenericFamily.SANS_SERIF,e.edgeColor="#000000",e.fontStyle=window.chrome.cast.media.TextTrackFontStyle.BOLD,e}(),r=new window.chrome.cast.media.EditTracksInfoRequest(e,a),o=n.getMediaSession();return o?new Promise(function(e,t){o.editTracksInfo(r,e,t)}):Promise.reject("No active media")}return Promise.reject("No active cast session")},[]);return Object(a.useMemo)(function(){return{loadMedia:j,tracks:c,editTracks:P,currentTime:s,duration:q,toggleMute:S,setVolume:G,togglePlay:I,seek:k,isMediaLoaded:V,isPaused:E,isMuted:h,title:C,thumbnail:O}},[j,c,P,s,q,S,G,I,k,V,E,h,C,O])}}).call(this,n(31))},265:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(116),n(47)),l=n(23),A=(n(117),n(22)),s=n(24);function u(){var e=Object(l.a)(["\n  box-shadow: 0 0 0 1px #ddd;\n  width: 22px;\n  height: 22px;\n  background-color: #fff;\n  border-radius: 50%;\n  color: #999;\n  display: inline-block;\n  font-size: 0.75em;\n  font-weight: 500;\n  line-height: 22px;\n  margin-right: 10px;\n  text-align: center;\n"]);return u=function(){return e},e}function m(){var e=Object(l.a)(["\n  padding: 0 20px;\n  text-align: left;\n  border-top-right-radius: 0.3em;\n  border-top-left-radius: 0.3em;\n  background-color: white;\n  border: 1px solid #dedede;\n"]);return m=function(){return e},e}function q(){var e=Object(l.a)(["\n  width: 100%;\n  margin-bottom: 2em;\n  margin-top: 2em;\n\n  p {\n    color: #999;\n    font-size: 0.9rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    display: inline-block;\n  }\n\n  pre {\n    border-bottom-right-radius: 0.3em;\n    border-bottom-left-radius: 0.3em;\n\n    background: #fafafa;\n    border: 1px solid #dedede;\n    border-top: none;\n    margin: 0;\n    overflow-x: auto;\n    padding: 20px;\n    text-align: left;\n  }\n"]);return q=function(){return e},e}var d=s.a.div(q()),g=s.a.div(m()),V=s.a.div(u()),f=function(e){var t=e.title,n=e.step,a=e.children;return r.a.createElement(d,null,r.a.createElement(g,null,r.a.createElement(V,null,n),r.a.createElement("p",null,t)),r.a.createElement("pre",null,a))},w=n(16),E=n.n(w),p=n(38),v=n.n(p),h=n(35),b=n.n(h),y=n(37),C=n.n(y),B=n(5),D=n.n(B),O=n(36),M=n.n(O),j=n(18),I=n.n(j),S=n(20),k=n.n(S),G=n(30),P=n.n(G),T=function(){var e=Object(A.c)(),t=e.initialized,n=e.connected,a=e.deviceName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{gutterBottom:!0,variant:"h5"},"useCast"),r.a.createElement(E.a,{container:!0,spacing:16},r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(k.a,null,r.a.createElement(b.a,null,r.a.createElement(M.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,null,"Key"),r.a.createElement(D.a,{align:"right"},"Value"))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"initialized"),r.a.createElement(D.a,{align:"right"},String(t))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"connected"),r.a.createElement(D.a,{align:"right"},String(n))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"deviceName"),r.a.createElement(D.a,{align:"right"},a))))))))},Y=n(103),N=n.n(Y),x=n(104),Q=n.n(x),_=n(109),R=n.n(_),F=n(48),L=n.n(F),H=n(64),z=n.n(H),J=n(105),U=n.n(J),W=n(106),X=n.n(W),Z=n(108),K=n.n(Z),$=n(107),ee=n.n($),te=function(){var e=Object(A.c)().connected,t=Object(A.d)(),n=t.currentTime,o=t.duration,c=t.isPaused,l=t.isMediaLoaded,s=t.togglePlay,u=t.seek,m=t.isMuted,q=t.toggleMute,d=t.title,g=t.thumbnail,V=t.loadMedia,f=t.tracks,w=t.editTracks,p=Object(a.useState)(0),h=Object(i.a)(p,2),y=h[0],B=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{gutterBottom:!0,style:{marginTop:"1rem"},variant:"h5"},"useCastPlayer"),r.a.createElement(E.a,{container:!0,spacing:16},r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(k.a,null,r.a.createElement(b.a,null,r.a.createElement(M.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,null,"Key"),r.a.createElement(D.a,{align:"right"},"type"),r.a.createElement(D.a,{align:"right"},"Current value"))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"isPaused"),r.a.createElement(D.a,{align:"right"},r.a.createElement("pre",null,"boolean")),r.a.createElement(D.a,{align:"right"},String(c))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"isMediaLoaded"),r.a.createElement(D.a,{align:"right"},r.a.createElement("pre",null,"boolean")),r.a.createElement(D.a,{align:"right"},String(l))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"isMuted"),r.a.createElement(D.a,{align:"right"},r.a.createElement("pre",null,"boolean")),r.a.createElement(D.a,{align:"right"},String(m))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"currentTime"),r.a.createElement(D.a,{align:"right"},r.a.createElement("pre",null,"number")),r.a.createElement(D.a,{align:"right"},n.toFixed(2))),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"th",scope:"row"},"duration"),r.a.createElement(D.a,{align:"right"},r.a.createElement("pre",null,"number")),r.a.createElement(D.a,{align:"right"},o.toFixed(2))))))),r.a.createElement(E.a,{item:!0,xs:12,md:6},r.a.createElement(N.a,{style:{display:"flex"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"auto"}},r.a.createElement(Q.a,{style:{flex:"1 0 auto"}},r.a.createElement(P.a,{component:"h5",variant:"h5"},d),r.a.createElement(P.a,{variant:"subtitle1",color:"textSecondary"},"TODO")),r.a.createElement("div",null,r.a.createElement(z.a,{disabled:!l,"aria-label":"Play/pause",onClick:s},c?r.a.createElement(U.a,null):r.a.createElement(X.a,null)),r.a.createElement(z.a,{disabled:!l,"aria-label":"Mute/Unmute",onClick:q},m?r.a.createElement(ee.a,null):r.a.createElement(K.a,null)))),r.a.createElement(R.a,{image:g,style:{width:"150px"},title:"Live from space album cover"})),r.a.createElement(k.a,null,r.a.createElement(v.a,{id:"seekTime",label:"seekTime",value:y,type:"number",onChange:function(e){B(Number(e.target.value))},margin:"normal",helperText:"Time (in seconds) to seek to"}),r.a.createElement(L.a,{onClick:function(){return u(y)}},"Seek"))),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(k.a,null,r.a.createElement(b.a,null,r.a.createElement(M.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,null,"Track Id"),r.a.createElement(D.a,{align:"right"},"TrackContent Type"),r.a.createElement(D.a,{align:"right"},"Type"),r.a.createElement(D.a,{align:"right"},"Subtype"),r.a.createElement(D.a,{align:"right"},"Language"),r.a.createElement(D.a,{align:"right"},"Action"))),r.a.createElement(C.a,null,f.map(function(e){return r.a.createElement(I.a,{key:e.trackId},r.a.createElement(D.a,{component:"th",scope:"row"},e.trackId),r.a.createElement(D.a,{align:"right"},e.trackContentType),r.a.createElement(D.a,{align:"right"},e.type),r.a.createElement(D.a,{align:"right"},e.subtype),r.a.createElement(D.a,{align:"right"},e.language),r.a.createElement(D.a,{align:"right"},r.a.createElement(L.a,{onClick:function(){w([e.trackId])}},"Choose")))}))))),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(k.a,null,r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0,xs:8},r.a.createElement(v.a,{fullWidth:!0,disabled:!0,id:"receiverApplicationId",label:"contentId",value:"https://vod-dash.sfanytime.com/trailers/31500/31554/31554.ism/Manifest.mpd",onChange:function(e){},margin:"normal",helperText:"Manifest URL to load to cast"})),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement(L.a,{disabled:!e,variant:"contained",color:"primary",onClick:function(){var e=new window.chrome.cast.media.MediaInfo("https://vod-dash.sfanytime.com/trailers/31500/31554/31554.ism/Manifest.mpd","application/dash+xml"),t=new window.chrome.cast.media.MovieMediaMetadata;t.title="Unga Agnes",t.images=[new window.chrome.cast.Image("https://sfanytime-images-prod.secure.footprint.net/COVERM/0ba94c2c-bccb-4c0e-9d6c-a98b010cf567_COVERM_SV.jpg?w=375&fm=pjpg&s=28f193cb6db6a2b5d34ba3838672fb85")],e.metadata=t;var n=new window.chrome.cast.media.LoadRequest(e);V(n)}},"Load Media")))))))};function ne(){var e=Object(l.a)(["\n  max-width: 960px;\n  margin: auto;\n"]);return ne=function(){return e},e}function ae(){var e=Object(l.a)(["\n  color: #fff;\n  text-align: center;\n"]);return ae=function(){return e},e}var re=s.a.h1(ae()),oe=s.a.div(ne()),ce=function(){var e=Object(a.useState)("CC1AD845"),t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(oe,null,r.a.createElement(re,null,"React Cast Sender"),r.a.createElement(f,{step:1,title:"Install"},"yarn add react-cast-sender"),r.a.createElement(f,{step:2,title:"Install peer Dependencies"},"yarn add react ",r.a.createElement("br",null),"yarn add react-dom ",r.a.createElement("br",null),"yarn add styled-components"),r.a.createElement(f,{step:3,title:"Add CastProvider"},"import { CastProvider } from 'react-cast-sender';\n\nconst App = ({ children }) => {\n  return <CastProvider receiverApplicationId=\"my-cast-id\">\n    {children}\n  </CastProvider>\n}"))),r.a.createElement(oe,null,r.a.createElement("h2",null,"Documentation"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(v.a,{disabled:!0,id:"receiverApplicationId",label:"receiverApplicationId",value:n,onChange:function(e){o(e.target.value)},margin:"normal",helperText:"Select reveiver Application Id to use in examples below"})),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement("div",{style:{width:"64px"}},r.a.createElement(A.a,null)))),r.a.createElement(A.b,{receiverApplicationId:n},r.a.createElement("h3",null,"Hooks"),r.a.createElement(T,null),r.a.createElement(te,null),r.a.createElement("h3",null,"Components"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.0d1bf77f.chunk.js.map