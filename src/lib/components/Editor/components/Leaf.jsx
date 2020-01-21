import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from 'lib/plugins/Bold';
import { Italic } from 'lib/plugins/Italic';

/**
 * Leaf
 */
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    return <Bold attributes={attributes}>{children}</Bold>;
  }

  if (leaf.italic) {
    return <Italic attributes={attributes}>{children}</Italic>;
  }

  return <span {...attributes}>{children}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  leaf: PropTypes.object.isRequired
};

export default Leaf;
