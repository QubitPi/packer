"use strict";
(() => {
var exports = {};
exports.id = 7151;
exports.ids = [7151];
exports.modules = {

/***/ 42891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_api_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62837);
/* harmony import */ var views_api_docs_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35419);
/* harmony import */ var views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16970);
/* harmony import */ var views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51862);
/* harmony import */ var views_api_docs_view_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40978);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_api_docs_view__WEBPACK_IMPORTED_MODULE_2__, views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_3__, views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_4__]);
([views_api_docs_view__WEBPACK_IMPORTED_MODULE_2__, views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_3__, views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Global


// View



// Components


/**
 * The product slug is used to fetch product data for the layout.
 */ const PRODUCT_SLUG = "hcp";
/**
 * The baseUrl is used to generate
 * breadcrumb links, sidebar nav levels, and version switcher links.
 */ const BASE_URL = "/hcp/api-docs/packer";
/**
 * We source version data from a directory in the `hcp-specs` repo.
 * See `fetchCloudApiVersionData` for details.
 */ const GITHUB_SOURCE_DIRECTORY = {
    owner: "hashicorp",
    repo: "hcp-specs",
    path: "specs/cloud-packer-service",
    ref: "main"
};
/**
 * Render `<ApiDocsView />` with custom operation path truncation.
 */ function HcpPackerApiDocsView(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_api_docs_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        massagePathFn: views_api_docs_view_components__WEBPACK_IMPORTED_MODULE_5__/* .truncatePackerOperationPath */ .F4,
        renderOperationIntro: ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_api_docs_view_components__WEBPACK_IMPORTED_MODULE_5__/* .PathTruncationAside */ .sH, {
                path: data.__path
            })
    });
}
/**
 * Get static paths, using `versionData` fetched from GitHub.
 */ const getStaticPaths = async ()=>{
    // If we are in a deploy preview, don't pre-render any paths
    if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)()) {
        return {
            paths: [],
            fallback: "blocking"
        };
    }
    // Otherwise, fetch version data, and use that to generate paths
    const versionData = await (0,lib_api_docs__WEBPACK_IMPORTED_MODULE_1__/* .fetchCloudApiVersionData */ .YH)(GITHUB_SOURCE_DIRECTORY);
    return await (0,views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_3__/* .getApiDocsStaticPaths */ .X)({
        productSlug: PRODUCT_SLUG,
        versionData
    });
};
/**
 * Get static props, using `versionData` fetched from GitHub.
 *
 * We need all version data for the version selector,
 * and of course we need specific data for the current version.
 */ const getStaticProps = async ({ params  })=>{
    // Fetch all version data, based on remote `stable` & `preview` subfolders
    const versionData = await (0,lib_api_docs__WEBPACK_IMPORTED_MODULE_1__/* .fetchCloudApiVersionData */ .YH)(GITHUB_SOURCE_DIRECTORY);
    // If we can't find any version data at all, render a 404 page.
    if (!versionData) {
        return {
            notFound: true
        };
    }
    // Return static props
    return await (0,views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_3__/* .getApiDocsStaticProps */ .q)({
        productSlug: PRODUCT_SLUG,
        baseUrl: BASE_URL,
        pathParts: params.page,
        versionData,
        buildCustomBreadcrumbs: ({ productData , serviceData , versionId  })=>{
            return (0,views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_4__/* .buildApiDocsBreadcrumbs */ .Kf)({
                productData,
                // HCP API docs at `/api-docs` are not linkable, so we pass url=null
                apiDocs: {
                    name: "API",
                    url: null
                },
                serviceData,
                versionId
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HcpPackerApiDocsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12544:
/***/ ((module) => {

module.exports = require("@apidevtools/json-schema-ref-parser");

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

/***/ 86110:
/***/ ((module) => {

module.exports = require("change-case");

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

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,1960,1419,1023,998,5675,3921,7864,1629,3613,4889,7033,265,7232,4884,2539,2676,7577,5935,6692], () => (__webpack_exec__(42891)));
module.exports = __webpack_exports__;

})();