(() => {
var exports = {};
exports.id = 3557;
exports.ids = [3557];
exports.modules = {

/***/ 76926:
/***/ ((module) => {

// Exports
module.exports = {
	"hds-copy-snippet": "copy-snippet_hds-copy-snippet__WTmrj",
	"mock-focus": "copy-snippet_mock-focus__DBvF0",
	"mock-active": "copy-snippet_mock-active__g1wrQ",
	"hds-copy-snippet--color-primary": "copy-snippet_hds-copy-snippet--color-primary__wN6nB",
	"mock-hover": "copy-snippet_mock-hover__tzyUQ",
	"hds-copy-snippet--color-secondary": "copy-snippet_hds-copy-snippet--color-secondary__2p925",
	"hds-copy-snippet__icon": "copy-snippet_hds-copy-snippet__icon___h6FZ",
	"hds-copy-snippet--status-success": "copy-snippet_hds-copy-snippet--status-success__jS_0g",
	"hds-copy-snippet--status-error": "copy-snippet_hds-copy-snippet--status-error__bEO3C",
	"hds-copy-snippet__text": "copy-snippet_hds-copy-snippet__text__VyweC",
	"hds-copy-snippet--width-full": "copy-snippet_hds-copy-snippet--width-full__htOcg",
	"hds-copy-snippet__text--truncated": "copy-snippet_hds-copy-snippet__text--truncated__MLsEG"
};


/***/ }),

/***/ 15786:
/***/ ((module) => {

// Exports
module.exports = {
	"subheading": "account-view_subheading__Ru0k4",
	"sectionTitle": "account-view_sectionTitle__LFhBn",
	"section": "account-view_section__BnowA",
	"description": "account-view_description__tR6st hds-typography-body-200",
	"copySnippetWrapper": "account-view_copySnippetWrapper__dBgkT"
};


/***/ }),

/***/ 81328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CopySnippet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_clipboard_copy_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39344);
/* harmony import */ var _hashicorp_flight_icons_svg_react_clipboard_checked_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91501);
/* harmony import */ var _hashicorp_flight_icons_svg_react_clipboard_x_16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70597);
/* harmony import */ var _copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76926);
/* harmony import */ var _copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * @see https://helios.hashicorp.design/components/copy/snippet
 */ function CopySnippet({ textToCopy , color ="primary" , isFullWidth =false , isTruncated =false  }) {
    // note: error exists in the original HDS css but
    // is not yet used in this component
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("idle");
    const handleClick = ()=>{
        setStatus("success");
        navigator.clipboard.writeText(textToCopy);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (status !== "idle") {
            const timeout = setTimeout(()=>{
                setStatus("idle");
            }, 3000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        status
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet"]), {
            [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet--color-primary"])]: color === "primary",
            [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet--color-secondary"])]: color === "secondary",
            [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet--width-full"])]: isFullWidth,
            [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet--status-success"])]: status === "success",
            [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet--status-error"])]: status === "error"
        }),
        type: "button",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet__text"]), "hds-typography-code-100", {
                    [(_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet__text--truncated"])]: isTruncated
                }),
                children: textToCopy
            }),
            status == "idle" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_clipboard_copy_16__WEBPACK_IMPORTED_MODULE_3__/* .IconClipboardCopy16 */ .P, {
                className: (_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet__icon"])
            }),
            status == "success" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_clipboard_checked_16__WEBPACK_IMPORTED_MODULE_4__/* .IconClipboardChecked16 */ .O, {
                className: (_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet__icon"])
            }),
            status == "error" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_clipboard_x_16__WEBPACK_IMPORTED_MODULE_5__/* .IconClipboardX16 */ .E, {
                className: (_copy_snippet_module_css__WEBPACK_IMPORTED_MODULE_6___default()["hds-copy-snippet__icon"])
            })
        ]
    });
}


/***/ }),

/***/ 83628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93265);
/* harmony import */ var _inline_link_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67325);
/* harmony import */ var _inline_link_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inline_link_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const InlineLink = ({ children , className , color ="primary" , href , textSize =300 , textWeight ="regular" , ...rest })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_inline_link_module_css__WEBPACK_IMPORTED_MODULE_3___default().root), `hds-typography-body-${textSize}`, `hds-font-weight-${textWeight}`, (_inline_link_module_css__WEBPACK_IMPORTED_MODULE_3___default())[color], className);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        className: classes,
        href: href,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineLink);


/***/ }),

/***/ 26161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var views_profile_account_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_profile_account_view__WEBPACK_IMPORTED_MODULE_0__]);
views_profile_account_view__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_profile_account_view__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileAccountView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39626);
/* harmony import */ var hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66245);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64884);
/* harmony import */ var views_authenticated_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16743);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33356);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14617);
/* harmony import */ var components_hds_copy_snippet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81328);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88918);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26789);
/* harmony import */ var components_inline_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83628);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66223);
/* harmony import */ var _account_view_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15786);
/* harmony import */ var _account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_account_view_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__]);
layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 












function ProfileAccountView() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_authenticated_view__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            AlternateSidebar: _sidebar__WEBPACK_IMPORTED_MODULE_11__/* .ProfileSidebar */ .Z,
            sidebarNavDataLevels: [],
            breadcrumbLinks: [
                {
                    title: "Developer",
                    url: "/"
                },
                {
                    title: "Basic info",
                    url: "/profile/account",
                    isCurrentPage: true
                }
            ],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileAccountViewContent, {})
        })
    });
}
const ProfileAccountViewContent = ()=>{
    const { user  } = (0,hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                level: 1,
                weight: "bold",
                size: 500,
                children: "Basic info"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().subheading),
                children: [
                    "A read-only view of your profile details from\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inline_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        href: "https://portal.cloud.hashicorp.com/account-settings",
                        children: "HCP Account settings"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                level: 2,
                weight: "bold",
                size: 200,
                className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().sectionTitle),
                children: "Primary email"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().section),
                elevation: "base",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),
                        children: "Email address associated with your profile name"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().copySnippetWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_hds_copy_snippet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            textToCopy: user.email
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                level: 2,
                weight: "bold",
                size: 200,
                className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().sectionTitle),
                children: "HashiCorp ID"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().section),
                elevation: "base",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),
                        children: "Your ID within HashiCorp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_account_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().copySnippetWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_hds_copy_snippet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            textToCopy: user.id
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                href: "https://portal.cloud.hashicorp.com/account-settings",
                text: "Manage account settings",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__/* .IconExternalLink16 */ .g, {}),
                iconPosition: "trailing"
            })
        ]
    });
};

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

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,1877,453,8725,1452,1878,265,7232,4884,4631], () => (__webpack_exec__(26161)));
module.exports = __webpack_exports__;

})();