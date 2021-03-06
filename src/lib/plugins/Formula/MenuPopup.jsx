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
const MenuPopup = ({ expanded, onValid }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleClick = type => () => {
    if (expanded ^ value.length) {
      onValid(type, value);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={!expanded ? 300 : undefined}
    >
      {!expanded && <Form onChange={handleChange} value={value} />}
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={handleClick('formula_block')}>
          <FullscreenIcon />
        </IconButton>
        <IconButton onClick={handleClick('formula_inline')}>
          <LinearIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

MenuPopup.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onValid: PropTypes.func.isRequired
};

export default MenuPopup;
