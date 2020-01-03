import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * ListItem
 */
const ListItem = React.forwardRef(({ children, ...props }, ref) => (
  <Typography {...props} component="li" paragraph ref={ref}>
    {children}
  </Typography>
));

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListItem;
