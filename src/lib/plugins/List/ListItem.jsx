import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * ListItem
 */
const ListItem = ({ attributes, children }) => (
  <Typography {...attributes} component="li" paragraph>
    {children}
  </Typography>
);

ListItem.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default ListItem;
