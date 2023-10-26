(() => {
var exports = {};
exports.id = 2976;
exports.ids = [2976];
exports.modules = {

/***/ 33666:
/***/ ((module) => {

"use strict";
module.exports = require("@vercel/fetch");

/***/ }),

/***/ 52591:
/***/ ((module) => {

"use strict";
module.exports = require("moize");

/***/ }),

/***/ 45641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 97584:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 61953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashicorp_react_marketo_form_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hashicorp_react_marketo_form_server__WEBPACK_IMPORTED_MODULE_0__]);
_hashicorp_react_marketo_form_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
async function submissionFilter(req) {
    // reject submissions with a @qq.com email address
    if ("input" in req.body && req.body.input.length > 0 && req.body.input[0].leadFormFields.email.includes("@qq.com")) {
        return false;
    }
    return true;
}
const routes = (0,_hashicorp_react_marketo_form_server__WEBPACK_IMPORTED_MODULE_0__/* .buildApiRoutes */ .Z)({
    submissionFilter
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24991:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: addCloudLinkHandler, addDevAnalyticsLogger, addGlobalLinkHandler, default, getProductIntentFromURL, getSegmentId, getUTMParamsCaptureState, initializeUTMParamsCapture, isAnalyticsMethodAvailable, track, useErrorPageAnalytics, usePageviewAnalytics

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "fathom-client"
const external_fathom_client_namespaceObject = require("fathom-client");
;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/use-page-view-analytics/index.tsx



function onRouteChangeComplete() {
    trackPageview();
}
/**
 * Sets up analytics calls on route changes to track page view analytics.
 * Currently uses [fathom](https://usefathom.com) under the hood.
 */ function use_page_view_analytics_usePageviewAnalytics({ siteId =process.env.NEXT_PUBLIC_FATHOM_SITE_ID , includedDomains =process.env.NEXT_PUBLIC_FATHOM_INCLUDED_DOMAINS  } = {}) {
    const router = useRouter();
    useEffect(()=>{
        if (true) {
            // These short-circuits prwevent the following from happening:
            // - Prevents runtime crash if siteId or includedDomains are not set
            if (!siteId || !includedDomains) return;
            // - Prevents instant 404 when a Fathom client method is called and the navigator.sendBeacon method is unavailable
            if (navigator.sendBeacon === undefined) return;
            load(siteId, {
                url: "https://tarantula.hashicorp.com/script.js",
                includedDomains: includedDomains.split(" ")
            });
            // Record a pageview when route changes
            router.events.on("routeChangeComplete", onRouteChangeComplete);
            // Unassign event listener
            return ()=>{
                router.events.off("routeChangeComplete", onRouteChangeComplete);
            };
        } else {}
    }, [
        includedDomains,
        siteId,
        router.events
    ]);
}

;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/use-error-page-analytics/index.tsx

/**
 * Given an error category to record,
 * make a call to window.analytics.track on mount and
 * when the provided statusCode changes, in order to record the
 * the specified error at the current window.location.href.
 *
 * Relies on window.analytics.track() being a valid function
 * which can be called as window.analytics.track('Error Page Loaded', { http_status_code, label, referrer }).
 */ function useErrorPageAnalytics(/** The HTTP status code to send with the track event under `http_status_code` */ statusCode) {
    useEffect(()=>{
        if (false) {}
    }, [
        statusCode
    ]);
}

// EXTERNAL MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(97584);
;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/utm-params-capture/index.ts

const UTM_ALLOW_LIST = (/* unused pure expression or super */ null && ([
    "utm_source",
    "utm_medium",
    "utm_offer",
    "utm_campaign",
    "utm_content",
    "utm_channel_bucket"
]));
const utmParamsState = {};
function initializeUTMParamsCapture() {
    if (true) {
        return;
    }
    // Pull search params from URL once the app mounts.
    // Store the allowed UTM params as cookies.
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key)=>{
        if (UTM_ALLOW_LIST.includes(key)) {
            Cookies.set(key, value, {
                expires: 30
            });
        }
    });
    // Read the stored UTM params from cookies to update
    // utmParamsState which can be accessed by getUTMParamsCaptureState.
    UTM_ALLOW_LIST.forEach((key)=>{
        const keyFromCookie = Cookies.get(key);
        if (keyFromCookie) {
            utmParamsState[key] = keyFromCookie;
        }
    });
}
function utm_params_capture_getUTMParamsCaptureState() {
    return utmParamsState;
}

;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/add-cloud-link-handler/index.ts


const destinations = (/* unused pure expression or super */ null && ([
    "portal.cloud.hashicorp.com",
    "app.terraform.io"
]));
const containsDestination = (str)=>destinations.some(function(destination) {
        return str.indexOf(destination) >= 0;
    });
// Track if we've setup this handler already to prevent registering the handler
// multiple times.
let hasHandler = false;
function addCloudLinkHandler(callback) {
    if (true) return;
    window.addEventListener("click", (event)=>{
        const linkElement = event.target.closest("a");
        if (linkElement && containsDestination(linkElement.href)) {
            event.preventDefault();
            const productIntent = getProductIntentFromURL();
            const forwardedSearchParams = {
                ...getUTMParamsCaptureState(),
                ...productIntent && {
                    product_intent: productIntent
                }
            };
            try {
                const url = new URL(linkElement.href);
                const urlSearchParams = url.searchParams;
                urlSearchParams.forEach((value, key)=>{
                    if (!forwardedSearchParams.hasOwnProperty(key)) {
                        forwardedSearchParams[key] = value;
                    }
                });
                const destinationUrl = `${url.origin}${url.pathname}${Object.keys(forwardedSearchParams).length > 0 ? `?${new URLSearchParams(forwardedSearchParams).toString()}` : ""}`;
                callback && callback(destinationUrl);
                if (linkElement.getAttribute("target") === "_blank" || event.ctrlKey || event.metaKey) {
                    window.open(destinationUrl, "_blank");
                } else {
                    location.href = destinationUrl;
                }
            } catch (error) {
                location.href = linkElement.href;
                console.error(error);
            }
        }
    });
    hasHandler = true;
}

;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/add-global-link-handler/index.ts



const add_global_link_handler_destinations = (/* unused pure expression or super */ null && ([
    "https://app.terraform.io",
    "https://boundaryproject.io",
    "https://cloud.hashicorp.com",
    "https://consul.io",
    "https://developer.hashicorp.com",
    "https://hashicorp.com",
    "https://nomadproject.io",
    "https://packer.io",
    "https://portal.cloud.hashicorp.com",
    "https://registry.terraform.io",
    "https://terraform.io",
    "https://vagrantup.com",
    "https://vaultproject.io",
    "https://waypointproject.io",
    "https://www.boundaryproject.io",
    "https://www.consul.io",
    "https://www.hashicorp.com",
    "https://www.nomadproject.io",
    "https://www.packer.io",
    "https://www.terraform.io",
    "https://www.vagrantup.com",
    "https://www.vaultproject.io",
    "https://www.waypointproject.io"
]));
const add_global_link_handler_containsDestination = (str)=>add_global_link_handler_destinations.some(function(destination) {
        return str.indexOf(destination) >= 0;
    });
// Track if we've setup this handler already to prevent registering the handler
// multiple times.
let add_global_link_handler_hasHandler = false;
function addGlobalLinkHandler(callback) {
    if (true) return;
    window.addEventListener("click", (event)=>{
        const linkElement = event.target.closest("a");
        if (linkElement && add_global_link_handler_containsDestination(linkElement.attributes.getNamedItem("href").value)) {
            const segmentAnonymousId = getSegmentId();
            const productIntent = getProductIntentFromURL();
            const utmParams = getUTMParamsCaptureState();
            const url = new URL(linkElement.href);
            // Safegaurd against absolute URLs that are on the same domain origin
            if (window.location.origin === url.origin) {
                return;
            }
            event.preventDefault();
            if (segmentAnonymousId) {
                url.searchParams.set("ajs_aid", segmentAnonymousId);
            }
            if (productIntent) {
                url.searchParams.set("product_intent", productIntent);
            }
            if (Object.keys(utmParams).length > 0) {
                for (const [key, value] of Object.entries(utmParams)){
                    url.searchParams.set(key, value);
                }
            }
            callback && callback(url.href);
            if (linkElement.getAttribute("target") === "_blank" || event.ctrlKey || event.metaKey) {
                window.open(url.href, "_blank");
            } else {
                location.href = url.href;
            }
        }
    });
    add_global_link_handler_hasHandler = true;
}

;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/analytics-event-logger/index.ts
function createLogger(type) {
    return (ctx)=>{
        console.groupCollapsed(`%c${type}`, "color:white;background:green;border-radius:4px;padding:2px 4px;", ctx.event.event, ctx.event.properties);
        console.log(ctx.event);
        console.groupEnd();
        return ctx;
    };
}
/**
 * A segment analytics plugin to log out calls to track in a structured way. Includes the full event payload
 * in a collapsed console group for further inspection, without interaction the event name and event properties
 * are visible.
 */ const AnalyticsPluginEventLogger = {
    name: "Event Logger",
    version: "0.1.0",
    type: "after",
    track: createLogger("track"),
    page: createLogger("page"),
    identify: createLogger("identify"),
    load: ()=>Promise.resolve(),
    isLoaded: ()=>true
};
/**
 * Register the event logger plugin for track event logging during development.
 */ const addDevAnalyticsLogger = ()=>{
    if (false) {}
};

;// CONCATENATED MODULE: ./node_modules/@hashicorp/react-marketo-form/node_modules/@hashicorp/platform-analytics/index.tsx








/**
 * The default export here is for backwards compatibility
 */ /* harmony default export */ const platform_analytics = ((/* unused pure expression or super */ null && (usePageviewAnalytics)));



/***/ }),

