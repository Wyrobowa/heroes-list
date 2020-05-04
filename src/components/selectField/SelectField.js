import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, label, selectedValue, options, disabledOptions, itemIndex, itemSlug, onChange, disabledSelect,
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
      data-index={itemIndex}
      data-slug={itemSlug}
      disabled={disabledSelect}
    >
      {options && options.map(option => (
        <option
          key={option}
          value={option}
          disabled={disabledOptions[selectedValue].includes(option)}
        >
          {option}
        </option>
      ))}
    </Styled.Select>
  </Styled.SelectField>
);

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledOptions: PropTypes.shape({}).isRequired,
  selectedValue: PropTypes.string,
  itemIndex: PropTypes.number.isRequired,
  itemSlug: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabledSelect: PropTypes.string,
};

SelectField.defaultProps = {
  label: null,
  selectedValue: 'open',
  disabledSelect: '',
};

export default SelectField;
