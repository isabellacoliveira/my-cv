import IProjeto from "../../types/IProjeto";
import { BotaoVisita, ContainerProjeto, NomeProjeto, ProjetoDescricao } from "./styles";

interface ProjetosProps {
    projeto: IProjeto;
}

const Projetos = ({ projeto }: ProjetosProps) => {
    const handleVisitaButtonClick = (gitHub: boolean) => {
        if(!gitHub){
            window.location.href = projeto.urlVisita;
        } else{
            window.location.href = projeto.urlGithub;
        }
    };
    
  return (
    <>   
     <ContainerProjeto>
           <img src={projeto.imagem} alt="Imagem do Projeto" />
           <NomeProjeto>{projeto.nomeProjeto}</NomeProjeto>
           <ProjetoDescricao>{projeto.descricao}</ProjetoDescricao>
           {projeto.urlVisita ? <BotaoVisita onClick={() => handleVisitaButtonClick(false)}>Visita</BotaoVisita> : null}
           <BotaoVisita onClick={() => handleVisitaButtonClick(true)}>Código Fonte</BotaoVisita>
    </ContainerProjeto>
    </>
  )
}

export default Projetos
