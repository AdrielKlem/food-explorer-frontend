import { Container, Form, Picture } from "./styles";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { IngredientsItem } from "../../components/IngredientsItem"

import { PiCaretLeft } from "react-icons/pi"
import { BsUpload } from "react-icons/bs"

import dishPicture from "../../assets/Mask group-1.png"

import { useNavigate } from "react-router-dom"

import { useState } from "react";


export function Change() {
    const navigate = useNavigate()

    const pictureUrl = null
    const [picture, setPicture ] = useState(null)
    const [pcitureFile, setPictureFile ] = useState(null)

    function handleChangePicture(event) {
    const file = event.target.files[0]
    setPictureFile(file)

    const imagePreview = URL.createObjectURL(file)
    setPicture(imagePreview)

    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <Container>
            <Header />
            <header>
                <PiCaretLeft />
                <ButtonText
                onClick={handleBack}
                title="Voltar"
                />
            </header>
             <Form>
                <Picture>
                  { picture &&
                    <img 
                    src={picture}
                    alt="Foto do prato" />}

                    <label htmlFor="picture">
                        <BsUpload />
                        Seleciona a imagem
                        <input 
                        id='picture'
                        type="file" 
                        onChange={handleChangePicture}
                        />
                    </label>
                </Picture>
                <Input 
                    name={"Nome"}
                    placeholder={"Exemplo de Nome: "}
                />

                <div className="ingredients">
                    <IngredientsItem
                        value={"Sabão"}
                    />
                     <IngredientsItem
                        isnew
                        placeholder="Novo Link"
                    />
                </div>

                <div className="category">
                    <label for="escolha">Categoria</label>
                    <select id="escolha" name="escolha">
                        <option value="meal">Refeição</option>
                        <option value="dessert">Sobremesa</option>
                        <option value="snack">Lanche</option>
                    </select>
                </div>
                <Input 
                    name={"Preço"}
                    placeholder={"R$ 00,00"}
                    type={"Number"}
                />
                <div className="desc">
                    <label htmlFor="Description">
                        Descrição
                    </label>
                    <textarea
                        name={"Description"}
                        placeholder={"Descrição aqui"}
                        type={"textarea"}
                        >
                    </textarea>
                </div>
                <div className="buttons">
                    <Button id={"remove"}
                        title={"Excluir"}
                        onClick={handleBack}
                    />
                    <Button
                        title={"Salvar Alterações"}
                        onClick={handleBack}
                    />
                </div>
             </Form>
            <Footer />
        </Container>
    )
} 