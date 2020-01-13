function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormulaColor from './FormulaColor';
import FormulaEditor from './FormulaEditor';
import { MathBlock } from '../../components/Math';
import TextField from '@material-ui/core/TextField';
import { useSlate } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';
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
  const editor = useSlate();
  const active = true;

  const onChange = e => {
    console.log('test');
    e.preventDefault();
    FormulaEditor.update(editor, {
      math: e.target.value
    });
  };

  return React.createElement(Box, _extends({}, attributes, {
    position: "relative"
  }), React.createElement(FormulaColor, {
    active: active
  }, React.createElement(MathBlock, {
    align: "center",
    paragraph: true,
    variant: "h5"
  }, `\\displaystyle{${math}}`)), children, React.createElement(Box, null, React.createElement(Zoom, {
    in: active
  }, React.createElement("input", {
    onChange: onChange,
    value: math
  }))));
};

FormulaBlock.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    math: PropTypes.string.isRequired
  }).isRequired
};
export default FormulaBlock;