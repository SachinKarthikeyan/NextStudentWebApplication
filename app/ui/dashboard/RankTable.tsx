import React from 'react';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface TableRow {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string; // New column
}

interface RankTableProps {
  heading: string;
  content: TableRow[];
}

interface CustomRankTableProps {
  width: string;
  height: string;
}

const RankTable: React.FC<RankTableProps & CustomRankTableProps> = ({ heading, content, width, height }) => {
  return (
    <TableContainer width={width} height={height}>
      <Table variant="simple" size="lg">
        <TableCaption>{heading}</TableCaption>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Name</Th>
            <Th >College Name</Th>
            <Th isNumeric>Percentage</Th> {/* New column */}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((item) => (
            <Tr key={item.id}>
              <Td>{item.col1}</Td>
              <Td>{item.col2}</Td>
              <Td isNumeric>{item.col3}</Td>
              <Td>{item.col4}</Td> {/* New column */}
            </Tr>
          ))}
        </Tbody>
       
      </Table>
    </TableContainer>
  );
};

export default RankTable;
