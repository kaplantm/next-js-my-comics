webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/masonry-layout/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/masonry-layout/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-styles */ \"./src/components/masonry-layout/use-styles.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/components/masonry-layout/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar pageSize = 10;\n/**\n * MasonryLayout component\n * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99\n */\n\nvar MasonryLayout = function MasonryLayout(_ref) {\n  _s();\n\n  var _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? 3 : _ref$columns,\n      _ref$smallWidthColumn = _ref.smallWidthColumns,\n      smallWidthColumns = _ref$smallWidthColumn === void 0 ? 2 : _ref$smallWidthColumn,\n      _ref$gap = _ref.gap,\n      gap = _ref$gap === void 0 ? 20 : _ref$gap,\n      children = _ref.children;\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  var columnWrapper = {};\n  var result = [];\n\n  var isSmallWindow = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"(max-width:600px)\");\n\n  var numColumns = isSmallWindow ? smallWidthColumns : columns;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(pageSize),\n      numItemsToDisplay = _useState[0],\n      setNumItemsToDisplay = _useState[1];\n\n  var itemsToDisplay = children.slice(0, numItemsToDisplay);\n  var showShowMore = numItemsToDisplay < children.length;\n\n  function onShowMore() {\n    setNumItemsToDisplay(function (prev) {\n      return prev + pageSize;\n    });\n  } // create columns\n\n\n  for (var i = 0; i < numColumns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < itemsToDisplay.length; _i++) {\n    var columnIndex = _i % numColumns;\n    columnWrapper[\"column\".concat(columnIndex)].push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageMatte,\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      children: itemsToDisplay[_i]\n    }, \"column\".concat(columnIndex).concat(_i), false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this));\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < numColumns; _i2++) {\n    result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      children: columnWrapper[\"column\".concat(_i2)]\n    }, \"column\".concat(_i2), false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.masonryResultContainer,\n    children: [result, showShowMore && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.showMoreButtonContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        variant: \"contained\",\n        onClick: onShowMore,\n        children: \"Show More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MasonryLayout, \"6DdrclArpcV7FEJutlpVMtLtdOo=\", false, function () {\n  return [_use_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvaW5kZXgudHN4PzFmZTkiXSwibmFtZXMiOlsicGFnZVNpemUiLCJNYXNvbnJ5TGF5b3V0IiwiY29sdW1ucyIsInNtYWxsV2lkdGhDb2x1bW5zIiwiZ2FwIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiY29sdW1uV3JhcHBlciIsInJlc3VsdCIsImlzU21hbGxXaW5kb3ciLCJudW1Db2x1bW5zIiwidXNlU3RhdGUiLCJudW1JdGVtc1RvRGlzcGxheSIsInNldE51bUl0ZW1zVG9EaXNwbGF5IiwiaXRlbXNUb0Rpc3BsYXkiLCJzbGljZSIsInNob3dTaG93TW9yZSIsImxlbmd0aCIsIm9uU2hvd01vcmUiLCJwcmV2IiwiaSIsImNvbHVtbkluZGV4IiwicHVzaCIsImltYWdlTWF0dGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwiZmxleCIsIm1hc29ucnlSZXN1bHRDb250YWluZXIiLCJzaG93TW9yZUJ1dHRvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsRUFBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BVWhCO0FBQUE7O0FBQUEsMEJBVEpDLE9BU0k7QUFBQSxNQVRKQSxPQVNJLDZCQVRNLENBU047QUFBQSxtQ0FSSkMsaUJBUUk7QUFBQSxNQVJKQSxpQkFRSSxzQ0FSZ0IsQ0FRaEI7QUFBQSxzQkFQSkMsR0FPSTtBQUFBLE1BUEpBLEdBT0kseUJBUEUsRUFPRjtBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUNKLE1BQU1DLE9BQU8sR0FBR0MsMkRBQVMsRUFBekI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsRUFBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZ0ZBQWMsbUJBQWQsQ0FBdEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxhQUFhLEdBQUdQLGlCQUFILEdBQXVCRCxPQUF2RDs7QUFMSSxrQkFNOENVLHNEQUFRLENBQUNaLFFBQUQsQ0FOdEQ7QUFBQSxNQU1HYSxpQkFOSDtBQUFBLE1BTXNCQyxvQkFOdEI7O0FBT0osTUFBTUMsY0FBYyxHQUFHVixRQUFRLENBQUNXLEtBQVQsQ0FBZSxDQUFmLEVBQWtCSCxpQkFBbEIsQ0FBdkI7QUFDQSxNQUFNSSxZQUFZLEdBQUdKLGlCQUFpQixHQUFHUixRQUFRLENBQUNhLE1BQWxEOztBQUVBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJMLHdCQUFvQixDQUFDLFVBQUNNLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUdwQixRQUFqQjtBQUFBLEtBQUQsQ0FBcEI7QUFDRCxHQVpHLENBY0o7OztBQUNBLE9BQUssSUFBSXFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLFVBQXBCLEVBQWdDVSxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DYixpQkFBYSxpQkFBVWEsQ0FBVixFQUFiLEdBQThCLEVBQTlCO0FBQ0QsR0FqQkcsQ0FtQko7OztBQUNBLE9BQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR04sY0FBYyxDQUFDRyxNQUFuQyxFQUEyQ0csRUFBQyxFQUE1QyxFQUFnRDtBQUM5QyxRQUFNQyxXQUFXLEdBQUdELEVBQUMsR0FBR1YsVUFBeEI7QUFDQUgsaUJBQWEsaUJBQVVjLFdBQVYsRUFBYixDQUFzQ0MsSUFBdEMsZUFDRTtBQUNFLGVBQVMsRUFBRWpCLE9BQU8sQ0FBQ2tCLFVBRHJCO0FBRUUsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLFlBQUtyQixHQUFMO0FBQWQsT0FGVDtBQUFBLGdCQUtHVyxjQUFjLENBQUNNLEVBQUQ7QUFMakIsdUJBR2dCQyxXQUhoQixTQUc4QkQsRUFIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0EvQkcsQ0FpQ0o7OztBQUNBLE9BQUssSUFBSUEsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR1YsVUFBcEIsRUFBZ0NVLEdBQUMsRUFBakMsRUFBcUM7QUFDbkNaLFVBQU0sQ0FBQ2MsSUFBUCxlQUNFO0FBRUUsV0FBSyxFQUFFO0FBQ0xHLGtCQUFVLFlBQUtMLEdBQUMsR0FBRyxDQUFKLEdBQVFqQixHQUFSLEdBQWMsQ0FBbkIsT0FETDtBQUVMdUIsWUFBSSxFQUFFO0FBRkQsT0FGVDtBQUFBLGdCQU9HbkIsYUFBYSxpQkFBVWEsR0FBVjtBQVBoQix1QkFDZ0JBLEdBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVdEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFZixPQUFPLENBQUNzQixzQkFBeEI7QUFBQSxlQUNHbkIsTUFESCxFQUVHUSxZQUFZLGlCQUNYO0FBQUssZUFBUyxFQUFFWCxPQUFPLENBQUN1Qix1QkFBeEI7QUFBQSw2QkFDRTtBQUFRLGVBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFPLEVBQUVWLFVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0F0RUQ7O0dBQU1sQixhO1VBV1lNLG1EOzs7S0FYWk4sYTtBQXdFU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tYXNvbnJ5LWxheW91dC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL3VzZS1zdHlsZXNcIjtcblxuY29uc3QgcGFnZVNpemUgPSAxMDtcblxuLyoqXG4gKiBNYXNvbnJ5TGF5b3V0IGNvbXBvbmVudFxuICogU291cmNlOiBodHRwczovL21lZGl1bS5jb20vdGhlLWFuZGVsYS13YXkvaG93LXRvLWNyZWF0ZS1hLW1hc29ucnktbGF5b3V0LWNvbXBvbmVudC11c2luZy1yZWFjdC1mMzBlYzljYTVlOTlcbiAqL1xuY29uc3QgTWFzb25yeUxheW91dCA9ICh7XG4gIGNvbHVtbnMgPSAzLFxuICBzbWFsbFdpZHRoQ29sdW1ucyA9IDIsXG4gIGdhcCA9IDIwLFxuICBjaGlsZHJlbixcbn06IHtcbiAgY29sdW1ucz86IG51bWJlcjtcbiAgc21hbGxXaWR0aENvbHVtbnM/OiBudW1iZXI7XG4gIGdhcD86IG51bWJlcjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdO1xufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNvbHVtbldyYXBwZXIgPSB7fTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGlzU21hbGxXaW5kb3cgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDo2MDBweClcIik7XG4gIGNvbnN0IG51bUNvbHVtbnMgPSBpc1NtYWxsV2luZG93ID8gc21hbGxXaWR0aENvbHVtbnMgOiBjb2x1bW5zO1xuICBjb25zdCBbbnVtSXRlbXNUb0Rpc3BsYXksIHNldE51bUl0ZW1zVG9EaXNwbGF5XSA9IHVzZVN0YXRlKHBhZ2VTaXplKTtcbiAgY29uc3QgaXRlbXNUb0Rpc3BsYXkgPSBjaGlsZHJlbi5zbGljZSgwLCBudW1JdGVtc1RvRGlzcGxheSk7XG4gIGNvbnN0IHNob3dTaG93TW9yZSA9IG51bUl0ZW1zVG9EaXNwbGF5IDwgY2hpbGRyZW4ubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIG9uU2hvd01vcmUoKSB7XG4gICAgc2V0TnVtSXRlbXNUb0Rpc3BsYXkoKHByZXYpID0+IHByZXYgKyBwYWdlU2l6ZSk7XG4gIH1cblxuICAvLyBjcmVhdGUgY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgIGNvbHVtbldyYXBwZXJbYGNvbHVtbiR7aX1gXSA9IFtdO1xuICB9XG5cbiAgLy8gZGl2aWRlIGNoaWxkcmVuIGludG8gY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zVG9EaXNwbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBpICUgbnVtQ29sdW1ucztcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2NvbHVtbkluZGV4fWBdLnB1c2goXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hdHRlfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGAke2dhcH1weGAgfX1cbiAgICAgICAga2V5PXtgY29sdW1uJHtjb2x1bW5JbmRleH0ke2l9YH1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zVG9EaXNwbGF5W2ldfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIHdyYXAgY2hpbGRyZW4gaW4gZWFjaCBjb2x1bW4gd2l0aCBhIGRpdlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2Bjb2x1bW4ke2l9YH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtpID4gMCA/IGdhcCA6IDB9cHhgLFxuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2l9YF19XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXNvbnJ5UmVzdWx0Q29udGFpbmVyfT5cbiAgICAgIHtyZXN1bHR9XG4gICAgICB7c2hvd1Nob3dNb3JlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd01vcmVCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e29uU2hvd01vcmV9PlxuICAgICAgICAgICAgU2hvdyBNb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hc29ucnlMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/index.tsx\n");

/***/ })

})