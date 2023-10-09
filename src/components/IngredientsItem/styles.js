import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    max-width: fit-content;
    padding: 0 1.2rem;


    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > input {
        height: 4.8rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`