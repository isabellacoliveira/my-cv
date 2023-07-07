import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header, HeaderRoutes } from "./styles";

export default function Cabecalho(){
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>        
        <Header>  
            {/* <HeaderRoutes>
                <Link className="links" to={"/"}>About me</Link>
                <Link className="links" to={"/training"}>Training</Link> 
                <Link className="links" to={"/profissional-experience"}>Profissional Experience</Link>
                <Link className="links" to={"/certifications"}>Certifications</Link>
                <Link className="links" to={"/skills"}>Skills</Link>
            </HeaderRoutes> */}
            <HeaderRoutes>
                <Link className="links" to={"/"}>Sobre mim</Link>
                {/* mudar pra ingles */}
                <Link className="links" to={"/training"}>Formação Acadêmica</Link> 
                <Link className="links" to={"/profissional-experience"}>Experiência Profissional</Link>
                <Link className="links" to={"/certifications"}>Certificações</Link>
                <Link className="links" to={"/skills"}>Habilidades</Link>
            </HeaderRoutes>

         </Header>
         <Outlet />
        </>
    )
}