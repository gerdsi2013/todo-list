import { PlusSquareIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/validation";
import * as Styles from "./styles";
import FormValues from "../../@types/type.td";

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data: FormValues) => {};

  return (
    <Styles.FormControl onSubmit={handleSubmit(handleOnSubmit)}>
      <Styles.Input placeholder="Title..." {...register("title")} />
      <Styles.TextArea placeholder="Description" {...register("description")} />
      <Styles.Box>
        <Styles.Text>
          {errors.title?.message || errors.description?.message}
        </Styles.Text>
        <Styles.IconButton
          type="submit"
          colorScheme="teal"
          aria-label="add task"
          icon={<PlusSquareIcon />}
        />
      </Styles.Box>
    </Styles.FormControl>
  );
};
