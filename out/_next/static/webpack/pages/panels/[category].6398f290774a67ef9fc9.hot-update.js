webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/masonry-layout/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/masonry-layout/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ \"./src/components/masonry-layout/use-styles.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/components/masonry-layout/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar pageSize = 10;\n/**\n * MasonryLayout component\n * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99\n */\n\nvar MasonryLayout = function MasonryLayout(_ref) {\n  _s();\n\n  var _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? 3 : _ref$columns,\n      _ref$smallWidthColumn = _ref.smallWidthColumns,\n      smallWidthColumns = _ref$smallWidthColumn === void 0 ? 2 : _ref$smallWidthColumn,\n      _ref$gap = _ref.gap,\n      gap = _ref$gap === void 0 ? 20 : _ref$gap,\n      children = _ref.children;\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var columnWrapper = {};\n  var result = [];\n\n  var isSmallWindow = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"(max-width:600px)\");\n\n  var numColumns = isSmallWindow ? smallWidthColumns : columns;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(pageSize),\n      numItemsToDisplay = _useState[0],\n      setNumItemsToDisplay = _useState[1];\n\n  var showShowMore = numItemsToDisplay < children.length;\n\n  var showMoreItem =\n  /*#__PURE__*/\n  // <div className={classes.showMoreButtonContainer}>\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"text\",\n    onClick: onShowMore,\n    className: classes.showMoreButton,\n    children: \"Show More\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this) // </div>\n  ;\n\n  var itemsToDisplay = [].concat(Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children.slice(0, numItemsToDisplay)), Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showShowMore ? [showMoreItem] : []));\n\n  function onShowMore() {\n    setNumItemsToDisplay(function (prev) {\n      return prev + pageSize;\n    });\n  } // create columns\n\n\n  for (var i = 0; i < numColumns; i++) {\n    columnWrapper[\"column\".concat(i)] = [];\n  } // divide children into columns\n\n\n  for (var _i = 0; _i < itemsToDisplay.length; _i++) {\n    var columnIndex = _i % numColumns;\n    columnWrapper[\"column\".concat(columnIndex)].push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageMatte,\n      style: {\n        marginBottom: \"\".concat(gap, \"px\")\n      },\n      children: itemsToDisplay[_i]\n    }, \"column\".concat(columnIndex).concat(_i), false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this));\n  } // wrap children in each column with a div\n\n\n  for (var _i2 = 0; _i2 < numColumns; _i2++) {\n    result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginLeft: \"\".concat(_i2 > 0 ? gap : 0, \"px\"),\n        flex: 1\n      },\n      children: columnWrapper[\"column\".concat(_i2)]\n    }, \"column\".concat(_i2), false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: classes.masonryResultContainer,\n    children: result\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(MasonryLayout, \"6DdrclArpcV7FEJutlpVMtLtdOo=\", false, function () {\n  return [_use_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = MasonryLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasonryLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"MasonryLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvaW5kZXgudHN4PzFmZTkiXSwibmFtZXMiOlsicGFnZVNpemUiLCJNYXNvbnJ5TGF5b3V0IiwiY29sdW1ucyIsInNtYWxsV2lkdGhDb2x1bW5zIiwiZ2FwIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiY29sdW1uV3JhcHBlciIsInJlc3VsdCIsImlzU21hbGxXaW5kb3ciLCJudW1Db2x1bW5zIiwidXNlU3RhdGUiLCJudW1JdGVtc1RvRGlzcGxheSIsInNldE51bUl0ZW1zVG9EaXNwbGF5Iiwic2hvd1Nob3dNb3JlIiwibGVuZ3RoIiwic2hvd01vcmVJdGVtIiwib25TaG93TW9yZSIsInNob3dNb3JlQnV0dG9uIiwiaXRlbXNUb0Rpc3BsYXkiLCJzbGljZSIsInByZXYiLCJpIiwiY29sdW1uSW5kZXgiLCJwdXNoIiwiaW1hZ2VNYXR0ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJmbGV4IiwibWFzb25yeVJlc3VsdENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FVaEI7QUFBQTs7QUFBQSwwQkFUSkMsT0FTSTtBQUFBLE1BVEpBLE9BU0ksNkJBVE0sQ0FTTjtBQUFBLG1DQVJKQyxpQkFRSTtBQUFBLE1BUkpBLGlCQVFJLHNDQVJnQixDQVFoQjtBQUFBLHNCQVBKQyxHQU9JO0FBQUEsTUFQSkEsR0FPSSx5QkFQRSxFQU9GO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQ0osTUFBTUMsT0FBTyxHQUFHQywyREFBUyxFQUF6QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxFQUF0QjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxnRkFBYyxtQkFBZCxDQUF0Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdELGFBQWEsR0FBR1AsaUJBQUgsR0FBdUJELE9BQXZEOztBQUxJLGtCQU04Q1Usc0RBQVEsQ0FBQ1osUUFBRCxDQU50RDtBQUFBLE1BTUdhLGlCQU5IO0FBQUEsTUFNc0JDLG9CQU50Qjs7QUFPSixNQUFNQyxZQUFZLEdBQUdGLGlCQUFpQixHQUFHUixRQUFRLENBQUNXLE1BQWxEOztBQUNBLE1BQU1DLFlBQVk7QUFBQTtBQUNoQjtBQUNBO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxXQUFPLEVBQUVDLFVBRlg7QUFHRSxhQUFTLEVBQUVaLE9BQU8sQ0FBQ2EsY0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGZ0IsQ0FTaEI7QUFURjs7QUFXQSxNQUFNQyxjQUFjLDBKQUNmZixRQUFRLENBQUNnQixLQUFULENBQWUsQ0FBZixFQUFrQlIsaUJBQWxCLENBRGUsZ0pBRWRFLFlBQVksR0FBRyxDQUFDRSxZQUFELENBQUgsR0FBb0IsRUFGbEIsRUFBcEI7O0FBS0EsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQkosd0JBQW9CLENBQUMsVUFBQ1EsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBR3RCLFFBQWpCO0FBQUEsS0FBRCxDQUFwQjtBQUNELEdBMUJHLENBNEJKOzs7QUFDQSxPQUFLLElBQUl1QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixVQUFwQixFQUFnQ1ksQ0FBQyxFQUFqQyxFQUFxQztBQUNuQ2YsaUJBQWEsaUJBQVVlLENBQVYsRUFBYixHQUE4QixFQUE5QjtBQUNELEdBL0JHLENBaUNKOzs7QUFDQSxPQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdILGNBQWMsQ0FBQ0osTUFBbkMsRUFBMkNPLEVBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsUUFBTUMsV0FBVyxHQUFHRCxFQUFDLEdBQUdaLFVBQXhCO0FBQ0FILGlCQUFhLGlCQUFVZ0IsV0FBVixFQUFiLENBQXNDQyxJQUF0QyxlQUNFO0FBQ0UsZUFBUyxFQUFFbkIsT0FBTyxDQUFDb0IsVUFEckI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsb0JBQVksWUFBS3ZCLEdBQUw7QUFBZCxPQUZUO0FBQUEsZ0JBS0dnQixjQUFjLENBQUNHLEVBQUQ7QUFMakIsdUJBR2dCQyxXQUhoQixTQUc4QkQsRUFIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0E3Q0csQ0ErQ0o7OztBQUNBLE9BQUssSUFBSUEsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR1osVUFBcEIsRUFBZ0NZLEdBQUMsRUFBakMsRUFBcUM7QUFDbkNkLFVBQU0sQ0FBQ2dCLElBQVAsZUFDRTtBQUVFLFdBQUssRUFBRTtBQUNMRyxrQkFBVSxZQUFLTCxHQUFDLEdBQUcsQ0FBSixHQUFRbkIsR0FBUixHQUFjLENBQW5CLE9BREw7QUFFTHlCLFlBQUksRUFBRTtBQUZELE9BRlQ7QUFBQSxnQkFPR3JCLGFBQWEsaUJBQVVlLEdBQVY7QUFQaEIsdUJBQ2dCQSxHQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFXRDs7QUFFRCxzQkFBTztBQUFLLGFBQVMsRUFBRWpCLE9BQU8sQ0FBQ3dCLHNCQUF4QjtBQUFBLGNBQWlEckI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0F6RUQ7O0dBQU1SLGE7VUFXWU0sbUQ7OztLQVhaTixhO0FBMkVTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21hc29ucnktbGF5b3V0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vdXNlLXN0eWxlc1wiO1xuXG5jb25zdCBwYWdlU2l6ZSA9IDEwO1xuXG4vKipcbiAqIE1hc29ucnlMYXlvdXQgY29tcG9uZW50XG4gKiBTb3VyY2U6IGh0dHBzOi8vbWVkaXVtLmNvbS90aGUtYW5kZWxhLXdheS9ob3ctdG8tY3JlYXRlLWEtbWFzb25yeS1sYXlvdXQtY29tcG9uZW50LXVzaW5nLXJlYWN0LWYzMGVjOWNhNWU5OVxuICovXG5jb25zdCBNYXNvbnJ5TGF5b3V0ID0gKHtcbiAgY29sdW1ucyA9IDMsXG4gIHNtYWxsV2lkdGhDb2x1bW5zID0gMixcbiAgZ2FwID0gMjAsXG4gIGNoaWxkcmVuLFxufToge1xuICBjb2x1bW5zPzogbnVtYmVyO1xuICBzbWFsbFdpZHRoQ29sdW1ucz86IG51bWJlcjtcbiAgZ2FwPzogbnVtYmVyO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlW107XG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgY29sdW1uV3JhcHBlciA9IHt9O1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaXNTbWFsbFdpbmRvdyA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOjYwMHB4KVwiKTtcbiAgY29uc3QgbnVtQ29sdW1ucyA9IGlzU21hbGxXaW5kb3cgPyBzbWFsbFdpZHRoQ29sdW1ucyA6IGNvbHVtbnM7XG4gIGNvbnN0IFtudW1JdGVtc1RvRGlzcGxheSwgc2V0TnVtSXRlbXNUb0Rpc3BsYXldID0gdXNlU3RhdGUocGFnZVNpemUpO1xuICBjb25zdCBzaG93U2hvd01vcmUgPSBudW1JdGVtc1RvRGlzcGxheSA8IGNoaWxkcmVuLmxlbmd0aDtcbiAgY29uc3Qgc2hvd01vcmVJdGVtID0gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlQnV0dG9uQ29udGFpbmVyfT5cbiAgICA8QnV0dG9uXG4gICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICBvbkNsaWNrPXtvblNob3dNb3JlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dNb3JlQnV0dG9ufVxuICAgID5cbiAgICAgIFNob3cgTW9yZVxuICAgIDwvQnV0dG9uPlxuICAgIC8vIDwvZGl2PlxuICApO1xuICBjb25zdCBpdGVtc1RvRGlzcGxheSA9IFtcbiAgICAuLi5jaGlsZHJlbi5zbGljZSgwLCBudW1JdGVtc1RvRGlzcGxheSksXG4gICAgLi4uKHNob3dTaG93TW9yZSA/IFtzaG93TW9yZUl0ZW1dIDogW10pLFxuICBdO1xuXG4gIGZ1bmN0aW9uIG9uU2hvd01vcmUoKSB7XG4gICAgc2V0TnVtSXRlbXNUb0Rpc3BsYXkoKHByZXYpID0+IHByZXYgKyBwYWdlU2l6ZSk7XG4gIH1cblxuICAvLyBjcmVhdGUgY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgIGNvbHVtbldyYXBwZXJbYGNvbHVtbiR7aX1gXSA9IFtdO1xuICB9XG5cbiAgLy8gZGl2aWRlIGNoaWxkcmVuIGludG8gY29sdW1uc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zVG9EaXNwbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBpICUgbnVtQ29sdW1ucztcbiAgICBjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2NvbHVtbkluZGV4fWBdLnB1c2goXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hdHRlfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGAke2dhcH1weGAgfX1cbiAgICAgICAga2V5PXtgY29sdW1uJHtjb2x1bW5JbmRleH0ke2l9YH1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zVG9EaXNwbGF5W2ldfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIHdyYXAgY2hpbGRyZW4gaW4gZWFjaCBjb2x1bW4gd2l0aCBhIGRpdlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2Bjb2x1bW4ke2l9YH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtpID4gMCA/IGdhcCA6IDB9cHhgLFxuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjb2x1bW5XcmFwcGVyW2Bjb2x1bW4ke2l9YF19XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hc29ucnlSZXN1bHRDb250YWluZXJ9PntyZXN1bHR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFzb25yeUxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/index.tsx\n");

/***/ })

})