import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
/**
 * ButtonReadOnly
 */

const ButtonReadOnly = ({ ...props
}) => React.createElement(IconButton, props, React.createElement(LockIcon, null));

export default ButtonReadOnly;