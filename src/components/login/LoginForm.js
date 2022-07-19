import React from "react";
import { Link } from "react-router-dom";
import Button from "../forms/Button";
import Input from "../forms/Input";

const LoginForm = ()=>{

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit (event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(res => {
      console.log(res)
      return res.json();
    }).then(json => {
      console.log(json)
    })
  }

  return(
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="passoword" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;