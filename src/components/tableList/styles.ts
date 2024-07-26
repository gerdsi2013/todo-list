import styled from "@emotion/styled";
import {
  TableContainer as $TableContainer,
  css,
  TableContainerProps,
} from "@chakra-ui/react";

export const TableContainer = styled($TableContainer)<TableContainerProps>(
  (props) =>
    css({
      width: "100%",
      maxW: "500px",
    })(props.theme)
) as typeof $TableContainer;
