import React from 'react';

// Styles
import * as Styled from './validationFieldStyles';

const ValidationField = WrappedComponent => ({
  value, id, fieldType, labelText, isValid = true, onChange, onBlur, options, selectedValue, typeId,
}) => (
  <>
    <WrappedComponent
      fieldType={fieldType}
      labelText={labelText}
      onChange={onChange}
      id={id}
      value={value}
      required
      onBlur={onBlur}
      isValid={isValid}
      options={options}
      selectedValue={selectedValue}
      typeId={typeId}
    />
    {!isValid && (
      <Styled.ErrorMessage>Field can&apos;t be empty!</Styled.ErrorMessage>
    )}
  </>
);

export default ValidationField;
