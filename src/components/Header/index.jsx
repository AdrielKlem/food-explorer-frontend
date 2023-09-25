import { useState } from "react"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { PiReceipt } from "react-icons/pi"
import { GoSearch } from "react-icons/go"

import { Container, Menu, MenuHeader, MenuBody, Logout } from "./styles"
import { Input } from "../Input"
import { Logo } from "../Logo"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                <Logout>
                    Sair
                </Logout>
              </MenuBody>
            </Menu>
          : <AiOutlineMenu onClick={toggleMenu} />
        }
        {   menuOpen ? null : <Logo className="logo" /> }
        {   menuOpen ? null : <PiReceipt /> }
    </Container>
  );
}