import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-flow: column;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row;
`;

const TableHeader = styled(Row)`
  
`;

const TableRow = styled(Row)`
  
`;

export {
  Table,
  TableHeader,
  TableRow,
};
