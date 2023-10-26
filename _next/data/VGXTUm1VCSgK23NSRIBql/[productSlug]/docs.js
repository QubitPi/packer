(() => {
var exports = {};
exports.id = 5732;
exports.ids = [5732,6415,6203];
exports.modules = {

/***/ 87860:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "callout-card_card__EIIoB",
	"heading": "callout-card_heading__N8cwV g-offset-scroll-margin-top hds-typography-display-300",
	"body": "callout-card_body__UY9HH hds-typography-body-200",
	"ctas": "callout-card_ctas__5pCem",
	"iconCardLinks": "callout-card_iconCardLinks__y5pIj",
	"fixedColumnsMode": "callout-card_fixedColumnsMode__s9_f2",
	"columns2": "callout-card_columns2__7AC3V",
	"columns3": "callout-card_columns3__w0lim"
};


/***/ }),

/***/ 79609:
/***/ ((module) => {

// Exports
module.exports = {
	"listRoot": "cards-grid-list_listRoot__0ZhN7",
	"minWidthMode": "cards-grid-list_minWidthMode__7nkAG",
	"allowThreeColumns": "cards-grid-list_allowThreeColumns__gBDM0",
	"fixedColumnsMode": "cards-grid-list_fixedColumnsMode__yyh4R",
	"columns2": "cards-grid-list_columns2__9_3g_",
	"columns3": "cards-grid-list_columns3__XOTya"
};


/***/ }),

/***/ 88699:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "icon-card-link_root__XRf7A",
	"icon": "icon-card-link_icon__gjx_f",
	"text": "icon-card-link_text__n8aD8 hds-typography-body-200"
};


/***/ }),

/***/ 58753:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "autosized-heading-block_root__OHm2U g-offset-scroll-margin-top",
	"h2": "autosized-heading-block_h2__1OVNN",
	"h3": "autosized-heading-block_h3__19qCS"
};


/***/ }),

/***/ 22155:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "card-grid-block_root__OCET7",
	"description": "card-grid-block_description__iZTb8",
	"cardsGridListCardLink": "card-grid-block_cardsGridListCardLink__j_SxM"
};


/***/ }),

/***/ 94449:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "section-heading-block_root__Ndjqe"
};


/***/ }),

/***/ 57982:
/***/ ((module) => {

// Exports
module.exports = {
	"iconCardGridLink": "hero_iconCardGridLink__gx6Bc"
};


/***/ }),

/***/ 70512:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "icon-card-link-grid_root__lBpJO"
};


/***/ }),

/***/ 58806:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "marketing-content_root__kHeL6"
};


/***/ }),

/***/ 13368:
/***/ ((module) => {

// Exports
module.exports = {
	"mdxSlotWrapper": "product-root-docs-path-landing_mdxSlotWrapper__uBkMC",
	"waypointMDXWrapper": "product-root-docs-path-landing_waypointMDXWrapper__jUUVb"
};


/***/ }),

/***/ 57436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CalloutCard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33643);
/* harmony import */ var content_supported_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71686);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16950);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88918);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35643);
/* harmony import */ var components_icon_card_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85306);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26789);
/* harmony import */ var _callout_card_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87860);
/* harmony import */ var _callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 









function CalloutCard({ heading , headingSlug , body , ctas , iconCardLinks , fixedColumns  }) {
    const hasCtas = ctas !== undefined && ctas !== null;
    const hasIconCardLinks = iconCardLinks !== undefined && iconCardLinks !== null;
    /**
	 * For fixed columns mode, where layout is driven by
	 * media queries and explicit column counts.
	 */ const fixedModeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().fixedColumnsMode), (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default())[`columns${fixedColumns}`]);
    if (hasCtas && hasIconCardLinks) {
        (0,components_toast__WEBPACK_IMPORTED_MODULE_6__/* .developmentToast */ .GN)({
            color: components_toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastColor.critical */ .PQ.critical,
            title: "Error in CalloutCard",
            description: "Both `ctas` and `iconCardLinks` were passed to CalloutCard. Only provide one."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
        elevation: "base",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                id: headingSlug,
                className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().heading),
                children: heading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                children: body
            }),
            ctas && ctas.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().ctas), fixedColumns && fixedModeClasses),
                children: ctas.map((cta, idx)=>{
                    if (idx == 0) {
                        // eslint-disable-next-line react/no-array-index-key
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            href: cta.url,
                            text: cta.text
                        }, idx);
                    } else {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            href: cta.url,
                            text: cta.text,
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__/* .IconArrowRight16 */ .k, {}),
                            iconPosition: "trailing"
                        }, idx);
                    }
                })
            }) : null,
            iconCardLinks && iconCardLinks.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_callout_card_module_css__WEBPACK_IMPORTED_MODULE_9___default().iconCardLinks), fixedColumns && fixedModeClasses),
                children: iconCardLinks.map(({ icon , text , url  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: content_supported_icons__WEBPACK_IMPORTED_MODULE_3__/* .SUPPORTED_ICONS */ .e[icon],
                            text: text,
                            url: url
                        })
                    }, url);
                })
            }) : null
        ]
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalloutCard);


/***/ }),

/***/ 49212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _tutorial_cards_grid_list__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _tutorial_cards_grid_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tutorial_cards_grid_list__WEBPACK_IMPORTED_MODULE_0__]);
_tutorial_cards_grid_list__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_bookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29591);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46833);
/* harmony import */ var components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__, components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__]);
([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__, components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



/**
 * Handles rendering a grid of Tutorial cards, and pre-fetching the
 * `isBookmarked` state for each card.
 */ const TutorialCardsGridList = ({ tutorials , ...restProps })=>{
    /**
	 * Collect the `tutorialIds` and React elements to render in separate arrays
	 * at the same time (to save on iterating over the same data twice).
	 */ const tutorialIds = [];
    const cardsGridListItems = [];
    tutorials.forEach((tutorial)=>{
        tutorialIds.push(tutorial.id);
        cardsGridListItems.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__/* .TutorialCardWithAuthElements */ .m, {
            ...tutorial
        }, tutorial.id));
    });
    /**
	 * Prime the `isBookmarked` queries for the tutorial cards we know we need to
	 * render via collected `tutorialIds` array.
	 */ const { isFetching , isRefetching  } = (0,hooks_bookmarks__WEBPACK_IMPORTED_MODULE_1__/* .useBookmarksByTutorialIds */ .I9)({
        tutorialIds
    });
    /**
	 * @TODO handle first load state. Do not need to show loading state if data is
	 * refetching. That can occur in the background.
	 *
	 * We also do not want to block this component from rendering content, so that
	 * is why `isLoading` is not being used.
	 *
	 * The bookmark queries are disabled
	 * when is auth is disabled or no user is authenticated. When queries are
	 * `disabled`, `isLoading` is `true` forever.
	 */ const isFirstLoad = isFetching && !isRefetching;
    if (isFirstLoad) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...restProps,
        children: cardsGridListItems
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialCardsGridList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.b)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49212);
/* harmony import */ var _cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79609);
/* harmony import */ var _cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/**
 * Displays cards in a grid. Intended for use in main content areas.
 *
 * This component has two layout modes.
 *
 * DEFAULT - MIN WIDTH MODE
 *
 * The default is "min-width" mode. In this mode, the layout for the component
 * driven by minimum width settings on card children, rather than by explicit column counts.
 *
 * The layout approach is intended to reduce brittleness, and to help ensure
 * that we never shrink cards below their desired minimum width.
 * It also opens the possibility of using this component
 * outside of our main content area, if desired.
 *
 * FIXED COLUMN LAYOUT
 *
 * In this mode, the layout for the component is based on fixed column counts.
 * Passing an integer 1-3 to the `fixedColumnLayout` prop will use this mode,
 * and will set the maximum column count on large viewports. Note that
 * the media-queries used to change the column count are fixed. This makes
 * fixed column mode slightly more brittle than min-width mode.
 */ function CardsGridList({ children , isOrdered =false , fixedColumns , gridGap ="24px"  }) {
    const ListRoot = isOrdered ? "ol" : "ul";
    /**
	 * For minimum width mode, where layout is driven by
	 * minimum card widths, with column count automatically calculated.
	 */ const minWidthClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().minWidthMode), {
        [(_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().allowThreeColumns)]: react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) % 3 == 0
    });
    /**
	 * For fixed columns mode, where layout is driven by
	 * media queries and explicit column counts.
	 */ const fixedModeClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().fixedColumnsMode), (_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default())[`columns${fixedColumns}`]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListRoot, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_cards_grid_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().listRoot), fixedColumns ? fixedModeClasses : minWidthClasses),
        style: {
            "--grid-gap": gridGap
        },
        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: child
            });
        })
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardsGridList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var components_icon_card_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function IconCardLinkGridList({ cards , productSlug , gridGap , fixedColumns  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        gridGap: gridGap,
        fixedColumns: fixedColumns,
        children: cards.map((iconCard, key)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                icon: iconCard.icon,
                productSlug: iconCard.productSlug || productSlug,
                text: iconCard.text,
                url: iconCard.url
            }, key);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCardLinkGridList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88805);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88699);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const IconCardLink = ({ icon , productSlug ="hcp" , text , url  })=>{
    let colorToken;
    if (productSlug === "sentinel" || productSlug === "hcp") {
        colorToken = "--token-color-hashicorp-brand";
    } else {
        colorToken = `--token-color-${productSlug}-brand`;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ariaLabel: text,
        className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        href: url,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),
                style: {
                    "--icon-color": `var(${colorToken})`
                },
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: text
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCardLink);


