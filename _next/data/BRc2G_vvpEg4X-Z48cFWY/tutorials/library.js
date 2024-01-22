(() => {
var exports = {};
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 41539:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "current-filters_root__RnDb2",
	"label": "current-filters_label__RRPhV"
};


/***/ }),

/***/ 67623:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "filter-section_root__2Sl4I hds-typography-body-300",
	"label": "filter-section_label__snqxL hds-typography-body-100 hds-font-weight-semibold"
};


/***/ }),

/***/ 65886:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "pagination_root___VUmD",
	"previousButton": "pagination_previousButton__NFrz_",
	"nextButton": "pagination_nextButton__wF3Q4",
	"pageInformation": "pagination_pageInformation__y3uB2"
};


/***/ }),

/***/ 79090:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "product-filter_icon__bKSmY"
};


/***/ }),

/***/ 28638:
/***/ ((module) => {

// Exports
module.exports = {
	"pageTitle": "tutorial-library_pageTitle__4iJy5",
	"inputFilterSection": "tutorial-library_inputFilterSection__N1vq_",
	"input": "tutorial-library_input__T8Tcb",
	"mobileFiltersControls": "tutorial-library_mobileFiltersControls__3Xfwh",
	"exitIcon": "tutorial-library_exitIcon___kvXA"
};


/***/ }),

/***/ 19909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ augmentTutorial)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32235);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__]);
([_utils__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



// Featured Collections are augmented to the base tutorial
async function augmentTutorial(tutorial) {
    const featured_collections = await getFeaturedCollections(tutorial.id);
    const tutorialClone = Object.assign({}, tutorial);
    delete tutorialClone.featured_collections;
    return {
        ...tutorialClone,
        featured_collections
    };
}
// featured collections are accessed via another route
async function getFeaturedCollections(idOrSlug) {
    const identifier = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .formatIdentifier */ ._q)(idOrSlug);
    // /tutorials/:id/collections
    const route = path__WEBPACK_IMPORTED_MODULE_0___default().join(___WEBPACK_IMPORTED_MODULE_3__/* .TUTORIAL_API_ROUTE */ .YE, `${identifier}/collections`);
    const featuredCollectionsRes = await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(route);
    if (featuredCollectionsRes.ok) {
        const res = await featuredCollectionsRes.json();
        return res.result;
    }
    const error = await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .toError */ .KC)(featuredCollectionsRes);
    throw error;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* binding */ getAllTutorials),
/* harmony export */   "YE": () => (/* binding */ TUTORIAL_API_ROUTE),
/* harmony export */   "ck": () => (/* binding */ getTutorial),
/* harmony export */   "mm": () => (/* binding */ getTutorials)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32235);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38502);
/* harmony import */ var _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__, _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__]);
([_utils__WEBPACK_IMPORTED_MODULE_2__, _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const TUTORIAL_API_ROUTE = "/tutorials";
async function getTutorial(idOrSlug) {
    const identifier = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatIdentifier */ ._q)(idOrSlug);
    // /tutorials/:id
    const route = path__WEBPACK_IMPORTED_MODULE_0___default().join(TUTORIAL_API_ROUTE, identifier);
    const getTutorialRes = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(route);
    if (getTutorialRes.ok) {
        const res = await getTutorialRes.json();
        const augmentedData = await (0,_augment_tutorial__WEBPACK_IMPORTED_MODULE_3__/* .augmentTutorial */ .r)(res.result) // additional Api call here
        ;
        return (0,_formatting__WEBPACK_IMPORTED_MODULE_4__/* .formatTutorialData */ .ri)(augmentedData);
    }
    // This is handled by tutorial template /pages/tutorials/[...slug] to render 404 page
    if (getTutorialRes.status === 404) {
        console.error("Learn Api Client: 404 — Tutorial not found");
        return null;
    }
    const error = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .toError */ .KC)(getTutorialRes);
    throw error;
}
async function getTutorials(idsOrSlugs, withContent) {
    const queryStr = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatBatchQueryStr */ .iy)(idsOrSlugs, withContent);
    const route = path__WEBPACK_IMPORTED_MODULE_0___default().join(TUTORIAL_API_ROUTE, queryStr);
    const getTutorialsRes = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(route);
    if (getTutorialsRes.ok) {
        const res = await getTutorialsRes.json();
        return res.result.map(_formatting__WEBPACK_IMPORTED_MODULE_4__/* .formatTutorialData */ .ri);
    }
    const error = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .toError */ .KC)(getTutorialsRes);
    throw error;
}
// getAllTutorials
// if a limit is not passed, all tutorials are fetched
async function getAllTutorials(options) {
    let result = [];
    const limit = options?.limit?.toString();
    const recurse = Boolean(!limit);
    // errors handled by the `fetchAll` function
    const allTutorials = await (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .fetchAll */ .Qd)({
        baseUrl: TUTORIAL_API_ROUTE,
        recurse,
        limit,
        fullContent: options?.fullContent
    });
    if (options?.slugsOnly) {
        result = allTutorials.map(({ slug , default_collection  })=>({
                slug,
                collection_slug: default_collection.slug
            }));
    } else {
        return allTutorials.map(_formatting__WEBPACK_IMPORTED_MODULE_4__/* .formatTutorialData */ .ri);
    }
    return result;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ fetchAll)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_learn_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32235);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 *  Based off content-sync imp --> https://github.com/hashicorp/learn-api-content-sync/blob/main/util/api-client.js#L77
 *
 *  By detault, this function will recursively fetch all tutorials or collections from the db
 *  If you don't want all the tutorials, pass `recurse: false` and a specified limit.
 *  The baseUrl option specifies which endpoint (either collections or tutorials) to hit
 **/ const MAX_LIMIT = "100" // Defaults to API max
