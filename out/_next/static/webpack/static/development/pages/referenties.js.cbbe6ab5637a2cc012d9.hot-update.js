webpackHotUpdate("static\\development\\pages\\referenties.js",{

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
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.js");
/* harmony import */ var _components_ReferenceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ReferenceCard */ "./components/ReferenceCard.js");
/* harmony import */ var _api_reference_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/reference/index */ "./api/reference/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Page(_ref) {
  var data = _ref.data;
  console.log('data', data);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_IntroBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Referenties"
  }), __jsx("div", {
    className: "container pt-2 pb-5"
  }, __jsx("div", {
    className: "row"
  })));
} // Page.getStaticPaths = async ctx => {
//     const res = await getReferences()
//     const json = await res.json()
//     return { data: json.data }
// }
// // This also gets called at build time
// export async function getServerSideProps() {
//
//     const res = await fetch(`/proxy/api/auth/reference`)
//     const data = await res.json()
//
//     // Pass post data to the page via props
//     return { props: { data  } }
// }


Page.getStaticProps = function _callee(_ref2) {
  var req, res, json;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_reference_index__WEBPACK_IMPORTED_MODULE_7__["getReferences"])());

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          console.log('res', res);
          console.log('json', json);
          return _context.abrupt("return", {
            data: json
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=referenties.js.cbbe6ab5637a2cc012d9.hot-update.js.map