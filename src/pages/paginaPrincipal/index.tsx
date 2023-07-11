import { useEffect } from "react";
import FaleComigo from "../../components/FaleComigo";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import {  Absoluta, DivImgP, LingDiv, LinguagensDiv, Paragrafo, ProjetosLinguagemDiv, TituloDiv } from "./styles";
import Barra from "../../components/Barra";
import { useProjetos } from "../../contexts/projetosProvider";
import Projetos from "../../components/Projeto";
import SobreMim from "../../components/SobreMim";
import MeuServico from "../../components/meusServicos";
import FollowMe from "../../components/FollowMe";

export default function PaginaPrincipal(){
    const {getLinguagens } = useLinguagens(); 
    const {projetos, getProjetos } = useProjetos(); 

    useEffect(() => {
		getLinguagens(); 
        getProjetos();
	}, []);

      return (
        <div>
            <DivImgP>
                <Paragrafo>Meu portifólio: Desenvolvedora Full-Stack</Paragrafo>
            </DivImgP>
                <SobreMim />
                <MeuServico />
               
            <LinguagensDiv>
                    <Barra Text="Meus Projetos"></Barra>
                <TituloDiv>
                    <p>Aqui você pode visualizar alguns dos meus projetos! </p>
                </TituloDiv>
                 
                <LingDiv>
                {projetos?.map((item) => (
                    <ProjetosLinguagemDiv>
                        <Projetos projeto={item}/>
                    </ProjetosLinguagemDiv>
                    ))}
                </LingDiv>
            </LinguagensDiv>
            <FaleComigo />
            <Absoluta>
                <FollowMe />
            </Absoluta>
            <Floor />
         
        </div>
    )
}