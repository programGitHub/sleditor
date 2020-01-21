import React, { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import ImageEditor from './ImageEditor';
import MenuButton from '../../components/MenuButton';
import MenuPopover from '../../components/MenuPopover';
import MenuPopup from './MenuPopup';
import { Transforms } from 'slate';
import { useAnchor } from '../../hooks';
import { useSlate } from 'slate-react';
/**
 * Button
 */

const Button = () => {
  const [anchorEl, onClose, onOpen] = useAnchor();
  const [selection, setSelection] = useState(null);
  const editor = useSlate();

  const handleClose = () => {
    Transforms.select(editor, selection);
    onClose();
  };

  const handleOpen = (...args) => {
    if (editor.selection) {
      setSelection(editor.selection);
      onOpen(...args);
    }
  };

  const handleValid = url => {
    ImageEditor.insert(editor, url, selection);
    onClose();
  };

  return React.createElement(React.Fragment, null, React.createElement(MenuButton, {
    onClick: handleOpen
  }, React.createElement(ImageIcon, null)), React.createElement(MenuPopover, {
    anchorEl: anchorEl,
    onClose: handleClose,
    open: Boolean(anchorEl)
  }, React.createElement(MenuPopup, {
    onValid: handleValid
  })));
};

export default Button;