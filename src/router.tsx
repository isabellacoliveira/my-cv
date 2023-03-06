import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Header";
import { LinguagensProvider } from "./contexts/linguagensProvider";
import Certifications from "./pages/certification";
import LinguagemSelecionada from "./pages/LinguagemSelecionada";
import MeuPerfil from "./pages/meuPerfil";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";
import Projeto from "./pages/Projeto";

function AppRoutes() {
	return (
        <>    
        <LinguagensProvider>    
        <Router>
            <Routes>
                <Route path="/" element={<Cabecalho />} >
                    <Route path="/home" element={<PaginaPrincipal />} />
                    <Route path="/aboutMe" element={<MeuPerfil />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/projetos/:linguagem" element={<LinguagemSelecionada />}/>
                    <Route path="/projetos/:linguagem/:id" element={<Projeto />}/>
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </Router>
        </LinguagensProvider>
        </>
	);
}

export default AppRoutes;
