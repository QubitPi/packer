"use strict";
(() => {
var exports = {};
exports.id = 3611;
exports.ids = [3611];
exports.modules = {

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 38050:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export augmentTutorial */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4066);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27410);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59158);
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
    const identifier = formatIdentifier(idOrSlug);
    // /tutorials/:id/collections
    const route = path.join(TUTORIAL_API_ROUTE, `${identifier}/collections`);
    const featuredCollectionsRes = await get(route);
    if (featuredCollectionsRes.ok) {
        const res = await featuredCollectionsRes.json();
        return res.result;
    }
    const error = await toError(featuredCollectionsRes);
    throw error;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lf": () => (/* binding */ formatHandsOnLab),
  "je": () => (/* binding */ formatToCollectionLite),
  "ri": () => (/* binding */ formatTutorialData),
  "yf": () => (/* binding */ formatVariant),
  "Oz": () => (/* binding */ formatVideo)
});

;// CONCATENATED MODULE: ./src/lib/learn-client/api/collection/formatting.ts
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
    const video = formatVideo(item.tutorial);
    const handsOnLab = formatHandsOnLab(item.tutorial);
    const formattedVariant = item.tutorial.variants?.length > 0 ? formatVariant(item.tutorial.variants[0]) : undefined;
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
        defaultContext: formatToCollectionLite(default_collection),
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

;// CONCATENATED MODULE: ./src/lib/learn-client/api/tutorial/formatting.ts
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
    const productsUsed = products_used.map(formatProductUsed);
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
        featuredIn = featuredCollections.map(formatCollection);
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

/***/ 59158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* binding */ getAllTutorials)
/* harmony export */ });
/* unused harmony exports TUTORIAL_API_ROUTE, getTutorial, getTutorials */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27410);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4066);
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44119);
/* harmony import */ var _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38050);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__, _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__]);
([_utils__WEBPACK_IMPORTED_MODULE_2__, _augment_tutorial__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const TUTORIAL_API_ROUTE = "/tutorials";
async function getTutorial(idOrSlug) {
    const identifier = formatIdentifier(idOrSlug);
    // /tutorials/:id
    const route = path.join(TUTORIAL_API_ROUTE, identifier);
    const getTutorialRes = await get(route);
    if (getTutorialRes.ok) {
        const res = await getTutorialRes.json();
        const augmentedData = await augmentTutorial(res.result) // additional Api call here
        ;
        return formatTutorialData(augmentedData);
    }
    // This is handled by tutorial template /pages/tutorials/[...slug] to render 404 page
    if (getTutorialRes.status === 404) {
        console.error("Learn Api Client: 404 — Tutorial not found");
        return null;
    }
    const error = await toError(getTutorialRes);
    throw error;
}
async function getTutorials(idsOrSlugs, withContent) {
    const queryStr = formatBatchQueryStr(idsOrSlugs, withContent);
    const route = path.join(TUTORIAL_API_ROUTE, queryStr);
    const getTutorialsRes = await get(route);
    if (getTutorialsRes.ok) {
        const res = await getTutorialsRes.json();
        return res.result.map(formatTutorialData);
    }
    const error = await toError(getTutorialsRes);
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

/***/ 28074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ fetchAll)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_learn_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27410);
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

/***/ 4066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qd": () => (/* reexport safe */ _fetch_all__WEBPACK_IMPORTED_MODULE_1__.Q)
/* harmony export */ });
/* unused harmony exports formatIdentifier, formatBatchQueryStr */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _fetch_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28074);
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
    return z.string().uuid().safeParse(id).success;
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

