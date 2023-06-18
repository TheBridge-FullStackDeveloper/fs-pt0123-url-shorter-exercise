import { useQuery } from "react-query"
import { user } from "../services"

export const useShortsList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["shorts"],
        queryFn: user.shorts
    })

    return { data, isLoading }
}