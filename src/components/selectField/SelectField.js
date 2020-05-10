import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, labelText, selectedValue, options, onChange, onBlur, className, isValid,
}) => {
  const defaultOptionText = 'Select type';

  return (
    <Styled.SelectField>
      {labelText && (
        <Styled.Label htmlFor={id}>{labelText}</Styled.Label>
      )}
      <Styled.Select
        id={id}
        name={id}
        onChange={onChange}
        value={selectedValue}
        onBlur={onBlur}
        className={className}
        isValid={isValid}
      >
        <option value="default">{defaultOptionText}</option>
        {options && options.map(option => (
          <option
            key={option.id}
            value={option.name}
            data-id={option.id}
          >
            {option.name}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectField>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  className: PropTypes.string,
};

SelectField.defaultProps = {
  labelText: null,
  selectedValue: 'default',
  className: '',
  isValid: true,
};

export default SelectField;
