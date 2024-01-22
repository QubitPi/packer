"use strict";
(() => {
var exports = {};
exports.id = 4847;
exports.ids = [4847];
exports.modules = {

/***/ 10950:
/***/ ((module) => {

module.exports = require("extend");

/***/ }),

/***/ 22493:
/***/ ((module) => {

module.exports = require("hast-util-to-string");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 93715:
/***/ ((module) => {

module.exports = require("is-buffer");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 57112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 39369:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 62555:
/***/ ((module) => {

module.exports = require("refractor");

/***/ }),

/***/ 64545:
/***/ ((module) => {

module.exports = require("rehype-stringify");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 84269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 87586:
/***/ ((module) => {

module.exports = import("decode-named-character-reference");;

/***/ }),

/***/ 90684:
/***/ ((module) => {

module.exports = import("mdast-util-mdx");;

/***/ }),

/***/ 19282:
/***/ ((module) => {

module.exports = import("mdast-util-phrasing");;

/***/ }),

/***/ 23985:
/***/ ((module) => {

module.exports = import("micromark-core-commonmark");;

/***/ }),

/***/ 95723:
/***/ ((module) => {

module.exports = import("micromark-extension-mdxjs");;

/***/ }),

/***/ 84678:
/***/ ((module) => {

module.exports = import("micromark-factory-space");;

/***/ }),

/***/ 60718:
/***/ ((module) => {

module.exports = import("micromark-util-character");;

/***/ }),

/***/ 43471:
/***/ ((module) => {

module.exports = import("micromark-util-chunked");;

/***/ }),

/***/ 36243:
/***/ ((module) => {

module.exports = import("micromark-util-combine-extensions");;

/***/ }),

/***/ 62687:
/***/ ((module) => {

module.exports = import("micromark-util-decode-numeric-character-reference");;

/***/ }),

/***/ 22732:
/***/ ((module) => {

module.exports = import("micromark-util-decode-string");;

/***/ }),

/***/ 96997:
/***/ ((module) => {

module.exports = import("micromark-util-normalize-identifier");;

/***/ }),

/***/ 45566:
/***/ ((module) => {

module.exports = import("micromark-util-resolve-all");;

/***/ }),

/***/ 94980:
/***/ ((module) => {

module.exports = import("micromark-util-subtokenize");;

/***/ }),

/***/ 89521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 19832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 60234:
/***/ ((module) => {

module.exports = import("unist-util-is");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 17602:
/***/ ((module) => {

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ //@ts-check
/**
 * @typedef {Object} SiteProxyConfig
 * @property {string} domain
 * @property {string} host
 * @property {string[]} assets
 */ /**
 * @type {Record<string, SiteProxyConfig>}
 */ 
const proxyConfig = {
    sentinel: {
        // actually https://docs.hashicorp.com, but using test-st.hashi-mktg.com as a test
        domain: "https://docs.hashicorp.com",
        host: "(docs\\.hashicorp\\.com|test-st\\.hashi-mktg\\.com)",
        assets: []
    }
};
module.exports = proxyConfig;


/***/ }),

/***/ 59176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ //@ts-check

const proxyConfig = __webpack_require__(17602);
// NOTE: this module uses CommonJS exports,
// as it must be required() into redirects and rewrites config,
// neither of which are transpiled.
const PROXIED_PRODUCTS = Object.keys(proxyConfig);
function isPreview() {
    return "project-preview" == "preview";
}
/**
 *
 * @param {string=} hostname
 * @returns {string | boolean}
 */ function getProxiedProductSlug(hostname) {
    const proxiedProductSlug = PROXIED_PRODUCTS.reduce((acc, slug)=>{
        if (!acc && isProxiedProduct(slug, hostname)) {
            return slug;
        }
        return acc;
    }, false);
    return proxiedProductSlug;
}
/**
 *
 * @param {string=} hostname
 * @returns {string | boolean | undefined}
 */ function getMatchedDomain(hostname) {
    if (!hostname) {
        return;
    }
    const domainProductSlug = PROXIED_PRODUCTS.reduce((acc, slug)=>{
        const productHost = proxyConfig[slug].host;
        if (!acc && hostname.match(new RegExp(productHost))) {
            return slug;
        }
        return acc;
    }, false);
    return domainProductSlug;
}
/**
 *
 * @param {string} productSlug
 * @param {string=} hostname
 * @returns {boolean}
 */ function isProxiedProduct(productSlug, hostname) {
    const isDevEnvSet = process.env.DEV_IO == productSlug;
    // Allow commit messages to trigger specific proxy settings,
    // but NOT if we're deploying off the main branch.
    const commitMsg = process.env.VERCEL_GIT_COMMIT_MESSAGE || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE || "";
    const commitFirstLine = commitMsg.split("\n")[0];
    const isCommitMatch = commitFirstLine.indexOf(`(${productSlug})`) !== -1;
    // ... but only if NOT in production
    const commitRef = process.env.VERCEL_GIT_COMMIT_REF || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
    const isOnMain = commitRef == "main";
    // When deploying to specific proxied domains,
    // this function should accurately reflect the proxied product
    const isDomainMatch = productSlug == getMatchedDomain(hostname);
    // Combine local and deployed settings
    const isLocalMatch = isDevEnvSet;
    const isDeployedMatch = isDomainMatch || isCommitMatch && !isOnMain;
    return isLocalMatch || isDeployedMatch;
}
function isDeployPreview(productSlug) {
    const isProductSlugMatching = !productSlug || productSlug === "packer";
    return  true && isProductSlugMatching;
}
/**
 *
 * @param {string} productSlug
 * @returns {boolean}
 */ function isVersionedDocsEnabled(productSlug) {
    const enableVersionedDocs =  true && "true" !== "false";
    return enableVersionedDocs && !isDeployPreview(productSlug);
}
module.exports = {
    getProxiedProductSlug,
    isPreview,
    isDeployPreview,
    isVersionedDocsEnabled
};


/***/ }),

/***/ 70920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fetch_github_file)
});

;// CONCATENATED MODULE: external "@octokit/core"
const core_namespaceObject = require("@octokit/core");
;// CONCATENATED MODULE: ./src/lib/fetch-github-file.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const octokit = new core_namespaceObject.Octokit({
    auth: process.env.GITHUB_TOKEN
});
async function fetchGithubFile({ owner , repo , path , ref  }) {
    const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner,
        repo,
        path,
        ref
    });
    if (response.status !== 200) {
        throw new Error(`Failed to fetch file from GitHub: ${JSON.stringify({
            owner,
            repo,
            path,
            ref
        })}. Response status code: ${response.status}.`);
    }
    const data = response.data;
    const fileString = Buffer.from(data.content, "base64").toString("utf-8");
    return fileString;
}
/* harmony default export */ const fetch_github_file = (fetchGithubFile);


/***/ }),

