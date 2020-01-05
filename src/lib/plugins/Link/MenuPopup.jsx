import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import Form from './Form';
import IconButton from '@material-ui/core/IconButton';

/**
 * MenuPopup
 */
const MenuPopup = ({ expanded, onValid }) => {
  const [value, setValue] = useState({ text: '', url: '' });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value
    });
  };

  const handleClick = () => {
    if (expanded ^ value.text.length && value.url.length) {
      // ^ = XOR
      onValid(value.text, value.url);
    }
  };

  return (
    <Box
      alignItems="flex-end"
      display="flex"
      flexDirection="column"
      width={300}
    >
      <Form {...value} expanded={expanded} onChange={handleChange} />
      <IconButton onClick={handleClick}>
        <DoneIcon />
      </IconButton>
    </Box>
  );
};

MenuPopup.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onValid: PropTypes.func.isRequired
};

export default MenuPopup;
