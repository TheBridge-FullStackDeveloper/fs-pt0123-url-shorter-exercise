import { useForm } from 'react-hook-form';
import { login } from '../../misc/templates';
import { useMutation, useQueryClient } from 'react-query';
import { auth } from'../../services';

const useLogin = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: auth.login,
        onSucess: (response) => {
            if(response.success) queryClient.invalidateQueries({ queryKey: ["user"] });
// Elimine le Cache
        },
    });    

    return mutate
}

const Login = () => {
    const {register, formState, handleSubmit } = useForm();
// un function qui enregistre les champs
    const doLogin = useLogin()

    const handleForm = (data) => {
            console.info("> form data: ", data);
            mutate(data)
    };


    const { errors, email, username, password } = login;

    return (
        <section>
            <h1>Login Page</h1>
            <p>(Protected route)</p>

            <form onSubmit={handleSubmit(doLogin)}>
                <label htmlFor="email">email</label>
                <br />
                <input 
                {...{ ...email.props, ...register("email", email.validation) }} 
                />
                <p>{errors[formState.errors?.email?.type]}</p>

                <label htmlFor="username">username</label>
                <br />
                <input 
                {...{ ...username.props, ...register("username", username.validation), }} 
                />
                <p>{errors[formState.errors?.username?.type]}</p>

                <label htmlFor="password">password</label>
                <br />
                <input 
                {...{ ...password.props, ...register("password", password.validation), }} 
                />
                <p>{errors[formState.errors?.password?.type]}</p>

                <input type="submit" />     
            </form>
        </section>
    )
}

export default Login