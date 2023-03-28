import Floor from "../../components/Rodape";
import Modal from "../../assets/modal.jpg";
import { Container, Exp, Experiencia, Logo } from "./styles";
import Progress from "../../components/ProgressBalls";
import Barra from "../../components/Barra";

export default function ProfissionalExperience(){
    return (
        <>
        <Barra Text="My Profissional Experience"/>
        <Container>
        <Experiencia>
            <Exp>
                <Progress />
                <div>
                    
                </div>
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Desenvolvedora Front-End</h2>
                    <br/>
                    <p>MODAL GR - <span>Estágio</span></p>
                    <h5>Outubro 2022 - Dezembro 2022</h5>
                    <br/>
                    <p>Estagiária de Front-End na Modal GR <br/>
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
                <Progress />
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Desenvolvedora Full-Stack</h2>
                    <br/>
                    <p>MODAL GR - <span>Estágio</span></p>
                    <h5>Outubro 2022 - Dezembro 2022</h5>
                    <br/>
                    <p>Estagiária de Full-Stack na Modal GR<br/>
                    <br/>
                        - Desenvolvimento de Aplicações Angular <br/>
                        - Desenvolvimento de Single Page Applications <br/>
                        - Utilizando a linguagem Typescript <br/>
                        - Utilizando a linguagem C# <br/>
                        - Desenvolvimento de APIs (MVC) ASP .NET<br/>
                        -  Banco de Dados (MySql) <br/>
                    </p>
                </div>
            </Exp>
        </Experiencia>
        </Container>
        <Floor />
        </>
    )
}