/***/ 94386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getBreadcrumbLinks)
/* harmony export */ });
/* unused harmony export getBreadcrumbTitle */
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * This is a list of URL paths on `developer.hashicorp.com`
 * that may appear in breadcrumb bars, but that we know will 404
 * as we don't yet have pages for them.
 */ const KNOWN_404_URLS = [
    "/hcp/api-docs"
];
/**
 * Map a `urlPath` on `developer.hashicorp.com` to a consistent page title.
 */ const KNOWN_URL_TITLE = {
    "/": "Developer",
    "/hcp": "HashiCorp Cloud Platform"
};
/**
 * Map the final segment of a `urlPath` to a generic page title.
 * This is intended for segments that may appear frequently in many URLs.
 *
 * Rather than specify duplicative entries for specific URLs, we can
 * specify a single entry for a common URL segment.
 *
 * For example:
 * - `/waypoint/api-docs` breadcrumb title should be `API`
 * - `/boundary/api-docs` breadcrumb title should be `API`
 * - `/hcp/api-docs` breadcrumb title should be `API`
 * - ...etc
 */ const KNOWN_URL_SEGMENT_TITLE = {
    "api-docs": "API",
    "vault-secrets": "Vault Secrets",
    "open-api-docs-preview": "OpenAPI Docs Preview Tool"
};
/**
 * Given a `urlPath` on `developer.hashicorp.com`,
 * Return a page title we consistently use to refer to that URL.
 *
 * If the provided `urlPath` does not have a known breadcrumb title,
 * we return the final URL segment of the path as the breadcrumb title.
 */ function getBreadcrumbTitle(urlPath) {
    if (KNOWN_URL_TITLE[urlPath]) {
        // If we have a URL-specific entry, favour that
        return KNOWN_URL_TITLE[urlPath];
    } else {
        // If we have a segment-specific entry, return that, or `null` otherwise
        const segments = urlPath.split("/");
        const finalSegment = segments[segments.length - 1];
        return KNOWN_URL_SEGMENT_TITLE[finalSegment] || null;
    }
}
/**
 * Given a `urlPath` on `developer.hashicorp.com`,
 * Return a set of breadcrumb link items representing each URL segment
 * leading to the page at `urlPath`.
 *
 * If the URL does not have a known page title in `getBreadcrumbTitle`,
 * we fallback to using the URL segment as the breadcrumb title.
 *
 * If the URL is a known 404, then the resulting breadcrumb link
 * will have a `url` property that is `null`.
 *
 * Note: this function is intended for use with individual pages that are
 * manually set up. For Docs, Learn, and Integration pages, we can generally
 * derive the breadcrumb data for pages within those sections from the relevant
 * API data. This function may still be useful for the top-level URL segments
 * that lead into specific document breadcrumbs.
 */ function getBreadcrumbLinks(urlPath) {
    const breadcrumbLinks = [];
    const segments = urlPath.split("/");
    for(let i = 0; i < segments.length; i++){
        const url = i == 0 ? "/" : segments.slice(0, i + 1).join("/");
        const title = getBreadcrumbTitle(url) || segments[i];
        const isKnown404 = KNOWN_404_URLS.includes(url);
        breadcrumbLinks.push({
            title,
            url: isKnown404 ? null : url
        });
    }
    return breadcrumbLinks;
}


/***/ }),

/***/ 95388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 76432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 43669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_0__]);
views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Boilerplate page configuration, we could in theory expose this so visitors
 * to the preview tool could manipulate it, but we intentionally just
 * hard-code here to keep the focus of the preview tool on OpenAPI spec
 * contents.
 */ const GENERIC_PAGE_CONFIG = {
    // basePath same no matter what, preview tool is on static route
    basePath: "/open-api-docs-preview",
    // No versioning in the preview tool, focus on one spec file at a time
    context: {
        params: {
            page: []
        }
    },
    // Product slug, using HCP to just show a generic HashiCorp logo,
    // so that the preview tool's focus can remain on the spec file contents
    productSlug: "hcp",
    // Generic resource items, we can set more specific ones closer to launch
    navResourceItems: [
        {
            title: "Tutorial Library",
            href: "/tutorials/library"
        },
        {
            title: "Certifications",
            href: "/certifications"
        },
        {
            title: "Community",
            href: "https://discuss.hashicorp.com/"
        },
        {
            title: "Support",
            href: "https://www.hashicorp.com/customer-success"
        }
    ]
};
async function handler(req, res) {
    // Reject non-POST requests, only POST is allowed
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).json({
            error: "Method not allowed"
        });
    }
    /**
	 * Build the static props from the POST'ed page configuration data,
	 * which includes the full OpenAPI spec as a string.
	 */ const { openApiDescription , openApiJsonString , groupOperationsByPath  } = JSON.parse(req.body);
    /**
	 * Construct some preview data just to match the expected `getStaticProps`
	 * signature. The `versionId` and `releaseStage` don't really matter here.
	 */ const versionData = [
        {
            versionId: "preview",
            releaseStage: "preview",
            sourceFile: openApiJsonString
        }
    ];
    /**
	 * Build static props for the page
	 */ try {
        const staticProps = await (0,views_open_api_docs_view_server__WEBPACK_IMPORTED_MODULE_0__/* .getStaticProps */ .b)({
            // Pass the bulk of the page config
            ...GENERIC_PAGE_CONFIG,
            // Pass the constructed version data
            versionData,
            // Pass options
            groupOperationsByPath,
            /**
			 * Massage the schema data a little bit, replacing
			 * "HashiCorp Cloud Platform" in the title with "HCP".
			 */ massageSchemaForClient: (schemaData)=>{
                // Replace the schema description with the POST'ed description, if present
                if (openApiDescription) {
                    schemaData.info.description = openApiDescription;
                }
                // Replace "HashiCorp Cloud Platform" with "HCP" in the title
                const massagedTitle = schemaData.info.title.replace("HashiCorp Cloud Platform", "HCP");
                // Return the schema data with the revised title
                const massagedInfo = {
                    ...schemaData.info,
                    title: massagedTitle
                };
                return {
                    ...schemaData,
                    info: massagedInfo
                };
            }
        });
        // Return the static props as JSON, these can be passed to OpenApiDocsView
        res.status(200).json(staticProps);
    } catch (error) {
        res.status(200).json({
            error: error.toString()
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* unused harmony export getStaticPaths */
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59176);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_fetch_github_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70920);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76432);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95388);
/* harmony import */ var lib_get_breadcrumb_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94386);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_5__]);
_utils__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Library






