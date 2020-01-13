function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Popover from '../Popover';
import TextField from '@material-ui/core/TextField';
/**
 * PopoverTextField
 */

const PopoverTextField = ({
  inputProps,
  onChange,
  value,
  ...props
}) => {
  const [v, setV] = useState(value);

  const handleChange = e => {
    setV(e.target.value);
    onChange(e);
  };

  return React.createElement(Popover, _extends({
    anchorOrigin: {
      horizontal: 'center',
      vertical: 'bottom'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, props), React.createElement(Box, {
    width: 350
  }, React.createElement(TextField, _extends({}, inputProps, {
    autoFocus: true,
    fullWidth: true,
    margin: "dense",
    multiline: true,
    onChange: handleChange,
    value: v,
    variant: "outlined"
  }))));
};

PopoverTextField.defaultProps = {
  inputProps: {}
};
PopoverTextField.propTypes = {
  inputProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default PopoverTextField;