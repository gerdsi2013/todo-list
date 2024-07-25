import { PlusSquareIcon } from "@chakra-ui/icons";
import * as Styles from "./styles";

export const Form: React.FC = () => {
  return (
    <Styles.FormControl>
      <Styles.Input placeholder="title..." />
      <Styles.TextArea placeholder="Description " />
      <Styles.Box>
        <Styles.Text>tste</Styles.Text>
        <Styles.IconButton
          colorScheme="teal"
          aria-label="plus square"
          icon={<PlusSquareIcon />}
        />
      </Styles.Box>
    </Styles.FormControl>
  );
};
