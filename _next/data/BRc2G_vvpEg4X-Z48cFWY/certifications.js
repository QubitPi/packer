(() => {
var exports = {};
exports.id = 2327;
exports.ids = [2327];
exports.modules = {

/***/ 90388:
/***/ ((module) => {

// Exports
module.exports = {
	"splitSection": "certification-program-summary-card_splitSection__JrNjJ",
	"heading": "certification-program-summary-card_heading__n5NKu hds-typography-display-500",
	"description": "certification-program-summary-card_description__6Ca6_ hds-typography-body-300",
	"buttonGroup": "certification-program-summary-card_buttonGroup__z67Z1",
	"examCards": "certification-program-summary-card_examCards__hVWAR"
};


/***/ }),

/***/ 52193:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "exam-badge-and-title_root__kqt2g",
	"text": "exam-badge-and-title_text__SDspf",
	"eyebrow": "exam-badge-and-title_eyebrow__e54GQ hds-typography-body-100",
	"title": "exam-badge-and-title_title__qmRnq hds-typography-display-300"
};


/***/ }),

/***/ 97947:
/***/ ((module) => {

// Exports
module.exports = {
	"cardBase": "exam-card_cardBase__ulOxA",
	"examCard": "exam-card_examCard__ivlyD exam-card_cardBase__ulOxA",
	"contents": "exam-card_contents__3W92U",
	"comingSoonCard": "exam-card_comingSoonCard__vjIDa exam-card_cardBase__ulOxA"
};


/***/ }),

/***/ 59185:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBackground": "landing-hero_heroBackground__mE_0p",
	"heroImage": "landing-hero_heroImage__QupP2"
};


/***/ }),

/***/ 61570:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "landing_root__3tI8d",
	"programsSection": "landing_programsSection__Ghzow",
	"faqSignupSection": "landing_faqSignupSection__I0BNU",
	"faqHeading": "landing_faqHeading__HfQCG hds-typography-display-400",
	"signupForm": "landing_signupForm__vUfWj"
};


/***/ }),

