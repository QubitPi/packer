(() => {
var exports = {};
exports.id = 1086;
exports.ids = [1086];
exports.modules = {

/***/ 19051:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "card-link_root__z4SDk",
	"anchor": "card-link_anchor__2PMo1"
};


/***/ }),

/***/ 21771:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "docs-plain-page-heading_root__mXuB8 g-offset-scroll-margin-top"
};


/***/ }),

/***/ 88805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88918);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93265);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35643);
/* harmony import */ var _card_link_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19051);
/* harmony import */ var _card_link_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_card_link_module_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





const CardLink = ({ ariaLabel , children , className , href , onClick , opensInNewTab , "data-heap-track": dataHeapTrack  })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_card_link_module_css__WEBPACK_IMPORTED_MODULE_5___default().root), className);
    const target = opensInNewTab ? "_blank" : undefined;
    if (!ariaLabel) {
        (0,components_toast__WEBPACK_IMPORTED_MODULE_4__/* .developmentToast */ .GN)({
            color: components_toast__WEBPACK_IMPORTED_MODULE_4__/* .ToastColor.critical */ .PQ.critical,
            title: "Error in CardLink",
            description: "`CardLink` requires the `ariaLabel` prop in order to be announced by screen readers."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: classes,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                "aria-label": ariaLabel,
                className: (_card_link_module_css__WEBPACK_IMPORTED_MODULE_5___default().anchor),
                "data-heap-track": `card-link ${dataHeapTrack ?? ""}`,
                href: href,
                target: target,
                onClick: onClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-hidden": true,
                    children: "\xa0"
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardLink);


/***/ }),

/***/ 87570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Given an `isVersioned` boolean, if `true`, this component
 * renders a `noindex, nofollow` tag in `next/head`.
 *
 * Otherwise, if `isVersioned` is false, returns `null`.
 */ function NoIndexTagIfVersioned({ isVersioned  }) {
    if (isVersioned) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "noindex, nofollow"
            }, "robots")
        });
    }
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoIndexTagIfVersioned);


/***/ }),

/***/ 27512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const fetchFileString = __webpack_require__(27007);
const API_URL = "https://content.hashicorp.com" || 0;
const API_ASSETS = `/api/assets`;
async function fetchContentApiFileString({ product , filePath , version  }) {
    const [p, v, fp] = [
        product,
        version,
        filePath
    ].map(encodeURIComponent);
    const url = `${API_URL}${API_ASSETS}?product=${p}&version=${v}&asset=${fp}`;
    return await fetchFileString(url);
}
module.exports = fetchContentApiFileString;


/***/ }),

/***/ 27007:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
async function fetchFileString(url) {
    const res = await fetch(url);
    return res.text();
}
module.exports = fetchFileString;


/***/ }),

/***/ 67672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16142);
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_core__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_0__.Octokit({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchGithubFile);


/***/ }),

/***/ 32235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 43859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch_content_api_file_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27512);
/* harmony import */ var _fetch_content_api_file_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fetch_content_api_file_string__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
// TODO need to be able to include from remote...
// TODO this is a terrible patch in the meantime
async function shimRemoteIncludes(mdxString, productSlug, version, partialsDir = "website/content/partials") {
    return await replaceAsync(mdxString, /@include (?:"|')(.*)(?:"|')\n/g, async (match, matchedPath)=>{
        const includeFileString = await _fetch_content_api_file_string__WEBPACK_IMPORTED_MODULE_0___default()({
            product: productSlug,
            filePath: `${partialsDir}/${matchedPath}`,
            version
        });
        return `${includeFileString}\n`;
    });
}
/**
 * Given a string, regex, and async function,
 * Runs the regex replacement
 *
 * @param {string} str
 * @param {RegExp} regex
 * @param {*} asyncFn
 * @returns {Promise<string>}
 */ async function replaceAsync(str, regex, asyncFn) {
    const promises = [];
    str.replace(regex, (match, ...args)=>{
        const promise = asyncFn(match, ...args);
        promises.push(promise);
    });
    const data = await Promise.all(promises);
    return str.replace(regex, ()=>data.shift());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shimRemoteIncludes);


/***/ }),

