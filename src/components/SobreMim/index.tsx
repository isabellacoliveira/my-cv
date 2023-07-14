

import Barra from "../Barra";
import { AboutMe } from "./styles";
import Me from '../../assets/isa.jpg';
import Typescript from "../../assets/ts.png";
import Javascript from "../../assets/js.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Sql from "../../assets/sql.png"
import Java from "../../assets/java.png"
import Spring from "../../assets/spring.png"
import Net from "../../assets/net.png"
import React from "../../assets/re.png"
import Angular from "../../assets/angular.png"
import CSharp from "../../assets/csharp.png"


const SobreMim = () => {
  return (
    <>   
   <Barra Text="Meu Perfil">Meu perfil</Barra>
<AboutMe>
    <div className="infos">
        <h2>Isabella Cruz de Oliveira</h2>
        <p>Full-Stack Developer</p>
        <p>Olá! me chamo Isabella, tenho 19 anos e sou estudante de Análise e Desenvolvimento de Sistemas. <br/>
            Seja bem-vindo(a) ao meu portifólio! Gosto muito da área de tecnologia e estou sempre <br/>
            buscando estudar, expandir meus conhecimentos e estudar sempre! Atualmente trabalho <br/>
            no desenvolvimento de Single Pages Applications utilizando Angular e React. Também no <br/>
            desenvolvimento de APIs padrão REST, utilizando  C#, .NET. Também possuo conhecimentos em <br/>
             React Native, MySql e Next.js</p>
        <h3>Cursando Análise e Desenvolvimento de Sistemas</h3>
        <h3>Skills: </h3>
        <div className="skills">
          <img className="imagem__logo" src={Html} alt="" />
          <img className="imagem__logo" src={Css} alt="" />
          <img className="imagem__logo" src={Typescript} alt="" />
          <img className="imagem__logo" src={Javascript} alt="" />
          <img className="imagem__logo" src={Sql} alt="" />
          <img className="imagem__logo" src={Java} alt="" />
          <img className="imagem__logo" src={Spring} alt="" />
          <img className="imagem__logo" src={Net} alt="" />
          <img className="imagem__logo" src={React} alt="" />
          <img className="imagem__logo" src={Angular} alt="" />
          <img className="imagem__logo" src={CSharp} alt="" />
        </div>

    </div>
    <div>
        <img src={Me} alt="Minha foto" />
    </div>
</AboutMe>
    </>
  )
}

export default SobreMim
