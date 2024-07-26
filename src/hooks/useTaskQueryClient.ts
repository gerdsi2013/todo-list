import { useQuery } from "react-query";
import { Api } from "../services/Api";

export const UseTaskQueryClient = () => {
  const fetchData = async () => {
    const response = await Api.get("task");
    console.log(response.data);
    return response.data;
  };

  const query = useQuery({
    queryKey: ["task"],
    queryFn: fetchData,
  });

  return query;
};
