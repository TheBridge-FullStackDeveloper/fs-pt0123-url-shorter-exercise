import './styles.css';

import { Link } from 'wouter';
import { useForm } from 'react-hook-form';

const ContainerRegister = (  ) => {

    const { register, formState, handleSubmit } = useForm();

    const handleForm = ( data ) => {
        console.info( '===> form data', data );
    };

    console.info( '==> form State', formState );

    return( <>
    
        <div className='contain-log'>

            <section className='form-log'>

            <h2 className='log-title'>Register</h2>

                <form className='form-log' onSubmit={ handleSubmit(handleForm) }>

                    <label htmlFor="usermail">Email: </label>
                    <input type="email" name="useremail" className='input-text' placeholder='correo@dominio.com' {...register("email", { required:true })}/>
                    
                    <br />

                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" className='input-text' placeholder='Tu Nickname' {...register("username", { required:true })}/>
                    
                    <br />
                    
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" name="userpassword" className='input-text' placeholder='* * * * * * * *' {...register("password", { required:true, minLength:4 })}/>

                    <br />

                    <div className="flexinButtom">
                        <input type="submit" className='btn-log' value="Create" />
                    </div>

                </form>

                <Link href="/home" > <a className='register-link'><p>¿Ya estás registrado? <br /> Inicia Sesión.</p></a></Link>

            </section>
          
        
        </div>

    </> );

}

export default ContainerRegister;