/***/ }),

/***/ 20687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AutosizedHeadingBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14617);
/* harmony import */ var _autosized_heading_block_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58753);
/* harmony import */ var _autosized_heading_block_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autosized_heading_block_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const AutosizedHeadingBlock = ({ className , id , level , text  })=>{
    const levelsToSize = {
        2: 400,
        3: 300
    };
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_autosized_heading_block_module_css__WEBPACK_IMPORTED_MODULE_3___default().root), (_autosized_heading_block_module_css__WEBPACK_IMPORTED_MODULE_3___default())[`h${level}`], className);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: classes,
        id: id,
        level: level,
        size: levelsToSize[level],
        weight: "bold",
        children: text
    });
};



/***/ }),

/***/ 74538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ CalloutCardBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_callout_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57436);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const CalloutCardBlock = ({ body , ctas , heading , headingSlug  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_callout_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        body: body,
        ctas: ctas,
        heading: heading,
        headingSlug: headingSlug
    });
};



/***/ }),

/***/ 96297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ CardGridBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4155);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88805);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46833);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33356);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17573);
/* harmony import */ var _card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22155);
/* harmony import */ var _card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__]);
([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const CardGridBlock = ({ cards , description , title , headingId , headingLevel  })=>{
    const hasTitle = Boolean(title);
    const hasDescription = Boolean(description);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6___default().root),
        children: [
            hasTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_5__/* .AutosizedHeadingBlock */ .XL, {
                level: headingLevel,
                id: headingId,
                text: title
            }),
            hasDescription && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: (_card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),
                size: 300,
                weight: "regular",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: cards.map(({ description , title , url  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ariaLabel: title,
                        className: (_card_grid_block_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardsGridListCardLink),
                        href: url,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_1__/* .CardTitle */ .ll, {
                                text: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_1__/* .CardDescription */ .SZ, {
                                text: description
                            })
                        ]
                    }, url))
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ IconCardGridBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var content_supported_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71686);
/* harmony import */ var components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_2__]);
components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const IconCardGridBlock = ({ cards , productSlug  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        cards: cards.map(({ iconName , text , url  })=>({
                icon: content_supported_icons__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_ICONS */ .e[iconName],
                text,
                url
            })),
        productSlug: productSlug
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Of": () => (/* reexport safe */ _paragraph_block__WEBPACK_IMPORTED_MODULE_4__.O),
/* harmony export */   "XL": () => (/* reexport safe */ _autosized_heading_block__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "fy": () => (/* reexport safe */ _card_grid_block__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "iu": () => (/* reexport safe */ _section_heading_block__WEBPACK_IMPORTED_MODULE_5__.i),
/* harmony export */   "wq": () => (/* reexport safe */ _icon_card_grid_block__WEBPACK_IMPORTED_MODULE_3__.w),
/* harmony export */   "xO": () => (/* reexport safe */ _callout_card_block__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _autosized_heading_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20687);
/* harmony import */ var _callout_card_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74538);
/* harmony import */ var _card_grid_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96297);
/* harmony import */ var _icon_card_grid_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88606);
/* harmony import */ var _paragraph_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65786);
/* harmony import */ var _section_heading_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_card_grid_block__WEBPACK_IMPORTED_MODULE_2__, _icon_card_grid_block__WEBPACK_IMPORTED_MODULE_3__]);
([_card_grid_block__WEBPACK_IMPORTED_MODULE_2__, _icon_card_grid_block__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ParagraphBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_dev_dot_content_mdx_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52539);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const ParagraphBlock = ({ mdxSource  })=>{
    // @ts-expect-error -- The next-mdx-remote types are wrong here, we don't want a record of ReactNode
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__.MDXRemote, {
        ...mdxSource,
        components: {
            a: components_dev_dot_content_mdx_components__WEBPACK_IMPORTED_MODULE_2__/* .MdxA */ .nu,
            p: components_dev_dot_content_mdx_components__WEBPACK_IMPORTED_MODULE_2__/* .MdxP */ .im
        }
    });
};



/***/ }),

/***/ 44428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SectionHeadingBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autosized_heading_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20687);
/* harmony import */ var _section_heading_block_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94449);
/* harmony import */ var _section_heading_block_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_section_heading_block_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const SectionHeadingBlock = ({ level , id , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_autosized_heading_block__WEBPACK_IMPORTED_MODULE_1__/* .AutosizedHeadingBlock */ .X, {
        className: (_section_heading_block_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        id: id,
        level: level,
        text: text
    });
};



/***/ }),

/***/ 34701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_0__]);
_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const LandingPageBlocks = ()=>null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(LandingPageBlocks, {
    AutosizedHeadingBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .AutosizedHeadingBlock */ .XL,
    CalloutCardBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .CalloutCardBlock */ .xO,
    CardGridBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .CardGridBlock */ .fy,
    IconCardGridBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .IconCardGridBlock */ .wq,
    ParagraphBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .ParagraphBlock */ .Of,
    SectionHeadingBlock: _components__WEBPACK_IMPORTED_MODULE_0__/* .SectionHeadingBlock */ .iu
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getStaticPathsFromAnalytics)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Uses our static_paths endpoint to collect the most popular paths for a given subpath. If `validPaths` are provided, the result from
 * the analytics data will be cross-checked against it. This ensure that no invalid paths from our analytics data might be included, be it
 * non-existent pages or pages for another dynamic route.
 */ async function getStaticPathsFromAnalytics({ param ="page" , limit , pathPrefix , validPaths  }) {
    const endpoint = new URL(`/api/static_paths?product=developer&param=${param}&limit=${limit}&path_prefix=${pathPrefix}`, "https://content.hashicorp.com");
    const { result  } = await fetch(endpoint.toString()).then((res)=>res.json());
    const pathsFromAnalytics = result?.paths ?? [];
    if (validPaths) {
        // cross-check paths from analytics against those from nav data to ensure we aren't returning invalid paths
        const paths = pathsFromAnalytics.filter(({ params  })=>{
            // the params order is guaranteed to be consistent here as it represents a destructured path, so we can join and safely do an equality check
            const joinedParams = params?.[param]?.join?.("/");
            return validPaths.some(({ params: validPathParams  })=>validPathParams?.[param]?.join?.("/") === joinedParams);
        });
        return paths;
    }
    return pathsFromAnalytics;
}


/***/ }),

/***/ 30241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71629);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__, unist_util_visit__WEBPACK_IMPORTED_MODULE_1__]);
([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__, unist_util_visit__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * This plugin removes any `<h1 />` element from the `remark` AST
 * on which it is run.
 */ const remarkPluginRemoveFirstH1 = ()=>{
    return function transformer(tree) {
        let firstH1Removed = false;
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__/* .visit */ .Vn)(tree, "heading", (node, index, parent)=>{
            const isH1 = node.type === "heading" && node.depth === 1;
            if (firstH1Removed === false) {
                if (isH1 && parent !== null && parent.hasOwnProperty("children")) {
                    // Remove the h1 node from the parent's children array
                    parent.children.splice(index, 1);
                    // Flag that we've removed the first h1
                    firstH1Removed = true;
                    /**
						 * Following http://unifiedjs.com/learn/recipe/remove-node/:
						 * Do not traverse `node`, continue at the node now at `index`.
						 */ return [
                        unist_util_visit__WEBPACK_IMPORTED_MODULE_1__/* .SKIP */ .AM,
                        index
                    ];
                }
            }
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (remarkPluginRemoveFirstH1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ remarkRewriteAssets)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71629);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_1__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * This is a generator function that returns a remark plugin
 * to rewrite asset urls in markdown files.
 */ function remarkRewriteAssets(args) {
    const { product , version , getAssetPathParts =(nodeUrl)=>[
            nodeUrl
        ]  } = args;
    return function plugin() {
        return function transform(tree) {
            // @ts-expect-error Types Should be correct here
            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__/* .visit */ .Vn)(tree, "image", (node)=>{
                const originalUrl = node.url;
                const asset = path__WEBPACK_IMPORTED_MODULE_0__.posix.join(...getAssetPathParts(originalUrl));
                const url = new URL(`${"https://content.hashicorp.com"}/api/assets`);
                url.searchParams.append("asset", asset);
                url.searchParams.append("version", version);
                url.searchParams.append("product", product);
                node.url = url.toString();
                logOnce(node.url, `Rewriting asset url for local preview:
- Found: ${originalUrl}
- Replaced with: ${node.url}

If this is a net-new asset, you'll need to commit and push it to GitHub.\n`);
            });
        };
    };
}
// A simple cache & util to prevent logging the same message multiple times
const cache = new Map();
const logOnce = (id, message)=>{
    if (process.env.CI) {
        return;
    }
    if (cache.get(id)) {
        return;
    }
    cache.set(id, true);
    console.log(message);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Li": () => (/* binding */ remarkTfeContentExclusion)
/* harmony export */ });
/* unused harmony exports tryGetVersionSatisfies, getTfeSemver */
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10912);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71629);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_1__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