/***/ 81141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 96209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ views_certifications_views_landing_server__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var views_certifications_views_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31954);
/* harmony import */ var views_certifications_views_landing_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_views_landing__WEBPACK_IMPORTED_MODULE_0__, views_certifications_views_landing_server__WEBPACK_IMPORTED_MODULE_1__]);
([views_certifications_views_landing__WEBPACK_IMPORTED_MODULE_0__, views_certifications_views_landing_server__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_certifications_views_landing__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ LandingPageSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * We support a limited set of program slugs.
 * Program slugs are mainly used for stylistic tweaks. This schema, and related
 * components that use the ProgramSlug type, will need to expanded
 * when additional certification programs are added.
 */ const ProgramSlugSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"]([
    "infrastructure-automation",
    "networking-automation",
    "security-automation"
]);
/**
 * Content schema for the /certifications landing page.
 *
 * Note that much of the landing page content will be derived from
 * content written for individual certification programs.
 */ const LandingPageSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    hero: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        heading: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    faqHeading: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    /**
	 * Note: these must be valid ProgramSlug values.
	 */ programSummaryOrder: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(ProgramSlugSchema)
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ CertificationProgramSummaryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_button_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16950);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18721);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11446);
/* harmony import */ var _certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90388);
/* harmony import */ var _certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_3__]);
([views_certifications_components__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


// Local

// Styles

function CertificationProgramSummaryCard({ slug , heading , description , exams  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .GradientCard */ .KN, {
        theme: slug,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .SplitCardSection */ .wu, {
                className: (_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().splitSection),
                startContent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: (_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
                    dangerouslySetInnerHTML: {
                        __html: heading
                    }
                }),
                endContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_2__/* .CtaGroup */ .Sz, {
                            className: (_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGroup),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                text: "Overview",
                                href: `/certifications/${slug}`
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_certification_program_summary_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().examCards),
                children: exams.map(({ title , prepareUrl , registerUrl , examCode , examTier , productSlug  })=>{
                    const fullTitle = title + (examCode ? ` (${examCode})` : "");
                    const showComingSoon = typeof registerUrl !== "string";
                    return prepareUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .ExamCard */ .Sl, {
                        title: fullTitle,
                        url: prepareUrl,
                        examTier: examTier,
                        productSlug: productSlug,
                        showComingSoon: showComingSoon
                    }, fullTitle) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .ExamCardUnlinked */ .YE, {
                        title: fullTitle,
                        examTier: examTier,
                        productSlug: productSlug
                    }, fullTitle);
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ExamBadgeAndTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18721);
/* harmony import */ var _exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52193);
/* harmony import */ var _exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_1__]);
views_certifications_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function ExamBadgeAndTitle({ title , eyebrow , productSlug , examTier  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_1__/* .ExamBadge */ .hj, {
                productSlug: productSlug,
                examTier: examTier
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2___default().eyebrow),
                        children: eyebrow
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_exam_badge_and_title_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                        children: title
                    })
                ]
            })
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ExamCard),
/* harmony export */   "Y": () => (/* binding */ ExamCardUnlinked)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18721);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11446);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88805);
/* harmony import */ var _exam_card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97947);
/* harmony import */ var _exam_card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_exam_card_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88918);
/* harmony import */ var components_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_2__]);
([views_certifications_components__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * Flex layout wrapper for the contents of an exam card.
 */ function ExamCardContents({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_exam_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().contents),
        children: children
    });
}
/**
 * Badge that says "Coming Soon", may be rendered in linked & unlinked cards.
 */ function ComingSoonBadge() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        text: "Coming Soon",
        color: "highlight",
        type: "outlined"
    });
}
/**
 * Unlinked exam cards are used where a "prepareUrl" is not available yet.
 */ function ExamCardUnlinked({ title , productSlug , examTier  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: (_exam_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().comingSoonCard),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExamCardContents, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ExamBadgeAndTitle */ .LG, {
                    title: title,
                    eyebrow: "HashiCorp Certified:",
                    productSlug: productSlug,
                    examTier: examTier
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ComingSoonBadge, {})
            ]
        })
    });
}
/**
 * Linked exam cards are used where a "prepareUrl" is available for the exam.
 *
 * If a "registerUrl" for the exam is not yet available, we show
 * a "Coming Soon" badge within this card as well.
 */ function ExamCard({ title , productSlug , url , showComingSoon , examTier  }) {
    return(// @TODO consider using "StandaloneLinkContents" text for aria-label?
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: (_exam_card_module_css__WEBPACK_IMPORTED_MODULE_6___default().examCard),
        href: url,
        ariaLabel: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExamCardContents, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ExamBadgeAndTitle */ .LG, {
                    title: title,
                    eyebrow: "HashiCorp Certified:",
                    productSlug: productSlug,
                    examTier: examTier
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_certifications_components__WEBPACK_IMPORTED_MODULE_1__/* .CtaGroup */ .Sz, {
                    children: [
                        showComingSoon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ComingSoonBadge, {}) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_1__/* .StandaloneLinkContents */ .Ct, {
                            text: "Prepare for the exam"
                        })
                    ]
                })
            ]
        })
    }));
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ks": () => (/* reexport safe */ _landing_hero__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "LG": () => (/* reexport safe */ _exam_badge_and_title__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "Sl": () => (/* reexport safe */ _exam_card__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "YE": () => (/* reexport safe */ _exam_card__WEBPACK_IMPORTED_MODULE_2__.Y),
/* harmony export */   "r4": () => (/* reexport safe */ _certification_program_summary_card__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _certification_program_summary_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42358);
/* harmony import */ var _exam_badge_and_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64419);
/* harmony import */ var _exam_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72486);
/* harmony import */ var _landing_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_certification_program_summary_card__WEBPACK_IMPORTED_MODULE_0__, _exam_badge_and_title__WEBPACK_IMPORTED_MODULE_1__, _exam_card__WEBPACK_IMPORTED_MODULE_2__, _landing_hero__WEBPACK_IMPORTED_MODULE_3__]);
([_certification_program_summary_card__WEBPACK_IMPORTED_MODULE_0__, _exam_badge_and_title__WEBPACK_IMPORTED_MODULE_1__, _exam_card__WEBPACK_IMPORTED_MODULE_2__, _landing_hero__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ LandingHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_certifications_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18721);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_certification_hero_image_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18745);
/* harmony import */ var _assets_certification_hero_image_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_certification_hero_image_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _landing_hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59185);
/* harmony import */ var _landing_hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_landing_hero_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_components__WEBPACK_IMPORTED_MODULE_1__]);
views_certifications_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




function LandingHero({ heading , description  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_1__/* .CertificationsHero */ .YW, {
        backgroundClassName: (_landing_hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().heroBackground),
        startSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_1__/* .CertificationsHeroText */ .dW, {
            heading: heading,
            description: description,
            foreground: "light"
        }),
        endSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_landing_hero_module_css__WEBPACK_IMPORTED_MODULE_4___default().heroImage),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                alt: "",
                src: (_assets_certification_hero_image_svg__WEBPACK_IMPORTED_MODULE_3___default()),
                width: 447,
                height: 515
            })
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31954:
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11446);
/* harmony import */ var _landing_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61570);
/* harmony import */ var _landing_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_landing_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_certifications_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__, components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__, views_certifications_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Global


// Shared components


// Local view


