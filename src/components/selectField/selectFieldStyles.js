import styled from 'styled-components';

const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.grey60};
`;

const Select = styled.select`
  height: 3em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
`;

export {
  SelectField,
  Label,
  Select,
};
