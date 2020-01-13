import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Bold
 */
const Bold = ({ attributes, children }) => (
  <Typography
    {...attributes}
    color="secondary"
    component="span"
    variant="inherit"
  >
    {children}
  </Typography>
);

Bold.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Bold;
