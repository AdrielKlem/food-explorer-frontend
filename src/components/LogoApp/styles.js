import styled from "styled-components";
import simbol from "../../assets/Polygon.svg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > h1 {
        font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
        font-size: clamp(0.6rem, 1vw + .8rem , 2.4rem);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`
export const LogoSimbol = styled.div`   
    background: url(${simbol}) no-repeat center;
    background-size: cover;
    
    width: clamp(2rem, 1vw + 3rem , 5rem);
    height: clamp(2rem, 1vw + 3rem , 5rem);
`