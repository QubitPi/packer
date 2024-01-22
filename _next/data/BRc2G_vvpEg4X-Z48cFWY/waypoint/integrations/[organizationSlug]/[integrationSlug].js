(() => {
var exports = {};
exports.id = 9429;
exports.ids = [9429];
exports.modules = {

/***/ 19051:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "card-link_root__z4SDk",
	"anchor": "card-link_anchor__2PMo1"
};


/***/ }),

/***/ 58169:
/***/ ((module) => {

// Exports
module.exports = {
	"theme-light": "style_theme-light__q7pGo",
	"theme-dark": "style_theme-dark__bVEoY",
	"arrowContainer": "style_arrowContainer__wCOBJ",
	"arrow": "style_arrow__w1sti",
	"tooltip": "style_tooltip__u_wq5"
};


/***/ }),

/***/ 80626:
/***/ ((module) => {

// Exports
module.exports = {
	"readmeView": "integration-readme_readmeView__2ZkKf",
	"sidecarContents": "integration-readme_sidecarContents__fqCqZ"
};


/***/ }),

/***/ 90615:
/***/ ((module) => {

// Exports
module.exports = {
	"readmeView": "style_readmeView___2ue2",
	"sidecarContents": "style_sidecarContents__Ls_2n"
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

/***/ 48418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9677);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_portal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80395);
/* harmony import */ var _reach_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58169);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





/**
 * OFFSET is the pixel distance to set
 * between the child element's edge and the tooltip edge.
 * Note that the tooltip arrow extends above the tooltip edge.
 */ const SPACE_FROM_CHILDREN = 12;
/**
 * ARROW_WIDTH is the width of the tooltip arrow.
 * In an ideal world we might calculate this from the .arrow element size
 * after its 45 degree rotation has been applied, but it's much
 * easier to instead hard-code this value.
 */ const ARROW_WIDTH = 16;
/**
 * COLLISION_BUFFER is the minimum pixel distance to maintain
 * between the tooltip edge and the viewport edge.
 */ const COLLISION_BUFFER = 8;
function Tooltip({ children , label , ariaLabel , theme ="dark"  }) {
    const [trigger, tooltip] = (0,_reach_tooltip__WEBPACK_IMPORTED_MODULE_3__.useTooltip)();
    const { isVisible , triggerRect  } = tooltip;
    const themeClass = (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default())[`theme-${theme}`];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", trigger, children),
            isVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reach_portal__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TooltipArrow, {
                    arrowWidth: ARROW_WIDTH,
                    triggerRect: triggerRect,
                    collisionBuffer: COLLISION_BUFFER,
                    themeClass: themeClass
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reach_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipPopup, {
                ...tooltip,
                isVisible: isVisible,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltip), themeClass),
                label: label,
                "aria-label": ariaLabel,
                position: (triggerRect, tooltipRect)=>centeringFunction(triggerRect, tooltipRect, COLLISION_BUFFER, SPACE_FROM_CHILDREN)
            })
        ]
    });
}
/**
 * Given the bounding rectangle for both
 * the tooltip trigger and tooltip popup,
 * render the tooltip centered and below
 * the trigger.
 *
 * Allow viewport collisions to override
 * the centered position where needed,
 * using the collisionBuffer argument
 * to inset the collision area so the tooltip
 * doesn't appear at the very edge of the
 * viewport.
 */ function centeringFunction(triggerRect, tooltipRect, collisionBuffer, spaceFromChildren) {
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const left = triggerCenter - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - collisionBuffer;
    return {
        left: Math.min(Math.max(collisionBuffer, left), maxLeft) + window.scrollX,
        top: triggerRect.bottom + spaceFromChildren + window.scrollY
    };
}
/**
 * Given the bounding rectangle for
 * the tooltip trigger, render a small
 * triangular arrow.
 *
 * This arrow is centered relative to
 * the trigger, but accounts for possible
 * viewport collisions, as we would prefer
 * to have the arrow connected to the popup
 * (which is bound by the viewport) rather
 * than have it perfectly centered but
 * disconnected from the popup.
 */ function TooltipArrow({ triggerRect , collisionBuffer , themeClass , arrowWidth  }) {
    const arrowLeft = triggerRect ? `${Math.min(// Centered position, covers most use cases
    triggerRect.left - arrowWidth / 2 + triggerRect.width / 2, // Ensure the arrow is not rendered even partially offscreen,
    // as it will look disconnected from our tooltip body,
    // which must be rendered within the viewport
    window.innerWidth - arrowWidth - collisionBuffer)}px` : "auto";
    const arrowTop = triggerRect ? `${triggerRect.bottom + window.scrollY + SPACE_FROM_CHILDREN}px` : "auto";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().arrowContainer), themeClass),
        style: {
            "--left": arrowLeft,
            "--top": arrowTop,
            "--size": arrowWidth + "px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().arrow)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ 65520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_SLUG": () => (/* binding */ PRODUCT_SLUG),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39626);
