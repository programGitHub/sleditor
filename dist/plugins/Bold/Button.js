import React from 'react';
import BoldEditor from './BoldEditor';
import BoldIcon from '@material-ui/icons/FormatBold';
import MenuButton from '../../components/MenuButton';
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

  return React.createElement(MenuButton, {
    color: BoldEditor.isBold(editor) ? 'secondary' : 'default',
    onClick: handleClick
  }, React.createElement(BoldIcon, null));
};

export default Button;