import styled from "styled-components";

export const Container = styled.div`

    img {
        width: 24rem;
        height: 24rem;
    }
`

export const Section = styled.div`
    margin: 3.2rem auto;
    padding: 0  6.4rem;

    header {
        display: flex;
        align-items: center;
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
        line-height: 140%; /* 22.715px */
    }
`


export const Ingredients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
    margin-bottom: 1.6rem;

    span {
        background: var(--dark-dark-1000, #192227);

        color: var(--light-light-100, #FFF);
        text-align: center;
        border-radius: 5px;
        /* Poppins/100-medium */
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
    }
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