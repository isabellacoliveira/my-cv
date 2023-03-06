import styled from "styled-components";

export const NaoEncontradaPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;

    img{
        padding-bottom: 20px;
        padding-top: 20px;
    }

    @media (max-width: 900px) {
        img{
            width: 340px;
            height: 400px;
        }

        p{
            font-size: 20px;
        }
    }
    
    @media (min-width: 900px) {
        img{
            width: 400px;
          
        }
    }

    p{
        padding-bottom: 20px;
        padding-top: 20px;
    }
`

export const BotaoVoltar = styled.button`
    width: 100px;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border: none;
    background-color: #4c956c;
    border-radius: 40px;
    color: #fff;
    font-weight: bold;
`