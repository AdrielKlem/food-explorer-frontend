import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

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
        width:100%;
        height: 4.8rem;

        padding: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`