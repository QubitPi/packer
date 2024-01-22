"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 41046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const productLayoutDict = {
    sentinel: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7708), __webpack_require__.e(2851), __webpack_require__.e(9486), __webpack_require__.e(607), __webpack_require__.e(2164)]).then(__webpack_require__.bind(__webpack_require__, 2164)), {
        loadableGenerated: {
            modules: [
                "../layouts/_proxied-dot-io/dict.js -> " + "layouts/_proxied-dot-io/sentinel"
            ]
        }
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productLayoutDict);


/***/ }),

/***/ 55033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ productConfig)
/* harmony export */ });
/* harmony import */ var data_boundary_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40731);
/* harmony import */ var data_consul_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6468);
/* harmony import */ var data_nomad_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67355);
/* harmony import */ var data_packer_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33837);
/* harmony import */ var data_sentinel_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55423);
/* harmony import */ var data_vagrant_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20110);
/* harmony import */ var data_vault_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17533);
/* harmony import */ var data_waypoint_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97551);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







/**
 * NOTE: this file previously contained `rivet` client configuration
 * that allowed us to fetch data from Dato for dot-io sites.
 * Dot-io sites have since been migrated to the `hashicorp/web` monorepo,
 * so the Dato CMS related code was removed from this file.
 *
 * The typed `productConfig` in this file is still used in one place,
 * in our `_error` page.
 *
 * TODO: clean up use of `{ productConfig }` named export from this file,
 * maybe renaming this file (`product-config-dictionary`?) or doing something
 * like an `fs` read of the `.json` data (maybe even validating with `zod`)
 * rather than exporting a heavy-ish dictionary with *all* product data?
 */ const productConfig = [
    data_boundary_json__WEBPACK_IMPORTED_MODULE_0__,
    data_consul_json__WEBPACK_IMPORTED_MODULE_1__,
    data_nomad_json__WEBPACK_IMPORTED_MODULE_2__,
    data_packer_json__WEBPACK_IMPORTED_MODULE_3__,
    data_sentinel_json__WEBPACK_IMPORTED_MODULE_4__,
    data_vagrant_json__WEBPACK_IMPORTED_MODULE_5__,
    data_vault_json__WEBPACK_IMPORTED_MODULE_6__,
    data_waypoint_json__WEBPACK_IMPORTED_MODULE_7__
].reduce((a, b)=>{
    a[b.slug] = b;
    return a;
}, {});
// export default instance



/***/ }),

