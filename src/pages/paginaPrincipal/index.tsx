import { useEffect, useState } from "react";
import FaleComigo from "../../components/FaleComigo";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import {  Absoluta, DivImgP, LingDiv, FotoMinhaImg, LinguagensDiv, Paragrafo, ParagrafoExplicativo, ParagrafoCargo, ProjetosLinguagemDiv, TituloDiv, DivContato, Status, StatusDiv } from "./styles";
import Barra from "../../components/Barra";
import { useProjetos } from "../../contexts/projetosProvider";
import Projetos from "../../components/Projeto";
import SobreMim from "../../components/SobreMim";
import FollowMe from "../../components/FollowMe";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import FotoMinha from "../../assets/foto-portifolio.png"
import Typescript from "../../assets/ts.png";
import Javascript from "../../assets/js.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Sql from "../../assets/sql.png"
import Java from "../../assets/java.png"
import Spring from "../../assets/spring.png"
import Net from "../../assets/net.png"
import React from "../../assets/re.png"
import Angular from "../../assets/angular.png"
import CSharp from "../../assets/csharp.png"
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
                <div className="content">
                    <div className="infos">
                        <div className="coluna">
                    <ParagrafoCargo>DESENVOLVEDORA     FULL-STACK</ParagrafoCargo> <br />
                    <Paragrafo>Hi, I'm Isabella</Paragrafo> <br />
                    <ParagrafoExplicativo>
                    Como Desenvolvedora Web Full-Stack, minha expertise abrange a criação  e aprimoramento 
                    de projetos com React, Angular, Typescript, C# e .NET, abarcando desde SPAs envolventes 
                    até APIs robustas. Minha bagagem inclui amplo conhecimento de plataformas de desenvolvimento
                    web, proficiência  em bancos de dados relacionais e experiência com sistemas de gerenciamento
                    de versão (GIT) e a ferramenta Azure Devops.

                    <br />
                    <br />
                    <p>
                        <img src="" alt="" />
                        São Paulo, Brasil 
                    </p>
                    <StatusDiv> 
                        <Status>
                            .
                        </Status>
                        <p>Disponível para novos projetos</p>
                    </StatusDiv>
                    <br />
                    <DivContato>
                        <a href="https://www.linkedin.com/in/isabella-cruz-de-oliveira-b761b7233/" target="_blank">
                            <img src={Linkedin} alt="Github" />
                        </a>
                        <a href="https://github.com/isabellacoliveira" target="_blank">
                            <img src={Github} alt="Linkedin" />
                        </a>
                        {/* <img src="" alt="Figma" /> */}
                    </DivContato>
                    </ParagrafoExplicativo>
                        </div>
                <div>
                    <FotoMinhaImg src={FotoMinha} alt="" />
                </div>
                </div>
                </div>
         
            </DivImgP>
                <SobreMim />
                {/* <MeuServico /> */}
               
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