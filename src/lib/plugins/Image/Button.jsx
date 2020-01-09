import React, { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import ImageEditor from './ImageEditor';
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

  const handleValid = url => {
    ImageEditor.insert(editor, url, selection);
    onClose();
  };

  return (
    <React.Fragment>
      <MenuButton onClick={handleOpen}>
        <ImageIcon />
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
