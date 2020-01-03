import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListBulletIcon from '@material-ui/icons/FormatListBulleted';
import ListEditor from './ListEditor';
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
    <IconButton
      color={
        ListEditor.isActive(editor, 'list-bullet') ? 'secondary' : 'default'
      }
      onClick={handleClick}
    >
      <ListBulletIcon />
    </IconButton>
  );
};

export default ButtonBullet;