;
async function fetchAll({ baseUrl , recurse =true , limit =MAX_LIMIT , fullContent =false , after , fetchedTutorials  }) {
    // Set the base array if it's the first call
    if (typeof fetchedTutorials === "undefined") {
        fetchedTutorials = [];
    }
    const response = await fetchTutorialsOrCollections(baseUrl, limit, after, fullContent);
    if (response.ok) {
        const data = await response.json();
        const allTutorials = [
            ...fetchedTutorials,
            ...data.result
        ];
        /*
		 ** If recurse is false, we only want the # of tuts specific by the limit.
		 ** If there's less than 100 tutorials fetched (less than the max limit),
		 ** that means that we've fetched everything.
		 */ if (!recurse || data.result.length < Number(MAX_LIMIT)) {
            return allTutorials;
        }
        // Otherwise, recurse to get the next batch of tutorials
        return fetchAll({
            baseUrl,
            recurse: true,
            limit,
            // The last ID
            after: data.result[data.result.length - 1].id,
            // Pass the accumulated tutorials
            fetchedTutorials: allTutorials,
            fullContent
        });
    }
}
async function fetchTutorialsOrCollections(baseRoute, limit, after, full) {
    const params = new URLSearchParams({
        limit
    });
    if (after) {
        params.append("after", after);
    }
    if (full) {
        params.append("full", "1");
    }
    const queryStr = `?${params.toString()}`;
    const route = path__WEBPACK_IMPORTED_MODULE_0___default().join(baseRoute, queryStr);
    const response = await (0,lib_learn_client__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(route);
    if (response.ok) {
        return response;
    }
    const error = await (0,lib_learn_client__WEBPACK_IMPORTED_MODULE_1__/* .toError */ .KC)(response);
    throw error;
}


/***/ }),

/***/ 4173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qd": () => (/* reexport safe */ _fetch_all__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "_q": () => (/* binding */ formatIdentifier),
/* harmony export */   "iy": () => (/* binding */ formatBatchQueryStr)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _fetch_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
function formatSlug(slug) {
    return slug.replace("/", "|");
}
function isUuid(id) {
    return zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid().safeParse(id).success;
}
// if the identifier is a slug, we need to format for the request to replace slashes (/) with pipes (|)
function formatIdentifier(idOrSlug) {
    let identifier = idOrSlug;
    if (!isUuid(identifier)) {
        identifier = formatSlug(idOrSlug);
    }
    return identifier;
}
function formatBatchQueryStr(idsOrSlugs, withContent) {
    const params = new URLSearchParams();
    const identifiers = idsOrSlugs.toString();
    if (idsOrSlugs.length > 0) {
        // Assuming here that if the first item in the array is a uuid, they are all uuids
        if (isUuid(idsOrSlugs[0])) {
            params.append("ids", identifiers);
        } else {
            params.append("slugs", identifiers);
        }
    }
    if (withContent) {
        params.append("full", "1");
    }
    return `?${params.toString()}`;
}
// Barrel exports. This function can be imported from /utils


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ stripUndefinedProperties)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Hack needed to avoid JSON-Serialization validation error from Next.js.
 * https://github.com/zeit/next.js/discussions/11209
 *
 * Reason: `undefined` cannot be serialized as JSON.
 * Please use `null` or omit this value all together.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function stripUndefinedProperties(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ 82629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialsLibraryPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23257);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46269);
