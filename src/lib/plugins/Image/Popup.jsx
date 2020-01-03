import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

/**
 * Popup
 */
const Popup = React.forwardRef(
  ({ alignItems, children, justifyContent, open }, ref) => (
    <Box
      alignItems={alignItems}
      bottom={0}
      display="flex"
      justifyContent={justifyContent}
      left={0}
      position="absolute"
      ref={ref}
      right={0}
      top={0}
    >
      <Zoom in={open}>
        <Paper elevation={8}>
          <Box
            onMouseDown={e => {
              // e.preventDefault();
            }}
            padding={2}
            width={400}
          >
            {children}
          </Box>
        </Paper>
      </Zoom>
    </Box>
  )
);

Popup.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  open: false
};

Popup.propTypes = {
  alignItems: PropTypes.string.isRequired,
  children: PropTypes.node,
  justifyContent: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

export default Popup;
