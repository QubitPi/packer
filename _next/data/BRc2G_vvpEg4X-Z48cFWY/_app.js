(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 51389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AIFeatureToast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_wand_24__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60521);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35643);
/* harmony import */ var hooks_use_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66245);
/* harmony import */ var components_command_bar_components_cmd_ctrl_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62989);
/* harmony import */ var components_command_bar_components_k_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42670);
/* harmony import */ var components_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42892);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








const COOKIE_IGNORE_AI_TOAST = "dev-dot-ignore-ai-toast";
const COOKIE_HAS_SEEN_AI_TOAST = "dev-dot-has-seen-ai-toast";
const COOKIE_EXPIRES_AT = new Date("12/25/2024") // arbitrary date
;
const TOAST_AUTO_DISMISS_MS = 15000;
function AIFeatureToast() {
    const { session  } = (0,hooks_use_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // skip toast if we're past the expiration date
        if (new Date() > COOKIE_EXPIRES_AT) {
            return;
        }
        // skip toast if user has previously dismissed it
        if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(COOKIE_IGNORE_AI_TOAST)) {
            return;
        }
        // skip toast if it's already been seen
        if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(COOKIE_HAS_SEEN_AI_TOAST)) {
            return;
        }
        if (session?.meta.isAIEnabled) {
            (0,components_toast__WEBPACK_IMPORTED_MODULE_4__/* .toast */ .Am)({
                color: components_toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastColor.highlight */ .PQ.highlight,
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_wand_24__WEBPACK_IMPORTED_MODULE_3__/* .IconWand24 */ .a, {}),
                title: "Welcome to the Developer AI closed beta",
                description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "Try it out in our",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            ariaLabel: "Command or control key",
                            color: "neutral-dark-mode",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_command_bar_components_cmd_ctrl_icon__WEBPACK_IMPORTED_MODULE_6__/* .CmdCtrlIcon */ .X, {}),
                            size: "small"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            ariaLabel: "K key",
                            color: "neutral-dark-mode",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_command_bar_components_k_icon__WEBPACK_IMPORTED_MODULE_7__/* .KIcon */ .E, {}),
                            size: "small"
                        }),
                        " ",
                        "menu!"
                    ]
                }),
                autoDismiss: TOAST_AUTO_DISMISS_MS,
                onDismissCallback: ()=>{
                    // when user dismisses the toast, we should ignore it going forwards
                    js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set(COOKIE_IGNORE_AI_TOAST, true, {
                        expires: COOKIE_EXPIRES_AT
                    });
                    // remove extra cookie
                    js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove(COOKIE_HAS_SEEN_AI_TOAST);
                },
                dismissOnRouteChange: false
            });
            // if the user didn't explicitly dismiss the toast, show it again in 24 hours
            // this is a simple means to boost discoverability / awareness
            js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set(COOKIE_HAS_SEEN_AI_TOAST, true, {
                expires: 1
            });
        }
    }, [
        session?.meta.isAIEnabled
    ]);
    // no dom elements are needed for this component
    return null;
}


/***/ }),

/***/ 80938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeadMetadata)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./node_modules/@hashicorp/react-head/index.tsx + 2 modules
var react_head = __webpack_require__(12851);
// EXTERNAL MODULE: ./src/contexts/index.ts + 3 modules
var contexts = __webpack_require__(38116);
;// CONCATENATED MODULE: ./src/lib/get-deployed-url.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Returns a fully qualified URL to the deployed app for preview deployments and the production deployment. Useful
 * if you need to build a full URL in the context of the app.
 *
 * Returns an empty string in development.
 */ function getDeployedUrl() {
    // preview deployments should derive the url from Vercel's env var
    if (false) {}
    if (false) {}
    // use our canonical URL for production
    return "https://developer.hashicorp.com";
}

