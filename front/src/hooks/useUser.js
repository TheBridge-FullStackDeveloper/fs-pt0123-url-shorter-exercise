import { useQuery } from "react-query";
import { user } from "../services";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: user.basic,
  });

  return { data, isLoading };
};
