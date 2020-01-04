import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import KateX from 'katex';
import Typography from '@material-ui/core/Typography';
import 'katex/dist/katex.min.css';

/**
 * MathComponent
 */
const MathComponent = ({ children, component, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      KateX.render(children, ref.current);
    }
  }, [children]);

  return <Typography {...props} component={component} ref={ref} />;
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
