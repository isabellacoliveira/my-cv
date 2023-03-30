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
                <div className="responsive">
                <Progress />
                </div>
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Front-End Developer</h2>
                    <br/>
                    <p>MODAL GR - <span>Internship</span></p>
                    <h5>October 2022 - December 2022</h5>
                    <br/>
                    <p>Front-End Internship at Modal GR <br/>
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
                <Progress />
                </div>
                <div>
                    <Logo src={Modal} alt="" />
                </div>
                <div>
                    <h2>Full-Stack Developer</h2>
                    <br/>
                    <p>MODAL GR - <span>Internship</span></p>
                    <h5>January 2023 - Currently</h5>
                    <br/>
                    <p>Full-Stack Internship at Modal GR<br/>
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