/***/ 69832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var views_docs_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4758);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95655);
/* harmony import */ var views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92921);
/* harmony import */ var components_breadcrumb_bar_utils_get_docs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32749);
/* harmony import */ var layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5220);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46064);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_docs_add_branded_overview_sidebar_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52487);
/* harmony import */ var components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_docs_view__WEBPACK_IMPORTED_MODULE_0__, views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_4__]);
([views_docs_view__WEBPACK_IMPORTED_MODULE_0__, views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
// Imports below are only used server-side








const basePath = "plugins";
const baseName = "Plugins";
/**
 * Paths relative to the `website` directory of the Packer GitHub repo.
 *
 * Note that these are not currently used, as we don't yet support local
 * preview for the dev dot UI. They've been retained to avoid too
 * broad of a refactor to utilities shared with dot-io (where local
 * preview is actively supported).
 */ const remotePluginsFile = "data/plugins-manifest.json";
const navDataFile = `data/${basePath}-nav-data.json`;
const contentBranch = "stable-website";
const editBranch = "main";
async function getStaticPaths() {
    let paths = [];
    // Only generate static paths if we are not in a content deploy preview, or if we are in packer's content deploy preview
    if (!(0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)() || (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_6__.isDeployPreview)("packer")) {
        paths = await (0,views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__/* .generateStaticPaths */ .ch)({
            navDataFile,
            remotePluginsFile,
            mainBranch: contentBranch
        });
        paths = paths// remove index-ish pages from static paths
        .filter((p)=>p.params.page.filter(Boolean).length > 0)// limit number of paths to max_static_paths
        .slice(0, 9999 ?? 0);
    }
    return {
        paths,
        fallback: "blocking"
    };
}
async function getStaticProps({ params , ...ctx }) {
    /**
	 * Get product data
	 */ const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_1__/* .cachedGetProductData */ .i)("packer");
    /**
	 * Get static props for the page.
	 * Note that this function is intended for use with dot-io layouts,
	 * so we need to massage the data further before returning it
	 * for use on this Dev Dot view.
	 */ const props = await (0,views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__/* .generateStaticProps */ .a$)({
        localContentDir: `../content/${basePath}`,
        mainBranch: contentBranch,
        editBranch,
        navDataFile,
        params,
        product: {
            name: productData.name,
            slug: productData.slug
        },
        remotePluginsFile
    });
    /**
	 * If the params don't match an existing plugin, generateStaticProps
	 * above will return null. If a URL that doesn't match a plugin is
	 * visited, we want to ensure it returns a 404.
	 */ if (!props) {
        return {
            notFound: true
        };
    }
    /**
	 * Prepare nav data for client, eg adding `fullPath`
	 */ const { preparedItems: navData  } = await (0,layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        basePaths: [
            productData.slug,
            basePath
        ],
        nodes: props.navData
    });
    /**
	 * Constructs the levels of nav data.
	 */ const sidebarNavDataLevels = [
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_5__/* .generateTopLevelSidebarNavData */ .Vz)(productData.name),
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_5__/* .generateProductLandingSidebarNavData */ ._G)(productData),
        {
            backToLinkProps: {
                text: `${productData.name} Home`,
                href: `/${productData.slug}`
            },
            levelButtonProps: {
                levelUpButtonText: `${productData.name} Home`
            },
            menuItems: (0,lib_docs_add_branded_overview_sidebar_item__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(navData, {
                title: "Plugins",
                fullPath: `/${productData.slug}/plugins`,
                theme: productData.slug
            }),
            title: baseName,
            /* We always visually hide the title, as we've added in a
			"highlight" item that would make showing the title redundant. */ visuallyHideTitle: true
        }
    ];
    /**
	 * Construct breadcrumbs
	 */ const rawPathBreadcrumbs = (0,components_breadcrumb_bar_utils_get_docs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* .getPathBreadcrumbs */ .O)({
        basePath: `${productData.slug}/${basePath}`,
        navData,
        pathParts: params.page || []
    });
    /**
	 * Breadcrumb construction is based on the path parts in our URL.
	 * We are typically able to assume that the navData structure reflects
	 * URL structure, as this was an explicit goal when the current format
	 * of navData was introduced. However, for plugins this assumption
	 * does not hold - the sidebar is organized at the top level by
	 * plugin name (such as "AWS"), while our URL structure is organized
	 * at the top level by plugin type (such as "Builder").
	 *
	 * To account for this, we need to manually modify the breadcrumbs
	 * we generate using our shared method.
	 *
	 * Specifically, the second item in the array of path-based breadcrumbs
	 * should be the name of the plugin, NOT the name of the plugin type
	 * (which is what we'd get otherwise due to nav data structure).
	 * We make this modification below.
	 */ const pathBreadcrumbs = rawPathBreadcrumbs.map((item, idx)=>{
        if (idx == 1) {
            return {
                title: props.navNode.pluginData.title,
                key: props.navNode.pluginData.repo
            };
        }
        return item;
    });
    const breadcrumbLinks = [
        {
            title: "Developer",
            url: "/"
        },
        {
            title: productData.name,
            url: `/${productData.slug}`
        },
        {
            title: baseName,
            url: `/${productData.slug}/${basePath}`
        },
        ...pathBreadcrumbs
    ];
    /**
	 * Get the current root docs path entry, which is "plugins" of course.
	 * Note this likely isn't necessary, since these docs aren't versioned...
	 * But doing this anyways for consistency & simpler types.
	 */ const currentRootDocsPath = productData.rootDocsPaths.find((r)=>r.path === basePath);
    /**
	 * Assemble and return static  props for the view
	 */ const finalProps = {
        layoutProps: {
            breadcrumbLinks,
            githubFileUrl: props.githubFileUrl,
            /**
			 * TODO: we should likely try to avoid casting here, and instead ensure
			 * types are correct. Likely involves MenuItem[].
			 * Task: https://app.asana.com/0/1202097197789424/1202405210286689/f
			 */ sidebarNavDataLevels: sidebarNavDataLevels,
            // Long-form content pages use a narrower main area width
            mainWidth: "narrow"
        },
        outlineItems: (0,components_outline_nav_utils_outline_items_from_headings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(props.headings),
        metadata: {
            title: props.frontMatter.page_title ?? null,
            description: props.frontMatter.description ?? null
        },
        mdxSource: props.mdxSource,
        product: {
            ...productData,
            currentRootDocsPath
        }
    };
    return {
        props: finalProps,
        revalidate: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_docs_view__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14617);
/* harmony import */ var _docs_plain_page_heading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21771);
/* harmony import */ var _docs_plain_page_heading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docs_plain_page_heading_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function DocsPlainPageHeading({ id , title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: (_docs_plain_page_heading_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        id: id,
        level: 1,
        size: 600,
        weight: "bold",
        children: title
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsPlainPageHeading);


/***/ }),

