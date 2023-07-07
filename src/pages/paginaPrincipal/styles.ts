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


export const TituloDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    align-items: center;

    a{
        text-decoration: none;
        color: #fff;
    }

    h5{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: bold;
        padding-top: 20px;
        font-size: 40px;
    }

    @media (max-width: 900px) {
        p{
            font-size: 20px;
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
    background-image: url("https://i2.wp.com/i.giphy.com/media/26tn33aiTi1jkl6H6/giphy-downsized.gif?w=770&ssl=1");
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100%;
    margin:0;
    padding:0;
    padding-left: 20px;
    
    @media (max-width: 900px) {
        min-height: 200px;
        padding-top: 160px;

    }
    
    @media (min-width: 900px) {
        padding-top: 400px;
        min-height: 400px;
        padding-bottom: 20px;
     
    }
`
export const ProjetosLinguagemDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 50px;

    div{
        width: 100%;
    }
    `; 


export const LingDiv = styled.div`
padding-left: 20px;
padding-right: 20px;
display: grid;


@media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 5px; /* Adiciona espaçamento entre os elementos */
}


@media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* Define 4 colunas com largura igual */
    gap: 30px; /* Adiciona espaçamento entre os elementos */
    }
`;



export const AboutMe = styled.div`
    display: flex;
    justify-content: center;

    img{
        border-radius: 50%;
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
        margin-top: 50px;
    }

    @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        p, h2, h3{
            padding-top: 10px;
        }
        h3{
            margin-bottom: 20px;
        }
        
        .infos{
            text-align: center;
            padding-bottom: 30px;
        }
    }
    
    @media (min-width: 900px) {
        flex-direction: row;
        p, h2, h3{
            padding-top: 10px;
        }
        h3{
            margin-bottom: 20px;
        }
        
        .infos{
        margin-right: 20px;
        margin-top: 50px;
        font-size: 15px;
    }
    }
`

export const Title = styled.div`
    background-color:  #3A3335;
    height: 90px;
    text-align: center;
    color: #fff;
    padding-top: 25px;   
`

// TODO tirar isso 
 export const BotaoTemporario = styled.button`
    width: 200px;
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