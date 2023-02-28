import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MeuPerfil from "./pages/meuPerfil";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";

function AppRoutes() {
	return (
        <>        
        <Router>
            <Routes>
                <Route path="/" element={<NavBar />} >
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