class ContentExclusionError extends Error {
    constructor(message, position){
        super(message);
        this.name = "ContentExclusionError";
        this.message = message + `\n` + ` - at line: ${position.start.line}`;
    }
}
/**
 * A unified plugin to enable previewing of TFE content exclusion.
 * Given content-exclusion markdown comments, this validates that
 * they exist in BEGIN/END pairs, and injects DOM elements around
 * content that may be hidden.
 *
 * @usage
 * ```typescript
 * remarkPlugins: (params, version) => [
 *   //...
 *   [remarkTfeContentExclusion, { version }]
 *   //...
 * ],
 * ```
 */ const remarkTfeContentExclusion = (params)=>{
    const { version  } = params;
    return function visitor(root) {
        let begin = null;
        let end = null;
        const BEGIN_REGEX = /\s+begin:\s+/i;
        const END_REGEX = /\s+end:\s+/i;
        // 1. ensure all comments are paired
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__/* .visit */ .Vn)(root, "comment", ({ value , position  })=>{
            // expects BEGIN
            if (begin === null && end === null) {
                // throw if END is detected first
                if (value.match(END_REGEX)) {
                    throw new ContentExclusionError('Found an "END:" comment before a "BEGIN:" comment. Please ensure all content exclusion comments are paired correctly.', position);
                }
                if (value.match(BEGIN_REGEX)) {
                    begin = value.replace(BEGIN_REGEX, "");
                    return;
                }
            // else noop — allow plain comments to exist as usual
            }
            // expects END
            if (begin !== null && end === null) {
                // throw if BEGIN is used after BEGIN
                if (value.match(BEGIN_REGEX)) {
                    throw new ContentExclusionError('Found a "BEGIN:" but expected an "END:" comment. Nesting is not supported. Please ensure all content exclusion comments are paired correctly.', position);
                }
                if (value.match(END_REGEX)) {
                    end = value.replace(END_REGEX, "");
                    // expects BEGIN to match END
                    if (begin !== end) {
                        throw new ContentExclusionError(`Expected a matching 'END: ...' comment, found '${value}'`, position);
                    } else {
                        // OK
                        begin = null;
                        end = null;
                        return;
                    }
                }
            // else noop — allow plain comments to exist as usual
            }
        });
        // 2. Determine which nodes to remove...
        //    Iterate through the nodes backwards, and remove as needed
        //    At this point, we can assume that all comments are paired
        begin = null;
        end = null;
        let shouldRemove = false;
        const indexesToRemove = [];
        // Accumulate indexes to remove
        // ...ignore when on "latest"
        if (version !== "latest") {
            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__/* .visit */ .Vn)(root, // visit all nodes
            ()=>true, (node)=>{
                // only deal with immediate children of the root node
                const indexOf = root.children.indexOf(node);
                if (indexOf < 0) {
                    return;
                }
                // if comment, check for conditions
                if (node.type === "comment") {
                    const { value  } = node;
                    // expects END
                    if (begin === null && end === null) {
                        // if we find a matching END
                        if (value.match(END_REGEX)) {
                            end = value.replace(END_REGEX, "");
                            shouldRemove = !tryGetVersionSatisfies(version, end);
                            if (shouldRemove) {
                                indexesToRemove.push(indexOf);
                            }
                        }
                        return;
                    }
                    // expects BEGIN
                    if (begin === null && end !== null) {
                        if (value.match(BEGIN_REGEX)) {
                            if (shouldRemove) {
                                indexesToRemove.push(indexOf);
                                // reset
                                shouldRemove = false;
                            }
                            begin = null;
                            end = null;
                        }
                    }
                } else {
                    // if not comment, check if we should remove
                    if (shouldRemove) {
                        indexesToRemove.push(indexOf);
                    }
                }
            }, true);
        }
        // REMOVE NODES in reverse order
        indexesToRemove.sort((a, b)=>b - a).forEach((i)=>{
            root.children.splice(i, 1);
        });
        // 3. Convert comments into JSX elements
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_1__/* .visit */ .Vn)(root, "comment", (node)=>{
            node.type = "jsx";
            const type = node.value.match(BEGIN_REGEX) ? "begin" : node.value.match(END_REGEX) ? "end" : "";
            if (type === "begin") {
                node.value = `<div className="content_exclusion begin">` + `<div className="content_exclusion_inner" >` + node.value.replace("<", "&lt;") + `</div>` + `</div>`;
            }
            if (type === "end") {
                node.value = `<div className="content_exclusion end">` + `<div className="content_exclusion_inner" >` + node.value.replace("<", "&lt;") + `</div>` + `</div>`;
            }
        });
    };
};
const DIRECTIVE_RE = /^(?<product>TF[CE]):(?<comparator>only|[<>]=?)(v(?<version>[0-9]{6}-[0-9]+))?$/i;
/**
 * This returns a boolean value indicating if a given TFE version
 * satisfies a given exclusion directive.
 *
 * Will throw if the block is invalid.
 *
 * @param version a string like `v202001-1`
 * @param block a string like `TFE:>=v202205-1`
 * @returns {boolean} true if the version satisfies the block
 */ const tryGetVersionSatisfies = (version, block)=>{
    const [flag, ...meta] = block.split(/\s+/);
    const directive = flag.match(DIRECTIVE_RE);
    if (!directive) {
        throw new Error("Directive could not be parsed");
    }
    if (!directive.groups) {
        throw new Error("Directive is possibly malformed");
    }
    const { groups  } = directive;
    switch(groups.product){
        case "TFE":
            {
                const versionSemVer = getTfeSemver(version);
                const directiveSemVer = getTfeSemver(groups.version);
                const compare = getComparisonFn(groups.comparator);
                return compare(versionSemVer, directiveSemVer);
            }
        case "TFC":
            {
                if (groups.comparator === "only") {
                    return false;
                } else {
                    throw new Error(`TFC only supports [only] comparator`);
                }
            }
        default:
            {
                // We should never get here, but throw an error just in case
                throw new Error("Unexpected error");
            }
    }
};
const getComparisonFn = (operator)=>{
    switch(operator){
        case "<=":
            return (a, b)=>(0,semver__WEBPACK_IMPORTED_MODULE_0__.lte)(a, b);
        case ">=":
            return (a, b)=>(0,semver__WEBPACK_IMPORTED_MODULE_0__.gte)(a, b);
        case "<":
            return (a, b)=>(0,semver__WEBPACK_IMPORTED_MODULE_0__.lt)(a, b);
        case ">":
            return (a, b)=>(0,semver__WEBPACK_IMPORTED_MODULE_0__.gt)(a, b);
        default:
            throw new Error("Invalid comparator: " + operator);
    }
};
/**
 * converts a TFE version string into a `SemVer` instance
 */ const getTfeSemver = (tfeVersionString)=>{
    const [series, release] = tfeVersionString.replace(/^v/, "").split("-");
    const year = parseInt(series.slice(0, 4));
    const month = parseInt(series.slice(4, 6));
    return new semver__WEBPACK_IMPORTED_MODULE_0__.SemVer(`${year}.${month}.${release || 0}`);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ DEFAULT_CONTENT_TYPE)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ const DEFAULT_CONTENT_TYPE = "tutorials";



/***/ }),

