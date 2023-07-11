import styled from 'styled-components'; 

export const MeusServicos = styled.section`
padding-top: 20px;
padding-bottom: 20px;
justify-content: center;
display: flex;
flex-direction: row;
align-items: center;
margin: 0 auto;

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

strong{
    font-weight: bold;
    padding-top: 20px;
    font-size: 20px;
}
p{
    padding-top: 10px;
}

.conteudoUm{
    color: #fff;
    
    section{
        padding: 20px 10px 20px 20px;
        background: linear-gradient(to bottom, blue, purple);
        margin-bottom: 20px;

        .obs{
            font-weight: bold;
        }
    }

    button:hover {
    transform: translateY(-4px);
}
    @media (max-width: 900px) {
       width: 300px;
    }
}

`

export const FaleComigoBotao = styled.button`
border: none;
width: 100%;
background-color: #fff;
margin-top: 20px;
font-size: 15px;
height: 40px;
border-radius: 8px;
cursor: pointer;

`
export const ImagensGif = styled.div`
    justify-content: center;
    display: flex;
    padding-bottom: 10px;

    @media (max-width: 900px) {
       display: flex;
       flex-direction: column;
    }
    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
    }
 `
 export const Codigo = styled.img`
    padding-left: 20px;
    
    @media (max-width: 900px) {
        width: 350px;
        padding-top: 10px;
    }
    @media (min-width: 900px) {     
        width: 500px;
        height: 400px;
    }
 `