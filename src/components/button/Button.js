import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './buttonStyles';

const Button = ({
  type, color, font, onClick, className, children,
}) => (
  <Styled.Button
    type={type}
    color={color}
    font={font}
    onClick={onClick}
    className={className}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue', 'transparent']),
  font: PropTypes.oneOf(['white', 'red', 'grey']),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  color: 'blue',
  font: 'white',
  className: '',
};

export default Button;
