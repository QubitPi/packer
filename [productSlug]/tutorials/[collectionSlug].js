(() => {
var exports = {};
exports.id = 1069;
exports.ids = [1069];
exports.modules = {

/***/ 19654:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "collection-meta_icon__bj8sx",
	"heading": "collection-meta_heading__YA_Yt",
	"description": "collection-meta_description__9mKk_ hds-typography-body-300 hds-font-weight-regular",
	"createAccountCta": "collection-meta_createAccountCta__rtHfK",
	"cta": "collection-meta_cta__FzrC_"
};


/***/ }),

/***/ 81661:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "collection-tutorial-list_root__6Beek"
};


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

/***/ 95655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 46149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jr": () => (/* binding */ formatCollection),
/* harmony export */   "vD": () => (/* binding */ formatProductUsed)
/* harmony export */ });
/* unused harmony export formatToTutorialLite */
/* harmony import */ var _tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38502);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
function formatCollection(collection) {
    const { id , slug , name , short_name , description , icon , theme , ordered , level , category , tutorials  } = collection;
    return {
        id,
        slug,
        name,
        shortName: short_name,
        description,
        icon,
        theme,
        ordered,
        level,
        category: category || undefined,
        tutorials: tutorials.map(formatToTutorialLite)
    };
}
function formatToTutorialLite(item) {
    const { id , name , short_name , slug , description , read_time , edition , products_used , default_collection  } = item.tutorial;
    const productsUsed = products_used.map(formatProductUsed);
    const video = (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatVideo */ .Oz)(item.tutorial);
    const handsOnLab = (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatHandsOnLab */ .Lf)(item.tutorial);
    const formattedVariant = item.tutorial.variants?.length > 0 ? (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatVariant */ .yf)(item.tutorial.variants[0]) : undefined;
    return {
        id,
        name,
        shortName: short_name || name,
        slug,
        description,
        readTime: read_time,
        edition: edition,
        productsUsed,
        video,
        handsOnLab,
        defaultContext: (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatToCollectionLite */ .je)(default_collection),
        variant: formattedVariant
    };
}
function formatProductUsed(productUsed) {
    const { product , tutorial_id , is_primary , is_beta , min_version , max_version  } = productUsed;
    const { id , slug , name , docs_url , description  } = product;
    return {
        product: {
            id,
            slug,
            name,
            docsUrl: docs_url,
            description
        },
        tutorial: tutorial_id,
        isPrimary: is_primary,
        isBeta: is_beta,
        minVersion: min_version || undefined,
        maxVersion: max_version || undefined
    };
}


/***/ }),

/***/ 38502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lf": () => (/* binding */ formatHandsOnLab),
/* harmony export */   "Oz": () => (/* binding */ formatVideo),
/* harmony export */   "je": () => (/* binding */ formatToCollectionLite),
/* harmony export */   "ri": () => (/* binding */ formatTutorialData),
/* harmony export */   "yf": () => (/* binding */ formatVariant)
/* harmony export */ });
/* harmony import */ var _collection_formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46149);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * This function handles two types of return tutorial data from the API.
 * For getTutorials and getAllTutorials, the API returns CollectionLite
 * for featured_collections. But with getTutorial, we need featured_collections
 * to be the full Collection type (with tutorials).
 *
 * This function returns either:
 * - Tutorial, with featuredCollections: CollectionLite
 * - or TutorialFullCollectionCtx, with featuredCollections: Collection
 */ function formatTutorialData(tutorial) {
    const { id , slug , name , short_name , description , content , default_collection_id , featured_collections , read_time , edition , products_used , variants  } = tutorial;
    const productsUsed = products_used.map(_collection_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatProductUsed */ .vD);
    const video = formatVideo(tutorial);
    const handsOnLab = formatHandsOnLab(tutorial);
    const collectionCtx = formatCollectionCtx(featured_collections, default_collection_id);
    // We only accept a single variant currently, so we take the first array item
    // The learn-api-content-sync should prevent multiple variants from syncing into
    // the database, this is an extra protection
    const formattedVariant = variants?.length > 0 ? formatVariant(variants[0]) : undefined;
    return {
        id,
        slug,
        name,
        shortName: short_name || name,
        description,
        content,
        collectionCtx,
        productsUsed,
        readTime: read_time,
        video,
        handsOnLab,
        edition: edition,
        variant: formattedVariant
    };
}
function formatToCollectionLite(collection) {
    const { id , name , slug , short_name , level , theme  } = collection;
    return {
        id,
        name,
        slug,
        shortName: short_name,
        level,
        theme
    };
}
function formatCollectionCtx(featuredCollections, defaultCollectionId) {
    let featuredIn;
    const defaultCollection = featuredCollections.find(({ id  })=>id === defaultCollectionId);
    // assuming if the first collection has tutorials, were dealing with full Collection
    if ("tutorials" in featuredCollections[0]) {
        featuredIn = featuredCollections.map(_collection_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatCollection */ .Jr);
    } else {
        featuredIn = featuredCollections.map(formatToCollectionLite);
    }
    const collectionCtx = {
        default: formatToCollectionLite(defaultCollection),
        featuredIn
    };
    return collectionCtx;
}
function formatVideo({ video_id , video_host , video_inline  }) {
    let video = undefined;
    if (video_id) {
        video = {
            id: video_id,
            videoHost: video_host,
            videoInline: video_inline
        };
    }
    return video;
}
function formatHandsOnLab({ hands_on_lab_id , hands_on_lab_provider  }) {
    let handsOnLab = undefined;
    if (hands_on_lab_id) {
        handsOnLab = {
            id: hands_on_lab_id,
            provider: hands_on_lab_provider
        };
    }
    return handsOnLab;
}
function formatVariant(variant) {
    const { options , ...rest } = variant;
    return {
        ...rest,
        options: options.map(({ display_order , ...rest })=>({
                displayOrder: display_order,
                ...rest
            }))
    };
}


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