/***/ 60079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ rewriteTutorialLinksPlugin)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71629);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68601);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38882);
/* harmony import */ var _utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_0__, _utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__, unist_util_visit__WEBPACK_IMPORTED_MODULE_3__]);
([_utils__WEBPACK_IMPORTED_MODULE_0__, _utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__, unist_util_visit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * This plugin writes urls for learn tutorial content that reference other
 * learn tutorials or collections.
 *
 * If the link references a tutorial or collection that is included in the
 * beta-product list, this rewrites the link path to be relative to dev dot.
 *
 * All other tutorial and collection links are rewritten to point externally
 * to production learn.hashicorp.com
 *
 * ONCE DEV PORTAL IS GENERALLY AVAILBLE, this plugin will be deprecated
 * as all written internal links within the content will be updated in the
 * content itself. This is an interim workaround while we have a divergent state
 * during beta.
 *
 * Please refer to this diagram for full details on remapping
 * https://whimsical.com/url-remaps-TqyEmfG6gYyiAZR1HWSWEL
 */ 



let TUTORIAL_MAP;
const rewriteTutorialLinksPlugin = (options = {})=>{
    const { contentType =_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_CONTENT_TYPE */ .M , tutorialMap  } = options;
    return async function transformer(tree) {
        // Load the tutorial map if it's not provided
        TUTORIAL_MAP = tutorialMap ?? await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getTutorialMap */ .i0)();
        // Visit link and defintion node types
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_3__/* .visit */ .Vn)(tree, [
            "link",
            "definition"
        ], (node)=>{
            node.url = (0,_utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__/* .rewriteTutorialsLink */ .J)(node.url, TUTORIAL_MAP, contentType);
        });
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ rewriteTutorialsLink)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68601);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const getIsRelativeUrl = (url)=>{
    try {
        new URL(url);
        return false;
    } catch (e) {
        return true;
    }
};
function rewriteTutorialsLink(url, tutorialMap, contentType = _constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_CONTENT_TYPE */ .M) {
    let newUrl;
    try {
        const urlObject = new URL(url, "https://learn.hashicorp.com");
        let isExternalLearnLink;
        if (contentType === "docs" && getIsRelativeUrl(url)) {
            isExternalLearnLink = false;
        } else {
            isExternalLearnLink = (0,___WEBPACK_IMPORTED_MODULE_0__/* .getIsExternalLearnLink */ .Cx)(url);
        }
        const isRewriteableDocsLink = (0,___WEBPACK_IMPORTED_MODULE_0__/* .getIsRewriteableDocsLink */ .t)(url);
        /**
		 * Don't do anything if the link is ambiguous.
		 */ if (isExternalLearnLink && isRewriteableDocsLink) {
            throw new Error(`[rewriteTutorialsLink] Found an ambiguous link: '${url}'`);
        }
        /**
		 * Return the url unmodified if it's not rewriteable.
		 */ if (!isExternalLearnLink && !isRewriteableDocsLink) {
            return url;
        }
        /**
		 * Handle the link based on the determined link type.
		 */ if (isExternalLearnLink) {
            newUrl = (0,___WEBPACK_IMPORTED_MODULE_0__/* .rewriteExternalLearnLink */ .dt)(urlObject, tutorialMap);
        } else if (isRewriteableDocsLink) {
            newUrl = (0,___WEBPACK_IMPORTED_MODULE_0__/* .rewriteExternalDocsLink */ .QZ)(urlObject);
        }
        /**
		 * If the link wasn't found in the map, default to original link. Could be
		 * a typo, it's up to the author to correct -- this feedback should help.
		 */ if (!newUrl) {
            newUrl = isExternalLearnLink ? urlObject.toString() : url;
            throw new Error(`[MDX rewriteTutorialsLink]: link could not be rewritten: ${url} \nIf the content at that link is MDX, please check all Learn and Docs .io links in the content to ensure they are correct.`);
        }
    } catch (e) {
        // we don't want an incorrect link to break the build
        console.error(e);
    }
    // Return the modified URL, or default to the original one
    return newUrl ?? url;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ views_product_root_docs_path_landing_server__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var views_product_root_docs_path_landing_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4256);
