import { useUser } from "../../hooks";
import { Redirect } from "wouter";

const Guard = ( {component: Component} ) =>{

    const { data, isLoading } = useUser();

    if( isLoading ) return <p>Cargando...</p>

    return data ? <Component/> : <Redirect to="/home"/> ;
}

export default Guard;