function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormulaColor from './FormulaColor';
import FormulaEditor from './FormulaEditor';
import { MathBlock } from '../../components/Math';
import PopoverTextField from '../../components/PopoverTextField';
import { Transforms } from 'slate';
import { useAnchor } from '../../hooks';
import { useSlate } from 'slate-react';
/**
 * FormulaBlock
 */

const FormulaBlock = ({
  attributes,
  children,
  element
}) => {
  const {
    math
  } = element;
  const {
    ref
  } = attributes;
  const editor = useSlate();
  const [anchor, onClose, onOpen] = useAnchor();
  const [selection, setSelection] = useState(null);

  const onChange = e => {
    e.preventDefault();
    FormulaEditor.update(editor, selection, {
      math: e.target.value
    });
  };

  const handleClose = (...args) => {
    Transforms.select(editor, selection);
    onClose(...args);
  };

  const handleOpen = () => {
    setSelection(editor.selection);
    onOpen({
      target: ref.current
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(Box, _extends({}, attributes, {
    onDoubleClick: handleOpen
  }), React.createElement(FormulaColor, {
    active: Boolean(anchor)
  }, React.createElement(MathBlock, {
    align: "center",
    paragraph: true,
    variant: "h5"
  }, `\\displaystyle{${math}}`)), children), React.createElement(PopoverTextField, {
    anchorEl: anchor,
    onChange: onChange,
    onClose: handleClose,
    open: Boolean(anchor),
    value: math
  }));
};

FormulaBlock.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    math: PropTypes.string.isRequired
  }).isRequired
};
export default FormulaBlock;