/* harmony import */ var views_product_root_docs_path_landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86240);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_root_docs_path_landing_server__WEBPACK_IMPORTED_MODULE_0__, views_product_root_docs_path_landing__WEBPACK_IMPORTED_MODULE_1__]);
([views_product_root_docs_path_landing_server__WEBPACK_IMPORTED_MODULE_0__, views_product_root_docs_path_landing__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Generates the paths for all /:productSlug/docs routes.
 */ const getStaticPaths = async ()=>{
    const paths = lib_products__WEBPACK_IMPORTED_MODULE_2__/* .activeProductSlugs.map */ .KD.map((productSlug)=>({
            params: {
                productSlug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_product_root_docs_path_landing__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getStaticGenerationFunctions)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loaders_remote_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91787);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57752);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_rehype_code_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68384);
/* harmony import */ var lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66770);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_remark_plugins_remark_plugin_remove_first_h1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30241);
/* harmony import */ var lib_get_static_paths_from_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43888);
/* harmony import */ var components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58180);
/* harmony import */ var lib_docs_add_branded_overview_sidebar_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52487);
/* harmony import */ var lib_remark_plugins_rewrite_tutorial_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60079);
/* harmony import */ var layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5220);
/* harmony import */ var components_breadcrumb_bar_utils_get_docs_breadcrumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32749);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46064);
/* harmony import */ var _utils_product_url_adjusters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51999);
/* harmony import */ var _utils_get_back_to_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39158);
/* harmony import */ var _utils_get_deploy_preview_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63181);
/* harmony import */ var _utils_get_custom_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__, lib_remark_plugins_rewrite_tutorial_links__WEBPACK_IMPORTED_MODULE_7__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_8__, _utils_get_deploy_preview_loader__WEBPACK_IMPORTED_MODULE_12__, lib_remark_plugins_remark_plugin_remove_first_h1__WEBPACK_IMPORTED_MODULE_14__]);
([lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__, lib_remark_plugins_rewrite_tutorial_links__WEBPACK_IMPORTED_MODULE_7__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_8__, _utils_get_deploy_preview_loader__WEBPACK_IMPORTED_MODULE_12__, lib_remark_plugins_remark_plugin_remove_first_h1__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party imports


// HashiCorp Imports













// Local imports




/**
 * Returns static generation functions which can be exported from a page to fetch docs data
 *
 * Example usage:
 *
 * ```ts
 * const { getStaticPaths, getStaticProps } = getStaticGenerationFunctions({
 *   product,
 *   basePath,
 * })
 *
 * export { getStaticPaths, getStaticProps }
 * ```
 */ function getStaticGenerationFunctions({ product , basePath , productSlugForLoader =product.slug , basePathForLoader =basePath , baseName , additionalRemarkPlugins =[] , getScope =async ()=>({}) , mainBranch , navDataPrefix , options ={}  }) {
    /**
	 * Get the current `rootDocsPaths` object.
	 *
	 * @TODO - set `baseName` using `rootDocsPath`
	 */ const currentRootDocsPath = product.rootDocsPaths?.find((rootDocsPath)=>rootDocsPath.path === basePath);
    const loaderOptions = {
        product: productSlugForLoader,
        basePath: basePathForLoader,
        enabledVersionedDocs: true,
        navDataPrefix
    };
    // Defining a getter here so that we can pass in remarkPlugins on a per-request basis to collect headings
    const getLoader = (extraOptions)=>{
        if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)(productSlugForLoader)) {
            return (0,_utils_get_deploy_preview_loader__WEBPACK_IMPORTED_MODULE_12__/* .getDeployPreviewLoader */ .J)({
                basePath,
                currentRootDocsPath,
                loaderOptions: {
                    ...loaderOptions,
                    ...extraOptions
                }
            });
        } else {
            return new _loaders_remote_content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
                ...loaderOptions,
                ...extraOptions
            });
        }
    };
    return {
        getStaticPaths: async ()=>{
            const pathsFromNavData = await getLoader().loadStaticPaths();
            if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)() && !(0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)(productSlugForLoader)) {
                // do not statically render any other products if we are in a deploy preview for another product
                return {
                    fallback: "blocking",
                    paths: []
                };
            }
            // Render all paths for deploy previews in source repositories
            if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)(productSlugForLoader)) {
                return {
                    fallback: "blocking",
                    paths: pathsFromNavData
                };
            }
            if (productSlugForLoader === "terraform-cdk") {
                // terraform-cdk has some exceptionally large pages that cannot be ISR'd due to lambda response size limits. As a result, we force the SSG of these pages.
                // TODO: remove this block when we come up with an alternative workaround to CDKTF's large pages
                return {
                    paths: pathsFromNavData,
                    fallback: "blocking"
                };
            }
            // Otherwise, rely on analytics data to prune the paths
            const paths = await (0,lib_get_static_paths_from_analytics__WEBPACK_IMPORTED_MODULE_13__/* .getStaticPathsFromAnalytics */ .D)({
                limit: 9999 ?? 0,
                pathPrefix: `/${product.slug}/${basePath}`,
                validPaths: pathsFromNavData
            });
            return {
                fallback: "blocking",
                paths
            };
        },
        getStaticProps: async (ctx)=>{
            const pathParts = ctx.params.page || [];
            const currentPathUnderProduct = `/${path__WEBPACK_IMPORTED_MODULE_0___default().join(basePathForLoader, pathParts.join("/"))}`;
            const headings = [] // populated by anchorLinks plugin below
            ;
            const loader = getLoader({
                mainBranch,
                remarkPlugins: [
                    ...additionalRemarkPlugins,
                    /**
					 * Note on remark plugins for local vs remote loading:
					 * includeMarkdown and paragraphCustomAlerts are already
					 * expected to have been run for remote content.
					 */ [
                        _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_3__.anchorLinks,
                        {
                            headings
                        }
                    ],
                    /**
					 * Remove the `<h1 />` from MDX, we'll render this outside
					 * the MDX content area, integrating it into our layout
					 * in various ways depending on the specific docs view used.
					 */ lib_remark_plugins_remark_plugin_remove_first_h1__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                    /**
					 * The `contentType` configuration is necessary so that the
					 * `rewriteTutorialLinksPlugin` does not rewrite links like
					 * `/waypoint` to `/waypoint/tutorials`.
					 */ [
                        lib_remark_plugins_rewrite_tutorial_links__WEBPACK_IMPORTED_MODULE_7__/* .rewriteTutorialLinksPlugin */ .B,
                        {
                            contentType: "docs"
                        }
                    ],
                    /**
					 * Rewrite docs content links, which are authored without prefix.
					 * For example, in Waypoint docs authors write "/docs/some-thing",
					 * we need this to be "/waypoint/docs/some-thing" for Dev Dot.
					 */ [
                        lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                        {
                            currentPath: currentPathUnderProduct,
                            urlAdjustFn: (0,_utils_product_url_adjusters__WEBPACK_IMPORTED_MODULE_11__/* .getProductUrlAdjuster */ .u)(product)
                        }
                    ]
                ],
                rehypePlugins: lib_rehype_code_plugins__WEBPACK_IMPORTED_MODULE_4__/* .rehypeCodePlugins */ .j,
                scope: await getScope()
            });
            /**
			 * Try to load the static props for the given context. If there is a
			 * ContentApiError with a 404 status, return a 404 status and page.
			 * https://nextjs.org/docs/api-reference/data-fetching/get-static-props#notfound
			 */ let loadStaticPropsResult;
            try {
                loadStaticPropsResult = await loader.loadStaticProps(ctx);
            } catch (error) {
                console.error("[docs-view/server] error loading static props", error);
                // Catch 404 errors, return a 404 status page
                if (error.status === 404) {
                    return {
                        notFound: true
                    };
                }
                // Throw non-404 errors
                throw error;
            }
            const { navData , mdxSource , githubFileUrl , versions , frontMatter  } = loadStaticPropsResult;
            /**
			 * Construct a page heading object from outline data.
			 * We'll render this to replace the `<h1 />` we're removed from MDX.
			 *
			 * This gives us flexibility in how we lay out the `<h1 />`,
			 * such as placing it in the same flex container as the version select,
			 * or constructing the "Landing Hero" on docs landing pages.
			 *
			 * Note: we expect a few document properties as
			 * asserted by our content conformance work:
			 * - We expect there to be an `<h1 />` in every docs `.mdx` document
			 * - We expect the `<h1 />` to be the first heading in the document
			 *
			 * However, we cannot guarantee these assumptions. If there is no `h1`
			 * in the MDX, we'll render without a page heading - this is something
			 * that should be fixed at the content level.
			 */ let pageHeading;
            const h1Match = headings.find((h)=>h.level === 1);
            if (h1Match) {
                pageHeading = {
                    id: h1Match.slug,
                    title: h1Match.title
                };
            } else {
                const fallbackHeading = pathParts[pathParts.length - 1];
                pageHeading = {
                    id: slugify__WEBPACK_IMPORTED_MODULE_1___default()(fallbackHeading, {
                        lower: true
                    }),
                    title: fallbackHeading
                };
            }
            /**
			 * NOTE: we've encountered empty headings on at least one page:
			 * "/terraform/enterprise/install/automated/active-active"
			 * Passing empty headings to the client creates broken behaviour,
			 * so we filter them out.
			 * TODO: This change should perhaps be moved into our anchor-links plugin.
			 * Either way, we will likely need to keep this fix in place indefinitely,
			 * UNLESS we either fix all past versions of docs, OR implement a version
			 * cutoff that excludes all past versions of docs with this issue.
			 */ const nonEmptyHeadings = headings.slice().filter(({ title  })=>{
                const isValid = typeof title == "string" && title !== "";
                if (isValid) {
                    return true;
                } else {
                    const paramsAsPath = typeof ctx.params.page == "string" ? ctx.params.page : ctx.params.page.join("/");
                    console.warn(`Found an empty title on page "/${product.slug}/${basePath}/${paramsAsPath}". Empty titles are omitted from our sidebar. Ideally, they should be removed in the source MDX.`);
                }
            });
            const outlineItems = (0,components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(nonEmptyHeadings);
            /**
			 * Add fullPaths and auto-generated ids to navData
			 */ const { preparedItems: navDataWithFullPaths  } = await (0,layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
                basePaths: [
                    product.slug,
                    basePath
                ],
                nodes: navData
            });
            /**
			 * Figure out of a specific docs version is being viewed
			 */ let indexOfVersionPathPart;
            let versionPathPart;
            if (versions) {
                pathParts.find((pathPart, index)=>{
                    const matchingVersion = versions.find((version)=>pathPart === version.version);
                    if (matchingVersion) {
                        versionPathPart = pathPart;
                        indexOfVersionPathPart = index;
                        return true;
                    }
                });
            }
            /**
			 * Constructs the base sidebar level for `DocsView`.
			 */ const docsSidebarTitle = currentRootDocsPath.shortName || currentRootDocsPath.name;
            const docsBasePathFullPath = versionPathPart ? `/${product.slug}/${basePath}/${versionPathPart}` : `/${product.slug}/${basePath}`;
            /**
			 * Build menuItems from navData, with a branded "Overview" item
			 *
			 * TODO: would be great to fix up related types here at some point.
			 * task: https://app.asana.com/0/1202097197789424/1202405210286689/f
			 */ const menuItems = (0,lib_docs_add_branded_overview_sidebar_item__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(navDataWithFullPaths, {
                title: docsSidebarTitle,
                fullPath: docsBasePathFullPath,
                theme: product.slug
            });
            const docsSidebarLevel = {
                backToLinkProps: (0,_utils_get_back_to_link__WEBPACK_IMPORTED_MODULE_17__/* .getBackToLink */ .u)(currentRootDocsPath, product),
                levelButtonProps: {
                    levelUpButtonText: `${product.name} Home`
                },
                menuItems,
                title: docsSidebarTitle,
                /* We always visually hide the title, as we've added in a
				   "highlight" item that would make showing the title redundant. */ visuallyHideTitle: true
            };
            /**
			 * Assembles all levels of sidebar nav data for `DocsView`.
			 */ const sidebarNavDataLevels = [
                (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_10__/* .generateTopLevelSidebarNavData */ .Vz)(product.name),
                (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_10__/* .generateProductLandingSidebarNavData */ ._G)(product),
                docsSidebarLevel
            ];
            const breadcrumbLinks = (0,components_breadcrumb_bar_utils_get_docs_breadcrumbs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
                baseName,
                basePath,
                indexOfVersionPathPart,
                navData: navDataWithFullPaths,
                pathParts,
                product,
                version: versionPathPart
            });
            /**
			 * Construct layoutProps for the DocsView.
			 */ const isRootPath = pathParts.length === 0 || pathParts[0] === "";
            const isDocsLanding = isRootPath && basePath === "docs";
            const layoutProps = {
                breadcrumbLinks,
                // TODO: need to adjust type for sidebarNavDataLevels here
                sidebarNavDataLevels: sidebarNavDataLevels,
                /* Long-form content pages use a narrower main area width */ mainWidth: isDocsLanding ? "wide" : "narrow"
            };
            /**
			 * Determine whether to show the version selector
			 *
			 * In most docs categories, we want to show the version selector if there
			 * are multiple versions, or if the single version is not `v0.0.x`.
			 * (We use `v0.0.x` as a placeholder version for un-versioned documentation)
			 */ const hasMeaningfulVersions = versions.length > 0 && (versions.length > 1 || versions[0].version !== "v0.0.x");
            /**
			 * We want to show "Edit on GitHub" links for public content repos only.
			 * Currently, HCP and Sentinel docs are stored in private repositories.
			 *
			 * Note: If we need more granularity here, we could change this to be
			 * part of `rootDocsPath` configuration in `src/data/<product>.json`.
			 */ const isHcp = product.slug == "hcp";
            const isSentinel = product.slug == "sentinel";
            const isPublicContentRepo = !isHcp && !isSentinel;
            if (isPublicContentRepo) {
                layoutProps.githubFileUrl = githubFileUrl;
            }
            const { hideVersionSelector , projectName  } = options;
            /**
			 * TODO: the DocsViewProps type should likely be set at the
			 * function return value level, rather than only here.
			 * Setting here for now to keep things in scope for current work.
			 */ const finalProps = {
                layoutProps,
                metadata: {
                    title: frontMatter.page_title ?? null,
                    description: frontMatter.description ?? null,
                    layout: (0,_utils_get_custom_layout__WEBPACK_IMPORTED_MODULE_18__/* .getCustomLayout */ .L)({
                        currentRootDocsPath,
                        frontMatter,
                        pathParts
                    })
                },
                outlineItems,
                pageHeading,
                mdxSource,
                product: {
                    ...product,
                    // needed for DocsVersionSwitcher
                    currentRootDocsPath: currentRootDocsPath || null
                },
                projectName: projectName || null,
                versions: !hideVersionSelector && hasMeaningfulVersions ? versions : null
            };
            return {
                revalidate: false,
                props: finalProps
            };
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getBackToLink)
/* harmony export */ });
/* harmony import */ var lib_docs_get_parent_root_docs_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32577);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Generate `backToLinkProps` for the current `rootDocsPath`,
 * for use with `DocsView`.
 *
 * For nested rootDocsPaths, the `backToLinkProps` will
 * lead to the "parent" rootDocsPath if there is one.
 *
 * For other cases, the `backToLinkProps` will lead to the product home page.
 *
 * A rootDocsPath is considered "nested" if its path contains a slash.
 * If we have a "nested" rootDocsPath, we should try to find the parent
 * rootDocsPath. If we can't find a "parent" rootDocsPath,
 * or if this is not a "nested" rootDocsPath, then we should use
 * a back-to "<product> Home" link.
 */ function getBackToLink(currentRootDocsPath, product) {
    /**
	 * Handle "nested" rootDocsPaths, for which we want to link back
	 * to the parent rootDocsPath. For example, "/terraform/plugin/framework"
	 * links back to "/terraform/plugin".
	 */ const parentRootDocsPath = (0,lib_docs_get_parent_root_docs_path__WEBPACK_IMPORTED_MODULE_0__/* .getParentRootDocsPath */ .F)(currentRootDocsPath.path, product.rootDocsPaths);
    if (parentRootDocsPath) {
        return {
            text: parentRootDocsPath.name,
            href: `/${product.slug}/${parentRootDocsPath.path}`
        };
    }
    /**
	 * If we can't find a "parent" rootDocsPath,
	 * or if this is not a "nested" rootDocsPath, then we should use
	 * a generic back-to "<product> Home" link.
	 */ return {
        text: `${product.name} Home`,
        href: `/${product.slug}`
    };
}


