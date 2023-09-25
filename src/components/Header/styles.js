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
    }
`

export const Menu = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    width: 100%;
    margin: 1.2rem auto 0;
`

export const MenuHeader = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 1.2rem;

    display: flex;
    align-items: center;
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

export const Logout = styled.button`
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