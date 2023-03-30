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
                <h5>Are you sure? what you are looking for?</h5>
                <p>Sorry, we seem to be lost.</p>
                <BotaoVoltar onClick={navigation}>Back</BotaoVoltar>
            </NaoEncontradaPage>
            <Floor />
        </>
    )
}