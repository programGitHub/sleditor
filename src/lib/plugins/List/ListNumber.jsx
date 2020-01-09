import React from 'react';
import PropTypes from 'prop-types';
import AttachIcon from '@material-ui/icons/AttachFile';
import Box from '@material-ui/core/Box';
import ListEditor from './ListEditor';
import MenuButton from 'lib/components/MenuButton';
import { useFocused, useSlate, useSelected } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';

/**
 * ListNumber
 */
const ListNumber = ({ attributes, children, element }) => {
  const { follow } = element;

  const editor = useSlate();
  const focused = useFocused();
  const selected = useSelected();

  const handleFollow = () => {
    ListEditor.update(editor, { follow: !follow });
  };

  return (
    <Box {...attributes} position="relative">
      <Box contentEditable={false} left={-35} position="absolute" top={-10}>
        <Zoom in={focused && selected}>
          <MenuButton
            color={follow ? 'secondary' : 'default'}
            onClick={handleFollow}
          >
            <AttachIcon />
          </MenuButton>
        </Zoom>
      </Box>

      <Box component="ol" start={ListEditor.getStart(editor, element)}>
        {children}
      </Box>
    </Box>
  );
};

ListNumber.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.shape({
    follow: PropTypes.bool.isRequired
  }).isRequired
};

export default ListNumber;
