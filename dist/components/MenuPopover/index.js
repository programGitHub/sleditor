function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useMemo } from 'react';
import { MenuContext } from '../Editor';
import Popover from '../Popover';

function getPositions(position) {
  switch (position) {
    case 'bottom':
      return {
        anchor: {
          horizontal: 'center',
          vertical: 'top'
        },
        transform: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      };

    case 'top':
    default:
      return {
        anchor: {
          horizontal: 'center',
          vertical: 'bottom'
        },
        transform: {
          vertical: 'top',
          horizontal: 'center'
        }
      };
  }
}
/**
 * MenuPopover
 */


const MenuPopover = props => {
  const context = useContext(MenuContext);
  const position = useMemo(() => {
    return getPositions(context.position);
  }, [context.position]);
  return React.createElement(Popover, _extends({}, props, {
    anchorOrigin: position.anchor,
    transformOrigin: position.transform
  }));
};

export default MenuPopover;