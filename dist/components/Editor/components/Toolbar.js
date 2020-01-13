import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBold } from '../../../plugins/Bold';
import { Button as ButtonFormula } from '../../../plugins/Formula';
import { Button as ButtonHighlight } from '../../../plugins/Highlight';
import { Button as ButtonImage } from '../../../plugins/Image';
import { Button as ButtonLink } from '../../../plugins/Link';
import { Button as ButtonTitle } from '../../../plugins/Title';
import { ButtonBullet, ButtonNumber } from '../../../plugins/List';
import MuiToolbar from '@material-ui/core/Toolbar';
/**
 * Toolbar
 */

const Toolbar = ({
  children
}) => React.createElement(MuiToolbar, null, React.createElement(ButtonBold, null), React.createElement(ButtonTitle, null), React.createElement(ButtonLink, null), React.createElement(ButtonFormula, null), React.createElement(ButtonImage, null), React.createElement(ButtonHighlight, null), React.createElement(ButtonBullet, null), React.createElement(ButtonNumber, null), children);

Toolbar.propTypes = {
  children: PropTypes.node
};
export default Toolbar;