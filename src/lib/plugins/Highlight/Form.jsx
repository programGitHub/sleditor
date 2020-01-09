import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { categories } from './Highlight';
import HighlightEditor from './HighlightEditor';
import MenuButton from 'lib/components/MenuButton';
import { useSlate } from 'slate-react';

/**
 * Form
 */
const Form = ({ category }) => {
  const editor = useSlate();
  const arr = useMemo(
    () =>
      Object.keys(categories).map(e => ({
        ...categories[e],
        id: e
      })),
    []
  );

  const handleCategory = value => () => {
    HighlightEditor.update(editor, { category: value });
  };

  return (
    <Box alignItems="center" display="flex">
      {arr.map(({ icon, id }) => (
        <MenuButton
          color={category === id ? 'secondary' : 'default'}
          key={id}
          onClick={handleCategory(id)}
          size="small"
        >
          {icon}
        </MenuButton>
      ))}
    </Box>
  );
};

Form.propTypes = {
  category: PropTypes.string.isRequired
};

export default Form;
