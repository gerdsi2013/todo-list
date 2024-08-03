import styled from "@emotion/styled";
import {
  Card as $Card,
  Heading as $Heading,
  CardProps,
  HeadingProps,
  css,
} from "@chakra-ui/react";

export const Card = styled($Card)<CardProps>((props) =>
  css({
    mt: 1,
    maxW: "500px",
    width: "100%",
    transition: "transform 0.3s ease",
    "&:hover": {
      bg: "#fafafa",
    },
  })(props.theme)
) as typeof $Card;

export const Heading = styled($Heading)<HeadingProps>((props) =>
  css({
    color: "teal",
    textTransform: "uppercase",
  })(props.theme)
) as typeof $Heading;
