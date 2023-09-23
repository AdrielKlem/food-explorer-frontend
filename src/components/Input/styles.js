import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 50%;
    
    margin: auto;

    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        width: 100%;
        height: 56px;
        padding: 12px;
        
        border: 0;
        border-radius: 1rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-left: 16px;
    }
`