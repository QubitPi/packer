(()=>{var e={};e.id=4820,e.ids=[4820,2888],e.modules={81311:e=>{e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},19167:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>g,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>C,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>f});var i=a(87093),o=a(35244),r=a(1323),n=a(11070),c=a(33893),u=a(58034),l=e([c,u]);[c,u]=l.then?(await l)():l;let d=(0,r.l)(u,"default"),p=(0,r.l)(u,"getStaticProps"),m=(0,r.l)(u,"getStaticPaths"),h=(0,r.l)(u,"getServerSideProps"),g=(0,r.l)(u,"config"),y=(0,r.l)(u,"reportWebVitals"),f=(0,r.l)(u,"unstable_getStaticProps"),x=(0,r.l)(u,"unstable_getStaticPaths"),b=(0,r.l)(u,"unstable_getStaticParams"),v=(0,r.l)(u,"unstable_getServerProps"),w=(0,r.l)(u,"unstable_getServerSideProps"),C=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:u});s()}catch(e){s(e)}})},32150:(e,t,a)=>{"use strict";a.d(t,{g:()=>o});var s=a(20997),i=a(16689);let o=(0,i.forwardRef)(({color:e="currentColor",title:t,...a},o)=>{let r=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-hidden":!t,ref:o,"aria-labelledby":r,...a,children:[t?(0,s.jsx)("title",{id:r,children:t}):null,(0,s.jsx)("path",{fill:e,fillRule:"evenodd",d:"M5.23 8.21a.75.75 0 011.06.02L12 14.168l5.71-5.938a.75.75 0 111.08 1.04l-6.25 6.5a.75.75 0 01-1.08 0l-6.25-6.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})]})})},30007:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>d});var i=a(20997),o=a(33878),r=a(72387),n=a(9682),c=a(81311),u=a.n(c),l=e([r]);r=(l.then?(await l)():l)[0];let d=function(){return(0,i.jsxs)(r.Z,{className:u().mobileMenuContainer,children:[i.jsx(r.v,{}),(0,i.jsxs)("ul",{className:u().mobileMenuNavList,children:[i.jsx(n.Rd,{item:{heading:"Main Menu"}}),(0,o.A)().map((e,t)=>i.jsx(n.Rd,{item:e},t))]})]})};s()}catch(e){s(e)}})},39061:(e,t,a)=>{"use strict";a.d(t,{f:()=>s});let s=[a(40731),a(6468),a(67355),a(33837),a(55423),a(20110),a(17533),a(97551)].reduce((e,t)=>(e[t.slug]=t,e),{})},58034:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>p,getServerSideProps:()=>d});var i=a(20997),o=a(32884),r=a(30007),n=a(71769),c=a(39061),u=a(68172),l=e([o,r,n]);async function d(e){let{req:t,res:a,err:s}=e,i=new URL(t.url,`http://${t.headers.host}`),o=a?a.statusCode:s?s.statusCode:404;404===o&&a.setHeader("Cache-Control","s-maxage=86400");let r=i.pathname.split("/"),n=r.length>1&&r[1],l=(0,u.lF)(n)?n:null;return{props:{product:c.f[l]||null,statusCode:o,hostname:i.hostname}}}[o,r,n]=l.then?(await l)():l;let p=function({statusCode:e}){return i.jsx(e=>i.jsx(o.Z,{...e,mobileMenuSlot:i.jsx(r.Z,{})}),{children:i.jsx(n.Z,{statusCode:e})})};s()}catch(e){s(e)}})},71769:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>l});var i=a(20997),o=a(16689),r=a(11163),n=a(21269),c=e([n]);n=(c.then?(await c)():c)[0];let u=/\/(?<version>(v\d+([.]|_)\d+([.]|_)(\d+|x))|(v[0-9]{6}-\d+))/,l=function({statusCode:e}){let{asPath:t}=(0,r.useRouter)(),[a,s]=(0,o.useState)(!1),c=u.exec(t),l=c?.groups?.version,d=t.replace(u,""),p=t.substring(0,t.indexOf(l)),m=404==e;switch(l&&m?"dev-dot-versioned-404":m?"dev-dot-standard-404":"dev-dot-fallback"){case"dev-dot-versioned-404":return i.jsx(n.ll,{pathBeforeVersion:p,pathWithoutVersion:d,version:l},String(a));case"dev-dot-standard-404":return i.jsx(n.B_,{});case"dev-dot-fallback":return i.jsx(n.uJ,{statusCode:e})}};s()}catch(e){s(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},56734:e=>{"use strict";e.exports=require("js-cookie")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},73673:e=>{"use strict";e.exports=require("slugify")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")},40731:e=>{"use strict";e.exports=JSON.parse('{"name":"Boundary","slug":"boundary","algoliaConfig":{"indexName":"product_BOUNDARY","searchOnlyApiKey":"8308498decdf72e11590fc6356e5fdde"},"analyticsConfig":{"includedDomains":"boundaryproject.io www.boundaryproject.io","segmentWriteKey":"JkNZiSgwVRAAFrkqqdHLxf0xfcZuhYYc"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Boundary by HashiCorp","description":"Boundary automates secure identity-based user access to hosts and services across environments.","image":"https://www.boundaryproject.io/boundary-public/img/og-image.png","icon":[{"href":"/boundary-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/boundary/tutorials","type":"inbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","shortName":"Docs"},{"iconName":"api","name":"API","path":"api-docs"}]}')},6468:e=>{"use strict";e.exports=JSON.parse('{"name":"Consul","slug":"consul","algoliaConfig":{"indexName":"product_CONSUL","searchOnlyApiKey":"fbd5dc1f0078d41509fcc560386fd534"},"analyticsConfig":{"includedDomains":"consul.io www.consul.io","segmentWriteKey":"IyzLrqXkox5KJ8XL4fo8vTYNGfiKlTCm"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Consul by HashiCorp","description":"Consul is a service networking solution to automate network configurations, discover services, and enable secure connectivity across any cloud or runtime.","image":"https://www.consulproject.io/consul-public/img/og-image.png","icon":[{"href":"/consul-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"version":"1.11.3","subnavItems":[],"basePaths":["docs","api-docs","commands","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}]}')},67355:e=>{"use strict";e.exports=JSON.parse('{"name":"Nomad","slug":"nomad","algoliaConfig":{"indexName":"product_NOMAD","searchOnlyApiKey":"9bfec34ea54e56a11bd50d6bfedc5e71"},"analyticsConfig":{"includedDomains":"nomadproject.io www.nomadproject.io","segmentWriteKey":"qW11yxgipKMsKFKQUCpTVgQUYftYsJj0"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Nomad by HashiCorp","description":"Nomad is a highly available, distributed, data-center aware cluster and application scheduler designed to support the modern datacenter with support for long-running services, batch jobs, and much more.","image":"https://www.nomadproject.io/nomad-public/img/og-image.png","icon":[{"href":"/nomad-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"version":"1.2.5","subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Enterprise","url":"https://www.hashicorp.com/products/nomad/","type":"outbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/nomad/tutorials","type":"outbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Plugins","url":"/plugins","type":"inbound"},{"text":"Tools","url":"/tools","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","plugins","tools","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"Tools","path":"tools"},{"iconName":"plug","name":"Plugins","path":"plugins"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Nomad Integrations."}}')},33837:e=>{"use strict";e.exports=JSON.parse('{"name":"Packer","slug":"packer","algoliaConfig":{"indexName":"product_PACKER","searchOnlyApiKey":"4e1ea7f4bf4335ac43d9f28463e42148"},"analyticsConfig":{"includedDomains":"packer.io www.packer.io","segmentWriteKey":"AjXdfmTTk1I9q9dfyePuDFHBrz1tCO3l"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Packer by HashiCorp","description":"Packer helps you create golden images for multiple platforms from a single source configuration.","image":"https://www.packer.io/packer-public/img/og-image.png","icon":[{"href":"/packer-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"version":"1.7.10","basePaths":["docs","guides","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"guide","name":"Guides","path":"guides"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Packer Integrations."}}')},55423:e=>{"use strict";e.exports=JSON.parse('{"name":"Sentinel","slug":"sentinel","algoliaConfig":{"indexName":"product_SENTINEL","searchOnlyApiKey":"55606ae6b6c797d30a84aa0b509711ef"},"analyticsConfig":{"includedDomains":"docs.hashicorp.com","segmentWriteKey":"X4VJ1pUW2yM3NLldLbHF6337lbDLTQ5h"},"metadata":{"title":"Sentinel by HashiCorp","description":"Sentinel is a language and framework for policy built to be embedded in existing software to enable fine-grained, logic-based policy decisions.","image":"https://docs.hashicorp.com/sentinel-public/img/og-image.png","icon":[{"href":"/sentinel-public/favicon.svg","sizes":"16x16"},{"href":"/sentinel-public/favicon.svg","sizes":"32x32"},{"href":"/sentinel-public/favicon.svg","sizes":"96x96"},{"href":"/sentinel-public/favicon.svg","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"0.18.6","subnavItems":[{"url":"/sentinel/intro","text":"Intro","type":"inbound"},{"url":"/sentinel","text":"Docs","type":"inbound"}],"basePaths":["docs","intro","downloads"],"rootDocsPaths":[{"basePathForLoader":"sentinel","iconName":"docs","name":"Docs","path":"docs"},{"basePathForLoader":"sentinel/intro","iconName":"docs","name":"Intro","path":"intro"}]}')},20110:e=>{"use strict";e.exports=JSON.parse('{"name":"Vagrant","slug":"vagrant","algoliaConfig":{"indexName":"product_VAGRANT","searchOnlyApiKey":"c4c3e690f46940fa3ba9624da4d7fc0c"},"analyticsConfig":{"includedDomains":"vagrantup.com www.vagrantup.com","segmentWriteKey":"wFMyBE4PJCZttWfu0pNhYdWr7ygW0io4"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vagrant by HashiCorp","description":"Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.","image":"https://www.vagrantup.com/vagrant/img/og-image.png","icon":[{"href":"/vagrant-public/favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"version":"2.2.19","vmwareUtilityVersion":"1.0.21","subnavItems":[{"text":"Intro","url":"https://developer.hashicorp.com/vagrant/intro","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/vagrant/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","intro","vagrant-cloud","vmware","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro","addOverviewItem":false},{"iconName":"cloud","name":"Vagrant Cloud","path":"vagrant-cloud"}]}')},17533:e=>{"use strict";e.exports=JSON.parse('{"name":"Vault","slug":"vault","version":"1.9.3","changelogUrl":null,"algoliaConfig":{"indexName":"product_VAULT","searchOnlyApiKey":"9c555e8fa951c1c53e726c0ce2eb3b73"},"analyticsConfig":{"includedDomains":"vaultproject.io www.vaultproject.io","segmentWriteKey":"OdSFDq9PfujQpmkZf03dFpcUlywme4sC"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vault by HashiCorp","description":"Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. Vault handles leasing, key revocation, key rolling, auditing, and provides secrets as a service through a unified API.","image":"https://www.vaultproject.io/vault-public/img/og-image.png","icon":[{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=16&w=16","type":"image/png","sizes":"16x16"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=32&w=32","type":"image/png","sizes":"32x32"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=96&w=96","type":"image/png","sizes":"96x96"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=192&w=192","type":"image/png","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"subnavItems":[{"text":"Overview","url":"/"},{"text":"Use Cases","submenu":[{"text":"Secrets Management","url":"/use-cases/secrets-management"},{"text":"Data Encryption","url":"/use-cases/data-encryption"},{"text":"Identity-based Access","url":"/use-cases/identity-based-access"}]},{"text":"Enterprise","url":"https://www.hashicorp.com/products/vault/enterprise"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/vault/tutorials"},{"text":"Docs","url":"/docs"},{"text":"API","url":"/api-docs"},{"text":"Community","url":"/community"}],"packageManagers":[{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"darwin"},{"label":"Ubuntu/Debian","commands":["wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg","echo \\"deb [arch=amd64 signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main\\" | sudo tee /etc/apt/sources.list.d/hashicorp.list","sudo apt-get update && sudo apt-get install vault"],"os":"linux"},{"label":"CentOS/RHEL","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Fedora","commands":["sudo dnf install -y dnf-plugins-core","sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo","sudo dnf -y install vault"],"os":"linux"},{"label":"Amazon Linux","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"linux"}],"basePaths":["docs","api-docs","intro","tutorials","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Vault Integrations.","sidebarLinks":[{"title":"Plugin System Overview","href":"/vault/docs/plugins"},{"title":"Plugin Development","href":"/vault/docs/plugins/plugin-development"},{"title":"Custom Secrets Engine Tutorial","href":"/vault/tutorials/custom-secrets-engine"}]}}')},97551:e=>{"use strict";e.exports=JSON.parse('{"name":"Waypoint","slug":"waypoint","algoliaConfig":{"indexName":"product_WAYPOINT","searchOnlyApiKey":"5e4adfd8094367056501547d6fedb6c5"},"analyticsConfig":{"includedDomains":"waypointproject.io www.waypointproject.io","segmentWriteKey":"9mlIVayJbNtJW2EOdAFKHNKcdLAgEDlV"},"metadata":{"title":"Waypoint by HashiCorp","description":"Waypoint provides a modern workflow for build, deploy, and release across platforms.","image":"https://www.waypointproject.io/waypoint-public/img/og-image.png","icon":[{"href":"/waypoint-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiDays","url":"https://hashicorp.com/conferences/hashidays","text":"One conference. Three cities.","linkText":"Find a city near you","expirationDate":"2024-06-14T00:00:00-08:00"},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Tutorials","url":"https://developer.hashicorp.com/waypoint/tutorials","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/waypoint/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","tutorials"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","includeMDXSource":true}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Waypoint Integrations."}}')}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[1107,1840,6859,2631,3893,8534,8460],()=>a(19167));module.exports=s})();