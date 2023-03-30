import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header, HeaderRoutes } from "./styles";

export default function Cabecalho(){
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>        
        <Header>  
            {/* <DivIcon>
                <GearIcon spin style={{ fontSize: '2em' }} onClick={showSiderbar} className="icon"/>  
            </DivIcon>    
            {sidebar && <Sidebar active={setSidebar} />}    
            <form>    
                <SearchBar type="search" placeholder="O que você deseja encontrar?" />           
            </form>       
            <Me src={Isa} alt="" /> */}
            <HeaderRoutes>
                <Link className="links" to={"/"}>About me</Link>
                {/* mudar pra ingles */}
                <Link className="links" to={"/training"}>Training</Link> 
                <Link className="links" to={"/profissional-experience"}>Profissional Experience</Link>
                <Link className="links" to={"/certifications"}>Certifications</Link>
                <Link className="links" to={"/skills"}>Skills</Link>
            </HeaderRoutes>

         </Header>
         <Outlet />
        </>
    )
}