webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/components/masonry-layout/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/masonry-layout/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var src_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    masonryResultContainer: {\n      display: \"flex\",\n      flex: 1\n    },\n    imageMatte: {\n      backgroundColor: src_theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"],\n      borderRadius: 6,\n      padding: theme.spacing(3),\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      minHeight: \"200px\",\n      \"& img\": {\n        maxWidth: \"100%\",\n        maxHeight: \"500px\"\n      }\n    },\n    showMoreButtonContainer: {\n      display: \"flex\",\n      flex: 1,\n      alignItems: \"center\",\n      justifyContent: \"center\" // border: \"1px solid red\",\n\n    },\n    showMoreButton: {\n      // display: \"flex\",\n      // flex: 1,\n      backgroundColor: \"red\",\n      padding: theme.spacing(3),\n      fontSize: \"1.25rem\",\n      fontWeight: 800,\n      color: theme.palette.text.secondary\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFzb25yeS1sYXlvdXQvdXNlLXN0eWxlcy50cz80NzgwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hc29ucnlSZXN1bHRDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleCIsImltYWdlTWF0dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY2VCbHVlIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNwYWNpbmciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInNob3dNb3JlQnV0dG9uQ29udGFpbmVyIiwic2hvd01vcmVCdXR0b24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQywwQkFBc0IsRUFBRTtBQUN0QkMsYUFBTyxFQUFFLE1BRGE7QUFFdEJDLFVBQUksRUFBRTtBQUZnQixLQURlO0FBS3ZDQyxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRUMsd0RBRFA7QUFFVkMsa0JBQVksRUFBRSxDQUZKO0FBR1ZDLGFBQU8sRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQUhDO0FBSVZQLGFBQU8sRUFBRSxNQUpDO0FBS1ZRLGdCQUFVLEVBQUUsUUFMRjtBQU1WQyxvQkFBYyxFQUFFLFFBTk47QUFRVkMsZUFBUyxFQUFFLE9BUkQ7QUFTVixlQUFTO0FBQ1BDLGdCQUFRLEVBQUUsTUFESDtBQUVQQyxpQkFBUyxFQUFFO0FBRko7QUFUQyxLQUwyQjtBQW1CdkNDLDJCQUF1QixFQUFFO0FBQ3ZCYixhQUFPLEVBQUUsTUFEYztBQUV2QkMsVUFBSSxFQUFFLENBRmlCO0FBR3ZCTyxnQkFBVSxFQUFFLFFBSFc7QUFJdkJDLG9CQUFjLEVBQUUsUUFKTyxDQUt2Qjs7QUFMdUIsS0FuQmM7QUEwQnZDSyxrQkFBYyxFQUFFO0FBQ2Q7QUFDQTtBQUNBWCxxQkFBZSxFQUFFLEtBSEg7QUFJZEcsYUFBTyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkLENBSks7QUFLZFEsY0FBUSxFQUFFLFNBTEk7QUFNZEMsZ0JBQVUsRUFBRSxHQU5FO0FBT2RDLFdBQUssRUFBRW5CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFQWjtBQTFCdUIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFxQ2V4Qix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21hc29ucnktbGF5b3V0L3VzZS1zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgaWNlQmx1ZSwgcG93ZGVyQmx1ZSB9IGZyb20gXCJzcmMvdGhlbWUvY29sb3JzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtYXNvbnJ5UmVzdWx0Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogMSxcbiAgfSxcbiAgaW1hZ2VNYXR0ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogaWNlQmx1ZSxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXG4gICAgbWluSGVpZ2h0OiBcIjIwMHB4XCIsXG4gICAgXCImIGltZ1wiOiB7XG4gICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXhIZWlnaHQ6IFwiNTAwcHhcIixcbiAgICB9LFxuICB9LFxuICBzaG93TW9yZUJ1dHRvbkNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkIHJlZFwiLFxuICB9LFxuICBzaG93TW9yZUJ1dHRvbjoge1xuICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIC8vIGZsZXg6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/masonry-layout/use-styles.ts\n");

/***/ })

})