import React from "react";
import { USER_POST } from "../../api";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../../UserContext";
import Button from "../forms/Button";
import Input from "../forms/Input";
import Error from "../helper/Error";

const LoginCreate = ()=>{

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = React.useContext(UserContext);
  const {loading, error, request} = useFetch();

  async function handleSubmit (event){
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const {response} = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);
  }

  return(
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
          ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate;