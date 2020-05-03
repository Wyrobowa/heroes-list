import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 2em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey30};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-right: 0;
  }
`;

const Cell = styled.div`
  margin-bottom: 2em;
`;

const Name = styled(Cell)`
  margin-bottom: .5em;
  font-weight: bold;
  font-size: 1.2em;
`;

export {
  Hero,
  Avatar,
  Cell,
  Name,
};
