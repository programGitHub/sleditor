import React from 'react';
import PropTypes from 'prop-types';
import AttachIcon from '@material-ui/icons/AttachFile';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ListEditor from './ListEditor';
import { useFocused, useSlate, useSelected } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';

/**
 * ListNumber
 */
const ListNumber = React.forwardRef(
  ({ children, follow, id, ...props }, ref) => {
    const editor = useSlate();
    const focused = useFocused();
    const selected = useSelected();

    const handleFollow = () => {
      ListEditor.update(editor, id, { follow: !follow });
    };

    return (
      <Box position="relative">
        <Box left={-35} position="absolute" top={-10}>
          <Zoom in={focused && selected}>
            <IconButton
              color={follow ? 'secondary' : 'default'}
              onClick={handleFollow}
            >
              <AttachIcon />
            </IconButton>
          </Zoom>
        </Box>

        <Box
          {...props}
          component="ol"
          ref={ref}
          start={follow ? ListEditor.getStart(editor, id) : 1}
        >
          {children}
        </Box>
      </Box>
    );
  }
);

ListNumber.defaultProps = {
  follow: false
};

ListNumber.propTypes = {
  children: PropTypes.node.isRequired,
  follow: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default ListNumber;
