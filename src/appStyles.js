import styled, { createGlobalStyle } from 'styled-components';
import styledNormalized from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${styledNormalized}

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
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 2em 4em;
  }
`;

export {
  GlobalStyles,
  App,
};
