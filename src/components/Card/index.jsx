import { Container, Content, Icon, Price, PurchaseCard } from "./styles"

import { Button } from "../../components/Button"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import group1  from "../../assets/Mask group-1.png"
import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"

export function Card({ data, title, price, ...rest }) {
    const navigate = useNavigate()
    const isAdmin = false
    const [quantity, setQuantity] = useState(1);

    function handleToDetails() {
        navigate("/details")
    }
    
    function increase() {
        if (quantity > 19) {
            alert("Erro: A quantidade máxima é de 20 unidades")
            return;
        }
        setQuantity(count => count + 1);
    };
     
    function decrease() {
        if (quantity < 2) {
            alert("Erro: A quantidade mínima é 1 unidade")
            return;
        }
        setQuantity(count => count - 1);
    };

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
                <Icon>
                    <AiOutlineHeart />
                </Icon>
                    
                <img src={group1} alt="" />
                <h3>{title} <IoIosArrowForward /></h3>
                <Price>R$ {price}</Price>
                        
                    <PurchaseCard>
                        <div className="counter">
                            <AiOutlineLine />
                                <div id="number">01</div>
                            <AiOutlinePlus />
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