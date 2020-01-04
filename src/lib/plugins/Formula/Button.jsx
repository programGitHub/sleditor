import React, { useState } from 'react';
import FormulaEditor from './FormulaEditor';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FunctionsIcon from '@material-ui/icons/Functions';
import IconButton from '@material-ui/core/IconButton';
import LinearIcon from '@material-ui/icons/LinearScale';
import Popover from 'lib/components/Popover';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const editor = useSlate();

  const onClose = () => {
    setAnchorEl(null);
  };

  const onOpen = e => {
    setAnchorEl(e.target);
  };

  const handleClick = val => e => {
    e.preventDefault();
    FormulaEditor.insert(editor, val, '2x+1');
    onClose();
  };

  return (
    <React.Fragment>
      <IconButton onClick={onOpen}>
        <FunctionsIcon />
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
        <IconButton onClick={handleClick('formula_block')} size="small">
          <FullscreenIcon />
        </IconButton>
        <IconButton onClick={handleClick('formula_inline')} size="small">
          <LinearIcon />
        </IconButton>
      </Popover>
    </React.Fragment>
  );
};

export default Button;
