import React from 'react';

// Styles
import * as Styled from './validationInputStyles';

const ValidationInput = WrappedComponent => ({
  value, id, labelText, isValid = true, onChange, onBlur,
}) => (
  <>
    <WrappedComponent
      labelText={labelText}
      onChange={onChange}
      id={id}
      value={value}
      required
      onBlur={onBlur}
      isValid={isValid}
    />
    {!isValid && (
      <Styled.ErrorMessage>Field can&apos;t be empty!</Styled.ErrorMessage>
    )}
  </>
);

export default ValidationInput;
