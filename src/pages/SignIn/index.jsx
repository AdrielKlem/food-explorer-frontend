import { Container, Form } from "./styles"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { MyContext } from "../../hooks/myContext"

export function SignIn() {
  const data = useContext(MyContext)
  console.log("Meu Contexto => ",data)

  return (
    <Container>
      <Logo />
      
      <Form>
        <h2>Faça Login</h2>
        <Input
          name={"Email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />
        <Input
          name={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
        />
        <Button 
          title={"Entrar"}
        />

        <Link to="/register">
          Criar uma Conta
        </Link>
      </Form>
    </Container>
  )
}