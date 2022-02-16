"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Label = _ref => {
  let {
    label,
    htmlFor,
    className,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: 'form-label ' + (className !== undefined && className),
    style: style,
    htmlFor: htmlFor
  }, label);
};

Label.propTypes = {
  label: _propTypes.default.string.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
var _default = Label;
exports.default = _default;