function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import MathComponent from './MathComponent';
/**
 * Inline
 */

const Inline = props => React.createElement(MathComponent, _extends({}, props, {
  component: "span"
}));

export default Inline;