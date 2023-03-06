import styled from "styled-components";

export const Coder = styled.img`
    width: 100%;
    height: 500px;
    position: relative;
`

export const Paragrafo = styled.a`
    color: #fff;
    font-weight: bold;
    font-family: 'Raleway';
    font-style: normal;
    cursor: pointer;
    
    @media (max-width: 900px) {
        font-size: 25px;
    }
    
    @media (min-width: 900px) {
        font-size: 72px;
    }
    `

export const LinguagensDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    `; 

export const ProjetosLinguagemDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    margin: 0 auto;
    align-items: center;

    div{
        width: 100%;
    }
    `; 

export const TituloDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;

    h5{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        padding-top: 20px;
        font-size: 40px;
    }

    @media (max-width: 900px) {
        p{
            font-size: 13px;
        }
    }
    
    @media (min-width: 900px) {
        p{
            font-size: 20px;
        }
    }

    p{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    `; 

export const DivImgP = styled.div`
    background-image: url("https://9elements.com/blog/content/images/2019/07/learn_code.png");
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100%;
    margin:0;
    padding:0;
    padding-left: 20px;
    
    @media (max-width: 900px) {
        min-height: 100px;
        padding-top: 60px;

    }
    
    @media (min-width: 900px) {
        padding-top: 400px;
        min-height: 400px;
        padding-bottom: 20px;
     
    }


`

export const LingDiv = styled.div`
    flex-direction: column;
    display: flex;
    width: 25%;
`