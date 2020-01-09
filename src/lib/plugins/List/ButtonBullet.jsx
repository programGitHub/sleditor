import React from 'react';
import ListBulletIcon from '@material-ui/icons/FormatListBulleted';
import ListEditor from './ListEditor';
import MenuButton from 'lib/components/MenuButton';
import { useSlate } from 'slate-react';

/**
 * ButtonBullet
 */
const ButtonBullet = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    ListEditor.toggle(editor, 'list-bullet');
  };

  return (
    <MenuButton
      color={
        ListEditor.isActive(editor, 'list-bullet') ? 'secondary' : 'default'
      }
      onClick={handleClick}
    >
      <ListBulletIcon />
    </MenuButton>
  );
};

export default ButtonBullet;
