import { useQuery } from "react-query";
import { Api } from "../services/Api";

type TaskDetails = {
  id: string | undefined;
};

export const useFetchDetailsTask = (id: string) => {
  const fetchDetails = async (id: string): Promise<TaskDetails> => {
    const response = await Api.get(`task/${id}`);
    return response.data;
  };

  const query = useQuery<TaskDetails, Error>({
    queryKey: ["task", id],
    queryFn: () => fetchDetails(id),
  });

  return {
    query,
  };
};
