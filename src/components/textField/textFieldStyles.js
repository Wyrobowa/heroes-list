import styled from 'styled-components';

const TextField = styled.div`
  margin-top: 1em;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.grey60};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 3em;
  box-sizing: border-box;
  padding: .5em 1em;
  font-size: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
  
  ${({ theme, isValid }) => !isValid && `
    border-color: ${theme.colors.red};
  `}
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 9em;
  box-sizing: border-box;
  padding: .5em 1em;
  font-size: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5rem;
  
  ${({ theme, isValid }) => !isValid && `
    border-color: ${theme.colors.red};
  `}
`;

export {
  TextField,
  Label,
  Input,
  TextArea,
};
