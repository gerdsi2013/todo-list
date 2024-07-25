import { Form } from "../../components/Form/form";
import * as Styles from "./styles";

export const Home: React.FC = () => {
  return (
    <Styles.Box>
      <Styles.Heading size={"3xl"}>TodoList</Styles.Heading>
      <Form />
    </Styles.Box>
  );
};
