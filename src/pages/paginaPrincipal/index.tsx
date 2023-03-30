import { useEffect, useState } from "react";
import FaleComigo from "../../components/FaleComigo";
import Linguagens from "../../components/Linguagem";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import Me from '../../assets/isa.jpg';
import {  AboutMe, BotaoTemporario, DivImgP, LingDiv, LinguagensDiv, Paragrafo, ProjetosLinguagemDiv, Title, TituloDiv } from "./styles";
import Barra from "../../components/Barra";

export default function PaginaPrincipal(){
    const {linguagens, getLinguagens } = useLinguagens(); 

    useEffect(() => {
		getLinguagens(); 
	}, []);

    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
      }; 
    return (
        <div>
            {/* <Header toggleTheme={toggleTheme}/>  */}
            <DivImgP>
                <Paragrafo>Full-Stack Developer</Paragrafo>
            </DivImgP>
                <Barra Text="My Profile">My profile</Barra>
            <AboutMe>
                <div className="infos">
                    <p>Full-Stack Developer</p>
                    <h2>Isabella Cruz de Oliveira</h2>
                    <h3>Graduating Systems Development Analyst</h3>
                    <h3>18 years old</h3>
                </div>
                <div>
                    <img src={Me} alt="Minha foto" />
                </div>

            </AboutMe>
            <LinguagensDiv>
                    <Barra Text="My Projects">My Projects</Barra>
                <TituloDiv>
                    {/* traduzir isso */}
                    <p>Hi! Welcome to my portfolio! Here you can find my projects and developments. <br/>
                    Hope you can learn something</p>
                    <BotaoTemporario>
                        <a href="https://github.com/isabellacoliveira?tab=repositories" target={"_blank"}>My Projects</a>
                    </BotaoTemporario>
                </TituloDiv>
                 
                {/* <LingDiv>
                    {linguagens?.map((item) => (
                    <ProjetosLinguagemDiv>
                        <Linguagens linguagem={item} />
                    </ProjetosLinguagemDiv>
                    ))}
                </LingDiv> */}
            </LinguagensDiv>
            <FaleComigo />
            <Floor />
         
        </div>
    )
}