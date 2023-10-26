(() => {
var exports = {};
exports.id = 6091;
exports.ids = [6091,2529,6203];
exports.modules = {

/***/ 239:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "collection-progress-group_root__HM09c"
};


/***/ }),

/***/ 18725:
/***/ ((module) => {

// Exports
module.exports = {
	"statusSectionElements": "collection-progress-status-section_statusSectionElements__uBnmZ",
	"statusSectionWithBorder": "collection-progress-status-section_statusSectionWithBorder__Ea_Lv hds-surface-base collection-progress-status-section_statusSectionElements__uBnmZ",
	"isAuthenticated": "collection-progress-status-section_isAuthenticated__6YwDH",
	"countIconAndLabel": "collection-progress-status-section_countIconAndLabel__Y0D8I",
	"countIcon": "collection-progress-status-section_countIcon__w6GcY",
	"completeIconAndLabel": "collection-progress-status-section_completeIconAndLabel__RaLTk",
	"completeIcon": "collection-progress-status-section_completeIcon__DBAid"
};


/***/ }),

/***/ 88699:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "icon-card-link_root__XRf7A",
	"icon": "icon-card-link_icon__gjx_f",
	"text": "icon-card-link_text__n8aD8 hds-typography-body-200"
};


/***/ }),

/***/ 90190:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "progress-bar_root__n9QkG",
	"indicator": "progress-bar_indicator__nsgEp"
};


/***/ }),

/***/ 18656:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "desktop-client-callout_heading__UAPy6"
};


/***/ }),

/***/ 95019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nq": () => (/* reexport */ CollectionProgressStatusSection),
  "j9": () => (/* reexport */ CompleteIconAndLabel),
  "jC": () => (/* reexport */ CountIcon),
  "Xl": () => (/* reexport */ CountIconAndLabel),
  "LN": () => (/* reexport */ StatusSectionElements),
  "rp": () => (/* reexport */ getStatusLabel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/collections-16.tsx
var collections_16 = __webpack_require__(39949);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/check-circle-fill-16.tsx
var check_circle_fill_16 = __webpack_require__(45424);
// EXTERNAL MODULE: ./src/components/card/components/index.ts + 5 modules
var components = __webpack_require__(4155);
// EXTERNAL MODULE: ./src/components/progress-bar/index.tsx + 1 modules
var progress_bar = __webpack_require__(92829);
// EXTERNAL MODULE: ./src/hooks/use-authentication/index.ts + 5 modules
var use_authentication = __webpack_require__(66245);
// EXTERNAL MODULE: ./src/components/collection-progress-group/components/collection-progress-status-section/collection-progress-status-section.module.css
var collection_progress_status_section_module = __webpack_require__(18725);
var collection_progress_status_section_module_default = /*#__PURE__*/__webpack_require__.n(collection_progress_status_section_module);
;// CONCATENATED MODULE: ./src/components/collection-progress-group/components/collection-progress-status-section/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







/**
 * Renders collection progress status, in a nice little box.
 *
 * Without authentication,
 * we show a "Start" CTA which links to the first tutorial in the collection.
 *
 * When authenticated and one or more tutorials in the collection is "complete",
 * we show a "Continue" CTA which links to the next not-"complete" tutorial,
 * as well as a progress bar based on the count of tutorials done.
 *
 * When authenticated and all tutorials in the collection are "complete",
 * we show a "Review" CTA which links to the first tutorial in the collection.
 */ function CollectionProgressStatusSection({ completedTutorialCount , tutorialCount , isInProgress  }) {
    const { isAuthenticated  } = (0,use_authentication/* default */.Z)();
    /**
	 * Completion status
	 */ const isCompleted = completedTutorialCount == tutorialCount;
    const hasProgress = typeof isInProgress == "undefined" ? completedTutorialCount > 0 : isInProgress;
    /**
	 * Status label
	 */ const statusLabel = getStatusLabel({
        completedTutorialCount,
        tutorialCount,
        isInProgress,
        isCompleted
    });
    /**
	 * Status elements
	 */ let statusElements;
    if (isCompleted) {
        statusElements = /*#__PURE__*/ jsx_runtime_.jsx(CompleteIconAndLabel, {
            statusLabel: statusLabel
        });
    } else if (hasProgress) {
        statusElements = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CountIconAndLabel, {
                    statusLabel: statusLabel
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(progress_bar/* default */.Z, {
                    percentDone: completedTutorialCount / tutorialCount * 100
                })
            ]
        });
    } else {
        statusElements = /*#__PURE__*/ jsx_runtime_.jsx(CountIconAndLabel, {
            statusLabel: statusLabel
        });
    }
    /**
	 * Render, with a border and padding.
	 */ return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((collection_progress_status_section_module_default()).statusSectionWithBorder, {
            [(collection_progress_status_section_module_default()).isAuthenticated]: isAuthenticated
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(StatusSectionElements, {
            children: statusElements
        })
    });
}
/**
 * Get an appropriate status label for the current collection progress
 */ function getStatusLabel({ completedTutorialCount , tutorialCount , isInProgress , isCompleted  }) {
    let statusLabel;
    if (isCompleted) {
        statusLabel = "Complete";
    } else if (isInProgress) {
        statusLabel = `${completedTutorialCount}/${tutorialCount}`;
    } else {
        statusLabel = `${tutorialCount} tutorial${tutorialCount == 1 ? "" : "s"}`;
    }
    return statusLabel;
}
/**
 * Renders CollectionProgress elements, wrapped in a flex container.
 * This positions elements consistently, but does not product padding or border.
 */ function StatusSectionElements({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (collection_progress_status_section_module_default()).statusSectionElements,
        children: [
            children,
            " "
        ]
    });
}
/**
 * Displays a green check icon, and a "complete" label.
 * Label text is set through `statusLabel`.
 */ function CompleteIconAndLabel({ statusLabel  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (collection_progress_status_section_module_default()).completeIconAndLabel,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CompleteIcon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* CardEyebrowText */.VO, {
                children: statusLabel
            })
        ]
    });
}
/**
 * Displays a circle check icon, styled for composition in CollectionProgress
 */ function CompleteIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx(check_circle_fill_16/* IconCheckCircleFill16 */.D, {
        className: (collection_progress_status_section_module_default()).completeIcon
    });
}
/**
 * Displays a "collection" icon, and "X/Y tutorials" label.
 * Label text is set through `statusLabel`.
 */ function CountIconAndLabel({ statusLabel  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (collection_progress_status_section_module_default()).countIconAndLabel,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CountIcon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* CardEyebrowText */.VO, {
                children: statusLabel
            })
        ]
    });
}
/**
 * Displays a collections icon, styled for composition in CollectionProgress
 */ function CountIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx(collections_16/* IconCollections16 */.h, {
        className: (collection_progress_status_section_module_default()).countIcon
    });
}

