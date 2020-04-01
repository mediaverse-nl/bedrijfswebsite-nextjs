webpackHotUpdate("static\\development\\pages\\referenties.js",{

/***/ "./api/reference/index.js":
/*!********************************!*\
  !*** ./api/reference/index.js ***!
  \********************************/
/*! exports provided: getReferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferences", function() { return getReferences; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

var apiPrefix = "/proxy/api/auth";
function getReferences() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(process.env.DOMAIN).concat(apiPrefix, "/reference"));
} //
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/referenties.js":
/*!******************************!*\
  !*** ./pages/referenties.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var _components_ReferenceCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReferenceCard */ "./components/ReferenceCard.js");
/* harmony import */ var _api_reference_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/reference/index */ "./api/reference/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Page(_ref) {
  var data = _ref.data;
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_components_IntroBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Referenties"
  }), __jsx("div", {
    className: "container pt-2 pb-5"
  }, __jsx("div", {
    className: "row"
  }, data.map(function (key, index) {
    return __jsx("div", {
      className: "col-md-4",
      key: index
    }, __jsx(_components_ReferenceCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: key.title,
      service: key.service,
      description: key.description,
      backgroundImage: key.image
    }));
  }))));
}

var fetchRelative = function fetchRelative(path) {
  var _absoluteUrl = next_absolute_url__WEBPACK_IMPORTED_MODULE_2___default()(req, 'localhost:3000'),
      origin = _absoluteUrl.origin;

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()("".concat(origin).concat(path));
};

Page.getServerSideProps = function _callee(_ref2) {
  var req, res, _absoluteUrl2, origin, resp, json, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, res = _ref2.res;
          _absoluteUrl2 = next_absolute_url__WEBPACK_IMPORTED_MODULE_2___default()(req, 'localhost:3000'), origin = _absoluteUrl2.origin;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()("".concat(origin, "/proxy/api/auth/reference")));

        case 4:
          resp = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resp.json());

        case 7:
          json = _context.sent;
          data = json.data;
          return _context.abrupt("return", {
            data: data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}; // export async function getServerSideProps() {
//     const res = await getReferences()
//     const json = await res.json()
//     const data = json.data
//     return { props: { data  } }
// }


/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=referenties.js.2b41767b2079f200706c.hot-update.js.map