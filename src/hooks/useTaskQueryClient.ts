import { useQuery } from "react-query";
import { Api } from "../services/Api";

export const UseTaskQueryClient = () => {
  const fetchData = async () => {
    const { data } = await Api.get("task/");

    return data;
  };

  const query = useQuery({
    queryKey: ["task"],
    queryFn: fetchData,
  });

  return {
    query,
  };
};
