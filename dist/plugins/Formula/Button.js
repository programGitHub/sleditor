import React, { useState } from 'react';
import FormulaEditor from './FormulaEditor';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuButton from '../../components/MenuButton';
import MenuPopover from '../../components/MenuPopover';
import MenuPopup from './MenuPopup';
import { Range, Transforms } from 'slate';
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

  const handleValid = (type, math) => {
    FormulaEditor.insert(editor, type, math, selection);
    onClose();
  };

  return React.createElement(React.Fragment, null, React.createElement(MenuButton, {
    onClick: handleOpen
  }, React.createElement(FunctionsIcon, null)), React.createElement(MenuPopover, {
    anchorEl: anchorEl,
    onClose: handleClose,
    open: Boolean(anchorEl)
  }, React.createElement(MenuPopup, {
    expanded: !!selection && !Range.isCollapsed(selection),
    onValid: handleValid
  })));
};

export default Button;