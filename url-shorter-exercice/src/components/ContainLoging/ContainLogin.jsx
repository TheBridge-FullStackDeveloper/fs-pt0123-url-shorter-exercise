import './style.css';

import { Link, useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { user } from '../../services';
import { login } from '../../misc/templates';
import { useLogin } from '../../hooks';

const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: 'user',
    queryFn: user.info
});

  return { data, isLoading };
};

const ContainLogin = () => {
  const { register, formState, handleSubmit } = useForm();
  const doLogin = useLogin();
  const { data } = useUser();

  const [, setLocation] = useLocation();

  const { errors } = login;

  useEffect(() => {
    console.info('=> User Data: ', data);
    if (data) setLocation('/home');
  }, [data, setLocation]);

  return (
    <div className="contain-log">
      <section className="form-log">
        <h2 className="log-title">Login</h2>
        
        <form className="form-log" onSubmit={handleSubmit(doLogin)}>
          <label htmlFor="useremail">Email:</label>
          <input
            type="email"
            name="useremail"
            className="input-text"
            placeholder="correo@dominio.com"
            {...register('email', { required: true })}
          />
          <p className="error-mail">{formState.errors.email && errors[formState.errors.email.type]}</p>

          <br />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="userpassword"
            className="input-text"
            placeholder="* * * * * * * *"
            {...register('password', { required: true, minLength: 4 })}
          />
          <p className="error-password">{formState.errors.password && errors[formState.errors.password.type]}</p>

          <br />

          <div className="flexingButton">
            <input type="submit" className="btn-log" value="Login" />
          </div>
        </form>

        <Link href="/register">
          <a className="register-link">
            <p>¿No tienes una cuenta aún? <br /> Registrate aquí.</p>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default ContainLogin;
