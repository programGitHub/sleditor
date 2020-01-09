import React from 'react';
import IconButton from '@material-ui/core/IconButton';

/**
 * MenuButton
 */
const MenuButton = props => (
  <IconButton
    onMouseDown={e => {
      e.preventDefault();
    }}
    {...props}
  />
);

export default MenuButton;
