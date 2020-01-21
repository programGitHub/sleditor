import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBold } from 'lib/plugins/Bold';
import { Button as ButtonFormula } from 'lib/plugins/Formula';
import { Button as ButtonHighlight } from 'lib/plugins/Highlight';
import { Button as ButtonImage } from 'lib/plugins/Image';
import { Button as ButtonItalic } from 'lib/plugins/Italic';
import { Button as ButtonLink } from 'lib/plugins/Link';
import { Button as ButtonTitle } from 'lib/plugins/Title';
import { ButtonBullet, ButtonNumber } from 'lib/plugins/List';
import MuiToolbar from '@material-ui/core/Toolbar';

export const MenuContext = React.createContext({ position: 'top' });

/**
 * Toolbar
 */
const Toolbar = ({ children, position }) => (
  <MenuContext.Provider value={{ position }}>
    <MuiToolbar>
      <ButtonBold />
      <ButtonItalic />
      <ButtonTitle />
      <ButtonLink />
      <ButtonFormula />
      <ButtonImage />
      <ButtonHighlight />
      <ButtonBullet />
      <ButtonNumber />
      {children}
    </MuiToolbar>
  </MenuContext.Provider>
);

Toolbar.defaultProps = {
  position: 'top'
};

Toolbar.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['bottom', 'top']).isRequired
};

export default Toolbar;
