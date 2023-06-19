import { useForm } from 'react-hook-form'
import {login} from '../../misc/templates'
import { useLogin } from '../../src/hooks'
import  Section from "./styled";
import { useLocation } from "wouter";

const Register = () => {
   const [,setLocation] = useLocation()
    const { register, formState, handleSubmit } = useForm()
   const doLogin = useLogin()
 
   const onSuccess = () => {
    setLocation('/login');
  };

  const handleFormSubmit = (data) => {
    doLogin(data, { onSuccess });
  };
   

    const { errors } = login;
    return (
        <Section>
            <h1>Register Page</h1>
            <p>(Protected routes)</p>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="email" email></label><br />
                <input id="email" placeholder="user@user.com"{...register("email", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>


                <label htmlFor="username" username></label><br />
                <input id="username" placeholder="username"{...register("username", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.username?.type]}</p>


                <label htmlFor="password" password></label><br />
                <input id="password" type="password" placeholder="******"{...register("password", { required: true, minLength: 4 })} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

                <input type="submit" />
            </form>
        </Section>

    )
}

export default Register;

