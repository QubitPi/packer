(() => {
var exports = {};
exports.id = 2031;
exports.ids = [2031];
exports.modules = {

/***/ 54742:
/***/ ((module) => {

// Exports
module.exports = {
	"cardPadding": "branded-callout_cardPadding__2Xbmt",
	"heading": "branded-callout_heading__QK2M2 hds-typography-display-400",
	"subheading": "branded-callout_subheading__3PVXo hds-typography-body-200",
	"cta": "branded-callout_cta__3TF2g"
};


/***/ }),

/***/ 97711:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "featured-stack_heading__vsDJg hds-typography-display-300 g-offset-scroll-margin-top",
	"subheading": "featured-stack_subheading__caX02 hds-typography-body-300",
	"children": "featured-stack_children__njoh3"
};


/***/ }),

/***/ 7472:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "product-view-content_root__LxkIW"
};


/***/ }),

/***/ 20357:
/***/ ((module) => {

// Exports
module.exports = {
	"headingBar": "sitemap_headingBar___MpnG",
	"heading": "sitemap_heading__bcM_O g-offset-scroll-margin-top",
	"collectionListRoot": "sitemap_collectionListRoot__ptZ__",
	"collectionListItem": "sitemap_collectionListItem__wjLxs",
	"collectionLinkSizer": "sitemap_collectionLinkSizer__zY1X6",
	"collectionLink": "sitemap_collectionLink__7c5Ud g-focus-ring-from-box-shadow hds-typography-body-200",
	"collectionLinkIcon": "sitemap_collectionLinkIcon__veLzO",
	"tutorialListRoot": "sitemap_tutorialListRoot__FQQm1",
	"hasMultipleItems": "sitemap_hasMultipleItems__SjbjT",
	"tutorialListItem": "sitemap_tutorialListItem__CNFVF hds-typography-body-100",
	"tutorialLink": "sitemap_tutorialLink__ESlT3 g-focus-ring-from-box-shadow"
};


/***/ }),

/***/ 35315:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "product-tutorials-view_heading__B9_2l g-offset-scroll-margin-top g-screen-reader-only",
	"sitemap": "product-tutorials-view_sitemap__BpYz1"
};


/***/ }),

/***/ 82597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ getPage)
});

// UNUSED EXPORTS: getPages

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/lib/learn-client/index.ts
var learn_client = __webpack_require__(32235);
// EXTERNAL MODULE: external "joi"
var external_joi_ = __webpack_require__(48506);
var external_joi_default = /*#__PURE__*/__webpack_require__.n(external_joi_);
// EXTERNAL MODULE: ./src/lib/learn-client/types.ts
var types = __webpack_require__(64785);
;// CONCATENATED MODULE: ./src/lib/learn-client/schemas.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * These schemas are used in testing to fully validate
 * the shape returned from client functions
 */ // Page
// (specifically product pages, which are the only type of page we have so far)
const BrandedCalloutBlockSchema = external_joi_default().object({
    type: external_joi_default().string().required().valid("BrandedCallout"),
    product: external_joi_default().string().valid(...Object.values(types/* ProductOption */.wr)),
    heading: external_joi_default().string().required(),
    subheading: external_joi_default().string(),
    cta: external_joi_default().object({
        text: external_joi_default().string().required(),
        url: external_joi_default().string().required()
    })
});
const LogoCardBlockSchema = external_joi_default().object({
    type: external_joi_default().string().required().valid("LogoCard"),
    logo: external_joi_default().string().valid("docker", "github", "microsoft-azure", "oci", "google-cloud", "terraform-cloud", "aws").required(),
    collectionSlug: external_joi_default().string().required()
});
const CardListBlockSchema = external_joi_default().object({
    items: external_joi_default().array().items(LogoCardBlockSchema).required().min(1)
});
const TutorialsStackBlockSchema = external_joi_default().object({
    type: external_joi_default().string().required().valid("TutorialsStack"),
    product: external_joi_default().string().valid(...Object.values(types/* ProductOption */.wr)),
    heading: external_joi_default().string(),
    subheading: external_joi_default().string(),
    tutorialSlugs: external_joi_default().array().items(external_joi_default().string()).required().min(1)
});
const CollectionsStackBlockSchema = external_joi_default().object({
    type: external_joi_default().string().required().valid("CollectionsStack"),
    product: external_joi_default().string().valid(...Object.values(types/* ProductOption */.wr)),
    heading: external_joi_default().string(),
    subheading: external_joi_default().string(),
    collectionSlugs: external_joi_default().array().items(external_joi_default().string()).required().min(1)
});
const FeaturedStackBlockSchema = external_joi_default().object({
    type: external_joi_default().string().required().valid("FeaturedStack"),
    heading: external_joi_default().string().required(),
    subheading: external_joi_default().string(),
    // Note that FeaturedStackBlocks can only contain CardList blocks, for now.
    // We may want to switch to using "heading" & "subheading" blocks, rather
    // that this approach, which requires nesting arrays of blocks instead
    // having a single flat array (with the benefit of more controlled
    // styling of headings & subheadings in specific contexts).
    blocks: external_joi_default().array().items(external_joi_default().object({
        type: external_joi_default().string().required().valid("CardList")
    }).when(external_joi_default().object({
        type: "CardList"
    }).unknown(), {
        then: CardListBlockSchema
    })).required().min(1)
});
const ProductPageSchema = external_joi_default().object({
    slug: external_joi_default().string().valid(...Object.values(types/* ProductOption */.wr), types/* ThemeOption.cloud */.KH.cloud, "well-architected-framework").required(),
    pageData: external_joi_default().object({
        title: external_joi_default().string(),
        description: external_joi_default().string(),
        blocks: external_joi_default().array().items(external_joi_default().object({
            type: external_joi_default().string().required().valid("BrandedCallout", "CardList", "CollectionsStack", "FeaturedStack", "TutorialsStack")
        }).when(external_joi_default().object({
            type: "BrandedCallout"
        }).unknown(), {
            then: BrandedCalloutBlockSchema
        }).when(external_joi_default().object({
            type: "CardList"
        }).unknown(), {
            then: CardListBlockSchema
        }).when(external_joi_default().object({
            type: "CollectionsStack"
        }).unknown(), {
            then: CollectionsStackBlockSchema
        }).when(external_joi_default().object({
            type: "FeaturedStack"
        }).unknown(), {
            then: FeaturedStackBlockSchema
        }).when(external_joi_default().object({
            type: "TutorialsStack"
        }).unknown(), {
            then: TutorialsStackBlockSchema
        })).required(),
        showProductSitemap: external_joi_default().boolean()
    }).required()
});

