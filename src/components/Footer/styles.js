import styled from "styled-components";


export const Container = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    
    display: flex;
    align-items: center;
    justify-content: ${({$menuOpen}) => $menuOpen ? 'left' : 'space-around'};
    
    width: 100%;
    min-height: 8rem;

    position: fixed;
    bottom: 0;
    z-index: 1;

    h1 {
        font-size: 1.6rem;
    }

    span {
        font-size: 1rem;
    }

    svg {
        height: 1.8rem;
        width: 1.6rem;
    }
`