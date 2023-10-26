"use strict";
(() => {
var exports = {};
exports.id = 7773;
exports.ids = [7773];
exports.modules = {

/***/ 46149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 19909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 38502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 92809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 32235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KC": () => (/* binding */ toError),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "gz": () => (/* binding */ put),
/* harmony export */   "ob": () => (/* binding */ destroy),
/* harmony export */   "v_": () => (/* binding */ post)
/* harmony export */ });
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

/***/ 64785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bw": () => (/* binding */ VideoHostOption),
/* harmony export */   "FS": () => (/* binding */ SectionOption),
/* harmony export */   "Fy": () => (/* binding */ isProductOption),
/* harmony export */   "KD": () => (/* binding */ TutorialProgressStatus),
/* harmony export */   "KH": () => (/* binding */ ThemeOption),
/* harmony export */   "QD": () => (/* binding */ isSectionOption),
/* harmony export */   "XZ": () => (/* binding */ TutorialProgressPercent),
/* harmony export */   "ZN": () => (/* binding */ EditionOption),
/* harmony export */   "ig": () => (/* binding */ themeIsProduct),
/* harmony export */   "tK": () => (/* binding */ CollectionCategoryOption),
/* harmony export */   "wr": () => (/* binding */ ProductOption),
/* harmony export */   "xp": () => (/* binding */ CompanyLogoOption)
/* harmony export */ });
/* unused harmony exports HandsOnLabProviderOption, isThemeOrProduct */
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
var ThemeOption;
(function(ThemeOption) {
    ThemeOption["cloud"] = "cloud";
    ThemeOption["hashicorp"] = "hashicorp";
})(ThemeOption || (ThemeOption = {}));
var CollectionCategoryOption;
(function(CollectionCategoryOption) {
    CollectionCategoryOption["get_started"] = "Get Started";
    CollectionCategoryOption["fundamentals"] = "Fundamentals";
    CollectionCategoryOption["use_cases"] = "Use Cases";
    CollectionCategoryOption["certification"] = "Certification Prep";
    CollectionCategoryOption["production"] = "Production";
    CollectionCategoryOption["integrations"] = "Integrations";
    CollectionCategoryOption["kubernetes"] = "Kubernetes";
    CollectionCategoryOption["operations"] = "Operations";
})(CollectionCategoryOption || (CollectionCategoryOption = {}));
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
    return isProductOption(theme);
}
/**
 * Type guard to determine if a string is a ThemeOption or ProductOption
 */ function isThemeOrProduct(string) {
    return isThemeOption(string) || isProductOption(string);
}
/**
 * Type guard to determine if a string is a ThemeOption
 */ function isThemeOption(string) {
    return Object.values(ThemeOption).includes(string);
}
/**
 * Type guard to determine if a string is a SectionOption
 */ function isSectionOption(string) {
    return Object.values(SectionOption).includes(string);
}
/**
 * Type guard to determine if a string is a ProductOption
 */ function isProductOption(string) {
    return Object.values(ProductOption).includes(string);
}


/***/ }),

/***/ 14684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JA": () => (/* binding */ productSlugs),
/* harmony export */   "KD": () => (/* binding */ activeProductSlugs),
/* harmony export */   "RB": () => (/* binding */ products),
/* harmony export */   "kb": () => (/* binding */ productSlugsToHostNames),
/* harmony export */   "lF": () => (/* binding */ isProductSlug),
/* harmony export */   "tC": () => (/* binding */ productSlugsToNames)
/* harmony export */ });
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



/***/ }),

/***/ 41438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ allDocsFields)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94403);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
async function allDocsFields() {
    const getDocsPaths = await fetch(`${"https://content.hashicorp.com"}/api/all-docs-paths`);
    const { result: docsResult  } = await getDocsPaths.json();
    return docsResult.map((page)=>(0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .makeSitemapField */ .p)({
            slug: `${page.path}`,
            lastmodDate: page.created_at
        }));
}


/***/ }),

/***/ 94403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ makeSitemapField)
/* harmony export */ });
/* unused harmony export determinePriority */
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 *
 * @param slug
 * @returns 1 - 0.7 depending on slug depth in relation to a product's base path
 *
 * See XML Tag Definitions: https://www.sitemaps.org/protocol.html
 */ const determinePriority = (slug)=>{
    const slugDepth = slug.split("/").length;
    switch(slugDepth){
        case 1:
            return 1;
        case 2:
            return 0.9;
        case 3:
            return 0.8;
        default:
            return 0.7;
    }
};
const makeSitemapField = ({ slug , lastmodDate , priority , changefreq  })=>{
    return {
        loc: new URL(slug, "https://developer.hashicorp.com").toString(),
        lastmod: lastmodDate ?? new Date(Date.now()).toISOString(),
        priority: priority ?? determinePriority(slug),
        changefreq: changefreq ?? "daily"
    };
};


/***/ }),

