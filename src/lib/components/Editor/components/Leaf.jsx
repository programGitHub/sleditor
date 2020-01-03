import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from 'lib/plugins/Bold';

/**
 * Leaf
 */
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    return <Bold {...attributes}>{children}</Bold>;
  }

  return <span {...attributes}>{children}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  leaf: PropTypes.object.isRequired
};

export default Leaf;
