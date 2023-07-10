import IFormacaoAcademica from "../../types/IFormacaoAcademica";
import { Container, Logo } from "./styles";

interface FormacaoProps {
    formacao: IFormacaoAcademica;
}

const Formacoes = ({ formacao }: FormacaoProps) => {
    
  return (
    <>   
    <Container>
        <Logo src={formacao.imagem} alt="" />
        <div className="fatec">
            <h2>{formacao.nome}</h2>
            <p>{formacao.local}</p>
            <h5>{formacao.periodo}</h5>
        </div>
    </Container>
    </>
  )
}

export default Formacoes
