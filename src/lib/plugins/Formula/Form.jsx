import React from 'react';
import TextField from '@material-ui/core/TextField';

/**
 * Form
 */
const Form = props => (
  <React.Fragment>
    <TextField
      {...props}
      autoFocus
      fullWidth
      label="Formula"
      margin="normal"
      multiline
      variant="outlined"
    />
  </React.Fragment>
);

export default Form;
