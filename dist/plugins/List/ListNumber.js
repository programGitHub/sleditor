function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import AttachIcon from '@material-ui/icons/AttachFile';
import Box from '@material-ui/core/Box';
import ListEditor from './ListEditor';
import MenuButton from '../../components/MenuButton';
import { useFocused, useSlate, useSelected } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';
/**
 * ListNumber
 */

const ListNumber = ({
  attributes,
  children,
  element
}) => {
  const {
    follow
  } = element;
  const editor = useSlate();
  const focused = useFocused();
  const selected = useSelected();

  const handleFollow = () => {
    ListEditor.update(editor, {
      follow: !follow
    });
  };

  return React.createElement(Box, _extends({}, attributes, {
    position: "relative"
  }), React.createElement(Box, {
    contentEditable: false,
    left: -35,
    position: "absolute",
    top: -10
  }, React.createElement(Zoom, {
    in: focused && selected
  }, React.createElement(MenuButton, {
    color: follow ? 'secondary' : 'default',
    onClick: handleFollow
  }, React.createElement(AttachIcon, null)))), React.createElement(Box, {
    component: "ol",
    start: ListEditor.getStart(editor, element)
  }, children));
};

ListNumber.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.shape({
    follow: PropTypes.bool.isRequired
  }).isRequired
};
export default ListNumber;