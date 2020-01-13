import React from 'react';
import ListBulletIcon from '@material-ui/icons/FormatListBulleted';
import ListEditor from './ListEditor';
import MenuButton from '../../components/MenuButton';
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

  return React.createElement(MenuButton, {
    color: ListEditor.isActive(editor, 'list-bullet') ? 'secondary' : 'default',
    onClick: handleClick
  }, React.createElement(ListBulletIcon, null));
};

export default ButtonBullet;