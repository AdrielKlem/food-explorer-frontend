import { Container, Banner, Section } from "./styles"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"

import banner  from "../../assets/banner-png.png"

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

                <div className="section">
                    <Card 
                        title="Suco de maracujá"
                        price="4,00"
                    />
                    <Card />
                </div>
            </Section>
        </main>
        <Footer />
    </Container>
    )
}