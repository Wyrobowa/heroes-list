import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  margin-top: .5em;
`;

const TableRow = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: .5em;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-flow: row;
  }
`;

const Header = styled(TableRow)`
  display: none;
  color: ${({ theme }) => theme.colors.grey60};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: flex;
  }
`;

const Row = styled(TableRow)`
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: .5em;
  background-color: ${({ theme }) => theme.colors.white};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 50%;
  }
`;

const NameAndType = styled.div`
  display: flex;
  flex-flow: column;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-flow: row;
    align-items: center;
    width: calc(100% - 40px);
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 1em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey30};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-right: 0;
  }
`;

const Cell = styled.div`
  margin-bottom: .25em;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 50%;
  }
`;

const Name = styled(Cell)`
  font-weight: bold;
  font-size: 1.2em;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: calc(50% - 40px);
  }
`;

const Description = styled(Cell)`
`;

const NameColumn = styled.div`
  width: calc(25% - 40px);
`;

const TypeColumn = styled.div`
  width: calc(25% + 40px);
`;

const DescriptionColumn = styled.div`
  width: 50%;
`;

export {
  Table,
  Header,
  Row,
  TitleWrapper,
  NameAndType,
  Avatar,
  Cell,
  Name,
  Description,
  NameColumn,
  TypeColumn,
  DescriptionColumn,
};
