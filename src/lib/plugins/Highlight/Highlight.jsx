import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { blue, orange, grey } from '@material-ui/core/colors';
import CautionIcon from '@material-ui/icons/ErrorOutline';
import DefaultIcon from '@material-ui/icons/NotInterested';
import Form from './Form';
import HelpIcon from '@material-ui/icons/HelpOutline';
import Popup from './Popup';
import { useFocused, useSelected } from 'slate-react';

export const categories = {
  caution: { color: orange[200], icon: <CautionIcon /> },
  default: { color: grey[200], icon: <DefaultIcon /> },
  info: { color: blue[200], icon: <HelpIcon /> }
};

function getColor(category) {
  return Object.hasOwnProperty.call(categories, category)
    ? categories[category].color
    : categories.default.color;
}

/**
 * Highlight
 */
const Highlight = React.forwardRef(({ category, children, ...props }, ref) => {
  const focused = useFocused();
  const selected = useSelected();

  return (
    <Box
      {...props}
      bgcolor={getColor(category)}
      borderRadius={4}
      padding={2}
      paddingBottom={0.1}
      position="relative"
      ref={ref}
    >
      <Popup open={focused && selected}>
        <Form category={category} />
      </Popup>
      {children}
    </Box>
  );
});

Highlight.defaultProps = {
  category: 'default'
};

Highlight.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Highlight;
