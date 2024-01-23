"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4439],{85034:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(67294)),a=r(56281),i=r(99790);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,P=/youtube-nocookie\.com/,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var t,r,l,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,o=h(f);if(t){var a=h(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(e=r)&&("object"===n(e)||"function"==typeof e)?e:d(this)});function f(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,f);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(d(e=u.call.apply(u,[this].concat(r))),"callPlayer",a.callPlayer),b(d(e),"parsePlaylist",function(t){return t instanceof Array?{listType:"playlist",playlist:t.map(e.getID).join(",")}:v.test(t)?{listType:"playlist",list:s(t.match(v),2)[1].replace(/^UC/,"UU")}:m.test(t)?{listType:"user_uploads",list:s(t.match(m),2)[1]}:{}}),b(d(e),"onStateChange",function(t){var r=t.data,n=e.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onBufferEnd,u=n.onEnded,c=n.onReady,s=n.loop,f=n.config,y=f.playerVars,p=f.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,b=d.PLAYING,v=d.PAUSED,m=d.BUFFERING,P=d.ENDED,g=d.CUED;if(r===h&&p(),r===b&&(o(),l()),r===v&&a(),r===m&&i(),r===P){var O=!!e.callPlayer("getPlaylist");s&&!O&&(y.start?e.seekTo(y.start):e.play()),u()}r===g&&c()}),b(d(e),"mute",function(){e.callPlayer("mute")}),b(d(e),"unmute",function(){e.callPlayer("unMute")}),b(d(e),"ref",function(t){e.container=t}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array||v.test(e)?null:e.match(i.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var r=this,n=this.props,o=n.playing,i=n.muted,l=n.playsinline,u=n.controls,s=n.loop,f=n.config,y=n.onError,p=f.playerVars,d=f.embedOptions,h=this.getID(e);if(t){if(v.test(e)||m.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:h,startSeconds:(0,a.parseStartTime)(e)||p.start,endSeconds:(0,a.parseEndTime)(e)||p.end});return}(0,a.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",function(e){return e.loaded}).then(function(t){r.container&&(r.player=new t.Player(r.container,c({width:"100%",height:"100%",videoId:h,playerVars:c(c({autoplay:o?1:0,mute:i?1:0,controls:u?1:0,start:(0,a.parseStartTime)(e),end:(0,a.parseEndTime)(e),origin:window.location.origin,playsinline:l?1:0},r.parsePlaylist(e)),p),events:{onReady:function(){s&&r.player.setLoop(!0),r.props.onReady()},onStateChange:r.onStateChange,onError:function(e){return y(e.data)}},host:P.test(e)?"https://www.youtube-nocookie.com":void 0},d)))},y),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e=this.props.display;return o.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},o.default.createElement("div",{ref:this.ref}))}}],y(f.prototype,r),l&&y(f,l),f}(o.Component);t.default=g,b(g,"displayName","YouTube"),b(g,"canPlay",i.canPlay.youtube)}}]);