// Utilities

/**
 * Get static paths for the view.
 *
 * Initially, without versioning, we expect a single page. We use
 * `getStaticPaths` for flag-based compatibility with the previous template.
 *
 * Later, when we implement versioned API docs for the new template,
 * we'll likely need to retain `getStaticPaths`, using separate paths
 * for each version of the OpenAPI documents that we detect.
 */ const getStaticPaths = async ()=>{
    // If we are in a product repo deploy preview, don't pre-render any paths
    if (isDeployPreview()) {
        return {
            paths: [],
            fallback: "blocking"
        };
    }
    // If we're in production, statically render the single view,
    // and use `fallback: blocking` for versioned views.
    return {
        paths: [
            {
                params: {
                    page: []
                }
            }
        ],
        fallback: "blocking"
    };
};
/**
 * Get static props for the view.
 *
 * This is where we expect to fetch the OpenAPI document, and transform
 * the schema `.json` data into props for the view component.
 *
 * For now, we have a placeholder. We'll expand this as we build out the view.
 */ async function getStaticProps({ context , productSlug , serviceProductSlug =productSlug , versionData , basePath , statusIndicatorConfig =null , topOfPageId ="overview" , groupOperationsByPath =false , massageSchemaForClient =(s)=>s , navResourceItems =[]  }) {
    // Get the product data
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_2__/* .cachedGetProductData */ .i)(productSlug);
    /**
	 * Parse the version to render, or 404 if a non-existent version is requested.
	 */ const pathParts = context.params?.page;
    const versionId = pathParts?.length > 0 ? pathParts[0] : null;
    const isVersionedUrl = typeof versionId === "string";
    const defaultVersion = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .findDefaultVersion */ .vP)(versionData);
    // Resolve the current version
    let targetVersion;
    if (isVersionedUrl) {
        targetVersion = versionData.find((v)=>v.versionId === versionId);
    } else {
        targetVersion = defaultVersion;
    }
    // If we can't resolve the current version, render a 404 page
    if (!targetVersion) {
        return {
            notFound: true
        };
    }
    /**
	 * Fetch, parse, and validate the OpenAPI schema for this version.
	 */ const { sourceFile  } = targetVersion;
    const schemaFileString = typeof sourceFile === "string" ? sourceFile : await (0,lib_fetch_github_file__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(sourceFile);
    const rawSchemaData = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .parseAndValidateOpenApiSchema */ .Ft)(schemaFileString);
    const schemaData = massageSchemaForClient(rawSchemaData);
    const operationProps = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getOperationProps */ .y8)(schemaData);
    const operationGroups = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .groupOperations */ .KQ)(operationProps, groupOperationsByPath);
    const navItems = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getNavItems */ .rT)({
        operationGroups,
        topOfPageId,
        title: schemaData.info.title,
        productSlug: productData.slug
    });
    /**
	 * Serialize description MDX for rendering in our DevDotContent component.
	 */ const descriptionMdx = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(schemaData.info.description);
    /**
	 * Build breadcrumb links for the page, and activate the final breadcrumb.
	 *
	 * @TODO: we have a task to remove the need for `isCurrentPage`:
	 * https://app.asana.com/0/1202097197789424/1202354347457831/f
	 */ const breadcrumbLinks = (0,lib_get_breadcrumb_links__WEBPACK_IMPORTED_MODULE_3__/* .getBreadcrumbLinks */ .m)(basePath);
    breadcrumbLinks[breadcrumbLinks.length - 1].isCurrentPage = true;
    /**
	 * Return props
	 */ return {
        props: {
            metadata: {
                title: schemaData.info.title
            },
            productData,
            serviceProductSlug,
            topOfPageHeading: {
                text: schemaData.info.title,
                id: topOfPageId
            },
            releaseStage: targetVersion.releaseStage,
            descriptionMdx,
            isVersionedUrl,
            versionSwitcherProps: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getVersionSwitcherProps */ .QK)({
                projectName: schemaData.info.title,
                versionData,
                targetVersion,
                defaultVersion,
                basePath
            }),
            operationGroups: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_6__/* .stripUndefinedProperties */ .c)(operationGroups),
            navItems,
            navResourceItems,
            breadcrumbLinks,
            statusIndicatorConfig
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ addWordBreaksToUrl)
/* harmony export */ });
/* harmony import */ var _add_word_breaks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48022);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given a URL string,
 * Return with added word-break-friendly characters before each forward slash.
 */ function addWordBreaksToUrl(url) {
    return (0,_add_word_breaks__WEBPACK_IMPORTED_MODULE_0__/* .addWordBreaks */ .O)(url.split("/").map((v, idx)=>idx === 0 ? [
            v
        ] : [
            "/",
            v
        ]).flat());
}


/***/ }),

/***/ 48022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ addWordBreaks)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Given an array of strings,
 * Return the array with zero-width-space elements inserted between each string.
 *
 * This allows the browser to break the string at any of the zero-width-spaces,
 * which is useful for long strings that would otherwise overflow.
 *
 * More information on zero-width spaces:
 * https://en.wikipedia.org/wiki/Zero-width_space
 */ function addWordBreaks(stringArray) {
    return stringArray.join("​");
}


