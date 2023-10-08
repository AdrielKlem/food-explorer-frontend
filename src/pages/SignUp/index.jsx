import { Container, Form } from "./styles"

import { LogoAuth } from "../../components/LogoAuth"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
    
    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate(-1)
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar o usuário")
      }
    })
  }

  function handleBack() {
        navigate(-1)
  }

  return (

    <Container>
      <LogoAuth />
      
      <Form>
        <h2>Cria sua conta</h2>
        <Input
          name={"Nome"}
          placeholder={"Exemplo: Maria da Silva"}
          onChange={event => setName(event.target.value)}
        />
        <Input
          name={"Email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          name={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
          onChange={event => setPassword(event.target.value)}
        />
        <Button 
          title={"Criar conta"}
          onClick={handleSignUp}
        />

        <Link 
          onClick={handleBack}
        >
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}