import styled from "styled-components";

export const Container = styled.div`
    header {
        margin-top: 3rem;
        margin-left: 3rem;

        h1 {
            margin-top: 1.8rem;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .category {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        
        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);

        select {
            
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            padding: 1.2rem; 

            &:focus {
                border-color: #007bff;
                box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
            }

            &:blur {
                outline: none;
                border: none;
            }
        }
    }

    .desc {  
        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);

        display: flex;
        flex-direction: column;
        gap: 0.8rem;

                
        textarea {

            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            width: 100%;
            height: 9rem;
            padding: 1.2rem;
            
            border: 0;
            border-radius: 1rem;
            font-size: clamp(0.8rem, 1vw + 0.6rem, 1.6rem);


            &:placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }   
        }

    }

    .ingredients {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
`

export const Picture = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .8rem;
    
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
    width: 100%;
    padding: 1.2rem;
    margin-bottom: 8px;
    border-radius: 10px;

    img {
        width: 12.8rem;
        height: 12.8rem;
    }

    > label {
        display: flex;
        align-items: center;
        gap: .8rem;


        font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
    }
    
    input {
        display: none;
    }
`