/***/ 4758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38116);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_get_version_from_path__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62419);
/* harmony import */ var layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82482);
/* harmony import */ var components_dev_dot_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(543);
/* harmony import */ var components_no_index_tag_if_versioned__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87570);
/* harmony import */ var _components_docs_page_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17456);
/* harmony import */ var _utils_get_docs_mdx_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47016);
/* harmony import */ var _docs_view_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70024);
/* harmony import */ var _docs_view_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_docs_view_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_landing_hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35539);
/* harmony import */ var _components_docs_plain_page_heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9411);
/* harmony import */ var components_docs_version_switcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_4__]);
layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 













/**
 * Layouts
 *
 * Note: layout in frontmatter is not fully supported yet.
 * Asana task: https://app.asana.com/0/1202097197789424/1202850056121889/f
 *
 * Note: layout adjustments may make sense to adjust in `getStaticProps` logic,
 * rather than adjust during render. For example, this could could give us
 * more granular and efficient control over processing markdown and extracting
 * or replacing specific elements.
 * Task: https://app.asana.com/0/1202097197789424/1204069295311480/f
 *
 * For now, we're kind of imitating the proposed layouts-in-frontmatter approach
 * by setting `docs-root-landing` in `get-custom-layout.ts`, detecting that
 * here, and rendering a slightly different page heading as a result.
 */ function isDocsRootLandingLayout(layoutData) {
    return layoutData?.name === "docs-root-landing";
}
const DocsView = ({ metadata , mdxSource , versions , projectName , layoutProps , outlineItems , pageHeading  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const currentProduct = (0,contexts__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentProduct */ .j2)();
    const { compiledSource , scope  } = mdxSource;
    const docsMdxComponents = (0,_utils_get_docs_mdx_components__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(currentProduct.slug);
    /**
	 * Check if we have a `pageHeading` to render. The `DocsPageHeading` element
	 * is used on nearly all docs pages, to render a heading element alongside an
	 * optional version selector. On docs "landing" pages, the heading element
	 * takes on additional styles (see `LandingHero`).
	 *
	 * The one use case where we don't have this is for Packer plugin docs,
	 * which uses this `DocsView` component directly but uses `docs-view/server`
	 * indirectly, with some other modifications, such as adding badges above the
	 * page heading. Packer plugins MDX processing does _not_ remove the `<h1 />`
	 * from MDX content, so we do not want to render a duplicative
	 * `DocsPageHeading` `h1` element.
	 *
	 * The Packer plugins use case will fade away after Integrations work,
	 * at which point we can always safely render <DocsPageHeading />.
	 * Task: https://app.asana.com/0/1202097197789424/1204412156894157/f
	 */ const renderPageHeadingOutsideMdx = pageHeading?.id && pageHeading?.title;
    const hasLandingHero = isDocsRootLandingLayout(metadata.layout);
    // For `docs-root-landing` layouts, use <LandingHero /> as the heading element
    let headingSlot;
    if (hasLandingHero) {
        headingSlot = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_landing_hero__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            pageHeading: pageHeading,
            pageSubtitle: metadata?.layout?.subtitle
        });
    } else if (renderPageHeadingOutsideMdx) {
        headingSlot = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_docs_plain_page_heading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            id: pageHeading.id,
            title: pageHeading.title
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_docs_view_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...layoutProps,
        outlineItems: outlineItems,
        versions: versions,
        children: [
            renderPageHeadingOutsideMdx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_docs_page_heading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_docs_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().docsPageHeading), {
                    [(_docs_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().hasLandingHero)]: hasLandingHero
                }),
                versionSelectorSlot: versions && versions.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_version_switcher__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    options: versions,
                    projectName: projectName
                }) : null,
                headingSlot: headingSlot
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_no_index_tag_if_versioned__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isVersioned: !!(0,lib_get_version_from_path__WEBPACK_IMPORTED_MODULE_13__/* .getVersionFromPath */ .B)(asPath)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dev_dot_content__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                mdxRemoteProps: {
                    compiledSource,
                    scope,
                    components: {
                        ...docsMdxComponents,
                        wrapper: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_docs_view_module_css__WEBPACK_IMPORTED_MODULE_12___default().mdxContent),
                                ...props
                            })
                    }
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KQ": () => (/* reexport safe */ _utils_get_paths_from_nav_data__WEBPACK_IMPORTED_MODULE_4__.K),
/* harmony export */   "u3": () => (/* reexport safe */ _utils_get_node_from_path__WEBPACK_IMPORTED_MODULE_3__.u)
/* harmony export */ });
/* unused harmony exports getStaticGenerationFunctions, generateStaticPaths, generateStaticProps */
/* harmony import */ var _content_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87060);
/* harmony import */ var _file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);
/* harmony import */ var _remote_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91787);
/* harmony import */ var _utils_get_node_from_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25704);
/* harmony import */ var _utils_get_paths_from_nav_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74020);
/* harmony import */ var _utils_validate_nav_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19164);
/* harmony import */ var _hashicorp_react_docs_sidenav_utils_validate_file_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74297);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


