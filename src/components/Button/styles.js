import { styled } from "styled-components";

export const Container = styled.button`
    font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS};

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: clamp(4.8rem, 1vw + 0.4rem, 5.4rem);
    border: 0;
    padding: 0 1.6rem;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`