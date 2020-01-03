import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListNumberIcon from '@material-ui/icons/FormatListNumbered';
import ListEditor from './ListEditor';
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

  return (
    <IconButton
      color={
        ListEditor.isActive(editor, 'list-number') ? 'secondary' : 'default'
      }
      onClick={handleClick}
    >
      <ListNumberIcon />
    </IconButton>
  );
};

export default ButtonNumber;
