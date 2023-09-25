import { Container, Banner, Section, Card, Price, Length, Fav } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

import { IoIosArrowForward } from "react-icons/io"
import { AiOutlineLine, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai"

import banner  from "../../assets/banner-png.png"
import group1  from "../../assets/Mask group-1.png"

export function Home() {
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
                        <Fav>
                            <AiOutlineHeart />
                        </Fav>
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
    </Container>
    )
}