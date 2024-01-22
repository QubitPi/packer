(() => {
var exports = {};
exports.id = 6497;
exports.ids = [6497];
exports.modules = {

/***/ 10668:
/***/ ((module) => {

// Exports
module.exports = {
	"subheading": "bookmarks-view_subheading__oE_9b",
	"cardListHeading": "bookmarks-view_cardListHeading__fkIaO"
};


/***/ }),

/***/ 15944:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "bookmark-button-with-remove-dialog_header__uJr26",
	"buttonGroup": "bookmark-button-with-remove-dialog_buttonGroup__b6Q0J",
	"heading": "bookmark-button-with-remove-dialog_heading__sa3rO",
	"subheading": "bookmark-button-with-remove-dialog_subheading__kL_ov",
	"exitIcon": "bookmark-button-with-remove-dialog_exitIcon__0_WtZ"
};


/***/ }),

/***/ 48188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_profile_bookmarks_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85334);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_profile_bookmarks_view__WEBPACK_IMPORTED_MODULE_1__]);
views_profile_bookmarks_view__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const BookmarksPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_profile_bookmarks_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarksPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ BookmarkButtonWithRemoveDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55749);
/* harmony import */ var components_bookmark_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73309);
/* harmony import */ var hooks_bookmarks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29591);
/* harmony import */ var components_bookmark_button_toast_make_bookmark_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93181);
/* harmony import */ var components_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64698);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14617);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33356);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84345);
/* harmony import */ var _bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15944);
/* harmony import */ var _bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_bookmark_button__WEBPACK_IMPORTED_MODULE_3__, components_dialog__WEBPACK_IMPORTED_MODULE_6__]);
([components_bookmark_button__WEBPACK_IMPORTED_MODULE_3__, components_dialog__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 










function BookmarkButtonWithRemoveDialog({ tutorial  }) {
    const [showDialog, setShowDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openDialog = ()=>setShowDialog(true);
    const closeDialog = ()=>setShowDialog(false);
    const { removeBookmark  } = (0,hooks_bookmarks__WEBPACK_IMPORTED_MODULE_4__/* .useBookmarkMutations */ .AK)();
    const handleOnClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>removeBookmark(tutorial.id, {
            onSuccess: ()=>(0,components_bookmark_button_toast_make_bookmark_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("remove", tutorial.name)
        }), [
        tutorial.id,
        tutorial.name,
        removeBookmark
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bookmark_button__WEBPACK_IMPORTED_MODULE_3__/* .BookmarkButtonIconOnly */ .sg, {
                isBookmarked: true,
                handleOnClick: openDialog
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onDismiss: closeDialog,
                isOpen: showDialog,
                label: "Confirm remove bookmark",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    level: 1,
                                    size: 300,
                                    weight: "semibold",
                                    className: (_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading),
                                    children: "Are you sure you want to remove this bookmark?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: closeDialog,
                                    "aria-label": "Cancel",
                                    type: "button",
                                    className: (_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default().exitIcon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_2__/* .IconX16 */ .H, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: (_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default().subheading),
                            children: `Once the bookmark for  ${tutorial.name} is removed you will have to
						manually re-add it.`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_bookmark_button_with_remove_dialog_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttonGroup),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    text: "Remove",
                                    color: "critical",
                                    onClick: handleOnClick
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    text: "Cancel",
                                    color: "secondary",
                                    onClick: closeDialog
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ SortData)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ const SortData = {
    newest: {
        text: "Newest",
        sort: (a, b)=>{
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
    },
    oldest: {
        text: "Oldest",
        sort: (a, b)=>{
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }
    }
};


/***/ }),

/***/ 85334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_bookmarks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29591);
/* harmony import */ var lib_learn_client_api_tutorial_formatting__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38502);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64884);
/* harmony import */ var views_authenticated_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16743);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46833);
/* harmony import */ var components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53135);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33356);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14617);
/* harmony import */ var components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16557);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9334);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16950);
/* harmony import */ var components_empty_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78783);
/* harmony import */ var _components_bookmark_button_with_remove_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26894);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66223);
/* harmony import */ var _helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53334);
/* harmony import */ var _bookmarks_view_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10668);
/* harmony import */ var _bookmarks_view_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_bookmarks_view_module_css__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__, components_cards_grid_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__, _components_bookmark_button_with_remove_dialog__WEBPACK_IMPORTED_MODULE_13__]);
([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__, components_cards_grid_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__, _components_bookmark_button_with_remove_dialog__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

















/**
 * The exported view component that handles wrapping the view content in
 * `AuthenticatedView`, which automatically handles rendering gated content.
 */ const ProfileBookmarksView = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_authenticated_view__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            breadcrumbLinks: [
                {
                    title: "Developer",
                    url: "/"
                },
                {
                    title: "Bookmarks",
                    url: "/profile/bookmarks",
                    isCurrentPage: true
                }
            ],
            AlternateSidebar: _sidebar__WEBPACK_IMPORTED_MODULE_14__/* .ProfileSidebar */ .Z,
            sidebarNavDataLevels: [],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileBookmarksViewContent, {})
        })
    });
};
/**
 * The content of the ProfileView that is gated behind authentication.
 */ const ProfileBookmarksViewContent = ()=>{
    const { bookmarks , isLoading  } = (0,hooks_bookmarks__WEBPACK_IMPORTED_MODULE_2__/* .useAllBookmarks */ .b3)({
        enabled: true
    });
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__/* .SortData.newest */ .q.newest);
    if (isLoading) {
        return null // TODO return loading skeleton
        ;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                level: 1,
                weight: "bold",
                size: 500,
                children: "Bookmarks"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: (_bookmarks_view_module_css__WEBPACK_IMPORTED_MODULE_16___default().subheading),
                children: "View and manage your personal bookmarks. Select the bookmark icon in each card below to remove the bookmark."
            }),
            bookmarks?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_bookmarks_view_module_css__WEBPACK_IMPORTED_MODULE_16___default().cardListHeading),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                level: 2,
                                weight: "semibold",
                                size: 300,
                                children: "Your Bookmarks"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                                color: "secondary",
                                text: sortBy.text,
                                "aria-label": `Sort by ${sortBy.text}`,
                                listPosition: "right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_9__/* .DropdownDisclosureButtonItem */ .gB, {
                                        onClick: ()=>setSortBy(_helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__/* .SortData.newest */ .q.newest),
                                        children: _helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__/* .SortData.newest.text */ .q.newest.text
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_9__/* .DropdownDisclosureButtonItem */ .gB, {
                                        onClick: ()=>setSortBy(_helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__/* .SortData.oldest */ .q.oldest),
                                        children: _helpers_card_sort_data__WEBPACK_IMPORTED_MODULE_15__/* .SortData.oldest.text */ .q.oldest.text
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_5__/* .TutorialCardsGridList */ .b, {
                        fixedColumns: 2,
                        tutorials: bookmarks.sort(sortBy.sort).map((bookmark)=>{
                            const tutorialData = (0,lib_learn_client_api_tutorial_formatting__WEBPACK_IMPORTED_MODULE_17__/* .formatTutorialData */ .ri)(bookmark.tutorial);
                            const defaultContext = tutorialData.collectionCtx.default;
                            const tutorialLiteCompat = {
                                ...tutorialData,
                                defaultContext
                            };
                            const tutorialCardProps = (0,components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatTutorialCard */ .OW)(tutorialLiteCompat);
                            return {
                                ...tutorialCardProps,
                                BookmarkButtonComponent: _components_bookmark_button_with_remove_dialog__WEBPACK_IMPORTED_MODULE_13__/* .BookmarkButtonWithRemoveDialog */ .v
                            };
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_empty_state__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_10__/* .IconBookmarkAdd16 */ .d, {}),
                heading: "You have no saved bookmarks.",
                subheading: "You can select the bookmark icon on any tutorial card to save it for future reference.",
                callToAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    href: "/tutorials/library",
                    text: "Tutorial library",
                    color: "secondary",
                    size: "small"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileBookmarksView);

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
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,1877,453,4203,8725,3076,504,1452,265,7232,4884,6182,6415,109,4631], () => (__webpack_exec__(48188)));
module.exports = __webpack_exports__;

})();