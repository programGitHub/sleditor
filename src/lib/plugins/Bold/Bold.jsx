import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Bold
 */
const Bold = ({ children }) => (
  <Typography color="secondary" component="span" variant="inherit">
    {children}
  </Typography>
);

Bold.propTypes = {
  children: PropTypes.node.isRequired
};

export default Bold;