// We currently export most utilities individually,
// since we have cases such as Packer remote plugin docs
// where we want to re-use these utilities to build
// getStaticPaths and getStaticProps functions that
// fall outside the use case of local-only content




function getStaticGenerationFunctions(opts) {
    let loader;
    switch(opts.strategy){
        default:
        case "fs":
            {
                const { strategy , ...restOpts } = opts;
                loader = new FileSystemLoader({
                    ...restOpts
                });
                break;
            }
        case "remote":
            {
                const { strategy: strategy1 , ...restOpts1 } = opts;
                loader = new RemoteContentLoader({
                    ...restOpts1
                });
            }
    }
    return {
        getStaticPaths: async (ctx)=>{
            const paths = await loader.loadStaticPaths(ctx);
            return {
                fallback: opts.fallback ?? "blocking",
                paths
            };
        },
        getStaticProps: async (ctx)=>{
            try {
                const props = await loader.loadStaticProps(ctx);
                return {
                    props,
                    revalidate: opts.revalidate
                };
            } catch (err) {
                console.error(`Failed to generate static props:`, err);
                if (err instanceof ContentApiError) {
                    if (err.status === 404) {
                        return {
                            notFound: true
                        };
                    }
                }
                throw err;
            }
        }
    };
}
/**
 * @deprecated Use getStaticGenerationFunctions instead
 */ function generateStaticPaths({ navDataFile , localContentDir , paramId , product , basePath  }) {
    const loader = new FileSystemLoader({
        navDataFile,
        localContentDir,
        product: product.slug,
        paramId
    });
    return loader.loadStaticPaths();
}
/**
 * @deprecated Use getStaticGenerationFunctions instead
 */ function generateStaticProps({ navDataFile , localContentDir , paramId , product , params , remarkPlugins , scope , mainBranch , githubFileUrl  }) {
    const loader = new FileSystemLoader({
        navDataFile,
        localContentDir,
        product: product.slug,
        paramId,
        scope,
        remarkPlugins,
        mainBranch,
        githubFileUrl
    });
    return loader.loadStaticProps({
        params
    });
}


/***/ }),

/***/ 27517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ fixupPackerPluginUrls)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Fixes up Packer plugin links that use an "old" URL format.
 *
 * For context, Packer plugins used to be served from "old" URLs like:
 * https://www.packer.io/docs/:type/<pluginName>
 * where `:type` is one of:
 * "builders", "datasources", "post-processor", "provisioners"
 * and `<pluginName>` is the name of the plugin repository.
 *
 * Before the move to Dev Dot, we separated external plugin docs
 * out from within `/docs` and gave them a dedicated "new" `/plugins` URL:
 * https://www.packer.io/plugins/:type/<pluginName>
 * So, in addition to the link correct that happens for Dev Dot
 * (which will happen *after* this function runs), for Packer plugins MDX,
 * we need to detect "old" plugin URLs and transform them to the "new" format.
 *
 * This function handles this "old" to "new" conversion.
 *
 * Note: previously, on packer.io, we used redirects to make this correction.
 * See `proxied-redirects/www.packer.io.redirects.js` at the root of this
 * repository for those redirects. These redirects still apply to packer.io,
 * but do not work for developer.hashicorp.com.
 */ function fixupPackerPluginUrls(url) {
    // We want to match /docs/:type/:pluginSlug URLs.
    const typesPart = `(${PACKER_PLUGIN_TYPES.join("|")})`;
    const slugPart = `(${PACKER_PLUGIN_SLUGS.join("|")})`;
    const pluginUrlRegex = new RegExp(`^\\/docs\\/${typesPart}\\/${slugPart}`);
    const isMatch = pluginUrlRegex.test(url);
    if (isMatch) {
        // If we have a match, replace /docs at the start with /plugins.
        return url.replace(/^\/docs/, "/plugins");
    } else {
        // If we don't have a match, no URLs should be harmed.
        return url;
    }
}
/**
 * A snapshot of the types of plugins from when Packer plugins
 * were served from the "old" URLS, nested under `/docs`.
 */ const PACKER_PLUGIN_TYPES = [
    "builders",
    "datasources",
    "post-processors",
    "provisioners"
];
/**
 * A snapshot of the plugin URLs from when Packer plugins
 * were served from the "old" URLS, nested under `/docs`.
 */ const PACKER_PLUGIN_SLUGS = [
    "alicloud",
    "amazon",
    "anka",
    "ansible",
    "azure",
    "chef",
    "cloudstack",
    "converge",
    "digitalocean",
    "docker",
    "git",
    "googlecompute",
    "hashicups",
    "hetzner-cloud",
    "huaweicloud",
    "hyperone",
    "hyperv",
    "inspec",
    "jdcloud",
    "kamatera",
    "linode",
    "lxc",
    "lxd",
    "ncloud",
    "oneandone",
    "openstack",
    "oracle",
    "outscale",
    "parallels",
    "profitbricks",
    "proxmox",
    "puppet",
    "qemu",
    "salt",
    "scaleway",
    "sshkey",
    "tencentcloud",
    "triton",
    "ucloud",
    "vagrant",
    "virtualbox",
    "vmware",
    "vsphere",
    "vultr",
    "yandex"
];


