import React, { useState } from 'react';
import LinkEditor from './LinkEditor';
import LinkIcon from '@material-ui/icons/Link';
import MenuButton from 'lib/components/MenuButton';
import MenuPopup from './MenuPopup';
import Popover from 'lib/components/Popover';
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

  return (
    <React.Fragment>
      <MenuButton
        color={isActive ? 'secondary' : 'default'}
        onClick={handleOpen}
      >
        <LinkIcon />
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
        <MenuPopup
          expanded={!!selection && !Range.isCollapsed(selection)}
          onValid={handleValid}
        />
      </Popover>
    </React.Fragment>
  );
};

export default Button;