/***/ }),

/***/ 89765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ findDefaultVersion)
});

;// CONCATENATED MODULE: ./src/views/open-api-docs-view/utils/sort-date-version-data.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Sort version data in descending order.
 *
 * Note: only works with `YYYY-MM-DD` version formats.
 */ function sortDateVersionData(versionData) {
    return versionData.sort((a, b)=>{
        // We expect consistent YYYY-MM-DD formatting, so string compare works fine
        const aBeforeB = a.versionId > b.versionId;
        const bBeforeA = b.versionId > a.versionId;
        return aBeforeB ? -1 : bBeforeA ? 1 : 0;
    });
}

;// CONCATENATED MODULE: ./src/views/open-api-docs-view/utils/find-default-version.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given an array of version data,
 * Return the default version that should be shown.
 *
 * - If there is exactly one version, we treat it as the default version.
 * - If there are multiple versions, but no `stable` version, we'll show
 *   the very latest version as the default version (even if not `stable`).
 * - If there are multiple versions, and at least one `stable` version,
 *   we'll show the latest `stable` version as the default version.
 *
 * Note: only supports date-based version formats, for example "2023-01-15".
 * We'd need to update the sort logic in order to support other formats.
 */ function findDefaultVersion(versionData) {
    // If we have exactly one version, we'll show that as the default.
    if (versionData.length === 1) {
        return versionData[0];
    }
    // Sort versions in descending order
    const versionsDescending = sortDateVersionData(versionData);
    // Ideally, we'll show the latest 'stable' release as the default.
    const latestStableVersion = versionsDescending.find((v)=>v.releaseStage === "stable");
    // Fall back to the latest version (any stage!) if there's no 'stable' version
    const defaultVersion = latestStableVersion || versionsDescending[0];
    // Return the default version
    return defaultVersion;
}


/***/ }),

/***/ 80619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ getNavItems)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Build nav items for each operation, group-by-group.
 */ function getNavItems({ topOfPageId , operationGroups , productSlug , title  }) {
    // Build the top-level page nav item
    const pageNavItem = {
        title,
        fullPath: `#${topOfPageId}`,
        theme: productSlug
    };
    // Include grouped operation items
    const operationGroupItems = getOperationGroupItems(operationGroups);
    // Return the full set of nav items
    return [
        pageNavItem,
        ...operationGroupItems
    ];
}
/**
 * Build nav items for each operation, group-by-group.
 */ function getOperationGroupItems(operationGroups) {
    const navItems = [];
    // Build items for each group
    for (const { heading , items  } of Object.values(operationGroups)){
        // Start each group with a divider and heading
        navItems.push({
            divider: true
        });
        navItems.push({
            heading
        });
        // Then include each group's items
        for (const { slug , summary  } of items){
            navItems.push({
                title: summary,
                fullPath: `#${slug}`
            });
        }
    }
    return navItems;
}


/***/ }),

/***/ 6125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getOperationProps)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90031);
/* harmony import */ var _add_word_breaks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48022);
/* harmony import */ var _add_word_breaks_to_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48802);
/* harmony import */ var _split_on_capital_letters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77948);
/* harmony import */ var _get_url_path_code_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party

// Local

// Utils




/**
 * Given a schema, return a flattened list of operation prop objects.
 */ async function getOperationProps(schemaJson) {
    // Grab the server URL, we'll use this to build URL paths for each operation
    let serverUrl = "";
    if (schemaJson.servers?.length > 0) {
        const rawServerUrl = schemaJson.servers[0].url;
        /**
		 * If we up-converted from an older OpenAPI version, then the spec would
		 * have defined a `host` rather than explicit server URL, and the resulting
		 * server URL will start with `//` rather than a valid protocol.
		 * In this case we assume HTTPs, and update the serverUrl accordingly.
		 */ serverUrl = rawServerUrl.replace(/^\/\//, "https://");
    }
    // Set up an accumulator array
    const operationObjects = [];
    /**
	 * Iterate over all paths in the schema.
	 * Each path can support many operations through different request types.
	 */ for (const [path, pathItemObject] of Object.entries(schemaJson.paths)){
        for (const [type, operation] of Object.entries(pathItemObject)){
            // String values are apparently possible, but not sure how to support them
            if (typeof operation === "string") {
                continue;
            }
            // We only want operation objects.
            if (!("operationId" in operation)) {
                continue;
            }
            // Create a slug for this operation
            const operationSlug = slugify__WEBPACK_IMPORTED_MODULE_0___default()(operation.operationId);
            /**
			 * Parse request and response details for this operation
			 */ const parameters = "parameters" in operation ? operation.parameters : [];
            const requestDataSlug = `${operationSlug}_request`;
            const requestData = {
                heading: {
                    text: "Request",
                    slug: requestDataSlug
                },
                noGroupsMessage: "No request data.",
                groups: await (0,___WEBPACK_IMPORTED_MODULE_1__/* .getRequestData */ .sL)(parameters, operation.requestBody, requestDataSlug)
            };
            const responseDataSlug = `${operationSlug}_response`;
            const responseData = {
                heading: {
                    text: "Response",
                    slug: responseDataSlug
                },
                noGroupsMessage: "No response data.",
                groups: await (0,___WEBPACK_IMPORTED_MODULE_1__/* .getResponseData */ .LZ)(operation.responses, responseDataSlug)
            };
            /**
			 * Build a fallback summary for the operation, which is just
			 * the operationId with some formatting for better line-breaks.
			 * We also apply logic to remove the first part of the operationId,
			 * which by convention will be formatted `ServiceName_OperationName`.
			 *
			 * TODO: update to actually use `summary`, for now we only use
			 * `operationId` as `summary` values are not yet reliably present
			 * & accurate. Task:
			 * https://app.asana.com/0/1204678746647847/1205338583217309/f
			 */ const operationIdParts = operation.operationId.split("_");
            const hasServicePart = operationIdParts.length > 1;
            const idForSummary = hasServicePart ? operationIdParts.slice(1).join("_") : operation.operationId;
            const summary = (0,_add_word_breaks__WEBPACK_IMPORTED_MODULE_2__/* .addWordBreaks */ .O)((0,_split_on_capital_letters__WEBPACK_IMPORTED_MODULE_3__/* .splitOnCapitalLetters */ .P)(idForSummary));
            /**
			 * Format and push the operation props
			 */ operationObjects.push({
                operationId: operation.operationId,
                slug: operationSlug,
                type,
                tags: operation.tags ?? [],
                path: {
                    full: path,
                    truncated: (0,_add_word_breaks_to_url__WEBPACK_IMPORTED_MODULE_4__/* .addWordBreaksToUrl */ .t)((0,___WEBPACK_IMPORTED_MODULE_1__/* .truncateHcpOperationPath */ .EJ)(path))
                },
                summary,
                requestData,
                responseData,
                urlPathForCodeBlock: (0,_get_url_path_code_html__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(serverUrl + path)
            });
        }
    }
    return operationObjects;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ getPropertyDetailPropsFromSchemaObject),
/* harmony export */   "o": () => (/* binding */ getPropertyDetailPropsFromParameter)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_platform_markdown_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hashicorp_platform_markdown_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_1__]);
_hashicorp_platform_markdown_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third party