/***/ }),

/***/ 9444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fixupRedirectedPackerPlugins)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Fixes up Packer plugin links that use a redirected format
 * in the "old" URL format, before plugins were moved to `/plugins`.
 *
 * Note: previously, on packer.io, we used redirects to make this correction.
 * See `proxied-redirects/www.packer.io.redirects.js` at the root of this
 * repository for those redirects. These redirects still apply to packer.io,
 * but do not work for developer.hashicorp.com.
 */ function fixupRedirectedPackerPlugins(url) {
    // Run through find-and-replaces that represent former redirects
    const matchedFindReplace = PACKER_PLUGIN_REDIRECTS.find(({ find  })=>{
        return find.test(url);
    });
    // If there is a matched find and replace, run it
    if (matchedFindReplace) {
        const { find , replace  } = matchedFindReplace;
        const result = url.replace(find, replace);
        return result;
    } else {
        return url;
    }
}
/**
 * A snapshot of the plugin redirects from when Packer plugins
 * were served from the "old" URLS, nested under `/docs`.
 */ const PACKER_PLUGIN_REDIRECTS = [
    {
        find: /^\/docs\/builders\/amazon-(.*)/,
        replace: "/docs/builders/amazon/$1"
    },
    {
        find: /^\/docs\/builders\/azure-(.*)/,
        replace: "/docs/builders/azure/$1"
    },
    {
        find: /^\/docs\/builders\/hyperv-(.*)/,
        replace: "/docs/builders/hyperv/$1"
    },
    {
        find: /^\/docs\/builders\/oracle-(.*)/,
        replace: "/docs/builders/oracle/$1"
    },
    {
        find: /^\/docs\/builders\/osc-(.*)/,
        replace: "/docs/builders/outscale/$1"
    },
    {
        find: /^\/docs\/builders\/parallels-(.*)/,
        replace: "/docs/builders/parallels/$1"
    },
    {
        find: /^\/docs\/builders\/virtualbox-(.*)/,
        replace: "/docs/builders/virtualbox/$1"
    },
    {
        find: /^\/docs\/builders\/vmware-(.*)/,
        replace: "/docs/builders/vmware/$1"
    },
    {
        find: /^\/docs\/builders\/vsphere-(.*)/,
        replace: "/docs/builders/vmware/vsphere-$1"
    },
    {
        find: /^\/docs\/post-processors\/docker-(.*)/,
        replace: "/docs/post-processors/docker/docker-$1"
    }
];


/***/ }),

/***/ 92921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* reexport safe */ _utils_resolve_nav_data__WEBPACK_IMPORTED_MODULE_7__.B),
/* harmony export */   "a$": () => (/* binding */ generateStaticProps),
/* harmony export */   "ch": () => (/* binding */ generateStaticPaths)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docs_view_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67692);
/* harmony import */ var views_docs_view_render_page_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33195);
/* harmony import */ var lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66770);
/* harmony import */ var views_docs_view_utils_product_url_adjusters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51999);
/* harmony import */ var _utils_resolve_nav_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _utils_fetch_latest_release_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55555);
/* harmony import */ var _utils_fetch_latest_release_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_fetch_latest_release_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var data_packer_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33837);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57752);
/* harmony import */ var _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_rehype_code_plugins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68384);
/* harmony import */ var lib_shim_remote_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43859);
/* harmony import */ var _fixup_plugin_urls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27517);
/* harmony import */ var _fixup_redirected_plugin_urls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__]);
lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








// packer product data

// remark plugins

// rehype plugins

// alternative to the includeMarkdown plugin,
// which we need to shim cause of how we're fetching remote content here



