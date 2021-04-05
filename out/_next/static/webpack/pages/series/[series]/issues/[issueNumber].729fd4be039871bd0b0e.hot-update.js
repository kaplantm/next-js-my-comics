webpackHotUpdate_N_E("pages/series/[series]/issues/[issueNumber]",{

/***/ "./src/components/viewable-image/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/viewable-image/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _image_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-dialog */ \"./src/components/viewable-image/image-dialog/index.tsx\");\n/* harmony import */ var _use_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-styles */ \"./src/components/viewable-image/use-styles.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/tonikaplan/next-js-my-comics/src/components/viewable-image/index.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction ViewableImage(_ref) {\n  _s();\n\n  var _imageRef$current, _imageRef$current2;\n\n  var width = _ref.width,\n      src = _ref.src,\n      rest = Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref, [\"width\", \"src\"]);\n\n  var classes = Object(_use_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      openModal = _useState[0],\n      setOpenModal = _useState[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    rawWidth: 0,\n    rawHeight: 0,\n    loaded: false\n  }),\n      imageData = _useState2[0],\n      setImageData = _useState2[1];\n\n  var rawWidth = (_imageRef$current = imageRef.current) === null || _imageRef$current === void 0 ? void 0 : _imageRef$current.naturalWidth;\n  var rawHeight = (_imageRef$current2 = imageRef.current) === null || _imageRef$current2 === void 0 ? void 0 : _imageRef$current2.naturalHeight;\n\n  function handleOpenModal() {\n    setOpenModal(true);\n  }\n\n  function handleCloseModal() {\n    setOpenModal(false);\n  } // Will trigger 200 responses but not 304 Not Modified\n\n\n  function onLoad(_ref2) {\n    var target = _ref2.target;\n\n    if (!imageData.loaded) {\n      setImageData({\n        rawWidth: target.naturalWidth,\n        rawHeight: target.naturalHeight,\n        loaded: true\n      });\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var _imageRef$current3;\n\n    // Will trigger for 304 Not Modified images but not 200 responses\n    if ((_imageRef$current3 = imageRef.current) !== null && _imageRef$current3 !== void 0 && _imageRef$current3.complete && !imageData.loaded) {\n      setImageData({\n        rawWidth: rawWidth,\n        rawHeight: rawHeight,\n        loaded: true\n      });\n    }\n  }, [imageRef.current, rawWidth, rawHeight, imageData.loaded]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(classes.viewableImageWrapper, !imageData.loaded && classes.loading, \"viewableImageWrapper\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(classes.paper, \"viewableImagePaper\"),\n      elevation: 2,\n      style: {\n        width: width\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", _objectSpread(_objectSpread({\n        ref: imageRef,\n        src: src\n      }, rest), {}, {\n        onClick: handleOpenModal,\n        role: \"button\",\n        onLoad: onLoad,\n        className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(classes.image, \"viewableImage\")\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_image_dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      src: src,\n      open: openModal,\n      rawImageWidth: imageData.rawWidth,\n      rawImageHeight: imageData.rawHeight,\n      onClose: handleCloseModal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ViewableImage, \"CTkAjWpti/JALYPDG0/oeLDce4I=\", false, function () {\n  return [_use_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = ViewableImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewableImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewableImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvaW5kZXgudHN4P2EzZDgiXSwibmFtZXMiOlsiVmlld2FibGVJbWFnZSIsIndpZHRoIiwic3JjIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsImltYWdlUmVmIiwidXNlUmVmIiwicmF3V2lkdGgiLCJyYXdIZWlnaHQiLCJsb2FkZWQiLCJpbWFnZURhdGEiLCJzZXRJbWFnZURhdGEiLCJjdXJyZW50IiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJvbkxvYWQiLCJ0YXJnZXQiLCJ1c2VFZmZlY3QiLCJjb21wbGV0ZSIsImNsc3giLCJ2aWV3YWJsZUltYWdlV3JhcHBlciIsImxvYWRpbmciLCJwYXBlciIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FPRztBQUFBOztBQUFBOztBQUFBLE1BTkRDLEtBTUMsUUFOREEsS0FNQztBQUFBLE1BTERDLEdBS0MsUUFMREEsR0FLQztBQUFBLE1BSkVDLElBSUY7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHQywyREFBUyxFQUF6Qjs7QUFEQyxrQkFFaUNDLHNEQUFRLENBQUMsS0FBRCxDQUZ6QztBQUFBLE1BRU1DLFNBRk47QUFBQSxNQUVpQkMsWUFGakI7O0FBR0QsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBSEMsbUJBSWlDSixzREFBUSxDQUl2QztBQUFFSyxZQUFRLEVBQUUsQ0FBWjtBQUFlQyxhQUFTLEVBQUUsQ0FBMUI7QUFBNkJDLFVBQU0sRUFBRTtBQUFyQyxHQUp1QyxDQUp6QztBQUFBLE1BSU1DLFNBSk47QUFBQSxNQUlpQkMsWUFKakI7O0FBVUQsTUFBTUosUUFBUSx3QkFBR0YsUUFBUSxDQUFDTyxPQUFaLHNEQUFHLGtCQUFrQkMsWUFBbkM7QUFDQSxNQUFNTCxTQUFTLHlCQUFHSCxRQUFRLENBQUNPLE9BQVosdURBQUcsbUJBQWtCRSxhQUFwQzs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCWCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUNELFdBQVNZLGdCQUFULEdBQTRCO0FBQzFCWixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBbEJBLENBb0JEOzs7QUFDQSxXQUFTYSxNQUFULFFBQWlDO0FBQUEsUUFBZkMsTUFBZSxTQUFmQSxNQUFlOztBQUMvQixRQUFJLENBQUNSLFNBQVMsQ0FBQ0QsTUFBZixFQUF1QjtBQUNyQkUsa0JBQVksQ0FBQztBQUNYSixnQkFBUSxFQUFFVyxNQUFNLENBQUNMLFlBRE47QUFFWEwsaUJBQVMsRUFBRVUsTUFBTSxDQUFDSixhQUZQO0FBR1hMLGNBQU0sRUFBRTtBQUhHLE9BQUQsQ0FBWjtBQUtEO0FBQ0Y7O0FBRURVLHlEQUFTLENBQUMsWUFBTTtBQUFBOztBQUNkO0FBQ0EsUUFBSSxzQkFBQWQsUUFBUSxDQUFDTyxPQUFULGtFQUFrQlEsUUFBbEIsSUFBOEIsQ0FBQ1YsU0FBUyxDQUFDRCxNQUE3QyxFQUFxRDtBQUNuREUsa0JBQVksQ0FBQztBQUNYSixnQkFBUSxFQUFSQSxRQURXO0FBRVhDLGlCQUFTLEVBQVRBLFNBRlc7QUFHWEMsY0FBTSxFQUFFO0FBSEcsT0FBRCxDQUFaO0FBS0Q7QUFDRixHQVRRLEVBU04sQ0FBQ0osUUFBUSxDQUFDTyxPQUFWLEVBQW1CTCxRQUFuQixFQUE2QkMsU0FBN0IsRUFBd0NFLFNBQVMsQ0FBQ0QsTUFBbEQsQ0FUTSxDQUFUO0FBV0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUVZLG9EQUFJLENBQ2JyQixPQUFPLENBQUNzQixvQkFESyxFQUViLENBQUNaLFNBQVMsQ0FBQ0QsTUFBWCxJQUFxQlQsT0FBTyxDQUFDdUIsT0FGaEIsRUFHYixzQkFIYSxDQURqQjtBQUFBLDRCQU9FO0FBQ0UsZUFBUyxFQUFFRixvREFBSSxDQUFDckIsT0FBTyxDQUFDd0IsS0FBVCxFQUFnQixvQkFBaEIsQ0FEakI7QUFFRSxlQUFTLEVBQUUsQ0FGYjtBQUdFLFdBQUssRUFBRTtBQUFFM0IsYUFBSyxFQUFMQTtBQUFGLE9BSFQ7QUFBQSw2QkFLRTtBQUNFLFdBQUcsRUFBRVEsUUFEUDtBQUVFLFdBQUcsRUFBRVA7QUFGUCxTQUdNQyxJQUhOO0FBSUUsZUFBTyxFQUFFZ0IsZUFKWDtBQUtFLFlBQUksRUFBQyxRQUxQO0FBTUUsY0FBTSxFQUFFRSxNQU5WO0FBT0UsaUJBQVMsRUFBRUksb0RBQUksQ0FBQ3JCLE9BQU8sQ0FBQ3lCLEtBQVQsRUFBZ0IsZUFBaEI7QUFQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQXNCRSxxRUFBQyxxREFBRDtBQUNFLFNBQUcsRUFBRTNCLEdBRFA7QUFFRSxVQUFJLEVBQUVLLFNBRlI7QUFHRSxtQkFBYSxFQUFFTyxTQUFTLENBQUNILFFBSDNCO0FBSUUsb0JBQWMsRUFBRUcsU0FBUyxDQUFDRixTQUo1QjtBQUtFLGFBQU8sRUFBRVE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQWpGUXBCLGE7VUFRU0ssbUQ7OztLQVJUTCxhO0FBbUZNQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ZpZXdhYmxlLWltYWdlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlRGlhbG9nIGZyb20gXCIuL2ltYWdlLWRpYWxvZ1wiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi91c2Utc3R5bGVzXCI7XG5cbmZ1bmN0aW9uIFZpZXdhYmxlSW1hZ2Uoe1xuICB3aWR0aCxcbiAgc3JjLFxuICAuLi5yZXN0XG59OiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgUmVhY3QuSW1nSFRNTEF0dHJpYnV0ZXM8SFRNTEltYWdlRWxlbWVudD4sXG4gIEhUTUxJbWFnZUVsZW1lbnRcbj4pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2ltYWdlRGF0YSwgc2V0SW1hZ2VEYXRhXSA9IHVzZVN0YXRlPHtcbiAgICByYXdXaWR0aDogbnVtYmVyO1xuICAgIHJhd0hlaWdodDogbnVtYmVyO1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgfT4oeyByYXdXaWR0aDogMCwgcmF3SGVpZ2h0OiAwLCBsb2FkZWQ6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IHJhd1dpZHRoID0gaW1hZ2VSZWYuY3VycmVudD8ubmF0dXJhbFdpZHRoO1xuICBjb25zdCByYXdIZWlnaHQgPSBpbWFnZVJlZi5jdXJyZW50Py5uYXR1cmFsSGVpZ2h0O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU9wZW5Nb2RhbCgpIHtcbiAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcbiAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgLy8gV2lsbCB0cmlnZ2VyIDIwMCByZXNwb25zZXMgYnV0IG5vdCAzMDQgTm90IE1vZGlmaWVkXG4gIGZ1bmN0aW9uIG9uTG9hZCh7IHRhcmdldCB9OiBhbnkpIHtcbiAgICBpZiAoIWltYWdlRGF0YS5sb2FkZWQpIHtcbiAgICAgIHNldEltYWdlRGF0YSh7XG4gICAgICAgIHJhd1dpZHRoOiB0YXJnZXQubmF0dXJhbFdpZHRoLFxuICAgICAgICByYXdIZWlnaHQ6IHRhcmdldC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFdpbGwgdHJpZ2dlciBmb3IgMzA0IE5vdCBNb2RpZmllZCBpbWFnZXMgYnV0IG5vdCAyMDAgcmVzcG9uc2VzXG4gICAgaWYgKGltYWdlUmVmLmN1cnJlbnQ/LmNvbXBsZXRlICYmICFpbWFnZURhdGEubG9hZGVkKSB7XG4gICAgICBzZXRJbWFnZURhdGEoe1xuICAgICAgICByYXdXaWR0aCxcbiAgICAgICAgcmF3SGVpZ2h0LFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtpbWFnZVJlZi5jdXJyZW50LCByYXdXaWR0aCwgcmF3SGVpZ2h0LCBpbWFnZURhdGEubG9hZGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzZXMudmlld2FibGVJbWFnZVdyYXBwZXIsXG4gICAgICAgICFpbWFnZURhdGEubG9hZGVkICYmIGNsYXNzZXMubG9hZGluZyxcbiAgICAgICAgXCJ2aWV3YWJsZUltYWdlV3JhcHBlclwiXG4gICAgICApfVxuICAgID5cbiAgICAgIDxQYXBlclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5wYXBlciwgXCJ2aWV3YWJsZUltYWdlUGFwZXJcIil9XG4gICAgICAgIGVsZXZhdGlvbj17Mn1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk1vZGFsfVxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmltYWdlLCBcInZpZXdhYmxlSW1hZ2VcIil9XG4gICAgICAgIC8+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPEltYWdlRGlhbG9nXG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgIHJhd0ltYWdlV2lkdGg9e2ltYWdlRGF0YS5yYXdXaWR0aH1cbiAgICAgICAgcmF3SW1hZ2VIZWlnaHQ9e2ltYWdlRGF0YS5yYXdIZWlnaHR9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3YWJsZUltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/viewable-image/index.tsx\n");

/***/ }),

/***/ "./src/components/viewable-image/use-styles.ts":
/*!*****************************************************!*\
  !*** ./src/components/viewable-image/use-styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/colors */ \"./src/theme/colors.ts\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n  return {\n    viewableImageWrapper: {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      transition: \"min-height .3s\",\n      minHeight: 0,\n      maxHeight: 3000\n    },\n    paper: {\n      overflow: \"hidden\"\n    },\n    image: {\n      maxWidth: \"100%\",\n      cursor: \"pointer\",\n      display: \"block\",\n      backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_1__[\"iceBlue\"]\n    },\n    loading: {\n      minHeight: 150,\n      maxHeight: 400\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvdXNlLXN0eWxlcy50cz81NDdkIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInZpZXdhYmxlSW1hZ2VXcmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRyYW5zaXRpb24iLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJwYXBlciIsIm92ZXJmbG93IiwiaW1hZ2UiLCJtYXhXaWR0aCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImljZUJsdWUiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyx3QkFBb0IsRUFBRTtBQUNwQkMsYUFBTyxFQUFFLE1BRFc7QUFFcEJDLGdCQUFVLEVBQUUsUUFGUTtBQUdwQkMsb0JBQWMsRUFBRSxRQUhJO0FBSXBCQyxnQkFBVSxFQUFFLGdCQUpRO0FBS3BCQyxlQUFTLEVBQUUsQ0FMUztBQU1wQkMsZUFBUyxFQUFFO0FBTlMsS0FEaUI7QUFTdkNDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQVRnQztBQVl2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxNQURMO0FBRUxDLFlBQU0sRUFBRSxTQUZIO0FBR0xWLGFBQU8sRUFBRSxPQUhKO0FBSUxXLHFCQUFlLEVBQUVDLHFEQUFPQTtBQUpuQixLQVpnQztBQWtCdkNDLFdBQU8sRUFBRTtBQUNQVCxlQUFTLEVBQUUsR0FESjtBQUVQQyxlQUFTLEVBQUU7QUFGSjtBQWxCOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUF3QmVULHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdmlld2FibGUtaW1hZ2UvdXNlLXN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBpY2VCbHVlIH0gZnJvbSBcIi4uLy4uL3RoZW1lL2NvbG9yc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdmlld2FibGVJbWFnZVdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRyYW5zaXRpb246IFwibWluLWhlaWdodCAuM3NcIixcbiAgICBtaW5IZWlnaHQ6IDAsXG4gICAgbWF4SGVpZ2h0OiAzMDAwLFxuICB9LFxuICBwYXBlcjoge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBpbWFnZToge1xuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGljZUJsdWUsXG4gIH0sXG4gIGxvYWRpbmc6IHtcbiAgICBtaW5IZWlnaHQ6IDE1MCxcbiAgICBtYXhIZWlnaHQ6IDQwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/viewable-image/use-styles.ts\n");

