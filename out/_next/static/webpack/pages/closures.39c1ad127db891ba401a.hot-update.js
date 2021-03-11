webpackHotUpdate_N_E("pages/closures",{

/***/ "./pages/closures.tsx":
/*!****************************!*\
  !*** ./pages/closures.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Closures; });\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_page_containers_closures_good__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/page-containers/closures/good */ \"./src/page-containers/closures/good/index.tsx\");\n/* harmony import */ var _src_page_containers_closures_bad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/page-containers/closures/bad */ \"./src/page-containers/closures/bad/index.tsx\");\n/* harmony import */ var _src_components_app_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/app-link */ \"./src/components/app-link/index.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/tkaplan/Repos/pel-takeaways/pages/closures.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Closures() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isBad = _useState[0],\n      setIsBad = _useState[1];\n\n  function toggleIsBad() {\n    setIsBad(function (prev) {\n      return !prev;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    container: true,\n    spacing: 3,\n    direction: \"column\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variant: \"h2\",\n        children: \"Closures\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variant: \"body1\",\n        children: \"Hooks capture old state due to how javascript closures preserver old values. Either avoid accessing updated state within the same hook, or trigger another iteration of the hook to run with new state.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_components_app_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        nextProps: {\n          href: \"https://dmitripavlutin.com/react-hooks-stale-closures/\"\n        },\n        children: \"Be Aware of Stale Closures when Using React Hooks\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        className: \"margin1\",\n        onClick: toggleIsBad,\n        variant: \"outlined\",\n        children: isBad ? \"Switch to working example\" : \"Switch to failing example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"em\", {\n        children: [\" \", \"Note: This example relies on an internal api endpoint that is not available in the static build hosted on github pages. To see this demo, pull the repo down and run locally.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      item: true,\n      children: isBad ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_page_containers_closures_bad__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 27\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_src_page_containers_closures_good__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 45\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Closures, \"7u8dxuFegpHOaoAhhaORKsiLowI=\");\n\n_c = Closures;\n\nvar _c;\n\n$RefreshReg$(_c, \"Closures\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xvc3VyZXMudHN4PzEyYTEiXSwibmFtZXMiOlsiQ2xvc3VyZXMiLCJ1c2VTdGF0ZSIsImlzQmFkIiwic2V0SXNCYWQiLCJ0b2dnbGVJc0JhZCIsInByZXYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEtBQUQsQ0FERDtBQUFBLE1BQzFCQyxLQUQwQjtBQUFBLE1BQ25CQyxRQURtQjs7QUFHakMsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkQsWUFBUSxDQUFDLFVBQUNFLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBUyxFQUFDLFFBQXRDO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLE1BQVY7QUFBQSw4QkFDRTtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBWSxlQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQU0sVUFBSSxNQUFWO0FBQUEsNkJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSxpQkFBUyxFQUFFO0FBQ1RDLGNBQUksRUFBRTtBQURHLFNBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFvQkU7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsU0FBbEI7QUFBNEIsZUFBTyxFQUFFRixXQUFyQztBQUFrRCxlQUFPLEVBQUMsVUFBMUQ7QUFBQSxrQkFDR0YsS0FBSyxHQUFHLDJCQUFILEdBQWlDO0FBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBMEJFO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsZUFrQ0U7QUFBTSxVQUFJLE1BQVY7QUFBQSxnQkFBWUEsS0FBSyxnQkFBRyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQXFCLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDs7R0E3Q3VCRixROztLQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvY2xvc3VyZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDbG9zdXJlc0dvb2QgZnJvbSBcIi4uL3NyYy9wYWdlLWNvbnRhaW5lcnMvY2xvc3VyZXMvZ29vZFwiO1xuaW1wb3J0IENsb3N1cmVzQmFkIGZyb20gXCIuLi9zcmMvcGFnZS1jb250YWluZXJzL2Nsb3N1cmVzL2JhZFwiO1xuaW1wb3J0IEFwcExpbmsgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2FwcC1saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3N1cmVzKCkge1xuICBjb25zdCBbaXNCYWQsIHNldElzQmFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJc0JhZCgpIHtcbiAgICBzZXRJc0JhZCgocHJldikgPT4gIXByZXYpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5DbG9zdXJlczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgSG9va3MgY2FwdHVyZSBvbGQgc3RhdGUgZHVlIHRvIGhvdyBqYXZhc2NyaXB0IGNsb3N1cmVzIHByZXNlcnZlciBvbGRcbiAgICAgICAgICB2YWx1ZXMuIEVpdGhlciBhdm9pZCBhY2Nlc3NpbmcgdXBkYXRlZCBzdGF0ZSB3aXRoaW4gdGhlIHNhbWUgaG9vaywgb3JcbiAgICAgICAgICB0cmlnZ2VyIGFub3RoZXIgaXRlcmF0aW9uIG9mIHRoZSBob29rIHRvIHJ1biB3aXRoIG5ldyBzdGF0ZS5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICA8QXBwTGlua1xuICAgICAgICAgIG5leHRQcm9wcz17e1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2RtaXRyaXBhdmx1dGluLmNvbS9yZWFjdC1ob29rcy1zdGFsZS1jbG9zdXJlcy9cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQmUgQXdhcmUgb2YgU3RhbGUgQ2xvc3VyZXMgd2hlbiBVc2luZyBSZWFjdCBIb29rc1xuICAgICAgICA8L0FwcExpbms+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWFyZ2luMVwiIG9uQ2xpY2s9e3RvZ2dsZUlzQmFkfSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICB7aXNCYWQgPyBcIlN3aXRjaCB0byB3b3JraW5nIGV4YW1wbGVcIiA6IFwiU3dpdGNoIHRvIGZhaWxpbmcgZXhhbXBsZVwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvR3JpZD5cblxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIDxlbT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgTm90ZTogVGhpcyBleGFtcGxlIHJlbGllcyBvbiBhbiBpbnRlcm5hbCBhcGkgZW5kcG9pbnQgdGhhdCBpcyBub3RcbiAgICAgICAgICBhdmFpbGFibGUgaW4gdGhlIHN0YXRpYyBidWlsZCBob3N0ZWQgb24gZ2l0aHViIHBhZ2VzLiBUbyBzZWUgdGhpc1xuICAgICAgICAgIGRlbW8sIHB1bGwgdGhlIHJlcG8gZG93biBhbmQgcnVuIGxvY2FsbHkuXG4gICAgICAgIDwvZW0+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBpdGVtPntpc0JhZCA/IDxDbG9zdXJlc0JhZCAvPiA6IDxDbG9zdXJlc0dvb2QgLz59PC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/closures.tsx\n");

/***/ })

})