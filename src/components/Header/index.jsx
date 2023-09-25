import { useState } from "react"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { PiReceipt } from "react-icons/pi"
import { GoSearch } from "react-icons/go"

import { Container, Menu, MenuHeader, MenuBody, MenuOption } from "./styles"
import { Input } from "../Input"
import { Logo } from "../Logo"

export function Header() {
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
                <MenuOption>
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