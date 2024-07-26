import styled from "@emotion/styled";
import {
  Box as $Box,
  FormControl as $FormControl,
  IconButton as $IconButton,
  Input as $Input,
  Text as $Text,
  Textarea as $Textarea,
  BoxProps,
  ButtonProps,
  FormControlProps,
  InputProps,
  TextProps,
  TextareaProps,
  css,
} from "@chakra-ui/react";

export const FormControl = styled.form<FormControlProps>((props) =>
  css({
    px: 4,
    maxWidth: "530px",
    width: "100%",
  })(props.theme)
) as typeof $FormControl;

export const Input = styled($Input)<InputProps>((props) =>
  css({
    bgColor: "#fff",
    color: "teal",
    fontSize: "20px",
    height: "50px",
    width: "100%",
    padding: "8px",
    "&::placeholder": {
      color: "gray",
    },
  })(props.theme)
) as typeof $Input;

export const TextArea = styled($Textarea)<TextareaProps>((props) =>
  css({
    bgColor: "#fff",
    color: "teal",
    fontSize: "18px",
    width: "100%",
    height: "100px",
    padding: "5px",
    overflow: "hidden",
    resize: "none",
  })(props.theme)
) as typeof $Textarea;

export const IconButton = styled($IconButton)<ButtonProps>((props) =>
  css({
    mt: 2,
    width: "50px",
    height: "50px",
  })(props.theme)
) as typeof $IconButton;

export const Box = styled($Box)<BoxProps>((props) =>
  css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })(props.theme)
) as typeof $Box;

export const Text = styled($Text)<TextProps>((props) =>
  css({
    pl: 2,
    textColor: "red",
    fontSize: "lg",
    lineHeight: "24px",
  })(props.theme)
) as typeof $Text;