;// CONCATENATED MODULE: ./src/components/head-metadata/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/**
 * Returns the fully qualified developer URL for the current page, minus the query string
 *
 * TODO: If we want to support specific query params in the canonical, consider adding an allow list here and instead filtering the search params based on that
 */ const useFullUrl = (base = "https://developer.hashicorp.com")=>{
    const { asPath  } = (0,router_.useRouter)();
    const url = new URL(asPath, base);
    // remove any query params from the URL to ensure they don't end up in the canonical
    url.search = "";
    return url.toString();
};
/**
 * Builds up the the necessary meta tags for the site. Rendered in `_app`, where it receives `pageProps.metadata` as props
 *
 * We build up a page title that looks like {props.title} | {currentProduct} | {root title}
 */ function HeadMetadata(props) {
    const { name: productName , slug: productSlug  } = (0,contexts/* useCurrentProduct */.j2)() ?? {};
    // Use the fully qualified current page URL as the canonical URL
    const canonicalUrl = useFullUrl();
    const router = (0,router_.useRouter)();
    // do not render any meta tags if serving an io page
    if (router.pathname.includes("_proxied-dot-io")) {
        return null;
    }
    const titleParts = [
        "HashiCorp Developer"
    ];
    const description = props.description ?? "Explore {product} product documentation, tutorials, and examples.";
    // We're using .unshift() to add the following elements to the beginning of the array
    if (productName) {
        titleParts.unshift(productName);
    }
    if (props.title) {
        titleParts.unshift(props.title);
    }
    const title = titleParts.join(" | ");
    const finalDescription = description.replace("{product}", productName ?? "HashiCorp");
    const ogImagePath = props.localOgImage || `${productSlug ?? "base"}.jpg`;
    const ogImageUrl = `${getDeployedUrl()}/og-image/${ogImagePath}`;
    return(// TODO: OpenGraph image to be passed as the image prop here
    /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_head/* default */.Z, {
            title: title,
            siteName: title,
            pageName: title,
            description: finalDescription,
            image: ogImageUrl,
            canonicalUrl: canonicalUrl,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico",
                    sizes: "any"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/icon.svg",
                    type: "image/svg+xml"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "google-site-verification",
                    content: "zRQZqfAsOX-ypXfU0mzAIzb5rUvj5fA4Zw2jWJRN-JI"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "xnvnvv1i0wl4tf0pzaymb",
                    "data-product": "hcp"
                }, "xnvnvv1i0wl4tf0pzaymb"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "36fp2i1pj67d8cjtzf4fi9",
                    "data-product": "terraform"
                }, "36fp2i1pj67d8cjtzf4fi9"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "nbe87kfyp1sck7b13vj1i",
                    "data-product": "packer"
                }, "nbe87kfyp1sck7b13vj1i"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "wvsmmqa1cfb9am9zlwfj",
                    "data-product": "consul"
                }, "wvsmmqa1cfb9am9zlwfj"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "cw22oopfwr68ujj0n5pn9i",
                    "data-product": "boundary"
                }, "cw22oopfwr68ujj0n5pn9i"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "lkslvganwfgfqfwpdeicgh",
                    "data-product": "vault"
                }, "lkslvganwfgfqfwpdeicgh"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "jl2wp2hoej9rz6c8rmqdns",
                    "data-product": "nomad"
                }, "jl2wp2hoej9rz6c8rmqdns"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "2eb0cu6xceo73t0038m0tb",
                    "data-product": "waypoint"
                }, "2eb0cu6xceo73t0038m0tb"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "zd-site-verification",
                    content: "n52xisxdf3higs2q9kuogd",
                    "data-product": "vagrant"
                }, "n52xisxdf3higs2q9kuogd"),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "twitter:image",
                    content: ogImageUrl
                }, "twitter:image")
            ]
        })
    }));
}


/***/ }),

/***/ 24293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lr": () => (/* reexport */ context_namespaceObject.FlagBagProvider),
  "Vb": () => (/* binding */ useFlags)
});

// UNUSED EXPORTS: useFlagBag

;// CONCATENATED MODULE: external "@happykit/flags/client"
const client_namespaceObject = require("@happykit/flags/client");
;// CONCATENATED MODULE: external "@happykit/flags/context"
const context_namespaceObject = require("@happykit/flags/context");
;// CONCATENATED MODULE: ./src/flags/config.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ const config = {
    envKey: "flags_pub_development_343442393171755603",
    // You can provide defaults flag values here
    defaultFlags: {
        testFlag: false
    }
};

;// CONCATENATED MODULE: ./src/flags/client.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const useFlags = (0,client_namespaceObject.createUseFlags)(config);
const useFlagBag = (0,context_namespaceObject.createUseFlagBag)();



/***/ }),

/***/ 16505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78896);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65184);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66197);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46310);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_query_params__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74091);
/* harmony import */ var next_query_params__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_query_params__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48858);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(use_query_params__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flags_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24293);
/* harmony import */ var _hashicorp_platform_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20513);
/* harmony import */ var _hashicorp_platform_util_nprogress_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27889);
/* harmony import */ var _hashicorp_platform_util_nprogress_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_platform_util_nprogress_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hashicorp_platform_util_anchor_link_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46014);
/* harmony import */ var _hashicorp_react_code_block_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41960);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38116);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lib_analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75066);
/* harmony import */ var views_error_views__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(743);
/* harmony import */ var components_head_metadata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80938);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35643);
/* harmony import */ var components_chatbox_ai_feature_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(51389);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(18006);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, views_error_views__WEBPACK_IMPORTED_MODULE_19__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, views_error_views__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party imports