/***/ }),

/***/ 19648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getCustomLayout)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * TODO: this logic is temporary to showcase how layouts can work.
 * Going forward this would be defined in frontmatter,
 * we'd pass frontmatter.layout directly rather than constructing this.
 *
 * Task: https://app.asana.com/0/1202097197789424/1202850056121889/f
 */ function getCustomLayout({ currentRootDocsPath , frontMatter , pathParts  }) {
    const isLanding = pathParts.length === 0;
    const customLayout = isLanding ? {
        name: "docs-root-landing",
        subtitle: currentRootDocsPath.description ?? frontMatter.description ?? null
    } : null;
    return customLayout;
}


/***/ }),

/***/ 63181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getDeployPreviewLoader)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57752);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_remark_plugins_remark_rewrite_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2944);
/* harmony import */ var lib_remark_plugins_remark_tfe_content_exclusion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19835);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_remark_plugins_remark_rewrite_assets__WEBPACK_IMPORTED_MODULE_3__, lib_remark_plugins_remark_tfe_content_exclusion__WEBPACK_IMPORTED_MODULE_4__]);
([lib_remark_plugins_remark_rewrite_assets__WEBPACK_IMPORTED_MODULE_3__, lib_remark_plugins_remark_tfe_content_exclusion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party imports

// HashiCorp Imports




/**
 * Returns an instance of a FileSystemLoader for use in content repositories to read docs content from the
 * file system
 */ function getDeployPreviewLoader({ basePath , currentRootDocsPath , loaderOptions  }) {
    // options needed to read content from the file system when running in preview mode
    const localContentDir = process.env.LOCAL_CONTENT_DIR ? `${process.env.LOCAL_CONTENT_DIR}/${basePath}` : `../content/${basePath}`;
    const navDataFile = `../data/${currentRootDocsPath.navDataPrefix ?? currentRootDocsPath.path}-nav-data.json`;
    const fsOptions = {
        localContentDir,
        navDataFile
    };
    /**
	 * These plugins are run during our content ETL process for remote content, but we need to run
	 * them when loading content directly from the filesystem.
	 */ const remarkPluginsForFileSystemContent = [
        [
            _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_2__.includeMarkdown,
            {
                resolveMdx: true,
                resolveFrom: process.env.LOCAL_CONTENT_DIR ? path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), process.env.LOCAL_CONTENT_DIR, "partials") : path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "..", "content", "partials")
            }
        ],
        _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_2__.paragraphCustomAlerts
    ];
    return new _loaders_file_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
        ...loaderOptions,
        ...fsOptions,
        remarkPlugins (params, version) {
            const remarkPluginsFromExtraOptions = typeof loaderOptions.remarkPlugins === "function" ? loaderOptions.remarkPlugins(params) : loaderOptions.remarkPlugins;
            // We have some custom handling for TF projects who have a few project-level variances
            // - images reside in `website/img` rather than `website/public` (Next.js serves static assets from `public`)
            // - TFE/C content exclusion markdown comments are used
            const remarkTerraformPlugins = [];
            if (currentRootDocsPath.productSlugForLoader?.match(/^(terraform|ptfe-releases)/i)) {
                remarkTerraformPlugins.push((0,lib_remark_plugins_remark_rewrite_assets__WEBPACK_IMPORTED_MODULE_3__/* .remarkRewriteAssets */ .v)({
                    product: currentRootDocsPath.productSlugForLoader,
                    version: process.env.CURRENT_GIT_BRANCH,
                    getAssetPathParts: (nodeUrl)=>{
                        // special case for CDKTF's relative paths ('./image.png')
                        if (currentRootDocsPath.productSlugForLoader === "terraform-cdk") {
                            return Array.isArray(params.page) ? [
                                "website/docs/cdktf",
                                ...params.page,
                                nodeUrl.startsWith(".") ? `.${nodeUrl}` : `../${nodeUrl}`
                            ] : [
                                "website/docs/cdktf",
                                nodeUrl
                            ];
                        }
                        // all other TF subprojects
                        return [
                            "website",
                            nodeUrl
                        ];
                    }
                }));
            }
            if (currentRootDocsPath.productSlugForLoader?.match(/(terraform-docs-common|ptfe-releases)/i)) {
                remarkTerraformPlugins.push([
                    lib_remark_plugins_remark_tfe_content_exclusion__WEBPACK_IMPORTED_MODULE_4__/* .remarkTfeContentExclusion */ .Li,
                    {
                        version
                    }
                ]);
            }
            // The order here is intentional. remarkPluginsForFileSystemContent ensures that partials are resolved and the content is close to its final structure before we do things like apply link rewrites
            return [
                ...remarkTerraformPlugins,
                ...remarkPluginsForFileSystemContent,
                ...remarkPluginsFromExtraOptions
            ];
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38116);
/* harmony import */ var views_product_root_docs_path_landing_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42726);
/* harmony import */ var views_docs_view_components_docs_page_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17456);
/* harmony import */ var components_landing_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35539);
/* harmony import */ var components_docs_version_switcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50378);
/* harmony import */ var _hero_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57982);
/* harmony import */ var _hero_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hero_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_root_docs_path_landing_components__WEBPACK_IMPORTED_MODULE_2__]);
views_product_root_docs_path_landing_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const ProductRootDocsPathLandingHero = ({ pageHeading , pageSubtitle , iconCardGridItems , versions  })=>{
    const currentProduct = (0,contexts__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentProduct */ .j2)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_docs_view_components_docs_page_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                versionSelectorSlot: versions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_version_switcher__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    options: versions
                }) : null,
                headingSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    pageHeading: pageHeading,
                    pageSubtitle: pageSubtitle
                })
            }),
            currentProduct.slug !== "terraform" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_hero_module_css__WEBPACK_IMPORTED_MODULE_6___default().iconCardGridLink),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_root_docs_path_landing_components__WEBPACK_IMPORTED_MODULE_2__/* .ProductRootDocsPathLandingIconCardLinkGrid */ .tf, {
                    iconCardGridItems: iconCardGridItems
                })
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRootDocsPathLandingHero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var content_supported_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71686);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38116);
/* harmony import */ var components_icon_card_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85306);
/* harmony import */ var _icon_card_link_grid_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70512);
/* harmony import */ var _icon_card_link_grid_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_card_link_grid_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const ProductRootDocsPathLandingIconCardLinkGrid = ({ iconCardGridItems  })=>{
    const currentProduct = (0,contexts__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentProduct */ .j2)();
    const items = iconCardGridItems || currentProduct.rootDocsPaths;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_icon_card_link_grid_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),
        children: items.map(({ iconName , path , name  })=>{
            if (currentProduct.currentRootDocsPath.path === path) {
                return null;
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    icon: content_supported_icons__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_ICONS */ .e[iconName],
                    productSlug: currentProduct.slug,
                    text: name,
                    url: `/${currentProduct.slug}/${path}`
                })
            }, path);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRootDocsPathLandingIconCardLinkGrid);


