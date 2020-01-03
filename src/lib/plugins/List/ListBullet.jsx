import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

/**
 * ListBullet
 */
const ListBullet = React.forwardRef(({ children, ...props }, ref) => (
  <Box {...props} component="ul" ref={ref}>
    {children}
  </Box>
));

ListBullet.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListBullet;
