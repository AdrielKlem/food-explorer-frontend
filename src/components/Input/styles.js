import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 100%;
    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        width: 100%;
        height: clamp(5.8rem, 1vw + 0.4rem, 6rem);
        padding: 1.2rem;
        
        border: 0;
        border-radius: 1rem;

        font-size: clamp(0.8rem, 1vw + 0.8rem, 1.6rem);

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`