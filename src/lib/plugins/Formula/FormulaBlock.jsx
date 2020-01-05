import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormulaEditor from './FormulaEditor';
import { MathBlock } from 'lib/components/Math';
import PopoverTextField from 'lib/components/PopoverTextField';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * FormulaBlock
 */
const FormulaBlock = React.forwardRef(
  ({ children, id, math, ...props }, ref) => {
    const editor = useSlate();
    const [anchor, onClose, onOpen] = useAnchor();

    const onChange = e => {
      e.preventDefault();
      FormulaEditor.update(editor, id, { math: e.target.value });
    };

    return (
      <React.Fragment>
        <Box
          {...props}
          onClick={() => {
            onOpen({ target: ref.current });
          }}
          ref={ref}
        >
          <MathBlock align="center" color="textPrimary" paragraph variant="h5">
            {math}
          </MathBlock>
          {children}
        </Box>
        <PopoverTextField
          anchorEl={anchor}
          onChange={onChange}
          onClose={onClose}
          open={Boolean(anchor)}
          value={math}
        />
      </React.Fragment>
    );
  }
);

FormulaBlock.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  math: PropTypes.string.isRequired
};

export default FormulaBlock;
