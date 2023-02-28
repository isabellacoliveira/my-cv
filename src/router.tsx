import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/SideBar/ContainsSideBar";
import MeuPerfil from "./pages/meuPerfil";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";

function AppRoutes() {
	return (
        <>        
        <Router>
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} >
                    <Route path="/home" element={<PaginaPrincipal />} />
                    <Route path="/perfil" element={<MeuPerfil />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </Router>
        </>
	);
}

export default AppRoutes;