function CertificationsLandingView({ pageContent , programSummaries , faqItems  }) {
    const { hero  } = pageContent;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_base_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        mobileMenuSlot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobile_menu_levels_generic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_landing_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .LandingHero */ .Ks, {
                    heading: hero.heading,
                    description: hero.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_landing_module_css__WEBPACK_IMPORTED_MODULE_5___default().programsSection),
                    children: programSummaries.map((programSummary)=>{
                        const { slug , heading , description , exams  } = programSummary;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .CertificationsMaxWidth */ .u0, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .CertificationProgramSummaryCard */ .r4, {
                                slug: slug,
                                heading: heading,
                                description: description,
                                exams: exams
                            })
                        }, slug);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_landing_module_css__WEBPACK_IMPORTED_MODULE_5___default().faqSignupSection),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .CertificationsMaxWidth */ .u0, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_landing_module_css__WEBPACK_IMPORTED_MODULE_5___default().faqHeading),
                                children: pageContent.faqHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .AccordionWithMdxContent */ .bx, {
                                items: faqItems
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_landing_module_css__WEBPACK_IMPORTED_MODULE_5___default().signupForm),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_certifications_components__WEBPACK_IMPORTED_MODULE_3__/* .SignupFormArea */ .yv, {})
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertificationsLandingView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_read_local_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49369);
/* harmony import */ var views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44960);
/* harmony import */ var views_certifications_content_schemas_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32036);
/* harmony import */ var _utils_format_program_summaries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__, views_certifications_content_schemas_landing_page__WEBPACK_IMPORTED_MODULE_3__]);
([views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__, views_certifications_content_schemas_landing_page__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const CONTENT_DIR = "src/content/certifications";
/**
 * Read in local content from the filesystem.
 */ async function getStaticProps() {
    /**
	 * Ensure the authored content matches our expected schema
	 */ const contentString = (0,lib_read_local_file__WEBPACK_IMPORTED_MODULE_1__/* .readLocalFile */ .a)(path__WEBPACK_IMPORTED_MODULE_0___default().join(CONTENT_DIR, "landing.json"));
    const pageContent = views_certifications_content_schemas_landing_page__WEBPACK_IMPORTED_MODULE_3__/* .LandingPageSchema.parse */ .D.parse(JSON.parse(contentString));
    /**
	 * Format all program data into program summaries
	 */ const allPrograms = (0,views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAllCertificationPrograms */ .o9)();
    const programSummaries = (0,_utils_format_program_summaries__WEBPACK_IMPORTED_MODULE_4__/* .formatProgramSummaries */ .z)(allPrograms, pageContent.programSummaryOrder);
    /**
	 * Parse landing page FAQs from an MDX file
	 */ const faqMdxString = (0,lib_read_local_file__WEBPACK_IMPORTED_MODULE_1__/* .readLocalFile */ .a)(path__WEBPACK_IMPORTED_MODULE_0___default().join(CONTENT_DIR, "landing-faq.mdx"));
    const faqItems = await (0,views_certifications_content_utils__WEBPACK_IMPORTED_MODULE_2__/* .getFaqsFromMdx */ .m1)(faqMdxString);
    /**
	 * Return static props
	 */ return {
        props: {
            pageContent,
            programSummaries,
            faqItems,
            metadata: {
                title: "Certifications",
                localOgImage: "certifications.jpg"
            }
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ formatProgramSummaries)
/* harmony export */ });
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81141);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Given an array of programs data, and an array of program slugs in order,
 * Return an array of program summary objects, in the specified order.
 */ function formatProgramSummaries(programs, slugsInOrder) {
    // Transform the provided `slugsInOrder` array into summary objects
    const programSummaries = slugsInOrder.map((targetSlug)=>{
        const program = programs.find((p)=>p.slug === targetSlug);
        // If we can't find the target program, throw an error
        if (!program) {
            throw new Error(`formatProgramSummaries: could not find Certification program with slug "${targetSlug}". Please ensure all slugs in "" reference existing Certification programs in "src/content/certifications/programs".`);
        }
        // Format the full program data into a summary object
        return {
            slug: program.slug,
            heading: program.pageContent.summary.heading,
            description: program.pageContent.summary.description,
            exams: program.pageContent.exams.map((exam)=>{
                return (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_0__/* .stripUndefinedProperties */ .c)({
                    title: exam.title,
                    examCode: exam.examCode,
                    examTier: exam.examTier,
                    productSlug: exam.productSlug,
                    prepareUrl: exam.links?.prepare,
                    registerUrl: exam.links?.register
                });
            })
        };
    });
    // Return the summary objects
    return programSummaries;
}


/***/ }),

/***/ 18745:
/***/ ((module) => {

module.exports = "/_next/static/images/certification-hero-image-5c0a533b1772ec492d2da1aa4d769295.svg";

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,7708,8942,1960,1419,1023,5675,3921,7864,1831,265,7232,2539,2925,3825], () => (__webpack_exec__(96209)));
module.exports = __webpack_exports__;

})();