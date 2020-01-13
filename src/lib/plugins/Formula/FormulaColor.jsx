import React, { Children } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useFocused, useSelected } from 'slate-react';

const useStyles = makeStyles(theme => ({
  active: {
    color: theme.palette.secondary.light
  },
  root: {
    transition: 'color 150ms linear'
  }
}));

/**
 * FormulaColor
 */
const FormulaColor = ({ active, children }) => {
  const classes = useStyles();
  const focused = useFocused();
  const selected = useSelected();

  const clsProp = clsx(classes.root, {
    [classes.active]: active || (focused && selected)
  });

  return Children.map(children, child =>
    React.cloneElement(child, { className: clsProp })
  );
};

FormulaColor.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default FormulaColor;
