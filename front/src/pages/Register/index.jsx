import React, { useState } from 'react';


function Register() {
  const [payload, setPayload] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    signup({ payload })
      .then((data) => {

        console.log(payload);
      })
      .catch((error) => {

        console.error(error);
      });
  };


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input
            type="text"
            name="email"
            placeholder='ejemplo@ejemplo.com'
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='username'>
          Username:
          <input
            type="text"
            name="username"
            placeholder="ejemplo"
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type="text"
            name="password"
            placeholder="introduzca una contraseña"
            onChange={(e) => {
              setPayload({
                ...payload,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </label>
        <button type="submit">Registro</button>
      </form>
    </div>
  );
}

export default Register;
