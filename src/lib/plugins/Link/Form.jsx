import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

/**
 * Form
 */
const Form = ({ expanded, onChange, text, url }) => (
  <React.Fragment>
    {!expanded && (
      <TextField
        autoFocus
        fullWidth
        label="Text"
        margin="normal"
        multiline
        name="text"
        onChange={onChange}
        value={text}
        variant="outlined"
      />
    )}
    <TextField
      autoFocus={expanded}
      fullWidth
      label="Url"
      margin="normal"
      multiline
      name="url"
      onChange={onChange}
      value={url}
      variant="outlined"
    />
  </React.Fragment>
);

Form.defaultProps = {
  expanded: false
};

Form.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Form;