/***/ 39761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95655);
/* harmony import */ var views_collection_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22309);
/* harmony import */ var views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_collection_view__WEBPACK_IMPORTED_MODULE_1__, views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__]);
([views_collection_view__WEBPACK_IMPORTED_MODULE_1__, views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


async function getStaticPaths() {
    const paths = await (0,views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getCollectionPagePaths */ .Bh)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { collectionSlug , productSlug  } = params;
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__/* .cachedGetProductData */ .i)(productSlug);
    const props = await (0,views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getCollectionPageProps */ .Ry)(productData, collectionSlug);
    // If the collection doesn't exist, hit the 404
    if (!props) {
        return {
            notFound: true
        };
    }
    return props;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_collection_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectionMeta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_collections_24__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59231);
/* harmony import */ var hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66245);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14617);
/* harmony import */ var components_icon_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26991);
/* harmony import */ var components_inline_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83628);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33356);
/* harmony import */ var components_collection_progress_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25828);
/* harmony import */ var _collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19654);
/* harmony import */ var _collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








function CollectionMeta({ heading , description , collection  }) {
    /**
	 * We only need to show the Create Account CTA if auth is enabled and there is
	 * not already a user authenticated.
	 */ const { isAuthenticated , isLoading  } = (0,hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const showCreateAccountCta = !isLoading && !isAuthenticated;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_tile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_collections_24__WEBPACK_IMPORTED_MODULE_1__/* .IconCollections24 */ .t, {
                    className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                level: 1,
                size: 600,
                weight: "bold",
                id: heading.id,
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
                children: heading.text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
                dangerouslySetInnerHTML: {
                    __html: description
                }
            }),
            showCreateAccountCta ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().createAccountCta),
                size: 200,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inline_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/sign-up",
                        textSize: 200,
                        children: "Create an account"
                    }),
                    " ",
                    "to track your progress."
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().cta),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_collection_progress_group__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Co, {
                    collection: collection
                })
            })
        ]
    });
}


/***/ }),

/***/ 74893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var _collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81661);
/* harmony import */ var _collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function CollectionTutorialList({ tutorials , isOrdered  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* .TutorialCardsGridList */ .b, {
            fixedColumns: isOrdered ? 1 : null,
            isOrdered: isOrdered,
            tutorials: tutorials
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionTutorialList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ generateCollectionSidebarNavData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98302);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Generate the Tutorials Collection sidebar nav data level.
 * This is used both on the Collection view,
 * and in the mobile menu on the individual Tutorials view
 */ function generateCollectionSidebarNavData(product, sidebarSections) {
    return {
        levelButtonProps: {
            levelUpButtonText: `${product.name} Home`,
            levelDownButtonText: "Previous"
        },
        backToLinkProps: {
            text: `${product.name} Home`,
            href: `/${product.slug}`
        },
        title: "Tutorials",
        /* We always visually hide the title, as we've added in a
			"highlight" item that would make showing the title redundant. */ visuallyHideTitle: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_1__/* .CollectionViewSidebarContent */ .Zp, {
            productSlug: product.slug,
            sections: sidebarSections
        })
    };
}


/***/ }),

