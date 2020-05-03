import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: .75em 1.25em;
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
  
  ${({ theme, color }) => color === 'green' && `
    background-color: ${theme.colors.greenLight};
    border-color: ${theme.colors.greenLight};
  `};
  
  ${({ color }) => color === 'transparent' && `
    background-color: transparent;
    border-color: transparent;
  `};
  
  ${({ theme, font }) => font === 'white' && `
    color: ${theme.colors.white};
  `};
  
  ${({ theme, font }) => font === 'red' && `
    color: ${theme.colors.redLight};
  `};
`;

export {
  Button,
};