;// CONCATENATED MODULE: external "camelcase-keys"
const external_camelcase_keys_namespaceObject = require("camelcase-keys");
var external_camelcase_keys_default = /*#__PURE__*/__webpack_require__.n(external_camelcase_keys_namespaceObject);
// EXTERNAL MODULE: ./src/lib/traverse.ts
var traverse = __webpack_require__(19421);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/page/formatting.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Formats product page data by transforming all
 * object keys from snake_case to camelCase.
 */ async function formatting_formatProductPage(pageRecord) {
    const { slug , page_data  } = pageRecord;
    const camelCased = await (0,traverse/* traverse */.f)({
        slug,
        page_data
    }, (_k, v)=>{
        return (0,traverse/* isObject */.K)(v) ? external_camelcase_keys_default()(v) : v;
    });
    return camelCased;
}

;// CONCATENATED MODULE: ./src/lib/learn-client/api/page/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const PAGES_API_ROUTE = "/pages";
async function getPage(slug) {
    // Load from the content API
    const route = external_path_default().join(PAGES_API_ROUTE, slug);
    const getPageResponse = await (0,learn_client/* get */.U2)(route);
    // Throw an error if we have one
    if (!getPageResponse.ok) {
        const error = await (0,learn_client/* toError */.KC)(getPageResponse);
        throw error;
    }
    const pageRecord = (await getPageResponse.json()).result;
    // Format product page data
    const formattedRecord = await formatting_formatProductPage(pageRecord);
    // Note that for now, we only expect product pages,
    // so we validate accordingly. In the future, we may
    // add other page types, but have no concrete need so far.
    const { error: error1  } = ProductPageSchema.validate(formattedRecord, {
        allowUnknown: false,
        abortEarly: false
    });
    // If we have validation errors, throw them.
    // Otherwise return the validated, formatted page record
    if (error1) {
        let validationError = `Error: Content looks invalid for "${slug}".\n`;
        validationError += "Please resolve the following issues at the content source:\n\n";
        validationError += "---\n\n";
        validationError += error1.details.map((errorDetail, idx)=>{
            let output = "";
            const { message , context  } = errorDetail;
            output += `Issue ${idx + 1} of ${error1.details.length}:\n`;
            output += message + ".\n";
            if (context) {
                output += `Context:\n`;
                output += JSON.stringify(context, null, 2) + "\n\n";
            }
            return output;
        }).join("---\n\n");
        throw new Error(validationError);
    } else {
        return formattedRecord;
    }
}
/**
 * Given the learn content API is accessible at NEXT_PUBLIC_LEARN_API_BASE_URL,
 * Return data from a GET request to the "/pages" API route.
 *
 * @returns Array of Page objects
 */ async function getPages() {
    // Load from the content API
    const getPagesResult = await get(PAGES_API_ROUTE);
    // Throw an error if we have one
    if (!getPagesResult.ok) {
        const error = await toError(getPagesResult);
        throw error;
    }
    // Otherwise format and return all the pageRecords
    const pageRecords = (await getPagesResult.json()).result;
    return await Promise.all(pageRecords.map(formatProductPage));
}


/***/ }),

/***/ 46621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ formatProduct)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64785);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
function formatProduct(product) {
    const { id , slug , name , description , docs_url  } = product;
    return {
        id,
        slug: _types__WEBPACK_IMPORTED_MODULE_0__/* .ProductOption */ .wr[slug],
        name,
        description,
        docsUrl: docs_url
    };
}


/***/ }),

/***/ 48313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getProduct)
/* harmony export */ });
/* unused harmony export getProducts */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32235);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);
_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const PRODUCT_API_ROUTE = "/products";
// getProduct
async function getProduct(idOrSlug) {
    const identifier = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatIdentifier */ ._q)(idOrSlug);
    // /products/:identifier
    const route = path__WEBPACK_IMPORTED_MODULE_0___default().join(PRODUCT_API_ROUTE, identifier);
    const getProductRes = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(route);
    if (getProductRes.ok) {
        const res = await getProductRes.json();
        return (0,_formatting__WEBPACK_IMPORTED_MODULE_3__/* .formatProduct */ .i)(res.result);
    }
    const error = await (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .toError */ .KC)(getProductRes);
    throw error;
}
// getProducts
async function getProducts(idsOrSlugs) {
    const queryStr = formatBatchQueryStr(idsOrSlugs);
    // /products?slugs=option,option or /products?ids=option,option
    const route = PRODUCT_API_ROUTE + queryStr;
    const getProductsRes = await get(route);
    if (getProductsRes.ok) {
        const res = await getProductsRes.json();
        return res.result.map(formatProduct);
    }
    const error = await toError(getProductsRes);
    throw error;
}

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

