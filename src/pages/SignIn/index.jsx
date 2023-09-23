import { Container, Form } from "./styles"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Logo />
      
      <Form>
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
      </Form>
    </Container>
  )
}