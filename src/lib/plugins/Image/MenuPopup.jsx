import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import Form from './Form';
import IconButton from '@material-ui/core/IconButton';
import { isImageUrl } from './withImage';

/**
 * MenuPopup
 */
const MenuPopup = ({ onValid }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleClick = () => {
    if (value.length && isImageUrl(value)) {
      onValid(value);
    }
  };

  return (
    <Box
      alignItems="flex-end"
      display="flex"
      flexDirection="column"
      width={300}
    >
      <Form align="" onChange={handleChange} url={value} />
      <IconButton onClick={handleClick}>
        <DoneIcon />
      </IconButton>
    </Box>
  );
};

MenuPopup.propTypes = {
  onValid: PropTypes.func.isRequired
};

export default MenuPopup;
