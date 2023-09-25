import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
    @media (max-width: 680px) {
        margin: 8rem auto;
        padding: 0 clamp(4rem, 1vw + 2rem, 6rem);
    }

    @media (min-width: 680px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2.6rem;

        padding: 0 2.4rem;
        margin: 0 auto;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    button {
        font-size: clamp(0.8rem, 1vw + 1.4rem , 1.6rem);
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        cursor: pointer;

        transition: color 0.2s;

        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    @media (max-width: 680px) {
        margin-top: 1.6rem;
        
        > h2 {
            display: none;
        }
    }

    @media (min-width: 680px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        
        margin: 2.4rem 0;
        padding: 3rem 2.5rem;

        > h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS};
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 500;
            margin: 3.2rem 0 .8rem;
        }
    }
`