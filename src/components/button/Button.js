import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './buttonStyles';

const Button = ({
  type, color, font, border, onClick, className, disabled, children,
}) => (
  <Styled.Button
    type={type}
    color={color}
    font={font}
    border={border}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'blue', 'transparent']),
  font: PropTypes.oneOf(['white', 'blue', 'red', 'grey']),
  border: PropTypes.oneOf(['green', 'blue', 'red', 'transparent']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  color: 'blue',
  font: 'white',
  border: 'transparent',
  disabled: false,
  className: '',
};

export default Button;
