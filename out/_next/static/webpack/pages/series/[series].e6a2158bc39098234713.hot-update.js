webpackHotUpdate_N_E("pages/series/[series]",{

/***/ "./src/components/viewable-image/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/viewable-image/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    viewableImageWrapper: {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      transition: \"min-height .3s\",\n      minHeight: 0,\n      maxHeight: 3000\n    },\n    paper: {\n      overflow: \"hidden\"\n    },\n    image: {\n      maxWidth: \"100%\",\n      cursor: \"pointer\",\n      display: \"block\",\n      backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"]\n    },\n    loading: {\n      minHeight: 150,\n      maxHeight: 600\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvdXNlLXN0eWxlcy50cz81NDdkIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInZpZXdhYmxlSW1hZ2VXcmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRyYW5zaXRpb24iLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJwYXBlciIsIm92ZXJmbG93IiwiaW1hZ2UiLCJtYXhXaWR0aCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImljZUJsdWUiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyx3QkFBb0IsRUFBRTtBQUNwQkMsYUFBTyxFQUFFLE1BRFc7QUFFcEJDLGdCQUFVLEVBQUUsUUFGUTtBQUdwQkMsb0JBQWMsRUFBRSxRQUhJO0FBSXBCQyxnQkFBVSxFQUFFLGdCQUpRO0FBS3BCQyxlQUFTLEVBQUUsQ0FMUztBQU1wQkMsZUFBUyxFQUFFO0FBTlMsS0FEaUI7QUFTdkNDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQVRnQztBQVl2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURMO0FBRUxDLFlBQU0sRUFBRSxTQUZIO0FBR0xWLGFBQU8sRUFBRSxPQUhKO0FBSUxXLHFCQUFlLEVBQUVDLHFEQUFPQTtBQUpuQixLQVpnQztBQWtCdkNDLFdBQU8sRUFBRTtBQUNQVCxlQUFTLEVBQUUsR0FESjtBQUVQQyxlQUFTLEVBQUU7QUFGSjtBQWxCOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUF3QmVULHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvdXNlLXN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBpY2VCbHVlIH0gZnJvbSBcIi4uLy4uL3RoZW1lL2NvbG9yc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdmlld2FibGVJbWFnZVdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRyYW5zaXRpb246IFwibWluLWhlaWdodCAuM3NcIixcbiAgICBtaW5IZWlnaHQ6IDAsXG4gICAgbWF4SGVpZ2h0OiAzMDAwLFxuICB9LFxuICBwYXBlcjoge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBpbWFnZToge1xuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGljZUJsdWUsXG4gIH0sXG4gIGxvYWRpbmc6IHtcbiAgICBtaW5IZWlnaHQ6IDE1MCxcbiAgICBtYXhIZWlnaHQ6IDYwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/viewable-image/use-styles.ts\n");

/***/ })

})