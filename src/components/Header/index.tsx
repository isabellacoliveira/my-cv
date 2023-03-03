import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Isa from '../../assets/isa.jpg'; 
import { Header, Me } from "./styles";

export default function Cabecalho(){
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>        
        <Header>      
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <input type="search" />
            <Me src={Isa} alt="" />
         </Header>
         <Outlet />
        </>
    )
}