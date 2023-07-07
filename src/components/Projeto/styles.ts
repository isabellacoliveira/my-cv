import styled from 'styled-components'; 

export const ContainerProjeto = styled.div` 
    background-color: #6495ED33;
    border-radius: 8px;
    padding: 30px 30px 30px 30px;
    align-items: center;
    display: flex;
    flex-direction: column;

    &:hover{
        transform: translateY(-4px);
    }
    img{
        border-radius: 8px;
    }

    
    @media (min-width: 900px) {
        img{
            width: 390px;
            height: 200px;
        }
    }
    @media (max-width: 900px) {
        img{
            width: 140px;
            height: 110px;
        }
        width:170px!important;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`
export const NomeProjeto = styled.p` 
    font-weight: bold;
    padding-top: 4px;
    padding-bottom: 4px;
    
    @media (min-width: 900px) {
        font-size: 25px;
    }
    @media (max-width: 900px) {
        font-size: 15px;
    }
`
export const ProjetoDescricao = styled.div`
  padding-bottom: 5px;
  height: 80px;
  overflow: auto;

  /* Estilos da barra de rolagem */
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
      font-size: 15px;
    }
`;

export const BotaoVisita = styled.button`
    border-radius: 8px;
    background-color: #4c956c;
    text-align: center;
    cursor: pointer;
    border: none;
    margin-top: 10px;
    padding: 5px 5px 5px 5px;
    
    &:hover{
        background-color: white;
    }
    
    @media (min-width: 900px) {
        margin-bottom: 10px;
        height: 40px;
        width: 100%;
    }

    @media (max-width: 900px) {
       width: 130px!important;
       height: 30px;
       margin-bottom: 6px;
    }
`




