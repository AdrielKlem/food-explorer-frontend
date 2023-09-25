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

`

export const MenuHeader = styled.div`

`