"use strict";
(() => {
var exports = {};
exports.id = 5377;
exports.ids = [5377];
exports.modules = {

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 90018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_api_validate_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51941);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const PATHS_LIMIT = 128;
/**
 * Accepts a POST request with an array of paths,
 * triggers revalidation for paths as they are passed.
 *
 * They should be formatted as full paths from the root of developer.hashicorp.com
 */ async function handler(request, response) {
    if (request.method !== "POST") {
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.NOT_FOUND);
        return;
    }
    const { paths  } = request.body;
    const pathsExist = paths?.length > 0;
    if (!pathsExist) {
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json({
            error: "[revalidation failed]: No paths provided."
        });
        return;
    }
    // TODO could remove this limit if we refactor for concurrency
    if (paths.length > PATHS_LIMIT) {
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json({
            error: `[revalidation failed]: paths exceed limit of ${PATHS_LIMIT}.`
        });
        return;
    }
    try {
        const revalidatePromises = [];
        paths.forEach((path)=>{
            // remove any trailing slash
            const formattedPath = path.replace(/\/$/, "");
            console.log("[revalidate]", formattedPath);
            revalidatePromises.push(response.revalidate(formattedPath));
        });
        await Promise.allSettled(revalidatePromises);
        response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.OK).send(`[revalidation success]: for ${paths.length} paths`);
    } catch (e) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.error("[revalidation error] ", e);
        return response.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.INTERNAL_SERVER_ERROR).send(`[revalidation error]:  ${e.message}`);
    }
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1941], () => (__webpack_exec__(90018)));
module.exports = __webpack_exports__;

})();