/***/ 27410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KC": () => (/* binding */ toError),
/* harmony export */   "U2": () => (/* binding */ get)
/* harmony export */ });
/* unused harmony exports put, post, destroy */
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ function getFetch() {
    // Note: purposely doing a conditional require here so that `@vercel/fetch` is not included in the client bundle
    if (true) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const createFetch = __webpack_require__(33666);
        return createFetch();
    }
    return window.fetch;
}
// some of our reqs occur in a node env where fetch
// isn't defined e.g. algolia search script
const fetch = getFetch();
function get(path, token) {
    const options = {
        method: "GET"
    };
    // if the req needs to be auth'd, add the bearer token
    if (token) {
        options.headers = {
            Authorization: `Bearer ${token}`
        };
    }
    return fetch(`${"https://2mz7e9hai3.us-east-1.awsapprunner.com"}${path}`, options);
}
function put(path, token, bodyJson) {
    return fetch(`${"https://2mz7e9hai3.us-east-1.awsapprunner.com"}${path}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyJson)
    });
}
function post(path, token, bodyJson = {}) {
    return fetch(`${"https://2mz7e9hai3.us-east-1.awsapprunner.com"}${path}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyJson)
    });
}
function destroy(path, token) {
    return fetch(`${"https://2mz7e9hai3.us-east-1.awsapprunner.com"}${path}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
async function toError(errorResponse) {
    let json;
    try {
        json = await errorResponse.json();
    } catch (err) {
    // Do nothing if the response is not json
    }
    return new Error(`${errorResponse.status} ${errorResponse.statusText}${json?.error ? ` - ${json.error}` : ""}`);
}


/***/ }),

/***/ 47511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tutorialsMapHandler),
/* harmony export */   "generateTutorialMap": () => (/* binding */ generateTutorialMap)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7175);
/* harmony import */ var lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59158);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__]);
lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


// 1 hour
const MAP_MAX_AGE_IN_SECONDS = 60 * 60 * 60;
/**
 * This API caches a tutorial-map blob for the tutorial rewrites
 * remark plugin - lib/remark-plugins/rewrite-tutorial-links.
 * This ensures that calls to `getAllTutorials` are limited
 * for ISR generated tutorial views
 */ async function tutorialsMapHandler(req, res) {
    try {
        const mapData = await generateTutorialMap();
        if (Object.keys(mapData).length > 0) {
            res.setHeader("cache-control", `s-maxage=${MAP_MAX_AGE_IN_SECONDS}`);
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.OK).json(mapData);
        } else {
            res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json({
                message: "Failed to generate tutorial map"
            });
        }
    } catch (e) {
        res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Server error: unable to generate tutorial map"
        });
    }
}
/**
 * This function creates a map of 'database-slug': 'dev-dot/path'
 */ async function generateTutorialMap() {
    const allTutorials = await (0,lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__/* .getAllTutorials */ .BL)({
        fullContent: false,
        slugsOnly: true
    });
    const mapItems = allTutorials.map((t)=>{
        const oldPath = t.slug;
        const newPath = (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getTutorialSlug */ .Jc)(t.slug, t.collection_slug);
        return [
            oldPath,
            newPath
        ];
    });
    return Object.fromEntries(mapItems);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Jc": () => (/* reexport */ get_slug_getTutorialSlug)
});

// UNUSED EXPORTS: buildCategorizedHcpSidebar, formatSidebarCategorySections, getCollectionSlug

;// CONCATENATED MODULE: ./src/lib/learn-client/types.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ var ProductOption;
(function(ProductOption) {
    ProductOption["boundary"] = "boundary";
    ProductOption["consul"] = "consul";
    ProductOption["nomad"] = "nomad";
    ProductOption["packer"] = "packer";
    ProductOption["terraform"] = "terraform";
    ProductOption["vagrant"] = "vagrant";
    ProductOption["vault"] = "vault";
    ProductOption["waypoint"] = "waypoint";
})(ProductOption || (ProductOption = {}));
var SectionOption;
(function(SectionOption) {
    SectionOption["well-architected-framework"] = "well-architected-framework";
    SectionOption["onboarding"] = "onboarding";
})(SectionOption || (SectionOption = {}));
var EditionOption;
(function(EditionOption) {
    EditionOption["openSource"] = "open_source";
    EditionOption["enterprise"] = "enterprise";
    EditionOption["hcp"] = "hcp";
    EditionOption["tfcFree"] = "tfc:free";
    EditionOption["tfcStandard"] = "tfc:standard";
    EditionOption["tfcPlus"] = "tfc:plus";
})(EditionOption || (EditionOption = {}));
var types_ThemeOption;
(function(ThemeOption) {
    ThemeOption["cloud"] = "cloud";
    ThemeOption["hashicorp"] = "hashicorp";
})(types_ThemeOption || (types_ThemeOption = {}));
var types_CollectionCategoryOption;
(function(CollectionCategoryOption) {
    CollectionCategoryOption["get_started"] = "Get Started";
    CollectionCategoryOption["fundamentals"] = "Fundamentals";
    CollectionCategoryOption["use_cases"] = "Use Cases";
    CollectionCategoryOption["certification"] = "Certification Prep";
    CollectionCategoryOption["production"] = "Production";
    CollectionCategoryOption["integrations"] = "Integrations";
    CollectionCategoryOption["kubernetes"] = "Kubernetes";
    CollectionCategoryOption["operations"] = "Operations";
})(types_CollectionCategoryOption || (types_CollectionCategoryOption = {}));
var VideoHostOption;
(function(VideoHostOption) {
    VideoHostOption["youtube"] = "youtube";
    VideoHostOption["wistia"] = "wistia";
})(VideoHostOption || (VideoHostOption = {}));
var HandsOnLabProviderOption;
(function(HandsOnLabProviderOption) {
    HandsOnLabProviderOption["katacoda"] = "katacoda";
    HandsOnLabProviderOption["instruqt"] = "instruqt";
})(HandsOnLabProviderOption || (HandsOnLabProviderOption = {}));
var CompanyLogoOption;
(function(CompanyLogoOption) {
    CompanyLogoOption["docker"] = "docker";
    CompanyLogoOption["github"] = "github";
    CompanyLogoOption["microsoft-azure"] = "microsoft-azure";
    CompanyLogoOption["oci"] = "oci";
    CompanyLogoOption["google-cloud"] = "google-cloud";
    CompanyLogoOption["terraform-cloud"] = "terraform-cloud";
    CompanyLogoOption["aws"] = "aws";
})(CompanyLogoOption || (CompanyLogoOption = {}));
var TutorialProgressStatus;
(function(TutorialProgressStatus) {
    TutorialProgressStatus["visited"] = "visited";
    TutorialProgressStatus["in_progress"] = "in_progress";
    TutorialProgressStatus["complete"] = "complete";
})(TutorialProgressStatus || (TutorialProgressStatus = {}));
var TutorialProgressPercent;
(function(TutorialProgressPercent) {
    TutorialProgressPercent["Zero"] = "0";
    TutorialProgressPercent["TwentyFive"] = "25";
    TutorialProgressPercent["Fifty"] = "50";
    TutorialProgressPercent["SeventyFive"] = "75";
    TutorialProgressPercent["Ninety"] = "90";
    TutorialProgressPercent["OneHundred"] = "100";
})(TutorialProgressPercent || (TutorialProgressPercent = {}));
/**
 * TYPE GUARDS ---------------------------------
 */ //  type guard to distinguish products from themes
function themeIsProduct(theme) {
    return types_isProductOption(theme);
}
/**
 * Type guard to determine if a string is a ThemeOption or ProductOption
 */ function isThemeOrProduct(string) {
    return isThemeOption(string) || types_isProductOption(string);
}
/**
 * Type guard to determine if a string is a ThemeOption
 */ function isThemeOption(string) {
    return Object.values(types_ThemeOption).includes(string);
}
/**
 * Type guard to determine if a string is a SectionOption
 */ function types_isSectionOption(string) {
    return Object.values(SectionOption).includes(string);
}
/**
 * Type guard to determine if a string is a ProductOption
 */ function types_isProductOption(string) {
    return Object.values(ProductOption).includes(string);
}

;// CONCATENATED MODULE: ./src/views/tutorial-view/utils/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // A `.tsx` module exported in the barrel-export file (/helpers/index.ts) causes
// hc-tools to error, which breaks our `./scripts/warm-cache.ts`.
//
// To avoid this, we import from the specific file here to avoid unintended side effects.

function splitProductFromFilename(slug) {
    return slug.split("/")[1];
}
// Handles variant routes that in the url show as query params,
// but are rewritten to static paths in middleware. We want to check
// against the default tutorial path for 'current', not with the variant
function cleanVariantFromPath(tutorialPath) {
    const currentPathParts = tutorialPath.split("/");
    // Expected variant tutorial path structure
    // /:product/tutorials/:collection/:tutorial/:variant
    const isVariantPath = currentPathParts.length === 6 && currentPathParts[5].includes(":");
    if (isVariantPath) {
        currentPathParts.pop();
    }
    return currentPathParts.join("/");
}
function formatTutorialToMenuItem(tutorial, collection, currentPath) {
    const path = getTutorialSlug(tutorial.slug, collection.slug);
    const currentPathWithoutVariant = cleanVariantFromPath(currentPath);
    return {
        tutorialId: tutorial.id,
        collectionId: collection.id,
        text: tutorial.shortName,
        href: path,
        isActive: path === currentPathWithoutVariant
    };
}
function generateCanonicalUrl(defaultCollectionSlug, tutorialSlug) {
    const path = getTutorialSlug(tutorialSlug, defaultCollectionSlug);
    return new URL(path, "https://developer.hashicorp.com");
}

;// CONCATENATED MODULE: ./src/lib/products.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * A map of product slugs to their proper noun names.
 *
 * 🚨 NOTE: the order of this object matters for the Home page.
 */ const productSlugsToNames = {
    sentinel: "Sentinel",
    hcp: "HashiCorp Cloud Platform",
    terraform: "Terraform",
    packer: "Packer",
    consul: "Consul",
    vault: "Vault",
    boundary: "Boundary",
    nomad: "Nomad",
    waypoint: "Waypoint",
    vagrant: "Vagrant"
};
/**
 * A map of product slugs to their "dot io" site hostname.
 */ const productSlugsToHostNames = {
    boundary: "boundaryproject.io",
    consul: "consul.io",
    hcp: "cloud.hashicorp.com",
    nomad: "nomadproject.io",
    packer: "packer.io",
    sentinel: "docs.hashicorp.com",
    terraform: "terraform.io",
    vagrant: "vagrantup.com",
    vault: "vaultproject.io",
    waypoint: "waypointproject.io"
};
/**
 * Type guard to determine if a string is a ProductSlug
 *
 * TODO: should we define ProductSlug as an enum,
 * so that we can use its values directly here?
 */ function isProductSlug(string) {
    return Object.keys(productSlugsToNames).includes(string);
}
/**
 * An array of all Product slugs, generated from `productSlugsToNames`.
 */ const productSlugs = Object.keys(productSlugsToNames);
/**
 * An array of product slugs which are "active" on the site. Currently all but sentinel.
 */ const activeProductSlugs = productSlugs.filter((slug)=>slug !== "sentinel");
/**
 * Generates an array of Product objects from `productSlugs`.
 */ const products = productSlugs.map((slug)=>{
    const name = productSlugsToNames[slug];
    return {
        name,
        slug
    };
});


;// CONCATENATED MODULE: ./src/lib/tutorials/normalize-product-like-slug.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Given a "product" slug from a Tutorials context,
 * such as in part of a collection or tutorial slug,
 * Return a "product" slug compatible with Dev Dot's ProductSlug type.
 *
 * This is very specifically targeted at normalizing "cloud" to "hcp".
 * In Tutorials contexts, we use "cloud"; in Dev Dot we use "hcp".
 */ function normalize_product_like_slug_normalizeSlugForDevDot(productSlug) {
    if (productSlug == "cloud") {
        return "hcp";
    } else if (isProductSlug(productSlug)) {
        return productSlug;
    } else if (types_isSectionOption(productSlug)) {
        return productSlug;
    } else {
        console.warn(`Error: unrecognized incoming Tutorials slug "${productSlug}" in normalizeSlugForDevDot.`);
    }
}
/**
 * Given a "product" slug from a Dev Dot context,
 * such as in part of a URL,
 * Return a "product" slug compatible with the Learn API.
 *
 * This is very specifically targeted at normalizing "hcp" to "cloud".
 * In Tutorials contexts, we use "cloud"; in Dev Dot we use "hcp".
 */ function normalizeSlugForTutorials(slug) {
    if (slug == "hcp" || slug == "cloud") {
        return ThemeOption.cloud;
    } else if (isProductOption(slug)) {
        return slug;
    } else if (isSectionOption(slug)) {
        return slug;
    } else {
        console.warn(`Error: unrecognized incoming productSlug "${slug}" in normalizeSlugForTutorials.`);
    }
}

;// CONCATENATED MODULE: ./src/views/collection-view/helpers/get-slug.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * takes db slug format --> waypoint/intro
 * and turns it to --> waypoint/tutorials/get-started-docker/intro
 *
 * We want to make sure to use the collection product in the path as
 * that sets the proper product context. The tutorial db slug may
 * reference a different product context
 */ function get_slug_getTutorialSlug(tutorialDbSlug, collectionDbSlug) {
    const [rawProductSlug, collectionFilename] = collectionDbSlug.split("/");
    const tutorialFilename = splitProductFromFilename(tutorialDbSlug);
    // @TODO genericize this to use 'topic' or 'section' instead of 'product'
    if (rawProductSlug === "well-architected-framework" || rawProductSlug === "onboarding") {
        return `/${collectionDbSlug}/${tutorialFilename}`;
    }
    // rawProductSlug may be "cloud", needs to be "hcp" for Dev Dot purposes
    const productSlug = normalize_product_like_slug_normalizeSlugForDevDot(rawProductSlug);
    return `/${productSlug}/tutorials/${collectionFilename}/${tutorialFilename}`;
}
function get_slug_getCollectionSlug(collectionDbSlug) {
    const [rawProductSlug, collectionFilename] = collectionDbSlug.split("/");
    // @TODO genericize this to use 'topic' or 'section' instead of 'product'
    if (rawProductSlug === "well-architected-framework" || rawProductSlug === "onboarding") {
        return `/${collectionDbSlug}`;
    }
    // rawProductSlug may be "cloud", needs to be "hcp" for Dev Dot purposes
    const productSlug = normalizeSlugForDevDot(rawProductSlug);
    return `/${productSlug}/tutorials/${collectionFilename}`;
}

;// CONCATENATED MODULE: ./src/views/collection-view/helpers/format-sidebar-sections.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * This function creates an array of collection category
 * sections for the sidebar. The sections include the associated
 * collections with that category. The collection category order
 * and options are linked to the `CollectionCategoryOption` enum
 */ function formatSidebarCategorySections(collections, currentSlug) {
    const categorySlugs = Object.keys(CollectionCategoryOption);
    /**
	 * Track which collections have been used in sidebar categories,
	 * so that we can ensure any non-categorized collections are still displayed.
	 */ const usedCollections = [];
    const sidebarSectionsByCategory = categorySlugs.map((category)=>{
        // get collections associated with that category
        const items = collections.filter((c)=>{
            const isInCategory = c.category === category;
            if (isInCategory) {
                usedCollections.push(c.slug);
            }
            return isInCategory;
        });
        return {
            title: CollectionCategoryOption[category],
            items: items.map((collection)=>formatCollectionToListItem(collection, currentSlug))
        };
    });
    /**
	 * If we have category sections with content, use those.
	 */ const nonEmptySections = filterEmptySections(sidebarSectionsByCategory);
    if (nonEmptySections.length > 0) {
        return nonEmptySections;
    }
    /**
	 * Otherwise, since there are no other sidebar sections, then
	 * add an "unused" section, to capture any missing collections
	 * Note: this will be filtered out if it's empty.
	 *
	 * TODO: this is to get /hcp content stubbed, may not be correct,
	 * and may need adjustment once we have finalized designs.
	 */ const remainderCollections = collections.filter((c)=>{
        return usedCollections.indexOf(c.slug) == -1;
    });
    const remainderSection = {
        /**
		 * Note: section title is not included, only option I can think of
		 * is "Collections", which I think we want to avoid naming explicitly?
		 * And would look weird next to other more specifically named sections.
		 */ items: remainderCollections.map((collection)=>formatCollectionToListItem(collection, currentSlug))
    };
    return filterEmptySections([
        remainderSection
    ]);
}
function filterEmptySections(sections) {
    return sections.filter((c)=>c.items.length > 0);
}
function formatCollectionToListItem(collection, currentSlug) {
    const path = getCollectionSlug(collection.slug);
    return {
        text: collection.shortName,
        href: path,
        isActive: collection.slug === currentSlug
    };
}

;// CONCATENATED MODULE: ./src/content/hcp/tutorials-sidebar.json
const tutorials_sidebar_namespaceObject = {};
;// CONCATENATED MODULE: ./src/views/collection-view/helpers/generate-hcp-sidebar.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * The HCP tutorials landing and collection
 * sidebar is unique from other product sidebars.
 * The `genericHcpCollections` represent the actual
 * collections under 'cloud' in the filesystem. However,
 * there are additional cloud related collections for each
 * HCP product that we link to, but these live under their
 * specific product directory (e.g. vault/get-started-hcp )
 *
 * The additional sidebar categories to link to these product
 * collections are managed in a static JSON file in the content dir.
 *
 * This is considered an interim implementation for the GA launch.
 * Ideally, we could adjust the content structure so this sidebar
 * is generated based on the filesystem, like the other products.
 */ function buildCategorizedHcpSidebar(allCollections, currentSlug) {
    const genericHcpCollections = [
        {
            title: "HashiCorp Cloud Platform",
            items: allCollections.sort(sortAlphabetically("name")).map((collection)=>{
                const href = getCollectionSlug(collection.slug);
                return {
                    text: collection.name,
                    href,
                    isActive: collection.slug === currentSlug
                };
            })
        }
    ];
    const categorizedNonHcpCollections = hcpContent.sidebarCategories.map((category)=>({
            title: category.name,
            items: category.items.map((item)=>{
                const href = getCollectionSlug(item.collectionSlug);
                const badge = item.isBeta ? {
                    text: "Beta",
                    type: "outlined",
                    color: "neutral"
                } : undefined;
                return {
                    text: item.name,
                    href,
                    badge,
                    isActive: false
                };
            })
        }));
    return [
        ...genericHcpCollections,
        ...categorizedNonHcpCollections
    ];
}

;// CONCATENATED MODULE: ./src/views/collection-view/helpers/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(47511));
module.exports = __webpack_exports__;

})();