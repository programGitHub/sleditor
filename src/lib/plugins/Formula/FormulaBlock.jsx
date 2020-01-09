import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormulaColor from './FormulaColor';
import FormulaEditor from './FormulaEditor';
import { MathBlock } from 'lib/components/Math';
import PopoverTextField from 'lib/components/PopoverTextField';
import { Transforms } from 'slate';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * FormulaBlock
 */
const FormulaBlock = ({ attributes, children, element }) => {
  const { math } = element;
  const { ref } = attributes;

  const editor = useSlate();
  const [anchor, onClose, onOpen] = useAnchor();
  const [selection, setSelection] = useState(null);

  const onChange = e => {
    e.preventDefault();
    FormulaEditor.update(editor, selection, { math: e.target.value });
  };

  const handleClose = (...args) => {
    Transforms.select(editor, selection);
    onClose(...args);
  };

  const handleOpen = () => {
    setSelection(editor.selection);
    onOpen({ target: ref.current });
  };

  return (
    <React.Fragment>
      <Box {...attributes} onDoubleClick={handleOpen}>
        <FormulaColor active={Boolean(anchor)}>
          <MathBlock align="center" paragraph variant="h5">
            {`\\displaystyle{${math}}`}
          </MathBlock>
        </FormulaColor>
        {children}
      </Box>
      <PopoverTextField
        anchorEl={anchor}
        onChange={onChange}
        onClose={handleClose}
        open={Boolean(anchor)}
        value={math}
      />
    </React.Fragment>
  );
};

FormulaBlock.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    math: PropTypes.string.isRequired
  }).isRequired
};

export default FormulaBlock;
