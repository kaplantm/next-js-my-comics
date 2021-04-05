webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/masonry-layout/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/masonry-layout/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ \"./src/components/masonry-layout/use-styles.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/components/masonry-layout/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar pageSize = 10;\n/**\n * MasonryLayout component\n * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99\n */\n\nvar MasonryLayout = function MasonryLayout(_ref) {\n  _s();\n\n  var _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? 3 : _ref$columns,\n      _ref$smallWidthColumn = _ref.smallWidthColumns,\n      smallWidthColumns = _ref$smallWidthColumn === void 0 ? 2 : _ref$smallWidthColumn,\n      _ref$gap = _ref.gap,\n      gap = _ref$gap === void 0 ? 20 : _ref$gap,\n      children = _ref.children;\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  var columnWrapper = {};\n  var result = [];\n\n  var isSmallWindow = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"(max-width:600px)\");\n\n  var numColumns = isSmallWindow ? smallWidthColumns : columns;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(pageSize),\n      numItemsToDisplay = _useState[0],\n      setNumItemsToDisplay = _useState[1];\n\n  var itemsToDisplay = children.slice(0, numItemsToDisplay);\n  var showShowMore = numItemsToDisplay < children.length;\n\n  function onShowMore() {\n    setNumItemsToDisplay(function (prev) {\n      return prev + pageSize;\n    });\n  } // create columns\n\n\n  for (var i = 0; i < numColumns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < itemsToDisplay.length; _i++) {\n    var columnIndex = _i % numColumns;\n    columnWrapper[\"column\".concat(columnIndex)].push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageMatte,\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      children: itemsToDisplay[_i]\n    }, \"column\".concat(columnIndex).concat(_i), false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this));\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < numColumns; _i2++) {\n    result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      children: columnWrapper[\"column\".concat(_i2)]\n    }, \"column\".concat(_i2), false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.masonryContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.masonryResultContainer,\n      children: result\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), showShowMore && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.showMoreButtonContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        variant: \"contained\",\n        onClick: onShowMore,\n        children: \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MasonryLayout, \"6DdrclArpcV7FEJutlpVMtLtdOo=\", false, function () {\n  return [_use_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvaW5kZXgudHN4PzFmZTkiXSwibmFtZXMiOlsicGFnZVNpemUiLCJNYXNvbnJ5TGF5b3V0IiwiY29sdW1ucyIsInNtYWxsV2lkdGhDb2x1bW5zIiwiZ2FwIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiY29sdW1uV3JhcHBlciIsInJlc3VsdCIsImlzU21hbGxXaW5kb3ciLCJudW1Db2x1bW5zIiwidXNlU3RhdGUiLCJudW1JdGVtc1RvRGlzcGxheSIsInNldE51bUl0ZW1zVG9EaXNwbGF5IiwiaXRlbXNUb0Rpc3BsYXkiLCJzbGljZSIsInNob3dTaG93TW9yZSIsImxlbmd0aCIsIm9uU2hvd01vcmUiLCJwcmV2IiwiaSIsImNvbHVtbkluZGV4IiwicHVzaCIsImltYWdlTWF0dGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwiZmxleCIsIm1hc29ucnlDb250YWluZXIiLCJtYXNvbnJ5UmVzdWx0Q29udGFpbmVyIiwic2hvd01vcmVCdXR0b25Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQVVoQjtBQUFBOztBQUFBLDBCQVRKQyxPQVNJO0FBQUEsTUFUSkEsT0FTSSw2QkFUTSxDQVNOO0FBQUEsbUNBUkpDLGlCQVFJO0FBQUEsTUFSSkEsaUJBUUksc0NBUmdCLENBUWhCO0FBQUEsc0JBUEpDLEdBT0k7QUFBQSxNQVBKQSxHQU9JLHlCQVBFLEVBT0Y7QUFBQSxNQU5KQyxRQU1JLFFBTkpBLFFBTUk7QUFDSixNQUFNQyxPQUFPLEdBQUdDLDJEQUFTLEVBQXpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGdGQUFjLG1CQUFkLENBQXRCOztBQUNBLE1BQU1DLFVBQVUsR0FBR0QsYUFBYSxHQUFHUCxpQkFBSCxHQUF1QkQsT0FBdkQ7O0FBTEksa0JBTThDVSxzREFBUSxDQUFDWixRQUFELENBTnREO0FBQUEsTUFNR2EsaUJBTkg7QUFBQSxNQU1zQkMsb0JBTnRCOztBQU9KLE1BQU1DLGNBQWMsR0FBR1YsUUFBUSxDQUFDVyxLQUFULENBQWUsQ0FBZixFQUFrQkgsaUJBQWxCLENBQXZCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSixpQkFBaUIsR0FBR1IsUUFBUSxDQUFDYSxNQUFsRDs7QUFFQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCTCx3QkFBb0IsQ0FBQyxVQUFDTSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHcEIsUUFBakI7QUFBQSxLQUFELENBQXBCO0FBQ0QsR0FaRyxDQWNKOzs7QUFDQSxPQUFLLElBQUlxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixVQUFwQixFQUFnQ1UsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQ2IsaUJBQWEsaUJBQVVhLENBQVYsRUFBYixHQUE4QixFQUE5QjtBQUNELEdBakJHLENBbUJKOzs7QUFDQSxPQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdOLGNBQWMsQ0FBQ0csTUFBbkMsRUFBMkNHLEVBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsUUFBTUMsV0FBVyxHQUFHRCxFQUFDLEdBQUdWLFVBQXhCO0FBQ0FILGlCQUFhLGlCQUFVYyxXQUFWLEVBQWIsQ0FBc0NDLElBQXRDLGVBQ0U7QUFDRSxlQUFTLEVBQUVqQixPQUFPLENBQUNrQixVQURyQjtBQUVFLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxZQUFLckIsR0FBTDtBQUFkLE9BRlQ7QUFBQSxnQkFLR1csY0FBYyxDQUFDTSxFQUFEO0FBTGpCLHVCQUdnQkMsV0FIaEIsU0FHOEJELEVBSDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVNELEdBL0JHLENBaUNKOzs7QUFDQSxPQUFLLElBQUlBLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdWLFVBQXBCLEVBQWdDVSxHQUFDLEVBQWpDLEVBQXFDO0FBQ25DWixVQUFNLENBQUNjLElBQVAsZUFDRTtBQUVFLFdBQUssRUFBRTtBQUNMRyxrQkFBVSxZQUFLTCxHQUFDLEdBQUcsQ0FBSixHQUFRakIsR0FBUixHQUFjLENBQW5CLE9BREw7QUFFTHVCLFlBQUksRUFBRTtBQUZELE9BRlQ7QUFBQSxnQkFPR25CLGFBQWEsaUJBQVVhLEdBQVY7QUFQaEIsdUJBQ2dCQSxHQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFXRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsT0FBTyxDQUFDc0IsZ0JBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUV0QixPQUFPLENBQUN1QixzQkFBeEI7QUFBQSxnQkFBaURwQjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR1EsWUFBWSxpQkFDWDtBQUFLLGVBQVMsRUFBRVgsT0FBTyxDQUFDd0IsdUJBQXhCO0FBQUEsNkJBQ0U7QUFBUSxlQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBTyxFQUFFWCxVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBdEVEOztHQUFNbEIsYTtVQVdZTSxtRDs7O0tBWFpOLGE7QUF3RVNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi91c2Utc3R5bGVzXCI7XG5cbmNvbnN0IHBhZ2VTaXplID0gMTA7XG5cbi8qKlxuICogTWFzb25yeUxheW91dCBjb21wb25lbnRcbiAqIFNvdXJjZTogaHR0cHM6Ly9tZWRpdW0uY29tL3RoZS1hbmRlbGEtd2F5L2hvdy10by1jcmVhdGUtYS1tYXNvbnJ5LWxheW91dC1jb21wb25lbnQtdXNpbmctcmVhY3QtZjMwZWM5Y2E1ZTk5XG4gKi9cbmNvbnN0IE1hc29ucnlMYXlvdXQgPSAoe1xuICBjb2x1bW5zID0gMyxcbiAgc21hbGxXaWR0aENvbHVtbnMgPSAyLFxuICBnYXAgPSAyMCxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNvbHVtbnM/OiBudW1iZXI7XG4gIHNtYWxsV2lkdGhDb2x1bW5zPzogbnVtYmVyO1xuICBnYXA/OiBudW1iZXI7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVbXTtcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBjb2x1bW5XcmFwcGVyID0ge307XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBpc1NtYWxsV2luZG93ID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6NjAwcHgpXCIpO1xuICBjb25zdCBudW1Db2x1bW5zID0gaXNTbWFsbFdpbmRvdyA/IHNtYWxsV2lkdGhDb2x1bW5zIDogY29sdW1ucztcbiAgY29uc3QgW251bUl0ZW1zVG9EaXNwbGF5LCBzZXROdW1JdGVtc1RvRGlzcGxheV0gPSB1c2VTdGF0ZShwYWdlU2l6ZSk7XG4gIGNvbnN0IGl0ZW1zVG9EaXNwbGF5ID0gY2hpbGRyZW4uc2xpY2UoMCwgbnVtSXRlbXNUb0Rpc3BsYXkpO1xuICBjb25zdCBzaG93U2hvd01vcmUgPSBudW1JdGVtc1RvRGlzcGxheSA8IGNoaWxkcmVuLmxlbmd0aDtcblxuICBmdW5jdGlvbiBvblNob3dNb3JlKCkge1xuICAgIHNldE51bUl0ZW1zVG9EaXNwbGF5KChwcmV2KSA9PiBwcmV2ICsgcGFnZVNpemUpO1xuICB9XG5cbiAgLy8gY3JlYXRlIGNvbHVtbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2x1bW5zOyBpKyspIHtcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2l9YF0gPSBbXTtcbiAgfVxuXG4gIC8vIGRpdmlkZSBjaGlsZHJlbiBpbnRvIGNvbHVtbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc1RvRGlzcGxheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gaSAlIG51bUNvbHVtbnM7XG4gICAgY29sdW1uV3JhcHBlcltgY29sdW1uJHtjb2x1bW5JbmRleH1gXS5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VNYXR0ZX1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBgJHtnYXB9cHhgIH19XG4gICAgICAgIGtleT17YGNvbHVtbiR7Y29sdW1uSW5kZXh9JHtpfWB9XG4gICAgICA+XG4gICAgICAgIHtpdGVtc1RvRGlzcGxheVtpXX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLyB3cmFwIGNoaWxkcmVuIGluIGVhY2ggY29sdW1uIHdpdGggYSBkaXZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2x1bW5zOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtgY29sdW1uJHtpfWB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogYCR7aSA+IDAgPyBnYXAgOiAwfXB4YCxcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29sdW1uV3JhcHBlcltgY29sdW1uJHtpfWBdfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFzb25yeUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXNvbnJ5UmVzdWx0Q29udGFpbmVyfT57cmVzdWx0fTwvZGl2PlxuICAgICAge3Nob3dTaG93TW9yZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlQnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtvblNob3dNb3JlfT5cbiAgICAgICAgICAgIFNob3cgTW9yZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXNvbnJ5TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/index.tsx\n");

