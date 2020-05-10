import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './textFieldStyles';

const TextField = ({
  fieldType, labelText, id, value, onChange, onBlur, className, isValid, required,
}) => (
  <Styled.TextField>
    {labelText && (
      <Styled.Label htmlFor={id}>{labelText}</Styled.Label>
    )}
    {fieldType === 'input' && (
      <Styled.Input
        id={id}
        name={id}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        isValid={isValid}
        required={required}
      />
    )}
    {fieldType === 'textarea' && (
      <Styled.TextArea
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ''}
        className={className}
        isValid={isValid}
        required={required}
      />
    )}
  </Styled.TextField>
);

TextField.propTypes = {
  fieldType: PropTypes.oneOf(['input', 'textarea']),
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
};

TextField.defaultProps = {
  fieldType: 'input',
  value: '',
  className: '',
  isValid: true,
  required: false,
};

export default TextField;
