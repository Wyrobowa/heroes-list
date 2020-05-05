import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, label, selectedValue, options, onChange,
}) => (
  <Styled.SelectField>
    {label && (
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
    )}
    <Styled.Select
      id={id}
      name={id}
      onChange={onChange}
      value={selectedValue}
    >
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

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  label: null,
  selectedValue: 'open',
};

export default SelectField;