/* harmony default export */ const collection_progress_status_section = ((/* unused pure expression or super */ null && (CollectionProgressStatusSection)));

;// CONCATENATED MODULE: ./src/components/collection-progress-group/components/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/***/ }),

/***/ 25828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nq": () => (/* reexport */ components/* CollectionProgressStatusSection */.Nq),
  "Co": () => (/* binding */ collection_progress_group),
  "s": () => (/* reexport */ parseCollectionProgress)
});

// UNUSED EXPORTS: ButtonLink

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/button-link/index.tsx
var button_link = __webpack_require__(16950);
// EXTERNAL MODULE: ./src/hooks/progress/index.ts + 7 modules
var progress = __webpack_require__(37790);
// EXTERNAL MODULE: ./src/lib/learn-client/types.ts
var types = __webpack_require__(64785);
// EXTERNAL MODULE: ./src/views/collection-view/helpers/index.ts + 3 modules
var helpers = __webpack_require__(28493);
// EXTERNAL MODULE: ./src/lib/learn-client/api/progress/index.ts + 5 modules
var api_progress = __webpack_require__(28802);
;// CONCATENATED MODULE: ./src/components/collection-progress-group/helpers/parse-collection-progress.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Given progress data for a particular collection,
 * and a count of all tutorials in that collection,
 * Return booleans representing collection progress state.
 */ function parseCollectionProgress(progressData, tutorialCount, collection) {
    /**
	 * The basics
	 */ const inProgressTutorialCount = countProgressedRecords(progressData || [], collection.id, types/* TutorialProgressStatus.in_progress */.KD.in_progress);
    const completedTutorialCount = countProgressedRecords(progressData || [], collection.id, types/* TutorialProgressStatus.complete */.KD.complete);
    const isCompleted = completedTutorialCount == tutorialCount;
    const isInProgress = inProgressTutorialCount > 0 || completedTutorialCount > 0;
    /**
	 * Return it all
	 */ return {
        completedTutorialCount,
        isCompleted,
        isInProgress,
        tutorialCount
    };
}
/**
 * Given an array of progress records, and a collection.id,
 * Return the count of records that are completed in that collection.
 */ function countProgressedRecords(progressData, collectionId, targetProgress) {
    return progressData.filter((record)=>{
        return record.collection_id == collectionId && (0,api_progress/* progressPercentToStatus */.qb)(record.complete_percent) == targetProgress;
    }).length;
}
/**
 * Given progress and tutorial data for particular collection,
 * Return a CTA object that links to the "next tutorial" in the collection.
 */ function getNextTutorialCta({ progressData , tutorials , isCompleted , isInProgress , collectionSlug , completedTutorialCount , tutorialCount  }) {
    const targetTutorial = getNextTutorial({
        isCompleted,
        progressData,
        tutorials
    });
    /**
	 * Construct a CTA link from the target tutorial
	 */ const { slug , name  } = targetTutorial;
    const href = (0,helpers/* getTutorialSlug */.Jc)(slug, collectionSlug);
    if (isCompleted) {
        return {
            href,
            text: "Review",
            ariaLabel: `Review ${name}. All tutorials completed.`
        };
    } else if (isInProgress) {
        return {
            href,
            text: "Continue",
            ariaLabel: `Continue with ${name}. ${completedTutorialCount} out of ${tutorialCount} tutorial${tutorialCount == 1 ? "" : "s"} completed.`
        };
    } else {
        return {
            href,
            text: "Start",
            ariaLabel: `Start with ${name}. ${tutorialCount} tutorial${tutorialCount == 1 ? "" : "s"} in this collection.`
        };
    }
}
/**
 * Given an array of tutorials, and an array of progressData,
 * as well as a progressMatchFn that runs against the matched
 * progressData record for each tutorial (if there is one),
 *
 * Return the first tutorial that meets the progressMatchFn criteria.
 *
 * Note that for tutorials without matched progressData,
 * progressMatchFn() will be called with `undefined`.
 */ function findTutorialByProgress(tutorials, progressData, progressMatchFn) {
    return tutorials.find((tutorial)=>{
        const matchedProgress = progressData.find((record)=>record.tutorial_id == tutorial.id);
        return progressMatchFn(matchedProgress);
    });
}
/**
 * Determine the "next tutorial" in a collection.
 *
 * For in-progress collections, the "next tutorial" is the first tutorial
 * in the collection that does not have "complete" as its progress status.
 *
 * For completed collections, and for all unauthenticated cases,
 * the "next tutorial" is the first tutorial in the collection.
 */ function getNextTutorial({ isCompleted , progressData , tutorials  }) {
    if (isCompleted || !progressData) {
        /**
		 * If we're not authenticated or have no progress,
		 * we'll use the first tutorial.
		 */ return tutorials[0];
    } else {
        /**
		 * If we do have progress data, we look for the first in-progress tutorial.
		 * Note: we may skip tutorials with no progress, and "visited" tutorials,
		 * in order to return the first "in_progress" tutorial.
		 */ const firstInProgressTutorial = findTutorialByProgress(tutorials, progressData, (progress)=>progress && (0,api_progress/* progressPercentToStatus */.qb)(progress.complete_percent) == types/* TutorialProgressStatus.in_progress */.KD.in_progress);
        if (firstInProgressTutorial) {
            return firstInProgressTutorial;
        }
        /**
		 * If there's no "in_progress" tutorial, we find the first incomplete
		 * tutorial. Note: This could be a tutorial without a progress record,
		 * or it could be a "visited" tutorial.
		 */ const firstIncompleteTutorial = findTutorialByProgress(tutorials, progressData, (progress)=>!progress || (0,api_progress/* progressPercentToStatus */.qb)(progress.complete_percent) == types/* TutorialProgressStatus.visited */.KD.visited);
        if (firstIncompleteTutorial) {
            return firstIncompleteTutorial;
        }
        /**
		 * If there are no incomplete tutorials, then all tutorials are
		 * complete. We return the first tutorial.
		 */ return tutorials[0];
    }
}


