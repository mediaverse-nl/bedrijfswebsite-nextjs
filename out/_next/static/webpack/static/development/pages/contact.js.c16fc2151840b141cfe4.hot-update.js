webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./api/contact/index.js":
/*!******************************!*\
  !*** ./api/contact/index.js ***!
  \******************************/
/*! exports provided: postContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postContact", function() { return postContact; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

function postContact(body) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(process.env.DOMAIN).concat(apiPrefix, "/contact"), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    cache: 'default',
    body: body
  }).then(function (resp) {
    return resp.json();
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=contact.js.c16fc2151840b141cfe4.hot-update.js.map