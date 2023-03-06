import { useEffect, useState } from "react";
import Linguagens from "../../components/Linguagem";
import Floor from "../../components/Rodape";
import { useLinguagens } from "../../contexts/linguagensProvider";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import {  DivImgP, LingDiv, LinguagensDiv, Paragrafo, ProjetosLinguagemDiv, TituloDiv } from "./styles";

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
                <Paragrafo>Desenvolvedora Full-Stack</Paragrafo>
            </DivImgP>
            <LinguagensDiv>
                <TituloDiv>
                    <h5>Meus Projetos</h5>
                    <p>Olá! Seja bem-vindo(a) ao meu portifólio! Aqui você encontrará meus projetos feitos em <br/>
                    diversas linguagens de progamação e frameworks diversos.</p>
                </TituloDiv>
                <LingDiv>
                    {linguagens?.map((item) => (
                    <ProjetosLinguagemDiv>
                        <Linguagens linguagem={item} />
                    </ProjetosLinguagemDiv>
                    ))}
                </LingDiv>
            </LinguagensDiv>
            <Floor />
        </div>
    )
}