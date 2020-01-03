import React from 'react';
import BoldEditor from './BoldEditor';
import BoldIcon from '@material-ui/icons/FormatBold';
import IconButton from '@material-ui/core/IconButton';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    BoldEditor.toggleBold(editor);
  };

  return (
    <IconButton
      color={BoldEditor.isBold(editor) ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <BoldIcon />
    </IconButton>
  );
};

export default Button;
