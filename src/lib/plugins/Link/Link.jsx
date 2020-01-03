import React from 'react';
import PropTypes from 'prop-types';
import MuiLink from '@material-ui/core/Link';

/**
 * Link
 */
const Link = React.forwardRef(({ children, url, ...props }, ref) => (
  <MuiLink {...props} href={url} ref={ref}>
    {children}
  </MuiLink>
));

Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
