import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import KateX from 'katex';
import Typography from '@material-ui/core/Typography';
import 'katex/dist/katex.min.css';

/**
 * MathComponent
 */
const MathComponent = ({ children, component, ...props }) => {
  const ref = useRef(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    try {
      if (ref.current) {
        KateX.render(children, ref.current);
      }
      setErr(null);
    } catch (e) {
      setErr(e.message);
    }
  }, [children]);

  console.log(err);

  return (
    <Typography
      variant="inherit"
      {...props}
      color={err ? 'error' : 'inherit'}
      component={component}
      ref={ref}
    >
      {err}
    </Typography>
  );
};

MathComponent.defaultProps = {
  children: '',
  component: 'span'
};

MathComponent.propTypes = {
  children: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
};

export default MathComponent;
