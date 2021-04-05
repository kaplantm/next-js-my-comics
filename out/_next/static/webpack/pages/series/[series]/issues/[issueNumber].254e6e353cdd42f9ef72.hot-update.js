webpackHotUpdate_N_E("pages/series/[series]/issues/[issueNumber]",{

/***/ "./src/page-containers/comic-body/index.tsx":
/*!**************************************************!*\
  !*** ./src/page-containers/comic-body/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-styles */ \"./src/page-containers/comic-body/use-styles.ts\");\n/* harmony import */ var _components_viewable_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/viewable-image */ \"./src/components/viewable-image/index.tsx\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ \"./src/page-containers/comic-body/helpers.tsx\");\n/* harmony import */ var _components_masonry_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/masonry-layout */ \"./src/components/masonry-layout/index.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/page-containers/comic-body/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ComicBody(_ref) {\n  _s();\n\n  var _this = this;\n\n  var params = _ref.params,\n      issue = _ref.issue,\n      series = _ref.series,\n      children = _ref.children;\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var seriesFrontMatter = series.comic.frontMatter;\n\n  var _ref2 = (issue === null || issue === void 0 ? void 0 : issue.comic) || {},\n      issueFrontMatter = _ref2.frontMatter;\n\n  var isIssue = !!issue;\n\n  var _ref3 = isIssue ? issue.comic : series.comic,\n      description = _ref3.description,\n      coverPath = _ref3.coverPath,\n      imagePaths = _ref3.imagePaths;\n\n  var _ref4 = isIssue ? issueFrontMatter : seriesFrontMatter,\n      titleLink = _ref4.link,\n      title = _ref4.title;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    spacing: 3,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      item: true,\n      xs: 12,\n      children: [Object(_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getDisplayTitle\"])(titleLink, title, isIssue, seriesFrontMatter.start, seriesFrontMatter.end), isIssue && Object(_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getDisplaySubtitle\"])(params.series, seriesFrontMatter.title, issueFrontMatter.issueNumber, issueFrontMatter.start, issueFrontMatter.end)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      item: true,\n      xs: 12,\n      className: classes.coverImageContainer,\n      children: [coverPath && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_viewable_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        src: coverPath\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 23\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        component: \"div\",\n        children: description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 27\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), children && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.childrenContainer,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), !!(imagePaths !== null && imagePaths !== void 0 && imagePaths.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        item: true,\n        xs: 12,\n        className: classes.imagesContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          item: true,\n          xs: 12,\n          container: true,\n          spacing: 3,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_masonry_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: imagePaths.map(function (url) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_viewable_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                src: url\n              }, url, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ComicBody, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [_use_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = ComicBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComicBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComicBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2UtY29udGFpbmVycy9jb21pYy1ib2R5L2luZGV4LnRzeD85ZDhlIl0sIm5hbWVzIjpbIkNvbWljQm9keSIsInBhcmFtcyIsImlzc3VlIiwic2VyaWVzIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwic2VyaWVzRnJvbnRNYXR0ZXIiLCJjb21pYyIsImZyb250TWF0dGVyIiwiaXNzdWVGcm9udE1hdHRlciIsImlzSXNzdWUiLCJkZXNjcmlwdGlvbiIsImNvdmVyUGF0aCIsImltYWdlUGF0aHMiLCJ0aXRsZUxpbmsiLCJsaW5rIiwidGl0bGUiLCJnZXREaXNwbGF5VGl0bGUiLCJzdGFydCIsImVuZCIsImdldERpc3BsYXlTdWJ0aXRsZSIsImlzc3VlTnVtYmVyIiwiY292ZXJJbWFnZUNvbnRhaW5lciIsImNoaWxkcmVuQ29udGFpbmVyIiwibGVuZ3RoIiwiaW1hZ2VzQ29udGFpbmVyIiwibWFwIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBU0EsU0FBU0EsU0FBVCxPQUF3RTtBQUFBOztBQUFBOztBQUFBLE1BQW5EQyxNQUFtRCxRQUFuREEsTUFBbUQ7QUFBQSxNQUEzQ0MsS0FBMkMsUUFBM0NBLEtBQTJDO0FBQUEsTUFBcENDLE1BQW9DLFFBQXBDQSxNQUFvQztBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFDdEUsTUFBTUMsT0FBTyxHQUFHQywyREFBUyxFQUF6QjtBQURzRSxNQUdqREMsaUJBSGlELEdBRzNCSixNQUFNLENBQUNLLEtBSG9CLENBRzlEQyxXQUg4RDs7QUFBQSxjQUk1QixDQUFBUCxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRU0sS0FBUCxLQUFnQixFQUpZO0FBQUEsTUFJakRFLGdCQUppRCxTQUk5REQsV0FKOEQ7O0FBS3RFLE1BQU1FLE9BQU8sR0FBRyxDQUFDLENBQUNULEtBQWxCOztBQUxzRSxjQU12QlMsT0FBTyxHQUNsRFQsS0FBSyxDQUFDTSxLQUQ0QyxHQUVsREwsTUFBTSxDQUFDSyxLQVIyRDtBQUFBLE1BTTlESSxXQU44RCxTQU05REEsV0FOOEQ7QUFBQSxNQU1qREMsU0FOaUQsU0FNakRBLFNBTmlEO0FBQUEsTUFNdENDLFVBTnNDLFNBTXRDQSxVQU5zQzs7QUFBQSxjQVNuQ0gsT0FBTyxHQUN0Q0QsZ0JBRHNDLEdBRXRDSCxpQkFYa0U7QUFBQSxNQVN4RFEsU0FUd0QsU0FTOURDLElBVDhEO0FBQUEsTUFTN0NDLEtBVDZDLFNBUzdDQSxLQVQ2Qzs7QUFhdEUsc0JBQ0U7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLGlCQUNHQyxnRUFBZSxDQUNkSCxTQURjLEVBRWRFLEtBRmMsRUFHZE4sT0FIYyxFQUlkSixpQkFBaUIsQ0FBQ1ksS0FKSixFQUtkWixpQkFBaUIsQ0FBQ2EsR0FMSixDQURsQixFQVFHVCxPQUFPLElBQ05VLG1FQUFrQixDQUNoQnBCLE1BQU0sQ0FBQ0UsTUFEUyxFQUVoQkksaUJBQWlCLENBQUNVLEtBRkYsRUFHaEJQLGdCQUFnQixDQUFDWSxXQUhELEVBSWhCWixnQkFBZ0IsQ0FBQ1MsS0FKRCxFQUtoQlQsZ0JBQWdCLENBQUNVLEdBTEQsQ0FUdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFtQkU7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixlQUFTLEVBQUVmLE9BQU8sQ0FBQ2tCLG1CQUF0QztBQUFBLGlCQUNHVixTQUFTLGlCQUFJLHFFQUFDLGtFQUFEO0FBQWUsV0FBRyxFQUFFQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhCLGVBRUU7QUFBWSxpQkFBUyxFQUFDLEtBQXRCO0FBQUEsa0JBQ0dELFdBQVcsaUJBQUkscUVBQUMscURBQUQ7QUFBQSxvQkFBZ0JBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBS0dSLFFBQVEsaUJBQ1A7QUFBSyxpQkFBUyxFQUFFQyxPQUFPLENBQUNtQixpQkFBeEI7QUFBQSxrQkFBNENwQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLEVBNkJHLENBQUMsRUFBQ1UsVUFBRCxhQUFDQSxVQUFELGVBQUNBLFVBQVUsQ0FBRVcsTUFBYixDQUFELGlCQUNDO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixpQkFBUyxFQUFFcEIsT0FBTyxDQUFDcUIsZUFBdEM7QUFBQSwrQkFDRTtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLG1CQUFTLE1BQTVCO0FBQTZCLGlCQUFPLEVBQUUsQ0FBdEM7QUFBQSxpQ0FDRSxxRUFBQyxrRUFBRDtBQUFBLHNCQUNHWixVQUFVLENBQUNhLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsa0NBQ2QscUVBQUMsa0VBQUQ7QUFBZSxtQkFBRyxFQUFFQTtBQUFwQixpQkFBOEJBLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGM7QUFBQSxhQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNEOztHQTFEUTVCLFM7VUFDU00sbUQ7OztLQURUTixTO0FBNERNQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlLWNvbnRhaW5lcnMvY29taWMtYm9keS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBEaXZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vdXNlLXN0eWxlc1wiO1xuaW1wb3J0IFZpZXdhYmxlSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2VcIjtcbmltcG9ydCB7IGdldERpc3BsYXlTdWJ0aXRsZSwgZ2V0RGlzcGxheVRpdGxlIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgQ29taWNXaXRoTWV0YWRhdGEgfSBmcm9tIFwiQGxpYi90eXBlc1wiO1xuaW1wb3J0IE1hc29ucnlMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL21hc29ucnktbGF5b3V0XCI7XG5cbnR5cGUgQ29taWNCb2R5UHJvcHMgPSB7XG4gIHBhcmFtczogeyBzZXJpZXM6IHN0cmluZzsgaXNzdWVOdW1iZXI6IG51bWJlciB9O1xuICBpc3N1ZT86IENvbWljV2l0aE1ldGFkYXRhO1xuICBzZXJpZXM6IENvbWljV2l0aE1ldGFkYXRhO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZnVuY3Rpb24gQ29taWNCb2R5KHsgcGFyYW1zLCBpc3N1ZSwgc2VyaWVzLCBjaGlsZHJlbiB9OiBDb21pY0JvZHlQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgeyBmcm9udE1hdHRlcjogc2VyaWVzRnJvbnRNYXR0ZXIgfSA9IHNlcmllcy5jb21pYztcbiAgY29uc3QgeyBmcm9udE1hdHRlcjogaXNzdWVGcm9udE1hdHRlciB9ID0gaXNzdWU/LmNvbWljIHx8IHt9O1xuICBjb25zdCBpc0lzc3VlID0gISFpc3N1ZTtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgY292ZXJQYXRoLCBpbWFnZVBhdGhzIH0gPSBpc0lzc3VlXG4gICAgPyBpc3N1ZS5jb21pY1xuICAgIDogc2VyaWVzLmNvbWljO1xuICBjb25zdCB7IGxpbms6IHRpdGxlTGluaywgdGl0bGUgfSA9IGlzSXNzdWVcbiAgICA/IGlzc3VlRnJvbnRNYXR0ZXJcbiAgICA6IHNlcmllc0Zyb250TWF0dGVyO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICB7Z2V0RGlzcGxheVRpdGxlKFxuICAgICAgICAgIHRpdGxlTGluayxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBpc0lzc3VlLFxuICAgICAgICAgIHNlcmllc0Zyb250TWF0dGVyLnN0YXJ0LFxuICAgICAgICAgIHNlcmllc0Zyb250TWF0dGVyLmVuZFxuICAgICAgICApfVxuICAgICAgICB7aXNJc3N1ZSAmJlxuICAgICAgICAgIGdldERpc3BsYXlTdWJ0aXRsZShcbiAgICAgICAgICAgIHBhcmFtcy5zZXJpZXMsXG4gICAgICAgICAgICBzZXJpZXNGcm9udE1hdHRlci50aXRsZSxcbiAgICAgICAgICAgIGlzc3VlRnJvbnRNYXR0ZXIuaXNzdWVOdW1iZXIsXG4gICAgICAgICAgICBpc3N1ZUZyb250TWF0dGVyLnN0YXJ0LFxuICAgICAgICAgICAgaXNzdWVGcm9udE1hdHRlci5lbmRcbiAgICAgICAgICApfVxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvdmVySW1hZ2VDb250YWluZXJ9PlxuICAgICAgICB7Y292ZXJQYXRoICYmIDxWaWV3YWJsZUltYWdlIHNyYz17Y292ZXJQYXRofSAvPn1cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxSZWFjdE1hcmtkb3duPntkZXNjcmlwdGlvbn08L1JlYWN0TWFya2Rvd24+fVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2hpbGRyZW5Db250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvR3JpZD5cblxuICAgICAgeyEhaW1hZ2VQYXRocz8ubGVuZ3RoICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8TWFzb25yeUxheW91dD5cbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHVybDogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Vmlld2FibGVJbWFnZSBzcmM9e3VybH0ga2V5PXt1cmx9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeUxheW91dD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbWljQm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/page-containers/comic-body/index.tsx\n");

/***/ })

})