import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;


    > main {
        padding: 1.2rem;
        margin-bottom: 1.2rem;
    }
`

export const Banner = styled.div`
    background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    width: 100%;
    height: clamp(10rem, 5vw + 12.4rem , 20rem);
    margin: 3.2rem auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;



    img {
        width: 18rem;
        height: 14rem;

        position: absolute;
        left: -0.8rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 18.5rem;


        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`

export const Section = styled.div`
    .section {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        overflow: auto;
    }

    h2 {
        color: var(--light-light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
        margin-bottom: 1.6rem;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    min-width: 20.5rem;
    padding: 2.4rem 1.6rem;

    border-radius: 8px;
    border: 1px solid var(--dark-dark-300, #000204);
    background: var(--dark-dark-200, #00070A);

    position: relative;


    img {
        width: 8.1rem;
        height: 8.1rem;
    }

    > h3 {
        display: flex;
        align-items: center;

        color: var(--light-light-300, #E1E1E6);

        /* Poppins/100-medium */
        font-family: Poppins;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem; /* 171.429% */
    }
`

export const Price = styled.div`
    color: var(--tints-cake-200, #82F3FF);
    text-align: center;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
`

export const Length = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    > svg {
        width: 2.4rem;
        height: 2.4rem;
    }

    #number {
        width: 2.4rem;
    }
`

export const Icon = styled.div`
    position: absolute;
    right: 14px;

    svg {
        width: 2.4rem;
        height: 2.2rem;    
    }
`