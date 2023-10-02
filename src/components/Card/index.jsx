import { Container, Content, Icon, Price, PurchaseCard } from "./styles"

import { Button } from "../../components/Button"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import group1  from "../../assets/Mask group-1.png"
import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"

export function Card({ data, title, price, ...rest }) {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const [isFav, setIsFav] = useState(false)
    const isAdmin = false
    
    
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
                isAdmin ? 
                <Content>
                    <Icon>
                        <Link to="/change">
                            <BsPencil  />
                        </Link>
                    </Icon>
                    <img src={group1} alt="" />
                    <h3>{title} <IoIosArrowForward /></h3>
                    <Price>R$ {price}</Price>   
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
                    
                <img src={group1} alt="" />
                <h3>{title} <IoIosArrowForward /></h3>
                <Price>R$ {price}</Price>
                        
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