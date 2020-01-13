function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { blue, orange, grey } from '@material-ui/core/colors';
import CautionIcon from '@material-ui/icons/ErrorOutline';
import DefaultIcon from '@material-ui/icons/NotInterested';
import Form from './Form';
import HelpIcon from '@material-ui/icons/HelpOutline';
import Popup from './Popup';
import { useFocused, useSelected } from 'slate-react';
export const categories = {
  caution: {
    color: orange[200],
    icon: React.createElement(CautionIcon, null)
  },
  default: {
    color: grey[200],
    icon: React.createElement(DefaultIcon, null)
  },
  info: {
    color: blue[200],
    icon: React.createElement(HelpIcon, null)
  }
};

function getColor(category) {
  return Object.hasOwnProperty.call(categories, category) ? categories[category].color : categories.default.color;
}
/**
 * Highlight
 */


const Highlight = ({
  attributes,
  children,
  element
}) => {
  const {
    category
  } = element;
  const focused = useFocused();
  const selected = useSelected();
  return React.createElement(Box, _extends({}, attributes, {
    bgcolor: getColor(category),
    borderRadius: 4,
    padding: 2,
    paddingBottom: 0.1,
    position: "relative"
  }), React.createElement(Popup, {
    open: focused && selected
  }, React.createElement(Form, {
    category: category
  })), children);
};

Highlight.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.shape({
    category: PropTypes.string.isRequired
  }).isRequired
};
export default Highlight;