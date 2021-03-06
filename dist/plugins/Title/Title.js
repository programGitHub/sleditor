function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
/**
 * Title
 */

const Title = ({
  attributes,
  children
}) => React.createElement(Typography, _extends({}, attributes, {
  color: "textSecondary",
  component: "div",
  paragraph: true,
  variant: "h4"
}), children);

Title.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default Title;