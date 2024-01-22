(() => {
var exports = {};
exports.id = 4662;
exports.ids = [4662];
exports.modules = {

/***/ 35633:
/***/ ((module) => {

// Exports
module.exports = {
	"default": "inline-alert_default__Ws6fi hds-typography-body-200",
	"icon": "inline-alert_icon__4aBM3",
	"content": "inline-alert_content__jqdFT",
	"title": "inline-alert_title__KeCV8",
	"description": "inline-alert_description__Oh39Z",
	"ctaSlot": "inline-alert_ctaSlot__FUOHj",
	"highlight": "inline-alert_highlight__fwaW3",
	"warning": "inline-alert_warning__3ER8L",
	"critical": "inline-alert_critical__2DdVu"
};


/***/ }),

/***/ 2950:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "downloads_alert__dB_Am"
};


/***/ }),

/***/ 2351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InlineAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_info_24__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11023);
/* harmony import */ var _inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35633);
/* harmony import */ var _inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



function InlineAlert({ className , color ="neutral" , description , icon =/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_info_24__WEBPACK_IMPORTED_MODULE_2__/* .IconInfo24 */ .w, {}) , title , ctaSlot  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default()["default"]), (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default())[color], className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                "data-testid": "icon",
                children: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),
                        children: description
                    }),
                    ctaSlot ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_inline_alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().ctaSlot),
                        children: ctaSlot
                    }) : null
                ]
            })
        ]
    });
}


/***/ }),

/***/ 14822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39626);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26789);
/* harmony import */ var components_inline_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2351);
/* harmony import */ var data_waypoint_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97551);
/* harmony import */ var views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6647);
/* harmony import */ var views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51815);
/* harmony import */ var _downloads_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2950);
/* harmony import */ var _downloads_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_downloads_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__]);
([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const WaypointDownloadsPage = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ...props,
        merchandisingSlot: {
            position: "above",
            slot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inline_alert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: (_downloads_module_css__WEBPACK_IMPORTED_MODULE_7___default().alert),
                title: "Archive Notice",
                description: "This download is part of the legacy version of Waypoint that is no longer actively maintained.",
                color: "highlight",
                ctaSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    href: "https://www.hashicorp.com/blog/a-new-vision-for-hcp-waypoint",
                    opensInNewTab: true,
                    text: "Read the blog",
                    color: "secondary",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__/* .IconExternalLink16 */ .g, {}),
                    iconPosition: "trailing"
                })
            })
        }
    });
};
const getStaticProps = (0,views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__/* .generateGetStaticProps */ .A)(data_waypoint_json__WEBPACK_IMPORTED_MODULE_4__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaypointDownloadsPage);

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

/***/ 97551:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Waypoint","slug":"waypoint","algoliaConfig":{"indexName":"product_WAYPOINT","searchOnlyApiKey":"5e4adfd8094367056501547d6fedb6c5"},"analyticsConfig":{"includedDomains":"waypointproject.io www.waypointproject.io","segmentWriteKey":"9mlIVayJbNtJW2EOdAFKHNKcdLAgEDlV"},"metadata":{"title":"Waypoint by HashiCorp","description":"Waypoint provides a modern workflow for build, deploy, and release across platforms.","image":"https://www.waypointproject.io/waypoint-public/img/og-image.png","icon":[{"href":"/waypoint-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Tutorials","url":"https://developer.hashicorp.com/waypoint/tutorials","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/waypoint/docs","type":"inbound"},{"text":"CLI","url":"https://developer.hashicorp.com/waypoint/commands","type":"inbound"},{"text":"Integrations","url":"https://developer.hashicorp.com/waypoint/integrations","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["commands","docs","plugins","tutorials","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","includeMDXSource":true},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Waypoint Integrations."}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,4975,2851,5888,265,7232,4884,6182,6415,4506,2529,4653], () => (__webpack_exec__(14822)));
module.exports = __webpack_exports__;

})();