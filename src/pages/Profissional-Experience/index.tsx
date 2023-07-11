import Floor from "../../components/Rodape";
import Modal from "../../assets/modal.jpg";
import Shopee from "../../assets/shopee.png";
import { Container, Exp, Experiencia, Logo } from "./styles";
import Barra from "../../components/Barra";

export default function ProfissionalExperience(){
    return (
        <>
        <Barra Text="Minha Experiência Profissional"/>
        <Container>
        <Experiencia>
            <Exp>
                    <div className="responsive">
                    </div>
                    <div>
                        <Logo src={Shopee} alt="" />
                    </div>
                    <div>
                        <h2>Vendedora</h2>
                        <br/>
                        <p>Shopee - <span>Autônomo</span></p>
                        <h5>Fevereiro de 2022 - Autalmente</h5>
                        <br/>
                        <p>Vendedora de Produtos na plataforma Shopee<br/>
                        <br/>
                            - Atendimento ao Público <br/>
                            - Gerenciamento de Estoque <br/>
                            - Criação do Nome e da Marca da Lojinha <br/>
                        </p>
                    </div>
                </Exp>
            <Exp>
                <div className="responsive">
                </div>
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Desenvolvedora de Front-End</h2>
                    <br/>
                    <p>MODAL GR - <span>Estágio</span></p>
                    <h5>Outubro de 2022 - Dezembro 2022</h5>
                    <br/>
                    <p>Estagiária de Front-end na Modal GR <br/>
                    <br/>
                       - Estagiaria do  processo de formação<br/>
                       - Desenvolvimento de Aplicações React  <br/>
                       - Utilizando a linguagem Typescript <br/>
                       - Desenvolvimento de Single Page Applications <br/>
                       - Integração com APIs  <br/>
                       - Utilização de metodologias ágeis (SCRUM)  <br/>
                    </p>
                </div>
            </Exp>
            <Exp>
                <div className="responsive">
                </div>
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Desenvolvedora de Full-Stack</h2>
                    <br/>
                    <p>MODAL GR - <span>Estágio</span></p>
                    <h5>Janeiro de 2023 - Atualmente</h5>
                    <br/>
                    <p>Full-Stack Internship at Modal GR<br/>
                    <br/>
                        - Desenvolvimento de Aplicações Angular <br/>
                        - Desenvolvimento de Single Page Applications <br/>
                        - Utilizando a linguagem Typescript <br/>
                        - Utilizando a linguagem C# <br/>
                        - Desenvolvimento de APIs (MVC) ASP .NET<br/>
                        - Banco de Dados (MySql) <br/>
                    </p>
                </div>
            </Exp>
           
        </Experiencia>
        </Container>
        <Floor />
        </>
    )
}