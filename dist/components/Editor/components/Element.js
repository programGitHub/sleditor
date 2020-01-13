import React from 'react';
import PropTypes from 'prop-types';
import { FormulaBlock, FormulaInline } from '../../../plugins/Formula';
import { Highlight } from '../../../plugins/Highlight';
import { Image } from '../../../plugins/Image';
import { Link } from '../../../plugins/Link';
import { ListBullet, ListItem, ListNumber } from '../../../plugins/List';
import { Paragraph } from '../../../plugins/Paragraph';
import { Title } from '../../../plugins/Title';
/**
 * Element
 */

const Element = props => {
  switch (props.element.type) {
    case 'formula_block':
      return React.createElement(FormulaBlock, props);

    case 'formula_inline':
      return React.createElement(FormulaInline, props);

    case 'highlight':
      return React.createElement(Highlight, props);

    case 'image':
      return React.createElement(Image, props);

    case 'link':
      return React.createElement(Link, props);

    case 'list-bullet':
      return React.createElement(ListBullet, props);

    case 'list-item':
      return React.createElement(ListItem, props);

    case 'list-number':
      return React.createElement(ListNumber, props);

    case 'title':
      return React.createElement(Title, props);

    default:
      return React.createElement(Paragraph, props);
  }
};

Element.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};
export default Element;