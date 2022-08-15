import React from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import Button from "../forms/Button";
import Input from "../forms/Input";
import Error from "../helper/Error"; 

const LoginPasswordReset = ()=>{

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState(''); 
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if(key) setKey(key);
    if(login) setKey(login);
  }, [])

  async function handleSubmit (e) {
    e.preventDefault();
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      const {response} = await request(url, options);
      if(response.ok) navigate('/login');
    }
  }

  return(<>
    <h1 className="title">
      Resete a senha
    </h1>
    <form onSubmit={handleSubmit}>
      <Input label="Nova Senha" type="password" name="password" {...password} />
      {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      {error && <Error error={error} />}
    </form>
  </>
  )
}

export default LoginPasswordReset;