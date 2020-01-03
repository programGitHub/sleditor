import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Paragraph
 */
const Paragraph = React.forwardRef(({ children, ...props }, ref) => (
  <Typography {...props} color="textPrimary" component="p" paragraph ref={ref}>
    {children}
  </Typography>
));

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;
