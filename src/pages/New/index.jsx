import { Container, Form, Picture } from "./styles";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { IngredientsItem } from "../../components/IngredientsItem"

import { PiCaretLeft } from "react-icons/pi"
import { BsUpload } from "react-icons/bs"

import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export function New() {
    const navigate = useNavigate()

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const [picture, setPicture ] = useState(null)
    const [pictureFile, setPictureFile ] = useState(null)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    function handleAddIngredient() {
        if (newIngredient.length < 3) {
            return alert("Erro: Você está tentando inserir um nome de ingrediente inválido!");
        } else {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewDish() {
        if (!pictureFile) {
            return alert("Erro: Você não inseriu uma imagem para o prato!");
        }
        
        if (!name) {
            return alert("Erro: Você não informou o nome do prato!");
        }

        if (ingredients.length < 1) {
            return alert("Erro: Adicione pelo menos um ingrediente!")
        }

        if (newIngredient) {
            return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
        }

        if (!category) {
            return alert("Erro: Você não selecionou a categoria do prato!");
        }

        if (!price) {
            return alert("Erro: Você não informou o preço do prato!");
        }

        if (!description) {
            return alert("Erro: Você não informou uma descrição para o prato!");
        }

        const formData = new FormData();

        formData.append("picture", pictureFile);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        await api.post("/dishes", formData)
        .then(alert("Prato foi adicionado com sucesso!"), handleBack())
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao criar o prato!");
            }
        });
    }


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
                <h1>Novo prato</h1>
            </header>
             <Form>
                <Picture>
                    { 
                        picture &&
                        <img 
                        src={picture}
                        alt="Foto do prato"
                        />
                    }

                    <label htmlFor="picture">
                        <BsUpload />
                        Seleciona a imagem
                    </label>
                    <input 
                        id='picture'
                        name="picture"
                        accept="image/*"
                        type="file" 
                        onChange={handleChangePicture}
                    />
                </Picture>
                <Input
                    name={"Nome"}
                    className={"name"}
                    placeholder={"Exemplo de Nome: "}
                    onChange={event => setName(event.target.value)}
                />

                <div className="ingredients">
                    <p>Ingredientes</p>
                    <div className="box-ingredients">
                        {
                            ingredients.map((ingredient, index) => (
                                <IngredientsItem
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(ingredient) }
                        
                                />
                            ))
                        }
                         <IngredientsItem
                            isnew
                            placeholder="Adicionar Ingrediente"
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            onClick={handleAddIngredient}
                        />
                    </div>
                </div>

                <div className="category">
                    <label htmlFor="choose">Categoria</label>
                    <select 
                        defaultValue={'default'}
                        id="choose"
                        name="choose"
                        onChange={event => setCategory(event.target.value)}
                    >
                        <option value="default" disabled>Selecione a categoria</option>
                        <option value="Refeição">Refeição</option>
                        <option value="Sobremesa">Sobremesa</option>
                        <option value="Lanche">Lanche</option>
                    </select>
                </div>
                <Input 
                    name={"Preço"}
                    className={"price"}
                    placeholder={"R$ 00,00"}
                    type={"Number"}
                    onChange={event => setPrice(event.target.value)}
                />
                <div className="desc">
                    <label htmlFor="Description">
                        Descrição
                    </label>
                    <textarea
                        name={"Description"}
                        placeholder={"Fala mais sobre o prato..."}
                        type={"textarea"}
                        onChange={event => setDescription(event.target.value)}
                        >
                    </textarea>
                </div>
                <div className="button">
                    <Button
                        title={"Salvar Alterações"}
                        onClick={handleNewDish}
                    />
                </div>
             </Form>
            <Footer />
        </Container>
    )
} 