import { useEffect, useState } from "react";
import FaleComigo from "../../components/FaleComigo";
import Linguagens from "../../components/Linguagem";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import Me from '../../assets/isa.jpg';
import {  AboutMe, BotaoTemporario, DivImgP, LingDiv, LinguagensDiv, Paragrafo, ProjetosLinguagemDiv, TituloDiv } from "./styles";
import Barra from "../../components/Barra";
import { useProjetos } from "../../contexts/projetosProvider";
import Projetos from "../../components/Projeto";

export default function PaginaPrincipal(){
    const {linguagens, getLinguagens } = useLinguagens(); 
    const {projetos, getProjetos } = useProjetos(); 

    useEffect(() => {
		getLinguagens(); 
        getProjetos();
        console.log(projetos);
	}, []);

    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
      }; 

      return (
        <div>
            {/* <Header toggleTheme={toggleTheme}/>  */}
            <DivImgP>
                <Paragrafo>Meu portifólio: Desenvolvedora Full-Stack</Paragrafo>
                {/* <Paragrafo>Meu portifólio: Full-Stack Developer</Paragrafo> */}
            </DivImgP>
                <Barra Text="Meu Perfil">Meu perfil</Barra>
            <AboutMe>
                <div className="infos">
                    <p>Full-Stack Developer</p>
                    <h2>Isabella Cruz de Oliveira</h2>
                    <p>Olá! me chamo Isabella, tenho 19 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Seja bem-vindo(a) ao meu portifólio! <br/>
                        Gosto muito da área de tecnologia e estou sempre buscando estudar, expandir meus conhecimentos e estudar sempre! Atualmente trabalho <br/>
                        no desenvolvimento de Single Pages Applications utilizando Angular e React. Também no desenvolvimento de APIs padrão REST, utilizando <br/>
                        C#, .NET. Também possuo conhecimentos em React Native, MySql e Next.js</p>
                    {/* <h3>Graduating Systems Development Analyst</h3> */}
                    <h3>Cursando Análise e Desenvolvimento de Sistemas</h3>
                    {/* <h3>18 years old</h3> */}
                </div>
                <div>
                    <img src={Me} alt="Minha foto" />
                </div>

            </AboutMe>
            <LinguagensDiv>
                    {/* <Barra Text="My Projects">My Projects</Barra> */}
                    <Barra Text="Meus Projetos"></Barra>
                <TituloDiv>
                    {/* traduzir isso */}
                    <p>Aqui você pode visualizar alguns dos meus projetos! </p>
                    {/* <p>Hi! Welcome to my portfolio! Here you can find my projects and developments. <br/>
                    Hope you can learn something</p> */}
                    {/* <BotaoTemporario>
                        <a href="https://github.com/isabellacoliveira?tab=repositories" target={"_blank"}>My Projects</a>
                    </BotaoTemporario> */}
                </TituloDiv>
                 
                {/* <LingDiv>
                    {linguagens?.map((item) => (
                    <ProjetosLinguagemDiv>
                        <Linguagens linguagem={item} />
                    </ProjetosLinguagemDiv>
                    ))}
                </LingDiv> */}
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