// HashiCorp imports




// Global imports







// Local imports

const showProductSwitcher = (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_17__.isPreview)() && !(0,lib_env_checks__WEBPACK_IMPORTED_MODULE_17__.isDeployPreview)();
const PreviewProductSwitcher = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9146), __webpack_require__.e(2431), __webpack_require__.e(2482)]).then(__webpack_require__.bind(__webpack_require__, 92482)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "components/_proxied-dot-io/common/preview-product-select"
        ]
    },
    ssr: false
});
if (false) {}
(0,_hashicorp_platform_analytics__WEBPACK_IMPORTED_MODULE_12__/* .initializeUTMParamsCapture */ .NR)();
(0,_hashicorp_platform_analytics__WEBPACK_IMPORTED_MODULE_12__/* .addGlobalLinkHandler */ .FC)((destinationUrl)=>{
    (0,_hashicorp_platform_analytics__WEBPACK_IMPORTED_MODULE_12__/* .track */ .j)("Outbound link", {
        destination_url: destinationUrl
    });
});
function App({ Component , pageProps: { session , ...pageProps }  }) {
    const flagBag = (0,flags_client__WEBPACK_IMPORTED_MODULE_11__/* .useFlags */ .Vb)();
    (0,_hashicorp_platform_util_anchor_link_analytics__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(0,lib_analytics__WEBPACK_IMPORTED_MODULE_18__/* .makeDevAnalyticsLogger */ .gE)(), []);
    /**
	 * Initalize QueryClient with `useState` to ensure that data is not shared
	 * between different users and requests, and that only one is created per
	 * component lifecycle.
	 */ const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient({
            defaultOptions: {
                queries: {
                    // TODO: refine this value or set by HASHI_ENV
                    staleTime: Infinity
                }
            }
        }));
    const currentProduct = pageProps.product || null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__.SSRProvider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(use_query_params__WEBPACK_IMPORTED_MODULE_10__.QueryParamProvider, {
                adapter: next_query_params__WEBPACK_IMPORTED_MODULE_9__.NextAdapter,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, {
                    FallbackComponent: views_error_views__WEBPACK_IMPORTED_MODULE_19__/* .DevDotClient */ .wm,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flags_client__WEBPACK_IMPORTED_MODULE_11__/* .FlagBagProvider */ .Lr, {
                        value: flagBag,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_6__.SessionProvider, {
                            session: session,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts__WEBPACK_IMPORTED_MODULE_16__/* .DeviceSizeProvider */ .zL, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts__WEBPACK_IMPORTED_MODULE_16__/* .CurrentProductProvider */ .cD, {
                                    currentProduct: currentProduct,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_hashicorp_react_code_block_provider__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_head_metadata__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                ...pageProps.metadata
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.LazyMotion, {
                                                features: ()=>__webpack_require__.e(/* import() */ 7528).then(__webpack_require__.bind(__webpack_require__, 87528)).then((mod)=>mod.default),
                                                strict: "production" === "development",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                        ...pageProps
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_toast__WEBPACK_IMPORTED_MODULE_21__/* .Toaster */ .x7, {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_chatbox_ai_feature_toast__WEBPACK_IMPORTED_MODULE_22__/* .AIFeatureToast */ .D, {}),
                                                    showProductSwitcher ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviewProductSwitcher, {}) : null,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_8__.ReactQueryDevtools, {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18006:
/***/ (() => {



/***/ }),

/***/ 7372:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/dialog");

/***/ }),

/***/ 30161:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/popover");

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

/***/ 78896:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/ssr");

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

/***/ 46310:
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query-devtools");

/***/ }),

/***/ 33666:
/***/ ((module) => {

"use strict";
module.exports = require("@vercel/fetch");

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

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 41649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 74091:
/***/ ((module) => {

"use strict";
module.exports = require("next-query-params");

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

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 65184:
/***/ ((module) => {

"use strict";
module.exports = require("react-error-boundary");

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

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 48858:
/***/ ((module) => {

"use strict";
module.exports = require("use-query-params");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,4203,8725,3076,504,1960,5152,2851,8734,4869,265,6182,6415,6203,2676,743], () => (__webpack_exec__(16505)));
module.exports = __webpack_exports__;

})();