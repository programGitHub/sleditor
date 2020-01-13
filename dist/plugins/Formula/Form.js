function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import TextField from '@material-ui/core/TextField';
/**
 * Form
 */

const Form = props => React.createElement(React.Fragment, null, React.createElement(TextField, _extends({}, props, {
  autoFocus: true,
  fullWidth: true,
  label: "Formula",
  margin: "normal",
  multiline: true,
  variant: "outlined"
})));

export default Form;