;// CONCATENATED MODULE: ./src/components/collection-progress-group/helpers/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

// EXTERNAL MODULE: ./src/components/collection-progress-group/components/index.tsx + 1 modules
var components = __webpack_require__(95019);
// EXTERNAL MODULE: ./src/components/collection-progress-group/collection-progress-group.module.css
var collection_progress_group_module = __webpack_require__(239);
var collection_progress_group_module_default = /*#__PURE__*/__webpack_require__.n(collection_progress_group_module);
;// CONCATENATED MODULE: ./src/components/collection-progress-group/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * Displays collection progress status and CTA.
 */ function CollectionProgressGroup({ collection  }) {
    const { id , slug , tutorials  } = collection;
    /**
	 * Get collection progress, which affects the
	 * CTA bar we display for the collection.
	 */ const { data: progressData  } = (0,progress/* useCollectionProgress */.N2)({
        collectionId: id
    });
    /**
	 * Parse the progress-related information we need from the progress records,
	 * current collection slug, and list of tutorials in this collection.
	 */ const { completedTutorialCount , isCompleted , isInProgress , tutorialCount  } = (0,external_react_.useMemo)(()=>parseCollectionProgress(progressData, tutorials.length, {
            id,
            slug
        }), [
        progressData,
        tutorials,
        id,
        slug
    ]);
    /**
	 * Parse the CTA we want to show for the "next" tutorial in the collection.
	 * This "next" tutorial varies based on the progress state
	 */ const tutorialCta = (0,external_react_.useMemo)(()=>getNextTutorialCta({
            progressData,
            tutorials,
            isCompleted,
            isInProgress,
            completedTutorialCount,
            tutorialCount,
            collectionSlug: slug
        }), [
        completedTutorialCount,
        isCompleted,
        isInProgress,
        progressData,
        slug,
        tutorialCount,
        tutorials
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (collection_progress_group_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(button_link/* default */.Z, {
                "aria-label": tutorialCta.ariaLabel,
                href: tutorialCta.href,
                text: tutorialCta.text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* CollectionProgressStatusSection */.Nq, {
                completedTutorialCount: completedTutorialCount,
                tutorialCount: tutorialCount,
                isInProgress: isInProgress
            })
        ]
    });
}
/**
 * Note: ButtonLink is exported here so that Swingset can work.
 * We can use peerComponents for Swingset, but this doesn't make
 * the component available in LiveComponent, which is a spot where
 * we want it.
 */ 
/* harmony default export */ const collection_progress_group = (CollectionProgressGroup);


/***/ }),

/***/ 96203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var components_icon_card_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function IconCardLinkGridList({ cards , productSlug , gridGap , fixedColumns  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        gridGap: gridGap,
        fixedColumns: fixedColumns,
        children: cards.map((iconCard, key)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                icon: iconCard.icon,
                productSlug: iconCard.productSlug || productSlug,
                text: iconCard.text,
                url: iconCard.url
            }, key);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCardLinkGridList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88805);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88699);
/* harmony import */ var _icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


const IconCardLink = ({ icon , productSlug ="hcp" , text , url  })=>{
    let colorToken;
    if (productSlug === "sentinel" || productSlug === "hcp") {
        colorToken = "--token-color-hashicorp-brand";
    } else {
        colorToken = `--token-color-${productSlug}-brand`;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ariaLabel: text,
        className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        href: url,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),
                style: {
                    "--icon-color": `var(${colorToken})`
                },
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_icon_card_link_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: text
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCardLink);


/***/ }),

/***/ 92829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ progress_bar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/lib/clamp.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Given a number, a minimum value, and a maximum value,
 * Return the minimum value if the number is less than the minimum,
 * or the maximum value if the number is greater than the maximum,
 * or the number itself if it is greater than the minimum or less than the maximum.
 *
 * Note that if the minimum value provided is greater
 * than the maximum value provided, this function
 * will throw an error.
 */ function clamp(/** The number to clamp. */ num, /** The minimum allowable value. */ min, /** The maximum allowable value. */ max) {
    if (min > max) {
        throw new Error("clamp was provided a min value greater than its max value. Please ensure the min value is less than or equal to the max value.");
    }
    return Math.min(Math.max(num, min), max);
}

