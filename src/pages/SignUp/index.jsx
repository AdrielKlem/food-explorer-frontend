import { Container, Form } from "./styles"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link, useNavigate } from "react-router-dom"

export function SignUp() {
  const navigate = useNavigate()

  
  function handleBack() {
        navigate(-1)
  }

  return (

    <Container>
      <Logo />
      
      <Form>
        <h2>Cria sua conta</h2>
        <Input
          name={"Nome"}
          placeholder={"Exemplo: Maria da Silva"}
        />
        <Input
          name={"Email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />
        <Input
          name={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
        />
        <Button 
          title={"Criar conta"}
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