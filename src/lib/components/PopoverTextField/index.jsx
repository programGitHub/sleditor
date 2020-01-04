import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from 'lib/components/Popover';
import TextField from '@material-ui/core/TextField';

/**
 * PopoverTextField
 */
const PopoverTextField = ({ inputProps, onChange, value, ...props }) => {
  const [v, setV] = useState(value);

  const handleChange = e => {
    setV(e.target.value);
    onChange(e);
  };

  return (
    <Popover
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      {...props}
    >
      <TextField
        {...inputProps}
        autoFocus
        fullWidth
        margin="dense"
        multiline
        onChange={handleChange}
        value={v}
        variant="outlined"
      />
    </Popover>
  );
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
