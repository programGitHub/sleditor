import React, { useContext, useMemo } from 'react';
import { MenuContext } from 'lib/components/Editor';
import Popover from 'lib/components/Popover';

function getPositions(position) {
  switch (position) {
    case 'bottom':
      return {
        anchor: { horizontal: 'center', vertical: 'top' },
        transform: { vertical: 'bottom', horizontal: 'center' }
      };

    case 'top':
    default:
      return {
        anchor: { horizontal: 'center', vertical: 'bottom' },
        transform: { vertical: 'top', horizontal: 'center' }
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

  return (
    <Popover
      {...props}
      anchorOrigin={position.anchor}
      transformOrigin={position.transform}
    />
  );
};

export default MenuPopover;
