import { useEffect, useState } from "react";
import Linguagens from "../../components/Linguagem";
import Header from "../../components/SideBar/ContainsSideBar";
import { useLinguagens } from "../../contexts/linguagensProvider";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

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
            <Header toggleTheme={toggleTheme}/> 
            <div>
                <h5>Meus Projetos</h5>
                {linguagens?.map((item) => (
                    <Linguagens linguagem={item} />
                ))}
            </div>
        </div>
    )
}