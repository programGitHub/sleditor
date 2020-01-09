import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

/**
 * ListBullet
 */
const ListBullet = ({ attributes, children }) => (
  <Box {...attributes} component="ul">
    {children}
  </Box>
);

ListBullet.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default ListBullet;
