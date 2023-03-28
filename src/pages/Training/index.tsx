import Barra from "../../components/Barra";
import Floor from "../../components/Rodape";
import Fatec from "../../assets/fatec.jpg";
import Dio from "../../assets/dio.jpg";
import Alura from "../../assets/alura.jpg";
import { Container, Exp, Experiencia, Logo } from "./styles";

export default function Training(){
    return (
        <>       
            <Barra Text="Graduating"/>
            <Container>
        <Experiencia>
            <Exp>
                <div>
                    <Logo src={Fatec} alt="" />
                </div>
                <div>
                    <h2>Análise e Desenvolvimento de Sistemas</h2>
                    <br/>
                    <p>Fatec - <span>Praia Grande</span></p>
                    <h5>Fevereiro 2022 - Dezembro 2024</h5>
                    <br/>
                    <p>
                    <br/>
                       Grade: <br/>
                       - Arquitetura e Organização de Computadores <br/>
                       - Algoritmos e Lógica de Programação <br/>
                       - Laboratório de Hardware <br/>
                       - Programação em Microinformática (HTML, CSS, Javascript) <br/>
                       - Engenharia de Software I (Metodologias Ageis)<br/>
                       - Linguagem de Programação (Java) <br/>
                       - Sistemas de Informação <br/>
                       - Estruturas de Dados (C++) <br/>
                       - Engenharia de Software II (Analise de Requisitos, UML) <br/>
                       - Interação Humano Computador (prototipagem) <br/>
                       - Sistemas Operacionais I <br/>
                    </p>
                </div>
            </Exp>
            <Exp>
                <div>
                    <Logo src={Dio} alt="" />
                </div>
                <div>
                    <h2>Desenvolvimento Back-End</h2>
                    <br/>
                    <p>Digital Innovation One </p>
                    <br/>
                    <p>Bootcamp: Banco PAN Java Developer<br/>
                        Grade: <br/>
                        - Dominando IDEs JAVA <br/>
                        - Aprendendo a sintaxe JAVA <br/>
                        - Logica condicional e controles de fluxo JAVA <br/>
                        - Estrutura de repetição e Arrays em JAVA <br/>
                        - Estrutura de Dados em JAVA <br/>
                        - Entendendo Métodos JAVA  <br/>
                        - Programação Orientada a Objetos com JAVA <br/>
                        - Trabalho com COLLECTIONS JAVA  <br/>
                        - DEBUGGING JAVA <br/>
                        - Tratamento de Exceções em JAVA  <br/>
                        - Gerenciamento de Dependências e Build em JAVA com MAVEN  <br/>
                        - Testes Unitários com JUNIT <br/>
                        - Abstraindo um BOOTCAMP usando orientação a objetos em JAVA  <br/>
                        - Primeiros Passos com SQL <br/>
                        - introdução ao MONGO DB e banco de dados NOSQL  <br/>
                        - Boas práticas com DYNAMO DB <br/>
                        - Principais protocolos e comunicação na internet <br/>
                        - Imersão no Spring Framework com Spring Boot  <br/>
                        - Criando uma API Rest documentada com Spring Web e Swagger <br/>
                        - Adicionando segurança a uma API Rest com Spring Security  <br/>
                        - Conhecendo Spring Data JPA na prática com JAVA   <br/>
                        - Criando uma API Rest conectada ao AMAZON RDS com JAVA  <br/>
                        - Explorando padrões de projeto na prática com JAVA   <br/>
                    </p>
                </div>
            </Exp>
            <Exp>
                <div>
                    <Logo src={Alura} alt="" />
                </div>
                <div>
                    <h2>Desenvolvimento Full-Stack</h2>
                    <br/>
                    <p>Alura </p>
                    <br/>
                    <p>Cursos realizados:<br/>
                    <br/>
                        - HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB<br/>
                        - CONSULTAS SQL: AVANÇANDO NO SQL COM MYSQL<br/>
                        - SQL COM MYSQL: MANIPULE E CONSULTE DADOS<br/>
                        - VUE3: EXPLORANDO O FRAMEWORK<br/>
                        - VUE3: AVANÇANDO NO FRAMEWORK<br/>
                        - .NET 5 E IDENTITY: IMPLEMENTANDO CONTROLE DE USUÁRIO<br/>
                        - .NET 6: CRIANDO UMA WEB API<br/>
                        - .NET 6: RELACIONANDO ENTIDADES<br/>
                        - APRENDA A PROGRAMAR EM C# COM ORIENTAÇÃO A OBJETOS<br/>
                        - C#: EXPLORANDO A LINGUAGEM<br/>
                        - C#: ENTENDENDO EXCEÇÕES<br/>
                        - C#: ORIENTAÇÃO A OBJETOS<br/>
                        - C#: TRABALHANDO COM ARRAYS E COLEÇÕES<br/>
                        - C#: USANDO HERANÇA E IMPLEMENTANDO INTERFACES<br/>
                        - ANGULAR 14: EVOLUINDO A APLICAÇÃO<br/>
                        - ANGULAR 14: APLIQUE OS CONCEITOS E DESENVOLVA SEU PRIMEIRO CRUD<br/>
                        - REACT COM TYPESCRIPT<br/>
                        - REACT: OTIMIZANDO A PERFORMANCE<br/>
                        - REACT: TESTANDO OS SEUS COMPONENTES<br/>
                        - HTTP: ENTENDENDO A WEB POR BAIXO DOS PANOS<br/>
                        - REACT: CONHECENDO A BIBLIOTECA REACT ROUTER<br/>
                        - REACT: ESCREVENDO COM TYPESCRIPT<br/>
                        - REACT: GERENCIANDO ESTADO COM RECOIL<br/>
                        - REACT: INTEGRANDO SEU PROJETO REACT COM APIS<br/>
                        - REACT: LIDANDO COM ARQUIVOS ESTÁTICOS<br/>
                        - REACT: ABSTRAINDO SEU CSS COM STYLED COMPONENTS<br/>
                        - REACT: DESENVOLVENDO COM JAVASCRIPT<br/>
                        - REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT<br/>
                        - REACT: GERENCIAMENTO DE ESTADOS GLOBAIS COM CONTEXTAPI<br/>
                        - JAVASCRIPT PARA WEB: CRIE PÁGINAS DINÂMICAS<br/>
                        - JAVASCRIPT: MANIPULANDO O DOM<br/>    
                        - NODE.JS: CRIANDO SUA PRIMEIRA BIBLIOTECA<br/>    
                        - C++: CONHECENDO A LINGUAGEM E A STL<br/>    
                    </p>
                </div>
            </Exp>
        </Experiencia>
        </Container>
            <Floor />
        </>
    )
}