import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkEditor from './LinkEditor';
import MuiLink from '@material-ui/core/Link';
import PopoverTextField from 'lib/components/PopoverTextField';
import { Transforms } from 'slate';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * Link
 */
const Link = ({ attributes, children, element }) => {
  const { url } = element;

  const editor = useSlate();
  const [anchor, onClose, onOpen] = useAnchor();
  const [selection, setSelection] = useState(null);

  const onChange = e => {
    e.preventDefault();
    LinkEditor.update(editor, selection, { url: e.target.value });
  };

  const handleClose = (...args) => {
    Transforms.select(editor, selection);
    onClose(...args);
  };

  const handleOpen = (...args) => {
    setSelection(editor.selection);
    onOpen(...args);
  };

  return (
    <React.Fragment>
      <MuiLink {...attributes} href={url} onDoubleClick={handleOpen}>
        {children}
      </MuiLink>

      <PopoverTextField
        anchorEl={anchor}
        onChange={onChange}
        onClose={handleClose}
        open={Boolean(anchor)}
        value={url}
      />
    </React.Fragment>
  );
};

Link.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Link;
