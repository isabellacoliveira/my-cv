import { Link, Outlet } from "react-router-dom";
import { Header, HeaderRoutes } from "./styles";

export default function Cabecalho(){

    return (
        <>        
        <Header>  
            <HeaderRoutes>
                <Link className="links" to={"/"}>Sobre mim</Link>
                <Link className="links" to={"/training"}>Formação Acadêmica</Link> 
                <Link className="links" to={"/profissional-experience"}>Experiência Profissional</Link>
                {/* <Link className="links" to={"/certifications"}>Certificações</Link> */}
                <Link className="links" to={"/skills"}>Habilidades</Link>
            </HeaderRoutes>

         </Header>
         <Outlet />
        </>
    )
}