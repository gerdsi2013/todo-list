import { Form } from "../../components/Form/form";
import { TableList } from "../../components/tableList/tableList";
import * as Styles from "./styles";

export const Home: React.FC = () => {
  return (
    <Styles.Box>
      <Styles.Heading size="3xl">TodoList</Styles.Heading>
      <Form />
      <TableList list="teste" />
    </Styles.Box>
  );
};
