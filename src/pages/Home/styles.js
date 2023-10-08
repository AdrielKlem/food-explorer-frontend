import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`
    height: 100vh;


    > main {
        padding: 1.2rem;
        margin-bottom: 1.2rem;
    }

    .swiper {
        margin-bottom: 3.2rem;
    }



    .swiper-slide {
        width: none;
    }


    @media (max-width: 500px) {
        .swiper-wrapper {

        }
    }

    @media (min-width: 500px) {
        .swiper-wrapper {
            display: flex;
            gap: 1.6rem;
        }
    }
`

export const Banner = styled.div`
    width: 100%;
    height: clamp(10rem, 5vw + 12.4rem , 20rem);
    margin: 3.2rem auto;
    position: relative;
    display: flex;
    align-items: center;

    img {
        width: clamp(12rem, 26vw + 4rem, 20rem);
        height: clamp(10rem, 24vh + 2rem, 18rem);
        position: absolute;
        left: -12px;
        bottom: 0rem;
    }
    
    .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        
        background: ${({ theme }) => theme.COLORS.GRADIENT_1};
        width: 100%;
        height: 100%;       
    }
    
    .title-banner {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 22rem;
        padding: 0 1.2rem;
        
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`

export const Section = styled.div`
    h2 {
        color:  ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
        margin-bottom: 1.6rem;
    }
`

export const Price = styled.div`
    color: var(--tints-cake-200, #82F3FF);
    text-align: center;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
`

export const Length = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    > svg {
        width: 2.4rem;
        height: 2.4rem;
    }

    #number {
        width: 2.4rem;
    }
`

export const Icon = styled.div`
    position: absolute;
    right: 14px;

    svg {
        width: 2.4rem;
        height: 2.2rem;    
        
        color: var(--light-light-300, #E1E1E6);
    }
`