import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Form from './Form';
import ImageEditor from './ImageEditor';
import { makeStyles } from '@material-ui/core/styles';
import Popover from 'lib/components/Popover';
import { useAnchor } from 'lib/hooks';
import { useFocused, useSelected, useSlate } from 'slate-react';

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
const Image = React.forwardRef(
  ({ align, children, id, url, ...props }, ref) => {
    const editor = useSlate();
    const [anchor, onClose, onOpen] = useAnchor();
    const classes = useStyles();
    const focused = useFocused();
    const selected = useSelected();

    const open = Boolean(anchor);
    const active = (focused && selected) || open;

    const handleChange = ({ target }) => {
      ImageEditor.update(editor, id, { [target.name]: target.value });
    };

    return (
      <React.Fragment>
        <Box
          {...props}
          display="flex"
          justifyContent={align}
          marginBottom={2}
          marginTop={2}
          onClick={onOpen}
          ref={ref}
        >
          <Box contentEditable={false}>
            <img
              alt=""
              className={clsx(classes.img, {
                [classes.active]: active
              })}
              src={url}
            />
          </Box>
          {children}
        </Box>
        <Popover
          anchorEl={anchor}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          onClose={onClose}
          open={open}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
        >
          <Box width={500}>
            <Form align={align} onChange={handleChange} update url={url} />
          </Box>
        </Popover>
      </React.Fragment>
    );
  }
);

Image.defaultProps = {
  align: 'center'
};

Image.propTypes = {
  align: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Image;
