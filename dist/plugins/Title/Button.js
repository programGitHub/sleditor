import React from 'react';
import MenuButton from '../../components/MenuButton';
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

  return React.createElement(MenuButton, {
    color: TitleEditor.isActive(editor) ? 'secondary' : 'default',
    onClick: handleClick
  }, React.createElement(TitleIcon, null));
};

export default Button;