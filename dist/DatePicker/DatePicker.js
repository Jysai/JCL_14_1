"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function DatePicker() {


  var selectDate = function selectDate(e) {
    var selectDate = new Date(e.target.value).toLocaleDateString("fr");
    var data = {
 
      startDate: selectDate
    };

  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "start-date"
  }, "Start Date"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    id: "date",
    onChange: selectDate
  }));
};
var _default = DatePicker;
exports.default = _default;