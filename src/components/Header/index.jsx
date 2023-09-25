import { useState } from "react"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { PiReceipt } from "react-icons/pi"

import { Container, Menu, MenuHeader } from "./styles"
import { Logo } from "../Logo"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container $menuOpen={menuOpen}>
        {   menuOpen ? <AiOutlineClose onClick={toggleMenu} /> :
            <Menu>
                <MenuHeader>
                    <AiOutlineMenu onClick={toggleMenu} />
                </MenuHeader>
            </Menu>
        }
        {   menuOpen ? null : <Logo className="logo" /> }
        {   menuOpen ? null : <PiReceipt /> }
    </Container>
  );
}