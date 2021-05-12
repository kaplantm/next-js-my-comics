webpackHotUpdate_N_E("pages/series/[series]/issues/[issueNumber]",{

/***/ "./src/components/masonry-layout/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/masonry-layout/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var _components_viewable_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/viewable-image */ \"./src/components/viewable-image/index.tsx\");\n/* harmony import */ var _lib_hooks_use_key_press__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/hooks/use-key-press */ \"./src/lib/hooks/use-key-press.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-styles */ \"./src/components/masonry-layout/use-styles.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/tkaplan/Repos/comics/src/components/masonry-layout/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar pageSize = 12;\n/**\n * MasonryLayout component\n * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99\n */\n\nvar MasonryLayout = function MasonryLayout(_ref) {\n  _s();\n\n  var _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? 3 : _ref$columns,\n      _ref$smallWidthColumn = _ref.smallWidthColumns,\n      smallWidthColumns = _ref$smallWidthColumn === void 0 ? 2 : _ref$smallWidthColumn,\n      _ref$gap = _ref.gap,\n      gap = _ref$gap === void 0 ? 20 : _ref$gap,\n      images = _ref.images;\n\n  var _useKeyPress = Object(_lib_hooks_use_key_press__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(['ArrowRight', 'ArrowLeft']),\n      isRightArrowPressed = _useKeyPress.ArrowRight,\n      isLeftArrowPressed = _useKeyPress.ArrowLeft;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      openIndex = _useState[0],\n      setOpenIndex = _useState[1];\n\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  var columnWrapper = {};\n  var result = [];\n\n  var isSmallWindow = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('(max-width:600px)');\n\n  var numColumns = isSmallWindow ? smallWidthColumns : columns;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(pageSize),\n      numItemsToDisplay = _useState2[0],\n      setNumItemsToDisplay = _useState2[1];\n\n  var showShowMore = numItemsToDisplay < images.length;\n  var safetlyChangeOpenIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])(function (delta) {\n    setOpenIndex(function (prev) {\n      return Math.min(numItemsToDisplay, Math.max(0, prev + delta));\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (isLeftArrowPressed) {\n      safetlyChangeOpenIndex(-1);\n    } else if (isRightArrowPressed) {\n      safetlyChangeOpenIndex(1);\n    }\n  }, [isRightArrowPressed, isLeftArrowPressed, safetlyChangeOpenIndex]);\n\n  var showMoreItem = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.showMoreButtonContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      variant: \"contained\",\n      color: \"default\",\n      onClick: onShowMore,\n      className: classes.showMoreButton,\n      children: \"Show More\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, \"showMoreItem\", false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n\n  var itemsToDisplay = images.slice(0, numItemsToDisplay);\n\n  function onShowMore() {\n    setNumItemsToDisplay(function (prev) {\n      return prev + pageSize;\n    });\n  } // create columns\n\n\n  for (var i = 0; i < numColumns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < itemsToDisplay.length; _i++) {\n    var columnIndex = _i % numColumns;\n    var image = images[_i];\n    columnWrapper[\"column\".concat(columnIndex)].push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageMatte,\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_viewable_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: image,\n        index: _i,\n        open: openIndex === _i,\n        setOpenIndex: setOpenIndex,\n        changeOpenIndex: safetlyChangeOpenIndex\n      }, image, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)\n    }, \"column\".concat(columnIndex).concat(_i), false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this));\n  }\n\n  if (showShowMore) {\n    columnWrapper[\"column\".concat(Math.floor(numColumns / 2))].push(showMoreItem);\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < numColumns; _i2++) {\n    result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      children: columnWrapper[\"column\".concat(_i2)]\n    }, \"column\".concat(_i2), false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.masonryResultContainer,\n    children: result\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 115,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(MasonryLayout, \"fXRGcI8+kd3FSJKSvCYtX+xiPJI=\", false, function () {\n  return [_lib_hooks_use_key_press__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _use_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvaW5kZXgudHN4PzFmZTkiXSwibmFtZXMiOlsicGFnZVNpemUiLCJNYXNvbnJ5TGF5b3V0IiwiY29sdW1ucyIsInNtYWxsV2lkdGhDb2x1bW5zIiwiZ2FwIiwiaW1hZ2VzIiwidXNlS2V5UHJlc3MiLCJpc1JpZ2h0QXJyb3dQcmVzc2VkIiwiQXJyb3dSaWdodCIsImlzTGVmdEFycm93UHJlc3NlZCIsIkFycm93TGVmdCIsInVzZVN0YXRlIiwib3BlbkluZGV4Iiwic2V0T3BlbkluZGV4IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNvbHVtbldyYXBwZXIiLCJyZXN1bHQiLCJpc1NtYWxsV2luZG93IiwibnVtQ29sdW1ucyIsIm51bUl0ZW1zVG9EaXNwbGF5Iiwic2V0TnVtSXRlbXNUb0Rpc3BsYXkiLCJzaG93U2hvd01vcmUiLCJsZW5ndGgiLCJzYWZldGx5Q2hhbmdlT3BlbkluZGV4IiwidXNlQ2FsbGJhY2siLCJkZWx0YSIsInByZXYiLCJNYXRoIiwibWluIiwibWF4IiwidXNlRWZmZWN0Iiwic2hvd01vcmVJdGVtIiwic2hvd01vcmVCdXR0b25Db250YWluZXIiLCJvblNob3dNb3JlIiwic2hvd01vcmVCdXR0b24iLCJpdGVtc1RvRGlzcGxheSIsInNsaWNlIiwiaSIsImNvbHVtbkluZGV4IiwiaW1hZ2UiLCJwdXNoIiwiaW1hZ2VNYXR0ZSIsIm1hcmdpbkJvdHRvbSIsImZsb29yIiwibWFyZ2luTGVmdCIsImZsZXgiLCJtYXNvbnJ5UmVzdWx0Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FVaEI7QUFBQTs7QUFBQSwwQkFUSkMsT0FTSTtBQUFBLE1BVEpB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QUFBO0FBQUEsV0FBUDtBQUNELENBdkdEOztHQUFNaEIsYTtVQWNBSyxnRSxFQUVZUyxtRDs7O0tBaEJaZCxhO0FBeUdTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21hc29ucnktbGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3YWJsZUltYWdlIGZyb20gJ0Bjb21wb25lbnRzL3ZpZXdhYmxlLWltYWdlJztcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tICdAbGliL2hvb2tzL3VzZS1rZXktcHJlc3MnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vdXNlLXN0eWxlcyc7XG5cbmNvbnN0IHBhZ2VTaXplID0gMTI7XG5cbi8qKlxuICogTWFzb25yeUxheW91dCBjb21wb25lbnRcbiAqIFNvdXJjZTogaHR0cHM6Ly9tZWRpdW0uY29tL3RoZS1hbmRlbGEtd2F5L2hvdy10by1jcmVhdGUtYS1tYXNvbnJ5LWxheW91dC1jb21wb25lbnQtdXNpbmctcmVhY3QtZjMwZWM5Y2E1ZTk5XG4gKi9cbmNvbnN0IE1hc29ucnlMYXlvdXQgPSAoe1xuICBjb2x1bW5zID0gMyxcbiAgc21hbGxXaWR0aENvbHVtbnMgPSAyLFxuICBnYXAgPSAyMCxcbiAgaW1hZ2VzLFxufToge1xuICBjb2x1bW5zPzogbnVtYmVyO1xuICBzbWFsbFdpZHRoQ29sdW1ucz86IG51bWJlcjtcbiAgZ2FwPzogbnVtYmVyO1xuICBpbWFnZXM6IHN0cmluZ1tdO1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgQXJyb3dSaWdodDogaXNSaWdodEFycm93UHJlc3NlZCxcbiAgICBBcnJvd0xlZnQ6IGlzTGVmdEFycm93UHJlc3NlZCxcbiAgfSA9IHVzZUtleVByZXNzKFsnQXJyb3dSaWdodCcsICdBcnJvd0xlZnQnXSk7XG4gIGNvbnN0IFtvcGVuSW5kZXgsIHNldE9wZW5JbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBjb2x1bW5XcmFwcGVyID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBpc1NtYWxsV2luZG93ID0gdXNlTWVkaWFRdWVyeSgnKG1heC13aWR0aDo2MDBweCknKTtcbiAgY29uc3QgbnVtQ29sdW1ucyA9IGlzU21hbGxXaW5kb3cgPyBzbWFsbFdpZHRoQ29sdW1ucyA6IGNvbHVtbnM7XG4gIGNvbnN0IFtudW1JdGVtc1RvRGlzcGxheSwgc2V0TnVtSXRlbXNUb0Rpc3BsYXldID0gdXNlU3RhdGUocGFnZVNpemUpO1xuICBjb25zdCBzaG93U2hvd01vcmUgPSBudW1JdGVtc1RvRGlzcGxheSA8IGltYWdlcy5sZW5ndGg7XG5cbiAgY29uc3Qgc2FmZXRseUNoYW5nZU9wZW5JbmRleCA9IHVzZUNhbGxiYWNrKChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgc2V0T3BlbkluZGV4KChwcmV2OiBudW1iZXIpID0+XG4gICAgICBNYXRoLm1pbihudW1JdGVtc1RvRGlzcGxheSwgTWF0aC5tYXgoMCwgcHJldiArIGRlbHRhKSlcbiAgICApO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0xlZnRBcnJvd1ByZXNzZWQpIHtcbiAgICAgIHNhZmV0bHlDaGFuZ2VPcGVuSW5kZXgoLTEpO1xuICAgIH0gZWxzZSBpZiAoaXNSaWdodEFycm93UHJlc3NlZCkge1xuICAgICAgc2FmZXRseUNoYW5nZU9wZW5JbmRleCgxKTtcbiAgICB9XG4gIH0sIFtpc1JpZ2h0QXJyb3dQcmVzc2VkLCBpc0xlZnRBcnJvd1ByZXNzZWQsIHNhZmV0bHlDaGFuZ2VPcGVuSW5kZXhdKTtcblxuICBjb25zdCBzaG93TW9yZUl0ZW0gPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmVCdXR0b25Db250YWluZXJ9IGtleT1cInNob3dNb3JlSXRlbVwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgb25DbGljaz17b25TaG93TW9yZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlQnV0dG9ufVxuICAgICAgPlxuICAgICAgICBTaG93IE1vcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuICBjb25zdCBpdGVtc1RvRGlzcGxheSA9IGltYWdlcy5zbGljZSgwLCBudW1JdGVtc1RvRGlzcGxheSk7XG5cbiAgZnVuY3Rpb24gb25TaG93TW9yZSgpIHtcbiAgICBzZXROdW1JdGVtc1RvRGlzcGxheShwcmV2ID0+IHByZXYgKyBwYWdlU2l6ZSk7XG4gIH1cblxuICAvLyBjcmVhdGUgY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgIGNvbHVtbldyYXBwZXJbYGNvbHVtbiR7aX1gXSA9IFtdO1xuICB9XG5cbiAgLy8gZGl2aWRlIGNoaWxkcmVuIGludG8gY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zVG9EaXNwbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBpICUgbnVtQ29sdW1ucztcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2NvbHVtbkluZGV4fWBdLnB1c2goXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hdHRlfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGAke2dhcH1weGAgfX1cbiAgICAgICAga2V5PXtgY29sdW1uJHtjb2x1bW5JbmRleH0ke2l9YH1cbiAgICAgID5cbiAgICAgICAgPFZpZXdhYmxlSW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIGtleT17aW1hZ2V9XG4gICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgb3Blbj17b3BlbkluZGV4ID09PSBpfVxuICAgICAgICAgIHNldE9wZW5JbmRleD17c2V0T3BlbkluZGV4fVxuICAgICAgICAgIGNoYW5nZU9wZW5JbmRleD17c2FmZXRseUNoYW5nZU9wZW5JbmRleH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoc2hvd1Nob3dNb3JlKSB7XG4gICAgY29sdW1uV3JhcHBlcltgY29sdW1uJHtNYXRoLmZsb29yKG51bUNvbHVtbnMgLyAyKX1gXS5wdXNoKHNob3dNb3JlSXRlbSk7XG4gIH1cblxuICAvLyB3cmFwIGNoaWxkcmVuIGluIGVhY2ggY29sdW1uIHdpdGggYSBkaXZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2x1bW5zOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtgY29sdW1uJHtpfWB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogYCR7aSA+IDAgPyBnYXAgOiAwfXB4YCxcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29sdW1uV3JhcHBlcltgY29sdW1uJHtpfWBdfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXNvbnJ5UmVzdWx0Q29udGFpbmVyfT57cmVzdWx0fTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hc29ucnlMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/index.tsx\n");

/***/ })

})