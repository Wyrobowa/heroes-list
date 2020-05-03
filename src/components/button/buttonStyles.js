import styled from 'styled-components';

const Button = styled.button`
      padding: .75em 1.25em;
  cursor: pointer;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  border: 1px solid;
  border-radius: .5rem;
  
  ${({ color }) => color === 'green' && `
    background-color: #28a745;
    border-color: #c3e6cb;
  `};
`;

export {
  Button,
};
