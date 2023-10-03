import { Container, Banner, Section } from "./styles"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css";

import banner  from "../../assets/banner-png.png"

export function Home() {
    const { user } = useAuth()
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState([])
    console.log(dishes.Refeicao)

    useEffect(() => {
        async function fetchDishes() {
          const response = await api.get(`/dishes?name=${search}`);
          setDishes(response.data);
    }
    fetchDishes();
    }, [search])

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
 

            <Section >
                <h2>Refeições</h2>
                {
                    dishes.filter(dish => dish.category === "Refeição").length > 0 &&
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={false}
                            grabCursor={true}
                            loop={true}
                            loopfillgroupwithblank={true}
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                "@1.00": {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                "@1.20": {
                                    slidesPerView: 4,
                                    spaceBetween: 160,
                                },
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper section"
                        >
                            {
                                dishes.filter(dish => dish.category === "Refeição")
                                .map((dish, index) => console.log(dish))
                                /*
                                (
                                    <SwiperSlide
                                        key={String(index)}
                                    >
                                        <Card
                                            data={dish}
                                        />
                                    </SwiperSlide>
                                ))
                                */
                            }
                        </Swiper>
                }

                <h2>Refeições</h2>

                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    loopfillgroupwithblank={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.20": {
                            slidesPerView: 4,
                            spaceBetween: 160,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper section"
                >
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida"
                            price="4,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card 
                            className="swiper-slide" 
                            title="Comida 1"
                            price="4,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 2"
                            price="5,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 3"
                            price="8,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 3"
                            price="8,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 3"
                            price="8,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 3"
                            price="8,00"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Card
                            className="swiper-slide" 
                            title="Comida 4"
                            price="10,00"
                        />
                    </SwiperSlide>
                </Swiper>   
            </Section>
        </main>
        <Footer />
    </Container>
    )
}