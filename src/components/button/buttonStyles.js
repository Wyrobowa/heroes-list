import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: .75rem 1.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-radius: .5rem;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: auto;
  }
  
  // Backgrounds colors
  
  ${({ theme, color }) => color === 'green' && `
    background-color: ${theme.colors.greenLight};
    border-color: ${theme.colors.greenLight};
  `};
  
  ${({ color }) => color === 'transparent' && `
    background-color: transparent;
    border-color: transparent;
  `};
  
  // Fonts colors
  
  ${({ theme, font }) => font === 'white' && `
    color: ${theme.colors.white};
  `};
  
  ${({ theme, font }) => font === 'blue' && `
    color: ${theme.colors.blueLight};
  `};
  
  ${({ theme, font }) => font === 'red' && `
    color: ${theme.colors.redLight};
  `};
  
  ${({ theme, font }) => font === 'grey' && `
    color: ${theme.colors.grey60};
  `};
  
  // Borders colors
  
  ${({ theme, border }) => border === 'blue' && `
    border-color: ${theme.colors.blueLight};
  `};
`;

export {
  Button,
};
