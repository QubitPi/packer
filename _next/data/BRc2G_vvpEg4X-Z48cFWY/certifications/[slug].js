(() => {
var exports = {};
exports.id = 3521;
exports.ids = [3521];
exports.modules = {

/***/ 86978:
/***/ ((module) => {

// Exports
module.exports = {
	"eyebrow": "exam-details-badge-and-title_eyebrow__RSODA hds-typography-display-300",
	"title": "exam-details-badge-and-title_title__tmeA8 hds-typography-display-500",
	"version": "exam-details-badge-and-title_version__UBSYB hds-typography-body-100",
	"versionIcon": "exam-details-badge-and-title_versionIcon__mSuoU",
	"versionText": "exam-details-badge-and-title_versionText__hYBFh",
	"versionLabel": "exam-details-badge-and-title_versionLabel__gPuIT",
	"versionValue": "exam-details-badge-and-title_versionValue__3uXZ5"
};


/***/ }),

/***/ 19174:
/***/ ((module) => {

// Exports
module.exports = {
	"splitCardSection": "exam-details-card_splitCardSection__ImOlb",
	"description": "exam-details-card_description__Ntxrb hds-typography-body-300",
	"ctaGroup": "exam-details-card_ctaGroup__eg11_"
};


/***/ }),

/***/ 31179:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "heading-permalink_heading__NahE1 hds-typography-display-400 g-offset-scroll-margin-top",
	"icon": "heading-permalink_icon__xB12H",
	"anchorLink": "heading-permalink_anchorLink__95B87 g-focus-ring-from-box-shadow"
};


/***/ }),

/***/ 18833:
/***/ ((module) => {

// Exports
module.exports = {
	"allCertificationsLink": "program-hero_allCertificationsLink__X0thI",
	"foreground-light": "program-hero_foreground-light__4FgMs",
	"foreground-dark": "program-hero_foreground-dark__BC3aY",
	"heroBackground": "program-hero_heroBackground__jNzl3",
	"theme-infrastructure-automation": "program-hero_theme-infrastructure-automation__jzPvB",
	"theme-security-automation": "program-hero_theme-security-automation__WM9DU",
	"theme-networking-automation": "program-hero_theme-networking-automation__70_SL"
};


/***/ }),

/***/ 20095:
/***/ ((module) => {

// Exports
module.exports = {
	"mainSection": "program-view_mainSection__8XyRS",
	"examsSection": "program-view_examsSection__qbp9a",
	"signupForm": "program-view_signupForm__YZ6Wa"
};


/***/ }),

/***/ 38338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ views_certifications_views_slug_server__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ views_certifications_views_slug_server__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var views_certifications_views_slug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24204);
/* harmony import */ var views_certifications_views_slug_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_views_slug___WEBPACK_IMPORTED_MODULE_0__, views_certifications_views_slug_server__WEBPACK_IMPORTED_MODULE_1__]);
([views_certifications_views_slug___WEBPACK_IMPORTED_MODULE_0__, views_certifications_views_slug_server__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_certifications_views_slug___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ExamDetailsBadgeAndTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_platform_util_text_mitigate_widows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98942);
/* harmony import */ var _hashicorp_flight_icons_svg_react_info_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33613);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18721);
/* harmony import */ var _exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86978);
/* harmony import */ var _exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_2__]);
views_certifications_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/**
 * Renders title text paired with a certifications badge and a string
 * representing the details of a specific exam.
 */ function ExamDetailsBadgeAndTitle({ title , productSlug , versionTested , examTier  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .ExamBadge */ .hj, {
                productSlug: productSlug,
                examTier: examTier
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().eyebrow),
                children: "HashiCorp Certified:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                dangerouslySetInnerHTML: {
                    __html: (0,_hashicorp_platform_util_text_mitigate_widows__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(title, 15)
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().version),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().versionIcon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_info_16__WEBPACK_IMPORTED_MODULE_1__/* .IconInfo16 */ .k, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().versionText),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().versionLabel),
                                children: "Product version tested:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_exam_details_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_3___default().versionValue),
                                children: versionTested
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ExamDetailsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16950);
/* harmony import */ var components_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42892);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26789);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33643);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18721);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65299);
/* harmony import */ var _exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19174);
/* harmony import */ var _exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__]);
([views_certifications_components__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




// Shared certifications

// Local


/**
 * Renders a card that displays details for a certifications exam
 * within a particular certifications program
 */ function ExamDetailsCard({ title , description , examTier , links , productSlug , versionTested , slug  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_5__/* .GradientCard */ .KN, {
        theme: slug,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_5__/* .SplitCardSection */ .wu, {
            className: (_exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7___default().splitCardSection),
            startContent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* .ExamDetailsBadgeAndTitle */ .Pd, {
                title: title,
                productSlug: productSlug,
                versionTested: versionTested,
                examTier: examTier
            }),
            endContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),
                        children: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_exam_details_card_module_css__WEBPACK_IMPORTED_MODULE_7___default().ctaGroup),
                        children: links?.prepare ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_certifications_components__WEBPACK_IMPORTED_MODULE_5__/* .CtaGroup */ .Sz, {
                            children: [
                                links.prepare ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    text: "Prepare for the exam",
                                    href: links.prepare
                                }) : null,
                                links.register ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    text: "Register for the exam",
                                    href: links.register,
                                    color: "secondary",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_4__/* .IconArrowRight16 */ .k, {}),
                                    iconPosition: "trailing"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    text: "Coming Soon",
                                    color: "highlight",
                                    type: "outlined"
                                })
                            ]
                        }) : null
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ HeadingPermalink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_link_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35249);
/* harmony import */ var _heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31179);
/* harmony import */ var _heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



