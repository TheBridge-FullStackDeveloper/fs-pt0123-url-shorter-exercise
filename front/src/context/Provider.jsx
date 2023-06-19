import {QueryClientProvider, QueryClient} from "react-query"

const queryClient = new QueryClient()

export const Provider = ({children}) =>{
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

