import React from 'react';
import MenuButton from 'lib/components/MenuButton';
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
    <MenuButton
      color={TitleEditor.isActive(editor) ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <TitleIcon />
    </MenuButton>
  );
};

export default Button;
