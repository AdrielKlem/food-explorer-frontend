import { Container, Content, Icon, Price, PurchaseCard } from "./styles"

import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"

export function Card({ data, ...rest }) {
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(1)
    const [isFav, setIsFav] = useState(false)
    const navigate = useNavigate()
    const value = data.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        });

    
    function handleToDetails() {
        navigate("/details")
    }
    
    const handleFav = () => {
        setIsFav(!isFav); // Inverte o valor de isFav quando o ícone é clicado
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
                        <Link to="/change">
                            <BsPencil  />
                        </Link>
                    </Icon>
                    <img src={data.picture} alt={`Foto de ${data.name}`} />
                    <h3>{data.name} <IoIosArrowForward /></h3>
                    <Price>{value}</Price>   
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
                    
                <img src={data.picture} alt={`Foto de ${data.name}`} />
                <h3>{data.name} <IoIosArrowForward /></h3>
                <Price>{value}</Price>
                        
                    <PurchaseCard>
                        <div className="counter">
                            <AiOutlineLine 
                                onClick={handleDecrease}
                            />
                                <div id="number">{quantity}</div>
                            <AiOutlinePlus 
                                onClick={handleIncrease}
                            />
                        </div>
                        <Button 
                            onClick={handleToDetails}
                            
                            title={"incluir"}
                        />
                    </PurchaseCard>
                </Content>
            }
        </Container>
    )
}