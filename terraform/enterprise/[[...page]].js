(()=>{var e={};e.id=6342,e.ids=[6342,2888],e.modules={93566:e=>{e.exports={root:"docs-plain-page-heading_root__HzRuX g-offset-scroll-margin-top"}},9840:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>d,reportWebVitals:()=>f,routeModule:()=>b,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>g});var i=r(87093),a=r(35244),o=r(1323),u=r(4684),n=r(43900),c=r(24915),l=e([n,c]);[n,c]=l.then?(await l)():l;let p=(0,o.l)(c,"default"),d=(0,o.l)(c,"getStaticProps"),h=(0,o.l)(c,"getStaticPaths"),x=(0,o.l)(c,"getServerSideProps"),m=(0,o.l)(c,"config"),f=(0,o.l)(c,"reportWebVitals"),g=(0,o.l)(c,"unstable_getStaticProps"),v=(0,o.l)(c,"unstable_getStaticPaths"),q=(0,o.l)(c,"unstable_getStaticParams"),y=(0,o.l)(c,"unstable_getServerProps"),w=(0,o.l)(c,"unstable_getServerSideProps"),b=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/terraform/enterprise/[[...page]]",pathname:"/terraform/enterprise/[[...page]]",bundlePath:"",filename:""},components:{App:n.default,Document:u.default},userland:c});s()}catch(e){s(e)}})},8852:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});var s=r(20997),i=r(16689);let a=(0,i.forwardRef)(({color:e="currentColor",title:t,...r},a)=>{let o=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!t,ref:a,"aria-labelledby":o,...r,children:[t?(0,s.jsx)("title",{id:o,children:t}):null,(0,s.jsxs)("g",{fill:e,children:[(0,s.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},96206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(57147),i=r(71017);async function a(e,t){return await Promise.all(e.slice(0).map(async e=>await o(e,t)))}async function o(e,t){if(e.remoteFile)return e;if("string"==typeof e.path){let r=i.join(e.path,"index.mdx"),a=`${e.path}.mdx`,o=s.existsSync(i.join(process.cwd(),t,r)),u=s.existsSync(i.join(process.cwd(),t,a));if(!o&&!u)throw Error(`Could not find file to match path "${e.path}". Neither "${a}" or "${r}" could be found.`);if(o&&u)throw Error(`Ambiguous path "${e.path}". Both "${a}" and "${r}" exist. Please delete one of these files.`);let n=i.join(t,o?r:a);return{...e,filePath:n}}if(e.routes){let r=await a(e.routes,t);return{...e,routes:r}}return e}let u=a},71932:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=function(e){return function e(t,r=0){if(0===t.length)throw Error(`Found empty array of navNodes at depth ${r}. There must be more than one route.`);let s=t.map(t=>{if(void 0!==t.path){if(!t.title)throw Error(`Missing nav-data title. Please add a non-empty title to the node with the path "${t.path}".`);return{...t,__stack:t.path.split("/")}}if(t.routes){let s=function(t,r){let[s,i]=e(t.routes,r+1),a=!!s&&s.split("/");return{...t,__stack:a,routes:i}}(t,r);if(!t.title){let e=s.__stack.join("/");throw Error(`Missing nav-data title on NavBranch. Please add a title to the node with the inferred path "${e}".`)}return s}if(void 0!==t.href){if(""==t.href)throw Error(`Empty href value on NavDirectLink. href values must be non-empty strings. Node: ${JSON.stringify(t)}.`);if(!t.title)throw Error(`Missing nav-data title on NavDirectLink. Please add a title to the node with href "${t.href}".`);return t}if(!(t.divider||t.heading))throw Error(`Unrecognized nav-data node. Please ensure all nav-data nodes are either NavLeaf, NavBranch, NavDirectLink, NavHeading, or NavDivider types. Invalid node: ${JSON.stringify(t)}.`);return t}),i=s.reduce((e,t)=>t.__stack?e.concat([t.__stack]):e,[]),a=i.map(e=>e.join("/")),o=a.filter((e,t,r)=>r.indexOf(e)!==t);if(o.length>0)throw Error(`Duplicate routes found for "${o[0]}". Please resolve duplicates.`);let u=i.map(e=>{if(e.length===r)return e.join("/");if(e.length===r+1)return e.slice(0,e.length-1).join("/");throw Error(`Invalid path depth. At depth ${r}, found path "${e.join("/")}". Please move this path to the correct depth of ${e.length-1}.`)}).filter((e,t,r)=>r.indexOf(e)===t);if(u.length>1)throw Error(`Found mismatched paths at depth ${r}, with paths: ${JSON.stringify(a)}. Implies mismatched parent directories: ${JSON.stringify(u)}.`);return[u[0],s]}(e)[1]}},1673:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(57147),i=r(71017);async function a(e){let t=await s.promises.readdir(e,{withFileTypes:!0});return(await Promise.all(t.map(t=>{let r=i.resolve(e,t.name);return t.isDirectory()?a(r):r}))).flat()}let o=async function(e,t){let r=function e(t){return t.reduce((t,r)=>"routes"in r?t.concat(e(r.routes)):t.concat(r),[])}(e);return(await a(i.join(process.cwd(),t))).filter(e=>".mdx"==i.extname(e)).map(e=>{let r=i.join(process.cwd(),t);return i.relative(r,e).replace(/\.mdx$/,"").replace(/[\\/]?index$/,"")}).filter(e=>{if(""===e)return!1;let t=e.split(i.sep).join(i.posix.sep);return 0==r.filter(({path:e})=>e==t).length})}},31187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(40968),a=r.n(i);let o=function({isVersioned:e}){return e?s.jsx(a(),{children:s.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},61039:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(82097);let i=process.env.PLAYGROUND_API_URL,a=()=>e=>{(0,s.Vn)(e,"code",e=>{let t,r;if("sentinel"===e.lang){if(!e.meta||!e.meta.includes("playground"))return;t={policy:e.value}}"json"===e.lang&&e.meta&&e.meta.includes("sentinel")&&(t=JSON.parse(e.value)),i&&(r=`api={"${i}"}`),t&&(e.type="jsx",e.value=`<SentinelEmbedded exampleData={${JSON.stringify(t)}} ${r} />`)})}},25549:(e,t,r)=>{"use strict";function s(e){return e.filter(e=>{let t=!1;return"string"==typeof e?t=""==e:"object"==typeof e&&(t=0==e.params.page.length||""==e.params.page[0]),!t})}r.d(t,{b:()=>s})},24915:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c,getStaticPaths:()=>u,getStaticProps:()=>n});var i=r(98238),a=r(61439),o=e([i,a]);[i,a]=o.then?(await o)():o;let{getStaticPaths:u,getStaticProps:n}=(0,a.w)("terraform","enterprise",{projectName:"Terraform Enterprise"}),c=i.Z;s()}catch(e){s(e)}})},61806:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(20997),i=r(31633),a=r(93566),o=r.n(a);let u=function({id:e,title:t}){return s.jsx(i.Z,{className:o().root,id:e,level:1,size:600,weight:"bold",children:t})}},98238:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>w});var i=r(20997),a=r(11163),o=r(88561),u=r(59003),n=r.n(u),c=r(99320),l=r(79975),p=r(41204),d=r(31187),h=r(98634),x=r(91844),m=r(43814),f=r.n(m),g=r(12559),v=r(61806),q=r(39049),y=e([l]);l=(y.then?(await y)():y)[0];let w=({metadata:e,mdxSource:t,versions:r,projectName:s,layoutProps:u,outlineItems:m,pageHeading:y})=>{var w;let b;let{asPath:S}=(0,a.useRouter)(),P=(0,o.j2)(),{compiledSource:j,scope:N}=t,$=(0,x.Z)(P.slug),_=y?.id&&y?.title,k=(w=e.layout,w?.name==="docs-root-landing");return k?b=i.jsx(g.Z,{pageHeading:y,pageSubtitle:e?.layout?.subtitle}):_&&(b=i.jsx(v.Z,{id:y.id,title:y.title})),(0,i.jsxs)(l.Z,{...u,outlineItems:m,versions:r,children:[_?i.jsx(h.Z,{className:n()(f().docsPageHeading,{[f().hasLandingHero]:k}),versionSelectorSlot:r&&r.length>0?i.jsx(q.Z,{options:r,projectName:s}):null,headingSlot:b}):null,i.jsx(d.Z,{isVersioned:!!(0,c.B)(S)}),i.jsx(p.Z,{mdxRemoteProps:{compiledSource:j,scope:N,components:{...$,wrapper:e=>i.jsx("div",{className:f().mdxContent,...e})}}})]})};s()}catch(e){s(e)}})},14937:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{i:()=>u});var i=r(89047),a=r(90237),o=e([i]);i=(o.then?(await o)():o)[0];let n=(0,a.y)(fetch,{retries:3,delay:1e3});async function u(){return await n("https://releases.hashicorp.com/vagrant-vmware-utility/index.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>(0,i.S9)(Object.keys(e.versions)))}s()}catch(e){s(e)}})},61439:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{w:()=>l});var i=r(8465),a=r(64662),o=r(25549),u=r(61039),n=r(14937),c=e([i,n]);function l(e,t,r){let s=(0,a.i)(e),c=s.rootDocsPaths.find(e=>e.path==t),l={baseName:c.shortName||c.name,basePath:c.path,navDataPrefix:c.navDataPrefix,product:s,productSlugForLoader:c.productSlugForLoader,basePathForLoader:c.basePathForLoader,mainBranch:c.mainBranch,additionalRemarkPlugins:"sentinel"==s.slug&&"docs"==c.path?[u.Z]:[],getScope:"vagrant"==s.slug&&"docs"==c.path?async()=>({VMWARE_UTILITY_VERSION:await (0,n.i)()}):void 0,options:r};return{getStaticPaths:async e=>{let{getStaticPaths:t}=(0,i.O)(l),{paths:r,...s}=await t(e);return{paths:"docs"==c.path?(0,o.b)(r):r,...s}},getStaticProps:async e=>{let{getStaticProps:t}=(0,i.O)(l);return await t(e)}}}[i,n]=c.then?(await c)():c,s()}catch(e){s(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},76791:e=>{"use strict";e.exports=require("@mdx-js/util")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},30161:e=>{"use strict";e.exports=require("@reach/popover")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},51356:e=>{"use strict";e.exports=require("bail")},41421:e=>{"use strict";e.exports=require("ccount")},59003:e=>{"use strict";e.exports=require("classnames")},57499:e=>{"use strict";e.exports=require("collapse-white-space")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},48010:e=>{"use strict";e.exports=require("http-status-codes")},76675:e=>{"use strict";e.exports=require("is-alphabetical")},61455:e=>{"use strict";e.exports=require("is-alphanumeric")},93715:e=>{"use strict";e.exports=require("is-buffer")},69893:e=>{"use strict";e.exports=require("is-decimal")},20298:e=>{"use strict";e.exports=require("is-whitespace-character")},80791:e=>{"use strict";e.exports=require("is-word-character")},56734:e=>{"use strict";e.exports=require("js-cookie")},54689:e=>{"use strict";e.exports=require("longest-streak")},41197:e=>{"use strict";e.exports=require("markdown-escapes")},73584:e=>{"use strict";e.exports=require("markdown-table")},53625:e=>{"use strict";e.exports=require("mdast-util-compact")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},70276:e=>{"use strict";e.exports=require("next-mdx-remote")},57112:e=>{"use strict";e.exports=require("next-mdx-remote/serialize")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},74809:e=>{"use strict";e.exports=require("node-fetch")},82174:e=>{"use strict";e.exports=require("parse-entities")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3515:e=>{"use strict";e.exports=require("remark-mdx")},13729:e=>{"use strict";e.exports=require("repeat-string")},10912:e=>{"use strict";e.exports=require("semver")},56563:e=>{"use strict";e.exports=require("semver/functions/parse")},95370:e=>{"use strict";e.exports=require("semver/functions/prerelease")},97326:e=>{"use strict";e.exports=require("semver/functions/rsort")},61865:e=>{"use strict";e.exports=require("semver/functions/valid")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},67545:e=>{"use strict";e.exports=require("state-toggle")},42214:e=>{"use strict";e.exports=require("stringify-entities")},25325:e=>{"use strict";e.exports=require("to-vfile")},32385:e=>{"use strict";e.exports=require("trim")},41358:e=>{"use strict";e.exports=require("trim-trailing-lines")},40969:e=>{"use strict";e.exports=require("trough")},96784:e=>{"use strict";e.exports=require("unherit")},68603:e=>{"use strict";e.exports=require("unist-util-flatmap")},41925:e=>{"use strict";e.exports=require("unist-util-map")},75295:e=>{"use strict";e.exports=require("unist-util-remove-position")},48858:e=>{"use strict";e.exports=require("use-query-params")},33084:e=>{"use strict";e.exports=require("vfile")},3465:e=>{"use strict";e.exports=require("vfile-location")},5170:e=>{"use strict";e.exports=require("xtend")},66197:e=>{"use strict";e.exports=import("framer-motion")},46269:e=>{"use strict";e.exports=import("react-instantsearch-hooks-web")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[5089,3674,6859,3679,1525,9873,7751,3394,7820,3900,4572,6517,1274,5828,4355,5028,9795,7245,9261,8465],()=>r(9840));module.exports=s})();