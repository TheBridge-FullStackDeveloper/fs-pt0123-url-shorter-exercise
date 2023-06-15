import './style.css';

import { Link } from 'wouter';

const ContainLogin = (  ) => {

    return( <>
    
        <div className='contain-log'>

            <section className='form-log'>

                <h2 className='log-title'>Login</h2>

                <label htmlFor="useremail">Email: </label>
                <input type="email" name="useremail" className='input-text' placeholder='correo@dominio.com' required/>
                
                <br />
                
                <label htmlFor="password">Contraseña: </label>
                <input type="password" name="userpassword" className='input-text' minlength="4" required/>

                <br />

                <div className="flexingButton">
                    <input type="button" className='btn-log' value="Login" />
                </div>

                <Link href="/register" > <a className='register-link'><p>¿No tienes una cuenta aún? <br /> Registrate aquí.</p></a></Link>
    

            </section>
          
        
        </div>

    </> );

}

export default ContainLogin;