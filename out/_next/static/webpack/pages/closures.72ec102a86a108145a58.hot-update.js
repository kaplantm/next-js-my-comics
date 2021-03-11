webpackHotUpdate_N_E("pages/closures",{

/***/ "./pages/closures.tsx":
/*!****************************!*\
  !*** ./pages/closures.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Closures; });\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_page_containers_closures_good__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/page-containers/closures/good */ \"./src/page-containers/closures/good/index.tsx\");\n/* harmony import */ var _src_page_containers_closures_bad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/page-containers/closures/bad */ \"./src/page-containers/closures/bad/index.tsx\");\n/* harmony import */ var _src_components_app_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/app-link */ \"./src/components/app-link/index.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/tkaplan/Repos/pel-takeaways/pages/closures.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Closures() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBad = _useState[0],\n      setIsBad = _useState[1];\n\n  function toggleIsBad() {\n    setIsBad(function (prev) {\n      return !prev;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    container: true,\n    spacing: 3,\n    direction: \"column\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variant: \"h2\",\n        children: \"Closures\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variant: \"body1\",\n        children: \"Hooks capture old state due to how javascript closures preserver old values. Either avoid accessing updated state within the same hook, or trigger another iteration of the hook to run with new state.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_components_app_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        nextProps: {\n          href: \"https://dmitripavlutin.com/react-hooks-stale-closures/\"\n        },\n        children: \"Be Aware of Stale Closures when Using React Hooks\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        className: \"margin1\",\n        onClick: toggleIsBad,\n        variant: \"outlined\",\n        children: isBad ? \"Switch to working example\" : \"Switch to failing example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: \"Note: This example relies on an internal api endpoint that is not available in the static build hosted on github pages. To see this demo, pull the repo down and run locally.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: isBad ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_page_containers_closures_bad__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 27\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_page_containers_closures_good__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 45\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Closures, \"7u8dxuFegpHOaoAhhaORKsiLowI=\");\n\n_c = Closures;\n\nvar _c;\n\n$RefreshReg$(_c, \"Closures\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xvc3VyZXMudHN4PzEyYTEiXSwibmFtZXMiOlsiQ2xvc3VyZXMiLCJ1c2VTdGF0ZSIsImlzQmFkIiwic2V0SXNCYWQiLCJ0b2dnbGVJc0JhZCIsInByZXYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEtBQUQsQ0FERDtBQUFBLE1BQzFCQyxLQUQwQjtBQUFBLE1BQ25CQyxRQURtQjs7QUFHakMsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkQsWUFBUSxDQUFDLFVBQUNFLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBUyxFQUFDLFFBQXRDO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLE1BQVY7QUFBQSw4QkFDRTtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBWSxlQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQU0sVUFBSSxNQUFWO0FBQUEsNkJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSxpQkFBUyxFQUFFO0FBQ1RDLGNBQUksRUFBRTtBQURHLFNBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFvQkU7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsU0FBbEI7QUFBNEIsZUFBTyxFQUFFRixXQUFyQztBQUFrRCxlQUFPLEVBQUMsVUFBMUQ7QUFBQSxrQkFDR0YsS0FBSyxHQUFHLDJCQUFILEdBQWlDO0FBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLGVBK0JFO0FBQU0sVUFBSSxNQUFWO0FBQUEsZ0JBQVlBLEtBQUssZ0JBQUcscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUFxQixxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBMUN1QkYsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3BhZ2VzL2Nsb3N1cmVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2xvc3VyZXNHb29kIGZyb20gXCIuLi9zcmMvcGFnZS1jb250YWluZXJzL2Nsb3N1cmVzL2dvb2RcIjtcbmltcG9ydCBDbG9zdXJlc0JhZCBmcm9tIFwiLi4vc3JjL3BhZ2UtY29udGFpbmVycy9jbG9zdXJlcy9iYWRcIjtcbmltcG9ydCBBcHBMaW5rIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9hcHAtbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG9zdXJlcygpIHtcbiAgY29uc3QgW2lzQmFkLCBzZXRJc0JhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSXNCYWQoKSB7XG4gICAgc2V0SXNCYWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+Q2xvc3VyZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgIEhvb2tzIGNhcHR1cmUgb2xkIHN0YXRlIGR1ZSB0byBob3cgamF2YXNjcmlwdCBjbG9zdXJlcyBwcmVzZXJ2ZXIgb2xkXG4gICAgICAgICAgdmFsdWVzLiBFaXRoZXIgYXZvaWQgYWNjZXNzaW5nIHVwZGF0ZWQgc3RhdGUgd2l0aGluIHRoZSBzYW1lIGhvb2ssIG9yXG4gICAgICAgICAgdHJpZ2dlciBhbm90aGVyIGl0ZXJhdGlvbiBvZiB0aGUgaG9vayB0byBydW4gd2l0aCBuZXcgc3RhdGUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvR3JpZD5cblxuICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgPEFwcExpbmtcbiAgICAgICAgICBuZXh0UHJvcHM9e3tcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kbWl0cmlwYXZsdXRpbi5jb20vcmVhY3QtaG9va3Mtc3RhbGUtY2xvc3VyZXMvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJlIEF3YXJlIG9mIFN0YWxlIENsb3N1cmVzIHdoZW4gVXNpbmcgUmVhY3QgSG9va3NcbiAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1hcmdpbjFcIiBvbkNsaWNrPXt0b2dnbGVJc0JhZH0gdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICAgICAge2lzQmFkID8gXCJTd2l0Y2ggdG8gd29ya2luZyBleGFtcGxlXCIgOiBcIlN3aXRjaCB0byBmYWlsaW5nIGV4YW1wbGVcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBOb3RlOiBUaGlzIGV4YW1wbGUgcmVsaWVzIG9uIGFuIGludGVybmFsIGFwaSBlbmRwb2ludCB0aGF0IGlzIG5vdFxuICAgICAgICBhdmFpbGFibGUgaW4gdGhlIHN0YXRpYyBidWlsZCBob3N0ZWQgb24gZ2l0aHViIHBhZ2VzLiBUbyBzZWUgdGhpcyBkZW1vLFxuICAgICAgICBwdWxsIHRoZSByZXBvIGRvd24gYW5kIHJ1biBsb2NhbGx5LlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgaXRlbT57aXNCYWQgPyA8Q2xvc3VyZXNCYWQgLz4gOiA8Q2xvc3VyZXNHb29kIC8+fTwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/closures.tsx\n");

/***/ })

})