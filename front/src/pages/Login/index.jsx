import React, { useEffect, useState } from 'react';
// import login from '../../services/users/login';
import { useForm } from "react-hook-form"
import { login } from "../../misc/templates"
import { auth } from "../../services/index"
import { useLogin } from '../../hooks';
import { useQuery } from 'react-query';
import {user} from "../../services"
import { useLocation } from 'wouter';




const Login = () => {
  const { register, formState, handleSubmit } = useForm()
  const doLogin = useLogin();
  const [, setLocation]=useLocation();
  const {data}= useUser()

  useEffect(()=>{
    data && setLocation("/")
  },[data])

  const { errors, email, username, password } = login;
  
  return (
    <section>
    <h1>Login Page</h1>
    <p>Ruta protegida</p>

    <form onSubmit={handleSubmit(doLogin)}>
      <label htmlFor='email'>email</label>
      <br />
      <input
        {...{
          ...email.props,
          ...register("email", email.validation)
        }}
        />
      <p>{errors[formState.errors?.email?.type]}</p>

      <label htmlFor='username'>username</label>
      <br />
      <input
        {...{
          ...username.props,
          ...register("username", username.validation),
        }}
        />
      <p>{errors[formState.errors?.username?.type]}</p>

      <label htmlFor='password'>password</label>
      <br />
      <input
        {...{
          ...password.props,
          ...register("password", password.validation),
        }}
        />
      <p>{errors[formState.errors?.password?.type]}</p>

      <input type="submit" />
    </form>
  </section>
);
};
// const [payload, setPayload] = useState({})

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  //   return (
  //     <div>
  //       <h1>Login</h1>
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor='email'>
  //           Email:
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="ejemplo@ejemplo.com"
  //             onChange={(e) => {
  //               setPayload({
  //                 ...payload,
  //                 [e.target.name]: e.target.value,
  //               })
  //             }}
  //           />
  //         </label>
  //         <label htmlFor='password'>
  //           Contraseña:
  //           <input 
  //             type="password"
  //             name="password"
  //             placeholder="Introduzca su contraseña"
  //             onChange={(e)=>{
  //               setPayload({
  //                 ...payload,
  //                 [e.target.name]: e.target.value,
  //               })
  //             }}
  //           />
  //         </label>
  //         <button onClick={() => {
  //           login({payload})
  //           console.log(payload)
  //         }}>Iniciar sesión</button>
  //       </form>
  //     </div>
  //   );


export default Login;
