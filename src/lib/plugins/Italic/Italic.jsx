import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    fontStyle: 'italic'
  }
});

/**
 * Bold
 */
const Bold = ({ attributes, children }) => {
  const classes = useStyles();

  return (
    <Typography
      {...attributes}
      className={classes.root}
      color="textSecondary"
      component="span"
      variant="inherit"
    >
      {children}
    </Typography>
  );
};

Bold.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Bold;
