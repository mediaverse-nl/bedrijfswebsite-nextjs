webpackHotUpdate("static\\development\\pages\\referenties.js",{

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
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var _components_ReferenceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ReferenceCard */ "./components/ReferenceCard.js");
/* harmony import */ var _api_reference_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/reference/index */ "./api/reference/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Page(_ref) {
  var data = _ref.data,
      origin = _ref.origin;
  console.log("origin", origin);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_IntroBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Referenties"
  }), __jsx("div", {
    className: "container pt-2 pb-5"
  }, __jsx("div", {
    className: "row"
  }, data.map(function (key, index) {
    return __jsx("div", {
      className: "col-md-4",
      key: index
    }, __jsx(_components_ReferenceCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=referenties.js.b64b6113bde905781f36.hot-update.js.map