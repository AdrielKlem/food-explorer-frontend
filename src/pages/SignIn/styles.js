import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
    @media (max-width: 700px) {
        display: flex;
        align-items: stretch;
        flex-direction: column;

        margin: 8rem auto;
        padding: 0 clamp(4rem, 1vw + 2rem, 6rem);
    }

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2.6rem;

        padding: 0 1.6rem;
        margin: 0 auto;
        max-width: 90rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        cursor: pointer;

        transition: color 0.2s;

        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    @media (max-width: 700px) {
        margin-top: 6.4rem;
        
        > h2 {
            display: none;
        }
    }

    @media (min-width: 700px) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        
        margin: 1.6rem 0;
        padding: 3rem 2.5rem;
        gap: 2.4rem;

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