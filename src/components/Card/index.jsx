import { Container, Content, Icon, Price, ButtonArea } from "./styles"

import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"

export function Card({ data, ...rest }) {
    const { user } = useAuth()

    const pictureURL = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : imagePlaceholder;

    const [quantity, setQuantity] = useState(1)
    const [isFav, setIsFav] = useState(false)

    const value = data.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        });

    const navigate = useNavigate()
    
    function handleToDetails(id, quantity = 1) {
        navigate(`/details?id=${id}&quantity=${quantity}`)
    }
    
    function handleToChange(id) {
        navigate(`/change/${id}`)
    }

    const handleFav = () => {
        setIsFav((prevIsFav) => !prevIsFav)
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

    return (
        <Container>
            {
                user.isAdmin ? 
                <Content>
                    <Icon>
                        <button 
                        onClick={() => handleToChange(data.id)}
                        >
                            <BsPencil  />
                        </button>
                    </Icon>
                    <img src={pictureURL} alt={`Foto de ${data.name}`} />
                    <ButtonArea
                        onClick={() => handleToDetails(data.id)}
                    >
                        <h3>
                            {data.name} <IoIosArrowForward />
                        </h3>
                    </ButtonArea>
                    <Price>{value}</Price>
                    <ButtonArea>
                        <Button 
                            onClick={() => handleToChange(data.id)}
                            title={"Editar"}
                            />   
                    </ButtonArea>
                </Content>
                :
                <Content>
                <Icon 
                    onClick={handleFav}
                >
                    {
                        isFav ?
                        <AiFillHeart />
                        :
                        <AiOutlineHeart />
                    }
                </Icon>
                    
                <img src={pictureURL} alt={`Foto de ${data.name}`} />
                <ButtonArea
                    onClick={() => handleToDetails(data.id, quantity)}
                >
                    <h3>
                        {data.name} <IoIosArrowForward />
                    </h3>
                </ButtonArea>
                <Price>{value}</Price>
                <ButtonArea>
                    <div className="counter">
                        <AiOutlineLine 
                            onClick={() => handleDecrease()}
                        />
                            <div id="number">{quantity}</div>
                        <AiOutlinePlus 
                            onClick={() => handleIncrease()}
                        />
                    </div>
                    <Button 
                        onClick={() => handleToDetails(data.id, quantity)}
                        title={"incluir"}
                    />
                </ButtonArea>
                </Content>
            }
        </Container>
    )
}