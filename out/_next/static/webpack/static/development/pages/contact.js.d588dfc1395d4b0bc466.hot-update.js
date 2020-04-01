webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/Maps/MapsContainer.js":
/*!******************************************!*\
  !*** ./components/Maps/MapsContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Maps_Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maps/Marker */ "./components/Maps/Marker.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MapsContainer = function MapsContainer(_ref) {
  var text = _ref.text;
  return __jsx("div", {
    style: {
      height: '300px',
      width: '100%'
    }
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyCkb7vvU9U7_uvJxXdADV4P1BMZv_6Zfas"
    },
    defaultCenter: {
      lat: 51.44337414597,
      lng: 5.5276597416428
    },
    defaultZoom: 11,
    hoverDistance: 2
  }, __jsx(_Maps_Marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lat: 51.44337414597,
    lng: 5.5276597416428,
    text: "Bedrijf"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MapsContainer);

/***/ }),

/***/ "./components/Maps/Marker.js":
/*!***********************************!*\
  !*** ./components/Maps/Marker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var MapsMarker = function MapsMarker(_ref) {
  var text = _ref.text;
  return __jsx("div", {
    className: "jsx-2339696224"
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2339696224"
  }, ".fa-map-marker-alt.jsx-2339696224:before{color:#393939;font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcYmVkcmlqZnN3ZWJzaXRlLW5leHRqc1xcY29tcG9uZW50c1xcTWFwc1xcTWFya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUcyQixjQUNDLGVBQ25CIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcYmVkcmlqZnN3ZWJzaXRlLW5leHRqc1xcY29tcG9uZW50c1xcTWFwc1xcTWFya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFwc01hcmtlciA9ICh7IHRleHQgfSkgPT4gPGRpdj5cclxuICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgLmZhLW1hcC1tYXJrZXItYWx0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7IFxyXG4gICAgICAgIH0gIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgc3R5bGU9e3toZWlnaHQ6IFwiM2VtICFpbXBvcnRhbnRcIn19PjwvaT5cclxuICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCI1MHB4O1wifX0+e3RleHR9PC9wPlxyXG48L2Rpdj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBzTWFya2VyIl19 */\n/*@ sourceURL=C:\\\\Projects\\\\bedrijfswebsite-nextjs\\\\components\\\\Maps\\\\Marker.js */"), __jsx("i", {
    style: {
      height: "3em !important"
    },
    className: "jsx-2339696224" + " " + "fas fa-map-marker-alt"
  }), __jsx("p", {
    style: {
      textAlign: "center",
      width: "50px;"
    },
    className: "jsx-2339696224"
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (MapsMarker);

/***/ })

})
//# sourceMappingURL=contact.js.d588dfc1395d4b0bc466.hot-update.js.map