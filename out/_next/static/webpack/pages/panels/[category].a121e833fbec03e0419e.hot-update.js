webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/page-containers/panels/category/index.tsx":
/*!*******************************************************!*\
  !*** ./src/page-containers/panels/category/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_viewable_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/viewable-image */ \"./src/components/viewable-image/index.tsx\");\n/* harmony import */ var _components_masonry_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/masonry-layout */ \"./src/components/masonry-layout/index.tsx\");\n/* harmony import */ var _components_form_inputs_app_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/form-inputs/app-text-field */ \"./src/components/form-inputs/app-text-field/index.tsx\");\n/* harmony import */ var _lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/hooks/use-debounce */ \"./src/lib/hooks/use-debounce.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/page-containers/panels/category/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Panels(_ref) {\n  _s();\n\n  var _this = this;\n\n  var params = _ref.params,\n      imagePaths = _ref.imagePaths,\n      filterable = _ref.filterable;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(imagePaths.map(function (path) {\n    return {\n      path: path,\n      show: true\n    };\n  })),\n      currentImagePaths = _useState[0],\n      setCurrentImagePaths = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      searchTerm = _useState2[0],\n      setSearchTerm = _useState2[1];\n\n  var debouncedSearchTerm = Object(_lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(searchTerm, 1000);\n\n  function onFilterUpdate(_ref2) {\n    var target = _ref2.target;\n    var newFilter = target.value;\n    setSearchTerm(newFilter);\n\n    if (newFilter) {\n      console.log({\n        currentImagePaths: currentImagePaths,\n        newFilter: newFilter\n      });\n      setCurrentImagePaths(imagePaths.filter(function (path) {\n        return path.includes(newFilter);\n      }));\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    container: true,\n    spacing: 3,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        variant: \"h1\",\n        className: \"capitalize\",\n        children: params.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), filterable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_form_inputs_app_text_field__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        label: \"Search\",\n        variant: \"outlined\",\n        onChange: onFilterUpdate,\n        value: searchTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: [!!(currentImagePaths !== null && currentImagePaths !== void 0 && currentImagePaths.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_masonry_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: currentImagePaths.map(function (url) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_viewable_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            src: url\n          }, url, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, this), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Panels, \"ccBOyPygVqKGq5PPMJy54brZ8WI=\", false, function () {\n  return [_lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Panels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Panels);\n\nvar _c;\n\n$RefreshReg$(_c, \"Panels\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2UtY29udGFpbmVycy9wYW5lbHMvY2F0ZWdvcnkvaW5kZXgudHN4PzdiYmMiXSwibmFtZXMiOlsiUGFuZWxzIiwicGFyYW1zIiwiaW1hZ2VQYXRocyIsImZpbHRlcmFibGUiLCJ1c2VTdGF0ZSIsIm1hcCIsInBhdGgiLCJzaG93IiwiY3VycmVudEltYWdlUGF0aHMiLCJzZXRDdXJyZW50SW1hZ2VQYXRocyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZGVib3VuY2VkU2VhcmNoVGVybSIsInVzZURlYm91bmNlIiwib25GaWx0ZXJVcGRhdGUiLCJ0YXJnZXQiLCJuZXdGaWx0ZXIiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNhdGVnb3J5IiwibGVuZ3RoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLE1BQVQsT0FBaUU7QUFBQTs7QUFBQTs7QUFBQSxNQUEvQ0MsTUFBK0MsUUFBL0NBLE1BQStDO0FBQUEsTUFBdkNDLFVBQXVDLFFBQXZDQSxVQUF1QztBQUFBLE1BQTNCQyxVQUEyQixRQUEzQkEsVUFBMkI7O0FBQUEsa0JBQ2JDLHNEQUFRLENBQ3hERixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsV0FBVztBQUFFQSxVQUFJLEVBQUpBLElBQUY7QUFBUUMsVUFBSSxFQUFFO0FBQWQsS0FBWDtBQUFBLEdBQWYsQ0FEd0QsQ0FESztBQUFBLE1BQ3hEQyxpQkFEd0Q7QUFBQSxNQUNyQ0Msb0JBRHFDOztBQUFBLG1CQUkzQkwsc0RBQVEsQ0FBQyxFQUFELENBSm1CO0FBQUEsTUFJeERNLFVBSndEO0FBQUEsTUFJNUNDLGFBSjRDOztBQUsvRCxNQUFNQyxtQkFBbUIsR0FBR0MsdUVBQVcsQ0FBQ0gsVUFBRCxFQUFhLElBQWIsQ0FBdkM7O0FBRUEsV0FBU0ksY0FBVCxRQUFvQztBQUFBLFFBQVZDLE1BQVUsU0FBVkEsTUFBVTtBQUNsQyxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsS0FBekI7QUFDQU4saUJBQWEsQ0FBQ0ssU0FBRCxDQUFiOztBQUNBLFFBQUlBLFNBQUosRUFBZTtBQUNiRSxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFWCx5QkFBaUIsRUFBakJBLGlCQUFGO0FBQXFCUSxpQkFBUyxFQUFUQTtBQUFyQixPQUFaO0FBQ0FQLDBCQUFvQixDQUNsQlAsVUFBVSxDQUFDa0IsTUFBWCxDQUFrQixVQUFDZCxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDZSxRQUFMLENBQWNMLFNBQWQsQ0FBVjtBQUFBLE9BQWxCLENBRGtCLENBQXBCO0FBR0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQSw0QkFDRTtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQUEsNkJBQ0U7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBQyxZQUFuQztBQUFBLGtCQUNHZixNQUFNLENBQUNxQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFNR25CLFVBQVUsaUJBQ1Q7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNFLHFFQUFDLDhFQUFEO0FBQ0UsYUFBSyxFQUFDLFFBRFI7QUFFRSxlQUFPLEVBQUMsVUFGVjtBQUdFLGdCQUFRLEVBQUVXLGNBSFo7QUFJRSxhQUFLLEVBQUVKO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQWlCRTtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQUEsaUJBQ0csQ0FBQyxFQUFDRixpQkFBRCxhQUFDQSxpQkFBRCxlQUFDQSxpQkFBaUIsQ0FBRWUsTUFBcEIsQ0FBRCxpQkFDQyxxRUFBQyxrRUFBRDtBQUFBLGtCQUNHZixpQkFBaUIsQ0FBQ0gsR0FBbEIsQ0FBc0IsVUFBQ21CLEdBQUQ7QUFBQSw4QkFDckIscUVBQUMsa0VBQUQ7QUFBZSxlQUFHLEVBQUVBO0FBQXBCLGFBQThCQSxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURxQjtBQUFBLFNBQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBT0ssR0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBL0NReEIsTTtVQUtxQmEsK0Q7OztLQUxyQmIsTTtBQWlETUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZS1jb250YWluZXJzL3BhbmVscy9jYXRlZ29yeS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBWaWV3YWJsZUltYWdlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3ZpZXdhYmxlLWltYWdlXCI7XG5pbXBvcnQgTWFzb25yeUxheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbWFzb25yeS1sYXlvdXRcIjtcbmltcG9ydCBBcHBUZXh0RmllbGQgZnJvbSBcIkBjb21wb25lbnRzL2Zvcm0taW5wdXRzL2FwcC10ZXh0LWZpZWxkXCI7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIkBsaWIvaG9va3MvdXNlLWRlYm91bmNlXCI7XG5cbnR5cGUgUGFuZWxzUHJvcHMgPSB7XG4gIHBhcmFtczogeyBjYXRlZ29yeTogc3RyaW5nIH07XG4gIGltYWdlUGF0aHM6IHN0cmluZ1tdO1xuICBmaWx0ZXJhYmxlOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gUGFuZWxzKHsgcGFyYW1zLCBpbWFnZVBhdGhzLCBmaWx0ZXJhYmxlIH06IFBhbmVsc1Byb3BzKSB7XG4gIGNvbnN0IFtjdXJyZW50SW1hZ2VQYXRocywgc2V0Q3VycmVudEltYWdlUGF0aHNdID0gdXNlU3RhdGUoXG4gICAgaW1hZ2VQYXRocy5tYXAoKHBhdGgpID0+ICh7IHBhdGgsIHNob3c6IHRydWUgfSkpXG4gICk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5jZWRTZWFyY2hUZXJtID0gdXNlRGVib3VuY2Uoc2VhcmNoVGVybSwgMTAwMCk7XG5cbiAgZnVuY3Rpb24gb25GaWx0ZXJVcGRhdGUoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IG5ld0ZpbHRlciA9IHRhcmdldC52YWx1ZTtcbiAgICBzZXRTZWFyY2hUZXJtKG5ld0ZpbHRlcik7XG4gICAgaWYgKG5ld0ZpbHRlcikge1xuICAgICAgY29uc29sZS5sb2coeyBjdXJyZW50SW1hZ2VQYXRocywgbmV3RmlsdGVyIH0pO1xuICAgICAgc2V0Q3VycmVudEltYWdlUGF0aHMoXG4gICAgICAgIGltYWdlUGF0aHMuZmlsdGVyKChwYXRoKSA9PiBwYXRoLmluY2x1ZGVzKG5ld0ZpbHRlcikpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCI+XG4gICAgICAgICAge3BhcmFtcy5jYXRlZ29yeX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAge2ZpbHRlcmFibGUgJiYgKFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPEFwcFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlclVwZGF0ZX1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgeyEhY3VycmVudEltYWdlUGF0aHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgPE1hc29ucnlMYXlvdXQ+XG4gICAgICAgICAgICB7Y3VycmVudEltYWdlUGF0aHMubWFwKCh1cmw6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8Vmlld2FibGVJbWFnZSBzcmM9e3VybH0ga2V5PXt1cmx9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L01hc29ucnlMYXlvdXQ+XG4gICAgICAgICl9e1wiIFwifVxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-containers/panels/category/index.tsx\n");

/***/ })

})