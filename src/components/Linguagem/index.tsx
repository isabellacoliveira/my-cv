import { Linguagem } from "./styles";
import ILinguagens from "../../types/ILinguagens";

interface LinguagemProps {
    linguagem: ILinguagens;
}

const Linguagens = ({ linguagem }: LinguagemProps) => {
  return (
    <>   
     <Linguagem color={linguagem.cor} colorText={linguagem.corTexto}>
                    <img src={linguagem.imagem} alt="pi" />
                    <p>{linguagem.nome}</p>
    </Linguagem>
    </>
  )
}

export default Linguagens
