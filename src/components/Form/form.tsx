import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../validation/validation";
import { UseTaskQueryClient } from "../../hooks/useTaskQueryClient";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ITaskProps } from "../../Interface/interface";

import { TaskTitleList } from "../TaskTitleList/taskTitleList";
import * as Styles from "./styles";
import { useFetchDetailsTask } from "../../hooks/useFetchDetailsTask";
import { useParams } from "react-router-dom";

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
  const { query } = UseTaskQueryClient();

  const { id } = useParams();

  const handleOnSubmit = (dataForm: FormValues) => {
    setTasks([...query.data, dataForm]);
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
        return (
          <TaskTitleList details={`${id}`} key={task.id} title={task.title} />
        );
      })}
    </>
  );
};
