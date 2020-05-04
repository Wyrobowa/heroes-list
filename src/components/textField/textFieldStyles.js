import styled from 'styled-components';

const TextField = styled.div`
  margin-bottom: 1em;
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
  padding: .5em;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 9em;
  box-sizing: border-box;
  padding: .5em;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5rem;
`;

export {
  TextField,
  Label,
  Input,
  TextArea,
};
