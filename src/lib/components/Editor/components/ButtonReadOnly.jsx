import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';

/**
 * ButtonReadOnly
 */
const ButtonReadOnly = ({ ...props }) => (
  <IconButton {...props}>
    <LockIcon />
  </IconButton>
);

export default ButtonReadOnly;
