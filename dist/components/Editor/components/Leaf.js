import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from '../../../plugins/Bold';
/**
 * Leaf
 */

const Leaf = ({
  attributes,
  children,
  leaf
}) => {
  if (leaf.bold) {
    return React.createElement(Bold, {
      attributes: attributes
    }, children);
  }

  return React.createElement("span", attributes, children);
};

Leaf.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  leaf: PropTypes.object.isRequired
};
export default Leaf;