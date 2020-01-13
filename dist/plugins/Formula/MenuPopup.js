import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Form from './Form';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import IconButton from '@material-ui/core/IconButton';
import LinearIcon from '@material-ui/icons/LinearScale';
/**
 * MenuPopup
 */

const MenuPopup = ({
  expanded,
  onValid
}) => {
  const [value, setValue] = useState('');

  const handleChange = ({
    target
  }) => {
    setValue(target.value);
  };

  const handleClick = type => () => {
    if (expanded ^ value.length) {
      onValid(type, value);
    }
  };

  return React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: !expanded ? 300 : undefined
  }, !expanded && React.createElement(Form, {
    onChange: handleChange,
    value: value
  }), React.createElement(Box, {
    display: "flex",
    justifyContent: "flex-end"
  }, React.createElement(IconButton, {
    onClick: handleClick('formula_block')
  }, React.createElement(FullscreenIcon, null)), React.createElement(IconButton, {
    onClick: handleClick('formula_inline')
  }, React.createElement(LinearIcon, null))));
};

MenuPopup.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onValid: PropTypes.func.isRequired
};
export default MenuPopup;