/* harmony import */ var instantsearch_js_es_lib_routers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19450);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64884);
/* harmony import */ var views_tutorial_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29385);
/* harmony import */ var views_tutorial_library_components_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86972);
/* harmony import */ var views_tutorial_library_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52854);
/* harmony import */ var views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4221);
/* harmony import */ var components_sidebar_components_sidebar_nav_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27702);
/* harmony import */ var components_sidebar_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57506);
/* harmony import */ var lib_generate_top_level_sub_nav_items__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81062);
/* harmony import */ var lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92809);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_4__, views_tutorial_library__WEBPACK_IMPORTED_MODULE_5__, views_tutorial_library_components_filters__WEBPACK_IMPORTED_MODULE_6__, lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_12__]);
([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_4__, views_tutorial_library__WEBPACK_IMPORTED_MODULE_5__, views_tutorial_library_components_filters__WEBPACK_IMPORTED_MODULE_6__, lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 














const DEFAULT_SLUGS = [
    "terraform/infrastructure-as-code",
    "vault/getting-started-intro",
    "consul/get-started",
    "nomad/get-started-install",
    "vagrant/getting-started-index",
    "packer/get-started-install-cli",
    "boundary/getting-started-intro",
    "waypoint/get-started-intro",
    "cloud/terraform-hcp-provider-vault"
];
const appId = "YY0FFNI7MF";
const apiKey = "2cd9898a6c253bfa3965d2b62a4f7f3d";
const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default()(appId, apiKey);
function TutorialLibrarySidebar() {
    return(// TODO: we should consider using Sidebar here to make the markup consistent across pages. We aren't for now due to duplicate "Resources" headings and Tutorial Library being a semi-special case.
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "g-hide-with-mobile-menu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_tutorial_library_components_filters__WEBPACK_IMPORTED_MODULE_6__/* .ConnectedTutorialLibraryFilters */ ._, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "g-show-with-mobile-menu",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_sidebar_components_sidebar_nav_list__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidebar_components__WEBPACK_IMPORTED_MODULE_10__/* .SidebarNavMenuItem */ .Rd, {
                            item: {
                                heading: "Main Menu"
                            }
                        }),
                        (0,lib_generate_top_level_sub_nav_items__WEBPACK_IMPORTED_MODULE_11__/* .generateTopLevelSubNavItems */ .A)().map((item, index)=>// eslint-disable-next-line react/no-array-index-key
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidebar_components__WEBPACK_IMPORTED_MODULE_10__/* .SidebarNavMenuItem */ .Rd, {
                                item: item
                            }, index))
                    ]
                })
            })
        ]
    }));
}
function TutorialsLibraryPage({ layoutProps , defaultTutorials  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__.InstantSearch, {
        searchClient: searchClient,
        initialUiState: (0,views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__/* .routerStateToSearchState */ .K)(router.query),
        indexName: views_tutorial_library_constants__WEBPACK_IMPORTED_MODULE_7__/* .INDEX_NAME */ .js,
        routing: {
            router: (0,instantsearch_js_es_lib_routers__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(),
            stateMapping: {
                stateToRoute: views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__/* .searchStateToRouteState */ .O,
                routeToState: views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__/* .routerStateToSearchState */ .K
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...layoutProps,
            AlternateSidebar: TutorialLibrarySidebar,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_tutorial_library__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                defaultTutorials: defaultTutorials
            })
        })
    });
}
async function getStaticProps() {
    return {
        props: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_14__/* .stripUndefinedProperties */ .c)({
            metadata: {
                title: "Tutorial Library",
                description: "Explore our tutorials to automate your workflows."
            },
            defaultTutorials: await (0,lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_12__/* .getTutorials */ .mm)(DEFAULT_SLUGS),
            layoutProps: {
                sidebarNavDataLevels: [],
                breadcrumbLinks: [
                    {
                        title: "Developer",
                        url: "/"
                    },
                    {
                        title: "Tutorial Library",
                        url: "/tutorials/library",
                        isCurrentPage: true
                    }
                ]
            }
        })
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ClearFiltersButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46269);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55749);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



