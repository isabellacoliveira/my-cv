import Floor from "../../components/Rodape";
import Certificado from "../../assets/Isabella Cruz De Oliveira - Curso .NET 5 e Identity_ implementando controle de usuário - Alura 9-1.png"
import { Certificados, CertificadosContainer } from "./styles";
import Barra from "../../components/Barra";

export default function Certifications(){
    return (
        <>        
            <Barra Text="Meus Certificados"/>
            <p>Aqui vocês podem ver algumas de minhas certificações. </p>
            <CertificadosContainer>
                <a href="https://cursos.alura.com.br/certificate/22e45c97-c934-4462-ac10-8ee1dfd4afe5" target={"_blank"}>
                    <Certificados src={Certificado} alt="" />
                </a>
            </CertificadosContainer>
            <Floor />
        </>
    )
}