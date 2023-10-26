(() => {
var exports = {};
exports.id = 1809;
exports.ids = [1809];
exports.modules = {

/***/ 87860:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "callout-card_card__EIIoB",
	"heading": "callout-card_heading__N8cwV g-offset-scroll-margin-top hds-typography-display-300",
	"body": "callout-card_body__UY9HH hds-typography-body-200",
	"ctas": "callout-card_ctas__5pCem",
	"iconCardLinks": "callout-card_iconCardLinks__y5pIj",
	"fixedColumnsMode": "callout-card_fixedColumnsMode__s9_f2",
	"columns2": "callout-card_columns2__7AC3V",
	"columns3": "callout-card_columns3__w0lim"
};


/***/ }),

/***/ 88699:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "icon-card-link_root__XRf7A",
	"icon": "icon-card-link_icon__gjx_f",
	"text": "icon-card-link_text__n8aD8 hds-typography-body-200"
};


/***/ }),

/***/ 57436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CalloutCard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33643);
/* harmony import */ var content_supported_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71686);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16950);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88918);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35643);
/* harmony import */ var components_icon_card_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26789);
/* harmony import */ var _callout_card_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87860);
/* harmony import */ var _callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 









function CalloutCard({ heading , headingSlug , body , ctas , iconCardLinks , fixedColumns  }) {
    const hasCtas = ctas !== undefined && ctas !== null;
    const hasIconCardLinks = iconCardLinks !== undefined && iconCardLinks !== null;
    /**
	 * For fixed columns mode, where layout is driven by
	 * media queries and explicit column counts.
	 */ const fixedModeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().fixedColumnsMode), (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default())[`columns${fixedColumns}`]);
    if (hasCtas && hasIconCardLinks) {
        (0,components_toast__WEBPACK_IMPORTED_MODULE_6__/* .developmentToast */ .GN)({
            color: components_toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastColor.critical */ .PQ.critical,
            title: "Error in CalloutCard",
            description: "Both `ctas` and `iconCardLinks` were passed to CalloutCard. Only provide one."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
        elevation: "base",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                id: headingSlug,
                className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().heading),
                children: heading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                children: body
            }),
            ctas && ctas.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().ctas), fixedColumns && fixedModeClasses),
                children: ctas.map((cta, idx)=>{
                    if (idx == 0) {
                        // eslint-disable-next-line react/no-array-index-key
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            href: cta.url,
                            text: cta.text
                        }, idx);
                    } else {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            href: cta.url,
                            text: cta.text,
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__/* .IconArrowRight16 */ .k, {}),
                            iconPosition: "trailing"
                        }, idx);
                    }
                })
            }) : null,
            iconCardLinks && iconCardLinks.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().iconCardLinks), fixedColumns && fixedModeClasses),
                children: iconCardLinks.map(({ icon , text , url  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: content_supported_icons__WEBPACK_IMPORTED_MODULE_3__/* .SUPPORTED_ICONS */ .e[icon],
                            text: text,
                            url: url
                        })
                    }, url);
                })
            }) : null
        ]
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalloutCard);


/***/ }),

/***/ 85306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88805);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88699);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const IconCardLink = ({ icon , productSlug ="hcp" , text , url  })=>{
    let colorToken;
    if (productSlug === "sentinel" || productSlug === "hcp") {
        colorToken = "--token-color-hashicorp-brand";
    } else {
        colorToken = `--token-color-${productSlug}-brand`;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ariaLabel: text,
        className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        href: url,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),
                style: {
                    "--icon-color": `var(${colorToken})`
                },
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: text
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCardLink);


/***/ }),

/***/ 84507:
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
/* harmony import */ var components_callout_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57436);
/* harmony import */ var data_vagrant_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20110);
/* harmony import */ var views_product_downloads_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6647);
/* harmony import */ var views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_3__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_4__]);
([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_3__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




function VagrantDownloadsPage(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_downloads_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        merchandisingSlot: {
            position: "below",
            slot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_callout_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                heading: "VMware Utility",
                headingSlug: "vmware-utility",
                body: "From this page you can download the VMware utility, review lease information and much more. These tools are maintained by HashiCorp and the Vagrant Community.",
                ctas: [
                    {
                        text: "Download",
                        url: "/vagrant/downloads/vmware"
                    }
                ]
            })
        }
    });
}
const getStaticProps = (0,views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_4__/* .generateGetStaticProps */ .A)(data_vagrant_json__WEBPACK_IMPORTED_MODULE_2__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VagrantDownloadsPage);

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

/***/ 20110:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Vagrant","slug":"vagrant","algoliaConfig":{"indexName":"product_VAGRANT","searchOnlyApiKey":"c4c3e690f46940fa3ba9624da4d7fc0c"},"analyticsConfig":{"includedDomains":"vagrantup.com www.vagrantup.com","segmentWriteKey":"wFMyBE4PJCZttWfu0pNhYdWr7ygW0io4"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vagrant by HashiCorp","description":"Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.","image":"https://www.vagrantup.com/vagrant/img/og-image.png","icon":[{"href":"/vagrant-public/favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"2.2.19","vmwareUtilityVersion":"1.0.21","subnavItems":[{"text":"Intro","url":"https://developer.hashicorp.com/vagrant/intro","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/vagrant/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","intro","vagrant-cloud","vmware","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro","addOverviewItem":false},{"iconName":"cloud","name":"Vagrant Cloud","path":"vagrant-cloud"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,4975,2851,5888,265,7232,4884,6182,6415,4506,2529,4653], () => (__webpack_exec__(84507)));
module.exports = __webpack_exports__;

})();