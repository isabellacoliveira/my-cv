import { Link, Outlet } from "react-router-dom";
import { Header, HeaderRoutes } from "./styles";
import Acoes from "../Acoes";

export default function Cabecalho(){

    return (
        <>        
        <Header>  
            <button> ISA </button>
            <HeaderRoutes>
                <Link className="links" to={"/"}>Sobre mim</Link>
                <Link className="links" to={"/training"}>Formação Acadêmica</Link> 
                <Link className="links" to={"/profissional-experience"}>Experiência Profissional</Link>
                {/* <Link className="links" to={"/certifications"}>Certificações</Link> */}
                {/* <Link className="links" to={"/skills"}>Habilidades</Link> */}
            </HeaderRoutes>
            {/* <div className="skills">
                    <img className="imagem__logo" src={Html} alt="" />
                    <img className="imagem__logo" src={Css} alt="" />
                    <img className="imagem__logo" src={Typescript} alt="" />
                    <img className="imagem__logo" src={Javascript} alt="" />
                    <img className="imagem__logo" src={Sql} alt="" />
                    <img className="imagem__logo" src={Java} alt="" />
                    <img className="imagem__logo" src={Spring} alt="" />
                    <img className="imagem__logo" src={Net} alt="" />
                    <img className="imagem__logo" src={React} alt="" />
                    <img className="imagem__logo" src={Angular} alt="" />
                    <img className="imagem__logo" src={CSharp} alt="" />
                </div> */}
            <Acoes />
         </Header>
         <Outlet />
        </>
    )
}