import styled from 'styled-components';

// Components
import Avatar from '../../components/avatar/Avatar';

const Table = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  margin-top: .5em;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-top: 2em;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 25px 25px 2.4em;
  grid-template-areas: 
    "avatar name"
    "avatar type"
    "description description";
  margin-bottom: .5em;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: 50px calc(25% - 50px) 25% auto;
    grid-template-rows: 3em;
    grid-template-areas: 
    "avatar name type description";
  }
`;

const Header = styled(TableRow)`
  display: none;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: grid;
    grid-template-columns: 25% 25% auto;
    grid-template-rows: unset;
    padding: 0 1em;
    color: ${({ theme }) => theme.colors.grey60};
    
    > *:first-child {
      margin-left: -1em;
    }
  }
`;

const Row = styled(TableRow)`
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
  cursor: pointer;
`;

const HeroAvatar = styled(Avatar)`
  grid-area: avatar;
`;

const Cell = styled.div`
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-self: center;
  }
`;

const Name = styled(Cell)`
  grid-area: name;
  font-weight: bold;
  font-size: 1.2em;
`;

const Type = styled(Cell)`
  grid-area: type;
`;

const Description = styled(Cell)`
  grid-area: description;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BottomBorder = styled.div`
  height: 1em;
`;

const BottomMessage = styled.div`
  font-size: 1.2em;
  text-align: center;
  margin: 1em;
`;

export {
  Table,
  Header,
  Row,
  HeroAvatar,
  Cell,
  Name,
  Type,
  Description,
  BottomBorder,
  BottomMessage,
};