/***/ }),

/***/ "./src/components/masonry-layout/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/masonry-layout/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var src_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    masonryContainer: {\n      display: \"flex\",\n      flex: 1,\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    },\n    masonryResultContainer: {\n      display: \"flex\",\n      flex: 1\n    },\n    imageMatte: {\n      backgroundColor: src_theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"],\n      borderRadius: 6,\n      padding: theme.spacing(3),\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      minHeight: \"200px\",\n      \"& img\": {\n        maxWidth: \"100%\",\n        maxHeight: \"500px\"\n      }\n    },\n    showMoreButtonContainer: {\n      marginTop: theme.spacing(3)\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvdXNlLXN0eWxlcy50cz80NzgwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hc29ucnlDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFzb25yeVJlc3VsdENvbnRhaW5lciIsImltYWdlTWF0dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY2VCbHVlIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwic2hvd01vcmVCdXR0b25Db250YWluZXIiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLG9CQUFnQixFQUFFO0FBQ2hCQyxhQUFPLEVBQUUsTUFETztBQUVoQkMsVUFBSSxFQUFFLENBRlU7QUFHaEJDLG1CQUFhLEVBQUUsUUFIQztBQUloQkMsZ0JBQVUsRUFBRTtBQUpJLEtBRHFCO0FBT3ZDQywwQkFBc0IsRUFBRTtBQUN0QkosYUFBTyxFQUFFLE1BRGE7QUFFdEJDLFVBQUksRUFBRTtBQUZnQixLQVBlO0FBV3ZDSSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRUMsd0RBRFA7QUFFVkMsa0JBQVksRUFBRSxDQUZKO0FBR1ZDLGFBQU8sRUFBRVgsS0FBSyxDQUFDWSxPQUFOLENBQWMsQ0FBZCxDQUhDO0FBSVZWLGFBQU8sRUFBRSxNQUpDO0FBS1ZHLGdCQUFVLEVBQUUsUUFMRjtBQU1WUSxvQkFBYyxFQUFFLFFBTk47QUFRVkMsZUFBUyxFQUFFLE9BUkQ7QUFTVixlQUFTO0FBQ1BDLGdCQUFRLEVBQUUsTUFESDtBQUVQQyxpQkFBUyxFQUFFO0FBRko7QUFUQyxLQVgyQjtBQXlCdkNDLDJCQUF1QixFQUFFO0FBQ3ZCQyxlQUFTLEVBQUVsQixLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkO0FBRFk7QUF6QmMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUE4QmVkLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvdXNlLXN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBpY2VCbHVlIH0gZnJvbSBcInNyYy90aGVtZS9jb2xvcnNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIG1hc29ucnlDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgbWFzb25yeVJlc3VsdENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gIH0sXG4gIGltYWdlTWF0dGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGljZUJsdWUsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblxuICAgIG1pbkhlaWdodDogXCIyMDBweFwiLFxuICAgIFwiJiBpbWdcIjoge1xuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgbWF4SGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgfSxcbiAgfSxcbiAgc2hvd01vcmVCdXR0b25Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/use-styles.ts\n");

/***/ })

})