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
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Change() {
    const navigate = useNavigate()

    const params = useParams();

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const [data, setData] = useState(null);

    const pictureURL = data && `${api.defaults.baseURL}/files/${data.picture}`
    
    const [picture, setPicture] = useState()
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

    async function handleChangeDish() {
        console.log(pictureURL)

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
            console.log(category)
            return alert("Erro: Você não informou o preço do prato!");
        }

        if (!description) {
            return alert("Erro: Você não informou uma descrição para o prato!");
        }

        const formData = new FormData();

        if (pictureFile) {
            formData.append("picture", pictureFile);
        }

        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("ingredients", ingredients);

        console.log(pictureFile)

        await api.put(`/dishes/${params.id}`, formData)
        .then(alert("Prato foi atualizado com sucesso!"), handleBack())
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
        console.log(pictureFile)
        const imagePreview = URL.createObjectURL(file)
        setPicture(imagePreview)
        console.log(picture)
    }

    function handleBack() {
        navigate(-1)
    }

    async function handleRemoveDish() {
        const isConfirm = confirm("Tem certeza que deseja remover este item?");
    
        if(isConfirm) {
            await api.delete(`/dishes/${params.id}`)
            .then(alert("Prato foi removido com sucesso!!"), handleBack())
        } else {
            return
        }
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data);
            
            const { name, description, category, price, ingredients } = response.data;
            setName(name);
            setDescription(description);
            setCategory(category);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
        }

        fetchDish()
    }, [])

    return (
        <Container>
            <Header />
            <header>
                <PiCaretLeft />
                <ButtonText
                onClick={handleBack}
                title="Voltar"
                />
                <h1>Editar o prato</h1>
            </header>
             <Form encType="multipart/form-data">
                <Picture>
                    <img 
                    src={picture ? picture : pictureURL}
                    alt="Foto do prato" />
                    <label htmlFor="picture">
                        <BsUpload />
                        Seleciona a imagem
                    </label>
                    <input 
                        id='picture'
                        name="picture"
                        accept="image/*"
                        type="file" 
                        onChange={(event) => handleChangePicture(event)}
                    />
                </Picture>
                <Input 
                    name={"Nome"}
                    placeholder={"Exemplo de Nome: "}
                    value={name}
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
                        id="choose"
                        name="choose"
                        value={category}
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
                    placeholder={"R$ 00,00"}
                    type={"Number"}
                    value={price}
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
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        >
                    </textarea>
                </div>
                 <div className="buttons">
                    <Button id={"remove"}
                        title={"Excluir"}
                        onClick={handleRemoveDish}
                    />
                    <Button
                        title={"Salvar Alterações"}
                        onClick={handleChangeDish}
                    />
                </div>
             </Form>
            <Footer />
        </Container>
    )
} 