/* harmony import */ var lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57193);
/* harmony import */ var views_product_integration_readme_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62658);
/* harmony import */ var views_product_integration_readme_view_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23844);
/* harmony import */ var components_inline_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2351);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26789);
/* harmony import */ var _integration_readme_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80626);
/* harmony import */ var _integration_readme_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_integration_readme_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_integration_readme_view__WEBPACK_IMPORTED_MODULE_3__, views_product_integration_readme_view_server__WEBPACK_IMPORTED_MODULE_4__]);
([views_product_integration_readme_view__WEBPACK_IMPORTED_MODULE_3__, views_product_integration_readme_view_server__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const PRODUCT_SLUG = ["vault","waypoint","nomad","packer"].find((slug)=>slug === "waypoint");
/**
 * Build an array of { productSlug, integrationSlug }
 * path parameters for all integrations.
 */ async function getStaticPaths() {
    const allIntegrations = await (0,lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_2__/* .fetchAllProductIntegrations */ .e7)(PRODUCT_SLUG);
    // Build a flat array of path parameters for each integration
    const paths = allIntegrations// We don't render pages for external_only integrations
    .filter((i)=>!i.external_only).map((i)=>({
            productSlug: i.product.slug,
            integrationSlug: i.slug,
            organizationSlug: i.organization.slug
        })).flat().map((params)=>({
            params
        }));
    // Return static paths
    return {
        paths,
        fallback: "blocking"
    };
}
// simulate the dynamic route props used by other integrations paths
const getStaticProps = ({ params  })=>{
    return (0,views_product_integration_readme_view_server__WEBPACK_IMPORTED_MODULE_4__/* .getStaticProps */ .b1)({
        params: {
            productSlug: PRODUCT_SLUG,
            ...params
        }
    });
};
function WaypointIntegrationReadmeView(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_integration_readme_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        preContentSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inline_alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            title: "Archive Notice",
            description: "This integration relates to a legacy version of Waypoint and is no longer actively maintained.",
            color: "highlight",
            className: (_integration_readme_module_css__WEBPACK_IMPORTED_MODULE_7___default().alert),
            ctaSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: "https://www.hashicorp.com/blog/a-new-vision-for-hcp-waypoint",
                opensInNewTab: true,
                text: "Read the blog",
                color: "secondary",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_1__/* .IconExternalLink16 */ .g, {}),
                iconPosition: "trailing"
            })
        })
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaypointIntegrationReadmeView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductIntegrationReadmeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_dev_dot_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(543);
/* harmony import */ var components_try_hcp_callout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87691);
/* harmony import */ var components_version_alert_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38283);
/* harmony import */ var layouts_product_integration_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38919);
/* harmony import */ var lib_hooks_use_user_content_anchor_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1459);
/* harmony import */ var lib_integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33726);
/* harmony import */ var components_outline_nav_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41238);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90615);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_product_integration_layout__WEBPACK_IMPORTED_MODULE_4__, components_outline_nav_components__WEBPACK_IMPORTED_MODULE_7__]);
([layouts_product_integration_layout__WEBPACK_IMPORTED_MODULE_4__, components_outline_nav_components__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







// Styles

function ProductIntegrationReadmeView({ product , integration , activeRelease , breadcrumbLinks , serializedREADME , anchorLinks , preContentSlot  }) {
    // We expect user content here, so we need to handle `#user-content-` links
    (0,lib_hooks_use_user_content_anchor_links__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    /**
	 * Grab the current version string from the activeRelease.
	 */ const currentVersion = activeRelease.version;
    const isLatestVersion = currentVersion === integration.versions[0];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_product_integration_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: integration.name,
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().readmeView),
        breadcrumbLinks: breadcrumbLinks,
        currentProduct: product,
        integration: integration,
        activeRelease: activeRelease,
        getVersionChangedURL: (version)=>{
            const isLatest = version === integration.versions[0];
            return isLatest ? (0,lib_integrations__WEBPACK_IMPORTED_MODULE_6__/* .getIntegrationUrl */ .El)(integration) : (0,lib_integrations__WEBPACK_IMPORTED_MODULE_6__/* .getIntegrationUrl */ .El)(integration, version);
        },
        sidecarSlot: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sidecarContents),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_outline_nav_components__WEBPACK_IMPORTED_MODULE_7__/* .OutlineNavWithActive */ .Nc, {
                    items: anchorLinks.map(({ title , id  })=>{
                        return {
                            title,
                            url: `#${id}`
                        };
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_try_hcp_callout_components__WEBPACK_IMPORTED_MODULE_2__/* .TryHcpCalloutSidecarPlacement */ .qN, {
                    productSlug: product.slug
                })
            ]
        }),
        alertBannerSlot: isLatestVersion ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_version_alert_banner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            currentVersion: currentVersion,
            latestVersionUrl: (0,lib_integrations__WEBPACK_IMPORTED_MODULE_6__/* .getIntegrationUrl */ .El)(integration)
        }),
        children: [
            preContentSlot ? preContentSlot : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dev_dot_content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                mdxRemoteProps: serializedREADME
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "MU": () => (/* binding */ getStaticPathsWithVersion),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95655);
/* harmony import */ var lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57193);
/* harmony import */ var lib_integrations_api_client_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27628);
/* harmony import */ var lib_serialize_integration_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34280);
/* harmony import */ var lib_integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33726);
/* harmony import */ var lib_integrations_get_is_enabled_product_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_serialize_integration_markdown__WEBPACK_IMPORTED_MODULE_3__]);
lib_serialize_integration_markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third-party imports

