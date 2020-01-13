import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
/**
 * Form
 */

const Form = ({
  expanded,
  onChange,
  text,
  url
}) => React.createElement(React.Fragment, null, !expanded && React.createElement(TextField, {
  autoFocus: true,
  fullWidth: true,
  label: "Text",
  margin: "normal",
  multiline: true,
  name: "text",
  onChange: onChange,
  value: text,
  variant: "outlined"
}), React.createElement(TextField, {
  autoFocus: expanded,
  fullWidth: true,
  label: "Url",
  margin: "normal",
  multiline: true,
  name: "url",
  onChange: onChange,
  value: url,
  variant: "outlined"
}));

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