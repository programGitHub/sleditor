import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Paragraph
 */
const Paragraph = ({ attributes, children }) => (
  <Typography {...attributes} color="textPrimary" component="p" paragraph>
    {children}
  </Typography>
);

Paragraph.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Paragraph;
