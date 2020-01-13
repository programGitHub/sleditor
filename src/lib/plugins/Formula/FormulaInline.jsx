import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormulaColor from './FormulaColor';
import FormulaEditor from './FormulaEditor';
import { MathInline } from 'lib/components/Math';
import PopoverTextField from 'lib/components/PopoverTextField';
import { Transforms } from 'slate';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * FormulaInline
 */
const FormulaInline = ({ attributes, children, element }) => {
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
      <span {...attributes} onDoubleClick={handleOpen}>
        <FormulaColor active={Boolean(anchor)}>
          <MathInline>{math}</MathInline>
        </FormulaColor>
        {children}
      </span>

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

FormulaInline.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    math: PropTypes.string.isRequired
  }).isRequired
};

export default FormulaInline;
