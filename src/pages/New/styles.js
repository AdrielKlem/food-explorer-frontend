import styled from "styled-components";

export const Container = styled.div`
    header {
        margin-top: 3rem;
        margin-left: 3rem;

        h1 {
            margin-top: 1.8rem;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 3rem auto 10rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .name {
        grid-area: name;
    }

    .category {
        grid-area: category;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        
        font-size: 1.6rem;

        select {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            padding: 1.2rem; 

            &:focus {
                border-color: #007bff;
                box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
            }

            &:blur {
                outline: none;
                border: none;
            }
        }
    }

    .desc {  
        font-size: 1.6rem;
        grid-area: desc;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

                
        textarea {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            width: 100%;
            height: 16rem;
            padding: 1.2rem;
            
            border: 0;
            border-radius: 1rem;

            resize: none;

            &:placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }   
        }

    }

    .ingredients {
        grid-area: ingredient;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .box-ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: .8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        padding: 0.8rem;
        border-radius: 1rem;

        overflow-y: scroll;
        max-height: 12rem;
    }

    .price {
        grid-area: price;
    }

    .button {
        grid-area: button;
    }

    @media (min-width: 700px) {
        display: grid;
        align-items: center;
        grid-template-areas: 
        "picture name category"
        "ingredient ingredient price"
        "desc desc desc"
        "none none button";
        max-width: 90%;

        .box-ingredients > * {
            margin-bottom: 0;
        }
    }
`

export const Picture = styled.div`
    grid-area: picture;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .8rem;
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 100%;
    min-height: 5rem;
    padding: 1.2rem;
    border-radius: 10px;

    img {
        width: 12.8rem;
        height: 12.8rem;
    }

    > label {
        display: flex;
        align-items: center;
        gap: .8rem;


        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
    }
    
    input {
        display: none;
    }
`