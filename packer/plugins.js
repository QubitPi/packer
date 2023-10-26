"use strict";
(() => {
var exports = {};
exports.id = 9350;
exports.ids = [9350];
exports.modules = {

/***/ 27512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ 43859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 55468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var views_docs_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4758);
/* harmony import */ var views_docs_view_utils_get_root_docs_path_generation_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99952);
/* harmony import */ var views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92921);
/* harmony import */ var layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5220);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_docs_view__WEBPACK_IMPORTED_MODULE_0__, views_docs_view_utils_get_root_docs_path_generation_functions__WEBPACK_IMPORTED_MODULE_1__, views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_3__]);
([views_docs_view__WEBPACK_IMPORTED_MODULE_0__, views_docs_view_utils_get_root_docs_path_generation_functions__WEBPACK_IMPORTED_MODULE_1__, views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__, layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
// Imports below are used server-side




/**
 * Path relative to the `website` directory of the Packer GitHub repo.
 *
 * Note that these are not currently used, as we don't yet support local
 * preview for the dev dot UI. They've been retained to avoid too
 * broad of a refactor to utilities shared with dot-io (where local
 * preview is actively supported).
 */ const remotePluginsFile = "data/plugins-manifest.json";
const contentBranch = "stable-website";
/**
 * Since this /plugins landing page does use content from our API,
 * we can use the same getStaticProps function as all other Dev Dot docs routes,
 * with some modifications for the sidebar data.
 *
 * Note: this means we end up sourcing the .mdx for this page from
 * the latest content according to our content API. This is not
 * guaranteed to match the `contentBranch` we use for remote plugins data.
 */ const { getStaticProps: baseGetStaticProps  } = (0,views_docs_view_utils_get_root_docs_path_generation_functions__WEBPACK_IMPORTED_MODULE_1__/* .getRootDocsPathGenerationFunctions */ .w)("packer", "plugins", {
    hideVersionSelector: true
});
/**
 * We tack on some extra plugin data to the result of the base getStaticProps,
 * in order to get the sidebar on this page showing links to all remote plugins.
 */ async function getStaticProps(ctx) {
    const staticProps = await baseGetStaticProps({
        params: {},
        ...ctx
    });
    /**
	 * Merge in remote plugin data sidebar items
	 */ if ("props" in staticProps) {
        // Partial nav data is provided from base getStaticProps, in menuItems
        const partialNavData = staticProps.props.layoutProps.sidebarNavDataLevels[2].menuItems;
        let rawNavData = partialNavData;
        if (!(0,lib_env_checks__WEBPACK_IMPORTED_MODULE_4__.isDeployPreview)() || (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_4__.isDeployPreview)("packer")) {
            // Fetch and merge in remote plugins nav data with the partialNavData
            rawNavData = await (0,views_packer_plugins_server__WEBPACK_IMPORTED_MODULE_2__/* .appendRemotePluginsNavData */ .BL)(remotePluginsFile, partialNavData, "", contentBranch);
        }
        // Prepare nav data for client (such as adding `fullPath`)
        const { preparedItems: navData  } = await (0,layouts_sidebar_sidecar_utils_prepare_nav_data_for_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            basePaths: [
                "packer",
                "plugins"
            ],
            nodes: rawNavData
        });
        /**
		 * Replace our original navData with our prepared navData
		 *
		 * TODO: fix up types in prepareNavDataForClient related to
		 * MenuItem[] & EnrichedMenuItem[]. Currently, prepareNavDataForClient
		 * is returning MenuItem[] types, which are incompatible here
		 * with the required EnrichedMenuItem type, due to the use of
		 * optional properties rather than an intersection of more explicit
		 * and specific nav node types.
		 *
		 * Task to clean up MenuItem references:
		 * https://app.asana.com/0/1202097197789424/1202405210286689/f
		 */ staticProps.props.layoutProps.sidebarNavDataLevels[2].menuItems = navData;
        // Long-form content pages use a narrower main area width
        staticProps.props.layoutProps.mainWidth = "narrow";
    }
    /**
	 * Return the modified static props
	 */ return staticProps;
}
// Export getStatic functions

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_docs_view__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 76791:
/***/ ((module) => {

module.exports = require("@mdx-js/util");

/***/ }),

/***/ 16142:
/***/ ((module) => {

module.exports = require("@octokit/core");

/***/ }),

/***/ 48827:
/***/ ((module) => {

module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@reach/dialog");

/***/ }),

/***/ 9677:
/***/ ((module) => {

module.exports = require("@reach/portal");

/***/ }),

/***/ 80395:
/***/ ((module) => {

module.exports = require("@reach/tooltip");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 63844:
/***/ ((module) => {

module.exports = require("adm-zip");

/***/ }),

/***/ 38970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 51356:
/***/ ((module) => {

module.exports = require("bail");

/***/ }),

/***/ 41421:
/***/ ((module) => {

module.exports = require("ccount");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 57499:
/***/ ((module) => {

module.exports = require("collapse-white-space");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 10950:
/***/ ((module) => {

module.exports = require("extend");

/***/ }),

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 98076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 76675:
/***/ ((module) => {

module.exports = require("is-alphabetical");

/***/ }),

/***/ 61455:
/***/ ((module) => {

module.exports = require("is-alphanumeric");

/***/ }),

/***/ 93715:
/***/ ((module) => {

module.exports = require("is-buffer");

/***/ }),

/***/ 69893:
/***/ ((module) => {

module.exports = require("is-decimal");

/***/ }),

/***/ 20298:
/***/ ((module) => {

module.exports = require("is-whitespace-character");

/***/ }),

/***/ 80791:
/***/ ((module) => {

module.exports = require("is-word-character");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 54689:
/***/ ((module) => {

module.exports = require("longest-streak");

/***/ }),

/***/ 41197:
/***/ ((module) => {

module.exports = require("markdown-escapes");

/***/ }),

/***/ 73584:
/***/ ((module) => {

module.exports = require("markdown-table");

/***/ }),

/***/ 53625:
/***/ ((module) => {

module.exports = require("mdast-util-compact");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 23231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 70276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 57112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 74809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 82174:
/***/ ((module) => {

module.exports = require("parse-entities");

/***/ }),

/***/ 79103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3515:
/***/ ((module) => {

module.exports = require("remark-mdx");

/***/ }),

/***/ 13729:
/***/ ((module) => {

module.exports = require("repeat-string");

/***/ }),

/***/ 10912:
/***/ ((module) => {

module.exports = require("semver");

/***/ }),

/***/ 56563:
/***/ ((module) => {

module.exports = require("semver/functions/parse");

/***/ }),

/***/ 95370:
/***/ ((module) => {

module.exports = require("semver/functions/prerelease");

/***/ }),

/***/ 97326:
/***/ ((module) => {

module.exports = require("semver/functions/rsort");

/***/ }),

/***/ 61865:
/***/ ((module) => {

module.exports = require("semver/functions/valid");

/***/ }),

/***/ 50934:
/***/ ((module) => {

module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 67545:
/***/ ((module) => {

module.exports = require("state-toggle");

/***/ }),

/***/ 42214:
/***/ ((module) => {

module.exports = require("stringify-entities");

/***/ }),

/***/ 25325:
/***/ ((module) => {

module.exports = require("to-vfile");

/***/ }),

/***/ 32385:
/***/ ((module) => {

module.exports = require("trim");

/***/ }),

/***/ 41358:
/***/ ((module) => {

module.exports = require("trim-trailing-lines");

/***/ }),

/***/ 40969:
/***/ ((module) => {

module.exports = require("trough");

/***/ }),

/***/ 96784:
/***/ ((module) => {

module.exports = require("unherit");

/***/ }),

/***/ 68603:
/***/ ((module) => {

module.exports = require("unist-util-flatmap");

/***/ }),

/***/ 41925:
/***/ ((module) => {

module.exports = require("unist-util-map");

/***/ }),

/***/ 75295:
/***/ ((module) => {

module.exports = require("unist-util-remove-position");

/***/ }),

/***/ 33084:
/***/ ((module) => {

module.exports = require("vfile");

/***/ }),

/***/ 3465:
/***/ ((module) => {

module.exports = require("vfile-location");

/***/ }),

/***/ 5170:
/***/ ((module) => {

module.exports = require("xtend");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 23135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 60234:
/***/ ((module) => {

module.exports = import("unist-util-is");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,5675,3921,7864,1629,3613,4889,7752,5152,7806,9551,265,7232,4884,6182,2539,3592,3561,7360], () => (__webpack_exec__(55468)));
module.exports = __webpack_exports__;

})();