// Utilities

/**
 * Given a parameter object,
 * Return property detail props.
 */ async function getPropertyDetailPropsFromParameter(param, parentSlug) {
    const slug = `${parentSlug}_${slugify__WEBPACK_IMPORTED_MODULE_0___default()(param.name)}`;
    const paramSchemaDetails = await getPropertyDetailsFromSchema(param.schema, slug);
    return {
        name: param.name,
        slug,
        type: paramSchemaDetails.typeString,
        // Note that we use the description from the parameter itself,
        // rather than from the parameter's schema.
        description: await (0,_hashicorp_platform_markdown_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(param.description),
        isRequired: param.required,
        nestedProperties: paramSchemaDetails.nestedProperties
    };
}
/**
 * Given a schema object,
 * Return property detail props.
 */ async function getPropertyDetailPropsFromSchemaObject(key, schema, isRequired, parentSlug) {
    const slug = `${parentSlug}_${slugify__WEBPACK_IMPORTED_MODULE_0___default()(key)}`;
    const schemaDetails = await getPropertyDetailsFromSchema(schema, slug, 0);
    return {
        name: key,
        slug,
        type: schemaDetails.typeString,
        description: schemaDetails.description,
        isRequired,
        nestedProperties: schemaDetails.nestedProperties
    };
}
/**
 * Given a schema object,
 * Return a typeString summarizing the schema,
 * descriptionHtml generated from the schema.description,
 * and an array of nested properties with fully built props.
 */ async function getPropertyDetailsFromSchema(schema, parentSlug, arrayDepth = 0) {
    /**
	 * We don't expect reference objects (these should have been resolved already),
	 * but if one pops up, we'll just return a string.
	 */ if ("$ref" in schema) {
        return {
            typeString: "$ref"
        };
    }
    /**
	 * If we have an array type, we need to recurse into the items object.
	 * We'll increase the arrayDepth, this will affect the type string we show.
	 */ if (schema.type === "array" && schema.items) {
        return await getPropertyDetailsFromSchema(schema.items, parentSlug + "-array", arrayDepth + 1);
    }
    /**
	 * For non-array types, we can build out our data.
	 */ // Build a string that represents this type
    const typeArraySuffix = arrayDepth > 0 ? arrayFrom(arrayDepth, "[]").join("") : "";
    const typeString = `${schema.type}${typeArraySuffix}`;
    // Build the description
    const description = await (0,_hashicorp_platform_markdown_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(schema.description);
    // Build out nested properties, if present
    const hasProperties = schema.type === "object" && Boolean(schema.properties);
    const nestedProperties = [];
    if (hasProperties) {
        // Note: the object-level schema specifies the required properties
        const requiredProperties = schema.required || [];
        // Iterate over the properties, pushing them to the nested properties array,
        // and recursing into the schema for each property as necessary.
        for (const propertyKey of Object.keys(schema.properties)){
            const property = schema.properties[propertyKey];
            const propertySlug = `${parentSlug}.${slugify__WEBPACK_IMPORTED_MODULE_0___default()(propertyKey)}`;
            const propertyDetails = await getPropertyDetailsFromSchema(property, propertySlug);
            nestedProperties.push({
                name: propertyKey,
                slug: propertySlug,
                type: propertyDetails.typeString,
                description: propertyDetails.description,
                isRequired: requiredProperties.includes(propertyKey),
                nestedProperties: propertyDetails.nestedProperties
            });
        }
    }
    /**
	 * Return the type string and nested properties
	 */ return {
        typeString,
        description,
        nestedProperties
    };
}
/**
 * Create an array of the given length, filled with the given value.
 */ function arrayFrom(length, value) {
    const array = [];
    for(let i = 0; i < length; i++){
        array.push(value);
    }
    return array;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getRequestData)
/* harmony export */ });
/* unused harmony export getBodyParameterProps */
/* harmony import */ var _get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__]);
_get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Utils

