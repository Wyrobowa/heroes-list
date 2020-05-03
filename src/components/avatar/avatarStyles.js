import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  
  ${({ size }) => size === 'small' && `
    width: 40px;
    height: 40px;
  `};
  
  ${({ size }) => size === 'medium' && `
    width: 90px;
    height: 90px;
  `};
  
  ${({ size }) => size === 'large' && `
    width: 200px;
    height: 200px;
  `};
`;

export {
  Avatar,
};
