webpackHotUpdate("static\\development\\pages\\referenties.js",{

/***/ "./api/reference/index.js":
/*!********************************!*\
  !*** ./api/reference/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
 // const apiPrefix = process.env.API_PREFIX
// export function getReferences () {
//     return fetch(`${process.env.DOMAIN}${apiPrefix}/reference`)
// }
//
// export function getReference (id) {
//     return fetch(`${apiDomain}/test/api/auth/reference/${id}`, {
//         method: 'POST',
//         headers: {
//             'Accept':'application/json',
//             "Content-Type": "application/json",
//         },
//         cache: 'default',
//         mode: 'no-cors'
//     })
// }

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./pages/referenties.js":
/*!******************************!*\
  !*** ./pages/referenties.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var _components_ReferenceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ReferenceCard */ "./components/ReferenceCard.js");
/* harmony import */ var _api_reference_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/reference/index */ "./api/reference/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Page(_ref) {
  var data = _ref.data;
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_IntroBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Referenties"
  }), __jsx("div", {
    className: "container pt-2 pb-5"
  }, __jsx("div", {
    className: "row"
  }, data.map(function (key, index) {
    return __jsx("div", {
      className: "col-md-4",
      key: index
    }, __jsx(_components_ReferenceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: key.title,
      service: key.service,
      description: key.description,
      backgroundImage: key.image
    }));
  }))));
}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=referenties.js.182de7479fa439b73c9f.hot-update.js.map