// EXTERNAL MODULE: ./src/components/progress-bar/progress-bar.module.css
var progress_bar_module = __webpack_require__(90190);
var progress_bar_module_default = /*#__PURE__*/__webpack_require__.n(progress_bar_module);
;// CONCATENATED MODULE: ./src/components/progress-bar/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Displays a bar that fills to the percent provided
 * through the `percentDone` prop.
 *
 * `ProgressBar` is always `4px` tall, and grows to fill the width of its
 * parent container. It also accepts an optional `rounded` boolean prop,
 * which defaults to `true`. If `rounded` is set to `false`, the ends of
 * the progress bar will end in sharp corners.
 */ function ProgressBar({ percentDone , rounded =true  }) {
    const safePercentDone = clamp(percentDone, 0, 100);
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (progress_bar_module_default()).root,
        style: {
            "--border-radius": rounded ? "2px" : "0px",
            "--portion-done": safePercentDone / 100
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (progress_bar_module_default()).indicator
        })
    });
}
/* harmony default export */ const progress_bar = (ProgressBar);


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

/***/ 54696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ views_product_downloads_view_boundary_server__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var views_product_downloads_view_boundary_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88468);
/* harmony import */ var views_product_downloads_view_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view_boundary_server__WEBPACK_IMPORTED_MODULE_0__, views_product_downloads_view_boundary__WEBPACK_IMPORTED_MODULE_1__]);
([views_product_downloads_view_boundary_server__WEBPACK_IMPORTED_MODULE_0__, views_product_downloads_view_boundary__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_product_downloads_view_boundary__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ humanArch),
/* harmony export */   "m": () => (/* binding */ getFileExtension)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Given a release architecture string,
 * Return a more human-readable version that represents the architecture.
 */ function humanArch(arch) {
    if (arch === "386") {
        return "32-bit";
    }
    if (arch === "amd64") {
        return "64-bit";
    }
    return arch;
}
/**
 * Given a release artifact filename, return the filename extension
 */ function getFileExtension(filename) {
    return filename.substring(filename.lastIndexOf(".") + 1, filename.length);
}


/***/ }),

