function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
/**
 * ListBullet
 */

const ListBullet = ({
  attributes,
  children
}) => React.createElement(Box, _extends({}, attributes, {
  component: "ul"
}), children);

ListBullet.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
export default ListBullet;