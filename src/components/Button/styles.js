import { styled } from "styled-components";

export const Container = styled.button`
    font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS};

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
    height: clamp(2.6rem, 1vw + 3.5rem, 6.4rem);
    padding: 0 1.6rem;

    font-size: clamp(0.8rem, 1.6rem , 1.8rem);
    font-weight: 500;

    border: 0;
    border-radius: 1rem;

    &:disabled {
        opacity: 0.5;
    }
`