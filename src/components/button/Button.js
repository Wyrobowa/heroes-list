import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './buttonStyles';

const Button = ({
  type, color, font, onClick, children,
}) => (
  <Styled.Button
    type={type}
    color={color}
    font={font}
    onClick={onClick}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue', 'transparent']).isRequired,
  font: PropTypes.oneOf(['white', 'red']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  font: 'white',
};

export default Button;