// Integrations-related imports





/**
 * Build an array of { productSlug, integrationSlug, integrationVersion }
 * path parameters for all integrations across all enabled products.
 *
 * Note: currently returning an empty array. Latest versions of "readme"
 * views are rendered through the "canonical" latest URL:
 * - `/<productSlug>/integrations/<integrationSlug>`
 *
 * It doesn't seem feasible to statically render all versions, so we
 * statically render only the latest version at the URL above.
 * This happens through the page file `[integrationSlug]/index.tsx`.
 *
 * All non-latest versioned content is rendered with `fallback: "blocking"`.
 */ async function getStaticPathsWithVersion() {
    return {
        paths: [],
        fallback: "blocking"
    };
}
/**
 * Build an array of { productSlug, integrationSlug }
 * path parameters for all integrations across all enabled products.
 *
 * Builds paths dynamically for all products except waypoint.
 * See /pages/waypoint/integrations/... for more context
 */ async function getStaticPaths() {
    // Get products slug where integrations is enabled
    const enabledProductSlugs = ["vault","waypoint","nomad","packer"].filter((slug)=>slug !== "waypoint");
    // Fetch integrations for all products
    const allIntegrations = await (0,lib_integrations__WEBPACK_IMPORTED_MODULE_4__/* .fetchAllIntegrations */ .ue)(enabledProductSlugs);
    // Build a flat array of path parameters for each integration
    const paths = allIntegrations// We don't render pages for external_only integrations
    .filter((i)=>!i.external_only).map((i)=>({
            productSlug: i.product.slug,
            integrationSlug: i.slug,
            organizationSlug: i.organization.slug
        })).flat().map((params)=>({
            params
        }));
    // Return static paths
    return {
        paths,
        fallback: "blocking"
    };
}
/**
 * Get static props for the "readme" view of a specific product integration.
 */ async function getStaticProps({ params: { productSlug , integrationSlug , organizationSlug , integrationVersion  }  }) {
    // Pull out the Product Config
    // If the product is not enabled for integrations, return a 404 page
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__/* .cachedGetProductData */ .i)(productSlug);
    if (!(0,lib_integrations_get_is_enabled_product_integrations__WEBPACK_IMPORTED_MODULE_5__/* .getIsEnabledProductIntegrations */ .b)(productSlug)) {
        return {
            notFound: true
        };
    }
    const integrationResponse = await (0,lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__/* .fetchIntegration */ .ul)(productSlug, organizationSlug, integrationSlug);
    if (integrationResponse.meta.status_code != 200) {
        console.warn("Could not fetch Integration", integrationResponse);
        return {
            notFound: true
        };
    }
    const integration = integrationResponse.result;
    // If the integration is external only, we shouldn't render this page
    if (integration.external_only) {
        return {
            notFound: true
        };
    }
    const [targetVersion, isLatest] = (0,lib_integrations__WEBPACK_IMPORTED_MODULE_4__/* .getTargetVersion */ .QI)({
        versionSlug: integrationVersion,
        latestVersion: integration.versions[0]
    });
    // if the version slug is not prefix with 'v', return 404
    if (targetVersion === null) {
        return {
            notFound: true
        };
    }
    // Fetch the Release
    const activeReleaseResponse = await (0,lib_integrations_api_client_release__WEBPACK_IMPORTED_MODULE_2__/* .fetchIntegrationRelease */ .v)(productData.slug, organizationSlug, integrationSlug, targetVersion);
    if (activeReleaseResponse.meta.status_code != 200) {
        console.warn("Could not fetch Release", activeReleaseResponse);
        return {
            notFound: true
        };
    }
    const activeRelease = activeReleaseResponse.result;
    // Title and breadcrumb links vary if we're on the latest version or not
    const metadataTitle = isLatest ? `${integration.name} | Integrations` : `${integration.name} (v${activeRelease.version}) | Integrations`;
    const breadcrumbLinks = isLatest ? (0,lib_integrations__WEBPACK_IMPORTED_MODULE_4__/* .integrationBreadcrumbLinks */ .xU)(productData, integration, true) : (0,lib_integrations__WEBPACK_IMPORTED_MODULE_4__/* .integrationVersionBreadcrumbLinks */ .vP)(productData, integration, activeRelease, true);
    /**
	 * Serialize the README, extracting anchor links as we do
	 */ const { serializeResult: serializedREADME , anchorLinks  } = await (0,lib_serialize_integration_markdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(activeRelease.readme);
    // Return static props
    return {
        revalidate: false,
        props: {
            metadata: {
                title: metadataTitle,
                description: integration.description
            },
            product: productData,
            integration,
            activeRelease,
            breadcrumbLinks,
            anchorLinks,
            serializedREADME
        }
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

/***/ 87645:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-to-string");

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

/***/ 12908:
/***/ ((module) => {

"use strict";
module.exports = import("deepmerge-ts");;

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

/***/ 65905:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-sanitize");;

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,1960,1419,1023,998,5675,3921,7864,1629,3613,4889,7752,2851,9621,2781,265,7232,4884,2539,8937], () => (__webpack_exec__(65520)));
module.exports = __webpack_exports__;

})();