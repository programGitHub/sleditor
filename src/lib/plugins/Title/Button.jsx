import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TitleEditor from './TitleEditor';
import TitleIcon from '@material-ui/icons/Title';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    TitleEditor.toggle(editor);
  };

  return (
    <IconButton
      color={TitleEditor.isActive(editor) ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <TitleIcon />
    </IconButton>
  );
};

export default Button;
