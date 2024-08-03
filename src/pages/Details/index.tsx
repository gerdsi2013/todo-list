import { useParams } from "react-router-dom";
import { useFetchDetailsTask } from "../../hooks/useFetchDetailsTask";

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id, ">>>>>>>>>>>>>>>>>>>>>>");

  return (
    <div>
      <h1>Section List</h1>
    </div>
  );
};
