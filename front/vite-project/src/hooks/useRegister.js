import { useMutation, useQuery, useQueryClient } from "react-query"
import { auth, user } from "../../services"
import { useEffect } from "react"


export const useRegister = () => {
  const queryClient = useQueryClient();

  const { mutate, data } = useMutation(auth.registe, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);


    }
  });

  const { data: userData, isLoading } = useQuery(['user'], user.info);
  useEffect(() => {
    console.info('user data:', userData);

  }, [userData]);


  return mutate;
};

export default useRegister;
