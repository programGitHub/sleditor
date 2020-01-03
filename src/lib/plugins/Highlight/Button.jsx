import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightEditor from './HighlightEditor';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    HighlightEditor.toggle(editor, 'info');
  };

  return (
    <IconButton onClick={handleClick}>
      <HighlightIcon />
    </IconButton>
  );
};

export default Button;
