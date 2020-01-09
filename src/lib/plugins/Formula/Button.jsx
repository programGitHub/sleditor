import React, { useState } from 'react';
import FormulaEditor from './FormulaEditor';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuButton from 'lib/components/MenuButton';
import MenuPopup from './MenuPopup';
import Popover from 'lib/components/Popover';
import { Transforms } from 'slate';
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

      <Popover
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <MenuPopup onValid={handleValid} />
      </Popover>
    </React.Fragment>
  );
};

export default Button;
