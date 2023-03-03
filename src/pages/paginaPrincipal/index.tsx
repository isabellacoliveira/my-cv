import { useEffect, useState } from "react";
import Linguagens from "../../components/Linguagem";
import Header from "../../components/SideBar/ContainsSideBar";
import { useLinguagens } from "../../contexts/linguagensProvider";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import Code from "../../assets/coed.webp";
import { Coder, DivImgP, Paragrafo } from "./styles";
import Carrossel from "../../components/Carrossel";

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
                <Coder src={Code}  alt="" />
                <Paragrafo>More about me...</Paragrafo>
            </DivImgP>
            <div>
                <h5>Meus Projetos</h5>
                {linguagens?.map((item) => (
                    <Linguagens linguagem={item} />
                ))}
            </div>
        </div>
    )
}