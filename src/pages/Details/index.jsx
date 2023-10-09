import { Container, Section, Ingredients, IngredientsItem, Length } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api";

import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai"
import { PiCaretLeft } from "react-icons/pi"

import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


export function Details() {
  const { user } = useAuth()
  const isAdmin = false

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [tempDishID, setTempDishID] = useState("");
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  const [data, setData] = useState(null)

  const picture = data && `${api.defaults.baseURL}/files/${data.picture}`
    
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const value = (price*quantity).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
  });

  function handleToChange(id) {
        navigate(`/change/${id}`)
    }

  function handleBack() {
        navigate(-1)
  }

  function handleIncrease() {
    if (quantity > 19) {
        alert("Erro: A quantidade máxima é de 20 unidades")
        return;
    }
    setQuantity(count => count + 1);
  }

  function handleDecrease() {
    if (quantity < 2) {
        alert("Erro: A quantidade mínima é 1 unidade")
        return;
    }
    setQuantity(count => count - 1);
  }

  useEffect(() => {
    const idFromParams = searchParams.get("id");
    setTempDishID(idFromParams);
  }, [searchParams]);
  
  useEffect(() => {
    async function fetchDish() {
      try {
        const quantityFromParams = Number(searchParams.get("quantity"));
        setQuantity(quantityFromParams);
        const response = await api.get(`/dishes/${tempDishID}`);
        setData(response.data);

        const { name, description, price, ingredients } = response.data;
        setName(name);
        setDescription(description);
        setPrice(price);
        setIngredients(ingredients.map((ingredient) => ingredient.name));
      } catch (error) {
        console.error(error);
      }
    }

    if (tempDishID) {
      fetchDish();
    }
  }, [tempDishID]);

  return (
      <Container>
        <Header />
        <Section>
           <header>
            <PiCaretLeft />
             <ButtonText
             onClick={() => handleBack()}
              title="Voltar"
              />
           </header>
           <div className="img">
            <img src={picture} alt={`Foto de ${name}`} />
           </div>
            <div className="desc">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <Ingredients>
              {
                ingredients.map((ingredient, index) => (
                    <IngredientsItem 
                      key={String(index)} 
                    >
                      {ingredient} 
                    </IngredientsItem>
                ))
              }
            </Ingredients>
            <Length>
             {
              user.isAdmin ?
              <Button
                  onClick={() => handleToChange(data.id)}
                  title={"Editar o Prato"}
              />
              :
              <>
                <AiOutlineLine 
                    onClick={() => handleDecrease()}
                />
                    <div id="number">{Number(quantity)}</div>
                <AiOutlinePlus 
                    onClick={() => handleIncrease()}
                />
                 <Button 
                  onClick={() => alert("Indisponivel")}
                  title={`Comprar (${value})`}
              />
              </>
             }
            </Length>
        </Section>
        <Footer />
      </Container>
  )
}