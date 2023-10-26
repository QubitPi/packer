"use strict";
(() => {
var exports = {};
exports.id = 3158;
exports.ids = [3158];
exports.modules = {

/***/ 40877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semver_functions_major__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var semver_functions_major__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semver_functions_major__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semver_functions_minor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26176);
/* harmony import */ var semver_functions_minor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semver_functions_minor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semver_functions_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93451);
/* harmony import */ var semver_functions_patch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver_functions_patch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var data_terraform_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25070);
/* harmony import */ var views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6647);
/* harmony import */ var views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__]);
([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const VERSION_DOWNLOAD_CUTOFF = ">=1.0.11";
/**
 * Pulled from terraform-website/pages/downloads/index.jsx on 2022-03-09:
 * https://github.com/hashicorp/terraform-website/blob/master/pages/downloads/index.jsx#L55-L98
 *
 * Modified 2022-03-28 to replace semverGte with semverSatisfies,
 * as the former seemed to return pre-releases, which is not what we want.
 */ function filterVersions(versions, versionRange) {
    // Filter by arbitrary & reasonable version cutoff
    const filteredVersions = Object.keys(versions).filter((versionNumber)=>{
        return semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default()(versionNumber, versionRange);
    });
    /**
	 * Computes the latest patch versions for each major/minor
	 * e.g. given [1.1.2, 1.1.1, 1.1.0, 1.0.9, 1.0.8]
	 * return [1.1.2, 1.0.9]
	 */ const tree = {};
    filteredVersions.forEach((v)=>{
        const x = semver_functions_major__WEBPACK_IMPORTED_MODULE_1___default()(v);
        const y = semver_functions_minor__WEBPACK_IMPORTED_MODULE_2___default()(v);
        const z = semver_functions_patch__WEBPACK_IMPORTED_MODULE_3___default()(v);
        if (!tree[x]) {
            tree[x] = {
                [y]: z
            };
        } else if (!tree[x][y]) {
            tree[x][y] = z;
        } else {
            tree[x][y] = Math.max(tree[x][y], z);
        }
    });
    // Turn the reduced tree of latest patches only into an array
    const latestPatchesOnly = [];
    Object.entries(tree).forEach(([x, xObj])=>{
        Object.entries(xObj).forEach(([y, z])=>{
            latestPatchesOnly.push(`${x}.${y}.${z}`);
        });
    });
    // Turn the array of latest patches only into an object with release data
    const filteredVersionsObj = {};
    latestPatchesOnly.forEach((versionNumber)=>{
        filteredVersionsObj[versionNumber] = versions[versionNumber];
    });
    return filteredVersionsObj;
}
const getStaticProps = async ()=>{
    const generatedGetStaticProps = (0,views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_6__/* .generateGetStaticProps */ .A)(data_terraform_json__WEBPACK_IMPORTED_MODULE_4__);
    const generatedProps = await generatedGetStaticProps();
    // Filter versions based on VERSION_DOWNLOAD_CUTOFF
    const rawVersions = generatedProps.props?.releases?.versions;
    const filteredVersions = filterVersions(rawVersions, VERSION_DOWNLOAD_CUTOFF);
    generatedProps.props.releases.versions = filteredVersions;
    // @ts-expect-error - sortedAndFilteredVersions is present on generatedProps.props
    //
    // leverage the same TF-specific version filtering behavior on `.releases.versions`
    generatedProps.props.sortedAndFilteredVersions = Object.values(filteredVersions);
    return generatedProps;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_product_downloads_view__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 48827:
/***/ ((module) => {

module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@reach/dialog");

/***/ }),

/***/ 9677:
/***/ ((module) => {

module.exports = require("@reach/portal");

/***/ }),

/***/ 80395:
/***/ ((module) => {

module.exports = require("@reach/tooltip");

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

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 22493:
/***/ ((module) => {

module.exports = require("hast-util-to-string");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 23231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 79103:
/***/ ((module) => {

module.exports = require("query-string");

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

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 62555:
/***/ ((module) => {

module.exports = require("refractor");

/***/ }),

/***/ 68221:
/***/ ((module) => {

module.exports = require("rehype-parse");

/***/ }),

/***/ 64545:
/***/ ((module) => {

module.exports = require("rehype-stringify");

/***/ }),

/***/ 260:
/***/ ((module) => {

module.exports = require("semver/functions/major");

/***/ }),

/***/ 26176:
/***/ ((module) => {

module.exports = require("semver/functions/minor");

/***/ }),

/***/ 56563:
/***/ ((module) => {

module.exports = require("semver/functions/parse");

/***/ }),

/***/ 93451:
/***/ ((module) => {

module.exports = require("semver/functions/patch");

/***/ }),

/***/ 95370:
/***/ ((module) => {

module.exports = require("semver/functions/prerelease");

/***/ }),

/***/ 97326:
/***/ ((module) => {

module.exports = require("semver/functions/rsort");

/***/ }),

/***/ 908:
/***/ ((module) => {

module.exports = require("semver/functions/satisfies");

/***/ }),

/***/ 61865:
/***/ ((module) => {

module.exports = require("semver/functions/valid");

/***/ }),

/***/ 50934:
/***/ ((module) => {

module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 94825:
/***/ ((module) => {

module.exports = require("unified");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 23135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

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

/***/ }),

/***/ 25070:
/***/ ((module) => {

module.exports = JSON.parse('{"slug":"terraform","name":"Terraform","algoliaConfig":{"indexName":"product_TERRAFORM"},"basePaths":["cdktf","cli","cloud-docs","cloud-docs/agents","docs","enterprise","internals","intro","language","plugin","plugin/framework","plugin/log","plugin/mux","plugin/sdkv2","plugin/testing","registry","downloads"],"docsNavItems":["docs","language","cli","cloud-docs","enterprise","cdktf",{"icon":"provider","label":"Provider Use","fullPath":"/terraform/language/providers"},"plugin","registry",{"icon":"handshake","label":"Integration Program","fullPath":"/terraform/docs/partnerships"}],"rootDocsPaths":[{"iconName":"code","name":"CDK for Terraform","path":"cdktf","productSlugForLoader":"terraform-cdk"},{"iconName":"terminal-screen","name":"Terraform CLI","path":"cli"},{"iconName":"cloud","name":"Terraform Cloud","path":"cloud-docs","productSlugForLoader":"terraform-docs-common"},{"iconName":"cloud","name":"Cloud Docs Agents","navDataPrefix":"cloud-docs-agents","path":"cloud-docs/agents","productSlugForLoader":"terraform-docs-agents"},{"iconName":"docs","name":"About the Docs","path":"docs","productSlugForLoader":"terraform-docs-common"},{"iconName":"org","name":"Terraform Enterprise","path":"enterprise","productSlugForLoader":"ptfe-releases"},{"iconName":"docs","name":"Internals","path":"internals"},{"iconName":"docs","name":"Intro","path":"intro"},{"iconName":"file-source","name":"Configuration Language","path":"language"},{"iconName":"wrench","name":"Plugin Development","path":"plugin","productSlugForLoader":"terraform-docs-common"},{"iconName":"plug","name":"Framework","navDataPrefix":"plugin-framework","path":"plugin/framework","productSlugForLoader":"terraform-plugin-framework"},{"iconName":"plug","name":"Logging","navDataPrefix":"plugin-log","path":"plugin/log","productSlugForLoader":"terraform-plugin-log"},{"iconName":"plug","name":"Combining and Translating","navDataPrefix":"plugin-mux","path":"plugin/mux","productSlugForLoader":"terraform-plugin-mux"},{"iconName":"plug","name":"SDKv2","path":"plugin/sdkv2","productSlugForLoader":"terraform-plugin-sdk","navDataPrefix":"plugin-sdkv2"},{"iconName":"plug","name":"Testing","path":"plugin/testing","productSlugForLoader":"terraform-plugin-testing","navDataPrefix":"plugin-testing"},{"iconName":"plus-circle","name":"Registry Publishing","path":"registry","productSlugForLoader":"terraform-docs-common"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,4975,2851,5888,265,7232,4884,6182,6415,4506,2529,4653], () => (__webpack_exec__(40877)));
module.exports = __webpack_exports__;

})();