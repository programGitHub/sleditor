import React, { useState } from 'react';
import LinkEditor from './LinkEditor';
import LinkIcon from '@material-ui/icons/Link';
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
  const isActive = LinkEditor.isActive(editor);

  const handleClose = () => {
    Transforms.select(editor, selection);
    onClose();
  };

  const handleOpen = (...args) => {
    if (isActive) {
      LinkEditor.unwrap(editor);
    } else if (editor.selection) {
      setSelection(editor.selection);
      onOpen(...args);
    }
  };

  const handleValid = (text, url) => {
    LinkEditor.wrap(editor, url, text, selection);
    onClose();
  };

  return React.createElement(React.Fragment, null, React.createElement(MenuButton, {
    color: isActive ? 'secondary' : 'default',
    onClick: handleOpen
  }, React.createElement(LinkIcon, null)), React.createElement(MenuPopover, {
    anchorEl: anchorEl,
    onClose: handleClose,
    open: Boolean(anchorEl)
  }, React.createElement(MenuPopup, {
    expanded: !!selection && !Range.isCollapsed(selection),
    onValid: handleValid
  })));
};

export default Button;