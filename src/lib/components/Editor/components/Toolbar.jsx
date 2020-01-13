import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBold } from 'lib/plugins/Bold';
import { Button as ButtonFormula } from 'lib/plugins/Formula';
import { Button as ButtonHighlight } from 'lib/plugins/Highlight';
import { Button as ButtonImage } from 'lib/plugins/Image';
import { Button as ButtonLink } from 'lib/plugins/Link';
import { Button as ButtonTitle } from 'lib/plugins/Title';
import { ButtonBullet, ButtonNumber } from 'lib/plugins/List';
import MuiToolbar from '@material-ui/core/Toolbar';

/**
 * Toolbar
 */
const Toolbar = ({ children }) => (
  <MuiToolbar>
    <ButtonBold />
    <ButtonTitle />
    <ButtonLink />
    <ButtonFormula />
    <ButtonImage />
    <ButtonHighlight />
    <ButtonBullet />
    <ButtonNumber />
    {children}
  </MuiToolbar>
);

Toolbar.propTypes = {
  children: PropTypes.node
};

export default Toolbar;