async function generateStaticPaths({ navDataFile , remotePluginsFile , mainBranch ="main"  }) {
    const navData = await (0,_utils_resolve_nav_data__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(navDataFile, {
        remotePluginsFile,
        mainBranch
    });
    const paths = (0,_docs_view_loaders__WEBPACK_IMPORTED_MODULE_3__/* .getPathsFromNavData */ .KQ)(navData);
    return paths;
}
/**
 * Given page params for a Packer plugins URL,
 * Return static props for the plugin document in question,
 * or `null` if a document cannot be found.
 */ async function generateStaticProps({ localContentDir , mainBranch ="main" , editBranch =mainBranch , navDataFile , params , product , remotePluginsFile  }) {
    // Build the currentPath from page parameters
    const currentPath = params.page ? params.page.join("/") : "";
    // Resolve navData, including the possibility that this
    // page is a remote plugin docs, in which case we'll provide
    // the MDX fileString in the resolved navData
    const navData = await (0,_utils_resolve_nav_data__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(navDataFile, {
        remotePluginsFile,
        currentPath,
        mainBranch
    });
    // Attempt to match a navNode for this path.
    // Note that we may not be able to find a match, in which case we 404.
    let navNode;
    try {
        navNode = (0,_docs_view_loaders__WEBPACK_IMPORTED_MODULE_3__/* .getNodeFromPath */ .u3)(currentPath, navData, localContentDir);
    } catch (e) {
        const isNotFound = String(e).includes("Missing resource");
        if (isNotFound) {
            return null;
        } else {
            throw e;
        }
    }
    const { filePath , remoteFile , pluginData  } = navNode;
    //  Fetch the MDX file content
    const mdxString = remoteFile ? remoteFile.fileString : fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), filePath), "utf8");
    // Construct the githubFileUrl, used for "Edit this page" link
    // Note: we expect remote files, such as those used to render plugin docs,
    // to have a sourceUrl defined, that points to the file we built from.
    /**
	 * Updated note: now that we have all external plugins on a separate route,
	 * as well as a separate `index.tsx` page file for the only non-remote
	 * MDX file (the /plugins landing page), the second part of this conditional
	 * is not expected to be relevant. The `editBranch` logic has been added
	 * for completeness, it may not actually see real use.
	 */ const githubFileUrl = remoteFile ? remoteFile.sourceUrl : `https://github.com/hashicorp/${product.slug}/blob/${editBranch}/website/${filePath}`;
    // If this is a plugin, and if
    // the version has been specified as "latest",
    // determine the tag this corresponds to, so that
    // we can show this explicit version number in docs
    const latestReleaseTag = pluginData?.version === "latest" ? await _utils_fetch_latest_release_tag__WEBPACK_IMPORTED_MODULE_8___default()(pluginData.repo) : pluginData?.version;
    // For plugin pages, prefix the MDX content with a
    // label that reflects the plugin tier
    // (current options are "Official" or "Community")
    // and display whether the plugin is "HCP Packer Ready".
    // Also add a badge to show the latest version
    async function mdxContentHook(mdxContent) {
        const badgesMdx = [];
        // Add a badge for the plugin tier
        if (pluginData?.pluginTier) {
            badgesMdx.push(`<PluginBadge type="${pluginData.pluginTier}" />`);
        }
        // Add a badge if the plugin is "HCP Packer Ready"
        if (pluginData?.isHcpPackerReady) {
            badgesMdx.push(`<PluginBadge type="hcp_packer_ready" />`);
        }
        // If the plugin is archived, add an "Archived" badge
        if (pluginData?.archived == true) {
            badgesMdx.push(`<PluginBadge type="archived" />`);
        }
        // Add badge showing the latest release version number,
        // and link this badge to the latest release
        if (latestReleaseTag) {
            const href = `https://github.com/${pluginData.repo}/releases/tag/${latestReleaseTag}`;
            badgesMdx.push(`<Badge href="${href}" label="${latestReleaseTag}" theme="light-gray"/>`);
        }
        // If we have badges to add, inject them into the MDX
        if (badgesMdx.length > 0) {
            const badgeChildrenMdx = badgesMdx.join("");
            const badgesHeaderMdx = `<BadgesHeader>${badgeChildrenMdx}</BadgesHeader>`;
            mdxContent = badgesHeaderMdx + "\n\n" + mdxContent;
        }
        mdxContent = await (0,lib_shim_remote_includes__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(mdxContent, "packer", `refs/heads/${mainBranch}`);
        return mdxContent;
    }
    const { data , content: rawContent  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxString);
    // We manually construct the frontMatter property here since grayMatter
    // types data as { [key: string]: any } which doesn't satisfy the frontMatter
    // type for DocsPage which requires specific properties.
    const frontMatter = {
        ...data,
        canonical_url: data.canonical_url ?? null,
        description: data.description,
        page_title: data.page_title
    };
    const content = await mdxContentHook(rawContent);
    // Set up URL adjuster function
    const dotIoToDevDotUrlAdjuster = (0,views_docs_view_utils_product_url_adjusters__WEBPACK_IMPORTED_MODULE_6__/* .getProductUrlAdjuster */ .u)(data_packer_json__WEBPACK_IMPORTED_MODULE_9__);
    // Render MDX source, with options
    const headings = [] // populated by anchorLinks plugin below
    ;
    const mdxOptions = {
        remarkPlugins: [
            _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10__.typography,
            [
                _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10__.anchorLinks,
                {
                    headings
                }
            ],
            _hashicorp_remark_plugins__WEBPACK_IMPORTED_MODULE_10__.paragraphCustomAlerts,
            /**
				 * Rewrite docs content links, which are authored without prefix.
				 * For Packer plugins, we need to account for both plugin URL
				 * structure changes (which happened before the move to Dev Dot,
				 * but have not yet been updated in source), as well as for
				 * the usual dot-io-to-dev-dot transformations we run for
				 * all other products.
				 */ [
                lib_remark_plugins_remark_plugin_adjust_link_urls__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                {
                    urlAdjustFn: (url)=>{
                        const withSpecificFixes = (0,_fixup_redirected_plugin_urls__WEBPACK_IMPORTED_MODULE_13__/* .fixupRedirectedPackerPlugins */ ._)(url);
                        const withAllFixes = (0,_fixup_plugin_urls__WEBPACK_IMPORTED_MODULE_14__/* .fixupPackerPluginUrls */ .z)(withSpecificFixes);
                        return dotIoToDevDotUrlAdjuster(withAllFixes);
                    }
                }
            ]
        ],
        rehypePlugins: lib_rehype_code_plugins__WEBPACK_IMPORTED_MODULE_11__/* .rehypeCodePlugins */ .j
    };
    const { mdxSource  } = await (0,views_docs_view_render_page_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(content, mdxOptions);
    return {
        currentPath,
        frontMatter,
        mdxSource,
        githubFileUrl,
        navData,
        navNode,
        headings,
        versions: []
    };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const fetch = __webpack_require__(74809);
/**
 * @param {string} repo
 * @returns {Promise<string|boolean>}
 */ async function fetchLatestReleaseTag(repo) {
    const latestReleaseUrl = `https://github.com/${repo}/releases/latest`;
    let res = await fetch(latestReleaseUrl, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    });
    if (res.status !== 200) {
        console.error(`failed to fetch: ${latestReleaseUrl}`, res.status, res.statusText);
        if (res.status === 429) {
            console.error("GitHub API rate limit exceeded: Double check that a `GITHUB_TOKEN` environment variable is set.");
        }
        return false;
    }
    const matches = res.url.match(/tag\/(.*)/);
    if (!matches) {
        console.error(`failed to parse tag from: ${res.url}`);
        return false;
    }
    return matches[1];
}
module.exports = fetchLatestReleaseTag;


/***/ }),

