"use strict";
(() => {
var exports = {};
exports.id = 8548;
exports.ids = [8548];
exports.modules = {

/***/ 30421:
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ 58166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "allowedKeys": () => (/* binding */ allowedKeys),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
// EXTERNAL MODULE: external "google-spreadsheet"
var external_google_spreadsheet_ = __webpack_require__(30421);
;// CONCATENATED MODULE: ./src/pages/api/opt-out-feedback.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

// Filter the body for any keys that aren't included in this list
const allowedKeys = [
    "segment_anonymous_id",
    "primary_opt_out_reason",
    "details",
    "opt_out_page_url"
];
const cors = external_cors_default()({
    origin:  false ? 0 : "*",
    methods: [
        "POST"
    ]
});
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// https://nextjs.org/docs/api-routes/api-middlewares
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
async function handler(request, response) {
    // Run Cors middleware
    await runMiddleware(request, response, cors);
    // Only allow POST for this endpoint
    if (request.method !== "POST") {
        response.status(404).json({
            meta: {
                status_code: 404,
                status_text: "Not Found"
            }
        });
        return;
    }
    // Ensure that we're submitting only from developer.hashicorp
    // as our origin on production.
    if (false) {}
    // Validate Request Headers
    if (request.headers["content-type"] !== "application/json") {
        response.status(400).json({
            meta: {
                status_code: 400,
                status_text: "Bad Request"
            },
            errors: [
                {
                    msg: "expects header Content-Type: application/json"
                }
            ]
        });
        return;
    }
    // Ensure `opt_out_page_url` is specified
    if (!request.body.opt_out_page_url) {
        response.status(400).json({
            meta: {
                status_code: 400,
                status_text: "Bad Request"
            },
            errors: [
                {
                    msg: "Required body key `opt_out_page_url` is not provided"
                }
            ]
        });
        return;
    }
    // Filter out any keys that aren't sanctioned
    const filteredBody = {};
    allowedKeys.forEach((key)=>{
        if (typeof request.body[key] !== "undefined") {
            filteredBody[key] = request.body[key];
        }
    });
    // Add the timestamp
    filteredBody.submission_timestamp = new Date().toString();
    try {
        // Load up the Google Spreadsheet
        const doc = new external_google_spreadsheet_.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
        await doc.useServiceAccountAuth({
            client_email: process.env.FEEDBACK_SERVICE_EMAIL,
            private_key: process.env.FEEDBACK_PRIVATE_KEY
        });
        await doc.loadInfo();
        // Add a Row with the users feedback to the sheet
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow(filteredBody);
        // OK
        response.status(200).json({
            meta: {
                status_code: 200,
                status_text: "OK"
            }
        });
    } catch (err) {
        console.error("Google Sheet Submission Error:", err.message);
        response.status(500).json({
            meta: {
                status_code: 500,
                status_text: "Internal Server Error"
            }
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(58166));
module.exports = __webpack_exports__;

})();