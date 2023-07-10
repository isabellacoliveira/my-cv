import { useEffect } from "react";
import FaleComigo from "../../components/FaleComigo";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import Me from '../../assets/isa.jpg';
import {  AboutMe, DivImgP, LingDiv, LinguagensDiv, MeusServicos, Paragrafo, ProjetosLinguagemDiv, TituloDiv } from "./styles";
import Barra from "../../components/Barra";
import { useProjetos } from "../../contexts/projetosProvider";
import Projetos from "../../components/Projeto";

export default function PaginaPrincipal(){
    const {linguagens, getLinguagens } = useLinguagens(); 
    const {projetos, getProjetos } = useProjetos(); 

    useEffect(() => {
		getLinguagens(); 
        getProjetos();
	}, []);

      return (
        <div>
            <DivImgP>
                <Paragrafo>Meu portifólio: Desenvolvedora Full-Stack</Paragrafo>
                {/* <Paragrafo>Meu portifólio: Full-Stack Developer</Paragrafo> */}
            </DivImgP>
                <Barra Text="Meu Perfil">Meu perfil</Barra>
            <AboutMe>
                <div className="infos">
                    <h2>Isabella Cruz de Oliveira</h2>
                    <p>Full-Stack Developer</p>
                    <p>Olá! me chamo Isabella, tenho 19 anos e sou estudante de Análise e Desenvolvimento de Sistemas. <br/>
                        Seja bem-vindo(a) ao meu portifólio! Gosto muito da área de tecnologia e estou sempre <br/>
                        buscando estudar, expandir meus conhecimentos e estudar sempre! Atualmente trabalho <br/>
                        no desenvolvimento de Single Pages Applications utilizando Angular e React. Também no <br/>
                        desenvolvimento de APIs padrão REST, utilizando  C#, .NET. Também possuo conhecimentos em <br/>
                         React Native, MySql e Next.js</p>
                    {/* <h3>Graduating Systems Development Analyst</h3> */}
                    <h3>Cursando Análise e Desenvolvimento de Sistemas</h3>
                    {/* <h3>18 years old</h3> */}
                </div>
                <div>
                    <img src={Me} alt="Minha foto" />
                </div>
            </AboutMe>
                <Barra Text="Meus Serviços"></Barra>
            <MeusServicos>
                <p>
                Você precisa de um <strong>Software Personalizado</strong> e eficiente para atender às necessidades exclusivas do seu negócio? <br/>
                Está procurando por um desenvolvedor <strong>Full-Stack</strong> experiente e confiável?  <br/>

                Ofereço serviços de produção de software full-stack para ajudar a transformar suas ideias em realidade. <br/>
                Com minha expertise e habilidades em desenvolvimento de software, posso criar soluções sob medida que <br/>
                impulsionarão o crescimento e o sucesso do seu negócio. <br/>

                <strong>O que ofereço:</strong><br/>

                - Desenvolvimento completo de software, desde a concepção até a implantação. <br/>
                - Criação de aplicações web e mobile altamente funcionais e intuitivas. <br/>
                - Arquitetura de software escalável e de alto desempenho. <br/>
                - Integração de sistemas e APIs para garantir a comunicação eficiente entre diferentes plataformas. <br/>
                - Desenvolvimento de interfaces de usuário atraentes e responsivas. <br/>
                - Manutenção contínua e suporte técnico para garantir o bom funcionamento do seu software. <br/>

                <strong>Preços:</strong><br/>

                - Desenvolvimento de um site simples: a partir de R$ XXXX. <br/>
                - Desenvolvimento de um aplicativo mobile: a partir de R$ XXXX. <br/>
                - Desenvolvimento de um sistema completo: a partir de R$ XXXX. <br/>

                <strong>**Nota: Os preços podem variar dependendo da complexidade do projeto.**</strong><br/>
            
                Entre em contato comigo hoje mesmo para discutir suas necessidades de software e receber uma cotação personalizada. <br/>
                Estou comprometido em fornecer soluções de alta qualidade e entregar projetos dentro do prazo estabelecido. <br/>

                Invista em um software sob medida e obtenha vantagem competitiva no mercado. Não perca mais tempo, contate-me agora mesmo <br/> 
                para começarmos a transformar suas ideias em realidade! <br/>
                </p>

            </MeusServicos>
                <button>Fale Comigo</button>
            <LinguagensDiv>
                    {/* <Barra Text="My Projects">My Projects</Barra> */}
                    <Barra Text="Meus Projetos"></Barra>
                <TituloDiv>
                    <p>Aqui você pode visualizar alguns dos meus projetos! </p>
                    {/* <p>Hi! Welcome to my portfolio! Here you can find my projects and developments. <br/>
                    Hope you can learn something</p> */}
                    {/* <BotaoTemporario>
                        <a href="https://github.com/isabellacoliveira?tab=repositories" target={"_blank"}>My Projects</a>
                    </BotaoTemporario> */}
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
            <Floor />
         
        </div>
    )
}