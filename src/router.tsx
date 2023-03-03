import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Header";
import { LinguagensProvider } from "./contexts/linguagensProvider";
import MeuPerfil from "./pages/meuPerfil";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";

function AppRoutes() {
	return (
        <>    
        <LinguagensProvider>    
        <Router>
            <Routes>
                <Route path="/" element={<Cabecalho />} >
                    <Route path="/home" element={<PaginaPrincipal />} />
                    <Route path="/perfil" element={<MeuPerfil />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </Router>
        </LinguagensProvider>
        </>
	);
}

export default AppRoutes;
