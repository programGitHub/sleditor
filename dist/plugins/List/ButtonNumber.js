import React from 'react';
import ListNumberIcon from '@material-ui/icons/FormatListNumbered';
import ListEditor from './ListEditor';
import MenuButton from '../../components/MenuButton';
import { useSlate } from 'slate-react';
/**
 * ButtonNumber
 */

const ButtonNumber = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    ListEditor.toggle(editor, 'list-number');
  };

  return React.createElement(MenuButton, {
    color: ListEditor.isActive(editor, 'list-number') ? 'secondary' : 'default',
    onClick: handleClick
  }, React.createElement(ListNumberIcon, null));
};

export default ButtonNumber;