/***/ 42678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aT": () => (/* reexport safe */ _tutorials_content_fields__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "df": () => (/* reexport safe */ _docs_content_fields__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _docs_content_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41438);
/* harmony import */ var _tutorials_content_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tutorials_content_fields__WEBPACK_IMPORTED_MODULE_1__]);
_tutorials_content_fields__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ allTutorialsFields)
/* harmony export */ });
/* harmony import */ var lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34506);
/* harmony import */ var lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64785);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14684);
/* harmony import */ var pages_api_tutorials_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40750);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28493);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__, pages_api_tutorials_map__WEBPACK_IMPORTED_MODULE_3__]);
([lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__, pages_api_tutorials_map__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





function getTutorialLandingPaths() {
    const activeSlugs = lib_products__WEBPACK_IMPORTED_MODULE_2__/* .activeProductSlugs.map */ .KD.map((productSlug)=>`${productSlug}/tutorials`);
    const sectionOptionsWithLandingPage = Object.values(lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .SectionOption */ .FS).filter((option)=>option !== lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .SectionOption.onboarding */ .FS.onboarding);
    const sectionOptions = sectionOptionsWithLandingPage.map((slug)=>`${slug}`);
    return [
        ...activeSlugs,
        ...sectionOptions
    ];
}
async function getCollectionPaths() {
    const allCollections = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__/* .getAllCollections */ .Lg)();
    return allCollections.map((collection)=>{
        // build collection paths
        return (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectionSlug */ .I_)(collection.slug);
    });
}
async function allTutorialsFields() {
    const landingSlugs = getTutorialLandingPaths();
    const collectionSlugs = await getCollectionPaths();
    const tutorialSlugs = Object.values(await (0,pages_api_tutorials_map__WEBPACK_IMPORTED_MODULE_3__/* .generateTutorialMap */ .S)());
    return [
        ...landingSlugs,
        ...collectionSlugs,
        ...tutorialSlugs
    ].map((slug)=>(0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .makeSitemapField */ .p)({
            slug
        }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ sortAlphabetically)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ function sortAlphabetically(property) {
    return (a, b)=>{
        const A = a[property].toUpperCase();
        const B = b[property].toUpperCase();
        if (A < B) {
            return -1;
        }
        if (A > B) {
            return 1;
        }
        return 0;
    };
}


/***/ }),

/***/ 98519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ normalizeSlugForTutorials),
/* harmony export */   "y": () => (/* binding */ normalizeSlugForDevDot)
/* harmony export */ });
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14684);
/* harmony import */ var lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64785);
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
 */ function normalizeSlugForDevDot(productSlug) {
    if (productSlug == "cloud") {
        return "hcp";
    } else if ((0,lib_products__WEBPACK_IMPORTED_MODULE_0__/* .isProductSlug */ .lF)(productSlug)) {
        return productSlug;
    } else if ((0,lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .isSectionOption */ .QD)(productSlug)) {
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
        return lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .ThemeOption.cloud */ .KH.cloud;
    } else if ((0,lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .isProductOption */ .Fy)(slug)) {
        return slug;
    } else if ((0,lib_learn_client_types__WEBPACK_IMPORTED_MODULE_1__/* .isSectionOption */ .QD)(slug)) {
        return slug;
    } else {
        console.warn(`Error: unrecognized incoming productSlug "${slug}" in normalizeSlugForTutorials.`);
    }
}


/***/ }),

/***/ 40750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ generateTutorialMap)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28493);
/* harmony import */ var lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__]);
lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


// 1 hour
const MAP_MAX_AGE_IN_SECONDS = (/* unused pure expression or super */ null && (60 * 60 * 60));
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
            res.status(StatusCodes.OK).json(mapData);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Failed to generate tutorial map"
            });
        }
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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

/***/ 80509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sitemap),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84279);
/* harmony import */ var lib_sitemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_0__, lib_sitemap__WEBPACK_IMPORTED_MODULE_1__]);
([next_sitemap__WEBPACK_IMPORTED_MODULE_0__, lib_sitemap__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const getServerSideProps = async (ctx)=>{
    try {
        // returns an array of docs content sitemap fields per slug
        const docsFields = await (0,lib_sitemap__WEBPACK_IMPORTED_MODULE_1__/* .allDocsFields */ .df)();
        // returns an array of tutorials content sitemap fields per slug
        const tutorialsFields = await (0,lib_sitemap__WEBPACK_IMPORTED_MODULE_1__/* .allTutorialsFields */ .aT)();
        return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_0__.getServerSideSitemap)(ctx, [
            ...docsFields,
            ...tutorialsFields
        ]);
    } catch (error) {
        throw new Error("Error generating server-sitemap.xml", error);
    }
};
// Default export to prevent next.js errors
function Sitemap() {
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ getCollectionSlug),
/* harmony export */   "J": () => (/* binding */ getTutorialSlug)
/* harmony export */ });
/* harmony import */ var views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49827);
/* harmony import */ var lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98519);
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
 */ function getTutorialSlug(tutorialDbSlug, collectionDbSlug) {
    const [rawProductSlug, collectionFilename] = collectionDbSlug.split("/");
    const tutorialFilename = (0,views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_0__/* .splitProductFromFilename */ .fI)(tutorialDbSlug);
    // @TODO genericize this to use 'topic' or 'section' instead of 'product'
    if (rawProductSlug === "well-architected-framework" || rawProductSlug === "onboarding") {
        return `/${collectionDbSlug}/${tutorialFilename}`;
    }
    // rawProductSlug may be "cloud", needs to be "hcp" for Dev Dot purposes
    const productSlug = (0,lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSlugForDevDot */ .y)(rawProductSlug);
    return `/${productSlug}/tutorials/${collectionFilename}/${tutorialFilename}`;
}
function getCollectionSlug(collectionDbSlug) {
    const [rawProductSlug, collectionFilename] = collectionDbSlug.split("/");
    // @TODO genericize this to use 'topic' or 'section' instead of 'product'
    if (rawProductSlug === "well-architected-framework" || rawProductSlug === "onboarding") {
        return `/${collectionDbSlug}`;
    }
    // rawProductSlug may be "cloud", needs to be "hcp" for Dev Dot purposes
    const productSlug = (0,lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSlugForDevDot */ .y)(rawProductSlug);
    return `/${productSlug}/tutorials/${collectionFilename}`;
}


