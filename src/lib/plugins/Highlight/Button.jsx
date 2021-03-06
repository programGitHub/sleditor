import React, { useMemo, useState } from 'react';
import { categories } from './Highlight';
import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightEditor from './HighlightEditor';
import MenuButton from 'lib/components/MenuButton';
import MenuPopover from 'lib/components/MenuPopover';
import { Transforms } from 'slate';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const [selection, setSelection] = useState(null);
  const [anchor, onClose, onOpen] = useAnchor();
  const editor = useSlate();
  const arr = useMemo(
    () =>
      Object.keys(categories).map(e => ({
        ...categories[e],
        id: e
      })),
    []
  );

  const handleCategory = cat => () => {
    HighlightEditor.toggle(editor, cat, selection);
    onClose();
  };

  const handleClose = () => {
    Transforms.select(editor, selection);
    onClose();
  };

  const handleOpen = (...args) => {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }

    if (editor.selection) {
      setSelection(editor.selection);
      onOpen(...args);
    }
  };

  return (
    <React.Fragment>
      <MenuButton onClick={handleOpen}>
        <HighlightIcon />
      </MenuButton>

      <MenuPopover
        anchorEl={anchor}
        onClose={handleClose}
        open={Boolean(anchor)}
      >
        {arr.map(({ icon, id }) => (
          <MenuButton key={id} onClick={handleCategory(id)} size="small">
            {icon}
          </MenuButton>
        ))}
      </MenuPopover>
    </React.Fragment>
  );
};

export default Button;
