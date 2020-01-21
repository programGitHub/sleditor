import React from 'react';
import ItalicEditor from './ItalicEditor';
import ItalicIcon from '@material-ui/icons/FormatItalic';
import MenuButton from '../../components/MenuButton';
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

  return React.createElement(MenuButton, {
    color: ItalicEditor.isActive(editor) ? 'secondary' : 'default',
    onClick: handleClick
  }, React.createElement(ItalicIcon, null));
};

export default Button;