import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './buttonStyles';

const Button = ({
  type, color, onClick, children,
}) => (
  <Styled.Button
    type={type}
    color={color}
    onClick={onClick}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default Button;
