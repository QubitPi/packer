(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{91043:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials/library",function(){return i(11723)}])},89318:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(85893),r=i(36737),l=i(3893),s=i(65092),o=i(54659),a=i.n(o);function c(e){let{icon:t,heading:i,subheading:o,callToAction:c}=e;return(0,n.jsxs)("div",{className:a().wrapper,children:[t?(0,n.jsx)(l.Z,{size:"small",children:t}):null,(0,n.jsx)(r.Z,{level:2,size:300,weight:"semibold",className:a().heading,children:i}),(0,n.jsx)(s.Z,{className:a().subheading,children:o}),c?(0,n.jsx)("div",{className:a().callToAction,children:c}):null]})}},48688:function(e,t,i){"use strict";var n=i(85893),r=i(94184),l=i.n(r),s=i(11418),o=i.n(s);t.Z=e=>{let{children:t,className:i}=e,r=l()(o().root,i);return(0,n.jsx)("legend",{className:r,children:t})}},10794:function(e,t,i){"use strict";i.d(t,{j:function(){return N},g:function(){return w}});var n=i(85893),r=i(83952),l=i(52658),s=i(69098),o=i.n(s),a=i(94184),c=i.n(a),d=e=>{let{className:t,messages:i=[]}=e,r=c()(o().root,t);return(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)(l.O,{className:o().icon}),(0,n.jsx)("ul",{className:o().list,children:i.map((e,t)=>(0,n.jsx)("li",{className:o().message,children:e},t))})]})},u=i(74860),h=i.n(u),x=e=>{let{children:t,className:i,id:r}=e,l=c()(h().root,i);return(0,n.jsx)("span",{className:l,id:r,children:t})},p=i(37420),m=i.n(p),f=e=>{let{children:t,className:i,fontWeight:r="semibold",htmlFor:l}=e,s=c()(m().root,"hds-font-weight-".concat(r),i);return(0,n.jsx)("label",{className:s,htmlFor:l,children:t})};i(48688);var g=i(26913),_=i.n(g),j=e=>{let{"aria-describedby":t,checked:i=!1,className:r,id:l,name:s,onChange:o,onClick:a,value:d}=e,u=c()(_().root,r);return(0,n.jsx)("input",{"aria-describedby":t,checked:i,className:u,id:l,name:s,onChange:o,onClick:a,type:"checkbox",value:d||l})},b=i(94123),v=i.n(b),N=e=>{let t,i,l,{checked:s,errors:o,helperText:a,id:c,label:u,labelFontWeight:h,name:p,onClick:m=()=>void 0,onChange:g=()=>void 0}=e,_=(0,r.Me)(c);return a&&(i="checkbox-".concat(_,"-helper-text"),t=(0,n.jsx)(x,{className:v().helperText,id:i,children:a})),o&&o.length>0&&(l=(0,n.jsx)(d,{className:v().errors,messages:o})),(0,n.jsxs)("div",{className:v().root,children:[(0,n.jsx)(j,{"aria-describedby":i,checked:s,id:_,name:p,onChange:g,onClick:m}),(0,n.jsx)(f,{className:v().label,fontWeight:h,htmlFor:_,children:u}),t,l]})},y=i(12382),C=i.n(y),Z=e=>{let{"aria-describedby":t,checked:i=!1,className:r,id:l,name:s,onChange:o,onClick:a,onKeyDown:d,value:u}=e,h=c()(C().root,r);return(0,n.jsx)("input",{"aria-describedby":t,checked:i,className:h,id:l,name:s,onChange:o,onClick:a,onKeyDown:d,type:"radio",value:u||l})},k=i(12024),T=i.n(k),w=e=>{let t,i,l,{checked:s,errors:o,helperText:a,id:c,label:u,labelFontWeight:h,value:p,name:m,onChange:g,onClick:_,onKeyDown:j}=e,b=(0,r.Me)(c);return a&&(i="checkbox-".concat(b,"-helper-text"),t=(0,n.jsx)(x,{className:T().helperText,id:i,children:a})),o&&o.length>0&&(l=(0,n.jsx)(d,{className:T().errors,messages:o})),(0,n.jsxs)("div",{className:T().root,children:[(0,n.jsx)(Z,{"aria-describedby":i,checked:s,id:b,name:m,value:p,onChange:g,onClick:_,onKeyDown:j}),(0,n.jsx)(f,{className:T().label,fontWeight:h,htmlFor:b,children:u}),t,l]})}},93544:function(e,t,i){"use strict";i.d(t,{OW:function(){return l}}),i(82320);var n=i(39565),r=i(73390);function l(e,t){let i=t||e.defaultContext;return{id:e.id,collectionId:i.id,description:e.description,duration:(0,r.ZP)(e.readTime),hasInteractiveLab:!!e.handsOnLab,hasVideo:!!e.video,heading:e.name,url:(0,n.Jc)(e.slug,i.slug),productsUsed:e.productsUsed.map(e=>e.product.slug)}}i(50559)},73390:function(e,t,i){"use strict";i.d(t,{EZ:function(){return h},Y$:function(){return p},ZP:function(){return m}});var n=i(85893),r=i(6301),l=i(66301),s=i(92983),o=i(4700),a=i(16815),c=i(30558),d=i.n(c);let u={[s.ZN.openSource]:"Open Source",[s.ZN.enterprise]:"Enterprise",[s.ZN.hcp]:"HCP",[s.ZN.tfcFree]:"Terraform Cloud",[s.ZN.tfcStandard]:"Standard",[s.ZN.tfcPlus]:"Plus"};function h(e){return e.some(e=>{let{isBeta:t}=e;return t})}function x(e){return(0,n.jsx)(o.Z,{...e,type:"base",className:d().badge,size:"small"})}let p=e=>{let{edition:t,hasVideo:i,isBeta:s,isInteractive:o,products:c}=e,d=[];return s&&d.push((0,n.jsx)(x,{color:"highlight",text:"Beta"})),"open_source"!==t&&d.push((0,n.jsx)(x,{text:u[t]})),Array.isArray(c)&&c.length>0&&c.forEach(e=>{d.push((0,n.jsx)(x,{icon:(0,n.jsx)(a.Z,{productSlug:e.slug}),text:e.name},e.slug))}),i&&d.push((0,n.jsx)(x,{icon:(0,n.jsx)(r.C,{}),text:"Video"})),o&&d.push((0,n.jsx)(x,{icon:(0,n.jsx)(l.j,{}),text:"Interactive"})),d};function m(e){let t=Math.floor(e/60),i=e%60;return t&&i>0?"".concat(t,"hr ").concat(i,"min"):t?"".concat(t,"hr"):"".concat(e,"min")}},11723:function(e,t,i){"use strict";let n;i.r(t),i.d(t,{__N_SSG:function(){return eN},default:function(){return ey}});var r=i(85893),l=i(70290),s=i.n(l),o=i(61977),a=i(76587),c=i(11163),d=i(92102),u=i(67294),h=i(37386),x=i(70695),p=i(97401),m=i(34997),f=i(73795),g=i(40768),_=i(65092),j=i(56194),b=i(86599),v=i(26212),N=i.n(v),y=i(53227),C=i(91586),Z=i(44308);function k(e){let{color:t="tertiary",className:i,disableWhenNoFilters:n=!1}=e,{refine:l,canRefine:s}=(0,C.n)();return s||n?(0,r.jsx)(Z.Z,{className:i,text:"Clear Filters",icon:(0,r.jsx)(p.H,{}),color:t,size:"small",onClick:()=>l(),disabled:!s}):null}function T(e){let t,{refinement:i,refine:n}=e,{label:l,type:s,attribute:o}=i;if("disjunctive"===s&&(t=y.rP.find(e=>e.attribute===o).label),"edition"===o){let e=y.C6.find(e=>e.value===l);t=null==e?void 0:e.label}return("products"===o&&(t=b.tC[l]),t)?(0,r.jsx)("li",{children:(0,r.jsx)(j.Z,{removeButtonAriaLabel:"Remove filter ".concat(t),onRemove:()=>n(i),text:t})}):null}function w(){let{items:e}=(0,g.b)(),t=e&&e.length>0,i=e.sort((e,t)=>"products"===e.attribute?-1:"products"===t.attribute?1:"edition"===e.attribute?-1:void 0);return(0,r.jsxs)("div",{className:N().root,children:[(0,r.jsx)(_.Z,{asElement:"span",size:200,weight:"medium",className:N().label,children:t?"Your selected filters:":"No filters selected"}),(0,r.jsxs)("ul",{children:[i.flatMap(e=>e.refinements.map(t=>(0,r.jsx)(T,{refinement:t,refine:e.refine},"".concat(t.label).concat(t.type).concat(t.attribute)))),(0,r.jsx)("li",{children:(0,r.jsx)(k,{className:"g-hide-with-mobile-menu"})})]})]})}var F=i(54942),S=i(2684),I=i(16940),P=i(86452),E=i(73390),O=i(39565),z=i(89318),A=i(17657),B=i(43986),R=i(85734),V=i(8495),W=i(39062),D=i.n(W);function M(){let{pages:e,currentRefinement:t,isFirstPage:i,isLastPage:n,refine:l,nbPages:s,createURL:o}=(0,R.h)({padding:2}),a={"aria-label":"Go to previous page",icon:(0,r.jsx)(A.n,{}),color:"secondary",className:D().pageButton,size:"small",href:o(t-1)},c={"aria-label":"Go to next page",icon:(0,r.jsx)(B.k,{}),color:"secondary",className:D().pageButton,size:"small",href:o(t+1)},d=!e.includes(s-1),u=!e.includes(0);return(0,r.jsxs)("ul",{className:D().root,children:[(0,r.jsx)("li",{className:D().previousButton,children:i?(0,r.jsx)(Z.Z,{disabled:!0,...a}):(0,r.jsx)(V.Z,{...a,onClick:e=>{e.preventDefault(),l(t-1)}})}),(0,r.jsx)("li",{className:"g-hide-on-desktop g-hide-on-tablet",children:(0,r.jsxs)(_.Z,{size:200,weight:"regular",asElement:"span",className:D().pageInformation,children:["Page ",t+1," of ",s]})}),u?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{className:"g-hide-on-mobile",children:(0,r.jsx)(V.Z,{"aria-label":"Go to page 1",text:String(1),href:o(0),color:"secondary",className:D().pageButton,size:"small",onClick:e=>{e.preventDefault(),l(0)}})}),(0,r.jsx)("li",{className:"g-hide-on-mobile",children:(0,r.jsx)(Z.Z,{disabled:!0,size:"small",text:"..."})})]}):null,e.map(e=>(0,r.jsx)("li",{className:"g-hide-on-mobile",children:(0,r.jsx)(V.Z,{"aria-label":"Go to page ".concat(e+1),text:String(e+1),href:o(e),color:e===t?"primary":"secondary",className:D().pageButton,size:"small",onClick:t=>{t.preventDefault(),l(e)}})},e)),d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{className:"g-hide-on-mobile",children:(0,r.jsx)(Z.Z,{disabled:!0,size:"small",text:"..."})}),(0,r.jsx)("li",{className:"g-hide-on-mobile",children:(0,r.jsx)(V.Z,{"aria-label":"Go to page ".concat(s),text:String(s),href:o(s-1),color:"secondary",className:D().pageButton,size:"small",onClick:e=>{e.preventDefault(),l(s-1)}})})]}):null,(0,r.jsx)("li",{className:D().nextButton,children:n?(0,r.jsx)(Z.Z,{disabled:!0,...c}):(0,r.jsx)(V.Z,{...c,onClick:e=>{e.preventDefault(),l(t+1)}})})]})}function q(e){var t,i,n;return{[y.js]:{page:Number.parseInt(e.page,10),query:e.query,refinementList:{products:null!==(n=null==e?void 0:null===(i=e.product)||void 0===i?void 0:null===(t=i.split)||void 0===t?void 0:t.call(i,","))&&void 0!==n?n:[]},menu:{edition:e.edition},toggle:{hasVideo:void 0!==e.hasVideo?"true"===e.hasVideo:void 0,isInteractive:void 0!==e.isInteractive?"true"===e.isInteractive:void 0}}}}function H(e){var t,i,n,r,l;let s=e[y.js];return JSON.parse(JSON.stringify({page:s.page||void 0,query:s.query,product:(null===(i=s.refinementList)||void 0===i?void 0:null===(t=i.products)||void 0===t?void 0:t.join(","))||void 0,edition:null==s?void 0:null===(n=s.menu)||void 0===n?void 0:n.edition,hasVideo:null==s?void 0:null===(r=s.toggle)||void 0===r?void 0:r.hasVideo,isInteractive:null==s?void 0:null===(l=s.toggle)||void 0===l?void 0:l.isInteractive}))}var L=i(93544);function G(e){let{defaultTutorials:t}=e,{results:i,uiState:n}=(0,F.b)(),{hits:l}=(0,S.O)(),s=Object.keys(H(n)).length>0;if(!(null==i?void 0:i.__isArtificial)&&0===l.length)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{"aria-live":"polite",className:"g-screen-reader-only",children:"Search returned no results."}),(0,r.jsx)(z.Z,{heading:"No results",subheading:"Try adjusting your selected filters or using different keywords",callToAction:(0,r.jsx)(k,{color:"secondary"})})]});let o=null;o=s?l.map(e=>(0,r.jsx)(P.m,{id:e.id,collectionId:e.defaultContext.id,url:(0,O.Jc)(e.slug,e.defaultContext.slug),duration:(0,E.ZP)(e.readTime),heading:e.page_title,description:e.description,productsUsed:e.products,hasVideo:e.hasVideo,hasInteractiveLab:e.isInteractive},e.objectID)):t.map(e=>(0,r.jsx)(P.m,{...(0,L.OW)({...e,defaultContext:e.collectionCtx.default})},e.id));let a=i.hitsPerPage*i.page+1,c=Math.min(i.hitsPerPage*(i.page+1),i.nbHits);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{"aria-live":"polite",className:"g-screen-reader-only",children:s?"Search returned ".concat(i.nbHits," results. Displaying ").concat(a," through ").concat(c,"."):"Apply filters to search."}),(0,r.jsx)(I.Z,{fixedColumns:3,children:o}),s&&(0,r.jsx)(M,{})]})}var U=i(31868);function J(e){let{onClick:t}=e;return(0,r.jsx)(Z.Z,{text:"Filters",icon:(0,r.jsx)(U.H,{}),color:"secondary",className:"g-show-with-mobile-menu",onClick:t})}var Y=i(83543),K=i.n(Y),X=i(36407),$=i(10794),Q=i(11609),ee=i.n(Q);function et(e){let{label:t,children:i}=e;return(0,r.jsxs)("fieldset",{className:ee().root,children:[(0,r.jsx)("legend",{className:ee().label,children:t}),i]})}function ei(e){let{refine:t,selectedEdition:i}=e;return(0,r.jsxs)(et,{label:"Edition",children:[(0,r.jsx)($.g,{labelFontWeight:"regular",label:"All",value:"all",name:"edition",id:"all",checked:!(void 0!==i),onChange:()=>t(null)}),y.C6.map(e=>{let{value:n,label:l}=e,s=n===i,o="filter-".concat(n);return(0,r.jsx)($.g,{labelFontWeight:"regular",label:l,value:n,name:"edition",id:o,checked:s,onChange:()=>t(n)},n)})]})}var en=i(16815),er=i(88786),el=i.n(er);function es(e){let{refine:t,selectedProducts:i}=e;return(0,r.jsx)(et,{label:"Product",children:y.T2.map(e=>{let n=i.includes(e),l=b.tC[e],s="filter-".concat(e);return(0,r.jsx)($.j,{id:s,checked:n,onChange:()=>{t(e)},labelFontWeight:"regular",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(en.Z,{productSlug:e,className:el().icon}),l]})},e)})})}function eo(e){let{refine:t,value:i,label:n}=e,l="filter-".concat(n);return(0,r.jsx)($.j,{id:l,checked:i.isRefined,onChange:()=>{t({isRefined:i.isRefined})},label:n,labelFontWeight:"regular"})}function ea(e){let{resources:t}=e;return(0,r.jsx)(et,{label:"Resources",children:t.map(e=>(0,r.jsx)(eo,{...e},e.attribute))})}var ec=i(39778),ed=i(10781),eu=i(41735);function eh(){var e,t,i;let{refine:n}=(0,ec.H)({attribute:"edition"}),{refine:r}=(0,ed.c)({attribute:"products",operator:"and"}),{value:l,refine:s}=(0,eu.g)({attribute:"hasVideo"}),{value:o,refine:a}=(0,eu.g)({attribute:"isInteractive"}),{indexUiState:c}=(0,F.b)();return{products:{refine:r,selectedProducts:null!==(i=null==c?void 0:null===(e=c.refinementList)||void 0===e?void 0:e.products)&&void 0!==i?i:[]},edition:{refine:n,selectedEdition:null==c?void 0:null===(t=c.menu)||void 0===t?void 0:t.edition},resources:{resources:y.rP.map(e=>"hasVideo"===e.attribute?{...e,value:l,refine:s}:"isInteractive"===e.attribute?{...e,value:o,refine:a}:void 0)}}}function ex(e){let{products:t,edition:i,resources:n}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(es,{...t}),(0,r.jsx)(X.ny,{}),(0,r.jsx)(ei,{...i}),(0,r.jsx)(X.ny,{}),(0,r.jsx)(ea,{...n})]})}function ep(){let e=eh();return(0,r.jsx)(ex,{...e})}var em=i(36737);let ef=(e,t)=>{n&&clearTimeout(n),n=setTimeout(()=>t(e),y.U8)};function eg(e){let{defaultTutorials:t}=e,{query:i,refine:n}=(0,h.l)({queryHook:ef}),[l,s]=(0,u.useState)(i),[o,a]=(0,u.useState)(!1),c=eh();(0,x.l)({hitsPerPage:24,filters:"type:tutorial"});let d=()=>a(!1);return(0,r.jsxs)("div",{children:[(0,r.jsx)(em.Z,{level:1,size:500,weight:"bold",className:K().pageTitle,children:"Tutorial Library"}),(0,r.jsxs)("div",{className:K().inputFilterSection,children:[(0,r.jsx)(m.Z,{className:K().input,placeholder:"Filter results",value:l,onChange:e=>{s(e),n(e)}}),(0,r.jsx)(J,{onClick:()=>a(!0)}),(0,r.jsxs)(f.Z,{isOpen:o,label:"Tutorial filters",onDismiss:d,variant:"bottom",children:[(0,r.jsx)("button",{className:K().exitIcon,onClick:d,"aria-label":"Cancel",type:"button",children:(0,r.jsx)(p.H,{})}),(0,r.jsxs)("div",{className:K().mobileFiltersControls,children:[(0,r.jsx)(Z.Z,{text:"Done",onClick:d}),(0,r.jsx)(k,{disableWhenNoFilters:!0})]}),(0,r.jsx)(ex,{...c})]})]}),(0,r.jsx)(w,{}),(0,r.jsx)(G,{defaultTutorials:t})]})}var e_=i(44765),ej=i(58590);let eb=s()("YY0FFNI7MF","2cd9898a6c253bfa3965d2b62a4f7f3d");function ev(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"g-hide-with-mobile-menu",children:(0,r.jsx)(ep,{})}),(0,r.jsx)("div",{className:"g-show-with-mobile-menu",children:(0,r.jsxs)(e_.Z,{children:[(0,r.jsx)(X.Rd,{item:{heading:"Main Menu"}}),(0,ej.A)().map((e,t)=>(0,r.jsx)(X.Rd,{item:e},t))]})})]})}var eN=!0;function ey(e){let{layoutProps:t,defaultTutorials:i}=e,n=(0,c.useRouter)();return(0,r.jsx)(o.p,{searchClient:eb,initialUiState:q(n.query),indexName:y.js,routing:{router:(0,a.Z)(),stateMapping:{stateToRoute:H,routeToState:q}},children:(0,r.jsx)(d.Z,{...t,AlternateSidebar:ev,children:(0,r.jsx)(eg,{defaultTutorials:i})})})}},54659:function(e){e.exports={wrapper:"empty-state_wrapper__qeUx_",heading:"empty-state_heading__4bJtr",subheading:"empty-state_subheading__9l634",callToAction:"empty-state_callToAction__3wlq_"}},26913:function(e){e.exports={root:"checkbox-control_root__EWtcZ"}},12382:function(e){e.exports={root:"radio-control_root__jPM8O"}},69098:function(e){e.exports={root:"errors_root__uqP_E",icon:"errors_icon__8Kwa_",list:"errors_list__sn9Yx",message:"errors_message__ezCS9 hds-typography-body-100 hds-font-weight-medium"}},74860:function(e){e.exports={root:"helper-text_root__j8qxW hds-typography-body-100 hds-font-weight-regular"}},37420:function(e){e.exports={root:"label_root__LV5_v hds-typography-body-200"}},11418:function(e){e.exports={root:"legend_root__T3rOV hds-typography-body-200 hds-font-weight-semibold"}},94123:function(e){e.exports={root:"checkbox-field_root__CKXPK",label:"checkbox-field_label__Hd7dj",helperText:"checkbox-field_helperText__N39Ce",errors:"checkbox-field_errors__wjMl9"}},12024:function(e){e.exports={root:"radio-field_root__J75uv",label:"radio-field_label__x53qW",helperText:"radio-field_helperText__NMG_C",errors:"radio-field_errors__AnKps"}},30558:function(e){e.exports={list:"badges_list__SRNdD",listItem:"badges_listItem__U5Grt hds-font-weight-medium hds-typography-display-100",seperator:"badges_seperator__83Ve8",badge:"badges_badge__md5Sb"}},26212:function(e){e.exports={root:"current-filters_root__AuESe",label:"current-filters_label__2mrR7"}},11609:function(e){e.exports={root:"filter-section_root__NJeE7 hds-typography-body-300",label:"filter-section_label__6TWcU hds-typography-body-100 hds-font-weight-semibold"}},39062:function(e){e.exports={root:"pagination_root__luRXl",previousButton:"pagination_previousButton__MhaEr",nextButton:"pagination_nextButton__OTfT4",pageInformation:"pagination_pageInformation__WF0Di"}},88786:function(e){e.exports={icon:"product-filter_icon__0uhvp"}},83543:function(e){e.exports={pageTitle:"tutorial-library_pageTitle__Y4kEv",inputFilterSection:"tutorial-library_inputFilterSection__H4HLY",input:"tutorial-library_input__jfffk",mobileFiltersControls:"tutorial-library_mobileFiltersControls__H2Bej",exitIcon:"tutorial-library_exitIcon__Tv_EO"}}},function(e){e.O(0,[6110,568,4454,1328,8460,2102,2888,9774,179],function(){return e(e.s=91043)}),_N_E=e.O()}]);