/***/ }),

/***/ "./src/page-containers/comic-body/use-styles.ts":
/*!******************************************************!*\
  !*** ./src/page-containers/comic-body/use-styles.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  var _coverImageContainer;\n\n  return {\n    coverImageContainer: (_coverImageContainer = {}, Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_coverImageContainer, theme.breakpoints.down(\"xs\"), {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\",\n      flexDirection: \"column\"\n    }), Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_coverImageContainer, \"& ul\", {\n      paddingInlineStart: theme.spacing(2)\n    }), Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_coverImageContainer, \"& li\", {\n      marginTop: theme.spacing(1),\n      marginBottom: theme.spacing(1)\n    }), Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_coverImageContainer, \"& .viewableImageWrapper\", Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      border: \"1px solid red\",\n      maxWidth: \"30%\",\n      \"float\": \"right\",\n      margin: theme.spacing(2, 0, 2, 2)\n    }, theme.breakpoints.down(\"xs\"), {\n      maxWidth: \"100%\",\n      \"& img\": {\n        maxHeight: \"50vh\"\n      }\n    })), _coverImageContainer),\n    childrenContainer: Object(_Users_tonikaplan_next_js_my_comics_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      marginTop: theme.spacing(6),\n      maxWidth: \"60%\"\n    }, theme.breakpoints.down(\"xs\"), {\n      maxWidth: \"100%\"\n    }),\n    imagesContainer: {\n      marginTop: theme.spacing(6)\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2UtY29udGFpbmVycy9jb21pYy1ib2R5L3VzZS1zdHlsZXMudHM/YzQzMiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb3ZlckltYWdlQ29udGFpbmVyIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nSW5saW5lU3RhcnQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJtYXhIZWlnaHQiLCJjaGlsZHJlbkNvbnRhaW5lciIsImltYWdlc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3ZDQyx1QkFBbUIsOExBQ2hCRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRGdCLEVBQ2U7QUFDOUJDLGFBQU8sRUFBRSxNQURxQjtBQUU5QkMsZ0JBQVUsRUFBRSxRQUZrQjtBQUc5QkMsb0JBQWMsRUFBRSxRQUhjO0FBSTlCQyxtQkFBYSxFQUFFO0FBSmUsS0FEZixtS0FPakIsTUFQaUIsRUFPVDtBQUNOQyx3QkFBa0IsRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZDtBQURkLEtBUFMsbUtBVWpCLE1BVmlCLEVBVVQ7QUFDTkMsZUFBUyxFQUFFVixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFTkUsa0JBQVksRUFBRVgsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZDtBQUZSLEtBVlMsbUtBY2pCLHlCQWRpQjtBQWVmRyxZQUFNLEVBQUUsZUFmTztBQWdCZkMsY0FBUSxFQUFFLEtBaEJLO0FBaUJmLGVBQU8sT0FqQlE7QUFrQmZDLFlBQU0sRUFBRWQsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QjtBQWxCTyxPQW1CZFQsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQW5CYyxFQW1CaUI7QUFDOUJVLGNBQVEsRUFBRSxNQURvQjtBQUU5QixlQUFTO0FBQ1BFLGlCQUFTLEVBQUU7QUFESjtBQUZxQixLQW5CakIseUJBRG9CO0FBNEJ2Q0MscUJBQWlCLEVBQUU7QUFDakJOLGVBQVMsRUFBRVYsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRWZJLGNBQVEsRUFBRTtBQUZLLE9BR2RiLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FIYyxFQUdpQjtBQUM5QlUsY0FBUSxFQUFFO0FBRG9CLEtBSGpCLENBNUJzQjtBQW1DdkNJLG1CQUFlLEVBQUU7QUFDZlAsZUFBUyxFQUFFVixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkO0FBREk7QUFuQ3NCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBd0NlWCx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlLWNvbnRhaW5lcnMvY29taWMtYm9keS91c2Utc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNvdmVySW1hZ2VDb250YWluZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIH0sXG4gICAgXCImIHVsXCI6IHtcbiAgICAgIHBhZGRpbmdJbmxpbmVTdGFydDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIFwiJiBsaVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSxcbiAgICBcIiYgLnZpZXdhYmxlSW1hZ2VXcmFwcGVyXCI6IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXG4gICAgICBtYXhXaWR0aDogXCIzMCVcIixcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCwgMiwgMiksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIFwiJiBpbWdcIjoge1xuICAgICAgICAgIG1heEhlaWdodDogXCI1MHZoXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNoaWxkcmVuQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIG1heFdpZHRoOiBcIjYwJVwiLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XG4gICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VzQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page-containers/comic-body/use-styles.ts\n");

/***/ })

})