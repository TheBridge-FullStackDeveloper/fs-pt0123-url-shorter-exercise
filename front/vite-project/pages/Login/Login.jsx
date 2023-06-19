import {useForm} from 'react-hook-form'
import { login } from '../../misc/templates'
//import { useMutation, useQuery} from "react-query";
//import { auth, user } from '../../services';
import Section from "./styled";
import { useRegister } from '../../src/hooks/useRegister';
import { useLocation } from "wouter";
const Login = () => {
    const { register, formState, handleSubmit } = useForm()
    const [, setLocation] = useLocation()
 const doUsers = useRegister()

  
 
 
 const onSuccess = () => {
    setLocation('/panel');
  };

  const handleFormSubmit = (data) => {
    doUsers(data, { onSuccess });
  };

const {errors} = login;


    return (
        <Section>
            <h1>Login Page</h1>
            
            <p>(Protected routes)</p>
            <form  onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="email">email:</label><br />
                <input id="email" placeholder="user@user.com"{...register("email", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>

                <label htmlFor="password" >password:</label><br />
                <input id="password" type="password" placeholder="******"{...register("password", { required: true, minLength: 4 })} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

                <input type="submit" />
            </form>
        </Section>

    )
}

export default Login;

