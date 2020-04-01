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
  }, "h4.jsx-656202693{color:#393939;font-size:18px;font-weight:500;line-height:1.2em;margin-bottom:8px;margin-top:0;}li.jsx-656202693{border:none;color:#717171;display:block;font-size:14px;padding:4px 0;-webkit-transition:color .3s;-webkit-transition:color .3s;transition:color .3s;}ul.jsx-656202693{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcYmVkcmlqZnN3ZWJzaXRlLW5leHRqc1xccGFnZXNcXGNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVnQyxBQUcyQyxBQVFGLEFBU00sWUFSSixFQVJDLEtBaUJuQixPQVJrQixHQVJFLFdBU0QsS0FSRyxVQVNKLFFBUkksTUFTVyxZQVJoQixhQUNqQixJQVF5QixrREFDekIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxiZWRyaWpmc3dlYnNpdGUtbmV4dGpzXFxwYWdlc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluJ1xyXG5pbXBvcnQgeyBwb3N0Q29udGFjdCB9IGZyb20gJy4uL2FwaS9jb250YWN0L2luZGV4J1xyXG5pbXBvcnQge0Zvcm1paywgRmllbGQsIEZpZWxkUHJvcHN9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQge1NlbGVjdEZpZWxkLCBUZXh0RmllbGQsIENoZWNrYm94LCBDaGVja2JveEdyb3VwLCBSYWRpb0J1dHRvbiwgUmFkaW9CdXR0b25Hcm91cH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmllbGRzL0lucHV0RmllbGRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXBzQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01hcHMvTWFwc0NvbnRhaW5lclwiXHJcbmltcG9ydCBJbnRyb0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb0Jhbm5lclwiO1xyXG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSAnbmV4dC1hYnNvbHV0ZS11cmwnXHJcblxyXG5jb25zdCBpbml0aWFsRm9ybUZpZWxkcyA9IHtwZXRzOiBbXSwgY29udGFjdHBlcnNvb246ICcnLCBlbWFpbGFkcmVzOiAnJywgYmVkcmlqZnNuYWFtOiAnJywgdGVsZWZvb25udW1tZXI6ICcnLCB1d19iZXJpY2h0OiAnJywgc2VsZWN0OiBcIlwiLCByYWRpbzogXCJcIiwgY2hlY2tib3g6IGZhbHNlfTtcclxuY29uc3QgdGVzdEFycmF5ID0ge2E6IDEsIGI6IDIsIGM6IDN9XHJcblxyXG5jb25zdCBQYWdlID0gKHsgIH0pID0+IHsgXHJcbiAgICByZXR1cm4gPExheW91dD5cclxuICAgICAgICA8SW50cm9CYW5uZXIgdGl0bGU9XCJjb250YWN0XCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgyXCI+bmVlbSBjb250YWN0IG1ldCBvbnMgb3A8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkhlZWZ0IHUgbm9nIHZyYWdlbiBvZiBvcG1lcmtpbmdlbiwgdnVsIGRhbiBoaWVyb25kZXIgaGV0IGNvbnRhY3Rmb3JtdWxpZXIgaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZvb3IgdnJhZ2VuIG9mIG9wbWVya2luZ2VuIG1ldCBzcG9lZCBtYWlsIGRhbiBuYWFyIGhlbHBkZXNrQHh4eHh4Lm5sLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrIG9uU3VibWl0PXsoZGF0YSwgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZvcm0oZGF0YSwgYWN0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbEZvcm1GaWVsZHN9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7dmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyLCBoYW5kbGVTdWJtaXQsIGlzU3VibWl0dGluZ30pID0+IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJuZWVkcy12YWxpZGF0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RwZXJzb29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJjb250YWN0cGVyc29vblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY29udGFjdHBlcnNvb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29udGFjdHBlcnNvb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxhZHJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZW1haWxhZHJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWxhZHJlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbGFkcmVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJlZHJpamZzbmFhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYmVkcmlqZnNuYWFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5iZWRyaWpmc25hYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYmVkcmlqZnNuYWFtfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1d19iZXJpY2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1d19iZXJpY2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy51d19iZXJpY2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnV3X2JlcmljaHR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1ibHVlIGJ0biBidG4tYmxvY2tcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtpc1N1Ym1pdHRpbmcgPyBcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIiA6IG51bGx9YH0+PC9pPiBWZXJ6ZW5kZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+Q29udGFjdGdlZ2V2ZW5zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbDogMDg1IOKAkyB4eHh4eHggPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbDogaW5mb0BiZWRyaWpmc25hYW0ubmwgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEt2SzogeHh4eHh4IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCVFc6IHh4eHh4eCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSUJBTjogeHh4eHh4IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pk9wZW5pbmdzdGlqZGVuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hYW5kYWcgdC9tIHZyaWpkYWc6PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk6MzAg4oCTIDE4OjAwIHV1ci48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmluZ2VuIGt1bm5lbiBidWl0ZW4ga2FudG9vciB1cmVuIGdlbWVsZCB3b3JkZW4gdmlhIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZGVza0BiZWRyaWpmc25hYW0ubmw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNhc2Rhc2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXBzQ29udGFpbmVyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RGb3JtKGRhdGEsIGFjdGlvbnMpIHtcclxuXHJcbiAgICByZXR1cm4gcG9zdENvbnRhY3QoZGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGF0YS5lcnJvcnMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRGaWVsZEVycm9yKGl0ZW0sIGRhdGEuZXJyb3JzW2l0ZW1dWzBdKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5lcnJvcnM7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChkYXRhLnN0YXR1cyA9PSAnMjAwJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZXMgaXMgb250dmFuZ2VuJywgZGF0YSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyB3ZW50IHdyb25nJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\bedrijfswebsite-nextjs\\\\pages\\\\contact.js */"), __jsx("h4", {
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
//# sourceMappingURL=contact.js.57c81ca73e842b0544b5.hot-update.js.map