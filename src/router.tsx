import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Header";
import { LinguagensProvider } from "./contexts/linguagensProvider";
import Certifications from "./pages/certification";
import LinguagemSelecionada from "./pages/LinguagemSelecionada";
import Skills from "./pages/Skills";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";
import Projeto from "./pages/Projeto";
import ProfissionalExperience from "./pages/Profissional-Experience";
import Training from "./pages/Training";
import Floor from "./components/Rodape";
import Construcao from "./pages/Construcao";

function AppRoutes() {
	return (
        <>    
        <LinguagensProvider>    
        <Router>
            <Routes>
                <Route path="/" element={<Cabecalho />} >
                    <Route path="/home" element={<PaginaPrincipal />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/training" element={<Training />} />
                    {/* <Route path="/certifications" element={<Certifications />} /> */}
                    <Route path="/certifications" element={<Construcao />} />
                    <Route path="/profissional-experience" element={<ProfissionalExperience />} />
                    <Route path="/draws" element={<NaoEncontrada />} /> 
                    <Route path="/music" element={<NaoEncontrada />} />
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