/***/ 71732:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28248);
/* harmony import */ var components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12925);
/* harmony import */ var layouts_proxied_dot_io_dict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41046);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var views_error_view_switcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73861);
/* harmony import */ var lib_cms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55033);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14684);
/* harmony import */ var constants_hostname_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_error_view_switcher__WEBPACK_IMPORTED_MODULE_5__]);
([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_error_view_switcher__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





// product data, needed to render top navigation



function Error({ statusCode , proxiedProductSlug  }) {
    // Unlike other pages, we can't use redirects and rewrites
    // to display proxied .io domain 404 pages on specific hosts.
    // Instead, we must use getServerSideProps to determine which
    // layout to show at request time.
    // ---
    // This isn't as efficient as it could be.
    // A possible alternative may be to set specific branches
    // on each proxied domain via Vercel's domain configuration.
    // These branches would be completely identical to `main`...
    // which seems inconvenient, having so many identical branches...
    // BUT this setup would allow us to determine AT BUILD TIME
    // whether we need to show a proxied product layout. We would
    // know from Vercel's GIT_COMMIT_REF System Environment Variable
    // (https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables)
    // which unlike `host` or `hostname` is accessible at build-time
    // and does not require getServerSideProps to determine.
    // (we could use getStaticProps instead, and we could therefore
    // have a separate, static 404 page, which had to be replaced with
    // a server-generated 404 in order to enable per-product layouts).
    // ---
    // If we were to take the above approach, with separate branches
    // per proxied domain, our workflows could still be the same:
    // everything production would be on main, and we'd do all work
    // on main.
    // To achieve this workflow parity, we would need to:
    // - implement a GitHub action workflow, that, on commits to `main`,
    //   would automatically sync all "proxied product branches" to hard-reset
    //   them to `main`. (One way sync: `main` >> `proxied-{product}`)
    // - add branch protection on all `proxied-{product}` branches. Since
    //   we'd be syncing them one way, constantly overwriting them with
    //   the latest work in `main`, we would want to ensure folks don't
    //   accidentally push work that they intend to deploy to these branches.
    // In addition, if we went this direction, we could also consider
    // using the same GIT_COMMIT_REF strategy for redirects. Rather than
    // having a host-specific `has` condition on redirects and rewrites,
    // we would instead generate specific sets of redirects based on the
    // whether the current branch is a specific `proxied-{product}` branch.
    const ProxiedLayout = layouts_proxied_dot_io_dict__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z[proxiedProductSlug];
    const isProxiedDotIo = Boolean(ProxiedLayout);
    const Layout = isProxiedDotIo ? ProxiedLayout : (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            ...props,
            mobileMenuSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_error_view_switcher__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            statusCode: statusCode,
            isProxiedDotIo: isProxiedDotIo
        })
    });
}
async function getServerSideProps(ctx) {
    const { req , res , err  } = ctx;
    // Determine which layout to use, may be dev-portal's base layout,
    // or may be a proxied product layout, depending on the URL host
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    // In preview environments, we can force the app into a certain .io mode with the hc_dd_proxied_site cookie
    const ioPreviewProduct =  false ? 0 : null;
    const proxiedProductSlug = ioPreviewProduct ?? (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_4__.getProxiedProductSlug)(urlObj.hostname);
    // Determine which statusCode to show
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    if (statusCode === 404) {
        // cache 404 for one day
        res.setHeader("Cache-Control", "s-maxage=86400");
    }
    /**
	 * Determine the product context, in order to render the correct
	 * navigation header on the dev-dot 404 page.
	 */ let productSlug;
    if (proxiedProductSlug) {
        productSlug = proxiedProductSlug;
    } else {
        const pathParts = urlObj.pathname.split("/");
        const maybeProductSlug = pathParts.length > 1 && pathParts[1];
        productSlug = (0,lib_products__WEBPACK_IMPORTED_MODULE_7__/* .isProductSlug */ .lF)(maybeProductSlug) ? maybeProductSlug : null;
    }
    // We need the whole product data (eg for top nav), not just the slug
    const product = lib_cms__WEBPACK_IMPORTED_MODULE_6__/* .productConfig */ .f[productSlug] || null;
    return {
        props: {
            product,
            statusCode,
            proxiedProductSlug,
            hostname: urlObj.hostname
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_react_error_view_use_error_page_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34218);
/* harmony import */ var _hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29887);
/* harmony import */ var _hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/*
 * Versioned 404 error view content for use in dot-io sites.
 * Links back to the "most recent version" (pathWithoutVersion),
 * as well as the documentation root (pathBeforeVersion).
 */ function VersionedError({ version , pathWithoutVersion , pathBeforeVersion  }) {
    (0,_hashicorp_react_error_view_use_error_page_analytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(404);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: (_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
                children: [
                    "This page does not exist for version ",
                    version,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Please select either the",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: pathWithoutVersion,
                        children: "most recent version"
                    }),
                    " or a valid version that includes the page you are looking for."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: pathBeforeVersion,
                    children: "← Go back to Documentation"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VersionedError);


/***/ }),

/***/ 73861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_react_error_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48734);
/* harmony import */ var _error_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(743);
/* harmony import */ var _proxied_dot_io_versioned_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_error_views__WEBPACK_IMPORTED_MODULE_4__]);
_error_views__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





