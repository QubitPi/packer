(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3936],{80698:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/validated-designs",function(){return n(4685)}])},10048:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var o=n(85893),r=n(67294);let s=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",title:s,...i}=e,a=(0,r.useMemo)(()=>s?"title-"+Math.random().toString(36).substr(2,9):void 0,[s]);return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-hidden":!s,ref:t,"aria-labelledby":a,...i,children:[s?(0,o.jsx)("title",{id:a,children:s}):null,(0,o.jsx)("path",{fill:n,d:"M12.229 5.04a.75.75 0 011.042-1.08l7.5 7.25a.75.75 0 010 1.08l-7.5 7.25a.75.75 0 11-1.042-1.08l6.166-5.96H3.75a.75.75 0 010-1.5h14.645l-6.166-5.96z"})]})})},10237:function(e,t,n){"use strict";function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=e.split(" "),o=[];for(let e=n.length-1;e>=0&&!([n[e]].concat(o).join(" ").length>t);e--)o.unshift(n[e]);return[n.slice(0,n.length-o.length).join(" "),o.join("&nbsp;")].filter(e=>""!==e).join(" ")}n.d(t,{Z:function(){return o}})},59216:function(e,t,n){"use strict";var o=n(85893),r=n(93258),s=n(81070);t.Z=function(e){let{productSlug:t,className:n,size:i="extra-large"}=e;return(0,o.jsx)(r.Z,{size:i,brandColor:"hcp"==t?"neutral-dark":t,className:n,children:(0,o.jsx)(s.Z,{productSlug:t})})}},35178:function(e,t,n){"use strict";n.d(t,{V:function(){return c},l:function(){return d}});var o=n(85893),r=n(94184),s=n.n(r),i=n(10237),a=n(91428),l=n.n(a);function c(e){let{backgroundClassName:t,startSlot:n,endSlot:r,className:i}=e;return(0,o.jsxs)("div",{className:l().root,children:[(0,o.jsx)("div",{className:s()(l().backgroundBase,t)}),(0,o.jsx)("div",{className:s()(l().rootContainer,i),children:(0,o.jsxs)("div",{className:l().rootLayout,children:[(0,o.jsx)("div",{className:s()(l().startSlot,i),children:n}),r?(0,o.jsx)("div",{className:l().endSlot,children:r}):null]})})]})}function d(e){let{heading:t,description:n,foreground:r,className:a}=e;return(0,o.jsxs)("div",{className:s()(l().textRoot,l()["foreground-".concat(r)]),children:[(0,o.jsx)("h1",{className:s()(l().textHeading,a),dangerouslySetInnerHTML:{__html:t}}),(null==n?void 0:n.length)?(0,o.jsx)("p",{className:l().textDescription,dangerouslySetInnerHTML:{__html:(0,i.Z)(n,18)}}):null]})}},20707:function(e,t,n){"use strict";var o=n(85893),r=n(25675),s=n.n(r),i=n(61553),a=n.n(i),l=n(24921),c=n.n(l),d=n(35178);t.Z=function(e){let{heading:t,description:n,isHvd:r=!1,className:i}=e;return(0,o.jsx)(d.V,{backgroundClassName:c().heroBackground,className:i,startSlot:(0,o.jsx)(d.l,{className:i,heading:t,description:null!=n?n:"",foreground:"light"}),endSlot:r?null:(0,o.jsx)("div",{className:c().heroImage,children:(0,o.jsx)(s(),{alt:"",src:a(),width:447,height:515})})})}},62166:function(e,t,n){"use strict";var o=n(85893),r=n(58866),s=n(96581),i=n(73494),a=n(78789),l=n.n(a);t.Z=function(){return(0,o.jsxs)(s.Z,{className:l().mobileMenuContainer,children:[(0,o.jsx)(s.v,{}),(0,o.jsxs)("ul",{className:l().mobileMenuNavList,children:[(0,o.jsx)(i.Rd,{item:{heading:"Main Menu"}}),(0,r.A)().map((e,t)=>(0,o.jsx)(i.Rd,{item:e},t))]})]})}},4685:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return y}});var o=n(85893),r=n(9008),s=n.n(r),i=n(90560),a=n(62166),l=n(20707),c=n(81725),d=n(47352),u=n(55013),_=n(10048),g=n(6407),h=n(59761),m=n.n(h),x=n(31633),p=n(39174),f=n(59216),j=!0,y=function(e){let{categoryGroups:t}=e;return(0,o.jsxs)(i.Z,{mobileMenuSlot:(0,o.jsx)(a.Z,{}),className:m().root,children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),(0,o.jsx)("title",{children:"HashiCorp Validated Design"}),(0,o.jsx)("meta",{name:"description",content:"HashiCorp Validated Design"})]}),(0,o.jsx)(l.Z,{heading:"HashiCorp Validated Design",isHvd:!0,className:m().hvdHero}),(0,o.jsx)("div",{className:m().categoryGroupsContainer,children:t.map(e=>(0,o.jsxs)(c.Z,{elevation:"base",className:m().categoryGroupContainer,children:[(0,o.jsxs)("section",{className:m().categoryGroupHeader,children:[(0,o.jsx)(f.Z,{size:"large",productSlug:e.product}),(0,o.jsx)(x.Z,{level:2,size:400,weight:"bold",className:m().categoryGroupHeading,children:e.title})]}),(0,o.jsx)(p.Z,{asElement:"p",weight:"medium",size:200,className:m().categoryGroupDescription,children:e.description}),(0,o.jsx)("ul",{className:m().categoryGuidesContainer,children:e.guides.map(e=>(0,o.jsx)("li",{children:(0,o.jsxs)(d.Z,{href:e.href,ariaLabel:e.title,className:m().guideCard,children:[(0,o.jsx)(x.Z,{level:3,size:200,weight:"semibold",className:m().smallHeading,children:e.title}),(0,o.jsx)(g.C,{className:m().standaloneLinkContents,icon:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_.o,{className:m().mobileOnly}),(0,o.jsx)(u.k,{className:m().tabletUp})]}),iconPosition:"trailing",inheritColor:!0,size:"medium",text:"View",textClassName:m().tabletUp})]})},e.slug))})]},e.slug))})]})}},91428:function(e){e.exports={root:"hero_root__zVlK_",backgroundBase:"hero_backgroundBase__1T_jA",rootContainer:"hero_rootContainer__k8aW_",rootLayout:"hero_rootLayout__34Vg_",startSlot:"hero_startSlot__OYVDs",hvdHero:"hero_hvdHero__E5IH9",endSlot:"hero_endSlot__twDWz",textRoot:"hero_textRoot__gLBX8","foreground-dark":"hero_foreground-dark__r_WTY","foreground-light":"hero_foreground-light__htnhC",textHeading:"hero_textHeading__NuR_8 hds-typography-display-500",textDescription:"hero_textDescription__InQl1 hds-typography-display-300"}},24921:function(e){e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},78789:function(e){e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},59761:function(e){e.exports={root:"style_root__ZMHOA",hvdHero:"style_hvdHero__Vn2cL",categoryGroupsContainer:"style_categoryGroupsContainer__FAJgz",categoryGroupContainer:"style_categoryGroupContainer__xSMhR",categoryGuidesContainer:"style_categoryGuidesContainer__cXCg0",mobileOnly:"style_mobileOnly__46PjE",tabletUp:"style_tabletUp__QuFJ3",categoryGroupDescription:"style_categoryGroupDescription__Anz8B",categoryGroupHeader:"style_categoryGroupHeader__7C9OY",categoryGroupHeading:"style_categoryGroupHeading__YOKmv",smallHeading:"style_smallHeading__1F257",guideCard:"style_guideCard__eJa9K",guideHeading:"style_guideHeading__lngbt",standaloneLinkContents:"style_standaloneLinkContents__Jqnbi"}},61553:function(e){e.exports="/_next/static/images/certification-hero-image-5c0a533b1772ec492d2da1aa4d769295.svg"}},function(e){e.O(0,[5666,9873,622,9774,2888,179],function(){return e(e.s=80698)}),_N_E=e.O()}]);