import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    flex-direction: column;

    padding: 0 clamp(4rem, 1vw + 2rem, 6rem);

    margin: 10rem auto;
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;

    margin-top: 6.4rem;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > h2 {
        text-align: left;
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        > svg {
            font-size: 32px;
        }
    }  
`