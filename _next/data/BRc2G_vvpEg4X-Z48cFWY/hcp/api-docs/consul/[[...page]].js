"use strict";
(() => {
var exports = {};
exports.id = 8828;
exports.ids = [8828];
exports.modules = {

/***/ 45545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_api_docs_fetch_cloud_api_version_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53663);
/* harmony import */ var views_open_api_docs_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27477);
/* harmony import */ var views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_open_api_docs_view__WEBPACK_IMPORTED_MODULE_1__, views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__]);
([views_open_api_docs_view__WEBPACK_IMPORTED_MODULE_1__, views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Lib

// View


/**
 * Configure the specific spec file we want to fetch,
 * as well as some other minor content details and bells & whistles.
 */ const PAGE_CONFIG = {
    basePath: "/hcp/api-docs/consul",
    productSlug: "hcp",
    serviceProductSlug: "consul",
    githubSourceDirectory: {
        owner: "hashicorp",
        repo: "hcp-specs",
        path: "specs/cloud-global-network-manager-service",
        ref: "main"
    },
    statusIndicatorConfig: {
        pageUrl: "https://status.hashicorp.com",
        endpointUrl: "https://status.hashicorp.com/api/v2/components/sxffkgfb4fhb.json"
    },
    navResourceItems: [
        {
            title: "Tutorial Library",
            href: "/tutorials/library?product=consul&edition=hcp"
        },
        {
            title: "Certifications",
            href: "/certifications/networking-automation"
        },
        {
            title: "Community",
            href: "https://discuss.hashicorp.com/"
        },
        {
            title: "Support",
            href: "https://www.hashicorp.com/customer-success"
        }
    ],
    /**
	 * Massage the schema data a little bit, replacing
	 * "HashiCorp Cloud Platform" in the title with "HCP".
	 */ massageSchemaForClient: (schemaData)=>{
        // Replace "HashiCorp Cloud Platform" with "HCP" in the title
        const massagedTitle = schemaData.info.title.replace("HashiCorp Cloud Platform", "HCP");
        // Return the schema data with the revised title
        const massagedInfo = {
            ...schemaData.info,
            title: massagedTitle
        };
        return {
            ...schemaData,
            info: massagedInfo
        };
    }
};
/**
 * Get static paths, using `versionData` fetched from GitHub.
 */ 
/**
 * Get static props, using `versionData` fetched from GitHub.
 *
 * Note that only a single version may be returned, in which case the
 * version switcher will not be rendered.
 */ const getStaticProps = async ({ params  })=>{
    // Fetch all version data, based on remote `stable` & `preview` subfolders
    const versionData = await (0,lib_api_docs_fetch_cloud_api_version_data__WEBPACK_IMPORTED_MODULE_0__/* .fetchCloudApiVersionData */ .Y)(PAGE_CONFIG.githubSourceDirectory);
    /**
	 * TODO: add in support for conditionally publishing specs in hcp-specs repo
	 * For now just manually filtering out this spec as per request in slack.
	 * https://hashicorp.slack.com/archives/C5FSPUGDS/p1698178472462449
	 */ const filteredVersionData = versionData.filter((version)=>version.versionId !== "2022-02-15");
    // Generate static props based on page configuration, params, and versionData
    return await (0,views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getStaticProps */ .b)({
        ...PAGE_CONFIG,
        context: {
            params
        },
        versionData: filteredVersionData
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_open_api_docs_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 16142:
/***/ ((module) => {

module.exports = require("@octokit/core");

/***/ }),

/***/ 48827:
/***/ ((module) => {

module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@reach/dialog");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 38970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 10950:
/***/ ((module) => {

module.exports = require("extend");

/***/ }),

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 22493:
/***/ ((module) => {

module.exports = require("hast-util-to-string");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 93715:
/***/ ((module) => {

module.exports = require("is-buffer");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 23231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 70276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 57112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 45235:
/***/ ((module) => {

module.exports = require("oas-normalize");

/***/ }),

/***/ 39369:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 62555:
/***/ ((module) => {

module.exports = require("refractor");

/***/ }),

/***/ 64545:
/***/ ((module) => {

module.exports = require("rehype-stringify");

/***/ }),

/***/ 50934:
/***/ ((module) => {

module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 84269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 87586:
/***/ ((module) => {

module.exports = import("decode-named-character-reference");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 90684:
/***/ ((module) => {

module.exports = import("mdast-util-mdx");;

/***/ }),

/***/ 19282:
/***/ ((module) => {

module.exports = import("mdast-util-phrasing");;

/***/ }),

/***/ 23985:
/***/ ((module) => {

module.exports = import("micromark-core-commonmark");;

/***/ }),

/***/ 95723:
/***/ ((module) => {

module.exports = import("micromark-extension-mdxjs");;

/***/ }),

/***/ 84678:
/***/ ((module) => {

module.exports = import("micromark-factory-space");;

/***/ }),

/***/ 60718:
/***/ ((module) => {

module.exports = import("micromark-util-character");;

/***/ }),

/***/ 43471:
/***/ ((module) => {

module.exports = import("micromark-util-chunked");;

/***/ }),

/***/ 36243:
/***/ ((module) => {

module.exports = import("micromark-util-combine-extensions");;

/***/ }),

/***/ 62687:
/***/ ((module) => {

module.exports = import("micromark-util-decode-numeric-character-reference");;

/***/ }),

/***/ 22732:
/***/ ((module) => {

module.exports = import("micromark-util-decode-string");;

/***/ }),

/***/ 96997:
/***/ ((module) => {

module.exports = import("micromark-util-normalize-identifier");;

/***/ }),

/***/ 45566:
/***/ ((module) => {

module.exports = import("micromark-util-resolve-all");;

/***/ }),

/***/ 94980:
/***/ ((module) => {

module.exports = import("micromark-util-subtokenize");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 23135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 89521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 19832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 60234:
/***/ ((module) => {

module.exports = import("unist-util-is");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,7708,8942,4203,1960,1419,1023,998,3921,7864,1629,7033,9405,265,7232,2539,2676,7577,5935,7477,5075], () => (__webpack_exec__(45545)));
module.exports = __webpack_exports__;

})();