/**
 * Given OpenAPI parameter objects,
 * Return request data formatted for display.
 */ async function getRequestData(parameters, requestBody, slugPrefix) {
    // Set up some slugs, we'll need these for headings and for unique prefixes
    const pathParamsSlug = `${slugPrefix}_path-parameters`;
    const queryParamsSlug = `${slugPrefix}_query-parameters`;
    const bodyParamsSlug = `${slugPrefix}_body-parameters`;
    // Build arrays of path, query, and body parameters
    const pathParameters = [];
    const queryParameters = [];
    if (Array.isArray(parameters)) {
        for (const parameter of parameters){
            // Skip references
            if ("$ref" in parameter) {
                continue;
            }
            // Skip parameters that are not "in" the request
            if (!("in" in parameter)) {
                continue;
            }
            // Parse parameters by type
            if (parameter.in === "path") {
                pathParameters.push(await (0,_get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyDetailPropsFromParameter */ .o)(parameter, pathParamsSlug));
            } else if (parameter.in === "query") {
                queryParameters.push(await (0,_get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyDetailPropsFromParameter */ .o)(parameter, queryParamsSlug));
            }
        }
    }
    // Build body parameters from requestBody data, if present
    const bodyParameters = requestBody && !("$ref" in requestBody) ? await getBodyParameterProps(requestBody, bodyParamsSlug) : [];
    // Build an array of request data, using any parameters present
    const requestData = [];
    if (pathParameters.length > 0) {
        requestData.push({
            heading: {
                text: "Path Parameters",
                slug: pathParamsSlug
            },
            propertyDetails: pathParameters
        });
    }
    if (queryParameters.length > 0) {
        requestData.push({
            heading: {
                text: "Query Parameters",
                slug: queryParamsSlug
            },
            propertyDetails: queryParameters
        });
    }
    if (bodyParameters.length > 0) {
        requestData.push({
            heading: {
                text: "Body Parameters",
                slug: bodyParamsSlug
            },
            propertyDetails: bodyParameters
        });
    }
    // Return everything
    return requestData;
}
/**
 * Given the parameter object from a body parameter,
 * which we expect to be an object with a schema if it exists,
 *
 * Return property detail data.
 */ async function getBodyParameterProps(requestBody, parentSlug) {
    const schema = requestBody.content["application/json"].schema;
    // If we don't find the expected schema, return an empty array
    if (!schema) {
        return [];
    }
    // We don't expect references, but for typing purposes we handle them.
    if ("$ref" in schema) {
        return [];
    }
    /**
	 * Note: we expect body schemas to always be objects at their root.
	 * We flatten the body properties to avoid showing a redundant object.
	 */ const bodyProps = [];
    const requiredProperties = schema.required || [];
    for (const [key, value] of Object.entries(schema.properties)){
        // Skip reference objects, we expect these to be de-referenced
        // before this function is called
        if ("$ref" in value) {
            continue;
        }
        // Skip read-only properties
        if (value.readOnly) {
            continue;
        }
        const isRequired = requiredProperties.includes(key);
        // Push props
        bodyProps.push(await (0,_get_property_detail_props__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyDetailPropsFromSchemaObject */ .M)(key, value, isRequired, parentSlug));
    }
    return bodyProps;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getResponseData)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_property_detail_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_property_detail_props__WEBPACK_IMPORTED_MODULE_1__]);
_get_property_detail_props__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third party

// Utils

/**
 * Given OpenAPI responses data,
 * Return response data formatted for display.
 */ async function getResponseData(responses, slugPrefix) {
    // Set up an object to hold response data
    const responseData = [];
    // Populate the responseData object using incoming responses
    for (const responseCode of Object.keys(responses)){
        const value = responses[responseCode];
        // If this value is a reference, skip it
        if ("$ref" in value) {
            continue;
        }
        const contentTypeKeys = Object.keys(value.content);
        // If we don't have any content type keys, skip this response
        if (!contentTypeKeys.length) {
            continue;
        }
        // If we don't have a definition or schema, skip this response
        const definition = value.content[contentTypeKeys[0]];
        if (!definition || !definition.schema) {
            continue;
        }
        // If this schema is a reference, skip this response
        if ("$ref" in definition.schema) {
            continue;
        }
        /**
		 * Note: we expect response schemas to always be objects at their root.
		 * We flatten the response properties to avoid showing a redundant object.
		 */ if (definition.schema.properties) {
            const responseSlug = `${slugPrefix}_${responseCode}`;
            const propertyDetails = [];
            const requiredProperties = definition.schema.required || [];
            for (const propertyKey of Object.keys(definition.schema.properties)){
                const data = definition.schema.properties[propertyKey];
                // If this schema is a reference, skip it
                if ("$ref" in data) {
                    continue;
                }
                const isRequired = requiredProperties.includes(propertyKey);
                propertyDetails.push(await (0,_get_property_detail_props__WEBPACK_IMPORTED_MODULE_1__/* .getPropertyDetailPropsFromSchemaObject */ .M)(propertyKey, data, isRequired, responseSlug));
            }
            // Determine the heading text to show
            const headingText = responseCode === "default" ? `Default Error Response` : `${responseCode} -  ${(0,http_status_codes__WEBPACK_IMPORTED_MODULE_0__.getReasonPhrase)(responseCode)}`;
            const headingTheme = responseCode.startsWith("2") ? "success" : "critical";
            responseData.push({
                heading: {
                    text: headingText,
                    slug: responseSlug,
                    theme: headingTheme
                },
                propertyDetails
            });
        }
    }
    //
    return responseData;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getUrlPathCodeHtml)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Given a URL path,
 * Return HTML that represents the URL path, with `{parameters}` syntax
 * highlighted and with word breaks inserted before forward slashes
 * to allow long URLs to wrap to multiple lines.
 */ function getUrlPathCodeHtml(urlPath) {
    /**
	 * Insert <wbr/> before forward slashes for more logical line breaks
	 *
	 * Note: we can't use zero-width spaces here as in other use cases,
	 * as they show up when the code block contents are copied.
	 */ const urlWithWordBreaks = urlPath.replace(/\//g, "/<wbr/>");
    // Add syntax highlighting around any {parameters} in the path
    const parameterRegex = /{([^}]+)}/g;
    const urlPathForCodeBlock = urlWithWordBreaks.replace(parameterRegex, '<span class="token regex">{$1}</span>');
    return urlPathForCodeBlock;
}


/***/ }),

