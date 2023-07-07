import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Header";
import { LinguagensProvider } from "./contexts/linguagensProvider";
import LinguagemSelecionada from "./pages/LinguagemSelecionada";
import Skills from "./pages/Skills";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";
import Projeto from "./pages/Projeto";
import ProfissionalExperience from "./pages/Profissional-Experience";
import Training from "./pages/Training";
import Construcao from "./pages/Construcao";
import { ProjetosProvider } from "./contexts/projetosProvider";

function AppRoutes() {
	return (
        <>    
        <LinguagensProvider>    
        <ProjetosProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Cabecalho />} >
                    <Route path="/" element={<PaginaPrincipal />} />
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
        </ProjetosProvider>
        </LinguagensProvider>
        </>
	);
}

export default AppRoutes;
