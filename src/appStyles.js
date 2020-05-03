import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.size};
    color: ${({ theme }) => theme.colors.grey20};
  }
`;

const App = styled.div`
  min-height: 100vh;
  padding: .5em 1em;
  background-color: ${({ theme }) => theme.colors.grey95};
`;

export {
  GlobalStyles,
  App,
};
