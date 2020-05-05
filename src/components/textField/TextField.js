import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './textFieldStyles';

const TextField = ({
  fieldType, labelText, id, value, onChange, className,
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
        className={className}
      />
    )}
    {fieldType === 'textarea' && (
      <Styled.TextArea
        id={id}
        name={id}
        onChange={onChange}
        value={value || ''}
        className={className}
      />
    )}
  </Styled.TextField>
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  fieldType: PropTypes.oneOf(['input', 'textarea']),
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

TextField.defaultProps = {
  value: '',
  fieldType: 'input',
  className: '',
};

export default TextField;
