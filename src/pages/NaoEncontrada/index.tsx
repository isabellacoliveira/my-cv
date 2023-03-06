import Floor from "../../components/Rodape";
import NotFound from '../../assets/nf.png';
import { BotaoVoltar, NaoEncontradaPage } from "./styles";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada(){
    const navigate = useNavigate();

    function navigation(){
        navigate(-1); 
    }
    return (
        <>        
            <NaoEncontradaPage>
                <img src={NotFound} alt="Página não encontrada" />
                <p>Tem certeza que é isso que está procurando ? </p>
                <BotaoVoltar onClick={navigation}>Voltar</BotaoVoltar>
            </NaoEncontradaPage>
            <Floor />
        </>
    )
}