/**
 * Uses [useClearRefinements](https://www.algolia.com/doc/api-reference/widgets/clear-refinements/react-hooks/#hook) to handle wiping the filter state within Algolia.
 */ function ClearFiltersButton({ color ="tertiary" , className , disableWhenNoFilters =false  }) {
    const { refine , canRefine  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__.useClearRefinements)();
    if (!canRefine && !disableWhenNoFilters) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: className,
        text: "Clear Filters",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_2__/* .IconX16 */ .H, {}),
        color: color,
        size: "small",
        onClick: ()=>refine(),
        disabled: !canRefine
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ CurrentFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46269);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33356);
/* harmony import */ var components_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62493);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14684);
/* harmony import */ var _current_filters_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41539);
/* harmony import */ var _current_filters_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_current_filters_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52854);
/* harmony import */ var _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__, _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__]);
([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__, _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const IS_DEV = "production" !== "production";
function CurrentFilterItem({ refinement , refine  }) {
    const { label , type , attribute  } = refinement;
    let labelText;
    // This is a "Resource" filter
    if (type === "disjunctive") {
        const resource = _constants__WEBPACK_IMPORTED_MODULE_5__/* .RESOURCES.find */ .rP.find((resource)=>resource.attribute === attribute);
        labelText = resource.label;
    }
    if (attribute === "edition") {
        const edition = _constants__WEBPACK_IMPORTED_MODULE_5__/* .EDITIONS.find */ .C6.find((edition)=>edition.value === label);
        labelText = edition?.label;
    }
    if (attribute === "products") {
        labelText = lib_products__WEBPACK_IMPORTED_MODULE_4__/* .productSlugsToNames */ .tC[label];
    }
    /**
	 * We don't want to add a Tag for a filter we couldn't find a valid label for.
	 *
	 * Example: `edition=nope` is not a valid filter we support.
	 */ if (!labelText) {
        if (IS_DEV) {
            // TODO - render something users can see?
            console.error("[CurrentFilterItem] Found an unsupported refinement:", JSON.stringify(refinement));
        }
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            removeButtonAriaLabel: `Remove filter ${labelText}`,
            onRemove: ()=>refine(refinement),
            text: labelText
        })
    });
}
/**
 * List all active filters, removes any given filter on click
 */ function CurrentFilters() {
    const { items  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__.useCurrentRefinements)();
    const hasAppliedFilters = items && items.length > 0;
    const sortedItems = items// Sort filters in the order they appear in the sidebar: [products] [edition] [resources]
    .sort((a, b)=>{
        if (a.attribute === "products") {
            return -1;
        }
        if (b.attribute === "products") {
            return 1;
        }
        if (a.attribute === "edition") {
            return -1;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_current_filters_module_css__WEBPACK_IMPORTED_MODULE_7___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                asElement: "span",
                size: 200,
                weight: "medium",
                className: (_current_filters_module_css__WEBPACK_IMPORTED_MODULE_7___default().label),
                children: hasAppliedFilters ? "Your selected filters:" : "No filters selected"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    sortedItems.flatMap((item)=>{
                        return item.refinements.map((refinement)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrentFilterItem, {
                                refinement: refinement,
                                refine: item.refine
                            }, `${refinement.label}${refinement.type}${refinement.attribute}`);
                        });
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_clear_filters_button__WEBPACK_IMPORTED_MODULE_6__/* .ClearFiltersButton */ .B, {
                            className: "g-hide-with-mobile-menu"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ EditionFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_form_field_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70005);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52854);
/* harmony import */ var _filter_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50146);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



function EditionFilter({ refine , selectedEdition  }) {
    const isAnyEditionSelected = selectedEdition !== undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_filter_section__WEBPACK_IMPORTED_MODULE_3__/* .FilterSection */ .O, {
        label: "Edition",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_1__/* .RadioField */ .g, {
                labelFontWeight: "regular",
                label: "All",
                value: "all",
                name: "edition",
                id: "all",
                checked: !isAnyEditionSelected,
                onChange: ()=>refine(null)
            }),
            _constants__WEBPACK_IMPORTED_MODULE_2__/* .EDITIONS.map */ .C6.map(({ value , label  })=>{
                const isEditionSelected = value === selectedEdition;
                const inputId = `filter-${value}`;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_1__/* .RadioField */ .g, {
                    labelFontWeight: "regular",
                    label: label,
                    value: value,
                    name: "edition",
                    id: inputId,
                    checked: isEditionSelected,
                    onChange: ()=>refine(value)
                }, value);
            })
        ]
    });
}


/***/ }),

/***/ 50146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FilterSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_section_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67623);
/* harmony import */ var _filter_section_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filter_section_module_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

