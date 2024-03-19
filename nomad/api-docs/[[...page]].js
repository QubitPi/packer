(()=>{var e={};e.id=7643,e.ids=[7643,2888],e.modules={93566:e=>{e.exports={root:"docs-plain-page-heading_root__HzRuX g-offset-scroll-margin-top"}},13932:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>q,default:()=>l,getServerSideProps:()=>m,getStaticPaths:()=>d,getStaticProps:()=>x,reportWebVitals:()=>g,routeModule:()=>S,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>h});var i=r(87093),a=r(35244),u=r(1323),o=r(4684),c=r(43900),n=r(68126),p=e([c,n]);[c,n]=p.then?(await p)():p;let l=(0,u.l)(n,"default"),x=(0,u.l)(n,"getStaticProps"),d=(0,u.l)(n,"getStaticPaths"),m=(0,u.l)(n,"getServerSideProps"),q=(0,u.l)(n,"config"),g=(0,u.l)(n,"reportWebVitals"),h=(0,u.l)(n,"unstable_getStaticProps"),v=(0,u.l)(n,"unstable_getStaticPaths"),f=(0,u.l)(n,"unstable_getStaticParams"),y=(0,u.l)(n,"unstable_getServerProps"),b=(0,u.l)(n,"unstable_getServerSideProps"),S=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/nomad/api-docs/[[...page]]",pathname:"/nomad/api-docs/[[...page]]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:n});s()}catch(e){s(e)}})},31187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(20997),i=r(40968),a=r.n(i);let u=function({isVersioned:e}){return e?s.jsx(a(),{children:s.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},61039:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(82097);let i=process.env.PLAYGROUND_API_URL,a=()=>e=>{(0,s.Vn)(e,"code",e=>{let t,r;if("sentinel"===e.lang){if(!e.meta||!e.meta.includes("playground"))return;t={policy:e.value}}"json"===e.lang&&e.meta&&e.meta.includes("sentinel")&&(t=JSON.parse(e.value)),i&&(r=`api={"${i}"}`),t&&(e.type="jsx",e.value=`<SentinelEmbedded exampleData={${JSON.stringify(t)}} ${r} />`)})}},25549:(e,t,r)=>{"use strict";function s(e){return e.filter(e=>{let t=!1;return"string"==typeof e?t=""==e:"object"==typeof e&&(t=0==e.params.page.length||""==e.params.page[0]),!t})}r.d(t,{b:()=>s})},68126:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>n,getStaticPaths:()=>o,getStaticProps:()=>c});var i=r(98238),a=r(61439),u=e([i,a]);[i,a]=u.then?(await u)():u;let{getStaticPaths:o,getStaticProps:c}=(0,a.w)("nomad","api-docs"),n=i.Z;s()}catch(e){s(e)}})},61806:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(31633),a=r(93566),u=r.n(a);let o=function({id:e,title:t}){return s.jsx(i.Z,{className:u().root,id:e,level:1,size:600,weight:"bold",children:t})}},98238:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>b});var i=r(20997),a=r(39332),u=r(26107),o=r(59003),c=r.n(o),n=r(99320),p=r(79975),l=r(41204),x=r(31187),d=r(98634),m=r(91844),q=r(43814),g=r.n(q),h=r(12559),v=r(61806),f=r(39049),y=e([p]);p=(y.then?(await y)():y)[0];let b=({metadata:e,mdxSource:t,versions:r,projectName:s,layoutProps:o,outlineItems:q,pageHeading:y})=>{var b;let S;let P=(0,a.usePathname)(),j=(0,u.j2)(),{compiledSource:w,scope:_}=t,k=(0,m.Z)(j.slug),Z=y?.id&&y?.title,N=(b=e.layout,b?.name==="docs-root-landing");return N?S=i.jsx(h.Z,{pageHeading:y,pageSubtitle:e?.layout?.subtitle}):Z&&(S=i.jsx(v.Z,{id:y.id,title:y.title})),(0,i.jsxs)(p.Z,{...o,outlineItems:q,versions:r,children:[Z?i.jsx(d.Z,{className:c()(g().docsPageHeading,{[g().hasLandingHero]:N}),versionSelectorSlot:r&&r.length>0?i.jsx(f.Z,{options:r,projectName:s}):null,headingSlot:S}):null,i.jsx(x.Z,{isVersioned:!!(0,n.B)(P)}),i.jsx(l.Z,{mdxRemoteProps:{compiledSource:w,scope:_,components:{...k,wrapper:e=>i.jsx("div",{className:g().mdxContent,...e})}}})]})};s()}catch(e){s(e)}})},14937:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{i:()=>o});var i=r(89047),a=r(90237),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,a.y)(fetch,{retries:3,delay:1e3});async function o(){return await c("https://releases.hashicorp.com/vagrant-vmware-utility/index.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>(0,i.S9)(Object.keys(e.versions)))}s()}catch(e){s(e)}})},61439:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{w:()=>p});var i=r(8465),a=r(64662),u=r(25549),o=r(61039),c=r(14937),n=e([i,c]);function p(e,t,r){let s=(0,a.i)(e),n=s.rootDocsPaths.find(e=>e.path==t),p={baseName:n.shortName||n.name,basePath:n.path,navDataPrefix:n.navDataPrefix,product:s,productSlugForLoader:n.productSlugForLoader,basePathForLoader:n.basePathForLoader,mainBranch:n.mainBranch,additionalRemarkPlugins:"sentinel"==s.slug&&"docs"==n.path?[o.Z]:[],getScope:"vagrant"==s.slug&&"docs"==n.path?async()=>({VMWARE_UTILITY_VERSION:await (0,c.i)()}):void 0,options:r};return{getStaticPaths:async e=>{let{getStaticPaths:t}=(0,i.O)(p),{paths:r,...s}=await t(e);return{paths:"docs"==n.path?(0,u.b)(r):r,...s}},getStaticProps:async e=>{let{getStaticProps:t}=(0,i.O)(p);return await t(e)}}}[i,c]=n.then?(await n)():n,s()}catch(e){s(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},22170:e=>{"use strict";e.exports=require("@mdx-js/mdx")},57425:e=>{"use strict";e.exports=require("@mdx-js/react")},76791:e=>{"use strict";e.exports=require("@mdx-js/util")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},51356:e=>{"use strict";e.exports=require("bail")},41421:e=>{"use strict";e.exports=require("ccount")},59003:e=>{"use strict";e.exports=require("classnames")},57499:e=>{"use strict";e.exports=require("collapse-white-space")},19659:e=>{"use strict";e.exports=require("esbuild")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},48010:e=>{"use strict";e.exports=require("http-status-codes")},76675:e=>{"use strict";e.exports=require("is-alphabetical")},61455:e=>{"use strict";e.exports=require("is-alphanumeric")},93715:e=>{"use strict";e.exports=require("is-buffer")},69893:e=>{"use strict";e.exports=require("is-decimal")},20298:e=>{"use strict";e.exports=require("is-whitespace-character")},80791:e=>{"use strict";e.exports=require("is-word-character")},56734:e=>{"use strict";e.exports=require("js-cookie")},54689:e=>{"use strict";e.exports=require("longest-streak")},41197:e=>{"use strict";e.exports=require("markdown-escapes")},73584:e=>{"use strict";e.exports=require("markdown-table")},53625:e=>{"use strict";e.exports=require("mdast-util-compact")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},74809:e=>{"use strict";e.exports=require("node-fetch")},82174:e=>{"use strict";e.exports=require("parse-entities")},88873:e=>{"use strict";e.exports=require("pkg-dir")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3515:e=>{"use strict";e.exports=require("remark-mdx")},13729:e=>{"use strict";e.exports=require("repeat-string")},10912:e=>{"use strict";e.exports=require("semver")},56563:e=>{"use strict";e.exports=require("semver/functions/parse")},95370:e=>{"use strict";e.exports=require("semver/functions/prerelease")},97326:e=>{"use strict";e.exports=require("semver/functions/rsort")},61865:e=>{"use strict";e.exports=require("semver/functions/valid")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},67545:e=>{"use strict";e.exports=require("state-toggle")},42214:e=>{"use strict";e.exports=require("stringify-entities")},25325:e=>{"use strict";e.exports=require("to-vfile")},32385:e=>{"use strict";e.exports=require("trim")},41358:e=>{"use strict";e.exports=require("trim-trailing-lines")},40969:e=>{"use strict";e.exports=require("trough")},96784:e=>{"use strict";e.exports=require("unherit")},68603:e=>{"use strict";e.exports=require("unist-util-flatmap")},41925:e=>{"use strict";e.exports=require("unist-util-map")},32711:e=>{"use strict";e.exports=require("unist-util-remove")},75295:e=>{"use strict";e.exports=require("unist-util-remove-position")},48858:e=>{"use strict";e.exports=require("use-query-params")},33084:e=>{"use strict";e.exports=require("vfile")},3465:e=>{"use strict";e.exports=require("vfile-location")},5170:e=>{"use strict";e.exports=require("xtend")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7163,5605,6859,8432,1525,9873,3974,3458,7820,5340,3900,1441,6517,1274,5828,6081,5028,9696,3233,5574],()=>r(13932));module.exports=s})();