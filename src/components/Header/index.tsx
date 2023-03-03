import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Isa from '../../assets/isa.jpg'; 
import { DivIcon, Header, Me, SearchBar } from "./styles";
import GearIcon from '@rsuite/icons/Gear';

export default function Cabecalho(){
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>        
        <Header>  
            <DivIcon>
                <GearIcon spin style={{ fontSize: '2em' }} onClick={showSiderbar} className="icon"/>  
            </DivIcon>    
            {sidebar && <Sidebar active={setSidebar} />}    
            <form>    
                <SearchBar type="search" placeholder="O que você deseja encontrar?" />           
            </form>       
            <Me src={Isa} alt="" />

         </Header>
         <Outlet />
        </>
    )
}