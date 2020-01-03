import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LinkEditor from './LinkEditor';
import LinkIcon from '@material-ui/icons/Link';
import { useSlate } from 'slate-react';

/**
 * Button
 */
const Button = () => {
  const editor = useSlate();
  const isActive = LinkEditor.isActive(editor);

  const handleClick = e => {
    e.preventDefault();

    if (isActive) {
      LinkEditor.unwrap(editor);
    } else {
      LinkEditor.wrap(editor, 'https://www.google.com');
    }
  };

  return (
    <IconButton
      color={isActive ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <LinkIcon />
    </IconButton>
  );
};

export default Button;
