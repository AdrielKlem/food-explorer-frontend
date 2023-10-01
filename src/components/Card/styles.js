import styled from "styled-components"


export const Container = styled.div`
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    min-width: 20.5rem;
    min-height: 30rem;
    padding: 2.4rem 1.6rem;

    border-radius: 8px;
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

export const Icon = styled.div`
    position: absolute;
    right: 14px;

    svg {
        width: 2.4rem;
        height: 2.2rem;    
        
        color: var(--light-light-300, #E1E1E6);
    }
`

export const PurchaseCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    button {
        height: 5.6rem;
        max-width: 12.6rem;
    }
    
    .counter {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }

        #number {
            width: 2.4rem;
            text-align: center;
        }
    }

    .counter span {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    p {
        font-weight: 700;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-align: center;
    }
`