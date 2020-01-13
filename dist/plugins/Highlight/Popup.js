import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
/**
 * Popup
 */

const Popup = ({
  children,
  open
}) => React.createElement(Box, {
  contentEditable: false,
  display: "flex",
  position: "absolute",
  right: 0,
  top: 0
}, React.createElement(Zoom, {
  in: open
}, React.createElement(Paper, {
  elevation: 1
}, children)));

Popup.defaultProps = {
  open: false
};
Popup.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired
};
export default Popup;