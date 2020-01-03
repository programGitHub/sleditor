import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'lib/plugins/Highlight';
import { Image } from 'lib/plugins/Image';
import { Link } from 'lib/plugins/Link';
import { ListBullet, ListItem, ListNumber } from 'lib/plugins/List';
import { Paragraph } from 'lib/plugins/Paragraph';
import { Title } from 'lib/plugins/Title';

/**
 * Element
 */
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'highlight':
      return (
        <Highlight {...attributes} {...element}>
          {children}
        </Highlight>
      );

    case 'image':
      return (
        <Image {...attributes} {...element}>
          {children}
        </Image>
      );

    case 'link':
      return (
        <Link {...attributes} {...element}>
          {children}
        </Link>
      );

    case 'list-bullet':
      return (
        <ListBullet {...attributes} {...element}>
          {children}
        </ListBullet>
      );

    case 'list-item':
      return (
        <ListItem {...attributes} {...element}>
          {children}
        </ListItem>
      );

    case 'list-number':
      return (
        <ListNumber {...attributes} {...element}>
          {children}
        </ListNumber>
      );

    case 'title':
      return (
        <Title {...attributes} {...element}>
          {children}
        </Title>
      );

    default:
      return (
        <Paragraph {...attributes} {...element}>
          {children}
        </Paragraph>
      );
  }
};

Element.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};

export default Element;
