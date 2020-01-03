import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import ImageEditor from './ImageEditor';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();

  const handleClick = e => {
    e.preventDefault();
    ImageEditor.insert(
      editor,
      'https://images.unsplash.com/photo-1532450106241-ed30d951fbb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    );
  };

  return (
    <IconButton onClick={handleClick}>
      <ImageIcon />
    </IconButton>
  );
};

export default Button;
