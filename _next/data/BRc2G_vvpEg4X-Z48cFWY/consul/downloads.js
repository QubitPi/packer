(() => {
var exports = {};
exports.id = 1819;
exports.ids = [1819];
exports.modules = {

/***/ 95440:
/***/ ((module) => {

// Exports
module.exports = {
	"notesList": "consul-downloads_notesList__YbbLU",
	"notesListItem": "consul-downloads_notesListItem__p03KB",
	"codeDescription": "consul-downloads_codeDescription__aOiDP",
	"inlineCode": "consul-downloads_inlineCode__6BKOg hds-typography-code-100",
	"downloadToolsCardTitle": "consul-downloads_downloadToolsCardTitle__FZXmB",
	"downloadToolsCardDescription": "consul-downloads_downloadToolsCardDescription__EzyM0"
};


/***/ }),

/***/ 49082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsulDownloadsMerchandisingSlot": () => (/* binding */ ConsulDownloadsMerchandisingSlot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88805);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14617);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33356);
/* harmony import */ var data_consul_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6468);
/* harmony import */ var views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6647);
/* harmony import */ var views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51815);
/* harmony import */ var views_product_downloads_view_product_downloads_view_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8832);
/* harmony import */ var views_product_downloads_view_product_downloads_view_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(views_product_downloads_view_product_downloads_view_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95440);
/* harmony import */ var _consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__]);
([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








const notesListItems = [
    "Use Armelv5 for all 32-bit armel systems",
    "Use Armhfv6 for all armhf systems with v6+ architecture",
    "Use Arm64 for all v8 64-bit architectures"
];
const ConsulDownloadsMerchandisingSlot = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: (views_product_downloads_view_product_downloads_view_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading2),
                level: 2,
                size: 300,
                weight: "bold",
                children: "Note for ARM users"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().notesList),
                children: notesListItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        asElement: "li",
                        className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().notesListItem),
                        size: 200,
                        weight: "regular",
                        children: item
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                asElement: "p",
                className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().codeDescription),
                size: 200,
                weight: "regular",
                children: "The following commands can help determine the right version for your system:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().inlineCode),
                children: "$ uname -m"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().inlineCode),
                children: '$ readelf -a /proc/self/exe | grep -q -c Tag_ABI_VFP_args && echo "armhf" || echo "armel"'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: (views_product_downloads_view_product_downloads_view_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading2),
                level: 2,
                size: 300,
                weight: "bold",
                children: "Consul tools"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                ariaLabel: "Download Consul tools",
                href: "/consul/docs/integrate/download-tools",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        asElement: "p",
                        className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().downloadToolsCardTitle),
                        size: 300,
                        weight: "semibold",
                        children: "Download Consul tools"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        asElement: "p",
                        className: (_consul_downloads_module_css__WEBPACK_IMPORTED_MODULE_8___default().downloadToolsCardDescription),
                        size: 200,
                        weight: "regular",
                        children: "From this page you can download various tools for Consul. These tools are maintained by HashiCorp and the Consul Community."
                    })
                ]
            })
        ]
    });
};
const ConsulDownloadsPage = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ...props,
        merchandisingSlot: {
            position: "below",
            slot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConsulDownloadsMerchandisingSlot, {})
        }
    });
};
const getStaticProps = (0,views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__/* .generateGetStaticProps */ .A)(data_consul_json__WEBPACK_IMPORTED_MODULE_4__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsulDownloadsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95780:
/***/ ((module) => {

"use strict";
module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 48827:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/dialog");

/***/ }),

/***/ 9677:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/portal");

/***/ }),

/***/ 80395:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/tooltip");

/***/ }),

/***/ 76278:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

"use strict";
module.exports = require("@vercel/fetch");

/***/ }),

/***/ 38970:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 79316:
/***/ ((module) => {

"use strict";
module.exports = require("fathom-client");

/***/ }),

/***/ 22493:
/***/ ((module) => {

"use strict";
module.exports = require("hast-util-to-string");

/***/ }),

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 23231:
/***/ ((module) => {

"use strict";
module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 51162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 79103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 19785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 62555:
/***/ ((module) => {

"use strict";
module.exports = require("refractor");

/***/ }),

/***/ 68221:
/***/ ((module) => {

"use strict";
module.exports = require("rehype-parse");

/***/ }),

/***/ 64545:
/***/ ((module) => {

"use strict";
module.exports = require("rehype-stringify");

/***/ }),

/***/ 56563:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/parse");

/***/ }),

/***/ 95370:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/prerelease");

/***/ }),

/***/ 97326:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/rsort");

/***/ }),

/***/ 61865:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/valid");

/***/ }),

/***/ 50934:
/***/ ((module) => {

"use strict";
module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 94825:
/***/ ((module) => {

"use strict";
module.exports = require("unified");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

"use strict";
module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 23135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

"use strict";
module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 6468:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Consul","slug":"consul","algoliaConfig":{"indexName":"product_CONSUL","searchOnlyApiKey":"fbd5dc1f0078d41509fcc560386fd534"},"analyticsConfig":{"includedDomains":"consul.io www.consul.io","segmentWriteKey":"IyzLrqXkox5KJ8XL4fo8vTYNGfiKlTCm"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Consul by HashiCorp","description":"Consul is a service networking solution to automate network configurations, discover services, and enable secure connectivity across any cloud or runtime.","image":"https://www.consulproject.io/consul-public/img/og-image.png","icon":[{"href":"/consul-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.11.3","subnavItems":[],"basePaths":["docs","api-docs","commands","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,4975,2851,5888,265,7232,4884,6182,6415,4506,2529,4653], () => (__webpack_exec__(49082)));
module.exports = __webpack_exports__;

})();