function FilterSection({ label , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
        className: (_filter_section_module_css__WEBPACK_IMPORTED_MODULE_1___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                className: (_filter_section_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                children: label
            }),
            children
        ]
    });
}


/***/ }),

/***/ 86972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ TutorialLibraryFilters),
/* harmony export */   "_": () => (/* binding */ ConnectedTutorialLibraryFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_sidebar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57506);
/* harmony import */ var _edition_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51955);
/* harmony import */ var _product_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77286);
/* harmony import */ var _resources_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96172);
/* harmony import */ var _use_filters_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_use_filters_state__WEBPACK_IMPORTED_MODULE_5__]);
_use_filters_state__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





/**
 * Renders all of the filters for the tutorial library
 */ function TutorialLibraryFilters({ products , edition , resources  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_filter__WEBPACK_IMPORTED_MODULE_3__/* .ProductFilter */ .k, {
                ...products
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidebar_components__WEBPACK_IMPORTED_MODULE_1__/* .SidebarHorizontalRule */ .ny, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_edition_filter__WEBPACK_IMPORTED_MODULE_2__/* .EditionFilter */ .U, {
                ...edition
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sidebar_components__WEBPACK_IMPORTED_MODULE_1__/* .SidebarHorizontalRule */ .ny, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_resources_filter__WEBPACK_IMPORTED_MODULE_4__/* .ResourcesFilter */ .M, {
                ...resources
            })
        ]
    });
}
function ConnectedTutorialLibraryFilters() {
    const filtersState = (0,_use_filters_state__WEBPACK_IMPORTED_MODULE_5__/* .useFiltersState */ .$)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialLibraryFilters, {
        ...filtersState
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useFiltersState)
/* harmony export */ });
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46269);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

function useFiltersState() {
    const { refine: refineEdition  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__.useMenu)({
        attribute: "edition"
    });
    const { refine: refineProduct  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__.useRefinementList)({
        attribute: "products",
        operator: "and"
    });
    const { value: hasVideoValue , refine: refineHasVideo  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__.useToggleRefinement)({
        attribute: "hasVideo"
    });
    const { value: isInteractiveValue , refine: refineIsInteractive  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__.useToggleRefinement)({
        attribute: "isInteractive"
    });
    const { indexUiState  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_0__.useInstantSearch)();
    const selectedProducts = indexUiState?.refinementList?.products ?? [];
    const selectedEdition = indexUiState?.menu?.edition;
    const resources = _constants__WEBPACK_IMPORTED_MODULE_1__/* .RESOURCES.map */ .rP.map((resource)=>{
        if (resource.attribute === "hasVideo") {
            return {
                ...resource,
                value: hasVideoValue,
                refine: refineHasVideo
            };
        }
        if (resource.attribute === "isInteractive") {
            return {
                ...resource,
                value: isInteractiveValue,
                refine: refineIsInteractive
            };
        }
    });
    return {
        products: {
            refine: refineProduct,
            selectedProducts
        },
        edition: {
            refine: refineEdition,
            selectedEdition
        },
        resources: {
            resources
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ MobileFiltersButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_sliders_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71614);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84345);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function MobileFiltersButton({ onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        text: "Filters",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_sliders_16__WEBPACK_IMPORTED_MODULE_1__/* .IconSliders16 */ .H, {}),
        color: "secondary",
        className: "g-show-with-mobile-menu",
        onClick: onClick
    });
}


/***/ }),

/***/ 79640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_left_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79041);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33643);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46269);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16950);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84345);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33356);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65886);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pagination_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







