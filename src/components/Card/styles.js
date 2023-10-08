import styled from "styled-components"


export const Container = styled.div`
    position: relative;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    min-width: 20.5rem;
    min-height: 30rem;
    padding: 2.4rem 1.6rem;

    border-radius: 8px;
    background: var(--dark-dark-200, #00070A);

    position: relative;


    img {
        width: 8.1rem;
        height: 8.1rem;
    }

    h3 {
        display: flex;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS};
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
    }

    `

export const Price = styled.div`
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    text-align: center;
    `

export const Icon = styled.button`
    background: none;
    border: none;
    
    position: absolute;
    right: 14px;

    svg {
        width: 2.4rem;
        height: 2.2rem;    
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        transition: color .5s;
        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
    
    > button {
        border: none;
        background: none;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    
    .counter {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }

        #number {
            width: 2.4rem;
            text-align: center;
        }
    }

    .counter span {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 700;
        text-align: center;
    }
`