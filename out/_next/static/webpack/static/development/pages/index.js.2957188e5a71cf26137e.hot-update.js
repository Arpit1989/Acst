webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/InputGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/API */ "./services/API.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./config.json", 1);
var _jsxFileName = "/Users/primus/node/acst/components/ContactForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var apiService = new _services_API__WEBPACK_IMPORTED_MODULE_5__["default"]({
  url: "".concat(_config_json__WEBPACK_IMPORTED_MODULE_6__.API_SERVER_URL)
});

var ContactForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      validated: false,
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        company_name: '',
        work_phone: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        url: ''
      }
    };
    return _this;
  }

  _createClass(ContactForm, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        apiService.createEntity({
          name: 'contact'
        });

        if (this.state.contact.hasOwnProperty('id')) {
          apiService.endpoints.contact.update(this.state.contact).then(function (res) {
            _this2.props.updateHandler(res, 'success');
          }).catch(function (err) {
            _this2.props.updateHandler(err, 'danger');
          });
        } else {
          apiService.endpoints.contact.create(this.state.contact).then(function (res) {
            _this2.props.updateHandler(res, 'success');
          }).catch(function (err) {
            _this2.props.updateHandler(err, 'danger');
          });
        }
      }

      this.setState({
        validated: true
      });
      event.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      var contact = Object.assign({}, this.state.contact);
      contact[event.target.name] = event.target.value;
      this.setState({
        contact: contact
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        contact: this.props.contact
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _React$createElement;

      var validated = this.state.validated;
      var readonly;

      if (this.props.action === 'Show Contact') {
        readonly = true;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        noValidate: true,
        validated: validated,
        onSubmit: function onSubmit(e) {
          return _this3.handleSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustom01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "First name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        required: true,
        type: "text",
        name: "first_name",
        placeholder: "First name",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.first_name,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Please choose a first name."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Looks good!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustom02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Last name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        name: "last_name",
        type: "text",
        placeholder: "Last name",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.last_name,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Please choose a last name."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Looks good!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustomUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "email",
        placeholder: "Email",
        name: "email",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.email,
        "aria-describedby": "inputGroupPrepend",
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Please choose a valid email.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustom01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        name: "company_name",
        type: "text",
        placeholder: "Company",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.company_name,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Please choose a Company."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Looks good!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustom02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        name: "phone",
        type: "number",
        placeholder: "Phone",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.phone,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Please choose a phone number."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Looks good!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "4",
        controlId: "validationCustomUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Work Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "number",
        name: "work_phone",
        placeholder: "Work Phone",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.work_phone,
        "aria-describedby": "inputGroupPrepend",
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Please choose a work phone.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "6",
        controlId: "validationCustom03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "text",
        placeholder: "Apartment, studio, or floor",
        name: "address",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.address,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Please provide a valid Address.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "6",
        controlId: "validationCustom03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "URL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, (_React$createElement = {
        type: "text",
        placeholder: "URL",
        name: "url"
      }, _defineProperty(_React$createElement, "type", "url"), _defineProperty(_React$createElement, "pattern", "https?://.+"), _defineProperty(_React$createElement, "onChange", this.handleChange.bind(this)), _defineProperty(_React$createElement, "defaultValue", this.state.contact.url), _defineProperty(_React$createElement, "readOnly", readonly), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 197
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Please provide a valid URL."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "6",
        controlId: "validationCustom03",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "City"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "text",
        placeholder: "City",
        name: "city",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.city,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Please provide a valid city.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "3",
        controlId: "validationCustom04",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "text",
        placeholder: "State",
        name: "state",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.state,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Please provide a valid state.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        md: "3",
        controlId: "validationCustom05",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Zip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
        type: "text",
        placeholder: "Zip",
        name: "zip",
        onChange: this.handleChange.bind(this),
        defaultValue: this.state.contact.zip,
        readOnly: readonly,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control.Feedback, {
        type: "invalid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Please provide a valid zip."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        disabled: readonly,
        className: "mt-1 mb-1 btn-block",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Submit form")));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.2957188e5a71cf26137e.hot-update.js.map