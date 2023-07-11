import Engrenagem from "../../assets/engrenagem.png";
import Floor from "../../components/Rodape";
import { ConstrucaoDiv } from "./styles";

export default function Construcao(){

    return (
        <>        
            <ConstrucaoDiv>
                <img src={Engrenagem} alt="Engrenagem" />
                <h4>Essa página está sendo construída.</h4>
                <p>Em breve você poderá visualizar esse conteúdo.</p>
                {/* <h4>This page is being constructed</h4>
                <p>soon you can see this content </p> */}
            </ConstrucaoDiv>
            <Floor />
        </>
    )
}