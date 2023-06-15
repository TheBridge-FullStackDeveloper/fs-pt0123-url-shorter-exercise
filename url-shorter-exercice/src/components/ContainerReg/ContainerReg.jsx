import './styles.css';

import { Link } from 'wouter';

const ContainerRegister = (  ) => {

    return( <>
    
        <div className='contain-log'>

            <section className='form-log'>

            <h2 className='log-title'>Register</h2>

                <label htmlFor="usermail">Email: </label>
                <input type="email" name="useremail" className='input-text' placeholder='correo@dominio.com' required/>
                
                <br />

                <label htmlFor="username">Username: </label>
                <input type="text" name="username" className='input-text' placeholder='TuNickname' required/>
                
                <br />
                
                <label htmlFor="password">Contraseña: </label>
                <input type="password" name="userpassword" className='input-text' minlength="4" required/>

                <br />

                <div className="flexinButtom">
                    <input type="button" className='btn-log' value="Create" />
                </div>

                <Link href="/home" > <a className='register-link'><p>¿Ya estás registrado? <br /> Inicia Sesión.</p></a></Link>

            </section>
          
        
        </div>

    </> );

}

export default ContainerRegister;