/**
 * @TODO de-duplicate some of the link generation, especially on either side of the pages array
 */ function Pagination() {
    const { pages , currentRefinement: currentPage , isFirstPage , isLastPage , refine , nbPages , createURL  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__.usePagination)({
        padding: 2
    });
    const previousButtonProps = {
        "aria-label": "Go to previous page",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_left_16__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowLeft16 */ .n, {}),
        color: "secondary",
        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageButton),
        size: "small",
        href: createURL(currentPage - 1)
    };
    const nextButtonProps = {
        "aria-label": "Go to next page",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_2__/* .IconArrowRight16 */ .k, {}),
        color: "secondary",
        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageButton),
        size: "small",
        href: createURL(currentPage + 1)
    };
    const showRestLastPage = !pages.includes(nbPages - 1);
    const showRestFirstPage = !pages.includes(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().previousButton),
                children: isFirstPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    disabled: true,
                    ...previousButtonProps
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...previousButtonProps,
                    onClick: (e)=>{
                        e.preventDefault();
                        refine(currentPage - 1);
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "g-hide-on-desktop g-hide-on-tablet",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    size: 200,
                    weight: "regular",
                    asElement: "span",
                    className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageInformation),
                    children: [
                        "Page ",
                        currentPage + 1,
                        " of ",
                        nbPages
                    ]
                })
            }),
            showRestFirstPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "g-hide-on-mobile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            "aria-label": `Go to page 1`,
                            text: String(1),
                            href: createURL(0),
                            color: "secondary",
                            className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageButton),
                            size: "small",
                            onClick: (e)=>{
                                e.preventDefault();
                                refine(0);
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "g-hide-on-mobile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: true,
                            size: "small",
                            text: "..."
                        })
                    })
                ]
            }) : null,
            pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "g-hide-on-mobile",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        "aria-label": `Go to page ${page + 1}`,
                        text: String(page + 1),
                        href: createURL(page),
                        color: page === currentPage ? "primary" : "secondary",
                        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageButton),
                        size: "small",
                        onClick: (e)=>{
                            e.preventDefault();
                            refine(page);
                        }
                    })
                }, page)),
            showRestLastPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "g-hide-on-mobile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: true,
                            size: "small",
                            text: "..."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "g-hide-on-mobile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            "aria-label": `Go to page ${nbPages}`,
                            text: String(nbPages),
                            href: createURL(nbPages - 1),
                            color: "secondary",
                            className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageButton),
                            size: "small",
                            onClick: (e)=>{
                                e.preventDefault();
                                refine(nbPages - 1);
                            }
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().nextButton),
                children: isLastPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    disabled: true,
                    ...nextButtonProps
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...nextButtonProps,
                    onClick: (e)=>{
                        e.preventDefault();
                        refine(currentPage + 1);
                    }
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ProductFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14684);
/* harmony import */ var components_product_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70627);
/* harmony import */ var _product_filter_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79090);
/* harmony import */ var _product_filter_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_filter_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _filter_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50146);
/* harmony import */ var views_tutorial_library_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52854);
/* harmony import */ var components_form_field_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70005);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






function ProductFilter({ refine , selectedProducts  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_section__WEBPACK_IMPORTED_MODULE_3__/* .FilterSection */ .O, {
        label: "Product",
        children: views_tutorial_library_constants__WEBPACK_IMPORTED_MODULE_4__/* .VALID_PRODUCT_SLUGS_FOR_FILTERING.map */ .T2.map((slug)=>{
            const isProductSelected = selectedProducts.includes(slug);
            const productName = lib_products__WEBPACK_IMPORTED_MODULE_1__/* .productSlugsToNames */ .tC[slug];
            const inputId = `filter-${slug}`;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_5__/* .CheckboxField */ .j, {
                id: inputId,
                checked: isProductSelected,
                onChange: ()=>{
                    refine(slug);
                },
                labelFontWeight: "regular",
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            productSlug: slug,
                            className: (_product_filter_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)
                        }),
                        productName
                    ]
                })
            }, slug);
        })
    });
}


/***/ }),

