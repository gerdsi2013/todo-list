import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import * as Styles from "./styles.ts";

export const TableList = () => {
  return (
    <Styles.TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>title list</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>title</Td>
            <Td isNumeric>button</Td>
          </Tr>
        </Tbody>
      </Table>
    </Styles.TableContainer>
  );
};
