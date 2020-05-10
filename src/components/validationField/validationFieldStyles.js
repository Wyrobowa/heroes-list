import styled from 'styled-components';

const ErrorMessage = styled.div`
  margin-top: .5em;
  font-size: .75em;
  color: ${({ theme }) => theme.colors.red};
`;

export {
  ErrorMessage,
};
