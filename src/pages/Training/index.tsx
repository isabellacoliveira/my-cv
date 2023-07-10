import Barra from "../../components/Barra";
import Floor from "../../components/Rodape";
import { Container, Exp, Experiencia } from "./styles";
import { useFormacaoAcademica } from "../../contexts/formacaoAcademicaProvider";
import { useEffect } from "react";
import Formacao from "../../components/Formacao";

export default function Training(){
    const {formacaoAcademica, getFormacoes } = useFormacaoAcademica(); 

    useEffect(() => {
        getFormacoes();
	}, []);
    
    return (
        <>       
        <Barra Text="Cursando"/>
        <Container>
        <Experiencia>
            <Exp>
            {formacaoAcademica?.map((item) => (
                        <Formacao formacao={item}/>
                    ))}
            </Exp>
        </Experiencia>
        </Container>
            <Floor />
        </>
    )
}