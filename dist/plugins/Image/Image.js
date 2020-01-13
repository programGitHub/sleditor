function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Form from './Form';
import ImageEditor from './ImageEditor';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '../../components/Popover';
import { Transforms } from 'slate';
import { useAnchor } from '../../hooks';
import { useFocused, useSelected, useSlate } from 'slate-react';
const useStyles = makeStyles(theme => ({
  img: {
    boxShadow: theme.shadows[3],
    maxHeight: '20em',
    maxWidth: '100%',
    minHeight: 100,
    minWidth: 100,
    transition: 'box-shadow 150ms linear'
  },
  active: {
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}`
  }
}));
/**
 * Image
 */

const Image = ({
  attributes,
  children,
  element
}) => {
  const {
    align,
    url
  } = element;
  const editor = useSlate();
  const [anchor, onClose, onOpen] = useAnchor();
  const classes = useStyles();
  const focused = useFocused();
  const selected = useSelected();
  const [selection, setSelection] = useState(null);
  const open = Boolean(anchor);
  const active = focused && selected || open;

  const handleChange = ({
    target
  }) => {
    ImageEditor.update(editor, selection, {
      [target.name]: target.value
    });
  };

  const handleClose = (...args) => {
    Transforms.select(editor, selection);
    onClose(...args);
  };

  const handleOpen = (...args) => {
    setSelection(editor.selection);
    onOpen(...args);
  };

  return React.createElement(React.Fragment, null, React.createElement(Box, _extends({}, attributes, {
    display: "flex",
    justifyContent: align,
    marginBottom: 2,
    marginTop: 2,
    onDoubleClick: handleOpen
  }), React.createElement(Box, {
    contentEditable: false
  }, React.createElement("img", {
    alt: "",
    className: clsx(classes.img, {
      [classes.active]: active
    }),
    src: url
  })), children), React.createElement(Popover, {
    anchorEl: anchor,
    anchorOrigin: {
      vertical: 'center',
      horizontal: 'center'
    },
    onClose: handleClose,
    open: open,
    transformOrigin: {
      vertical: 'center',
      horizontal: 'center'
    }
  }, React.createElement(Box, {
    width: 500
  }, React.createElement(Form, {
    align: align,
    onChange: handleChange,
    update: true,
    url: url
  }))));
};

Image.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    align: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};
export default Image;