/***/ 52603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getVersionSwitcherProps)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Types
/**
 * Given version data and other OpenAPI docs details,
 * Return version switcher dropdown props for use in `OpenApiDocsView`.
 *
 * Note: If there is only one version, we return null.
 */ function getVersionSwitcherProps({ projectName , versionData , targetVersion , defaultVersion , basePath  }) {
    // Return null early if we only have one version
    if (versionData.length === 1) {
        return null;
    }
    // Otherwise, we have multiple versions, we need to build dropdown props
    const label = projectName;
    // Each version becomes an option in the dropdown
    const options = versionData.map(({ versionId , releaseStage  })=>{
        /**
			 * Determine the version label suffix to show.
			 * - Default case is to show the version only, no (suffix)
			 * - If this is the default version, show 'latest'. For information on
			 *   what "default version" means, see `findDefaultVersion`.
			 * - If we have a defined releaseStage that isn't 'stable', show it
			 */ const isLatest = versionId === defaultVersion.versionId;
        let versionLabelSuffix = "";
        if (isLatest) {
            versionLabelSuffix = " (latest)";
        } else if (releaseStage && releaseStage !== "stable") {
            versionLabelSuffix = ` (${releaseStage})`;
        }
        // Construct the label to show in the dropdown
        const label = versionId + versionLabelSuffix;
        // Construct the aria-label for the version dropdown.
        const ariaLabel = `Choose a version of the API docs for ${projectName}. Currently viewing version ${label}.`;
        // Construct the `href` for this version, which is special if latest
        const href = isLatest ? basePath : `${basePath}/${versionId}`;
        // Mark this version option as selected if it's the current option
        const isSelected = versionId === targetVersion.versionId;
        // Return all the props
        return {
            ariaLabel,
            href,
            isLatest,
            isSelected,
            label
        };
    });
    // Return the dropdown props
    return {
        label,
        options
    };
}


/***/ }),

/***/ 90127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ groupOperations)
/* harmony export */ });
/* harmony import */ var _add_word_breaks_to_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48802);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given a flat array of operation prop objects,
 * Return an array of operation groups
 *
 * Operation groups are constructed by organizing the incoming
 * operation prop objects by their paths.
 *
 * EXAMPLE
 *
 * As an example, we might start with operation paths that look like:
 *
 * 1. ListApps - /secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/apps
 * 2. CreateApp - /secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/apps
 * 3. GetApp - /secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/apps/{app_name}
 * 4. GetAppSecret - /secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/apps/{app_name}/secrets/{secret_name}
 * 5. CreateAwsSmSyncIntegration - /secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/sync/aws-sm
 *
 * We truncate these paths to remove their common prefix, leaving us with:
 *
 * 1. ListApps - /apps
 * 2. CreateApp - /apps
 * 3. GetApp - /apps/{app_name}
 * 4. GetAppSecret - /apps/{app_name}/secrets/{secret_name}
 * 5. CreateAwsSmSyncIntegration - /sync/aws-sm
 *
 * Then, we use the **first two path segments** to group the operations,
 * yielding something like the following::
 *
 * {
 *	  '/apps': {
 *		  heading: '/apps',
 *		  items: [ 'ListApps', 'CreateApp' ]
 *	  },
 *	  '/apps/{app_name}': {
 *		  heading: '/apps/{app_name}',
 *		  items: [ 'GetApp', 'GetAppSecret' ]
 *	  },
 *	  '/sync/aws-sm': {
 *		  heading: '/sync/aws-sm',
 *		  items: [ 'CreateAwsSmSyncIntegration' ]
 *	  },
 * }
 */ function groupOperations(operationObjects, groupOperationsByPath) {
    // Group operations, either by tags where specified, or automatically by paths
    // or by their paths otherwise.
    const operationGroupsMap = operationObjects.reduce((acc, o)=>{
        /**
			 * Determine the grouping slug for this operation.
			 *
			 * If path-based grouping has been specified, we ignore tags and group
			 * based on the operation URL paths (truncated to remove common parts).
			 *
			 * If tag-based grouping is used, note that we may need to fall back
			 * to an "Other" tag for potentially untagged operations.
			 */ let groupSlug;
        if (groupOperationsByPath) {
            groupSlug = o.path.truncated.split("/").slice(0, 3).join("/");
        } else {
            groupSlug = (o.tags.length && o.tags[0]) ?? "Other";
        }
        if (!acc[groupSlug]) {
            acc[groupSlug] = {
                heading: (0,_add_word_breaks_to_url__WEBPACK_IMPORTED_MODULE_0__/* .addWordBreaksToUrl */ .t)(groupSlug),
                items: []
            };
        }
        acc[groupSlug].items.push(o);
        return acc;
    }, {});
    return Object.values(operationGroupsMap);
}


/***/ }),

/***/ 90031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EJ": () => (/* reexport safe */ _truncate_hcp_operation_path__WEBPACK_IMPORTED_MODULE_8__.E),
/* harmony export */   "Ft": () => (/* reexport safe */ _parse_and_validate_schema__WEBPACK_IMPORTED_MODULE_7__.F),
/* harmony export */   "KQ": () => (/* reexport safe */ _group_operations__WEBPACK_IMPORTED_MODULE_6__.K),
/* harmony export */   "LZ": () => (/* reexport safe */ _get_response_data__WEBPACK_IMPORTED_MODULE_5__.L),
/* harmony export */   "QK": () => (/* reexport safe */ _get_version_switcher_props__WEBPACK_IMPORTED_MODULE_9__.Q),
/* harmony export */   "rT": () => (/* reexport safe */ _get_nav_items__WEBPACK_IMPORTED_MODULE_1__.r),
/* harmony export */   "sL": () => (/* reexport safe */ _get_request_data__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "vP": () => (/* reexport safe */ _find_default_version__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "y8": () => (/* reexport safe */ _get_operation_props__WEBPACK_IMPORTED_MODULE_2__.y)
/* harmony export */ });
/* harmony import */ var _find_default_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89765);
/* harmony import */ var _get_nav_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80619);
/* harmony import */ var _get_operation_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6125);
/* harmony import */ var _get_property_detail_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34357);
/* harmony import */ var _get_request_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1329);
/* harmony import */ var _get_response_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40300);
/* harmony import */ var _group_operations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90127);
/* harmony import */ var _parse_and_validate_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23625);
/* harmony import */ var _truncate_hcp_operation_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74524);
/* harmony import */ var _get_version_switcher_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_get_operation_props__WEBPACK_IMPORTED_MODULE_2__, _get_property_detail_props__WEBPACK_IMPORTED_MODULE_3__, _get_request_data__WEBPACK_IMPORTED_MODULE_4__, _get_response_data__WEBPACK_IMPORTED_MODULE_5__]);
([_get_operation_props__WEBPACK_IMPORTED_MODULE_2__, _get_property_detail_props__WEBPACK_IMPORTED_MODULE_3__, _get_request_data__WEBPACK_IMPORTED_MODULE_4__, _get_response_data__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ parseAndValidateOpenApiSchema)
});

