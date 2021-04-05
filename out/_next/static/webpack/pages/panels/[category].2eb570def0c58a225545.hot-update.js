webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/masonry-layout/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/masonry-layout/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var src_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    masonryResultContainer: {\n      display: \"flex\",\n      flex: 1\n    },\n    imageMatte: {\n      backgroundColor: src_theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"],\n      borderRadius: 6,\n      padding: theme.spacing(3),\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      minHeight: \"200px\",\n      \"& img\": {\n        maxWidth: \"100%\",\n        maxHeight: \"500px\"\n      }\n    },\n    showMoreButtonContainer: {\n      display: \"flex\",\n      flex: 1,\n      alignItems: \"center\",\n      justifyContent: \"center\" // border: \"1px solid red\",\n\n    },\n    showMoreButton: {\n      fontSize: \"1.25rem\",\n      fontWeight: 800\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvdXNlLXN0eWxlcy50cz80NzgwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hc29ucnlSZXN1bHRDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleCIsImltYWdlTWF0dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY2VCbHVlIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInNob3dNb3JlQnV0dG9uQ29udGFpbmVyIiwic2hvd01vcmVCdXR0b24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLDBCQUFzQixFQUFFO0FBQ3RCQyxhQUFPLEVBQUUsTUFEYTtBQUV0QkMsVUFBSSxFQUFFO0FBRmdCLEtBRGU7QUFLdkNDLGNBQVUsRUFBRTtBQUNWQyxxQkFBZSxFQUFFQyx3REFEUDtBQUVWQyxrQkFBWSxFQUFFLENBRko7QUFHVkMsYUFBTyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkLENBSEM7QUFJVlAsYUFBTyxFQUFFLE1BSkM7QUFLVlEsZ0JBQVUsRUFBRSxRQUxGO0FBTVZDLG9CQUFjLEVBQUUsUUFOTjtBQVFWQyxlQUFTLEVBQUUsT0FSRDtBQVNWLGVBQVM7QUFDUEMsZ0JBQVEsRUFBRSxNQURIO0FBRVBDLGlCQUFTLEVBQUU7QUFGSjtBQVRDLEtBTDJCO0FBbUJ2Q0MsMkJBQXVCLEVBQUU7QUFDdkJiLGFBQU8sRUFBRSxNQURjO0FBRXZCQyxVQUFJLEVBQUUsQ0FGaUI7QUFHdkJPLGdCQUFVLEVBQUUsUUFIVztBQUl2QkMsb0JBQWMsRUFBRSxRQUpPLENBS3ZCOztBQUx1QixLQW5CYztBQTBCdkNLLGtCQUFjLEVBQUU7QUFDZEMsY0FBUSxFQUFFLFNBREk7QUFFZEMsZ0JBQVUsRUFBRTtBQUZFO0FBMUJ1QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWdDZXBCLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvdXNlLXN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBpY2VCbHVlIH0gZnJvbSBcInNyYy90aGVtZS9jb2xvcnNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIG1hc29ucnlSZXN1bHRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4OiAxLFxuICB9LFxuICBpbWFnZU1hdHRlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpY2VCbHVlLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cbiAgICBtaW5IZWlnaHQ6IFwiMjAwcHhcIixcbiAgICBcIiYgaW1nXCI6IHtcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1heEhlaWdodDogXCI1MDBweFwiLFxuICAgIH0sXG4gIH0sXG4gIHNob3dNb3JlQnV0dG9uQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogMSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIC8vIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXG4gIH0sXG4gIHNob3dNb3JlQnV0dG9uOiB7XG4gICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/use-styles.ts\n");

/***/ })

})