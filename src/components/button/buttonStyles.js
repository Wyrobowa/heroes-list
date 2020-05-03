import styled from 'styled-components';

const Button = styled.button`
  padding: .75em 1.25em;
  cursor: pointer;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-radius: .5rem;
  
  ${({ theme, color }) => color === 'green' && `
    background-color: ${theme.colors.greenLight};
    border-color: ${theme.colors.greenLight};
  `};
`;

export {
  Button,
};
