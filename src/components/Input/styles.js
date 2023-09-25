import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 100%;

    margin-bottom: 8px;
    border-radius: 10px;

    > label {
        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
    }

    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        width: 100%;
        height: clamp(2.4rem, 1vw + 3.6rem, 4.5rem);
        padding: 1.2rem;
        
        border: 0;
        border-radius: 1rem;
        font-size: clamp(0.8rem, 1vw + 0.6rem, 1.6rem);


        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        fill: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-left: 1.6rem;
    }
`