/***/ 85505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ appendRemotePluginsNavData),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_platform_packer_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19551);
/* harmony import */ var lib_fetch_github_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67672);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




// An array of plugins that have been migrated over from
// the Plugin Portal to the Integrations library. Adding
// a plugins 'path' to this array will make it so it will
// no longer render in the Plugin portal.
//
// This is a little duplicative of our redirects, but really
// we only need this to work until we migrate the remaining
// plugins to the integrations library before we can delete
// this entire Packer Plugin portion of the codebase.
const migratedPlugins = [
    "alicloud",
    "amazon",
    "ansible",
    "azure",
    "chef",
    "cloudstack",
    "converge",
    "docker",
    "googlecompute",
    "hashicups",
    "hetzner-cloud",
    "hyperone",
    "hyperv",
    "inspec",
    "jdcloud",
    "lxc",
    "lxd",
    "ncloud",
    "oneandone",
    "openstack",
    "oracle",
    "parallels",
    "profitbricks",
    "proxmox",
    "puppet",
    "qemu",
    "salt",
    "tencentcloud",
    "triton",
    "vagrant",
    "virtualbox",
    "vmware",
    "vsphere",
    "yandex"
];
/**
 * Resolves nav-data from file with
 * resolution of remote plugin docs entries
 *
 * @param {string} navDataFile path to the nav-data.json file, relative to the `website` directory of the Packer GitHub repo. Example: "data/docs-nav-data.json".
 * @param {object} options optional configuration object
 * @param {string} options.remotePluginsFile path to a remote-plugins.json file, relative to the website directory of the Packer repo. Example: "data/docs-remote-plugins.json".
 * @param {string} options.mainBranch the main branch of the `hashicorp/packer` repo. This will be the default branch from which remote plugins and nav data will be fetched. Note that we will first see if Packer has a `getBetaLatestVersionRef` assigned (such as `dev-portal`) if so, that ref will be used instead.
 * @param {string} [options.currentPath] the path of the page that's invoking this function
 * @returns {Promise<array>} the resolved navData. This includes NavBranch nodes pulled from remote plugin repositories, as well as filePath properties on all local NavLeaf nodes, and remoteFile properties on all NavLeafRemote nodes.
 */ async function resolveNavDataWithRemotePlugins(navDataFile, options = {}) {
    const { remotePluginsFile , currentPath , mainBranch  } = options;
    let navDataContent;
    if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_4__.isDeployPreview)("packer")) {
        // When running in the context of hashicorp/packer, attempt to load the local file
        navDataContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "..", navDataFile));
    } else {
        navDataContent = await (0,lib_fetch_github_file__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            owner: "hashicorp",
            repo: "packer",
            path: path__WEBPACK_IMPORTED_MODULE_0___default().join("website", navDataFile),
            ref: mainBranch
        });
    }
    let navData = JSON.parse(navDataContent);
    return await appendRemotePluginsNavData(remotePluginsFile, navData, currentPath);
}
async function appendRemotePluginsNavData(remotePluginsFile, navData, currentPath, mainBranch = "main") {
    // Read in and parse the plugin configuration JSON
    let remotePluginsContent;
    if ((0,lib_env_checks__WEBPACK_IMPORTED_MODULE_4__.isDeployPreview)("packer")) {
        // When running in the context of hashicorp/packer, attempt to load the local file
        remotePluginsContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "..", remotePluginsFile));
    } else {
        remotePluginsContent = await (0,lib_fetch_github_file__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            owner: "hashicorp",
            repo: "packer",
            path: path__WEBPACK_IMPORTED_MODULE_0___default().join("website", remotePluginsFile),
            ref: mainBranch
        });
    }
    const pluginEntries = JSON.parse(remotePluginsContent).filter((entry)=>{
        // Filter out integrations
        if (migratedPlugins.includes(entry.path)) {
            return false;
        }
        return true;
    });
    // Add navData for each plugin's component.
    // Note that leaf nodes include a remoteFile property object with the full MDX fileString
    const pluginEntriesWithFiles = await (0,_hashicorp_platform_packer_plugins__WEBPACK_IMPORTED_MODULE_2__/* .resolvePluginDocs */ .B)(pluginEntries);
    const navDataFromPluginEntries = await Promise.all(pluginEntriesWithFiles.map(async (entry)=>await transformPluginEntriesToNavData(entry, currentPath)));
    const titleMap = {
        builders: "Builders",
        provisioners: "Provisioners",
        "post-processors": "Post-Processors",
        datasources: "Data Sources"
    };
    return navData.concat(navDataFromPluginEntries.map((entry)=>{
        return {
            title: entry.title,
            routes: Object.entries(entry.components).map(([type, componentList])=>{
                return {
                    title: titleMap[type],
                    // Flat map to avoid ┐
                    // > Proxmox         │
                    //   > Builders      │
                    //     > Proxmox <---┘
                    //       > Overview
                    //       > Clone
                    //       > ISO
                    routes: componentList.flatMap((c)=>{
                        if ("path" in c) {
                            return c;
                        } else if ("routes" in c) {
                            return c.routes;
                        }
                    })
                };
            })
        };
    }));
}
// Transform each plugin's array of .mdx files into navData.
// Organize this navData by component, add it to the plugin config entry,
// and return the modified entry.
//
// Note that navData leaf nodes have a special remoteFile property,
// which contains { filePath, fileString } data for the remote
// plugin doc .mdx file
async function transformPluginEntriesToNavData(pluginConfigEntry, currentPath) {
    const { title , path: slug , files  } = pluginConfigEntry;
    const sortedFiles = [
        ...files
    ].sort((a, b)=>{
        // ensure casing does not affect ordering
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        // (exception: "Overview" comes first)
        if (aTitle === "overview") {
            return -1;
        }
        if (bTitle === "overview") {
            return 1;
        }
        return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
    });
    const navNodes = sortedFiles.map(({ title , path , ...file })=>({
            title,
            path,
            remoteFile: {
                ...file
            },
            pluginData: {
                ...pluginConfigEntry,
                files: []
            }
        }));
    // Bucket each node by type
    const navNodesByComponent = navNodes.reduce((acc, navLeaf)=>{
        const componentType = navLeaf.remoteFile.filePath.split("/")[1];
        if (!acc[componentType]) {
            acc[componentType] = [];
        }
        acc[componentType].push(navLeaf);
        return acc;
    }, {});
    //
    const components = Object.keys(navNodesByComponent).map((type)=>{
        // Plugins many not contain every component type,
        // we return null if this is the case
        const rawNavNodes = navNodesByComponent[type];
        if (!rawNavNodes) {
            return null;
        }
        // Avoid unnecessary nesting if there's only a single doc file
        const navData = normalizeNavNodes(title, rawNavNodes);
        // Prefix paths to fit into broader docs nav-data
        const pathPrefix = path__WEBPACK_IMPORTED_MODULE_0___default().join(type, slug);
        const withPrefixedPaths = visitNavLeaves(navData, (n)=>{
            const prefixedPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(pathPrefix, n.path);
            return {
                ...n,
                path: prefixedPath
            };
        });
        // If currentPath is provided, then remove the remoteFile
        // from all nodes except the currentPath. This ensures we deliver
        // only a single fileString in our getStaticProps JSON.
        // Without this optimization, we would send all fileStrings
        // for all NavLeafRemote nodes
        const withOptimizedFileStrings = visitNavLeaves(withPrefixedPaths, (n)=>{
            if (!n.remoteFile) {
                return n;
            }
            const noCurrentPath = typeof currentPath === "undefined";
            const isPathMatch = currentPath === n.path;
            if (noCurrentPath || isPathMatch) {
                return n;
            }
            const { filePath  } = n.remoteFile;
            return {
                ...n,
                remoteFile: {
                    filePath
                }
            };
        });
        // Return the component, with processed navData
        return {
            type,
            navData: withOptimizedFileStrings
        };
    });
    const componentsObj = components.reduce((acc, component)=>{
        if (!component) {
            return acc;
        }
        acc[component.type] = component.navData;
        return acc;
    }, {});
    return {
        ...pluginConfigEntry,
        files: [],
        components: componentsObj
    };
}
// For components with a single doc file, transform so that
// a single leaf node renders, rather than a nav branch
function normalizeNavNodes(pluginName, routes) {
    const isSingleLeaf = routes.length === 1 && typeof routes[0].path !== "undefined";
    const navData = isSingleLeaf ? [
        {
            ...routes[0],
            path: ""
        }
    ] : [
        {
            title: pluginName,
            routes
        }
    ];
    return navData;
}
// Traverse a clone of the given navData,
// modifying any NavLeaf nodes with the provided visitFn
function visitNavLeaves(navData, visitFn) {
    return navData.slice().map((navNode)=>{
        if (typeof navNode.path !== "undefined") {
            return visitFn(navNode);
        }
        if (navNode.routes) {
            return {
                ...navNode,
                routes: visitNavLeaves(navNode.routes, visitFn)
            };
        }
        return navNode;
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveNavDataWithRemotePlugins);


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

/***/ 16142:
/***/ ((module) => {

"use strict";
module.exports = require("@octokit/core");

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

/***/ 63844:
/***/ ((module) => {

"use strict";
module.exports = require("adm-zip");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,1960,1419,1023,998,5675,3921,7864,1629,3613,4889,7752,5152,7806,9551,265,7232,4884,2539,3592,3561], () => (__webpack_exec__(69832)));
module.exports = __webpack_exports__;

})();