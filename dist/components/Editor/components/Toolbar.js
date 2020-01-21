import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBold } from '../../../plugins/Bold';
import { Button as ButtonFormula } from '../../../plugins/Formula';
import { Button as ButtonHighlight } from '../../../plugins/Highlight';
import { Button as ButtonImage } from '../../../plugins/Image';
import { Button as ButtonItalic } from '../../../plugins/Italic';
import { Button as ButtonLink } from '../../../plugins/Link';
import { Button as ButtonTitle } from '../../../plugins/Title';
import { ButtonBullet, ButtonNumber } from '../../../plugins/List';
import MuiToolbar from '@material-ui/core/Toolbar';
export const MenuContext = React.createContext({
  position: 'top'
});
/**
 * Toolbar
 */

const Toolbar = ({
  children,
  position
}) => React.createElement(MenuContext.Provider, {
  value: {
    position
  }
}, React.createElement(MuiToolbar, null, React.createElement(ButtonBold, null), React.createElement(ButtonItalic, null), React.createElement(ButtonTitle, null), React.createElement(ButtonLink, null), React.createElement(ButtonFormula, null), React.createElement(ButtonImage, null), React.createElement(ButtonHighlight, null), React.createElement(ButtonBullet, null), React.createElement(ButtonNumber, null), children));

Toolbar.defaultProps = {
  position: 'top'
};
Toolbar.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['bottom', 'top']).isRequired
};
export default Toolbar;