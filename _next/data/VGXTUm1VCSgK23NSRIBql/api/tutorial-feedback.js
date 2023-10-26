"use strict";
(() => {
var exports = {};
exports.id = 5994;
exports.ids = [5994];
exports.modules = {

/***/ 30421:
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ 3368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tutorial_feedback)
});

// EXTERNAL MODULE: external "google-spreadsheet"
var external_google_spreadsheet_ = __webpack_require__(30421);
;// CONCATENATED MODULE: external "bowser"
const external_bowser_namespaceObject = require("bowser");
var external_bowser_default = /*#__PURE__*/__webpack_require__.n(external_bowser_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/tutorial-feedback.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const FEEDBACK_SHEET_ID = process.env.TUTORIAL_FEEDBACK_SHEET_ID;
const FEEDBACK_SERVICE_EMAIL = process.env.FEEDBACK_SERVICE_EMAIL;
const FEEDBACK_PRIVATE_KEY = process.env.FEEDBACK_PRIVATE_KEY;
const HASHI_ENV = "project-preview";
async function setupDocument() {
    const private_key = FEEDBACK_PRIVATE_KEY.replace(/\\n/g, "\n");
    const doc = new external_google_spreadsheet_.GoogleSpreadsheet(FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
        client_email: FEEDBACK_SERVICE_EMAIL,
        private_key
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    return sheet;
}
async function validateRequest({ body , headers  }) {
    if (HASHI_ENV === "production" && headers.origin !== "https://developer.hashicorp.com") {
        const error = new Error("Invalid host");
        error.status = 403;
        throw error;
    }
    const requiredKeys = [
        "sessionId",
        "page",
        "responses",
        "timestamp"
    ];
    const missing = [];
    requiredKeys.forEach((key)=>{
        if (!body[key]) {
            missing.push(key);
        }
    });
    if (missing.length > 0) {
        const error1 = new Error(`The following required fields are missing: ${missing}`);
        error1.status = 400;
        throw error1;
    }
    return body;
}
async function findAndUpdate(sheet, newRow) {
    const { sessionId  } = newRow;
    const rows = await sheet.getRows();
    let existingRowIndex = null;
    rows.some((row, index)=>{
        if (row.sessionId === sessionId) {
            existingRowIndex = index;
            return true;
        }
    });
    if (existingRowIndex) {
        //  we have to assign individual properties this way bc the column properties are getter/setters
        Object.keys(newRow).forEach((key)=>{
            rows[existingRowIndex][key] = newRow[key];
        });
        return rows[existingRowIndex];
    } else {
        return false;
    }
}
const submitFeedback = async (req, res)=>{
    try {
        const requestBody = await validateRequest(req);
        const sheet = await setupDocument();
        const { responses , sessionId , ...rest } = requestBody;
        const { helpful , ...otherResponses } = responses;
        const { browser , os , platform  } = external_bowser_default().parse(req.headers["user-agent"]);
        const newRow = {
            sessionId,
            helpful,
            ...otherResponses,
            ...rest,
            browser: `${browser.name} ${browser.version}`,
            os: `${os.name} ${os.version}`,
            platform: platform.type
        };
        const updatedRow = await findAndUpdate(sheet, newRow);
        if (updatedRow) {
            await updatedRow.save();
        } else {
            await sheet.addRow({
                ...newRow
            });
        }
        res.status(204).end();
    } catch (error) {
        console.error("Error occurred. ", error);
        let errorMessage = "An unexpected error occurred.";
        if (error.response?.status === 404 || error.response?.status === 400) {
            errorMessage = `An error occurred: ${error.message}`;
        }
        res.status(error.response?.status || 500).json({
            body: {
                error: errorMessage
            }
        });
    }
};
/* harmony default export */ const tutorial_feedback = (submitFeedback);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3368));
module.exports = __webpack_exports__;

})();