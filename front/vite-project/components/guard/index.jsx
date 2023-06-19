/*import useRegister from "../../src/hooks/useRegister";
import { Redirect } from "wouter";

const Guard = ({component: Component}) =>{
 const {data, islogin} =   useRegister()

 if(islogin)return <p>Loading...</p>


    return data? <Component/> : <Redirect to ='/login' />

    
}

export default Guard;*/