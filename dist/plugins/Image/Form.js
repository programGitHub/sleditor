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

const Form = ({
  align,
  onChange,
  update,
  url
}) => {
  const [u, setU] = useState(url);

  const handleAlign = value => e => {
    onChange({ ...e,
      target: { ...e.target,
        name: 'align',
        value
      }
    });
  };

  const handleUrl = (e, ...args) => {
    setU(e.target.value);
    onChange(e, ...args);
  };

  return React.createElement(React.Fragment, null, React.createElement(TextField, {
    autoFocus: true,
    fullWidth: true,
    margin: "normal",
    multiline: true,
    name: "url",
    onChange: handleUrl,
    value: u,
    variant: "outlined"
  }), update && React.createElement(Box, {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 2
  }, React.createElement(IconButton, {
    color: align === 'flex-start' ? 'secondary' : 'default',
    onClick: handleAlign('flex-start')
  }, React.createElement(AlignLeft, null)), React.createElement(IconButton, {
    color: align === 'center' ? 'secondary' : 'default',
    onClick: handleAlign('center')
  }, React.createElement(AlignCenter, null)), React.createElement(IconButton, {
    color: align === 'flex-end' ? 'secondary' : 'default',
    onClick: handleAlign('flex-end')
  }, React.createElement(AlignRight, null))));
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