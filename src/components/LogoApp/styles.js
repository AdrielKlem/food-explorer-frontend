import styled from "styled-components";
import simbol from "../../assets/Polygon.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > h1 {
        font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
        font-size: clamp(.8rem, 1vw + 1.6rem , 2rem);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`
export const LogoSimbol = styled.div`   
    background: url(${simbol}) no-repeat center;
    background-size: cover;
    
    width: clamp(1rem, 1vw + 2rem , 3rem);
    height: clamp(1.5rem, 1vw + 2.5rem , 3.5rem);
`