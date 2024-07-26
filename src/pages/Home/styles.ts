import styled from "@emotion/styled";
import {
  Box as $Box,
  Heading as $Heading,
  BoxProps,
  css,
  HeadingProps,
} from "@chakra-ui/react";

export const Box = styled($Box)<BoxProps>((props) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  })(props.theme)
) as typeof $Box;

export const Heading = styled($Heading)<HeadingProps>((props) =>
  css({
    my: "2rem",
    color: "teal",
    fontWeight: "bold",
  })(props.theme)
) as typeof $Heading;
