import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Header";
import { LinguagensProvider } from "./contexts/linguagensProvider";
import Skills from "./pages/Skills";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPrincipal from "./pages/paginaPrincipal";
import ProfissionalExperience from "./pages/Profissional-Experience";
import Training from "./pages/Training";
import { ProjetosProvider } from "./contexts/projetosProvider";
import { FormacaoAcademicaProvider } from "./contexts/formacaoAcademicaProvider";
// import Construcao from "./pages/Construcao";
// import Certifications from "./pages/certification";

function AppRoutes() {
	return (
        <>    
        <FormacaoAcademicaProvider>
        <LinguagensProvider>    
        <ProjetosProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Cabecalho />} >
                    <Route path="/" element={<PaginaPrincipal />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/training" element={<Training />} />
                    {/* <Route path="/certifications" element={<Certifications />} /> */}
                    {/* <Route path="/certifications" element={<Construcao />} /> */}
                    <Route path="/profissional-experience" element={<ProfissionalExperience />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </Router>
        </ProjetosProvider>
        </LinguagensProvider>
        </FormacaoAcademicaProvider>
        </>
	);
}

export default AppRoutes;
