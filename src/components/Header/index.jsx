import { Container, Menu, MenuHeader, MenuBody, MenuOption } from "./styles"

import { Input } from "../Input"
import { LogoApp } from "../LogoApp"

import { useAuth } from "../../hooks/auth"

import { useState, useEffect } from "react"
import { GoSearch, GoSignOut } from "react-icons/go"
import { PiReceipt } from "react-icons/pi"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { useNavigate } from "react-router-dom"

export function Header() {
  const { user, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate()
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    windowWidth < 680 ?
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
                {user.isAdmin ? <MenuOption to="/new">Novo prato</MenuOption> : null }
                <MenuOption onClick={signOut}>
                    Sair
                </MenuOption>
              </MenuBody>
            </Menu>
          : <AiOutlineMenu onClick={toggleMenu} />
        }
        {   menuOpen ? null : <LogoApp />}
        {   menuOpen ? null : user.isAdmin ? <span>Admin</span> : <PiReceipt /> }
      </Container>
    :
    <Container>
      <LogoApp className="logo" /> 
      
      <div className="Nome">
        <Input
          id={"Nome"}
          icon={GoSearch}
          placeholder={"Busque por pratos ou ingredientes"}
        />
      </div>

      {
        user.isAdmin ?
          <Button
            onClick={() => navigate("/new")}
            title="Novo prato"
          />
        :
          <Button
            title="Pedidos"
            onClick={() => alert("Indisponivel")}
          />              
      }

      <button
        className="order"
        onClick={signOut}
      >
        <GoSignOut />
      </button>
    </Container>
  )
}