/***/ }),

/***/ 28493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Fi": () => (/* reexport */ buildCategorizedHcpSidebar),
  "Jd": () => (/* reexport */ formatSidebarCategorySections),
  "I_": () => (/* reexport */ get_slug/* getCollectionSlug */.I),
  "Jc": () => (/* reexport */ get_slug/* getTutorialSlug */.J)
});

// EXTERNAL MODULE: ./src/lib/learn-client/types.ts
var types = __webpack_require__(64785);
// EXTERNAL MODULE: ./src/views/collection-view/helpers/get-slug.ts
var get_slug = __webpack_require__(97605);
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
    const categorySlugs = Object.keys(types/* CollectionCategoryOption */.tK);
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
            title: types/* CollectionCategoryOption */.tK[category],
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
    const path = (0,get_slug/* getCollectionSlug */.I)(collection.slug);
    return {
        text: collection.shortName,
        href: path,
        isActive: collection.slug === currentSlug
    };
}

// EXTERNAL MODULE: ./src/lib/sort-alphabetically.ts
var sort_alphabetically = __webpack_require__(17541);
;// CONCATENATED MODULE: ./src/content/hcp/tutorials-sidebar.json
const tutorials_sidebar_namespaceObject = JSON.parse('{"Q":[{"name":"HCP Vault","items":[{"name":"Quickstart","collectionSlug":"vault/cloud"},{"name":"Monitoring","collectionSlug":"vault/cloud-monitoring"},{"name":"Operations","collectionSlug":"vault/cloud-ops"}]},{"name":"HCP Vault Secrets","items":[{"name":"Quickstart","collectionSlug":"vault/hcp-vault-secrets-get-started"}]},{"name":"HCP Consul","items":[{"name":"Quickstart","collectionSlug":"consul/get-started-hcp"},{"name":"Production","collectionSlug":"consul/cloud-production"},{"name":"Deploy Automation","collectionSlug":"consul/cloud-deploy-automation"}]},{"name":"HCP Packer","items":[{"name":"Quickstart","collectionSlug":"packer/hcp-get-started"},{"name":"Fundamentals","collectionSlug":"packer/hcp"},{"name":"Use Cases","collectionSlug":"packer/cloud-production"}]},{"name":"HCP Boundary","items":[{"name":"Quickstart","collectionSlug":"boundary/hcp-getting-started"},{"name":"Administration","collectionSlug":"boundary/hcp-administration"}]},{"name":"HCP Waypoint","items":[{"name":"Quickstart","collectionSlug":"waypoint/hcp-waypoint","isBeta":true}]}]}');
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
            items: allCollections.sort((0,sort_alphabetically/* sortAlphabetically */.a)("name")).map((collection)=>{
                const href = (0,get_slug/* getCollectionSlug */.I)(collection.slug);
                return {
                    text: collection.name,
                    href,
                    isActive: collection.slug === currentSlug
                };
            })
        }
    ];
    const categorizedNonHcpCollections = tutorials_sidebar_namespaceObject.Q.map((category)=>({
            title: category.name,
            items: category.items.map((item)=>{
                const href = (0,get_slug/* getCollectionSlug */.I)(item.collectionSlug);
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




/***/ }),

/***/ 49827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bz": () => (/* binding */ formatTutorialToMenuItem),
/* harmony export */   "M4": () => (/* binding */ generateCanonicalUrl),
/* harmony export */   "fI": () => (/* binding */ splitProductFromFilename)
/* harmony export */ });
/* harmony import */ var views_collection_view_helpers_get_slug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97605);
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
    const path = (0,views_collection_view_helpers_get_slug__WEBPACK_IMPORTED_MODULE_0__/* .getTutorialSlug */ .J)(tutorial.slug, collection.slug);
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
    const path = (0,views_collection_view_helpers_get_slug__WEBPACK_IMPORTED_MODULE_0__/* .getTutorialSlug */ .J)(tutorialSlug, defaultCollectionSlug);
    return new URL(path, "https://developer.hashicorp.com");
}


/***/ }),

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 84279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4506], () => (__webpack_exec__(80509)));
module.exports = __webpack_exports__;

})();