/***/ 53259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ buildApiRoutes)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96581);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17486);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__]);
_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

async function notifyError(body, err) {
    if (process.env.MARKETO_ERROR_ZAPIER_WEBHOOK) {
        try {
            await fetch(process.env.MARKETO_ERROR_ZAPIER_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    body,
                    err
                }, null, 2)
            });
        } catch (err1) {
            console.error({
                body,
                err: err1
            });
        }
    }
    return Promise.resolve();
}
function isE2ETest(req) {
    // running e2e tests locally
    if (process.env.E2E_TESTS === "true") {
        return true;
    }
    // running e2e tests against a Vercel preview
    if ("input" in req.body && req.body.input.length > 0 && req.body.input[0].leadFormFields.email === "daniela.rod@example.com") {
        return true;
    }
    return false;
}
async function submitForm(req, res, { submissionFilter  }) {
    // Don't submit forms to the Marketo API when using E2E tests.
    if (isE2ETest(req)) {
        res.status(200).json({
            requestId: "7d85#181a7ae5e56",
            result: [
                {
                    id: 25325329,
                    status: "updated"
                }
            ],
            success: true
        });
        return;
    }
    try {
        const passesSubmissionFilter = submissionFilter ? await submissionFilter(req) : true;
        if (!passesSubmissionFilter) {
            // trick spammers into thinking their form submitted successfully
            res.status(200).json({
                success: true
            });
            return;
        }
        const marketoRes = await _client__WEBPACK_IMPORTED_MODULE_0__/* .submitForm */ .R2(req.body);
        const form = await marketoRes.json();
        if (!form.success || (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .includesSkippedRecords */ .HG)(form)) {
            await notifyError(req.body, form);
        }
        res.status(marketoRes.status).json(form);
    } catch (err) {
        await notifyError(req.body, err);
        res.status(500).json({
            error: "internal server error"
        });
        throw err;
    }
}
function buildApiRoutes({ submissionFilter  } = {}) {
    return async function apiRoutes(req, res) {
        const route = Array.isArray(req.query.marketo) ? req.query.marketo[0] : req.query.marketo;
        switch(route){
            case "submit":
                return submitForm(req, res, {
                    submissionFilter
                });
            default:
                return res.status(404).json({
                    error: "not found"
                });
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R2": () => (/* binding */ submitForm)
/* harmony export */ });
/* unused harmony exports getToken, getForm, getDraftFormProps, getFormProps, memoizedGetFormProps */
/* harmony import */ var _vercel_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33666);
/* harmony import */ var _vercel_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vercel_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52591);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moize__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const fetch = _vercel_fetch__WEBPACK_IMPORTED_MODULE_0___default()();
async function getToken() {
    const url = new URL(`${process.env.MARKETO_IDENTITY}/oauth/token`);
    url.searchParams.append("grant_type", "client_credentials");
    url.searchParams.append("client_id", process.env.MARKETO_CLIENT_ID);
    url.searchParams.append("client_secret", process.env.MARKETO_CLIENT_SECRET);
    const res = await fetch(url.toString());
    return await res.json();
}
async function getForm(formId) {
    const { access_token  } = await getToken();
    const fieldsResponse = await fetch(`${process.env.MARKETO_ENDPOINT}/asset/v1/form/${formId}/fields.json`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        }
    });
    const metadataResponse = await fetch(`${process.env.MARKETO_ENDPOINT}/asset/v1/form/${formId}.json`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        }
    });
    const [fields, metadata] = await Promise.all([
        fieldsResponse.json(),
        metadataResponse.json()
    ]);
    return {
        fields,
        metadata
    };
}
async function getDraftFormProps(formId) {
    const { access_token  } = await getToken();
    const fieldsResponse = await fetch(`${process.env.MARKETO_ENDPOINT}/asset/v1/form/${formId}/fields.json?status=draft`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        }
    });
    const metadataResponse = await fetch(`${process.env.MARKETO_ENDPOINT}/asset/v1/form/${formId}.json?status=draft`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        }
    });
    const [fields, metadata] = await Promise.all([
        fieldsResponse.json(),
        metadataResponse.json()
    ]);
    return {
        fields,
        metadata
    };
}
async function getFormProps(id) {
    const res = await getForm(id);
    if (res.fields.success === false || res.metadata.success === false) {
        console.log(`[marketo-form] non-200 status code when requesting form ${id}: ${JSON.stringify(res)}`);
    }
    return res;
}
const memoizedGetFormProps = moize__WEBPACK_IMPORTED_MODULE_1___default()(getFormProps, {
    isPromise: true,
    maxAge: 60 * 1000
});
async function submitForm(body) {
    const { access_token  } = await getToken();
    return await fetch(`${process.env.MARKETO_ENDPOINT}/v1/leads/submitForm.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify(body)
    });
}


/***/ }),

/***/ 58450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _api_routes__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_routes__WEBPACK_IMPORTED_MODULE_0__]);
_api_routes__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HG": () => (/* binding */ includesSkippedRecords)
/* harmony export */ });
/* unused harmony exports convertToRESTFields, formattedLabel, groupFields, calculateDefaultValues, useErrorMessage, segmentIdentify */
/* harmony import */ var _hashicorp_platform_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24991);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

// Marketo stores field names in two versions, SOAP and REST. Some API
// endpoints return SOAP names, while others accept REST names. This object
// contains all fields from our Marketo instance that have a REST name that is
// different from the SOAP name.
const soapToRESTFieldNames = {
    Address: "address",
    AnnualRevenue: "annualRevenue",
    AnonymousIP: "anonymousIP",
    BillingCity: "billingCity",
    BillingCountry: "billingCountry",
    BillingPostalCode: "billingPostalCode",
    BillingState: "billingState",
    BillingStreet: "billingStreet",
    City: "city",
    Company: "company",
    Country: "country",
    DoNotCall: "doNotCall",
    DoNotCallReason: "doNotCallReason",
    Email: "email",
    EmailInvalid: "emailInvalid",
    EmailInvalidCause: "emailInvalidCause",
    Fax: "fax",
    FirstName: "firstName",
    Industry: "industry",
    InferredCompany: "inferredCompany",
    InferredCountry: "inferredCountry",
    LastName: "lastName",
    LeadRole: "leadRole",
    LeadScore: "leadScore",
    LeadSource: "leadSource",
    LeadStatus: "leadStatus",
    MainPhone: "mainPhone",
    MarketoSocialFacebookDisplayName: "facebookDisplayName",
    MarketoSocialFacebookId: "facebookId",
    MarketoSocialFacebookPhotoURL: "facebookPhotoURL",
    MarketoSocialFacebookProfileURL: "facebookProfileURL",
    MarketoSocialFacebookReach: "facebookReach",
    MarketoSocialFacebookReferredEnrollments: "facebookReferredEnrollments",
    MarketoSocialFacebookReferredVisits: "facebookReferredVisits",
    MarketoSocialGender: "gender",
    MarketoSocialLastReferredEnrollment: "lastReferredEnrollment",
    MarketoSocialLastReferredVisit: "lastReferredVisit",
    MarketoSocialLinkedInDisplayName: "linkedInDisplayName",
    MarketoSocialLinkedInId: "linkedInId",
    MarketoSocialLinkedInPhotoURL: "linkedInPhotoURL",
    MarketoSocialLinkedInProfileURL: "linkedInProfileURL",
    MarketoSocialLinkedInReach: "linkedInReach",
    MarketoSocialLinkedInReferredEnrollments: "linkedInReferredEnrollments",
    MarketoSocialLinkedInReferredVisits: "linkedInReferredVisits",
    MarketoSocialSyndicationId: "syndicationId",
    MarketoSocialTotalReferredEnrollments: "totalReferredEnrollments",
    MarketoSocialTotalReferredVisits: "totalReferredVisits",
    MarketoSocialTwitterDisplayName: "twitterDisplayName",
    MarketoSocialTwitterId: "twitterId",
    MarketoSocialTwitterPhotoURL: "twitterPhotoURL",
    MarketoSocialTwitterProfileURL: "twitterProfileURL",
    MarketoSocialTwitterReach: "twitterReach",
    MarketoSocialTwitterReferredEnrollments: "twitterReferredEnrollments",
    MarketoSocialTwitterReferredVisits: "twitterReferredVisits",
    MiddleName: "middleName",
    MktoPersonNotes: "mktoPersonNotes",
    MobilePhone: "mobilePhone",
    NumberOfEmployees: "numberOfEmployees",
    Phone: "phone",
    PostalCode: "postalCode",
    Rating: "rating",
    Salutation: "salutation",
    SICCode: "sicCode",
    State: "state",
    Title: "title",
    Unsubscribed: "unsubscribed",
    UnsubscribedReason: "unsubscribedReason",
    Website: "website"
};
// Given an object with SOAP named keys, returns an object with SOAP
// names replaced with their REST variants.
function convertToRESTFields(data) {
    const restData = {};
    for (const [key, value] of Object.entries(data)){
        if (key in soapToRESTFieldNames) {
            restData[soapToRESTFieldNames[key]] = value;
        } else {
            restData[key] = value;
        }
    }
    return restData;
}
// Returns the label for a field.
function formattedLabel(field) {
    if ("label" in field && field.label) {
        return field.label;
    }
    return field.id;
}
// Returns a Record<string, MarketoFormField[]> that groups fields that should
// be rendered by a single component.
//
// This function allows consumers to define multiple fields that should be
// rendered by a single component. The configuration is in the following form:
// const config = {
//   groupName: {
//     fields: ["FieldNameOne", "FieldNameTwo"],
//     component: RenderComponent
//   }
// }
// In this instance, MarketoForm will call RenderComponent with a `fields` prop
// containing the MarketoFormField object for FieldNameOne and FieldNameTwo.
function groupFields(fields, groups) {
    // Final value that will be returned. Keys are group names and values are
    // an array of MarketoFormField objects.
    const grouped = {};
    fields.forEach((field)=>{
        // Check if groups contains a group targeting this field
        const customGroup = Object.entries(groups).filter(([_, config])=>{
            return config.fields.includes(field.id);
        });
        if (customGroup.length > 0) {
            const customGroupName = customGroup[0][0];
            if (customGroupName in grouped) {
                grouped[customGroupName].push(field);
            } else {
                grouped[customGroupName] = [
                    field
                ];
            }
        } else {
            grouped[field.id] = [
                field
            ];
        }
    });
    return grouped;
}
// Returns an object representing the default state of the form as defined by
// the Marketo form's configuration.
function calculateDefaultValues(fields, values) {
    const initialValues = {};
    fields.forEach((field)=>{
        if ("defaultValue" in field && field.defaultValue && field.defaultValue !== "") {
            if (field.dataType === "select") {
                // For some reason, the Marketo API returns the value for <select> fields
                // as a JSON encoded string.
                initialValues[field.id] = JSON.parse(field.defaultValue)[0];
            } else {
                initialValues[field.id] = field.defaultValue;
            }
        } else if (field.dataType === "checkbox") {
            initialValues[field.id] = field.fieldMetaData.initiallyChecked;
        } else if (field.dataType !== "htmltext") {
            // htmltext is a presentational element, and shouldn't have a value
            initialValues[field.id] = "";
        }
    });
    return {
        ...initialValues,
        ...values
    };
}
function useErrorMessage(id) {
    const { errors , touchedFields  } = useFormState();
    if (!touchedFields[id] || !errors[id]) {
        return;
    }
    return errors[id]?.message;
}
function segmentIdentify(leadFormFields) {
    // This function is wrapped in a try/catch to prevent Segment errors from
    // interrupting the form submission workflow.
    try {
        if (isAnalyticsMethodAvailable("identify")) {
            const traits = {};
            // Segment traits mostly map 1:1 to Marketo REST field names. However,
            // since that's not always the case, we check and set each
            // field individually.
            // Reference: https://segment.com/docs/connections/spec/identify/
            if ("email" in leadFormFields) {
                traits["email"] = leadFormFields["email"];
            }
            if ("firstName" in leadFormFields) {
                traits["firstName"] = leadFormFields["firstName"];
            }
            if ("lastName" in leadFormFields) {
                traits["lastName"] = leadFormFields["lastName"];
            }
            if ("phone" in leadFormFields) {
                traits["phone"] = leadFormFields["phone"];
            }
            if ("title" in leadFormFields) {
                traits["title"] = leadFormFields["title"];
            }
            if ("company" in leadFormFields) {
                traits["company"] = {
                    name: leadFormFields["company"]
                };
            }
            if ("country" in leadFormFields) {
                traits["address"] = {
                    country: leadFormFields["country"]
                };
            }
            if (Object.keys(traits).length > 0) {
                window.analytics.identify(traits);
            }
        }
    } catch (err) {
        console.error(err);
    }
}
// Returns true if any of the results have a status of skipped
function includesSkippedRecords(res) {
    return res.result.some((r)=>r.status === "skipped");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(61953));
module.exports = __webpack_exports__;

})();