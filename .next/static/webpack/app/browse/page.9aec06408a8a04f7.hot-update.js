"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/browse/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"70ec362f2ac4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YmM0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjcwZWMzNjJmMmFjNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/api.js":
/*!************************!*\
  !*** ./src/app/api.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\nconst API_KEY = process.env.MOVIE_API_KEY;\nconst requests = {\n    fetchPopular: \"https://api.themoviedb.org/3/discover/movie?api_key=\".concat(API_KEY, \"&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc\"),\n    fetchTrending: \"/trending/all/week?api_key=\".concat(API_KEY, \"&language=en-US\"),\n    fetchTopRated: \"https://api.themoviedb.org/3/movie/top_rated?api_key=\".concat(API_KEY, \"&language=en-US&page=1\"),\n    fetchNetflixOriginals: \"https://api.themoviedb.org/3/discover/tv?api_key=\".concat(API_KEY, \"&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&networks=Netflix\"),\n    fetchHorror: \"https://api.themoviedb.org/3/discover/movie?api_key=\".concat(API_KEY, \"&language=en-US&with_genres=27&page=1&include_adult=false\"),\n    fetchAction: \"https://api.themoviedb.org/3/discover/movie?api_key=\".concat(API_KEY, \"&language=en-US&with_genres=28&page=1&include_adult=false\"),\n    fetchComedy: \"https://api.themoviedb.org/3/discover/movie?api_key=\".concat(API_KEY, \"&language=en-US&with_genres=35&page=1&include_adult=false\")\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (requests);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsVUFBVUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhO0FBRXpDLE1BQU1DLFdBQVc7SUFDZkMsY0FBYyx1REFBK0QsT0FBUkwsU0FBUTtJQUM3RU0sZUFBZSw4QkFBc0MsT0FBUk4sU0FBUTtJQUNyRE8sZUFBZSx3REFBZ0UsT0FBUlAsU0FBUTtJQUMvRVEsdUJBQXVCLG9EQUE0RCxPQUFSUixTQUFRO0lBQ25GUyxhQUFhLHVEQUErRCxPQUFSVCxTQUFRO0lBQzVFVSxhQUFhLHVEQUErRCxPQUFSVixTQUFRO0lBQzVFVyxhQUFhLHVEQUErRCxPQUFSWCxTQUFRO0FBQzlFO0FBRUEsK0RBQWVJLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcGkuanM/ZDA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTU9WSUVfQVBJX0tFWTtcclxuXHJcbmNvbnN0IHJlcXVlc3RzID0ge1xyXG4gIGZldGNoUG9wdWxhcjogYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JmluY2x1ZGVfYWR1bHQ9ZmFsc2UmaW5jbHVkZV92aWRlbz1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTEmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2NgLFxyXG4gIGZldGNoVHJlbmRpbmc6IGAvdHJlbmRpbmcvYWxsL3dlZWs/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTYCxcclxuICBmZXRjaFRvcFJhdGVkOiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS90b3BfcmF0ZWQ/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWAsXHJcbiAgZmV0Y2hOZXRmbGl4T3JpZ2luYWxzOiBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci90dj9hcGlfa2V5PSR7QVBJX0tFWX0maW5jbHVkZV9hZHVsdD1mYWxzZSZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MSZzb3J0X2J5PXBvcHVsYXJpdHkuZGVzYyZuZXR3b3Jrcz1OZXRmbGl4YCxcclxuICBmZXRjaEhvcnJvcjogYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTJndpdGhfZ2VucmVzPTI3JnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlYCxcclxuICBmZXRjaEFjdGlvbjogYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTJndpdGhfZ2VucmVzPTI4JnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlYCxcclxuICBmZXRjaENvbWVkeTogYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTJndpdGhfZ2VucmVzPTM1JnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlYCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RzO1xyXG4iXSwibmFtZXMiOlsiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJNT1ZJRV9BUElfS0VZIiwicmVxdWVzdHMiLCJmZXRjaFBvcHVsYXIiLCJmZXRjaFRyZW5kaW5nIiwiZmV0Y2hUb3BSYXRlZCIsImZldGNoTmV0ZmxpeE9yaWdpbmFscyIsImZldGNoSG9ycm9yIiwiZmV0Y2hBY3Rpb24iLCJmZXRjaENvbWVkeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api.js\n"));

/***/ })

});