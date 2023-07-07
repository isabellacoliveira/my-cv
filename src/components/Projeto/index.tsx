import IProjeto from "../../types/IProjeto";
import { BotaoVisita, ContainerProjeto, NomeProjeto, ProjetoDescricao } from "./styles";

interface ProjetosProps {
    projeto: IProjeto;
}

const Projetos = ({ projeto }: ProjetosProps) => {
    const handleVisitaButtonClick = (gitHub: boolean) => {
        if(gitHub){
            window.open(projeto.urlGithub, "_blank");
        } 
        window.open(projeto.urlVisita, "_blank");
    };
    
  return (
    <>   
     <ContainerProjeto>
           <img src={projeto.imagem} alt="Imagem do Projeto" />
           <NomeProjeto>{projeto.nomeProjeto}</NomeProjeto>
           <ProjetoDescricao>{projeto.descricao}</ProjetoDescricao>
           {projeto.urlVisita ? <BotaoVisita onClick={() => handleVisitaButtonClick(true)}>Visita</BotaoVisita> : null}
           <BotaoVisita onClick={() => handleVisitaButtonClick(false)}>Código Fonte</BotaoVisita>
    </ContainerProjeto>
    </>
  )
}

export default Projetos