/***/ 90424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var views_product_tutorials_view_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18332);
/* harmony import */ var views_product_tutorials_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78421);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95655);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_tutorials_view_server__WEBPACK_IMPORTED_MODULE_0__, views_product_tutorials_view__WEBPACK_IMPORTED_MODULE_1__]);
([views_product_tutorials_view_server__WEBPACK_IMPORTED_MODULE_0__, views_product_tutorials_view__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



/**
 * Based on the array of beta product slugs,
 * generate each product tutorials route
 * i.e. /vault/tutorials
 */ function generateProductTutorialHomePaths() {
    const paths = lib_products__WEBPACK_IMPORTED_MODULE_3__/* .activeProductSlugs.map */ .KD.map((productSlug)=>({
            params: {
                productSlug
            }
        }));
    return paths;
}
async function getStaticProps({ params  }) {
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__/* .cachedGetProductData */ .i)(params.productSlug);
    /**
	 * Note: `hcp` is a "product" in Dev Dot but not in Learn,
	 * so we have to treat it slightly differently.
	 */ const props = productData.slug == "hcp" ? await (0,views_product_tutorials_view_server__WEBPACK_IMPORTED_MODULE_0__/* .getCloudTutorialsViewProps */ .w)() : await (0,views_product_tutorials_view_server__WEBPACK_IMPORTED_MODULE_0__/* .getProductTutorialsViewProps */ .K)(productData);
    return props;
}
async function getStaticPaths() {
    return {
        paths: generateProductTutorialHomePaths(),
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_product_tutorials_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ ProductTutorialsSitemap)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/collections-24.tsx
var collections_24 = __webpack_require__(59231);
// EXTERNAL MODULE: ./src/views/collection-view/helpers/index.ts + 3 modules
var helpers = __webpack_require__(28493);
// EXTERNAL MODULE: ./src/views/product-tutorials-view/helpers/heading-helpers.ts
var heading_helpers = __webpack_require__(33417);
// EXTERNAL MODULE: ./src/components/heading/index.tsx
var heading = __webpack_require__(14617);
// EXTERNAL MODULE: ./src/components/icon-tile/index.tsx
var icon_tile = __webpack_require__(26991);
// EXTERNAL MODULE: ./src/components/link/index.tsx + 2 modules
var components_link = __webpack_require__(93265);
// EXTERNAL MODULE: ./src/views/product-tutorials-view/components/sitemap/sitemap.module.css
var sitemap_module = __webpack_require__(20357);
var sitemap_module_default = /*#__PURE__*/__webpack_require__.n(sitemap_module);
;// CONCATENATED MODULE: ./src/views/product-tutorials-view/components/sitemap/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








function ProductTutorialsSitemap({ collections , product  }) {
    const { title , level , slug  } = (0,heading_helpers/* getSitemapHeading */.nA)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (sitemap_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sitemap_module_default()).headingBar,
                children: /*#__PURE__*/ jsx_runtime_.jsx(heading/* default */.Z, {
                    id: slug,
                    size: 300,
                    level: level,
                    weight: "bold",
                    className: (sitemap_module_default()).heading,
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (sitemap_module_default()).collectionListRoot,
                children: collections.map((collection)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: (sitemap_module_default()).collectionListItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (sitemap_module_default()).collectionLinkSizer,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_link/* default */.Z, {
                                    className: (sitemap_module_default()).collectionLink,
                                    href: (0,helpers/* getCollectionSlug */.I_)(collection.slug),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (sitemap_module_default()).collectionLinkIcon,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_tile/* default */.Z, {
                                                size: "small",
                                                brandColor: product,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(collections_24/* IconCollections24 */.t, {})
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: collection.name
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: external_classnames_default()((sitemap_module_default()).tutorialListRoot, {
                                    [(sitemap_module_default()).hasMultipleItems]: collection.tutorials.length > 1
                                }),
                                children: collection.tutorials.map((t)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (sitemap_module_default()).tutorialListItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_link/* default */.Z, {
                                            className: (sitemap_module_default()).tutorialLink,
                                            href: (0,helpers/* getTutorialSlug */.Jc)(t.slug, collection.slug),
                                            children: t.name
                                        })
                                    }, t.id))
                            })
                        ]
                    }, collection.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/views/product-tutorials-view/components/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ BrandedCallout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_branded_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25587);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26789);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33643);
/* harmony import */ var _branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54742);
/* harmony import */ var _branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




function BrandedCallout({ heading , subheading , cta , product  }) {
    /** Determine if the provided CTA link is external */ const isExternal = typeof location !== "undefined" && cta.url.startsWith("http") && !cta.url.startsWith(location.origin);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_branded_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        productSlug: product,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardPadding),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
                    children: heading
                }),
                subheading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4___default().subheading),
                    children: subheading
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_branded_callout_module_css__WEBPACK_IMPORTED_MODULE_4___default().cta),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        text: cta.text,
                        href: cta.url,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_3__/* .IconArrowRight16 */ .k, {}),
                        iconPosition: "trailing",
                        color: "secondary",
                        opensInNewTab: isExternal
                    })
                })
            ]
        })
    });
}



