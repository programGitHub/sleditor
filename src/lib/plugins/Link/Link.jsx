import React from 'react';
import PropTypes from 'prop-types';
import LinkEditor from './LinkEditor';
import MuiLink from '@material-ui/core/Link';
import PopoverTextField from 'lib/components/PopoverTextField';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * Link
 */
const Link = React.forwardRef(({ children, id, url, ...props }, ref) => {
  const editor = useSlate();
  const [anchor, onClose, onOpen] = useAnchor();

  const onChange = e => {
    e.preventDefault();
    LinkEditor.update(editor, id, { url: e.target.value });
  };

  return (
    <React.Fragment>
      <MuiLink {...props} href={url} onDoubleClick={onOpen} ref={ref}>
        {children}
      </MuiLink>
      <PopoverTextField
        anchorEl={anchor}
        onChange={onChange}
        onClose={onClose}
        open={Boolean(anchor)}
        value={url}
      />
    </React.Fragment>
  );
});

Link.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
