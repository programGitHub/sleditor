import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Title
 */
const Title = React.forwardRef(({ children, ...props }, ref) => (
  <Typography
    {...props}
    color="textSecondary"
    component="div"
    ref={ref}
    variant="h4"
  >
    {children}
  </Typography>
));

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
