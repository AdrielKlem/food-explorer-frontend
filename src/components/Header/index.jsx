import { Container, Menu, MenuHeader, MenuBody, MenuOption } from "./styles"
import { Input } from "../Input"
import { Logo } from "../Logo"

import { useAuth } from "../../hooks/auth"

import { useState } from "react"
import { GoSearch } from "react-icons/go"
import { PiReceipt } from "react-icons/pi"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

export function Header() {
  const { signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = true

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container $menuOpen={menuOpen}>
        {   menuOpen ?
             <Menu>
              <MenuHeader>
                <AiOutlineClose onClick={toggleMenu} /> <span>Menu</span>
              </MenuHeader>
              <MenuBody>
                <Input
                  id={"Nome"}
                  icon={GoSearch}
                  placeholder={"Busque por pratos ou ingredientes"}
                />
                {isAdmin ? <MenuOption to="/new">Novo prato</MenuOption> : null }
                <MenuOption onClick={signOut}>
                    Sair
                </MenuOption>
              </MenuBody>
            </Menu>
          : <AiOutlineMenu onClick={toggleMenu} />
        }
        {   menuOpen ? null : <Logo className="logo" />}
        {   menuOpen ? null : isAdmin ? <span>Admin</span> : <PiReceipt /> }
    </Container>
  );
}