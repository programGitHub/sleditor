import React from 'react';
import PropTypes from 'prop-types';
import { FormulaBlock, FormulaInline } from 'lib/plugins/Formula';
import { Highlight } from 'lib/plugins/Highlight';
import { Image } from 'lib/plugins/Image';
import { Link } from 'lib/plugins/Link';
import { ListBullet, ListItem, ListNumber } from 'lib/plugins/List';
import { Paragraph } from 'lib/plugins/Paragraph';
import { Title } from 'lib/plugins/Title';

/**
 * Element
 */
const Element = props => {
  switch (props.element.type) {
    case 'formula_block':
      return <FormulaBlock {...props} />;

    case 'formula_inline':
      return <FormulaInline {...props} />;

    case 'highlight':
      return <Highlight {...props} />;

    case 'image':
      return <Image {...props} />;

    case 'link':
      return <Link {...props} />;

    case 'list-bullet':
      return <ListBullet {...props} />;

    case 'list-item':
      return <ListItem {...props} />;

    case 'list-number':
      return <ListNumber {...props} />;

    case 'title':
      return <Title {...props} />;

    default:
      return <Paragraph {...props} />;
  }
};

Element.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};

export default Element;