/***/ 86292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ DesktopClientCallout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88918);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14617);
/* harmony import */ var components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96203);
/* harmony import */ var _hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83793);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19479);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99361);
/* harmony import */ var _desktop_client_callout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18656);
/* harmony import */ var _desktop_client_callout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_desktop_client_callout_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__]);
([components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Components





// Local imports


// Styles

/**
 * Render a callout to download the Boundary Desktop Client.
 */ function DesktopClientCallout({ desktopClientProps  }) {
    const { latestVersion , builds  } = desktopClientProps;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        elevation: "low",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: (_desktop_client_callout_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                level: 2,
                size: 200,
                weight: "semibold",
                children: `Desktop Client v${latestVersion}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_card_link_grid_list__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fixedColumns: 3,
                gridGap: "16px",
                cards: builds.map(({ os , url , filename , arch  })=>{
                    const icon = ___WEBPACK_IMPORTED_MODULE_5__/* .operatingSystemIcons */ .fN[os] || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_4__/* .IconDownload16 */ .J, {});
                    const text = `.${(0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getFileExtension */ .m)(filename)} (${(0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .humanArch */ .H)(arch)})`;
                    return {
                        icon,
                        url,
                        text
                    };
                })
            })
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ IconLinuxColor16)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Note: this should be replaced with an HDS component, once available.
 * To check availability, search for "linux" at:
 * https://flight-hashicorp.vercel.app/
 */ 
function IconLinuxColor16() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.1006 12.6091C14.1004 12.6089 14.1002 12.6087 14.1002 12.6085C13.9873 12.4811 13.9335 12.2448 13.8757 11.9931C13.818 11.7415 13.7534 11.4703 13.5469 11.2945C13.5465 11.2941 13.546 11.2937 13.5456 11.2933C13.5047 11.2576 13.4626 11.2275 13.4204 11.2024C13.378 11.1772 13.335 11.1568 13.2921 11.1406C13.5791 10.2892 13.4666 9.44144 13.1767 8.67547C12.8212 7.73519 12.2003 6.91605 11.7261 6.35568C11.1953 5.6861 10.6762 5.05056 10.6865 4.11177C10.7023 2.67903 10.844 0.0220954 8.32274 0.0185605C8.22023 0.0183745 8.11325 0.0226535 8.00181 0.0315838C5.18432 0.258374 5.93167 3.23512 5.88981 4.23177C5.83827 4.9607 5.69055 5.53521 5.18916 6.24777C4.60032 6.94805 3.77092 8.08163 3.37818 9.26172C3.19288 9.81856 3.10469 10.3862 3.18599 10.9235C3.16051 10.9464 3.13632 10.9704 3.11306 10.9949C2.94023 11.1797 2.81241 11.4033 2.67009 11.5538C2.53706 11.6867 2.34767 11.7371 2.1393 11.8117C1.93092 11.8865 1.70227 11.9966 1.56348 12.263C1.56348 12.263 1.56348 12.2632 1.5633 12.2632C1.56311 12.2636 1.56292 12.2641 1.56255 12.2645C1.49725 12.3864 1.47604 12.5179 1.47604 12.6513C1.47604 12.7746 1.49427 12.8997 1.51269 13.02C1.55102 13.2704 1.5899 13.5073 1.53837 13.6677C1.37353 14.1184 1.35232 14.4301 1.46841 14.6563C1.58488 14.8829 1.82395 14.9828 2.09427 15.0394C2.63492 15.1521 3.36702 15.1242 3.94395 15.4301L3.99362 15.3365L3.94451 15.4303C4.56218 15.7533 5.18841 15.8679 5.68795 15.7538C6.05037 15.6712 6.34432 15.4554 6.49539 15.1235C6.88609 15.1216 7.31492 14.956 8.00181 14.9183C8.46785 14.8807 9.04999 15.0839 9.71957 15.0467C9.73706 15.1192 9.76238 15.1892 9.79697 15.2556C9.79736 15.2561 9.79771 15.2569 9.79811 15.2574C10.0576 15.7765 10.5399 16.0139 11.0539 15.9734C11.5685 15.9328 12.1157 15.6294 12.5581 15.103L12.477 15.0349L12.5587 15.1023C12.9803 14.591 13.68 14.3791 14.1442 14.0993C14.3762 13.9594 14.5643 13.7842 14.579 13.5296C14.5934 13.2753 14.444 12.9903 14.1006 12.6091Z",
                fill: "#202020"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.3674 13.5175C14.3584 13.6745 14.2448 13.7912 14.0347 13.9177C13.615 14.1709 12.871 14.3912 12.396 14.9666C11.9834 15.4576 11.4803 15.7272 11.0373 15.7622C10.5944 15.7972 10.2122 15.6133 9.98672 15.1611L9.98633 15.1601L9.98579 15.159C9.84586 14.893 9.90409 14.4734 10.0219 14.0306C10.1396 13.588 10.3089 13.1333 10.3316 12.764V12.7629C10.3554 12.2896 10.382 11.8762 10.4615 11.5571C10.5411 11.2381 10.6663 11.0223 10.8881 10.9008C10.8985 10.8952 10.9087 10.8898 10.919 10.8848C10.9441 11.2946 11.1471 11.7129 11.5057 11.8033C11.8983 11.9067 12.4641 11.57 12.703 11.2952C12.7508 11.2933 12.7973 11.2909 12.8425 11.2898C13.0522 11.2847 13.2278 11.2969 13.4075 11.4539L13.4081 11.4544L13.4086 11.4548C13.5467 11.5718 13.6124 11.7929 13.6693 12.0403C13.7262 12.2879 13.7716 12.5575 13.9424 12.7497L13.9426 12.7499L13.9428 12.7503C14.271 13.1144 14.3765 13.3603 14.3674 13.5175Z",
                fill: "#F8BF11"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.3904 14.6782L6.39021 14.6793V14.6806C6.35226 15.1781 6.0717 15.449 5.64082 15.5474C5.21031 15.6458 4.62631 15.5478 4.04324 15.2429C4.04305 15.2429 4.04286 15.2427 4.04268 15.2427C3.39747 14.9009 2.63003 14.935 2.13756 14.8321C1.89142 14.7807 1.73068 14.7033 1.657 14.5597C1.58333 14.4159 1.58165 14.1653 1.73831 13.7379L1.73905 13.7361L1.73961 13.7342C1.81719 13.4951 1.7597 13.2335 1.72212 12.988C1.68454 12.7426 1.66612 12.5191 1.75003 12.3636L1.75077 12.3621C1.85812 12.1552 2.01551 12.0812 2.21086 12.0112C2.4064 11.9411 2.63803 11.886 2.82091 11.7026L2.82203 11.7016L2.82296 11.7007C2.99207 11.5223 3.11914 11.2985 3.26779 11.1398C3.39319 11.0058 3.51877 10.9171 3.70798 10.9158C3.71021 10.916 3.71226 10.916 3.71449 10.9158C3.74761 10.916 3.78277 10.9187 3.81998 10.9245C4.07114 10.9625 4.29012 11.1381 4.5011 11.4242L5.11021 12.5344L5.1104 12.5349L5.11077 12.5353C5.27282 12.8737 5.61514 13.246 5.90519 13.6257C6.19524 14.0053 6.41961 14.3865 6.3904 14.6782Z",
                fill: "#F8BF11"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.42836 4.3291C9.37943 4.23329 9.27953 4.14212 9.10948 4.07236L9.10911 4.07217L9.10855 4.07198C8.75488 3.92054 8.60139 3.90975 8.40399 3.78138C8.08269 3.57487 7.8172 3.5025 7.59655 3.50343C7.48102 3.5038 7.37776 3.52426 7.28529 3.55626C7.01646 3.64873 6.83804 3.84166 6.72623 3.94752L6.72604 3.94771C6.72604 3.94789 6.72585 3.94789 6.72585 3.94808C6.7039 3.96892 6.67562 3.98789 6.60716 4.03812C6.53813 4.08854 6.43469 4.16445 6.28585 4.27608C6.15357 4.37524 6.1106 4.50436 6.15636 4.65561C6.20195 4.80687 6.34781 4.98138 6.6146 5.13226L6.61497 5.13264L6.61553 5.13282C6.78111 5.23012 6.89423 5.36129 7.02409 5.46566C7.08902 5.51775 7.1573 5.56426 7.23953 5.59943C7.32176 5.63459 7.41776 5.6584 7.53795 5.66547C7.81999 5.68185 8.02762 5.59719 8.21088 5.49226C8.3945 5.38752 8.55002 5.25933 8.72846 5.20147L8.72883 5.20129L8.72922 5.2011C9.09497 5.08687 9.35583 4.85673 9.43748 4.63812C9.47841 4.52873 9.47711 4.42492 9.42836 4.3291Z",
                fill: "#D6A312"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.50046 4.86904C8.20947 5.02072 7.86957 5.20467 7.5079 5.20467C7.14641 5.20467 6.86083 5.0376 6.65543 4.87481C6.55273 4.7935 6.46939 4.71257 6.4065 4.65378C6.2974 4.56766 6.31047 4.44687 6.35529 4.45044C6.43043 4.45982 6.44179 4.55875 6.48911 4.60299C6.55311 4.6629 6.63329 4.74048 6.73041 4.81751C6.92464 4.97137 7.18362 5.12113 7.5079 5.12113C7.83162 5.12113 8.20951 4.93108 8.44018 4.80169C8.57086 4.72838 8.73715 4.59698 8.87286 4.49737C8.97668 4.42115 8.9729 4.32938 9.05863 4.33937C9.14435 4.34936 9.08094 4.44095 8.96088 4.54573C8.84083 4.6505 8.65301 4.78952 8.50046 4.86904V4.86904Z",
                fill: "#202020"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.9562 11.0785C12.9158 11.077 12.876 11.0772 12.8373 11.0781C12.8338 11.0783 12.8302 11.0783 12.8265 11.0783C12.9264 10.7628 12.7054 10.53 12.1164 10.2636C11.5056 9.99499 11.0189 10.0216 10.9366 10.5667C10.9314 10.5952 10.9272 10.6244 10.924 10.6538C10.8782 10.6698 10.8325 10.6899 10.7863 10.715C10.4996 10.872 10.343 11.1566 10.2559 11.5061C10.169 11.8551 10.1439 12.2768 10.1201 12.7511C10.1201 12.7513 10.1201 12.7513 10.1201 12.7515C10.1054 12.9898 10.0072 13.3124 9.9078 13.654C8.90724 14.3678 7.51859 14.677 6.33943 13.8722C6.25962 13.7459 6.1679 13.6207 6.07357 13.4971C6.01329 13.4183 5.95134 13.3399 5.88994 13.2625C6.01087 13.2627 6.11376 13.2428 6.19692 13.2052C6.30036 13.1582 6.37292 13.083 6.40901 12.9862C6.48083 12.7929 6.40864 12.5202 6.1785 12.2086C5.94836 11.8971 5.55859 11.5457 4.98594 11.1944C4.98594 11.1944 4.98594 11.1944 4.98594 11.1942C4.5651 10.9325 4.32994 10.6117 4.2198 10.2635C4.10948 9.91499 4.12492 9.53824 4.20994 9.16634C4.37292 8.45248 4.79152 7.75815 5.05869 7.32243C5.1305 7.26959 5.08436 7.42066 4.78817 7.97061C4.52287 8.47333 4.02669 9.6335 4.70594 10.5392C4.72417 9.89471 4.87804 9.23741 5.13645 8.62252C5.51283 7.7695 6.29999 6.28987 6.3625 5.11071C6.39487 5.13415 6.50557 5.20894 6.55487 5.23703C6.55506 5.23722 6.55506 5.23722 6.55524 5.23722C6.69962 5.32224 6.80808 5.44652 6.94855 5.55945C7.08938 5.67257 7.2652 5.77024 7.53087 5.78568C7.55636 5.78717 7.58129 5.78792 7.60566 5.78792C7.87952 5.78792 8.0931 5.69862 8.27097 5.59685C8.46429 5.48634 8.61869 5.36392 8.76512 5.31629C8.76531 5.3161 8.7655 5.3161 8.76568 5.3161C9.07508 5.21936 9.32084 5.0482 9.46073 4.84875C9.70111 5.7961 10.26 7.16448 10.6193 7.8322C10.8103 8.18643 11.1902 8.93917 11.3543 9.84615C11.4583 9.84297 11.5729 9.85806 11.6955 9.88948C12.1248 8.77674 11.3316 7.57841 10.9688 7.24464C10.8224 7.1025 10.8154 7.03888 10.8881 7.04185C11.2814 7.38995 11.798 8.08967 11.986 8.87962C12.0717 9.23979 12.09 9.6186 11.998 9.99236C12.0429 10.011 12.0886 10.0312 12.135 10.0532C12.8239 10.3886 13.0786 10.6804 12.9562 11.0785Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.04663 8.07056C7.41079 8.07285 6.79009 8.35789 6.26507 8.88872C5.74005 9.41954 5.33494 10.1716 5.10229 11.0474L5.17206 11.0908V11.0948C5.70922 11.4358 6.09178 11.778 6.3282 12.098V12.098H6.32824C6.57815 12.4364 6.68936 12.766 6.58347 13.051L6.58344 13.0511L6.5834 13.0512C6.52979 13.1949 6.41558 13.3101 6.27406 13.3745L6.27381 13.3746L6.27359 13.3747C6.25871 13.3815 6.24282 13.3864 6.2274 13.3922C6.31205 13.5032 6.39497 13.6176 6.47137 13.7352C7.55021 14.4532 8.80522 14.1875 9.7471 13.5379C9.83909 13.2209 9.92286 12.9254 9.93438 12.7406C9.95823 12.2658 9.98218 11.8357 10.0754 11.4611V11.461C10.1694 11.0838 10.3523 10.7405 10.697 10.5517L10.6972 10.5516L10.6974 10.5515C10.7168 10.541 10.7363 10.5348 10.7557 10.5256C10.7619 10.4883 10.7705 10.4524 10.781 10.4178C10.5037 9.70689 10.1052 9.11603 9.62545 8.70416C9.14566 8.2923 8.60128 8.07383 8.04663 8.07056V8.07056ZM10.7537 10.5332L10.7527 10.5389C10.7528 10.5383 10.7531 10.5377 10.7532 10.537C10.7534 10.5358 10.7535 10.5344 10.7537 10.5332Z",
                fill: "#E6E6E6"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.46057 3.23774C9.46205 3.42546 9.42968 3.58527 9.35843 3.74843C9.31787 3.84146 9.27119 3.9196 9.21519 3.98732C9.19619 3.9782 9.17649 3.96946 9.15601 3.96109C9.08512 3.93076 9.02243 3.90583 8.96626 3.88462C8.91005 3.86341 8.8662 3.84892 8.82098 3.83329C8.85374 3.79366 8.91828 3.74697 8.9423 3.68836C8.97876 3.59999 8.99662 3.51366 8.99997 3.41078C8.99997 3.40669 9.00127 3.40315 9.00127 3.39831C9.00332 3.29971 8.9903 3.21543 8.96146 3.12911C8.93132 3.0385 8.89298 2.97338 8.83755 2.91925C8.78193 2.86511 8.72648 2.84055 8.65988 2.83831C8.65672 2.83813 8.65374 2.83813 8.65058 2.83813C8.58806 2.83831 8.53374 2.8599 8.47753 2.90678C8.41856 2.95608 8.37484 3.01915 8.33839 3.10697C8.30211 3.19478 8.28425 3.28185 8.2807 3.38529C8.28016 3.38938 8.28016 3.39292 8.28016 3.39701C8.27886 3.45394 8.28258 3.50604 8.29132 3.55664C8.16332 3.49283 7.99956 3.4463 7.88644 3.41932C7.87993 3.37039 7.87621 3.31997 7.8751 3.26713V3.25281C7.87305 3.06564 7.90375 2.90509 7.97575 2.74211C8.04775 2.57895 8.13686 2.46174 8.26224 2.3663C8.38782 2.27104 8.51119 2.22732 8.65722 2.22583H8.6641C8.80698 2.22583 8.92922 2.26788 9.0548 2.35885C9.18224 2.4515 9.27415 2.56723 9.34819 2.72909C9.42075 2.88685 9.45573 3.04109 9.45928 3.22397C9.45926 3.22881 9.45926 3.2329 9.46057 3.23774V3.23774Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.30105 3.4247C7.28226 3.4301 7.26403 3.43587 7.24598 3.442C7.14366 3.47735 7.06241 3.51636 6.9839 3.56827C6.99153 3.51395 6.99264 3.45888 6.98669 3.3973C6.98613 3.39395 6.98613 3.39116 6.98613 3.38781C6.97795 3.30613 6.96064 3.23767 6.93181 3.16846C6.90111 3.09646 6.86669 3.04567 6.82148 3.0066C6.78055 2.97125 6.74185 2.95488 6.69906 2.95525C6.69478 2.95525 6.69032 2.95543 6.68585 2.95581C6.63785 2.9599 6.59804 2.98334 6.56027 3.0293C6.52269 3.07506 6.49795 3.13199 6.48009 3.20753C6.46223 3.28288 6.45757 3.35692 6.46502 3.44195C6.46502 3.4453 6.46576 3.44809 6.46576 3.45143C6.47395 3.53385 6.4905 3.60232 6.5199 3.67153C6.55004 3.74278 6.58502 3.79357 6.63023 3.83264C6.63785 3.83916 6.6453 3.84511 6.65274 3.85032C6.60585 3.8866 6.57435 3.91233 6.53566 3.94061C6.51091 3.95866 6.48152 3.98024 6.44728 4.00554C6.37268 3.93559 6.31445 3.84777 6.26347 3.73187C6.20319 3.59493 6.171 3.45782 6.16133 3.29596V3.29466C6.1524 3.1328 6.16821 2.99363 6.21268 2.84963C6.25733 2.70563 6.31686 2.60145 6.40338 2.51587C6.4897 2.4301 6.57677 2.38693 6.6817 2.38154C6.68989 2.38117 6.69789 2.38098 6.70589 2.38098C6.80096 2.38117 6.88579 2.4128 6.97361 2.48294C7.06886 2.55903 7.14086 2.65633 7.20114 2.79345C7.26161 2.93056 7.29379 3.06768 7.30273 3.22954V3.23084C7.307 3.29875 7.30645 3.36275 7.30105 3.4247V3.4247Z",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.77832 3.81187C7.79035 3.85049 7.85261 3.84409 7.88858 3.86262C7.92014 3.87887 7.94552 3.91451 7.98101 3.91553C8.01488 3.91651 8.06759 3.9038 8.072 3.87021C8.07782 3.82582 8.013 3.79762 7.9713 3.78136C7.91763 3.76043 7.84887 3.74982 7.79852 3.77781C7.78699 3.78422 7.77439 3.79926 7.77832 3.81187V3.81187Z",
                fill: "#202020"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M7.4105 3.81187C7.39846 3.85049 7.33621 3.84409 7.30024 3.86262C7.26868 3.87887 7.24329 3.91451 7.20781 3.91553C7.17394 3.91651 7.12123 3.9038 7.11682 3.87021C7.111 3.82582 7.17581 3.79762 7.21752 3.78136C7.27119 3.76043 7.33995 3.74982 7.39029 3.77781C7.40183 3.78422 7.41442 3.79926 7.4105 3.81187V3.81187Z",
                fill: "#202020"
            })
        ]
    });
}


/***/ }),

/***/ 19479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JF": () => (/* reexport safe */ _icon_linux_color_16__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "Qb": () => (/* reexport safe */ _desktop_client_callout__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "fN": () => (/* reexport safe */ _operating_system_icons__WEBPACK_IMPORTED_MODULE_2__.f)
/* harmony export */ });
/* harmony import */ var _icon_linux_color_16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63621);
/* harmony import */ var _desktop_client_callout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86292);
/* harmony import */ var _operating_system_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44017);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_desktop_client_callout__WEBPACK_IMPORTED_MODULE_1__, _operating_system_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_desktop_client_callout__WEBPACK_IMPORTED_MODULE_1__, _operating_system_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ operatingSystemIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83793);
/* harmony import */ var _hashicorp_flight_icons_svg_react_apple_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8755);
/* harmony import */ var _hashicorp_flight_icons_svg_react_microsoft_color_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52911);
/* harmony import */ var views_product_downloads_view_boundary_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view_boundary_components__WEBPACK_IMPORTED_MODULE_4__]);
views_product_downloads_view_boundary_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Icons




/* Note: linux icon should be added to HDS Flight Icons soon */ 
/**
 * Map an operating system to its associated 16px color icon.
 */ const operatingSystemIcons = {
    darwin: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_apple_16__WEBPACK_IMPORTED_MODULE_2__/* .IconApple16 */ .a, {}),
    linux: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_downloads_view_boundary_components__WEBPACK_IMPORTED_MODULE_4__/* .IconLinuxColor16 */ .JF, {}),
    windows: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_microsoft_color_16__WEBPACK_IMPORTED_MODULE_3__/* .IconMicrosoftColor16 */ .m, {}),
    /**
	 * Note: remaining OS use generic download icon, for now,
	 * as they're not displayed in any current context,
	 * and sourcing these icons is outside the scope of current work.
	 */ freebsd: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_1__/* .IconDownload16 */ .J, {}),
    openbsd: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_1__/* .IconDownload16 */ .J, {}),
    netbsd: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_1__/* .IconDownload16 */ .J, {}),
    archlinux: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_download_16__WEBPACK_IMPORTED_MODULE_1__/* .IconDownload16 */ .J, {})
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_product_downloads_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6647);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([views_product_downloads_view__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // View


// Components

/**
 * Render the Boundary downloads page.
 */ function BoundaryDownloadsView({ desktopClientProps , ...baseProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_product_downloads_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...baseProps,
        merchandisingSlot: {
            position: "below",
            slot: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .DesktopClientCallout */ .Qb, {
                desktopClientProps: desktopClientProps
            })
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoundaryDownloadsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var data_boundary_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40731);
/* harmony import */ var lib_fetch_release_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18445);
/* harmony import */ var views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_fetch_release_data__WEBPACK_IMPORTED_MODULE_1__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_2__]);
([lib_fetch_release_data__WEBPACK_IMPORTED_MODULE_1__, views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Data

// Server


/**
 * The Desktop Client CTA uses separate release data, fetched with this slug.
 */ const DESKTOP_CLIENT_RELEASE_SLUG = "boundary-desktop";
/**
 * Get static props for the Boundary downloads page.
 */ const getStaticProps = async ()=>{
    /**
	 * Get the base static props for the view,
	 * which fetches the `boundary` release data.
	 */ const { props: baseProps , ...restBaseResult } = await (0,views_product_downloads_view_server__WEBPACK_IMPORTED_MODULE_2__/* .generateGetStaticProps */ .A)(data_boundary_json__WEBPACK_IMPORTED_MODULE_0__)();
    /**
	 * Get additional release data for the Boundary Desktop Client,
	 * which we need to display the download CTA in the "merchandising" slot.
	 */ const { props: releaseProps  } = await (0,lib_fetch_release_data__WEBPACK_IMPORTED_MODULE_1__/* .generateStaticProps */ .a$)(DESKTOP_CLIENT_RELEASE_SLUG);
    /**
	 * For our Desktop Client CTA,
	 * we only need the latest version number & associated builds.
	 */ const { releases , latestVersion  } = releaseProps;
    const desktopClientProps = {
        latestVersion,
        builds: releases.versions[latestVersion].builds
    };
    /**
	 * Return the combined baseProps and Desktop Client data
	 */ const finalProps = {
        ...baseProps,
        desktopClientProps
    };
    return {
        props: finalProps,
        ...restBaseResult
    };
};


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

/***/ 22493:
/***/ ((module) => {

"use strict";
module.exports = require("hast-util-to-string");

/***/ }),

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

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

/***/ 62555:
/***/ ((module) => {

"use strict";
module.exports = require("refractor");

/***/ }),

/***/ 68221:
/***/ ((module) => {

"use strict";
module.exports = require("rehype-parse");

/***/ }),

/***/ 64545:
/***/ ((module) => {

"use strict";
module.exports = require("rehype-stringify");

/***/ }),

/***/ 56563:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/parse");

/***/ }),

/***/ 95370:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/prerelease");

/***/ }),

/***/ 97326:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/rsort");

/***/ }),

/***/ 61865:
/***/ ((module) => {

"use strict";
module.exports = require("semver/functions/valid");

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

/***/ 94825:
/***/ ((module) => {

"use strict";
module.exports = require("unified");

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

/***/ }),

/***/ 40731:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"Boundary","slug":"boundary","algoliaConfig":{"indexName":"product_BOUNDARY","searchOnlyApiKey":"8308498decdf72e11590fc6356e5fdde"},"analyticsConfig":{"includedDomains":"boundaryproject.io www.boundaryproject.io","segmentWriteKey":"JkNZiSgwVRAAFrkqqdHLxf0xfcZuhYYc"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Boundary by HashiCorp","description":"Boundary automates secure identity-based user access to hosts and services across environments.","image":"https://www.boundaryproject.io/boundary-public/img/og-image.png","icon":[{"href":"/boundary-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/boundary/tutorials","type":"inbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","shortName":"Docs"},{"iconName":"api","name":"API","path":"api-docs"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,9139,3643,1877,453,7708,8942,4203,8725,3076,504,1960,1419,1023,998,4975,2851,5888,8755,265,7232,4884,6182,6415,4506,4653], () => (__webpack_exec__(54696)));
module.exports = __webpack_exports__;

})();