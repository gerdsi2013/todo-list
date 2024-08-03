import { CardBody, Stack, StackDivider, Button, Flex } from "@chakra-ui/react";
import * as Styles from "./styles.ts";
import { Link } from "react-router-dom";

type TaskTitleProps = {
  title: string;
  details: string;
  // onclick: () => void;
};

export const TaskTitleList = (props: TaskTitleProps) => {
  return (
    <Styles.Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Flex justifyContent="space-between" alignItems={"center"}>
            <Styles.Heading size="xs">
              <Link to={`/details/${props.details}`}>{props.title}</Link>
            </Styles.Heading>
            <Button>Remove</Button>
          </Flex>
        </Stack>
      </CardBody>
    </Styles.Card>
  );
};
