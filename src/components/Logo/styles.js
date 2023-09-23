import styled from "styled-components";
import simbol from "../../assets/Polygon.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > h1 {
        font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
        font-size: clamp(1.6rem, 3vw + 2.2rem , 4.8rem);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`
export const LogoSimbol = styled.div`   
    background: url(${simbol}) no-repeat center;
    background-size: cover;
    
    width: clamp(1.5rem, 5vw + 0.4rem , 4.5rem);
    height: clamp(2.5rem, 6vw + 0.5rem , 5.5rem);
`