webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./node_modules/next-absolute-url/index.js":
/*!*************************************************!*\
  !*** ./node_modules/next-absolute-url/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true
function absoluteUrl(req, localhostAddress) {
  if (localhostAddress === void 0) {
    localhostAddress = 'localhost:3000'
  }
  var _a
  var host =
    (((_a = req) === null || _a === void 0
    ? void 0
    : _a.headers)
      ? req.headers.host
      : window.location.host) || localhostAddress
  var protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'
  if (
    req &&
    req.headers['x-forwarded-host'] &&
    typeof req.headers['x-forwarded-host'] === 'string'
  ) {
    host = req.headers['x-forwarded-host']
  }
  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = req.headers['x-forwarded-proto'] + ':'
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  }
}
exports['default'] = absoluteUrl


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _api_contact_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/contact/index */ "./api/contact/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_9__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var initialFormFields = {
  pets: [],
  contactpersoon: '',
  emailadres: '',
  bedrijfsnaam: '',
  telefoonnummer: '',
  uw_bericht: '',
  select: "",
  radio: "",
  checkbox: false
};
var testArray = {
  a: 1,
  b: 2,
  c: 3
};

var Page = function Page(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_IntroBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "contact"
  }), __jsx("div", {
    className: "container pb-5"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-9"
  }, __jsx("h1", {
    className: "h2"
  }, "neem contact met ons op"), __jsx("p", null, "Heeft u nog vragen of opmerkingen, vul dan hieronder het contactformulier in. Voor vragen of opmerkingen met spoed mail dan naar helpdesk@xxxxx.nl."), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    onSubmit: function onSubmit(data, actions) {
      actions.setSubmitting(true);
      postForm(data, actions);
    },
    initialValues: initialFormFields
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        setFieldValue = _ref2.setFieldValue,
        setFieldTouched = _ref2.setFieldTouched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return __jsx("div", null, __jsx("form", {
      onSubmit: handleSubmit,
      className: "needs-validation"
    }, __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      name: "contactpersoon",
      label: "contactpersoon",
      error: errors.contactpersoon,
      value: values.contactpersoon
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      type: "email",
      name: "emailadres",
      label: "emailadres",
      error: errors.emailadres,
      value: values.emailadres
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      type: "text",
      name: "bedrijfsnaam",
      label: "bedrijfsnaam",
      error: errors.bedrijfsnaam,
      value: values.bedrijfsnaam
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      type: "textarea",
      name: "uw_bericht",
      label: "uw_bericht",
      error: errors.uw_bericht,
      value: values.uw_bericht
    }), __jsx("button", {
      type: "submit",
      className: "btn-blue btn btn-block",
      disabled: isSubmitting
    }, __jsx("i", {
      className: "".concat(isSubmitting ? "fas fa-spinner fa-spin" : null)
    }), " Verzenden")));
  })), __jsx("div", {
    className: "jsx-656202693" + " " + "col-md-3"
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "656202693"
  }, "h4.jsx-656202693{color:#393939;font-size:18px;font-weight:500;line-height:1.2em;margin-bottom:8px;margin-top:0;}li.jsx-656202693{border:none;color:#717171;display:block;font-size:14px;padding:4px 0;-webkit-transition:color .3s;-webkit-transition:color .3s;transition:color .3s;}ul.jsx-656202693{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcYmVkcmlqZnN3ZWJzaXRlLW5leHRqc1xccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQyxBQUcyQyxBQVFGLEFBU00sWUFSSixFQVJDLEtBaUJuQixPQVJrQixHQVJFLFdBU0QsS0FSRyxVQVNKLFFBUkksTUFTVyxZQVJoQixhQUNqQixJQVF5QixrREFDekIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxiZWRyaWpmc3dlYnNpdGUtbmV4dGpzXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluJ1xyXG5pbXBvcnQgeyBwb3N0Q29udGFjdCB9IGZyb20gJy4uL2FwaS9jb250YWN0L2luZGV4J1xyXG5pbXBvcnQge0Zvcm1paywgRmllbGQsIEZpZWxkUHJvcHN9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XHJcbmltcG9ydCB7U2VsZWN0RmllbGQsIFRleHRGaWVsZCwgQ2hlY2tib3gsIENoZWNrYm94R3JvdXAsIFJhZGlvQnV0dG9uLCBSYWRpb0J1dHRvbkdyb3VwfSBmcm9tIFwiLi4vY29tcG9uZW50cy9maWVsZHMvSW5wdXRGaWVsZFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEludHJvQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ludHJvQmFubmVyXCI7XHJcbmltcG9ydCBhYnNvbHV0ZVVybCBmcm9tICduZXh0LWFic29sdXRlLXVybCdcclxuXHJcblxyXG5jb25zdCBpbml0aWFsRm9ybUZpZWxkcyA9IHtwZXRzOiBbXSwgY29udGFjdHBlcnNvb246ICcnLCBlbWFpbGFkcmVzOiAnJywgYmVkcmlqZnNuYWFtOiAnJywgdGVsZWZvb25udW1tZXI6ICcnLCB1d19iZXJpY2h0OiAnJywgc2VsZWN0OiBcIlwiLCByYWRpbzogXCJcIiwgY2hlY2tib3g6IGZhbHNlfTtcclxuY29uc3QgdGVzdEFycmF5ID0ge2E6IDEsIGI6IDIsIGM6IDN9XHJcblxyXG5jb25zdCBQYWdlID0gKHsgIH0pID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICAgICAgPEludHJvQmFubmVyIHRpdGxlPVwiY29udGFjdFwiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMlwiPm5lZW0gY29udGFjdCBtZXQgb25zIG9wPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5IZWVmdCB1IG5vZyB2cmFnZW4gb2Ygb3BtZXJraW5nZW4sIHZ1bCBkYW4gaGllcm9uZGVyIGhldCBjb250YWN0Zm9ybXVsaWVyIGluLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWb29yIHZyYWdlbiBvZiBvcG1lcmtpbmdlbiBtZXQgc3BvZWQgbWFpbCBkYW4gbmFhciBoZWxwZGVza0B4eHh4eC5ubC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1payBvblN1Ym1pdD17KGRhdGEsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGb3JtKGRhdGEsIGFjdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxGb3JtRmllbGRzfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe3ZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBzZXRGaWVsZFZhbHVlLCBzZXRGaWVsZFRvdWNoZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciwgaGFuZGxlU3VibWl0LCBpc1N1Ym1pdHRpbmd9KSA9PiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibmVlZHMtdmFsaWRhdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0cGVyc29vblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY29udGFjdHBlcnNvb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNvbnRhY3RwZXJzb29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbnRhY3RwZXJzb29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsYWRyZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVtYWlsYWRyZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsYWRyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWxhZHJlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiZWRyaWpmc25hYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImJlZHJpamZzbmFhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuYmVkcmlqZnNuYWFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmJlZHJpamZzbmFhbX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXdfYmVyaWNodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidXdfYmVyaWNodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudXdfYmVyaWNodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51d19iZXJpY2h0fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tYmx1ZSBidG4gYnRuLWJsb2NrXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7aXNTdWJtaXR0aW5nID8gXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIgOiBudWxsfWB9PjwvaT4gVmVyemVuZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMil9PC9wcmU+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTM5Mzk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkNvbnRhY3RnZWdldmVuczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZWw6IDA4NSDigJMgeHh4eHh4IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLW1haWw6IGluZm9AYmVkcmlqZnNuYWFtLm5sIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLdks6IHh4eHh4eCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQlRXOiB4eHh4eHggPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElCQU46IHh4eHh4eCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5PcGVuaW5nc3RpamRlbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWFuZGFnIHQvbSB2cmlqZGFnOjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5OjMwIOKAkyAxODowMCB1dXIuPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JpbmdlbiBrdW5uZW4gYnVpdGVuIGthbnRvb3IgdXJlbiBnZW1lbGQgd29yZGVuIHZpYSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGRlc2tAYmVkcmlqZnNuYWFtLm5sPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzYXNkYXNkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUNrYjd2dlU5VTdfdXZKeFhkQURWNFAxQk1adl82WmZhc1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7bGF0OiA1MS40NDMzNzQxNDU5NywgbG5nOiA1LjUyNzY1OTc0MTY0Mjh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFpvb209ezExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJEaXN0YW5jZT17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcHNNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ9ezUxLjQ0MzM3NDE0NTk3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZz17NS41Mjc2NTk3NDE2NDI4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJCZWRyaWpmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7bWFya2Vycyhsb2NhdGlvbnMpfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RGb3JtKGRhdGEsIGFjdGlvbnMpIHtcclxuXHJcbiAgICByZXR1cm4gcG9zdENvbnRhY3QoZGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGF0YS5lcnJvcnMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRGaWVsZEVycm9yKGl0ZW0sIGRhdGEuZXJyb3JzW2l0ZW1dWzBdKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5lcnJvcnM7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChkYXRhLnN0YXR1cyA9PSAnMjAwJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZXMgaXMgb250dmFuZ2VuJywgZGF0YSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\bedrijfswebsite-nextjs\\\\pages\\\\contact.js */"), __jsx("h4", {
    className: "jsx-656202693"
  }, "Contactgegevens"), __jsx("ul", {
    className: "jsx-656202693" + " " + "list-group list-group-flush"
  }, __jsx("li", {
    className: "jsx-656202693" + " " + "list-group-item"
  }, "Tel: 085 \u2013 xxxxxx ", __jsx("br", {
    className: "jsx-656202693"
  }), "E-mail: info@bedrijfsnaam.nl ", __jsx("br", {
    className: "jsx-656202693"
  }), "KvK: xxxxxx ", __jsx("br", {
    className: "jsx-656202693"
  }), "BTW: xxxxxx ", __jsx("br", {
    className: "jsx-656202693"
  }), "IBAN: xxxxxx ", __jsx("br", {
    className: "jsx-656202693"
  }))), __jsx("h4", {
    className: "jsx-656202693"
  }, "Openingstijden"), __jsx("ul", {
    className: "jsx-656202693" + " " + "list-group list-group-flush"
  }, __jsx("li", {
    className: "jsx-656202693" + " " + "list-group-item"
  }, "Maandag t/m vrijdag:", __jsx("br", {
    className: "jsx-656202693"
  }), "9:30 \u2013 18:00 uur.", __jsx("br", {
    className: "jsx-656202693"
  }), "Storingen kunnen buiten kantoor uren gemeld worden via ", __jsx("br", {
    className: "jsx-656202693"
  }), "helpdesk@bedrijfsnaam.nl", __jsx("br", {
    className: "jsx-656202693"
  }), "asasdasd")), __jsx("div", {
    style: {
      height: '300px',
      width: '100%'
    },
    className: "jsx-656202693"
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyCkb7vvU9U7_uvJxXdADV4P1BMZv_6Zfas"
    },
    defaultCenter: {
      lat: 51.44337414597,
      lng: 5.5276597416428
    },
    defaultZoom: 11,
    hoverDistance: 2
  }, __jsx(MapsMarker, {
    lat: 51.44337414597,
    lng: 5.5276597416428,
    text: "Bedrijf"
  })))))));
};

function postForm(data, actions) {
  return Object(_api_contact_index__WEBPACK_IMPORTED_MODULE_3__["postContact"])(data).then(function (data) {
    if (typeof data.errors !== 'undefined') {
      Object.keys(data.errors).forEach(function (item) {
        actions.setFieldError(item, data.errors[item][0]);
      });
      return data.errors;
    } else if (data.status == '200') {
      console.log('messages is ontvangen', data);
    } else {
      console.log('something went wrong');
      return {};
    }
  })["finally"](function () {
    actions.setSubmitting(false);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=contact.js.db9ac0bb0988253dc567.hot-update.js.map