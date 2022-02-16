"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Select = _ref => {
  let {
    name,
    id,
    selectText,
    value,
    onChange,
    data,
    className,
    style,
    sizing,
    isDisabled
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("select", {
    className: 'form-select ' + (className !== undefined && className) + (sizing !== false && sizing === 'large' && ' form-select-lg ' || sizing === 'small' && ' form-select-sm ' || ''),
    style: style,
    name: name,
    id: id,
    value: value,
    onChange: onChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: '',
    disabled: isDisabled
  }, selectText), typeof data[0] === 'object' ? data.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: item.optionValue
  }, item.optionLabel)) : data.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: item
  }, item)));
};

Select.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  selectText: _propTypes.default.string,
  className: _propTypes.default.string,
  sizing: _propTypes.default.string,
  style: _propTypes.default.object,
  isDisabled: _propTypes.default.bool,
  data: _propTypes.default.array.isRequired,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired
};
var _default = Select;
exports.default = _default;