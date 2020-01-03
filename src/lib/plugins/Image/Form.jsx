import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AlignCenter from '@material-ui/icons/FormatAlignCenter';
import AlignLeft from '@material-ui/icons/FormatAlignLeft';
import AlignRight from '@material-ui/icons/FormatAlignRight';
import IconButton from '@material-ui/core/IconButton';
import ImageEditor from './ImageEditor';
import TextField from '@material-ui/core/TextField';
import { useSlate } from 'slate-react';

/**
 * Form
 */
const Form = ({ align, url }) => {
  const editor = useSlate();

  const handleAlign = value => () => {
    ImageEditor.update(editor, { align: value });
  };

  const handleUrl = ({ target }) => {
    ImageEditor.update(editor, { url: target.value });
  };

  return (
    <React.Fragment>
      <TextField
        fullWidth
        margin="normal"
        multiline
        onChange={handleUrl}
        value={url}
        variant="outlined"
      />
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
    </React.Fragment>
  );
};

Form.propTypes = {
  align: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Form;
