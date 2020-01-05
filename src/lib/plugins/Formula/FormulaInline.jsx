import React from 'react';
import PropTypes from 'prop-types';
import FormulaEditor from './FormulaEditor';
import { MathInline } from 'lib/components/Math';
import PopoverTextField from 'lib/components/PopoverTextField';
import { useAnchor } from 'lib/hooks';
import { useSlate } from 'slate-react';

/**
 * FormulaInline
 */
const FormulaInline = React.forwardRef(
  ({ children, id, math, ...props }, ref) => {
    const editor = useSlate();
    const [anchor, onClose, onOpen] = useAnchor();

    const onChange = e => {
      e.preventDefault();
      FormulaEditor.update(editor, id, { math: e.target.value });
    };

    return (
      <React.Fragment>
        <span
          {...props}
          onClick={() => {
            onOpen({ target: ref.current });
          }}
          ref={ref}
        >
          <MathInline>{math}</MathInline>
          {children}
        </span>
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

FormulaInline.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  math: PropTypes.string.isRequired
};

export default FormulaInline;