/***/ }),

/***/ 47527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ CollectionsStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var components_collection_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79622);
/* harmony import */ var _featured_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



// Reminder:  make sure heap stuff is carried forward
// const HEAP_ID = 'CollectionCard'
function CollectionsStack({ collectionCards , heading , headingSlug , subheading  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featured_stack__WEBPACK_IMPORTED_MODULE_3__/* .FeaturedStack */ .W, {
        heading: heading,
        headingSlug: headingSlug,
        subheading: subheading,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: collectionCards.map((cardPropsWithId)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_collection_card__WEBPACK_IMPORTED_MODULE_2__/* .CollectionCardWithAuthElements */ .FG, {
                    ...cardPropsWithId
                }, cardPropsWithId.id);
            })
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ FeaturedStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97711);
/* harmony import */ var _featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

function FeaturedStack({ heading , headingSlug , subheading , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                id: headingSlug,
                className: (_featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading),
                children: heading
            }),
            subheading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1___default().subheading),
                children: subheading
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_featured_stack_module_css__WEBPACK_IMPORTED_MODULE_1___default().children),
                children: children
            })
        ]
    });
}



/***/ }),

/***/ 10193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* reexport safe */ _logo_card_list__WEBPACK_IMPORTED_MODULE_3__.A),
/* harmony export */   "GO": () => (/* reexport safe */ _branded_callout__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "MY": () => (/* reexport safe */ _tutorials_stack__WEBPACK_IMPORTED_MODULE_4__.M),
/* harmony export */   "WA": () => (/* reexport safe */ _featured_stack__WEBPACK_IMPORTED_MODULE_2__.W),
/* harmony export */   "_o": () => (/* reexport safe */ _collections_stack__WEBPACK_IMPORTED_MODULE_1__._)
/* harmony export */ });
/* harmony import */ var _branded_callout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5189);
/* harmony import */ var _collections_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47527);
/* harmony import */ var _featured_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53834);
/* harmony import */ var _logo_card_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71133);
/* harmony import */ var _tutorials_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85674);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collections_stack__WEBPACK_IMPORTED_MODULE_1__, _logo_card_list__WEBPACK_IMPORTED_MODULE_3__, _tutorials_stack__WEBPACK_IMPORTED_MODULE_4__]);
([_collections_stack__WEBPACK_IMPORTED_MODULE_1__, _logo_card_list__WEBPACK_IMPORTED_MODULE_3__, _tutorials_stack__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ LogoCardList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var components_collection_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function LogoCardList({ collectionCards  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: collectionCards.map((cardPropsWithId)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_collection_card__WEBPACK_IMPORTED_MODULE_2__/* .CollectionCardWithAuthElements */ .FG, {
                ...cardPropsWithId
            }, cardPropsWithId.id);
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TutorialsStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var _featured_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function TutorialsStack({ tutorialCards , heading , headingSlug , subheading  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featured_stack__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedStack */ .W, {
        heading: heading,
        headingSlug: headingSlug,
        subheading: subheading,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* .TutorialCardsGridList */ .b, {
            tutorials: tutorialCards
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10193);
/* harmony import */ var _product_view_content_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7472);
/* harmony import */ var _product_view_content_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_view_content_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const SUPPORTED_BLOCK_TYPES = [
    "BrandedCallout",
    "CardList",
    "CollectionsStack",
    "FeaturedStack",
    "TutorialsStack"
];
function ProductViewContent({ blocks  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_product_view_content_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        children: blocks.map((block, idx)=>{
            switch(block.type){
                case "FeaturedStack":
                    /**
						 * Note: FeaturedStack is only ever used with LogoCardList,
						 * so could make sense here to use LogoCardList directly,
						 * and deprecate FeaturedStack as authorable
						 * (we can achieving similar things with either specific
						 * blocks like LogoCardList, or a flatter structure with less
						 * nesting - eg, heading & subheading blocks, rather than
						 * FeaturedStack with heading, subheading, & children.)
						 * Asana task:
						 * https://app.asana.com/0/0/1202182325935208/f
						 */ return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .FeaturedStack */ .WA, {
                        heading: block.heading,
                        headingSlug: block.headingSlug,
                        subheading: block.subheading,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductViewContent, {
                            blocks: block.blocks
                        })
                    }, idx);
                case "BrandedCallout":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .BrandedCallout */ .GO, {
                        heading: block.heading,
                        subheading: block.subheading,
                        product: block.product,
                        cta: block.cta
                    }, idx);
                case "CardList":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .LogoCardList */ .Ag, {
                        collectionCards: block.collectionCards
                    }, idx);
                case "TutorialsStack":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .TutorialsStack */ .MY, {
                        heading: block.heading,
                        headingSlug: block.headingSlug,
                        subheading: block.subheading,
                        tutorialCards: block.tutorialCards
                    }, idx);
                case "CollectionsStack":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .CollectionsStack */ ._o, {
                        heading: block.heading,
                        headingSlug: block.headingSlug,
                        subheading: block.subheading,
                        product: block.product,
                        collectionCards: block.collectionCards
                    }, idx);
                default:
                    // If we don't have a recognized card type,
                    // throw an error. But be nice about it.
                    throw new Error(`Unrecognized block type "${block.type}" passed to "ProductViewContent". Please use one of the following supported block types: ${JSON.stringify(SUPPORTED_BLOCK_TYPES)}.\nUnrecognized block:\n${JSON.stringify(block, null, 2)}`);
            }
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductViewContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ formatSitemapCollection)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ function formatSitemapCollection(collection) {
    return {
        id: collection.id,
        slug: collection.slug,
        name: collection.name,
        tutorials: collection.tutorials.map((t)=>({
                id: t.id,
                slug: t.slug,
                name: t.shortName || t.name
            }))
    };
}


/***/ }),

/***/ 98735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_remark_plugins_rewrite_tutorial_links_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38882);
/* harmony import */ var lib_remark_plugins_rewrite_tutorial_links_utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_remark_plugins_rewrite_tutorial_links_utils__WEBPACK_IMPORTED_MODULE_0__, lib_remark_plugins_rewrite_tutorial_links_utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__]);
([lib_remark_plugins_rewrite_tutorial_links_utils__WEBPACK_IMPORTED_MODULE_0__, lib_remark_plugins_rewrite_tutorial_links_utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

let TUTORIAL_MAP;
/**
 * Given a URL string, if it is a Learn URL that can be rewritten, reformat the
 * URL to work with dev-dot's URL structure. Otherwise, return the URL
 * unmodified.
 */ async function detectAndReformatLearnUrl(url) {
    TUTORIAL_MAP = await (0,lib_remark_plugins_rewrite_tutorial_links_utils__WEBPACK_IMPORTED_MODULE_0__/* .getTutorialMap */ .i0)();
    return (0,lib_remark_plugins_rewrite_tutorial_links_utils_rewrite_tutorials_link__WEBPACK_IMPORTED_MODULE_1__/* .rewriteTutorialsLink */ .J)(url, TUTORIAL_MAP) ?? url;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detectAndReformatLearnUrl);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a5": () => (/* binding */ getOverviewHeading),
/* harmony export */   "af": () => (/* binding */ buildLayoutHeadings),
/* harmony export */   "nA": () => (/* binding */ getSitemapHeading),
/* harmony export */   "qS": () => (/* binding */ addHeadingSlugsToBlocks)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given pageData for product view,
 * as well as a productName,
 *
 * Return an array of Sidecar-compatible
 * TableOfContentsHeading objects, each representing
 * a section that will be rendered on the page.
 */ function buildLayoutHeadings(pageData, showOverviewHeading) {
    const { blocks , showProductSitemap  } = pageData;
    /**
	 * Build an <h1> overview heading
	 */ const overviewHeading = showOverviewHeading ? [
        getOverviewHeading()
    ] : [];
    /**
	 * Extract headings from each block
	 */ const blockHeadings = blocks.reduce((acc, block)=>{
        if (isReadyForTableOfContents(block)) {
            acc.push({
                title: block.heading,
                slug: block.headingSlug,
                level: 2
            });
        }
        return acc;
    }, []);
    /**
	 * If there's a product sitemap, build add a heading item for it
	 */ const sitemapHeading = showProductSitemap ? [
        getSitemapHeading()
    ] : [];
    /**
	 * Flatten the array of headings, and return them
	 */ return [
        ...overviewHeading,
        ...blockHeadings,
        ...sitemapHeading
    ];
}
/**
 * Check if a block has a heading,
 * and is a block type we want to show in the table of contents,
 * in which case we can generate a headingSlug for it
 */ function isIntendedForTableOfContents(block) {
    const isTargetType = block.type == "CollectionsStack" || block.type == "FeaturedStack" || block.type == "TutorialsStack";
    return isTargetType && typeof block.heading == "string";
}
/**
 * Check if a block can be added to the table of contents
 */ function isReadyForTableOfContents(block) {
    return isIntendedForTableOfContents(block) && typeof block.headingSlug == "string";
}
/**
 * Given a productName,
 * return a TableOfContentsHeading object
 * representing a top-level heading for a product tutorials view
 */ function getOverviewHeading() {
    return {
        title: "Overview",
        slug: "overview",
        level: 1
    };
}
/**
 * Return a TableOfContentsHeading object
 * representing a heading for a sitemap section
 * on a product tutorials view
 */ function getSitemapHeading() {
    return {
        title: "All Tutorials",
        slug: "all-tutorials",
        level: 2
    };
}
/**
 * Adds "headingSlug" properties to all blocks with defined "heading"
 */ function addHeadingSlugsToBlocks(blocks) {
    const blocksWithHeadings = blocks.map((block)=>{
        if (!isIntendedForTableOfContents(block)) {
            return block;
        }
        const headingSlug = slugify__WEBPACK_IMPORTED_MODULE_0___default()(block.heading, {
            lower: true
        });
        return {
            ...block,
            headingSlug
        };
    });
    // Return the page data with these new blocks
    return blocksWithHeadings;
}



/***/ }),

