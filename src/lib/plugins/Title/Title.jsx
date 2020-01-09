import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Title
 */
const Title = ({ attributes, children }) => (
  <Typography
    {...attributes}
    color="textSecondary"
    component="div"
    variant="h4"
  >
    {children}
  </Typography>
);

Title.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Title;