/***/ 96172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ResourcesFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_form_field_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70005);
/* harmony import */ var _filter_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50146);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function ToggleRefinement({ refine , value , label  }) {
    const inputId = `filter-${label}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_1__/* .CheckboxField */ .j, {
        id: inputId,
        checked: value.isRefined,
        onChange: ()=>{
            refine({
                isRefined: value.isRefined
            });
        },
        label: label,
        labelFontWeight: "regular"
    });
}
function ResourcesFilter({ resources  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_section__WEBPACK_IMPORTED_MODULE_2__/* .FilterSection */ .O, {
        label: "Resources",
        children: resources.map((attribute)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleRefinement, {
                ...attribute
            }, attribute.attribute))
    });
}


/***/ }),

/***/ 31285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ TutorialLibraryResults)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46269);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46833);
/* harmony import */ var components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12905);
/* harmony import */ var _utils_get_tutorial_card_props_from_hit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15846);
/* harmony import */ var components_empty_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78783);
/* harmony import */ var _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78211);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79640);
/* harmony import */ var views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4221);
/* harmony import */ var components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__, components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__, components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__, _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__, _pagination__WEBPACK_IMPORTED_MODULE_7__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_9__]);
([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__, components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__, components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__, _clear_filters_button__WEBPACK_IMPORTED_MODULE_6__, _pagination__WEBPACK_IMPORTED_MODULE_7__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 









/**
 * Renders tutorial search results as a card grid
 */ function TutorialLibraryResults({ defaultTutorials  }) {
    const { results , uiState  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__.useInstantSearch)();
    const { hits  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__.useHits)();
    const hasFiltersApplied = Object.keys((0,views_tutorial_library_utils_router_state__WEBPACK_IMPORTED_MODULE_8__/* .searchStateToRouteState */ .O)(uiState)).length > 0;
    if (!results?.__isArtificial && hits.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-live": "polite",
                    className: "g-screen-reader-only",
                    children: "Search returned no results."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_empty_state__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    heading: "No results",
                    subheading: "Try adjusting your selected filters or using different keywords",
                    callToAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_clear_filters_button__WEBPACK_IMPORTED_MODULE_6__/* .ClearFiltersButton */ .B, {
                        color: "secondary"
                    })
                })
            ]
        });
    }
    let itemsToRender = null;
    if (hasFiltersApplied) {
        itemsToRender = hits.map((hit)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__/* .TutorialCardWithAuthElements */ .m, {
                ...(0,_utils_get_tutorial_card_props_from_hit__WEBPACK_IMPORTED_MODULE_4__/* .getTutorialCardPropsFromHit */ .b)(hit)
            }, hit.objectID));
    } else {
        itemsToRender = defaultTutorials.map((tutorial)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorial_card__WEBPACK_IMPORTED_MODULE_3__/* .TutorialCardWithAuthElements */ .m, {
                ...(0,components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_9__/* .formatTutorialCard */ .OW)({
                    ...tutorial,
                    defaultContext: tutorial.collectionCtx.default
                })
            }, tutorial.id));
    }
    const resultsLowerBound = results.hitsPerPage * results.page + 1;
    const resultsUpperBound = Math.min(results.hitsPerPage * (results.page + 1), results.nbHits);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-live": "polite",
                className: "g-screen-reader-only",
                children: hasFiltersApplied ? `Search returned ${results.nbHits} results. Displaying ${resultsLowerBound} through ${resultsUpperBound}.` : "Apply filters to search."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                fixedColumns: 3,
                children: itemsToRender
            }),
            hasFiltersApplied && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pagination__WEBPACK_IMPORTED_MODULE_7__/* .Pagination */ .t, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TutorialLibraryView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46269);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55749);
/* harmony import */ var components_filter_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2346);
/* harmony import */ var components_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64698);
/* harmony import */ var _components_current_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55666);
/* harmony import */ var _components_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31285);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52854);
/* harmony import */ var _components_mobile_filters_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44502);
/* harmony import */ var _tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28638);
/* harmony import */ var _tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86972);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84345);
/* harmony import */ var _components_clear_filters_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78211);
/* harmony import */ var _components_filters_use_filters_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38826);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__, components_dialog__WEBPACK_IMPORTED_MODULE_5__, _components_current_filters__WEBPACK_IMPORTED_MODULE_6__, _components_results__WEBPACK_IMPORTED_MODULE_7__, _components_filters__WEBPACK_IMPORTED_MODULE_10__, _components_clear_filters_button__WEBPACK_IMPORTED_MODULE_12__, _components_filters_use_filters_state__WEBPACK_IMPORTED_MODULE_13__]);
([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__, components_dialog__WEBPACK_IMPORTED_MODULE_5__, _components_current_filters__WEBPACK_IMPORTED_MODULE_6__, _components_results__WEBPACK_IMPORTED_MODULE_7__, _components_filters__WEBPACK_IMPORTED_MODULE_10__, _components_clear_filters_button__WEBPACK_IMPORTED_MODULE_12__, _components_filters_use_filters_state__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 















let timerId = undefined;
/**
 * Called when a search is triggered from the search input. This allows us to
 * throttle the number of network calls based on the SEARCH_TIMEOUT_MS constant.
 */ const queryHook = (query, search)=>{
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(()=>search(query), _constants__WEBPACK_IMPORTED_MODULE_8__/* .SEARCH_TIMEOUT_MS */ .U8);
};
/**
 *
 * View for the tutorial library page. Assumes it is wrapped in an `InstantSearch` component, which provides the necessary search data
 */ function TutorialLibraryView({ defaultTutorials  }) {
    const { query: searchQuery , refine  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__.useSearchBox)({
        queryHook
    });
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchQuery);
    const [showMobileFilters, setShowMobileFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filtersState = (0,_components_filters_use_filters_state__WEBPACK_IMPORTED_MODULE_13__/* .useFiltersState */ .$)();
    // configure our search client with custom settings
    (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__.useConfigure)({
        hitsPerPage: 24,
        filters: "type:tutorial"
    });
    const handleDialogDismiss = ()=>setShowMobileFilters(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                level: 1,
                size: 500,
                weight: "bold",
                className: (_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default().pageTitle),
                children: "Tutorial Library"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default().inputFilterSection),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_filter_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: (_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default().input),
                        placeholder: "Filter results",
                        value: query,
                        onChange: (value)=>{
                            setQuery(value);
                            refine(value);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mobile_filters_button__WEBPACK_IMPORTED_MODULE_9__/* .MobileFiltersButton */ .l, {
                        onClick: ()=>setShowMobileFilters(true)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_dialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        isOpen: showMobileFilters,
                        label: "Tutorial filters",
                        onDismiss: handleDialogDismiss,
                        variant: "bottom",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default().exitIcon),
                                onClick: handleDialogDismiss,
                                "aria-label": "Cancel",
                                type: "button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_3__/* .IconX16 */ .H, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_tutorial_library_module_css__WEBPACK_IMPORTED_MODULE_15___default().mobileFiltersControls),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        text: "Done",
                                        onClick: handleDialogDismiss
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_clear_filters_button__WEBPACK_IMPORTED_MODULE_12__/* .ClearFiltersButton */ .B, {
                                        disableWhenNoFilters: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_filters__WEBPACK_IMPORTED_MODULE_10__/* .TutorialLibraryFilters */ .$, {
                                ...filtersState
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_current_filters__WEBPACK_IMPORTED_MODULE_6__/* .CurrentFilters */ .c, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_results__WEBPACK_IMPORTED_MODULE_7__/* .TutorialLibraryResults */ .T, {
                defaultTutorials: defaultTutorials
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getTutorialCardPropsFromHit)
/* harmony export */ });
/* harmony import */ var components_tutorial_meta_components_badges_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95355);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28493);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Results
 *
 * @TODO can we de-dupe with formatTutorialCard from 'components/tutorial-card/helpers'? The search result has `.products`, where
 * as the helper expects `.productsUsed`
 */ function getTutorialCardPropsFromHit(hit) {
    return {
        id: hit.id,
        collectionId: hit.defaultContext.id,
        url: (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getTutorialSlug */ .Jc)(hit.slug, hit.defaultContext.slug),
        duration: (0,components_tutorial_meta_components_badges_helpers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(hit.readTime),
        heading: hit.page_title,
        description: hit.description,
        productsUsed: hit.products,
        hasVideo: hit.hasVideo,
        hasInteractiveLab: hit.isInteractive
    };
}


/***/ }),

/***/ 4221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ routerStateToSearchState),
/* harmony export */   "O": () => (/* binding */ searchStateToRouteState)
/* harmony export */ });
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81141);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52854);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Converts query parameters to a structured search state object
 */ function routerStateToSearchState(routeState) {
    return {
        [_constants__WEBPACK_IMPORTED_MODULE_0__/* .INDEX_NAME */ .js]: {
            page: Number.parseInt(routeState.page, 10),
            query: routeState.query,
            refinementList: {
                products: (routeState?.product)?.split?.(",") ?? []
            },
            menu: {
                edition: routeState.edition
            },
            toggle: {
                hasVideo: typeof routeState.hasVideo !== "undefined" ? routeState.hasVideo === "true" : undefined,
                isInteractive: typeof routeState.isInteractive !== "undefined" ? routeState.isInteractive === "true" : undefined
            }
        }
    };
}
/**
 * Converts structured search state into a object to be set as query parameters
 */ function searchStateToRouteState(searchState) {
    const state = searchState[_constants__WEBPACK_IMPORTED_MODULE_0__/* .INDEX_NAME */ .js];
    const result = {
        page: state.page || undefined,
        query: state.query,
        product: state.refinementList?.products?.join(",") || undefined,
        edition: state?.menu?.edition,
        hasVideo: state?.toggle?.hasVideo,
        isInteractive: state?.toggle?.isInteractive
    };
    return (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_1__/* .stripUndefinedProperties */ .c)(result);
}


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

/***/ 23257:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch/lite");

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

/***/ 87104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

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
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,4203,8725,3076,504,5398,1614,9450,265,7232,4884,6182,6415,5,109], () => (__webpack_exec__(82629)));
module.exports = __webpack_exports__;

})();