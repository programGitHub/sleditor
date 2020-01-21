import React, { useState } from 'react';
import FormulaEditor from './FormulaEditor';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuButton from 'lib/components/MenuButton';
import MenuPopover from 'lib/components/MenuPopover';
import MenuPopup from './MenuPopup';
import { Range, Transforms } from 'slate';
import { useAnchor } from 'lib/hooks';
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

  return (
    <React.Fragment>
      <MenuButton onClick={handleOpen}>
        <FunctionsIcon />
      </MenuButton>

      <MenuPopover
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuPopup
          expanded={!!selection && !Range.isCollapsed(selection)}
          onValid={handleValid}
        />
      </MenuPopover>
    </React.Fragment>
  );
};

export default Button;