/***/ }),

/***/ 42726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mj": () => (/* reexport safe */ _hero__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "tf": () => (/* reexport safe */ _icon_card_link_grid__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "ui": () => (/* reexport safe */ _marketing_content__WEBPACK_IMPORTED_MODULE_2__.ZP)
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33026);
/* harmony import */ var _icon_card_link_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42923);
/* harmony import */ var _marketing_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hero__WEBPACK_IMPORTED_MODULE_0__, _marketing_content__WEBPACK_IMPORTED_MODULE_2__]);
([_hero__WEBPACK_IMPORTED_MODULE_0__, _marketing_content__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ GETTING_STARTED_CARD_HEADING_SLUG),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ff": () => (/* binding */ GETTING_STARTED_CARD_HEADING)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38116);
/* harmony import */ var components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34701);
/* harmony import */ var _marketing_content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58806);
/* harmony import */ var _marketing_content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_marketing_content_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__]);
components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party imports



// Global imports


// Local imports

const GETTING_STARTED_CARD_HEADING = "Getting Started";
const GETTING_STARTED_CARD_HEADING_SLUG = slugify__WEBPACK_IMPORTED_MODULE_2___default()(GETTING_STARTED_CARD_HEADING);
const ProductRootDocsPathLandingMarketingContent = ({ blocks  })=>{
    const currentProduct = (0,contexts__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentProduct */ .j2)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_marketing_content_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
        children: blocks.map((block, index)=>{
            if (block.type === "paragraph") {
                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].ParagraphBlock */ .Z.ParagraphBlock, {
                    ...block,
                    key: index
                });
            }
            if (block.type === "section-heading") {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].SectionHeadingBlock */ .Z.SectionHeadingBlock, {
                    id: block.headingId,
                    level: block.headingLevel,
                    text: block.title
                }, index);
            }
            if (block.type === "icon-card-grid") {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].IconCardGridBlock */ .Z.IconCardGridBlock, {
                    cards: block.cards,
                    productSlug: currentProduct.slug
                }, index);
            }
            if (block.type === "card-grid") {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].CardGridBlock */ .Z.CardGridBlock, {
                    cards: block.cards,
                    description: block.description,
                    headingLevel: block.headingLevel,
                    headingId: block.headingId,
                    title: block.title
                }, index);
            }
            if (block.type === "getting-started-card") {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_page_blocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].CalloutCardBlock */ .Z.CalloutCardBlock, {
                    body: block.description,
                    ctas: [
                        block.callToAction
                    ],
                    heading: GETTING_STARTED_CARD_HEADING,
                    headingSlug: GETTING_STARTED_CARD_HEADING_SLUG
                }, index);
            }
        })
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRootDocsPathLandingMarketingContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82482);
/* harmony import */ var views_docs_view_utils_get_docs_mdx_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47016);
/* harmony import */ var components_dev_dot_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(543);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42726);
/* harmony import */ var views_docs_view_docs_view_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70024);
/* harmony import */ var views_docs_view_docs_view_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(views_docs_view_docs_view_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13368);
/* harmony import */ var _product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const ProductRootDocsPathLanding = ({ mdxSource , pageContent , pageHeading , product , versions , layoutProps , outlineItems  })=>{
    const { pageSubtitle , marketingContentBlocks  } = pageContent;
    let mdxSlot;
    if (mdxSource) {
        const docsMdxComponents = (0,views_docs_view_utils_get_docs_mdx_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(product.slug);
        const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6___default())[`${product.slug}MDXWrapper`], (_product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6___default().mdxSlotWrapper), /**
			 * TODO: docsViewStyles.mdxContent might make sense to apply to
			 * DevDotContent, since the related concerns (iframe overflow, and
			 * removing the margin off the first item) seem to come up everywhere
			 * that DevDotContent is used.
			 * Task:
			 * https://app.asana.com/0/1202097197789424/1204107433878314/f
			 */ (views_docs_view_docs_view_module_css__WEBPACK_IMPORTED_MODULE_7___default().mdxContent));
        mdxSlot = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dev_dot_content__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                mdxRemoteProps: {
                    ...mdxSource,
                    components: {
                        ...docsMdxComponents
                    }
                }
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...layoutProps,
        outlineItems: outlineItems,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: versions ? (_product_root_docs_path_landing_module_css__WEBPACK_IMPORTED_MODULE_6___default().docsLandingWithVersions) : null,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ProductRootDocsPathLandingHero */ .Mj, {
                    pageHeading: pageHeading,
                    pageSubtitle: pageSubtitle,
                    iconCardGridItems: pageContent.iconCardGridItems,
                    versions: versions
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ProductRootDocsPathLandingMarketingContent */ .ui, {
                    blocks: marketingContentBlocks
                }),
                mdxSlot
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRootDocsPathLanding);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95655);
/* harmony import */ var components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58180);
/* harmony import */ var views_docs_view_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43111);
/* harmony import */ var _components_marketing_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51239);
/* harmony import */ var _utils_prepare_marketing_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_docs_view_server__WEBPACK_IMPORTED_MODULE_4__, _components_marketing_content__WEBPACK_IMPORTED_MODULE_5__]);
([views_docs_view_server__WEBPACK_IMPORTED_MODULE_4__, _components_marketing_content__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







/**
 * @TODO add TS to function signature & document function purpose
 */ const generateHeadingLevelsAndSidecarHeadings = ({ marketingContentBlocks , pageTitle  })=>{
    const marketingContentHeadings = [];
    // gather headings from marketing content & auto determine their levels
    let currentSectionHeading;
    const marketingContentBlocksWithHeadingLevels = marketingContentBlocks.map((block)=>{
        const blockCopy = {
            ...block
        };
        let thisHeadingObject;
        if (block.type === "section-heading") {
            // all section-heading block types are supposed to be h2's
            const headingSlug = slugify__WEBPACK_IMPORTED_MODULE_2___default()(block.title, {
                lower: true
            });
            thisHeadingObject = {
                level: 2,
                title: block.title,
                id: headingSlug,
                slug: headingSlug
            };
            currentSectionHeading = thisHeadingObject;
        } else if (block.type === "card-grid") {
            // all card-grid headings will be h3's unless a section-heading is before it
            let cardGridHeadingLevel;
            if (currentSectionHeading) {
                cardGridHeadingLevel = currentSectionHeading.level + 1;
            } else {
                cardGridHeadingLevel = 2;
            }
            const headingSlug1 = slugify__WEBPACK_IMPORTED_MODULE_2___default()(block.title, {
                lower: true
            });
            thisHeadingObject = {
                level: cardGridHeadingLevel,
                title: block.title,
                id: headingSlug1,
                slug: headingSlug1
            };
        } else if (block.type === "getting-started-card") {
            const headingSlug2 = _components_marketing_content__WEBPACK_IMPORTED_MODULE_5__/* .GETTING_STARTED_CARD_HEADING_SLUG */ .II;
            thisHeadingObject = {
                level: 2,
                title: _components_marketing_content__WEBPACK_IMPORTED_MODULE_5__/* .GETTING_STARTED_CARD_HEADING */ .ff,
                id: headingSlug2,
                slug: headingSlug2
            };
        }
        if (thisHeadingObject) {
            marketingContentHeadings.push(thisHeadingObject);
            blockCopy.headingLevel = thisHeadingObject.level;
            blockCopy.headingId = thisHeadingObject.id;
        }
        return blockCopy;
    });
    // build page title heading element
    const titleHeadingSlug = slugify__WEBPACK_IMPORTED_MODULE_2___default()(pageTitle, {
        lower: true
    });
    const titleHeading = {
        level: 1,
        id: titleHeadingSlug,
        slug: titleHeadingSlug,
        title: pageTitle
    };
    // piece together the different headings
    const sidecarHeadings = [
        titleHeading,
        ...marketingContentHeadings
    ];
    return {
        sidecarHeadings,
        marketingContentBlocksWithHeadingLevels
    };
};
const getStaticProps = async (context)=>{
    // Constants
    const basePath = "docs";
    // Fetch product data
    const productSlug = context.params.productSlug;
    const product = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_3__/* .cachedGetProductData */ .i)(productSlug);
    // Pull properties from product data
    const currentRootDocsPath = product.rootDocsPaths.find((rootDocsPath)=>rootDocsPath.path === basePath);
    const { includeMDXSource =false , name , productSlugForLoader =product.slug , shortName  } = currentRootDocsPath;
    const baseName = shortName || name;
    // Fetch page content
    const jsonFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `src/content/${product.slug}/docs-landing.json`);
    const pageContent = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(jsonFilePath, "utf8"));
    // Generate getStaticProps from DocsView helper
    const { getStaticProps: generatedGetStaticProps  } = (0,views_docs_view_server__WEBPACK_IMPORTED_MODULE_4__/* .getStaticGenerationFunctions */ .O)({
        product,
        productSlugForLoader,
        basePath,
        baseName
    });
    const getStaticPropsResult = await generatedGetStaticProps({
        ...context,
        params: {
            page: []
        }
    });
    /**
	 * Our base `generatedGetStaticProps` could technically return
	 * a redirect or not-found. We should account for these cases.
	 * This also serves as a type guard.
	 */ if (!("props" in getStaticPropsResult)) {
        return getStaticPropsResult;
    }
    /**
	 * Grab the outline from the MDX content, if applicable.
	 *
	 * Note we slice off the first outline item, we expect it to be an <h1 />,
	 * which would be duplicative in this context.
	 */ const mdxOutline = includeMDXSource ? getStaticPropsResult.props.outlineItems.slice(1) : [];
    /**
	 * Append headings found in marketing content.
	 */ const { sidecarHeadings , marketingContentBlocksWithHeadingLevels  } = generateHeadingLevelsAndSidecarHeadings({
        marketingContentBlocks: pageContent.marketingContentBlocks,
        pageTitle: `${product.name} ${baseName}`
    });
    /**
	 * Prepare marketing content blocks for client use
	 */ const preparedMarketingBlocks = await (0,_utils_prepare_marketing_blocks__WEBPACK_IMPORTED_MODULE_6__/* .prepareMarketingBlocks */ .P)(marketingContentBlocksWithHeadingLevels);
    /**
	 * Transform sidecarHeadings into outlineItems, and pageHeading
	 */ const firstHeading = sidecarHeadings[0];
    const pageHeading = {
        id: firstHeading.id,
        title: firstHeading.title
    };
    const outlineItems = [
        ...(0,components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(sidecarHeadings),
        ...mdxOutline
    ];
    /**
	 * Declare props with type for type safety
	 *
	 * TODO: ideally we'd declare this typing as part of the return type
	 * of this function. For now, this is a step in that direction.
	 */ const props = {
        ...getStaticPropsResult.props,
        mdxSource: includeMDXSource ? getStaticPropsResult.props.mdxSource : null,
        layoutProps: {
            ...getStaticPropsResult.props.layoutProps,
            githubFileUrl: null
        },
        pageContent: {
            ...pageContent,
            marketingContentBlocks: preparedMarketingBlocks
        },
        pageHeading,
        outlineItems,
        product: {
            ...getStaticPropsResult.props.product,
            currentRootDocsPath
        }
    };
    // TODO clean this up so it's easier to understand
    return {
        ...getStaticPropsResult,
        props
    };
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ prepareMarketingBlocks)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Prepares marketing content blocks for rendering on the client.
 */ async function prepareMarketingBlocks(blocks) {
    return await Promise.all(blocks.map(async (block)=>{
        if (block.type === "paragraph") {
            return {
                type: block.type,
                mdxSource: await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(block.text)
            };
        } else {
            return block;
        }
    }));
}


