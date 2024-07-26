import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../validation/validation";
import { UseTaskQueryClient } from "../../hooks/useTaskQueryClient";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ITaskProps } from "../../Interface/interface";
import * as Styles from "./styles";
import { TableList } from "../tableList/tableList";
import { useState } from "react";

type FormValues = {
  title: string;
  description: string;
};

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const { data } = UseTaskQueryClient();

  const handleOnSubmit = (dataForm: FormValues) => {
    setTasks([...data, dataForm]);
    console.log("tasks: ", tasks);
  };

  return (
    <>
      <Styles.FormControl onSubmit={handleSubmit(handleOnSubmit)}>
        <Styles.Input placeholder="Title..." {...register("title")} />
        <Styles.TextArea
          placeholder="Description"
          {...register("description")}
        />
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
      {tasks.map((task) => {
        return <TableList key={task.id} list={task.title} />;
      })}
    </>
  );
};
