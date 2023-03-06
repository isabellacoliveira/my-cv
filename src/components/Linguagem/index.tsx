import { DivLinguagem, Linguagem } from "./styles";
import ILinguagens from "../../types/ILinguagens";
import { Link } from "react-router-dom";

interface LinguagemProps {
    linguagem: ILinguagens;
}

const Linguagens = ({ linguagem }: LinguagemProps) => {
  return (
    <>   
    <DivLinguagem>
     <Linguagem  color={linguagem.cor} colorText={linguagem.corTexto}>
            <Link className="links" to={`/projetos/${linguagem.nome}`}>
                    <img src={linguagem.imagem} alt="pi" />
                    <p>{linguagem.nome}</p>	
						</Link>
    </Linguagem>
    </DivLinguagem>
    </>
  )
}

export default Linguagens