const VERSION_PATTERN = /\/(?<version>v\d+[.]\d+[.](\d+|x))/;
/**
 * A display component that switches between:
 * - Dot-io error views, if `isProxiedDotIo` prop is `true`
 * - Dev-dot error views otherwise
 *
 * This switching isn't ideal; but feels somewhat logical since we are
 * limited to having a single pages/_error.jsx page file in the project.
 *
 * This component also handles auto-selecting versioned 404 views,
 * by matching VERSION_PATTERN in the page URL.
 */ function ErrorView({ statusCode , isProxiedDotIo  }) {
    /**
	 * Note: DotIoFallbackError calls useErrorPageAnalytics internally.
	 * If it didn't, we could call useErrorPageAnalytics once here, or in
	 * pages/_error.tsx, rather than in every error view component.
	 * useErrorPageAnalytics(statusCode).
	 *
	 * One solution might be localize `@hashicorp/react-error-view`
	 * in the dev-portal project. However, we may not be ready to do that,
	 * as the package may be used elsewhere?
	 */ const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    /**
	 * Note from Bryce on this useEffect:
	 *
	 * Due to how we are rewriting routes on the io sites, the URLs rendered in
	 * this component are incorrect during SSR, and for some reason are NOT
	 * getting reconciled on the client even though all of the props and state
	 * values internal to Link are correct.
	 *
	 * I think it's because of some hydration mismatch, so I'm using the
	 * isMounted state value as a key here to force the error view to completely
	 * re-mount. I'm sorry, I tried everything else I could think of. :')
	 */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    /**
	 * Determine if this is a 404 or versioned 404 view.
	 * For versioned views, determine the  path without version (aka latest)
	 */ const versionMatches = VERSION_PATTERN.exec(asPath);
    const versionInPath = versionMatches?.groups?.version;
    const pathWithoutVersion = asPath.replace(VERSION_PATTERN, "");
    const pathBeforeVersion = asPath.substring(0, asPath.indexOf(versionInPath));
    const is404 = statusCode == 404;
    const isVersioned404 = versionInPath && is404;
    /**
	 * Determine the error page type
	 */ let type;
    if (isProxiedDotIo) {
        if (isVersioned404) {
            type = "dot-io-versioned-404";
        } else {
            type = "dot-io-fallback";
        }
    } else {
        if (isVersioned404) {
            type = "dev-dot-versioned-404";
        } else if (is404) {
            type = "dev-dot-standard-404";
        } else {
            type = "dev-dot-fallback";
        }
    }
    /**
	 * Switch between proxied dot-io and dev-dot error views
	 */ switch(type){
        /* Dev-dot */ case "dev-dot-versioned-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDotVersioned404 */ .ll, {
                pathBeforeVersion: pathBeforeVersion,
                pathWithoutVersion: pathWithoutVersion,
                version: versionInPath
            }, String(isMounted));
        case "dev-dot-standard-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDot404 */ .B_, {});
        case "dev-dot-fallback":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDotFallback */ .uJ, {
                statusCode: statusCode
            });
        /* Dot-io */ case "dot-io-versioned-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_proxied_dot_io_versioned_error__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pathBeforeVersion: pathBeforeVersion,
                pathWithoutVersion: pathWithoutVersion,
                version: versionInPath
            }, String(isMounted));
        case "dot-io-fallback":
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_react_error_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                statusCode: statusCode
            });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

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