/***/ 81198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ enrichLearnData)
/* harmony export */ });
/* harmony import */ var components_collection_card_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63719);
/* harmony import */ var components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_1__]);
components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Format any referenced collection and tutorial slugs,
 * adding in the full complete data using provided
 * inlineCollection and inlineTutorial objects.
 */ function enrichLearnData(blocks, inlineCollections, inlineTutorials) {
    return blocks.map((block)=>{
        if (block.type === "FeaturedStack") {
            /**
			 * Recurse and enrich child blocks.
			 *
			 * Note: we could remove this recursion, FeaturedStack is only ever
			 * used with ProductPageBlockCardList. Asana task:
			 * https://app.asana.com/0/0/1202182325935208/f
			 */ return {
                ...block,
                blocks: enrichLearnData(block.blocks, inlineCollections, inlineTutorials)
            };
        } else if (block.type === "CardList") {
            /**
			 * Add collection cards with logos to `CardsList`
			 */ const { items , ...restBlock } = block;
            const collectionCards = items.map((item)=>{
                const { collectionSlug , logo  } = item;
                const collection = inlineCollections[collectionSlug];
                return {
                    ...(0,components_collection_card_helpers__WEBPACK_IMPORTED_MODULE_0__/* .formatCollectionCard */ .R)(collection),
                    logo
                };
            });
            return {
                ...restBlock,
                collectionCards
            };
        } else if (block.type === "CollectionsStack") {
            /**
			 * Add collection card data to `CollectionsStack`
			 */ const { collectionSlugs , ...restBlock1 } = block;
            const collectionCards1 = block.collectionSlugs.map((slug)=>{
                return (0,components_collection_card_helpers__WEBPACK_IMPORTED_MODULE_0__/* .formatCollectionCard */ .R)(inlineCollections[slug]);
            });
            return {
                ...restBlock1,
                collectionCards: collectionCards1
            };
        } else if (block.type === "TutorialsStack") {
            /**
			 * Add tutorial card data to `TutorialsStack`
			 */ const { tutorialSlugs , ...restBlock2 } = block;
            const tutorialCards = block.tutorialSlugs.map((slug)=>{
                const tutorial = inlineTutorials[slug];
                const defaultContext = tutorial.collectionCtx.default;
                const tutorialLiteCompat = {
                    ...tutorial,
                    defaultContext
                };
                return (0,components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_1__/* .formatTutorialCard */ .OW)(tutorialLiteCompat);
            });
            return {
                ...restBlock2,
                tutorialCards
            };
        } else {
            // By default, return the block unchanged
            return block;
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ fixBrandedCalloutUrls)
/* harmony export */ });
/* harmony import */ var lib_traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19421);
/* harmony import */ var _detect_and_reformat_learn_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_detect_and_reformat_learn_url__WEBPACK_IMPORTED_MODULE_0__]);
_detect_and_reformat_learn_url__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Fix URLs in BrandedCallout blocks,
 * which may point to collection or tutorial URLs using the
 * learn.hashicorp.com URL structure.
 */ async function fixBrandedCalloutUrls(blocks) {
    const result = await (0,lib_traverse__WEBPACK_IMPORTED_MODULE_1__/* .traverse */ .f)({
        blocks
    }, (_key, value)=>{
        // We only want to deal with branded callouts, with a defined cta.url
        const isBrandedCallout = (0,lib_traverse__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .K)(value) && value.type === "BrandedCallout";
        if (!isBrandedCallout) {
            return value;
        }
        const { cta  } = value;
        if (!(0,lib_traverse__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .K)(cta) || typeof cta.url !== "string") {
            return value;
        }
        // Fix the url
        const correctedUrl = (0,_detect_and_reformat_learn_url__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(cta.url);
        return {
            ...value,
            cta: {
                ...cta,
                url: correctedUrl
            }
        };
    });
    return result.blocks;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getProductPageContent)
/* harmony export */ });
/* harmony import */ var lib_learn_client_api_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82597);
/* harmony import */ var lib_gather_unique_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19739);
/* harmony import */ var _get_inline_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43199);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_inline_content__WEBPACK_IMPORTED_MODULE_1__]);
_get_inline_content__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



