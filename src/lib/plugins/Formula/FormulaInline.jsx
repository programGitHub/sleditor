import React from 'react';
import PropTypes from 'prop-types';
import { MathInline } from 'lib/components/Math';

/**
 * FormulaInline
 */
const FormulaInline = React.forwardRef(({ children, math, ...props }, ref) => (
  <span {...props} ref={ref}>
    <MathInline>{math}</MathInline>
    {children}
  </span>
));

FormulaInline.propTypes = {
  children: PropTypes.node.isRequired,
  math: PropTypes.string.isRequired
};

export default FormulaInline;
