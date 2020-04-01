webpackHotUpdate("static\\development\\pages\\contact.js",{

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
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Maps_MapsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Maps/MapsContainer */ "./components/Maps/MapsContainer.js");
/* harmony import */ var _components_IntroBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IntroBanner */ "./components/IntroBanner.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_9__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








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
    }, __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
      name: "contactpersoon",
      label: "contactpersoon",
      error: errors.contactpersoon,
      value: values.contactpersoon
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
      type: "email",
      name: "emailadres",
      label: "emailadres",
      error: errors.emailadres,
      value: values.emailadres
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
      type: "text",
      name: "bedrijfsnaam",
      label: "bedrijfsnaam",
      error: errors.bedrijfsnaam,
      value: values.bedrijfsnaam
    }), __jsx(_components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
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
  }, "h4.jsx-656202693{color:#393939;font-size:18px;font-weight:500;line-height:1.2em;margin-bottom:8px;margin-top:0;}li.jsx-656202693{border:none;color:#717171;display:block;font-size:14px;padding:4px 0;-webkit-transition:color .3s;-webkit-transition:color .3s;transition:color .3s;}ul.jsx-656202693{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcYmVkcmlqZnN3ZWJzaXRlLW5leHRqc1xccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVnQyxBQUcyQyxBQVFGLEFBU00sWUFSSixFQVJDLEtBaUJuQixPQVJrQixHQVJFLFdBU0QsS0FSRyxVQVNKLFFBUkksTUFTVyxZQVJoQixhQUNqQixJQVF5QixrREFDekIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxiZWRyaWpmc3dlYnNpdGUtbmV4dGpzXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluJ1xyXG5pbXBvcnQgeyBwb3N0Q29udGFjdCB9IGZyb20gJy4uL2FwaS9jb250YWN0L2luZGV4J1xyXG5pbXBvcnQge0Zvcm1paywgRmllbGQsIEZpZWxkUHJvcHN9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQge1NlbGVjdEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBDaGVja2JveEdyb3VwLCBSYWRpb0J1dHRvbiwgUmFkaW9CdXR0b25Hcm91cH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmllbGRzL0lucHV0RmllbGRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXBzQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01hcHMvTWFwc0NvbnRhaW5lclwiXHJcbmltcG9ydCBJbnRyb0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb0Jhbm5lclwiO1xyXG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSAnbmV4dC1hYnNvbHV0ZS11cmwnXHJcblxyXG5jb25zdCBpbml0aWFsRm9ybUZpZWxkcyA9IHtwZXRzOiBbXSwgY29udGFjdHBlcnNvb246ICcnLCBlbWFpbGFkcmVzOiAnJywgYmVkcmlqZnNuYWFtOiAnJywgdGVsZWZvb25udW1tZXI6ICcnLCB1d19iZXJpY2h0OiAnJywgc2VsZWN0OiBcIlwiLCByYWRpbzogXCJcIiwgY2hlY2tib3g6IGZhbHNlfTtcclxuY29uc3QgdGVzdEFycmF5ID0ge2E6IDEsIGI6IDIsIGM6IDN9XHJcblxyXG5jb25zdCBQYWdlID0gKHsgIH0pID0+IHtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxJbnRyb0Jhbm5lciB0aXRsZT1cImNvbnRhY3RcIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDJcIj5uZWVtIGNvbnRhY3QgbWV0IG9ucyBvcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SGVlZnQgdSBub2cgdnJhZ2VuIG9mIG9wbWVya2luZ2VuLCB2dWwgZGFuIGhpZXJvbmRlciBoZXQgY29udGFjdGZvcm11bGllciBpbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVm9vciB2cmFnZW4gb2Ygb3BtZXJraW5nZW4gbWV0IHNwb2VkIG1haWwgZGFuIG5hYXIgaGVscGRlc2tAeHh4eHgubmwuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWsgb25TdWJtaXQ9eyhkYXRhLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Rm9ybShkYXRhLCBhY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsRm9ybUZpZWxkc30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHt2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgc2V0RmllbGRWYWx1ZSwgc2V0RmllbGRUb3VjaGVkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZUJsdXIsIGhhbmRsZVN1Ym1pdCwgaXNTdWJtaXR0aW5nfSkgPT4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm5lZWRzLXZhbGlkYXRpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdHBlcnNvb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImNvbnRhY3RwZXJzb29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jb250YWN0cGVyc29vbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb250YWN0cGVyc29vbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbGFkcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJlbWFpbGFkcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbGFkcmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsYWRyZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmVkcmlqZnNuYWFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJiZWRyaWpmc25hYW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmJlZHJpamZzbmFhbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5iZWRyaWpmc25hYW19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInV3X2JlcmljaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInV3X2JlcmljaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnV3X2JlcmljaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXdfYmVyaWNodH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLWJsdWUgYnRuIGJ0bi1ibG9ja1wiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake2lzU3VibWl0dGluZyA/IFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiIDogbnVsbH1gfT48L2k+IFZlcnplbmRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5Db250YWN0Z2VnZXZlbnM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVsOiAwODUg4oCTIHh4eHh4eCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsOiBpbmZvQGJlZHJpamZzbmFhbS5ubCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS3ZLOiB4eHh4eHggPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJUVzogeHh4eHh4IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJQkFOOiB4eHh4eHggPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+T3BlbmluZ3N0aWpkZW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFhbmRhZyB0L20gdnJpamRhZzo8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOTozMCDigJMgMTg6MDAgdXVyLjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yaW5nZW4ga3VubmVuIGJ1aXRlbiBrYW50b29yIHVyZW4gZ2VtZWxkIHdvcmRlbiB2aWEgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBkZXNrQGJlZHJpamZzbmFhbS5ubDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2FzZGFzZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcHNDb250YWluZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEZvcm0oZGF0YSwgYWN0aW9ucykge1xyXG5cclxuICAgIHJldHVybiBwb3N0Q29udGFjdChkYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhLmVycm9ycyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldEZpZWxkRXJyb3IoaXRlbSwgZGF0YS5lcnJvcnNbaXRlbV1bMF0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmVycm9ycztcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGRhdGEuc3RhdHVzID09ICcyMDAnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlcyBpcyBvbnR2YW5nZW4nLCBkYXRhKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3JvbmcnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VcclxuIl19 */\n/*@ sourceURL=C:\\\\Projects\\\\bedrijfswebsite-nextjs\\\\pages\\\\contact.js */"), __jsx("h4", {
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
  }), "asasdasd")), __jsx(_components_Maps_MapsContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
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
//# sourceMappingURL=contact.js.d86e71c1036a0b4aa182.hot-update.js.map