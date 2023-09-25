import { Container, Banner, Section, Card, Price, Length, Icon } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"

import banner  from "../../assets/banner-png.png"
import group1  from "../../assets/Mask group-1.png"
import { Link, useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()

    const isAdmin = false

    function handleToDetails() {
        navigate("/details")
    }
    

    return (
    <Container>
        <Header />
        <main>
            <Banner>
                <img src={banner} alt="foto de frutas" />
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </Banner>
            <Section>

                <h2>Refeições</h2>

                <div className="meal section">
                    <Card>
                        <Icon>
                            { isAdmin ? 
                                <>
                                    <Link to="/change">
                                        <BsPencil  />
                                    </Link>
                                        
                                </> : 
                                <>
                                    <AiOutlineHeart />
                                </>                            
                            }
                        </Icon>
                        <img src={group1} alt="" />
                        <h3>Suco de maracujá <IoIosArrowForward /></h3>
                        <Price>R$ 49,97</Price>
                        { isAdmin ? null :                      
                            <>
                                <Length>
                                    <AiOutlineLine />
                                        <div id="number">01</div>
                                    <AiOutlinePlus />
                                </Length>
                                <Button 
                                    onClick={handleToDetails}
                                    
                                    title={"incluir"}
                                />
                            </>
                        }
                    </Card>
                    <Card>
                        <Icon>
                            <AiOutlineHeart />
                        </Icon>
                        <img src={group1} alt="" />
                        <h3>Suco de maracujá <IoIosArrowForward /></h3>
                        <Price>R$ 49,97</Price>
                        <Length>
                            <AiOutlineLine />
                                <div id="number">01</div>
                            <AiOutlinePlus />
                        </Length>
                        <Button 
                            title={"incluir"}
                        />
                    </Card>
                </div>

                <h2>Sobremesa</h2>
                
                <div className="sugar  section">
                    <Card>
                        <Icon>
                            <AiOutlineHeart />
                        </Icon>
                        <img src={group1} alt="" />
                        <h3>Suco de maracujá <IoIosArrowForward /></h3>
                        <Price>R$ 49,97</Price>
                        <Length>
                            <AiOutlineLine />
                                <div id="number">01</div>
                            <AiOutlinePlus />
                        </Length>
                        <Button 
                            title={"incluir"}
                        />
                    </Card>
                    <Card>
                        <Icon>
                            <AiOutlineHeart />
                        </Icon>
                        <img src={group1} alt="" />
                        <h3>Suco de maracujá <IoIosArrowForward /></h3>
                        <Price>R$ 49,97</Price>
                        <Length>
                            <AiOutlineLine />
                                <div id="number">01</div>
                            <AiOutlinePlus />
                        </Length>
                        <Button 
                            title={"incluir"}
                        />
                    </Card>
                    <Card>
                        <Icon>
                            <AiOutlineHeart />
                        </Icon>
                        <img src={group1} alt="" />
                        <h3>Suco de maracujá <IoIosArrowForward /></h3>
                        <Price>R$ 49,97</Price>
                        <Length>
                            <AiOutlineLine />
                                <div id="number">01</div>
                            <AiOutlinePlus />
                        </Length>
                        <Button 
                            title={"incluir"}
                        />
                    </Card>
                </div>
            </Section>
        </main>
        <Footer />
    </Container>
    )
}