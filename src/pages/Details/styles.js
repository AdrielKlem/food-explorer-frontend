import styled from "styled-components";

export const Container = styled.div`
    img {
        width: 24rem;
        height: 24rem;
    }
`

export const Section = styled.div`
    display:  flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    margin: 3.2rem auto;
    padding: 0 6.4rem;

    header {
        display: flex;
        align-items: center;
    }

    .img {
        text-align: center;
    }

    .desc {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 1.6rem;
    }

    h1 {
        color: var(--light-light-300, #E1E1E6);
        font-family: Poppins;
        text-align: center;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 37.858px */
    }

    p {
        color: var(--light-light-300, #E1E1E6);
        text-align: justify;
        font-family: Poppins;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    @media (min-width: 700px) {
        display: grid;
        justify-content: inherit;
        grid-auto-columns: 1fr 1fr;
        grid-template-areas: 
        "header header"
        "picture info"
        "picture ingredients"
        "picture length";


        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 50rem;

        header {
            grid-area: header;
        }
            
        .img {
            grid-area: picture;
            
            img {
                width: 30rem;
                height: 30rem;
            }
        }

        .desc {
            grid-area: info;
        }

        h1 {
            text-align: left;
        }
    }
`


export const Ingredients = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.6rem;


    @media (min-width: 700px) {
        align-items: center;
        grid-area: ingredients;
    }
`

export const IngredientsItem = styled.span`
    background: var(--dark-dark-1000, #192227);

    color: var(--light-light-100, #FFF);
    border-radius: 5px;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    padding: 0.5rem;
`

export const Length = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    text-align: center;
    margin-bottom: 8.1rem;
    

    > svg {
        width: 2.4rem;
        height: 2.4rem;
    }

    #number {
        width: 2.4rem;
    }

    @media (min-width: 700px) {
        grid-area: length;
    }
`