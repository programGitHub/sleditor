function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    fontStyle: 'italic'
  }
});
/**
 * Bold
 */

const Bold = ({
  attributes,
  children
}) => {
  const classes = useStyles();
  return React.createElement(Typography, _extends({}, attributes, {
    className: classes.root,
    color: "textSecondary",
    component: "span",
    variant: "inherit"
  }), children);
};

Bold.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default Bold;