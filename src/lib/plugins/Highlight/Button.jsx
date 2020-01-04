import React, { useMemo, useState } from 'react';
import { categories } from './Highlight';
import IconButton from '@material-ui/core/IconButton';
import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightEditor from './HighlightEditor';
import Popover from 'lib/components/Popover';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const editor = useSlate();
  const arr = useMemo(
    () =>
      Object.keys(categories).map(e => ({
        ...categories[e],
        id: e
      })),
    []
  );

  const onClose = () => {
    setAnchorEl(null);
  };

  const onOpen = e => {
    setAnchorEl(e.target);
  };

  const handleCategory = cat => () => {
    HighlightEditor.toggle(editor, cat);
    onClose();
  };

  return (
    <React.Fragment>
      <IconButton onClick={onOpen}>
        <HighlightIcon />
      </IconButton>
      <Popover
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        anchorEl={anchorEl}
        onClose={onClose}
        open={Boolean(anchorEl)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        {arr.map(({ icon, id }) => (
          <IconButton key={id} onClick={handleCategory(id)} size="small">
            {icon}
          </IconButton>
        ))}
      </Popover>
    </React.Fragment>
  );
};

export default Button;
