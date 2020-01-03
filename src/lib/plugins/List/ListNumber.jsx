import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ListEditor from './ListEditor';
import { useSlate } from 'slate-react';

/**
 * ListNumber
 */
const ListNumber = React.forwardRef(
  ({ children, follow, id, ...props }, ref) => {
    const editor = useSlate();

    return (
      <Box
        {...props}
        component="ol"
        ref={ref}
        start={follow ? ListEditor.getStart(editor, id) : 1}
      >
        {children}
      </Box>
    );
  }
);

ListNumber.propTypes = {
  children: PropTypes.node.isRequired,
  follow: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default ListNumber;
