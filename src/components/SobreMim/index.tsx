

import Barra from "../Barra";
import { AboutMe } from "./styles";
import Me from '../../assets/isa.jpg';


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
    </div>
    <div>
        <img src={Me} alt="Minha foto" />
    </div>
</AboutMe>
    </>
  )
}

export default SobreMim
