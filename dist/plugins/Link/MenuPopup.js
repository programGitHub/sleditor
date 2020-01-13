function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import Form from './Form';
import IconButton from '@material-ui/core/IconButton';
/**
 * MenuPopup
 */

const MenuPopup = ({
  expanded,
  onValid
}) => {
  const [value, setValue] = useState({
    text: '',
    url: ''
  });

  const handleChange = ({
    target
  }) => {
    setValue({ ...value,
      [target.name]: target.value
    });
  };

  const handleClick = () => {
    if (expanded ^ value.text.length && value.url.length) {
      // ^ = XOR
      onValid(value.text, value.url);
    }
  };

  return React.createElement(Box, {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    width: 300
  }, React.createElement(Form, _extends({}, value, {
    expanded: expanded,
    onChange: handleChange
  })), React.createElement(IconButton, {
    onClick: handleClick
  }, React.createElement(DoneIcon, null)));
};

MenuPopup.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onValid: PropTypes.func.isRequired
};
export default MenuPopup;