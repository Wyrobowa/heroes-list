import styled from 'styled-components';

// Components
import Icon from '../icon/Icon';

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

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 0.5em);
  right: 1em;
  color: ${({ theme }) => theme.colors.grey60}
`;

const Select = styled.select`
  width: 100%;
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
  SelectWrapper,
  SelectIcon,
  Select,
};
