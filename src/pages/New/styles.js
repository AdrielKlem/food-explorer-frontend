import styled from "styled-components";

export const Container = styled.div`

`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(3) {
        margin-bottom: 24px;
    }
`


export const Picture = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .8rem;
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 100%;
    padding: 1.2rem;
    margin-bottom: 8px;
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