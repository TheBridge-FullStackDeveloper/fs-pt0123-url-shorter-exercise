import Styled from "./styles"
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useMutation, useQueryClient } from 'react-query'
import { auth } from '../../services'

function Register() {

  const { register, formState, handleSubmit } = useForm();

  const { mutate } = useMutation({
    mutationFn: auth.login,
    onSuccess: () => {

    }
  })
  
  const handleForm = (data) => {
    console.info('> form data', data)
    mutate(data)
  }

  const { errors } = login

  return (
    <Styled.Body>
      <h1>Create account</h1>
        <Styled.Form>
          <form onSubmit={handleSubmit(handleForm)}>
            <Styled.Field>
                <label htmlFor="email">
                  email
                </label>
                  <input type="text" id="email" placeholder="example@example.com" {...register("email", { required: true })} />
                  <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
            </Styled.Field>
            <Styled.Field>
                <label htmlFor="username">
                  username
                </label>
                  <input type="text" id="username" placeholder="Username" {...register("username", { required: true })} />
                  <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
            </Styled.Field>
            <Styled.Field>
                <label htmlFor="password">
                  password
                </label>
                  <input type="password" id="password" placeholder="insert a valid password" {...register("password", { required: true, minLength: 4 })}/>
                  <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
            </Styled.Field>

            <input type="submit" />
          </form>
        </Styled.Form>
    </Styled.Body>
  )
}

export default Register
