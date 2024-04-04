(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1267],{57317:function(e){var n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"codeBlockFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SbcCodeBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"chrome"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"language"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:120}};n.loc.source={body:"fragment codeBlockFields on SbcCodeBlockRecord {\n  id\n  code\n  chrome\n  language {\n    slug\n    position\n    name\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function i(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})})(e,n),t[e.name.value]=n}}),e.exports=n,e.exports.codeBlockFields=function(e,n){var a={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var l=t[n]||new Set,r=new Set,s=new Set;for(l.forEach(function(e){s.add(e)});s.size>0;){var o=s;s=new Set,o.forEach(function(e){r.has(e)||(r.add(e),(t[e]||new Set).forEach(function(e){s.add(e)}))})}return r.forEach(function(n){var t=i(e,n);t&&a.definitions.push(t)}),a}(n,"codeBlockFields")},52517:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});let i={root:"code-block",copy:"code-block-clipboard-icon"};function a(){return window&&window.analytics&&"function"==typeof window.analytics.track}n.Z={trackCodeClick:function(){a()&&window.analytics.track("Click",{category:"CodeBlock"})},trackCopy:function(){a()&&window.analytics.track("Copy",{category:"CodeBlock"})},trackTabSelect:function(e){a()&&window.analytics.track("Select CodeTab",{category:"CodeBlock",tabGroup:e})}}},71267:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var i=t(85893),a=t(67294),l=t(94184),r=t.n(l),s=t(77162),o=t.n(s);let c=(0,a.forwardRef)((e,n)=>{let{color:t="currentColor",title:l,...r}=e,s=(0,a.useMemo)(()=>l?"title-"+Math.random().toString(36).substr(2,9):void 0,[l]);return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!l,ref:n,"aria-labelledby":s,...r,children:[l?(0,i.jsx)("title",{id:s,children:l}):null,(0,i.jsxs)("g",{fill:t,children:[(0,i.jsx)("path",{d:"M11.78 5.22a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 011.06 0z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M1 3.25A2.25 2.25 0 013.25 1h9.5A2.25 2.25 0 0115 3.25v9.5A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5z",clipRule:"evenodd"})]})]})}),d=(0,a.forwardRef)((e,n)=>{let{color:t="currentColor",title:l,...r}=e,s=(0,a.useMemo)(()=>l?"title-"+Math.random().toString(36).substr(2,9):void 0,[l]);return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!l,ref:n,"aria-labelledby":s,...r,children:[l?(0,i.jsx)("title",{id:s,children:l}):null,(0,i.jsxs)("g",{fill:t,children:[(0,i.jsx)("path",{d:"M2.25 0A2.25 2.25 0 000 2.25v7.5A2.25 2.25 0 002.25 12h.25a.75.75 0 000-1.5h-.25a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v.25a.75.75 0 001.5 0v-.25A2.25 2.25 0 009.75 0h-7.5z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.25 4A2.25 2.25 0 004 6.25v7.5A2.25 2.25 0 006.25 16h7.5A2.25 2.25 0 0016 13.75v-7.5A2.25 2.25 0 0013.75 4h-7.5zM5.5 6.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z",clipRule:"evenodd"})]})]})}),u=(0,a.forwardRef)((e,n)=>{let{color:t="currentColor",title:l,...r}=e,s=(0,a.useMemo)(()=>l?"title-"+Math.random().toString(36).substr(2,9):void 0,[l]);return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!l,ref:n,"aria-labelledby":s,...r,children:[l?(0,i.jsx)("title",{id:s,children:l}):null,(0,i.jsx)("path",{fill:t,fillRule:"evenodd",d:"M3.139 2.5a.639.639 0 00-.639.639v9.722c0 .353.286.639.639.639h9.722a.639.639 0 00.639-.639V3.14a.639.639 0 00-.639-.639H3.14zM1 3.139C1 1.958 1.958 1 3.139 1h9.722C14.042 1 15 1.958 15 3.139v9.722A2.139 2.139 0 0112.861 15H3.14A2.139 2.139 0 011 12.861V3.14zm3.72 1.58a.75.75 0 011.06 0L8 6.94l2.22-2.22a.75.75 0 111.06 1.061L9.06 8l2.22 2.22a.75.75 0 11-1.06 1.06L8 9.06l-2.22 2.22a.75.75 0 01-1.06-1.06L6.94 8 4.72 5.78a.75.75 0 010-1.06z",clipRule:"evenodd"})]})});var h=t(52517),p=t(9763),f=t.n(p),m=function(e){let{className:n,getText:t,onCopyCallback:l}=e,[s,o]=(0,a.useState)(null),[p,m]=(0,a.useState)(),g=(0,a.useRef)(null);async function v(){let[e,n]=await t();if(e)return w(e);let i=!1;try{await navigator.clipboard.writeText(n),i=!0}catch(e){}return i?void(h.Z.trackCopy(),_(!0)):w("ClipboardButton failed. Text: ".concat(n,"."))}function w(e){console.error(e),_(!1)}function _(e){var n;o(e),null==g||null===(n=g.current)||void 0===n||n.focus(),"function"==typeof l&&l(e)}(0,a.useEffect)(()=>(window.clearTimeout(p),null!=s&&m(window.setTimeout(()=>o(null),!1==s?4e3:1750)),()=>clearTimeout(p)),[s]);let x="Copy",y=(0,i.jsx)(d,{className:f().svg});return!0===s?(x="Copied",y=(0,i.jsx)(c,{className:f().svg})):!1===s&&(x="Failed",y=(0,i.jsx)(u,{className:f().svg})),(0,i.jsxs)("button",{className:r()(f().button,n,{[f().isCopied]:!0==s}),"data-heap-track":h.O.copy,onClick:v,ref:g,type:"button",children:[x,y]})},g=t(34658),v=t.n(g);function w(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",children:(0,i.jsx)("path",{fill:"#000",fillRule:"evenodd",d:"M6 2.08a2.75 2.75 0 0 0-2.75 2.75v16A2.75 2.75 0 0 0 6 23.58h12a2.75 2.75 0 0 0 2.75-2.75v-11a.748.748 0 0 0-.22-.53l-7-7a.751.751 0 0 0-.53-.22m-.75 1.5H6c-.69 0-1.25.56-1.25 1.25v16c0 .691.56 1.25 1.25 1.25h12c.69 0 1.25-.559 1.25-1.25V10.58H13a.75.75 0 0 1-.75-.75V3.58Zm5.94 5.5-4.44-4.439v4.44h4.44Z",clipRule:"evenodd"})})}var _=function(e){let{showChrome:n,filename:t,getText:a,heading:l,showClipboard:r}=e;if(r&&!a)throw Error("SnippetBar was passed showClipboard without a getText function. To use the clipboard button, please also pass a getText() function, which should return [err, text], where text will be copied to the clipboard if err is falsy.");return(0,i.jsxs)("div",{className:v().root,children:[(0,i.jsxs)("div",{className:v().leftSide,children:[n?(0,i.jsxs)("div",{className:v().chrome,children:[(0,i.jsx)("div",{className:v().chromeDot}),(0,i.jsx)("div",{className:v().chromeDot}),(0,i.jsx)("div",{className:v().chromeDot})]}):null,t?(0,i.jsxs)("div",{className:v().filename,children:[(0,i.jsx)(w,{}),t]}):null,l?(0,i.jsx)("div",{className:v().heading,children:l}):null]}),(0,i.jsx)("div",{className:v().rightSide,children:r?(0,i.jsx)("div",{className:v().copyBtnContainer,children:(0,i.jsx)(m,{getText:a})}):null})]})},x=t(69938),y=t.n(x),b=t(6913),k=t.n(b),C=(0,a.forwardRef)(function(e,n){let{code:t}=e,[l,r]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{r(!0)},[]),l)?(0,i.jsx)("pre",{ref:n,style:{display:"none"},children:"string"==typeof t?(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):t}):null}),j=function(e){if(void 0===e||!1==e)return[];if("string"!=typeof e)throw Error('The highlight prop must be a string. Received a value of type "'.concat(typeof e,'" instead.'));if(!/^[-,0-9\s]+$/.test(e))throw Error('The highlight prop must be a comma-separated list of single integers or ranges with a single dash between two integers. Found invalid characters: "'.concat(e,'".'));return e.split(",").reduce((e,n)=>e.concat(function(e){let n=e.split("-");if(n.length>2)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a value with multiple dashes: "'.concat(e,'".'));if(1==n.length){let n=parseInt(e);if(n!=n)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a value that parsed to NaN: "'.concat(""===e?"<empty string>":e,'".'));return[n]}let[t,i]=n.map(e=>parseInt(e));if(t!=t||i!=i)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a range that produced a NaN: "'.concat(e,'".'));return[...Array(i-t+1).keys()].map(e=>e+t)}(n)),[])},N=function(e){let n=a.Children.toArray(e);return n.reduce((e,t,i)=>{let a=i===n.length-1,l="\n"===t,r="\n"!==t;l&&e.consecutiveNewlines++;let s=e.consecutiveNewlines>0;if((r||l&&a)&&s){e.lines.push(e.currentLine);for(let n=1;n<e.consecutiveNewlines;n++)e.lines.push("");e.currentLine=[],e.consecutiveNewlines=0}return r&&(e.currentLine.push(t),a&&e.lines.push(e.currentLine)),e},{lines:[],currentLine:[],consecutiveNewlines:0}).lines},S=function(e){let n=e.split("\n");return n.map((e,t)=>t==n.length-1&&""==e?null:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:""==e?"&nbsp;":e}},t))},L=t(14822),B=t.n(L);function R(e){let{children:n,language:t}=e;return(0,i.jsx)("pre",{className:r()(B().pre,"language-".concat(t)),children:(0,i.jsx)("code",{className:r()(B().code,"language-".concat(t)),children:n})})}function E(e){let{number:n,padRight:t}=e;return(0,i.jsxs)("div",{className:B().wrappedLinesSpacer,children:[n?(0,i.jsx)(T,{number:n,wrap:!0}):null,(0,i.jsx)(A,{padRight:t,children:"\n"})]})}function T(e){let{number:n,highlight:t,dim:a,wrap:l}=e;return(0,i.jsx)("span",{className:r()(B().LineNumber,{[B().highlight]:t,[B().dim]:a,[B().wrap]:l}),children:n})}function A(e){let{children:n,highlight:t,dim:a,padRight:l,wrap:s}=e;return(0,i.jsx)("span",{className:r()(B().LineOfCode,{[B().highlight]:t,[B().dim]:a,[B().padRight]:l,[B().wrap]:s}),children:n})}var F=function(e){let{code:n,language:t,lineNumbers:l,highlight:s,hasFloatingCopyButton:o,wrapCode:c}=e,d=j(s),u=(0,a.useMemo)(()=>{let e="string"==typeof n?S(n):N(n),t=Math.max(e.length.toString().length,1);return e.map((e,n)=>{let i=n+1,a=i.toString().padEnd(t),l=-1!==d.indexOf(i),r=d.length>0&&!l;return{children:e,number:a,highlight:l,dim:r}})},[n,d]),h=null;if(l){let e=Math.max(u.length.toString().length,1);h="".padEnd(e)}let p=!!o;return c?(0,i.jsx)(R,{language:t,children:(0,i.jsxs)("div",{className:B().wrappedLinesContainer,children:[(0,i.jsx)(E,{number:h,padRight:p}),u.map((e,n)=>{let{number:t,children:a,highlight:r,dim:s}=e;return(0,i.jsxs)("div",{className:B().wrappedLine,children:[l?(0,i.jsx)(T,{number:t,highlight:r,dim:s,wrap:!0}):null,(0,i.jsxs)(A,{highlight:r,dim:s,padRight:p,wrap:!0,children:[a,"\n"]})]},n)}),(0,i.jsx)(E,{number:h,padRight:p})]})}):(0,i.jsxs)(R,{language:t,children:[l?(0,i.jsx)("span",{className:B().numbersColumn,children:u.map((e,n)=>{let{number:t,highlight:a,dim:l}=e;return(0,i.jsx)(T,{number:t,highlight:a,dim:l},n)})}):null,(0,i.jsx)("span",{className:r()(B().linesColumn,B().styledScrollbars),children:(0,i.jsx)("span",{className:B().linesScrollableContent,children:u.map((e,n)=>{let{children:t,highlight:a,dim:l}=e;return(0,i.jsxs)(A,{highlight:a,dim:l,padRight:p,children:[t,"\n"]},n)})})})]})},M=t(57317),z=t.n(M),D=t(99441),O=t.n(D);function H(e){let{className:n,code:t,language:l,theme:s="dark",hasBarAbove:c=!1,onCopyCallBack:d,options:u={showChrome:!1,lineNumbers:!1,showClipboard:!1,showWindowBar:!1,wrapCode:!1}}=e,p=(0,a.useRef)();async function f(){try{var e,n;let t=(n=null===(e=p.current)||void 0===e?void 0:e.textContent).split("\n")[0].startsWith("$ ")?function(e){let n=e.split("\n"),t=n[0];if(t.endsWith("\\")||t.endsWith("EOF")){let n=o().escape(e).replace("\\$\\","");return o().split(n).join(" ")}let i=/^\$ /;return n.filter(e=>e.match(i)).map(e=>e.replace(i,"")).join("\n")}(n):n;return[null,t]}catch(e){return[e,null]}}let{showChrome:g,filename:v,heading:w,highlight:x,lineNumbers:b,showClipboard:j,showWindowBar:N,wrapCode:S}=u;N&&console.warn("The options.showWindowBar prop has been renamed, and will be deprecated in a future version. Please use options.showChrome instead.");let L=N||g,B=L||v||w,R=!B&&j,E="dark"==s?y().base:k().base,T="dark"==s?y().syntax:k().syntax;return(0,i.jsxs)("div",{className:r()("g-code-block",O().root,n,E,T,{[O().hasBarAbove]:c}),"data-heap-track":h.O.root,onClick:h.Z.trackCodeClick,children:[(0,i.jsx)(C,{ref:p,code:t}),B?(0,i.jsx)(_,{showChrome:L,filename:v,heading:w,getText:f,showClipboard:j}):null,(0,i.jsxs)("div",{className:O().linesContainer,children:[(0,i.jsx)(F,{code:t,language:l,highlight:x,lineNumbers:b,hasFloatingCopyButton:R,wrapCode:S}),R?(0,i.jsx)("div",{className:O().copyButtonContainer,children:(0,i.jsx)(m,{getText:f,onCopyCallback:d})}):null]})]})}H.fragmentSpec={fragment:z()};var Z=H},9763:function(e){e.exports={button:"style_button__8j_Rk",svg:"style_svg__gtvGZ"}},14822:function(e){e.exports={pre:"code-lines_pre__t8gY5",code:"code-lines_code__luWmT",LineNumber:"code-lines_LineNumber__H__E8 g-type-code",wrap:"code-lines_wrap__2pru5",highlight:"code-lines_highlight__w4Nrs",dim:"code-lines_dim__hNQb8",LineOfCode:"code-lines_LineOfCode__6Kf_L g-type-code",padRight:"code-lines_padRight__5afwQ",numbersColumn:"code-lines_numbersColumn__scIAe",linesColumn:"code-lines_linesColumn__M9Wn1",styledScrollbars:"code-lines_styledScrollbars__37_Kl",linesScrollableContent:"code-lines_linesScrollableContent__UNs3H",wrappedLinesContainer:"code-lines_wrappedLinesContainer__LJuRy",wrappedLine:"code-lines_wrappedLine___Q_sS",wrappedLinesSpacer:"code-lines_wrappedLinesSpacer__suK9m"}},34658:function(e){e.exports={root:"style_root___hL1f",leftSide:"style_leftSide__uPoap",rightSide:"style_rightSide__tzFHY",chrome:"style_chrome__b7UK3",chromeDot:"style_chromeDot__4yGL8",filename:"style_filename__lKNyi g-type-code",heading:"style_heading__1_nVl g-type-body-small-strong",copyBtnContainer:"style_copyBtnContainer__1HWoT"}},99441:function(e){e.exports={root:"style_root__i1k0c",hasBarAbove:"style_hasBarAbove__gZA5T",linesContainer:"style_linesContainer__4N_nq",copyButtonContainer:"style_copyButtonContainer__yxcuf"}},69938:function(e){e.exports={base:"theme-dark_base__RNsat",syntax:"theme-dark_syntax__QCDzs"}},6913:function(e){e.exports={base:"theme-light_base__OJoSj",syntax:"theme-light_syntax__5RM0I"}},77162:function(e,n){(function(){var e;e=function(e,n,t){var i,a;for(a="";e.length>0;)(i=e.match(n))?(a+=e.slice(0,i.index)+t(i),e=e.slice(i.index+i[0].length)):(a+=e,e="");return a},n.split=function(n){var t,i;return null==n&&(n=""),i=[],t="",e(n,/\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/,function(e){var n,a,l,r,s,o;if(e[0],o=e[1],s=e[2],n=e[3],a=e[4],l=e[5],r=e[6],null!=l)throw Error("Unmatched quote");if(t+=o||(s||n||a).replace(/\\(?=.)/,""),null!=r)return i.push(t),t=""}),t&&i.push(t),i},n.escape=function(e){return(null==e&&(e=""),null==e)?"''":e.replace(/([^A-Za-z0-9_\-.,:\/@\n])/g,"\\$1").replace(/\n/g,"'\n'")}}).call(this)}}]);