import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Form from './Form';
// import ImageEditor from './ImageEditor';
import { makeStyles } from '@material-ui/core/styles';
import Popover from 'lib/components/Popover';
// import { Transforms } from 'slate';
import { useFocused, useSelected, useSlate } from 'slate-react';
import Zoom from '@material-ui/core/Zoom';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  img: {
    boxShadow: theme.shadows[3],
    maxHeight: '20em',
    maxWidth: '100%',
    minHeight: 100,
    minWidth: 100,
    transition: 'box-shadow 150ms linear'
  },
  active: {
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}`
  }
}));

/**
 * Image
 */
const Image = ({ attributes, children, element }) => {
  const { align, url } = element;

  const editor = useSlate();
  const classes = useStyles();
  const focused = useFocused();
  const selected = useSelected();
  const active = focused && selected;
  const [test, setTest] = React.useState(false);

  const handleChange = ({ target }) => {
    console.log('value', target.value, editor);
    // ImageEditor.update(editor, { [target.name]: target.value });
  };

  React.useEffect(() => {
    if (focused) {
    }
    if ((focused && selected) !== test) {
      if (focused) setTest(active);
    }
  }, [focused, selected]);

  console.log(active, test);

  return (
    <Box
      {...attributes}
      display="flex"
      justifyContent={align}
      marginBottom={2}
      marginTop={2}
      position="relative"
    >
      <Box contentEditable={false}>
        <img
          alt=""
          className={clsx(classes.img, {
            [classes.active]: test
          })}
          src={url}
        />
        {test && (
          <TextField
            defaultValue="test"
            onKeyDown={() => {
              console.log(editor.selection);
            }}
          />
        )}
      </Box>
      {children}
    </Box>
  );
};

Image.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node,
  element: PropTypes.shape({
    align: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Image;
