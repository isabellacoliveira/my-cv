import styled, { keyframes } from "styled-components";

export const Coder = styled.img`
    width: 100%;
    height: 500px;
    position: relative;
`
export const StatusDiv = styled.div`
    display: flex;
    flex-direction: row;
`
export const Status = styled.div`
   background-color: green;
   color: green;
   border-radius: 50%;
   width: 10px;
   height: 10px;
   border: none;
   margin-right: 10px;
   margin-top: 9px;
`
export const ParagrafoCargo = styled.a`
    font-size: 15px;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px; 

    @keyframes subirDescer {
    0%, 100% {
      transform: translateY(0); /* A posição inicial e final é a mesma */
    }
    50% {
      transform: translateY(-20px); /* Eleva a div 20 pixels no meio da animação */
    }
  }
  
  animation: subirDescer 2s ease-in-out infinite; /* Aplica a animação */
`
export const DivContato = styled.div`
    display: flex;
    justify-content: center;

   img{
    width: 30px;
    margin-right: 20px;
    transform: translateY(-4px);
   }
`

export const ParagrafoExplicativo = styled.a`
    color: #fff;
    font-weight: bold;
    font-family: 'Calibri';
    font-style: normal;
    cursor: pointer;

    p{
        font-family: 'Calibri';
    }
    
    @media (max-width: 900px) {
        font-size: 2px;
    }
    
    @media (min-width: 900px) {
        font-size: 20px;
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

const gradientAnimation = keyframes`
    0%, 30%, 90%, 70%, 80%, 20% {
        background: linear-gradient(to bottom, blue, purple);
    }
    10%, 40%, 60%, 100%, 50% {
        background: linear-gradient(to bottom, #001F3F, #3344aa);
    }
`;


export const DivImgP = styled.div`
    /* background-image: url("https://i2.wp.com/i.giphy.com/media/26tn33aiTi1jkl6H6/giphy-downsized.gif?w=770&ssl=1");
    background-repeat: no-repeat; */
    width: 100%;
    background-size: 100%;
    margin:0;
    padding:0;
    padding-left: 20px;
    flex-direction: row;
    /* background: linear-gradient(to bottom, blue, purple); */
    display: flex;
    animation: ${gradientAnimation} 7s infinite;

    .infos{
        display: flex;
        flex-direction: row;
    }

    .coluna{
        display: flex;
        flex-direction: column;
    }

    .content{
        margin-top: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    @media (max-width: 900px) {
        height: 200px;
        /* padding-top: 140px; */
        padding-bottom: 3px;
    }
    
    @media (min-width: 900px) {
        padding-top: 10px;
        min-height: 400px;
        /* padding-bottom: 100px; */
     
    }

       .skills{
            display: flex;
            justify-content: space-between;
    
            .imagem__logo{
                width: 50px;
                height: 50px;
                border-radius: 0px!important;
            }
            img:hover {
                transform: translateY(-4px);
            }
        }
`
export const FotoMinhaImg = styled.img`
    width: 900px;
    height: 600px;
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
    display: grid;
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do indicador da barra de rolagem */
    border-radius: 4px; /* Raio de borda do indicador */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do indicador da barra de rolagem ao passar o mouse */
  }

@media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 5px; /* Adiciona espaçamento entre os elementos */
}


@media (min-width: 900px) {
    padding-right: 50px;
    padding-left: 50px;
    grid-template-columns: repeat(3, 1fr); /* Define 4 colunas com largura igual */
    gap: 30px; /* Adiciona espaçamento entre os elementos */
    }
`;


export const Title = styled.div`
    background-color:  #3A3335;
    height: 90px;
    text-align: center;
    color: #fff;
    padding-top: 25px;   
`

export const Absoluta = styled.div`
  position: relative;
`

