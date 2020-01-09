import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

/**
 * Popup
 */
const Popup = ({ children, open }) => (
  <Box
    contentEditable={false}
    display="flex"
    position="absolute"
    right={0}
    top={0}
  >
    <Zoom in={open}>
      <Paper elevation={1}>{children}</Paper>
    </Zoom>
  </Box>
);

Popup.defaultProps = {
  open: false
};

Popup.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired
};

export default Popup;
