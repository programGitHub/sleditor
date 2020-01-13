import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiPopover from '@material-ui/core/Popover';
/**
 * Popover
 */

const Popover = ({
  children,
  ...props
}) => React.createElement(MuiPopover, props, React.createElement(Box, {
  padding: 1
}, children));

Popover.propTypes = {
  children: PropTypes.node
};
export default Popover;