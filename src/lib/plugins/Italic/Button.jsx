import React from 'react';
import ItalicEditor from './ItalicEditor';
import ItalicIcon from '@material-ui/icons/FormatItalic';
import MenuButton from 'lib/components/MenuButton';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    ItalicEditor.toggle(editor);
  };

  return (
    <MenuButton
      color={ItalicEditor.isActive(editor) ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <ItalicIcon />
    </MenuButton>
  );
};

export default Button;