/***/ 38970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 11189:
/***/ ((module) => {

module.exports = require("camel-case");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 47881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 23231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 50934:
/***/ ((module) => {

module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

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

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 40731:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Boundary","slug":"boundary","algoliaConfig":{"indexName":"product_BOUNDARY","searchOnlyApiKey":"8308498decdf72e11590fc6356e5fdde"},"analyticsConfig":{"includedDomains":"boundaryproject.io www.boundaryproject.io","segmentWriteKey":"JkNZiSgwVRAAFrkqqdHLxf0xfcZuhYYc"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Boundary by HashiCorp","description":"Boundary automates secure identity-based user access to hosts and services across environments.","image":"https://www.boundaryproject.io/boundary-public/img/og-image.png","icon":[{"href":"/boundary-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/boundary/tutorials","type":"inbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","shortName":"Docs"},{"iconName":"api","name":"API","path":"api-docs"}]}');

/***/ }),

/***/ 6468:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Consul","slug":"consul","algoliaConfig":{"indexName":"product_CONSUL","searchOnlyApiKey":"fbd5dc1f0078d41509fcc560386fd534"},"analyticsConfig":{"includedDomains":"consul.io www.consul.io","segmentWriteKey":"IyzLrqXkox5KJ8XL4fo8vTYNGfiKlTCm"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Consul by HashiCorp","description":"Consul is a service networking solution to automate network configurations, discover services, and enable secure connectivity across any cloud or runtime.","image":"https://www.consulproject.io/consul-public/img/og-image.png","icon":[{"href":"/consul-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.11.3","subnavItems":[],"basePaths":["docs","api-docs","commands","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}]}');

/***/ }),

/***/ 67355:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Nomad","slug":"nomad","algoliaConfig":{"indexName":"product_NOMAD","searchOnlyApiKey":"9bfec34ea54e56a11bd50d6bfedc5e71"},"analyticsConfig":{"includedDomains":"nomadproject.io www.nomadproject.io","segmentWriteKey":"qW11yxgipKMsKFKQUCpTVgQUYftYsJj0"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Nomad by HashiCorp","description":"Nomad is a highly available, distributed, data-center aware cluster and application scheduler designed to support the modern datacenter with support for long-running services, batch jobs, and much more.","image":"https://www.nomadproject.io/nomad-public/img/og-image.png","icon":[{"href":"/nomad-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.2.5","subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Enterprise","url":"https://www.hashicorp.com/products/nomad/","type":"outbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/nomad/tutorials","type":"outbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Plugins","url":"/plugins","type":"inbound"},{"text":"Tools","url":"/tools","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","plugins","tools","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"Tools","path":"tools"},{"iconName":"plug","name":"Plugins","path":"plugins"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Nomad Integrations."}}');

/***/ }),

/***/ 33837:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Packer","slug":"packer","algoliaConfig":{"indexName":"product_PACKER","searchOnlyApiKey":"4e1ea7f4bf4335ac43d9f28463e42148"},"analyticsConfig":{"includedDomains":"packer.io www.packer.io","segmentWriteKey":"AjXdfmTTk1I9q9dfyePuDFHBrz1tCO3l"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Packer by HashiCorp","description":"Packer helps you create golden images for multiple platforms from a single source configuration.","image":"https://www.packer.io/packer-public/img/og-image.png","icon":[{"href":"/packer-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.7.10","basePaths":["docs","guides","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"guide","name":"Guides","path":"guides"},{"iconName":"plug","name":"Plugins","path":"plugins"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Packer Integrations."}}');

/***/ }),

/***/ 55423:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Sentinel","slug":"sentinel","algoliaConfig":{"indexName":"product_SENTINEL","searchOnlyApiKey":"55606ae6b6c797d30a84aa0b509711ef"},"analyticsConfig":{"includedDomains":"docs.hashicorp.com","segmentWriteKey":"X4VJ1pUW2yM3NLldLbHF6337lbDLTQ5h"},"metadata":{"title":"Sentinel by HashiCorp","description":"Sentinel is a language and framework for policy built to be embedded in existing software to enable fine-grained, logic-based policy decisions.","image":"https://docs.hashicorp.com/sentinel-public/img/og-image.png","icon":[{"href":"/sentinel-public/favicon.svg","sizes":"16x16"},{"href":"/sentinel-public/favicon.svg","sizes":"32x32"},{"href":"/sentinel-public/favicon.svg","sizes":"96x96"},{"href":"/sentinel-public/favicon.svg","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"0.18.6","subnavItems":[{"url":"/sentinel/intro","text":"Intro","type":"inbound"},{"url":"/sentinel","text":"Docs","type":"inbound"}],"basePaths":["docs","intro","downloads"],"rootDocsPaths":[{"basePathForLoader":"sentinel","iconName":"docs","name":"Docs","path":"docs"},{"basePathForLoader":"sentinel/intro","iconName":"docs","name":"Intro","path":"intro"}]}');

/***/ }),

