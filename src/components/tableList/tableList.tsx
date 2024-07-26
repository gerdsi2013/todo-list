import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import * as Styles from "./styles.ts";

type TableProps = {
  list: string;
};
export const TableList = ({ list }: TableProps) => {
  return (
    <Styles.TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>list the title</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{list}</Td>
            <Td isNumeric>button</Td>
          </Tr>
        </Tbody>
      </Table>
    </Styles.TableContainer>
  );
};
