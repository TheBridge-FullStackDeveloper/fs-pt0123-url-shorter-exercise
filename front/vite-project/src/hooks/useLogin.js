import { useMutation, useQuery, useQueryClient } from "react-query";
import { auth, user } from "../../services";



 export const useLogin = () => {
    const queryclient = useQueryClient()
    const {mutate, data}= useMutation({
        mutationFn: auth.login,
        onSuccess: (response) => {
           console.info('>mutation response:', response)
           if(response.onSuccess) queryclient.invalidateQueries({queryKey: ["user"]})
        }

    })
    
    return mutate
}


export const useRegister = () => {
    const queryclient = useQueryClient()
    const {mutate, data}= useMutation({
        mutationFn: auth.registe,
        onSuccess: (response) => {
            if(response.onSuccess) queryclient.invalidateQueries({queryKey: ["user"]})
            const {data, isLoading} = useQuery({
                queryKey: ['user'],
                queryFn: user.info,
                

               })
               useEffect(()=>{
                console.info('user data:', data)
               },[data])

               
        }
        
        
    })
    console.log(data)
    return mutate
}