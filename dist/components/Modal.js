"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(props) {
  const [modal, setModal] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrap-lib"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setModal(true),
    className: "save-buttton-lib"
  }, props.openButton), /*#__PURE__*/_react.default.createElement("div", {
    className: modal ? "modal-content-lib modal-active-lib" : "modal-content-lib "
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-p-lib"
  }, props.message), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button-lib",
    onClick: () => setModal(false)
  }, props.closeButton)));
}
Modal.defaultProps = {
  openButton: "Save",
  message: "Employee Created",
  closeButton: "X"
};
var _default = Modal;
exports.default = _default;