/***/ 22309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64884);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46064);
/* harmony import */ var components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98302);
/* harmony import */ var _components_collection_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72739);
/* harmony import */ var _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74893);
/* harmony import */ var components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53135);
/* harmony import */ var _helpers_generate_collection_sidebar_nav_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58919);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__]);
([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







function CollectionView({ collection , layoutProps , product  }) {
    const { name , description , tutorials , ordered  } = collection;
    const sidebarNavDataLevels = [
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__/* .generateTopLevelSidebarNavData */ .Vz)(product.name),
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__/* .generateProductLandingSidebarNavData */ ._G)(product),
        (0,_helpers_generate_collection_sidebar_nav_data__WEBPACK_IMPORTED_MODULE_7__/* .generateCollectionSidebarNavData */ .E)(product, layoutProps.sidebarSections)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        breadcrumbLinks: layoutProps.breadcrumbLinks,
        AlternateSidebar: components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        /**
			 * @TODO remove casting to `any`. Will require refactoring both
			 * `generateTopLevelSidebarNavData` and
			 * `generateProductLandingSidebarNavData` to set up `menuItems` with the
			 * correct types. This will require chaning many files, so deferring for
			 * a follow-up PR since this is functional for the time being.
			 */ sidebarNavDataLevels: sidebarNavDataLevels,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                collection: collection,
                // Note: id is passed here because it is required by <Heading />,
                // it's not used for #anchor linking since there is no sidecar.
                heading: {
                    text: name,
                    id: collection.id
                },
                description: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOrdered: ordered,
                tutorials: tutorials.map((t)=>(0,components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatTutorialCard */ .OW)(t, collection))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ getCollectionPagePaths),
/* harmony export */   "Dz": () => (/* binding */ getCollectionViewSidebarSections),
/* harmony export */   "Ry": () => (/* binding */ getCollectionPageProps)
/* harmony export */ });
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52591);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34506);
/* harmony import */ var views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49827);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81141);
/* harmony import */ var lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98519);
/* harmony import */ var views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10853);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28493);
/* harmony import */ var _product_tutorials_view_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__]);
lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const moizeOpts = {
    isPromise: true,
    maxSize: Infinity,
    isDeepEqual: true
};
// limit the expensive call for collections who all have the same product
const cachedGetAllCollections = moize__WEBPACK_IMPORTED_MODULE_0___default()(lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getAllCollections */ .Lg, moizeOpts);
async function getCollectionViewSidebarSections(productSlug, collection) {
    let sidebarSections;
    /**
	 * Note that `hcp` is a "product" in Dev Dot but not in Learn,
	 * so we do some branching.
	 */ if (productSlug == "hcp") {
        const allHcpCollections = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getCollectionsBySection */ .Jz)("cloud");
        sidebarSections = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .buildCategorizedHcpSidebar */ .Fi)(allHcpCollections, collection.slug);
    } else {
        const allProductCollections = await cachedGetAllCollections({
            product: {
                slug: productSlug,
                sidebarSort: true
            }
        });
        const filteredCollections = (0,_product_tutorials_view_helpers__WEBPACK_IMPORTED_MODULE_5__/* .filterCollections */ .$)(allProductCollections, productSlug);
        sidebarSections = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatSidebarCategorySections */ .Jd)(filteredCollections, collection.slug);
    }
    return sidebarSections;
}
/**
 * Given a ProductData object (imported from src/data JSON files) and a
 * Collection slug, fetches and returns the page props for
 * `/{productSlug}/tutorials/{collectionSlug}` pages.
 *
 * Returns the given ProductData object unmodified as the `product` page prop,
 * which is needed for other areas of the app to function.
 */ async function getCollectionPageProps(product, slug) {
    // product.slug may be "hcp", needs to be "cloud" for Learn API use
    const learnProductSlug = (0,lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_3__/* .normalizeSlugForTutorials */ .a)(product.slug);
    const collection = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getCollection */ ._N)(`${learnProductSlug}/${slug}`);
    // if null the api encountered a 404
    if (collection === null) {
        return null;
    }
    const layoutProps = {
        breadcrumbLinks: (0,views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_6__/* .getTutorialsBreadcrumb */ .Y)({
            product: {
                name: product.name,
                filename: product.slug
            },
            collection: {
                name: collection.shortName,
                filename: (0,views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_2__/* .splitProductFromFilename */ .fI)(collection.slug)
            }
        }),
        sidebarSections: await getCollectionViewSidebarSections(product.slug, collection)
    };
    return {
        props: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__/* .stripUndefinedProperties */ .c)({
            metadata: {
                title: collection.shortName,
                description: collection.description
            },
            collection: collection,
            product,
            layoutProps
        })
    };
}
/**
 * These paths are built with the collection slug as context for truth.
 * We build the path using the collection's product association for the proper slug context.
 * Original Collection Slug — :productSlug/:collectionFilename
 * Final route — :productSlug/tutorials/:collectionFilename
 */ async function getCollectionPagePaths() {
    const collections = await cachedGetAllCollections();
    const paths = [];
    collections.forEach((collection)=>{
        // assuming slug structure of :product/:filename
        const [collectionProductSlug, filename] = collection.slug.split("/");
        const productSlug = collectionProductSlug === "cloud" ? "hcp" : collectionProductSlug;
        /**
		 * Only build collections where the `productSlug` is a valid beta product.
		 * As well, for all non-HCP products, only build collections where
		 * `theme` matches the `productSlug`.
		 *
		 * Once all products are 'onboarded' we can remove this filtering layer
		 * for the beta products.
		 *
		 * @TODO once we implement the `theme` query option, remove the theme filtering
		 * https://app.asana.com/0/1201903760348480/1201932088801131/f
		 */ const isCloud = collectionProductSlug == "cloud";
        const themeMatches = collectionProductSlug === collection.theme;
        const shouldBuildCollectionPath = isCloud || themeMatches;
        if (shouldBuildCollectionPath) {
            paths.push({
                params: {
                    productSlug,
                    collectionSlug: filename
                }
            });
        }
    });
    return paths;
}

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,1877,453,4203,8725,3076,504,4975,9231,265,7232,4884,6182,6415,4506,2529,6377], () => (__webpack_exec__(39761)));
module.exports = __webpack_exports__;

})();