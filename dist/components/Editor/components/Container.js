import React from 'react';
import PropTypes from 'prop-types';
import MuiContainer from '@material-ui/core/Container';
/**
 * Container
 */

const Container = ({
  children
}) => React.createElement(MuiContainer, {
  maxWidth: "md"
}, children);

Container.propTypes = {
  children: PropTypes.node
};
export default Container;