/**
 * Given a product page slug,
 * fetch the `pageData` stored in our content API,
 * and package it with `inlineCollection` and `inlineTutorial` data
 * for any tutorials referenced in the `page_data`.
 */ async function getProductPageContent(pageSlug) {
    // Fetch the base page content.
    const { pageData  } = await (0,lib_learn_client_api_page__WEBPACK_IMPORTED_MODULE_0__/* .getPage */ .f)(pageSlug);
    // Page content blocks reference tutorials and collections by slug.
    // We need to fetch data for any referenced tutorials and collections.
    // 1. First, we build a list of all tutorial and collection slugs
    //    that have been referenced in the page content we fetched.
    const inlineTutorialSlugs = (await (0,lib_gather_unique_values__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        "tutorialSlug",
        "tutorialSlugs"
    ], pageData)).map(String);
    const inlineCollectionSlugs = (await (0,lib_gather_unique_values__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        "collectionSlug",
        "collectionSlugs"
    ], pageData)).map(String);
    // 2. Next we fetch the tutorial and collection data
    const inlineTutorials = inlineTutorialSlugs.length > 0 ? await (0,_get_inline_content__WEBPACK_IMPORTED_MODULE_1__/* .getInlineTutorials */ .F)(inlineTutorialSlugs) : undefined;
    const inlineCollections = inlineCollectionSlugs.length > 0 ? await (0,_get_inline_content__WEBPACK_IMPORTED_MODULE_1__/* .getInlineCollections */ .d)(inlineCollectionSlugs) : undefined;
    // Finally we return the fetched pageData, along with the inlineTutorials
    // and inlineCollections needed to render content blocks within it.
    return (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_3__/* .stripUndefinedProperties */ .c)({
        pageData,
        inlineCollections,
        inlineTutorials
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_product_page_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57888);
/* harmony import */ var _process_page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(511);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_product_page_content__WEBPACK_IMPORTED_MODULE_0__, _process_page_data__WEBPACK_IMPORTED_MODULE_1__]);
([_get_product_page_content__WEBPACK_IMPORTED_MODULE_0__, _process_page_data__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Fetch and process page data for a Tutorial product landing page.
 */ async function getProcessedPageData(pageSlug, options) {
    /**
	 * Get the raw page data
	 */ const { pageData: rawPageData , inlineCollections , inlineTutorials  } = await (0,_get_product_page_content__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(pageSlug);
    /**
	 * Process the page data.
	 * Includes parsing headings, for use with the page's sidecar
	 */ const { pageData , headings  } = await (0,_process_page_data__WEBPACK_IMPORTED_MODULE_1__/* .processPageData */ .s)(rawPageData, inlineCollections, inlineTutorials, options?.showOverviewHeading);
    return {
        pageData,
        headings
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProcessedPageData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ processPageData)
/* harmony export */ });
/* harmony import */ var _heading_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33417);
/* harmony import */ var _enrich_learn_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81198);
/* harmony import */ var _fix_branded_callout_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_enrich_learn_data__WEBPACK_IMPORTED_MODULE_1__, _fix_branded_callout_urls__WEBPACK_IMPORTED_MODULE_2__]);
([_enrich_learn_data__WEBPACK_IMPORTED_MODULE_1__, _fix_branded_callout_urls__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Fix up product tutorials view page data
 * before sending it to the client.
 */ async function processPageData(rawPageData, inlineCollections, inlineTutorials, showOverviewHeading) {
    /**
	 * Enrich the raw blocks with Learn data,
	 * replacing tutorial and collection slugs with exactly
	 * the data needed to render front-end components.
	 */ const withTutorialData = (0,_enrich_learn_data__WEBPACK_IMPORTED_MODULE_1__/* .enrichLearnData */ .C)(rawPageData.blocks, inlineCollections, inlineTutorials);
    /**
	 * Adds unique heading slugs to specific blocks.
	 * Required to generate our table-of-contents headings, with valid links.
	 */ const withHeadingSlugs = (0,_heading_helpers__WEBPACK_IMPORTED_MODULE_0__/* .addHeadingSlugsToBlocks */ .qS)(withTutorialData);
    /**
	 * Fix up URLs for branded callouts.
	 * TODO: should be possible to remove this, once URLs are updated in source.
	 * Task: https://app.asana.com/0/1202097197789424/1203347809732589/f
	 */ const withFixedUrls = await (0,_fix_branded_callout_urls__WEBPACK_IMPORTED_MODULE_2__/* .fixBrandedCalloutUrls */ .b)(withHeadingSlugs);
    /**
	 * Collect processed page data
	 */ const pageData = {
        blocks: withFixedUrls,
        showProductSitemap: rawPageData.showProductSitemap
    };
    /**
	 * Build headings for the layout, based on pageData.
	 */ const headings = (0,_heading_helpers__WEBPACK_IMPORTED_MODULE_0__/* .buildLayoutHeadings */ .af)(pageData, showOverviewHeading);
    return {
        pageData,
        headings
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64884);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14617);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46064);
/* harmony import */ var components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98302);
/* harmony import */ var components_outline_nav_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41238);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44543);
/* harmony import */ var _components_product_view_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73829);
/* harmony import */ var _helpers_heading_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33417);
/* harmony import */ var _product_tutorials_view_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35315);
/* harmony import */ var _product_tutorials_view_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_product_tutorials_view_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, components_outline_nav_components__WEBPACK_IMPORTED_MODULE_5__, _components_product_view_content__WEBPACK_IMPORTED_MODULE_7__]);
([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, components_outline_nav_components__WEBPACK_IMPORTED_MODULE_5__, _components_product_view_content__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 









function ProductTutorialsView({ data , layoutProps , product , outlineItems  }) {
    const { pageData , sitemapCollections  } = data;
    const { showProductSitemap , blocks  } = pageData;
    const sidebarNavDataLevels = [
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_3__/* .generateTopLevelSidebarNavData */ .Vz)(product.name),
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_3__/* .generateProductLandingSidebarNavData */ ._G)(product),
        {
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_4__/* .CollectionViewSidebarContent */ .Zp, {
                productSlug: product.slug,
                sections: layoutProps.sidebarSections
            })
        }
    ];
    const PageHeading = ()=>{
        const { title , level , slug  } = (0,_helpers_heading_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getOverviewHeading */ .a5)();
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: slug,
            level: level,
            size: 500,
            weight: "bold",
            className: (_product_tutorials_view_module_css__WEBPACK_IMPORTED_MODULE_9___default().heading),
            children: title
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        breadcrumbLinks: layoutProps.breadcrumbLinks,
        sidecarSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_outline_nav_components__WEBPACK_IMPORTED_MODULE_5__/* .OutlineNavWithActive */ .Nc, {
            items: outlineItems
        }),
        AlternateSidebar: components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        /**
			 * @TODO remove casting to `any`. Will require refactoring both
			 * `generateTopLevelSidebarNavData` and
			 * `generateProductLandingSidebarNavData` to set up `menuItems` with the
			 * correct types. This will require chaning many files, so deferring for
			 * a follow-up PR since this is functional for the time being.
			 */ sidebarNavDataLevels: sidebarNavDataLevels,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageHeading, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_view_content__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                blocks: blocks
            }),
            showProductSitemap ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_product_tutorials_view_module_css__WEBPACK_IMPORTED_MODULE_9___default().sitemap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .ProductTutorialsSitemap */ .m, {
                    collections: sitemapCollections,
                    product: product.slug
                })
            }) : null
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTutorialsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getProductTutorialsViewProps),
/* harmony export */   "w": () => (/* binding */ getCloudTutorialsViewProps)
/* harmony export */ });
/* harmony import */ var lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34506);
/* harmony import */ var lib_learn_client_api_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48313);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81141);
/* harmony import */ var lib_sort_alphabetically__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17541);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28493);
/* harmony import */ var views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10853);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18979);
/* harmony import */ var _components_sitemap_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6740);
/* harmony import */ var lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64785);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95655);
/* harmony import */ var _helpers_page_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47423);
/* harmony import */ var components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__, lib_learn_client_api_product__WEBPACK_IMPORTED_MODULE_1__, _helpers_page_data__WEBPACK_IMPORTED_MODULE_5__]);
([lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__, lib_learn_client_api_product__WEBPACK_IMPORTED_MODULE_1__, _helpers_page_data__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 











/**
 * Note: this is a stub to get the /hcp/tutorials rendering.
 * TODO: figure out what to do with the /hcp/tutorials view (design dependent).
 * Taking this temporary approach for now while awaiting final designs.
 */ async function getCloudTutorialsViewProps() {
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_4__/* .cachedGetProductData */ .i)("hcp");
    /**
	 * Fetch and process the authored page content
	 */ const { pageData , headings  } = await (0,_helpers_page_data__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .ThemeOption.cloud */ .KH.cloud);
    /**
	 * Build the sidebar
	 */ const hcpCollections = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__/* .getCollectionsBySection */ .Jz)("cloud");
    const sidebarSections = (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_2__/* .buildCategorizedHcpSidebar */ .Fi)(hcpCollections);
    /**
	 * Build sitemap collections, if we're using them.
	 */ let sitemapCollections;
    if (pageData.showProductSitemap) {
        sitemapCollections = hcpCollections.map(_components_sitemap_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatSitemapCollection */ .h);
    }
    /**
	 * Return static props
	 */ return {
        props: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__/* .stripUndefinedProperties */ .c)({
            metadata: {
                title: "Tutorials"
            },
            data: {
                pageData,
                sitemapCollections
            },
            outlineItems: (0,components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(headings),
            layoutProps: {
                breadcrumbLinks: (0,views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_9__/* .getTutorialsBreadcrumb */ .Y)({
                    product: {
                        name: productData.name,
                        filename: productData.slug
                    }
                }),
                sidebarSections
            },
            // Note: should likely remove type casting here,
            // it's currently needed because "hcp" is not a valid LearnProductName.
            // Kind of a $TSFixMe.
            product: productData
        })
    };
}
/**
 * Given a ProductData object (imported from src/data JSON files), fetches and
 * returns the page props for `/{product}/tutorials` pages.
 *
 * Merges the product object fetched from `/products/:identifier` with the given
 * ProductData object and returns the merged object under the `product` page
 * prop, which is needed for other areas of the app to function.
 */ async function getProductTutorialsViewProps(productData) {
    const productSlug = productData.slug;
    /**
	 * Fetch and process the authored page content
	 */ const { pageData , headings  } = await (0,_helpers_page_data__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(productSlug);
    /**
	 * Get the product data, and all collections,
	 * both of which are needed for layoutProps
	 */ const product = await (0,lib_learn_client_api_product__WEBPACK_IMPORTED_MODULE_1__/* .getProduct */ .w)(productSlug);
    const allProductCollections = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_0__/* .getAllCollections */ .Lg)({
        product: {
            slug: productSlug,
            sidebarSort: true
        }
    });
    const filteredCollections = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .filterCollections */ .$)(allProductCollections, productSlug);
    /**
	 * Build & return layout props to pass to SidebarSidecarLayout
	 */ const layoutProps = {
        breadcrumbLinks: (0,views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_9__/* .getTutorialsBreadcrumb */ .Y)({
            product: {
                name: product.name,
                filename: product.slug
            }
        }),
        sidebarSections: (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_2__/* .formatSidebarCategorySections */ .Jd)(filteredCollections)
    };
    /**
	 * Build sitemap collections, if we're using them.
	 */ let sitemapCollections;
    if (pageData.showProductSitemap) {
        sitemapCollections = filteredCollections.sort((0,lib_sort_alphabetically__WEBPACK_IMPORTED_MODULE_11__/* .sortAlphabetically */ .a)("name")).map(_components_sitemap_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatSitemapCollection */ .h);
    }
    /**
	 * Destructuring the Learn data for now so it can be treated as the source of
	 * truth in this view.
	 *
	 * @TODO Determine which should be the source of truth in the long term since
	 * both Learn and existing Docs properties are both needed to be returned from
	 * here.
	 */ const { description , docsUrl , id , name , slug  } = product;
    /**
	 * Return static props
	 */ return {
        props: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__/* .stripUndefinedProperties */ .c)({
            metadata: {
                title: "Tutorials"
            },
            data: {
                pageData,
                sitemapCollections
            },
            layoutProps,
            outlineItems: (0,components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(headings),
            product: {
                ...productData,
                description,
                docsUrl,
                id,
                name: name,
                slug
            }
        })
    };
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

/***/ 48010:
/***/ ((module) => {

"use strict";
module.exports = require("http-status-codes");

/***/ }),

/***/ 48506:
/***/ ((module) => {

"use strict";
module.exports = require("joi");

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

/***/ 74809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,4203,8725,3076,504,4975,9231,265,7232,4884,6182,3592,6415,4506,2529,1817,5587,6377], () => (__webpack_exec__(90424)));
module.exports = __webpack_exports__;

})();