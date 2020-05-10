import styled from 'styled-components';

const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.grey60};
`;

const Select = styled.select`
  height: 3em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  padding: .5em 1em;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
  
   ${({ theme, value }) => value === '' && `
    color: ${theme.colors.grey60};
  `}
   
   ${({ theme, isValid }) => !isValid && `
    border-color: ${theme.colors.red};
  `}
`;

export {
  SelectField,
  Label,
  Select,
};
