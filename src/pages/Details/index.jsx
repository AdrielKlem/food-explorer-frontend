import { Container, Section, Ingredients, Length } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"

import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai"
import { PiCaretLeft } from "react-icons/pi"

import dishPicture from "../../assets/Mask group-1.png"
import { useNavigate } from "react-router-dom"


export function Details() {
  const navigate = useNavigate()
  const isAdmin = true

  function handleToChange() {
        navigate("/details")
  }

  function handleBack() {
        navigate(-1)
  }


  return (
      <Container>
        <Header />
        <Section>
           <header>
            <PiCaretLeft />
             <ButtonText
             onClick={handleBack}
              title="Voltar"
              />
           </header>
           <img src={dishPicture} alt="" />
            <div className="desc">
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, Folhas verdes e molho agridoce salpicados com gergelim</p>
            </div>
            <Ingredients>
              <span>Alface</span>
              <span>Cebola</span>
              <span>Pão naan</span>
              <span>Pepino</span>
              <span>Rabanete</span>
              <span>Tomate</span>
            </Ingredients>
            <Length>
             {
              isAdmin ?
              <Button
                  onClick={handleToChange}
                  title={"Editar o Prato"}
              />
              :
              <>
                <AiOutlineLine /><div id="number">01</div><AiOutlinePlus />
                 <Button 
                  title={"Comprar"}
              />
              </>
             }
            </Length>
        </Section>
        <Footer />
      </Container>
  )
}