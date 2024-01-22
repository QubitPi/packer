"use strict";
(() => {
var exports = {};
exports.id = 3500;
exports.ids = [3500];
exports.modules = {

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 95388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ cachedGetProductData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52591);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moize__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function getProductData(product) {
    try {
        const productData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `src/data/${product}.json`), "utf-8"));
        return productData;
    } catch (e) {
        console.error(`[Error]: unable to fetch product data for ${product} — ${e.message}`);
        throw e;
    }
}
const cachedGetProductData = moize__WEBPACK_IMPORTED_MODULE_2___default()(getProductData);


/***/ }),

/***/ 99755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_api_validate_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51941);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95388);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * @TODO move this into the /api/revalidate dir and update the filename to something like 'docs'
 * https://app.asana.com/0/1202097197789424/1204094036463681
 *
 * Accepts a POST request with a product slug, triggers revalidation for all of a product's docs paths
 * specified in its latest nav data.
 */ async function handler(request, response) {
    if (request.method !== "POST") {
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.NOT_FOUND);
        return;
    }
    const { product  } = request.body;
    if (!product) {
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json({
            error: "No product provided."
        });
        return;
    }
    // Handle TF's sub-projects
    let resolvedProduct = product;
    if (resolvedProduct.startsWith("terraform-") || resolvedProduct === "ptfe-releases") {
        resolvedProduct = "terraform";
    }
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__/* .cachedGetProductData */ .i)(resolvedProduct);
    const navDataPrefixes = productData.rootDocsPaths.map(({ navDataPrefix , path , productSlugForLoader  })=>{
        return {
            navDataPrefix,
            path,
            productSlugForLoader
        };
    });
    // fetch the latest nav data, which will be used to construct paths to revalidate
    const navDataFiles = (await Promise.all(navDataPrefixes.map(async ({ navDataPrefix , path , productSlugForLoader  })=>{
        // Only re-validate a TF sub-project's paths
        // We set resolvedProduct to `terraform`, but product will be one of the sub-project slugs
        if (product !== resolvedProduct && productSlugForLoader !== product) {
            return false;
        }
        // Default productSlugForLoader to `product` if undefined
        productSlugForLoader ||= product;
        const prefix = navDataPrefix ?? path;
        const response = await fetch(`https://content.hashicorp.com/api/content/${productSlugForLoader}/nav-data/latest/${prefix}`);
        const { result  } = await response.json();
        if (!result || !result.navData) {
            console.log(`[revalidate] failed to find nav data for path: ${path}. It is possible that this path does not have nav data, this is likely safe to ignore.`);
            return false;
        }
        return [
            path,
            result.navData
        ];
    }))).filter(Boolean);
    const revalidatePromises = [];
    // iterates through nav data recursively and creates a revalidate request
    function revalidateNavNodes(basePath, nodes) {
        nodes.forEach(({ path , routes  })=>{
            if (routes) {
                revalidateNavNodes(basePath, routes);
                return;
            }
            if (typeof path !== "undefined") {
                const pathToRevalidate = `/${resolvedProduct}/${basePath}/${path}`// remove any trailing slash
                .replace(/\/$/, "");
                console.log("[revalidate]", pathToRevalidate);
                revalidatePromises.push(response.revalidate(pathToRevalidate));
            }
        });
    }
    // iterate over each nav node and revalidate its path
    navDataFiles.forEach(([basePath, navData])=>{
        revalidateNavNodes(basePath, navData);
    });
    // TODO(brkalow): Add resiliency here, this has the potential to send off hundreds of calls depending on the product, so we should think about how we want to handle network hiccups or partial failure.
    // wait for everything to get revalidated
    await Promise.allSettled(revalidatePromises);
    response.status(200).end();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lib_api_validate_token__WEBPACK_IMPORTED_MODULE_1__/* .validateToken */ .R)(handler, {
    token: process.env.REVALIDATE_TOKEN,
    onlyMethods: [
        "POST"
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1941], () => (__webpack_exec__(99755)));
module.exports = __webpack_exports__;

})();