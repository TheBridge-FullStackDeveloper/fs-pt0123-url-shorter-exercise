import Styled from './styles'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'


function Login() {
    const { register, formState, handleSubmit} = useForm()
    const[, setLocation] = useLocation()

    return (
        <Styled.Body>
            <h1>Login</h1>
            <Styled.Form>
                <form>
                    <Styled.Field>
                        <label htmlFor="">Insert email</label>
                        <input type="text" id="email" placeholder="example: email@gmail.com" />
                    </Styled.Field>
                    <Styled.Field>
                        <label htmlFor="">Inser password</label>
                        <input type="password" id="password" />
                    </Styled.Field>
                </form>
            </Styled.Form>
        </Styled.Body>
    )
}

export default Login