/***/ }),

/***/ 95780:
/***/ ((module) => {

"use strict";
module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 76791:
/***/ ((module) => {

"use strict";
module.exports = require("@mdx-js/util");

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

/***/ 51356:
/***/ ((module) => {

"use strict";
module.exports = require("bail");

/***/ }),

/***/ 41421:
/***/ ((module) => {

"use strict";
module.exports = require("ccount");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 57499:
/***/ ((module) => {

"use strict";
module.exports = require("collapse-white-space");

/***/ }),

/***/ 71239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 10950:
/***/ ((module) => {

"use strict";
module.exports = require("extend");

/***/ }),

/***/ 79316:
/***/ ((module) => {

"use strict";
module.exports = require("fathom-client");

/***/ }),

/***/ 98076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 48010:
/***/ ((module) => {

"use strict";
module.exports = require("http-status-codes");

/***/ }),

/***/ 76675:
/***/ ((module) => {

"use strict";
module.exports = require("is-alphabetical");

/***/ }),

/***/ 61455:
/***/ ((module) => {

"use strict";
module.exports = require("is-alphanumeric");

/***/ }),

/***/ 93715:
/***/ ((module) => {

"use strict";
module.exports = require("is-buffer");

/***/ }),

/***/ 69893:
/***/ ((module) => {

"use strict";
module.exports = require("is-decimal");

/***/ }),

/***/ 20298:
/***/ ((module) => {

"use strict";
module.exports = require("is-whitespace-character");

/***/ }),

/***/ 80791:
/***/ ((module) => {

"use strict";
module.exports = require("is-word-character");

/***/ }),

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 54689:
/***/ ((module) => {

"use strict";
module.exports = require("longest-streak");

/***/ }),

/***/ 41197:
/***/ ((module) => {

"use strict";
module.exports = require("markdown-escapes");

/***/ }),

/***/ 73584:
/***/ ((module) => {

"use strict";
module.exports = require("markdown-table");

/***/ }),

/***/ 53625:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-compact");

/***/ }),

/***/ 52591:
/***/ ((module) => {

"use strict";
module.exports = require("moize");

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

/***/ 70276:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote");

/***/ }),

/***/ 57112:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote/serialize");

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

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 74809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ 82174:
/***/ ((module) => {

"use strict";
module.exports = require("parse-entities");

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

/***/ 3515:
/***/ ((module) => {

"use strict";
module.exports = require("remark-mdx");

/***/ }),

/***/ 13729:
/***/ ((module) => {

"use strict";
module.exports = require("repeat-string");

/***/ }),

/***/ 10912:
/***/ ((module) => {

"use strict";
module.exports = require("semver");

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

/***/ 67545:
/***/ ((module) => {

"use strict";
module.exports = require("state-toggle");

/***/ }),

/***/ 42214:
/***/ ((module) => {

"use strict";
module.exports = require("stringify-entities");

/***/ }),

/***/ 25325:
/***/ ((module) => {

"use strict";
module.exports = require("to-vfile");

/***/ }),

/***/ 32385:
/***/ ((module) => {

"use strict";
module.exports = require("trim");

/***/ }),

/***/ 41358:
/***/ ((module) => {

"use strict";
module.exports = require("trim-trailing-lines");

/***/ }),

/***/ 40969:
/***/ ((module) => {

"use strict";
module.exports = require("trough");

/***/ }),

/***/ 96784:
/***/ ((module) => {

"use strict";
module.exports = require("unherit");

/***/ }),

/***/ 68603:
/***/ ((module) => {

"use strict";
module.exports = require("unist-util-flatmap");

/***/ }),

/***/ 41925:
/***/ ((module) => {

"use strict";
module.exports = require("unist-util-map");

/***/ }),

/***/ 75295:
/***/ ((module) => {

"use strict";
module.exports = require("unist-util-remove-position");

/***/ }),

/***/ 33084:
/***/ ((module) => {

"use strict";
module.exports = require("vfile");

/***/ }),

/***/ 3465:
/***/ ((module) => {

"use strict";
module.exports = require("vfile-location");

/***/ }),

/***/ 5170:
/***/ ((module) => {

"use strict";
module.exports = require("xtend");

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

/***/ 60234:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-is");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

"use strict";
module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,5675,3921,7864,1629,3613,4889,7752,5152,7806,265,7232,4884,6182,2539,3592,3561], () => (__webpack_exec__(82480)));
module.exports = __webpack_exports__;

})();