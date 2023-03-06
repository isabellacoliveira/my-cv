import { Link } from "react-router-dom";
import Floor from "../../components/Rodape";
import { Botao, Content } from "./styles";

export default function LinguagemSelecionada(){
    return (
        <>        
            
            <Content>
                <h1>Angular</h1>
                <p>Aqui você pode encontrar meus projetos em Angular! Basta selecionar o projeto <br/>
                para ver mais detalhes sobre ele. Assim, você será encaminhado para vê-lo ou ler <br/>
                sobre ele</p>
                    <Botao>
                        <Link to={`/projetos/angular/1`} className="links">
                            <p>
                                Nome do projeto
                            </p>
                        </Link>
                    </Botao>
            </Content>
            <Floor />
        </>
    )
}