/***/ 20110:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Vagrant","slug":"vagrant","algoliaConfig":{"indexName":"product_VAGRANT","searchOnlyApiKey":"c4c3e690f46940fa3ba9624da4d7fc0c"},"analyticsConfig":{"includedDomains":"vagrantup.com www.vagrantup.com","segmentWriteKey":"wFMyBE4PJCZttWfu0pNhYdWr7ygW0io4"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vagrant by HashiCorp","description":"Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.","image":"https://www.vagrantup.com/vagrant/img/og-image.png","icon":[{"href":"/vagrant-public/favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"2.2.19","vmwareUtilityVersion":"1.0.21","subnavItems":[{"text":"Intro","url":"https://developer.hashicorp.com/vagrant/intro","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/vagrant/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","intro","vagrant-cloud","vmware","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro","addOverviewItem":false},{"iconName":"cloud","name":"Vagrant Cloud","path":"vagrant-cloud"}]}');

/***/ }),

/***/ 17533:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Vault","slug":"vault","version":"1.9.3","changelogUrl":null,"algoliaConfig":{"indexName":"product_VAULT","searchOnlyApiKey":"9c555e8fa951c1c53e726c0ce2eb3b73"},"analyticsConfig":{"includedDomains":"vaultproject.io www.vaultproject.io","segmentWriteKey":"OdSFDq9PfujQpmkZf03dFpcUlywme4sC"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vault by HashiCorp","description":"Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. Vault handles leasing, key revocation, key rolling, auditing, and provides secrets as a service through a unified API.","image":"https://www.vaultproject.io/vault-public/img/og-image.png","icon":[{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=16&w=16","type":"image/png","sizes":"16x16"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=32&w=32","type":"image/png","sizes":"32x32"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=96&w=96","type":"image/png","sizes":"96x96"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=192&w=192","type":"image/png","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/"},{"text":"Use Cases","submenu":[{"text":"Secrets Management","url":"/use-cases/secrets-management"},{"text":"Data Encryption","url":"/use-cases/data-encryption"},{"text":"Identity-based Access","url":"/use-cases/identity-based-access"}]},{"text":"Enterprise","url":"https://www.hashicorp.com/products/vault/enterprise"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/vault/tutorials"},{"text":"Docs","url":"/docs"},{"text":"API","url":"/api-docs"},{"text":"Community","url":"/community"}],"packageManagers":[{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"darwin"},{"label":"Ubuntu/Debian","commands":["curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -","sudo apt-add-repository \\"deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main\\"","sudo apt-get update && sudo apt-get install vault"],"os":"linux"},{"label":"CentOS/RHEL","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Fedora","commands":["sudo dnf install -y dnf-plugins-core","sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo","sudo dnf -y install vault"],"os":"linux"},{"label":"Amazon Linux","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"linux"}],"basePaths":["docs","api-docs","intro","tutorials","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Vault Integrations.","sidebarLinks":[{"title":"Plugin System Overview","href":"/vault/docs/plugins"},{"title":"Plugin Development","href":"/vault/docs/plugins/plugin-development"},{"title":"Custom Secrets Engine Tutorial","href":"/vault/tutorials/custom-secrets-engine"}]}}');

/***/ }),

/***/ 97551:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Waypoint","slug":"waypoint","algoliaConfig":{"indexName":"product_WAYPOINT","searchOnlyApiKey":"5e4adfd8094367056501547d6fedb6c5"},"analyticsConfig":{"includedDomains":"waypointproject.io www.waypointproject.io","segmentWriteKey":"9mlIVayJbNtJW2EOdAFKHNKcdLAgEDlV"},"metadata":{"title":"Waypoint by HashiCorp","description":"Waypoint provides a modern workflow for build, deploy, and release across platforms.","image":"https://www.waypointproject.io/waypoint-public/img/og-image.png","icon":[{"href":"/waypoint-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Tutorials","url":"https://developer.hashicorp.com/waypoint/tutorials","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/waypoint/docs","type":"inbound"},{"text":"CLI","url":"https://developer.hashicorp.com/waypoint/commands","type":"inbound"},{"text":"Integrations","url":"https://developer.hashicorp.com/waypoint/integrations","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["commands","docs","plugins","tutorials","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","includeMDXSource":true},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Waypoint Integrations."}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,4203,8725,3076,504,5152,8734,265,7232,6182,6415,6203,2676,2925,743,2431], () => (__webpack_exec__(71732)));
module.exports = __webpack_exports__;

})();