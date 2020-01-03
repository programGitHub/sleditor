import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import clsx from 'clsx';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import Popup from './Popup';
import { useFocused, useSelected } from 'slate-react';

const useStyles = makeStyles(theme => ({
  img: {
    boxShadow: theme.shadows[3],
    maxHeight: '20em',
    maxWidth: '100%',
    transition: 'box-shadow 150ms linear'
  },
  active: {
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}`
  }
}));

/**
 * Image
 */
const Image = React.forwardRef(({ align, children, url, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const focused = useFocused();
  const selected = useSelected();

  const active = (focused && selected) || open;

  return (
    <React.Fragment>
      <Box
        {...props}
        display="flex"
        justifyContent={align}
        position="relative"
        ref={ref}
      >
        <Box
          contentEditable={false}
          onClick={() => {
            setOpen(true);
          }}
        >
          <ClickAwayListener
            onClickAway={() => {
              setOpen(false);
            }}
          >
            <Popup open={open}>
              <Form align={align} url={url} />
            </Popup>
          </ClickAwayListener>
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
    </React.Fragment>
  );
});

Image.defaultProps = {
  align: 'center'
};

Image.propTypes = {
  align: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default Image;
