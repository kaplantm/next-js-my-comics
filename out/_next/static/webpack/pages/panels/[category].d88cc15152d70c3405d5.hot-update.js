webpackHotUpdate_N_E("pages/panels/[category]",{

/***/ "./src/lib/hooks/use-debounce.ts":
/*!***************************************!*\
  !*** ./src/lib/hooks/use-debounce.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n // https://usehooks.com/useDebounce/\n\nfunction useDebounce(value, delay) {\n  _s();\n\n  // State and setters for debounced value\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(value),\n      debouncedValue = _useState[0],\n      setDebouncedValue = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Update debounced value after delay\n    var handler = setTimeout(function () {\n      setDebouncedValue(value);\n    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)\n    // This is how we prevent debounced value from updating if value is changed ...\n    // .. within the delay period. Timeout gets cleared and restarted.\n\n    return function () {\n      clearTimeout(handler);\n    };\n  }, [value, delay] // Only re-call effect if value or delay changes\n  );\n  return debouncedValue;\n}\n\n_s(useDebounce, \"KDuPAtDOgxm8PU6legVJOb3oOmA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDebounce);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9ob29rcy91c2UtZGVib3VuY2UudHM/N2NkOCJdLCJuYW1lcyI6WyJ1c2VEZWJvdW5jZSIsInZhbHVlIiwiZGVsYXkiLCJ1c2VTdGF0ZSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FFQTs7QUFDQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsS0FBNUIsRUFBbUM7QUFBQTs7QUFDakM7QUFEaUMsa0JBRVdDLHNEQUFRLENBQUNGLEtBQUQsQ0FGbkI7QUFBQSxNQUUxQkcsY0FGMEI7QUFBQSxNQUVWQyxpQkFGVTs7QUFJakNDLHlEQUFTLENBQ1AsWUFBTTtBQUNKO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMvQkgsdUJBQWlCLENBQUNKLEtBQUQsQ0FBakI7QUFDRCxLQUZ5QixFQUV2QkMsS0FGdUIsQ0FBMUIsQ0FGSSxDQU1KO0FBQ0E7QUFDQTs7QUFDQSxXQUFPLFlBQU07QUFDWE8sa0JBQVksQ0FBQ0YsT0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBYk0sRUFjUCxDQUFDTixLQUFELEVBQVFDLEtBQVIsQ0FkTyxDQWNRO0FBZFIsR0FBVDtBQWlCQSxTQUFPRSxjQUFQO0FBQ0Q7O0dBdEJRSixXOztBQXdCTUEsMEVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2hvb2tzL3VzZS1kZWJvdW5jZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaHR0cHM6Ly91c2Vob29rcy5jb20vdXNlRGVib3VuY2UvXG5mdW5jdGlvbiB1c2VEZWJvdW5jZSh2YWx1ZSwgZGVsYXkpIHtcbiAgLy8gU3RhdGUgYW5kIHNldHRlcnMgZm9yIGRlYm91bmNlZCB2YWx1ZVxuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gVXBkYXRlIGRlYm91bmNlZCB2YWx1ZSBhZnRlciBkZWxheVxuICAgICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9LCBkZWxheSk7XG5cbiAgICAgIC8vIENhbmNlbCB0aGUgdGltZW91dCBpZiB2YWx1ZSBjaGFuZ2VzIChhbHNvIG9uIGRlbGF5IGNoYW5nZSBvciB1bm1vdW50KVxuICAgICAgLy8gVGhpcyBpcyBob3cgd2UgcHJldmVudCBkZWJvdW5jZWQgdmFsdWUgZnJvbSB1cGRhdGluZyBpZiB2YWx1ZSBpcyBjaGFuZ2VkIC4uLlxuICAgICAgLy8gLi4gd2l0aGluIHRoZSBkZWxheSBwZXJpb2QuIFRpbWVvdXQgZ2V0cyBjbGVhcmVkIGFuZCByZXN0YXJ0ZWQuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgW3ZhbHVlLCBkZWxheV0gLy8gT25seSByZS1jYWxsIGVmZmVjdCBpZiB2YWx1ZSBvciBkZWxheSBjaGFuZ2VzXG4gICk7XG5cbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWJvdW5jZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/hooks/use-debounce.ts\n");

/***/ })

})