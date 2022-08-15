import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../helper/Error";

const LoginPasswordLost = ()=>{

  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit (e) {
    e.preventDefault();
    if(login.validate()){
      const {url, options} = PASSWORD_LOST({
        login: login.value, 
        url: window.location.href.replace('perdeu', 'resetar')
      });
      const {response, json} = await request(url, options);
    }
  }

  return(
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
          <p style={{color: "#4c1"}}>{data}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login} />
            {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar email</Button>}
            {error && <Error error={error} />}
          </form>
      )}
    </section>
  )
}

export default LoginPasswordLost;