// Future thought: refactor this to use a shared `HeadingPermalink`
// base component that can also be used in the mdx heading component
function HeadingPermalink({ heading  }) {
    const id = `${slugify__WEBPACK_IMPORTED_MODULE_1___default()(heading, {
        lower: true
    })}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: (_heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: (_heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3___default().anchorLink),
            href: `#${id}`,
            children: [
                heading,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_link_16__WEBPACK_IMPORTED_MODULE_2__/* .IconLink16 */ .j, {
                    className: (_heading_permalink_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
                })
            ]
        })
    });
}


/***/ }),

/***/ 65299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pd": () => (/* reexport safe */ _exam_details_badge_and_title__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "RE": () => (/* reexport safe */ _heading_permalink__WEBPACK_IMPORTED_MODULE_3__.R),
/* harmony export */   "eS": () => (/* reexport safe */ _program_hero__WEBPACK_IMPORTED_MODULE_2__.e),
/* harmony export */   "rq": () => (/* reexport safe */ _exam_details_card__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _exam_details_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51365);
/* harmony import */ var _exam_details_badge_and_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32111);
/* harmony import */ var _program_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19196);
/* harmony import */ var _heading_permalink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_exam_details_card__WEBPACK_IMPORTED_MODULE_0__, _exam_details_badge_and_title__WEBPACK_IMPORTED_MODULE_1__, _program_hero__WEBPACK_IMPORTED_MODULE_2__]);
([_exam_details_card__WEBPACK_IMPORTED_MODULE_0__, _exam_details_badge_and_title__WEBPACK_IMPORTED_MODULE_1__, _program_hero__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ProgramHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18721);
/* harmony import */ var _program_hero_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18833);
/* harmony import */ var _program_hero_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_program_hero_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_standalone_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26789);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_left_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79041);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_2__]);
views_certifications_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

// Shared under certifications

// Styles



/**
 * Note: foreground and background are both set based on the program `slug`.
 * When new programs are added, this enum and the `theme-` classes in the
 * adjacent `program-hero.module.css` should likely be expanded.
 *
 * If a slug is not explicitly supported, the CertificationsHero will default
 * to dark foreground text, and a plain white background.
 */ const programHeroForeground = {
    "security-automation": "dark",
    "infrastructure-automation": "light",
    "networking-automation": "light"
};
/**
 * Render a styled hero for an individual program page.
 */ function ProgramHero({ heading , description , slug  }) {
    const foreground = programHeroForeground[slug];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .CertificationsHero */ .YW, {
        backgroundClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_program_hero_module_css__WEBPACK_IMPORTED_MODULE_5___default().heroBackground), (_program_hero_module_css__WEBPACK_IMPORTED_MODULE_5___default())[`theme-${slug}`]),
        startSlot: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_standalone_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_program_hero_module_css__WEBPACK_IMPORTED_MODULE_5___default().allCertificationsLink), (_program_hero_module_css__WEBPACK_IMPORTED_MODULE_5___default())[`foreground-${foreground}`]),
                    href: "/certifications",
                    text: "All Certifications",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_left_16__WEBPACK_IMPORTED_MODULE_4__/* .IconArrowLeft16 */ .n, {}),
                    iconPosition: "leading",
                    color: "secondary"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .CertificationsHeroText */ .dW, {
                    heading: heading,
                    description: description,
                    foreground: foreground
                })
            ]
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28248);
/* harmony import */ var components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12925);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18721);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65299);
/* harmony import */ var _program_view_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20095);
/* harmony import */ var _program_view_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_program_view_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_certifications_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_certifications_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Global



// Share certifications

// Local


function CertificationProgramView({ pageContent , slug  }) {
    const { hero , exams  } = pageContent;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        mobileMenuSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .ProgramHero */ .eS, {
                heading: hero.heading,
                description: hero.description,
                slug: slug
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_program_view_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainSection),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .CertificationsMaxWidth */ .u0, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_program_view_module_css__WEBPACK_IMPORTED_MODULE_5___default().examsSection),
                            children: exams.map((exam)=>{
                                const { title , examCode  } = exam;
                                const fullTitle = title + (examCode ? ` (${examCode})` : "");
                                const accordionHeading = `${fullTitle} Details`;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .ExamDetailsCard */ .rq, {
                                            title: fullTitle,
                                            description: exam.description,
                                            links: exam.links,
                                            examTier: exam.examTier,
                                            productSlug: exam.productSlug,
                                            versionTested: exam.versionTested,
                                            slug: slug
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .HeadingPermalink */ .RE, {
                                            heading: accordionHeading
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .AccordionWithMdxContent */ .bx, {
                                            items: exam.faqItems
                                        })
                                    ]
                                }, fullTitle);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_program_view_module_css__WEBPACK_IMPORTED_MODULE_5___default().signupForm),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .SignupFormArea */ .yv, {})
                        })
                    ]
                }, slug)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertificationProgramView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44960);
/* harmony import */ var _utils_prepare_page_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_0__, _utils_prepare_page_content__WEBPACK_IMPORTED_MODULE_1__]);
([views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_0__, _utils_prepare_page_content__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
// Local

async function getStaticProps({ params: { slug  }  }) {
    // Fetch the authored page content
    const { pageContent: rawPageContent  } = (0,views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_0__/* .getCertificationProgram */ .aX)(slug);
    // Prepare the page content for rendering, such as prepping MDX source
    const pageContent = await (0,_utils_prepare_page_content__WEBPACK_IMPORTED_MODULE_1__/* .preparePageContent */ .a)(rawPageContent);
    // Return static props
    return {
        props: {
            pageContent,
            slug,
            metadata: {
                title: pageContent.title,
                localOgImage: "certifications.jpg"
            }
        }
    };
}
async function getStaticPaths() {
    const slugs = (0,views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_0__/* .getAllCertificationProgramSlugs */ .Hg)();
    const paths = slugs.map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ preparePageContent)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_read_local_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49369);
/* harmony import */ var views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__]);
views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const EXAM_CONTENT_DIR = "src/content/certifications/exam-faqs";
/**
 * Process raw authored page content.
 *
 * Currently focused on transforming FAQ MDX slugs for each exam
 * into FAQ items, each with processed `mdxSource`.
 */ async function preparePageContent(rawPageContent) {
    const preparedExamsContent = await Promise.all(rawPageContent.exams.map(prepareExamContent));
    return {
        ...rawPageContent,
        exams: preparedExamsContent
    };
}
/**
 * Transforms an exam item with an `faqSlug` into an exam item
 * with full `faqItems` data, ready to render in the view.
 */ async function prepareExamContent(exam) {
    const faqFile = `${exam.faqSlug}.mdx`;
    const faqMdxString = (0,lib_read_local_file__WEBPACK_IMPORTED_MODULE_1__/* .readLocalFile */ .a)(path__WEBPACK_IMPORTED_MODULE_0___default().join(EXAM_CONTENT_DIR, faqFile));
    const parsedFaqItems = await (0,views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__/* .getFaqsFromMdx */ .m1)(faqMdxString);
    return {
        ...exam,
        faqItems: parsedFaqItems
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

/***/ 68103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

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

/***/ 87645:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-to-string");

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

/***/ 65184:
/***/ ((module) => {

"use strict";
module.exports = require("react-error-boundary");

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

/***/ 91283:
/***/ ((module) => {

"use strict";
module.exports = require("remark");

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

/***/ 45641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,7708,8942,1960,1419,1023,5675,3921,7864,3613,1831,265,7232,2539,2925,3825], () => (__webpack_exec__(38338)));
module.exports = __webpack_exports__;

})();