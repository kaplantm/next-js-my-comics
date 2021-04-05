webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/lib/hooks/use-debounce.ts":
/*!***************************************!*\
  !*** ./src/lib/hooks/use-debounce.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n // https://usehooks.com/useDebounce/\n\nfunction useDebounce(value, delay) {\n  _s();\n\n  // State and setters for debounced value\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(value),\n      debouncedValue = _useState[0],\n      setDebouncedValue = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var valueAdjustedDelay = (value === null || value === void 0 ? void 0 : value.length) <= 1 ? delay : 0; // Update debounced value after delay\n\n    var handler = setTimeout(function () {\n      setDebouncedValue(value);\n    }, valueAdjustedDelay); // Cancel the timeout if value changes (also on delay change or unmount)\n    // This is how we prevent debounced value from updating if value is changed ...\n    // .. within the delay period. Timeout gets cleared and restarted.\n\n    return function () {\n      clearTimeout(handler);\n    };\n  }, [value, delay] // Only re-call effect if value or delay changes\n  );\n  return debouncedValue;\n}\n\n_s(useDebounce, \"KDuPAtDOgxm8PU6legVJOb3oOmA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDebounce);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9ob29rcy91c2UtZGVib3VuY2UudHM/N2NkOCJdLCJuYW1lcyI6WyJ1c2VEZWJvdW5jZSIsInZhbHVlIiwiZGVsYXkiLCJ1c2VTdGF0ZSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ1c2VFZmZlY3QiLCJ2YWx1ZUFkanVzdGVkRGVsYXkiLCJsZW5ndGgiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FFQTs7QUFDQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFDakM7QUFEaUMsa0JBRVdDLHNEQUFRLENBQUNGLEtBQUQsQ0FGbkI7QUFBQSxNQUUxQkcsY0FGMEI7QUFBQSxNQUVWQyxpQkFGVTs7QUFJakNDLHlEQUFTLENBQ1AsWUFBTTtBQUNKLFFBQU1DLGtCQUFrQixHQUFHLENBQUFOLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFTyxNQUFQLEtBQWlCLENBQWpCLEdBQXFCTixLQUFyQixHQUE2QixDQUF4RCxDQURJLENBRUo7O0FBQ0EsUUFBTU8sT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMvQkwsdUJBQWlCLENBQUNKLEtBQUQsQ0FBakI7QUFDRCxLQUZ5QixFQUV2Qk0sa0JBRnVCLENBQTFCLENBSEksQ0FPSjtBQUNBO0FBQ0E7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLGtCQUFZLENBQUNGLE9BQUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQWRNLEVBZVAsQ0FBQ1IsS0FBRCxFQUFRQyxLQUFSLENBZk8sQ0FlUTtBQWZSLEdBQVQ7QUFrQkEsU0FBT0UsY0FBUDtBQUNEOztHQXZCUUosVzs7QUF5Qk1BLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9ob29rcy91c2UtZGVib3VuY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZURlYm91bmNlL1xuZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gIC8vIFN0YXRlIGFuZCBzZXR0ZXJzIGZvciBkZWJvdW5jZWQgdmFsdWVcbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQWRqdXN0ZWREZWxheSA9IHZhbHVlPy5sZW5ndGggPD0gMSA/IGRlbGF5IDogMDtcbiAgICAgIC8vIFVwZGF0ZSBkZWJvdW5jZWQgdmFsdWUgYWZ0ZXIgZGVsYXlcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpO1xuICAgICAgfSwgdmFsdWVBZGp1c3RlZERlbGF5KTtcblxuICAgICAgLy8gQ2FuY2VsIHRoZSB0aW1lb3V0IGlmIHZhbHVlIGNoYW5nZXMgKGFsc28gb24gZGVsYXkgY2hhbmdlIG9yIHVubW91bnQpXG4gICAgICAvLyBUaGlzIGlzIGhvdyB3ZSBwcmV2ZW50IGRlYm91bmNlZCB2YWx1ZSBmcm9tIHVwZGF0aW5nIGlmIHZhbHVlIGlzIGNoYW5nZWQgLi4uXG4gICAgICAvLyAuLiB3aXRoaW4gdGhlIGRlbGF5IHBlcmlvZC4gVGltZW91dCBnZXRzIGNsZWFyZWQgYW5kIHJlc3RhcnRlZC5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBbdmFsdWUsIGRlbGF5XSAvLyBPbmx5IHJlLWNhbGwgZWZmZWN0IGlmIHZhbHVlIG9yIGRlbGF5IGNoYW5nZXNcbiAgKTtcblxuICByZXR1cm4gZGVib3VuY2VkVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlYm91bmNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/hooks/use-debounce.ts\n");

/***/ })

})