import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AlignCenter from '@material-ui/icons/FormatAlignCenter';
import AlignLeft from '@material-ui/icons/FormatAlignLeft';
import AlignRight from '@material-ui/icons/FormatAlignRight';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

/**
 * Form
 */
const Form = ({ align, onChange, update, url }) => {
  const [u, setU] = useState(url);

  const handleAlign = value => e => {
    onChange({
      ...e,
      target: {
        ...e.target,
        name: 'align',
        value
      }
    });
  };

  const handleUrl = (e, ...args) => {
    setU(e.target.value);
    onChange(e, ...args);
  };

  return (
    <React.Fragment>
      <TextField
        autoFocus
        fullWidth
        margin="normal"
        multiline
        name="url"
        onChange={handleUrl}
        value={u}
        variant="outlined"
      />
      {update && (
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          marginTop={2}
        >
          <IconButton
            color={align === 'flex-start' ? 'secondary' : 'default'}
            onClick={handleAlign('flex-start')}
          >
            <AlignLeft />
          </IconButton>
          <IconButton
            color={align === 'center' ? 'secondary' : 'default'}
            onClick={handleAlign('center')}
          >
            <AlignCenter />
          </IconButton>
          <IconButton
            color={align === 'flex-end' ? 'secondary' : 'default'}
            onClick={handleAlign('flex-end')}
          >
            <AlignRight />
          </IconButton>
        </Box>
      )}
    </React.Fragment>
  );
};

Form.defaultProps = {
  update: false
};

Form.propTypes = {
  align: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  update: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default Form;
