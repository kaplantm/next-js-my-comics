webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/page-containers/panels/category/index.tsx":
/*!*******************************************************!*\
  !*** ./src/page-containers/panels/category/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_viewable_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/viewable-image */ \"./src/components/viewable-image/index.tsx\");\n/* harmony import */ var _components_masonry_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/masonry-layout */ \"./src/components/masonry-layout/index.tsx\");\n/* harmony import */ var _components_form_inputs_app_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/form-inputs/app-text-field */ \"./src/components/form-inputs/app-text-field/index.tsx\");\n/* harmony import */ var _lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/hooks/use-debounce */ \"./src/lib/hooks/use-debounce.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/page-containers/panels/category/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Panels(_ref) {\n  _s();\n\n  var _this = this;\n\n  var params = _ref.params,\n      imagePaths = _ref.imagePaths,\n      filterable = _ref.filterable;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(imagePaths),\n      currentImagePaths = _useState[0],\n      setCurrentImagePaths = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      searchTerm = _useState2[0],\n      setSearchTerm = _useState2[1];\n\n  var debouncedSearchTerm = Object(_lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(searchTerm, 250);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setCurrentImagePaths(imagePaths.filter(function (path) {\n      var fileName = path.split(\"/\").slice(-1)[0].split(\".\")[0];\n      console.log({\n        fileName: fileName\n      });\n      return fileName.includes(debouncedSearchTerm);\n    }));\n  }, [debouncedSearchTerm]);\n\n  function onFilterUpdate(_ref2) {\n    var target = _ref2.target;\n    var newFilter = target.value;\n    setSearchTerm(newFilter);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    container: true,\n    spacing: 3,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        variant: \"h1\",\n        className: \"capitalize\",\n        children: params.category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), filterable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_form_inputs_app_text_field__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        label: \"Search\",\n        variant: \"outlined\",\n        onChange: onFilterUpdate,\n        value: searchTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: [!!(currentImagePaths !== null && currentImagePaths !== void 0 && currentImagePaths.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_masonry_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: currentImagePaths.map(function (url) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_viewable_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            src: url\n          }, url, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, this), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Panels, \"Vf9bFseGPXOzGhrbR0xCo51WcgI=\", false, function () {\n  return [_lib_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Panels;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Panels);\n\nvar _c;\n\n$RefreshReg$(_c, \"Panels\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2UtY29udGFpbmVycy9wYW5lbHMvY2F0ZWdvcnkvaW5kZXgudHN4PzdiYmMiXSwibmFtZXMiOlsiUGFuZWxzIiwicGFyYW1zIiwiaW1hZ2VQYXRocyIsImZpbHRlcmFibGUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbWFnZVBhdGhzIiwic2V0Q3VycmVudEltYWdlUGF0aHMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJ1c2VEZWJvdW5jZSIsInVzZUVmZmVjdCIsImZpbHRlciIsInBhdGgiLCJmaWxlTmFtZSIsInNwbGl0Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJvbkZpbHRlclVwZGF0ZSIsInRhcmdldCIsIm5ld0ZpbHRlciIsInZhbHVlIiwiY2F0ZWdvcnkiLCJsZW5ndGgiLCJtYXAiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsTUFBVCxPQUFpRTtBQUFBOztBQUFBOztBQUFBLE1BQS9DQyxNQUErQyxRQUEvQ0EsTUFBK0M7QUFBQSxNQUF2Q0MsVUFBdUMsUUFBdkNBLFVBQXVDO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjs7QUFBQSxrQkFDYkMsc0RBQVEsQ0FBQ0YsVUFBRCxDQURLO0FBQUEsTUFDeERHLGlCQUR3RDtBQUFBLE1BQ3JDQyxvQkFEcUM7O0FBQUEsbUJBRTNCRixzREFBUSxDQUFDLEVBQUQsQ0FGbUI7QUFBQSxNQUV4REcsVUFGd0Q7QUFBQSxNQUU1Q0MsYUFGNEM7O0FBRy9ELE1BQU1DLG1CQUFtQixHQUFHQyx1RUFBVyxDQUFDSCxVQUFELEVBQWEsR0FBYixDQUF2QztBQUVBSSx5REFBUyxDQUFDLFlBQU07QUFDZEwsd0JBQW9CLENBQ2xCSixVQUFVLENBQUNVLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFVBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixFQUE2QkQsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsQ0FBakI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosZ0JBQVEsRUFBUkE7QUFBRixPQUFaO0FBQ0EsYUFBT0EsUUFBUSxDQUFDSyxRQUFULENBQWtCVixtQkFBbEIsQ0FBUDtBQUNELEtBSkQsQ0FEa0IsQ0FBcEI7QUFPRCxHQVJRLEVBUU4sQ0FBQ0EsbUJBQUQsQ0FSTSxDQUFUOztBQVVBLFdBQVNXLGNBQVQsUUFBb0M7QUFBQSxRQUFWQyxNQUFVLFNBQVZBLE1BQVU7QUFDbEMsUUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLEtBQXpCO0FBQ0FmLGlCQUFhLENBQUNjLFNBQUQsQ0FBYjtBQUNEOztBQUVELHNCQUNFO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBLDRCQUNFO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBQSw2QkFDRTtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFDLFlBQW5DO0FBQUEsa0JBQ0dyQixNQUFNLENBQUN1QjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFNR3JCLFVBQVUsaUJBQ1Q7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNFLHFFQUFDLDhFQUFEO0FBQ0UsYUFBSyxFQUFDLFFBRFI7QUFFRSxlQUFPLEVBQUMsVUFGVjtBQUdFLGdCQUFRLEVBQUVpQixjQUhaO0FBSUUsYUFBSyxFQUFFYjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFpQkU7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLGlCQUNHLENBQUMsRUFBQ0YsaUJBQUQsYUFBQ0EsaUJBQUQsZUFBQ0EsaUJBQWlCLENBQUVvQixNQUFwQixDQUFELGlCQUNDLHFFQUFDLGtFQUFEO0FBQUEsa0JBQ0dwQixpQkFBaUIsQ0FBQ3FCLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQ7QUFBQSw4QkFDckIscUVBQUMsa0VBQUQ7QUFBZSxlQUFHLEVBQUVBO0FBQXBCLGFBQThCQSxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURxQjtBQUFBLFNBQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBT0ssR0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBakRRM0IsTTtVQUdxQlUsK0Q7OztLQUhyQlYsTTtBQW1ETUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZS1jb250YWluZXJzL3BhbmVscy9jYXRlZ29yeS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFZpZXdhYmxlSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2VcIjtcbmltcG9ydCBNYXNvbnJ5TGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9tYXNvbnJ5LWxheW91dFwiO1xuaW1wb3J0IEFwcFRleHRGaWVsZCBmcm9tIFwiQGNvbXBvbmVudHMvZm9ybS1pbnB1dHMvYXBwLXRleHQtZmllbGRcIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiQGxpYi9ob29rcy91c2UtZGVib3VuY2VcIjtcblxudHlwZSBQYW5lbHNQcm9wcyA9IHtcbiAgcGFyYW1zOiB7IGNhdGVnb3J5OiBzdHJpbmcgfTtcbiAgaW1hZ2VQYXRoczogc3RyaW5nW107XG4gIGZpbHRlcmFibGU6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBQYW5lbHMoeyBwYXJhbXMsIGltYWdlUGF0aHMsIGZpbHRlcmFibGUgfTogUGFuZWxzUHJvcHMpIHtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZVBhdGhzLCBzZXRDdXJyZW50SW1hZ2VQYXRoc10gPSB1c2VTdGF0ZShpbWFnZVBhdGhzKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaFRlcm0gPSB1c2VEZWJvdW5jZShzZWFyY2hUZXJtLCAyNTApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudEltYWdlUGF0aHMoXG4gICAgICBpbWFnZVBhdGhzLmZpbHRlcigocGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguc3BsaXQoXCIvXCIpLnNsaWNlKC0xKVswXS5zcGxpdChcIi5cIilbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKHsgZmlsZU5hbWUgfSk7XG4gICAgICAgIHJldHVybiBmaWxlTmFtZS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2hUZXJtKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2RlYm91bmNlZFNlYXJjaFRlcm1dKTtcblxuICBmdW5jdGlvbiBvbkZpbHRlclVwZGF0ZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgbmV3RmlsdGVyID0gdGFyZ2V0LnZhbHVlO1xuICAgIHNldFNlYXJjaFRlcm0obmV3RmlsdGVyKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCI+XG4gICAgICAgICAge3BhcmFtcy5jYXRlZ29yeX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAge2ZpbHRlcmFibGUgJiYgKFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPEFwcFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlclVwZGF0ZX1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgeyEhY3VycmVudEltYWdlUGF0aHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgPE1hc29ucnlMYXlvdXQ+XG4gICAgICAgICAgICB7Y3VycmVudEltYWdlUGF0aHMubWFwKCh1cmw6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8Vmlld2FibGVJbWFnZSBzcmM9e3VybH0ga2V5PXt1cmx9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L01hc29ucnlMYXlvdXQ+XG4gICAgICAgICl9e1wiIFwifVxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-containers/panels/category/index.tsx\n");

/***/ })

})