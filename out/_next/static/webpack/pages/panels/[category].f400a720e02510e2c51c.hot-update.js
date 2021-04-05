webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/viewable-image/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/viewable-image/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    viewableImageWrapper: {\n      transition: \"min-height 3s\",\n      minHeight: 0,\n      maxHeight: 1000\n    },\n    paper: {\n      overflow: \"hidden\"\n    },\n    image: {\n      maxWidth: \"100%\",\n      cursor: \"pointer\",\n      display: \"block\",\n      backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"]\n    },\n    loading: {\n      minHeight: 400,\n      maxHeight: 400\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvdXNlLXN0eWxlcy50cz81NDdkIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInZpZXdhYmxlSW1hZ2VXcmFwcGVyIiwidHJhbnNpdGlvbiIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInBhcGVyIiwib3ZlcmZsb3ciLCJpbWFnZSIsIm1heFdpZHRoIiwiY3Vyc29yIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImljZUJsdWUiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyx3QkFBb0IsRUFBRTtBQUNwQkMsZ0JBQVUsRUFBRSxlQURRO0FBRXBCQyxlQUFTLEVBQUUsQ0FGUztBQUdwQkMsZUFBUyxFQUFFO0FBSFMsS0FEaUI7QUFNdkNDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQU5nQztBQVN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURMO0FBRUxDLFlBQU0sRUFBRSxTQUZIO0FBR0xDLGFBQU8sRUFBRSxPQUhKO0FBSUxDLHFCQUFlLEVBQUVDLHFEQUFPQTtBQUpuQixLQVRnQztBQWV2Q0MsV0FBTyxFQUFFO0FBQ1BWLGVBQVMsRUFBRSxHQURKO0FBRVBDLGVBQVMsRUFBRTtBQUZKO0FBZjhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBcUJlTix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ZpZXdhYmxlLWltYWdlL3VzZS1zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgaWNlQmx1ZSB9IGZyb20gXCIuLi8uLi90aGVtZS9jb2xvcnNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHZpZXdhYmxlSW1hZ2VXcmFwcGVyOiB7XG4gICAgdHJhbnNpdGlvbjogXCJtaW4taGVpZ2h0IDNzXCIsXG4gICAgbWluSGVpZ2h0OiAwLFxuICAgIG1heEhlaWdodDogMTAwMCxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpY2VCbHVlLFxuICB9LFxuICBsb2FkaW5nOiB7XG4gICAgbWluSGVpZ2h0OiA0MDAsXG4gICAgbWF4SGVpZ2h0OiA0MDAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/viewable-image/use-styles.ts\n");

/***/ })

})