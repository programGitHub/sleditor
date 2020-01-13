function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import KateX from 'katex';
import Typography from '@material-ui/core/Typography';
import 'katex/dist/katex.min.css';
/**
 * MathComponent
 */

const MathComponent = ({
  children,
  component,
  ...props
}) => {
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
  return React.createElement(Typography, _extends({
    variant: "inherit"
  }, props, {
    color: err ? 'error' : undefined,
    component: component,
    ref: ref
  }), err);
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