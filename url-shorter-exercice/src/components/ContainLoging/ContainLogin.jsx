import './style.css'

const ContainLogin = () => {

    return( <>
    
        <div className='contain-log'>

            <section className='form-log'>

                <label htmlFor="username">Email: </label>
                <input type="email" name="useremail" className='input-text' placeholder='correo@dominio.com' required/>
                
                <br />
                
                <label htmlFor="password">Contraseña: </label>
                <input type="password" name="userpassword" className='input-text' minlength="4" required/>

                <br />

                <input type="button" className='btn-log' value="Login" />

                <a href="/" className='register-link'><p>¿No tienes una cuenta aún? <br /> Registrate aquí.</p></a>

            </section>
          
        
        </div>

    </> );

}

export default ContainLogin;