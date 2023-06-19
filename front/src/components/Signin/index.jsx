import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    const url = 'http://localhost:4000/auth/signin'; 

    const userData = {
      email: email,
      password: password
    };

    axios.post(url, userData)
      .then(response => {
        // Aquí puedes agregar la lógica para manejar la respuesta exitosa del signin
        // Por ejemplo, guardar el token de autenticación en el estado global o en las cookies, redirigir a la página Panel, etc.
        console.log(response.data);
      })
      .catch(error => {
        // Aquí puedes manejar los errores de la solicitud o la validación del signin
        console.log(error);
      });
  };

}

export default SignIn