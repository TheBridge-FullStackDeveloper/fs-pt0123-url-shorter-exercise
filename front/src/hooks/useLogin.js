import { useMutation, useQueryClient } from "react-query"


export const useLogin = () => {
    const queryClient = useQueryClient()
  
    const { mutate } = useMutation({
      mutationFn: auth.login,
      onSuccess: (response) => {
        console.info(response)
        if (response.success)
          queryClient.invalidateQueries({ queryKey: ["user"] })
      }
    })
  
    return mutate
  }