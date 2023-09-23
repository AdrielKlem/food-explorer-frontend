import styled from "styled-components";
import simbol from "../../assets/Polygon.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > h1 {
        font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
        font-size: 3.7rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`
export const LogoSimbol = styled.div`   
    background: url(${simbol}) no-repeat center;
    background-size: cover;
    
    width: 4.5rem;
    height: 5.5rem;
`