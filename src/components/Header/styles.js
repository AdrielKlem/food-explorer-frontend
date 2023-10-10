import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    
    display: flex;
    align-items: center;
    justify-content: ${({$menuOpen}) => $menuOpen ? 'left' : 'space-around'};
    
    width: 100%;
    min-height: 8rem;

    svg {
        height: 3.2rem;
        width: 3.2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .admin {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .logo {
        position: relative;
        
        > h1 {
            width: 15px;
            height: 15px;
        }
    }
    
    .order {
        background: none;
        border: none;
    }

    @media (min-width: 680px) {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 2fr 3fr 1.5fr .5fr;

        .Nome {
            width: 100%;
            margin-right: 1.6rem;
        }

        .admin {
            font-size: 1rem;
            position: absolute;
            right: 0;
            bottom: -5px;
        }
    }
`

export const Menu = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    width: 100%;
    margin: 1.2rem auto 0;
`

export const MenuHeader = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    font-size: 2.4rem;
    padding: 1.2rem;
    
    display: flex;
    gap: 0.8rem;
    align-items: center;

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`

export const MenuBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin: 2.4rem auto; 
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
`

export const MenuOption = styled(Link)`
    display: flex;
    align-self: left;

    border: none;
    border-bottom: 1px solid  ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;

    width: 100%;

    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
`