import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormulaColor from './FormulaColor';
import FormulaEditor from './FormulaEditor';
import { MathBlock } from 'lib/components/Math';
import TextField from '@material-ui/core/TextField';
import { useSlate } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';

/**
 * FormulaBlock
 */
const FormulaBlock = ({ attributes, children, element }) => {
  const { math } = element;

  const editor = useSlate();

  const active = true;

  const onChange = e => {
    console.log('test');
    e.preventDefault();
    FormulaEditor.update(editor, { math: e.target.value });
  };

  return (
    <Box {...attributes} position="relative">
      <FormulaColor active={active}>
        <MathBlock align="center" paragraph variant="h5">
          {`\\displaystyle{${math}}`}
        </MathBlock>
      </FormulaColor>
      {children}

      <Box>
        <Zoom in={active}>
          <input onChange={onChange} value={math} />
        </Zoom>
      </Box>
    </Box>
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
