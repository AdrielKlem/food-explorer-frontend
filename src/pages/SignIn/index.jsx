import { Container, Form } from "./styles"

import { LogoAuth } from "../../components/LogoAuth"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <LogoAuth />
      
      <Form>
        <h2>Faça Login</h2>
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
          title={"Entrar"}
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma Conta
        </Link>
      </Form>
    </Container>
  )
}