;// CONCATENATED MODULE: external "oas-normalize"
const external_oas_normalize_namespaceObject = require("oas-normalize");
var external_oas_normalize_default = /*#__PURE__*/__webpack_require__.n(external_oas_normalize_namespaceObject);
;// CONCATENATED MODULE: ./src/views/open-api-docs-view/utils/parse-and-validate-schema.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given a fileString representing an OpenAPI schema specification,
 * Return a parsed and validated OpenAPIV3 document.
 *
 * Note that there are multiple possible versions of OpenAPI schemas we
 * may receive as input here. We use the `oas-normalize` package to
 * convert the input to the latest version, and then dereference the
 * schema to resolve any `$ref` references.
 *
 * TODO: not sure if we're actually handling circular references here.
 * This is something we'll likely need to look into for Waypoint API docs.
 * Task: https://app.asana.com/0/1202097197789424/1203989531295664/f
 *
 * The input OpenAPI specification can be in any of the following versions:
 * - OpenAPI 2.0 (formerly known as Swagger)
 * - OpenAPI 3.0
 *
 * Note as well  that the terminology associated with OpenAPI can be confusing.
 * From the OpenAPI website:
 * OpenAPI refers to the specification itself.
 * Swagger refers to tooling for implementing the specification.
 *
 * However, this isn't always consistent, and Swagger is often used to refer
 * to the specification as well, as that's how it was known for version 2.0.
 */ async function parseAndValidateOpenApiSchema(fileString) {
    // Parse and validate the file string, and up-convert to OpenAPI 3.0
    const rawSchemaJson = await new (external_oas_normalize_default())(fileString).validate({
        convertToLatest: true
    });
    /**
	 * Dereference the schema.
	 *
	 * For context, in OpenAPI schemas, there are often pointers or references
	 * to shared definitions within the schema. In JSON, these might look like:
	 *
	 * "schema": {
	 * 		"$ref": "#/definitions/..."
	 * }
	 *
	 * Example: https://github.com/hashicorp/hcp-specs/blob/e65c7e982b65ce408ab7e456049a4bf3d5fa7ce0/specs/cloud-vault-secrets/preview/2023-06-13/hcp.swagger.json#L28
	 *
	 * With the full schema file available, these references can be resolved
	 * by looking up the referenced definition and replacing the reference.
	 * For our purposes, it seems preferable to resolve these references
	 * so that we can pass data to presentational components that do not need
	 * to be aware of the full schema file in order to render the data.
	 * After de-referencing, the schema might look like:
	 *
	 * "schema": {
	 * 		"type": "object",
	 * 		"properties": {
	 * 			"some-referenced-stuff": "..."
	 * 		}
	 * }
	 */ const schemaJson = await new (external_oas_normalize_default())(rawSchemaJson).deref();
    // Return the dereferenced schema.
    // We know it's OpenAPI 3.0, so we cast it to the appropriate type.
    return schemaJson;
}


/***/ }),

/***/ 77948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ splitOnCapitalLetters)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Split a string on capital letters, returning an array of strings.
 *
 * Works kind of like `string.split()`, but splits on capital letters only.
 */ function splitOnCapitalLetters(str) {
    const lowerCased = str.toLowerCase();
    const result = [];
    let buffer = "";
    for(let i = 0; i < str.length; i++){
        /**
		 * If we have a lowercase character, add it to the buffer.
		 * If we have an uppercase character, add the buffer to the result,
		 * and reset the buffer.
		 */ const isLowerCase = str[i] === lowerCased[i];
        if (isLowerCase) {
            buffer += str[i];
        } else {
            result.push(buffer);
            buffer = str[i];
        }
    }
    // Append any stray buffer, if it's non-empty
    if (buffer !== "") {
        result.push(buffer);
    }
    // Return the array of strings
    return result;
}


/***/ }),

/***/ 74524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ truncateHcpOperationPath)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Specific HCP service paths start with the service name,
 * followed by a date-based version number,
 * and always include "organization" and "project" parameters.
 *
 * We remove all of this prefix from the path for better grouping
 * of operations within the specific spec.
 *
 * @example `/secrets/2023-06-13/organizations/{organization_id}/projects/{project_id}/apps`
 * Or more generically:
 * `/<service>/<version>/organizations/{organization_id}/projects/{project_id}`
 */ const SPECIFIC_SERVICE_PATTERN = /(\/[a-z]*\/\d\d\d\d-\d\d-\d\d\/organizations\/\{[a-z_.]*\}\/projects\/\{[a-z_.]*\})/;
/**
 * Global HCP service paths start with the service name,
 * and always include "organization" and "project" parameters.
 *
 * We remove the version prefix from the path for better grouping.
 *
 * @example "/2022-02-15/some-global-service/{parameter}/etc"
 * Or more generically:
 * `/<version>/...(anything)`
 */ const GLOBAL_SERVICE_PATTERN = /\/\d\d\d\d-\d\d-\d\d/;
/**
 * Truncates HCP operation paths for clarity.
 *
 * TODO: this is a first cut at grouping for our initial implementation.
 * We'll almost certainly want something like this, but needs may change.
 *
 * Normally OpenAPI spec operations are organized into services using "tags",
 * but HCP itself is our top-level spec... so each individual spec file is often
 * tagged as a single service (eg "SecretService" for HCP Vault Secrets), with
 * all operations in the file falling under that single service.
 *
 * A better approach to some kind of nested tag-based grouping may be worth
 * exploring. For example, maybe there's some what to tag subgroups of
 * operations, eg "AppService", "AwsSmSyncIntegrationService", and so on
 * might be examples of subgroups within the HCP Vault Secrets "SecretService".
 * Ref: https://github.com/hashicorp/hcp-specs/blob/main/specs/cloud-vault-secrets/preview/2023-06-13/hcp.swagger.json
 *
 * For now, we at least use it to help group operations by their path,
 * as grouping only really makes sense if we remove the extended prefix.
 */ function truncateHcpOperationPath(path) {
    return path.replace(SPECIFIC_SERVICE_PATTERN, "").replace(GLOBAL_SERVICE_PATTERN, "");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8185], () => (__webpack_exec__(43669)));
module.exports = __webpack_exports__;

})();