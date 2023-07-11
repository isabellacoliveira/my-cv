

import Barra from "../Barra";
import Servicos from "../../assets/reactt.gif"
import Servicos1 from "../../assets/csharpp.gif"
import { Codigo, FaleComigoBotao, ImagensGif, MeusServicos } from "./styles";

const MeuServico = () => {
    const abrirChatWhatsApp = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=13997575145';
      };
  return (
    <>   
        <Barra Text="Meus Serviços"></Barra>
            <MeusServicos>
                <p>
                    <div className="conteudoUm">
                        <section>
                            Você precisa de um <strong>Software Personalizado</strong> e eficiente para atender <br/>
                            às necessidades exclusivas do seu negócio? Está procurando por um desenvolvedor<br/>
                            <strong>Full-Stack</strong> experiente e confiável?  <br/>
                            <br />
                            Ofereço serviços de produção de software full-stack para ajudar a <br/>
                            transformar suas ideias em realidade.  Com minha expertise e habilidades<br/>
                            em desenvolvimento de software, posso criar soluções sob medida que <br/>
                            impulsionarão o crescimento e o sucesso do seu negócio. <br/>
                            <br />
                            <strong>O que ofereço:</strong><br/>

                            - Desenvolvimento completo de software, desde a concepção até a implantação. <br/>
                            - Criação de aplicações web e mobile altamente funcionais e intuitivas. <br/>
                            - Arquitetura de software escalável e de alto desempenho. <br/>
                            - Integração de sistemas e APIs para garantir a comunicação eficiente <br/>
                                entre diferentes plataformas. <br/>
                            - Desenvolvimento de interfaces de usuário atraentes e responsivas. <br/>
                            - Manutenção contínua e suporte técnico para garantir o bom funcionamento <br/>
                                do seu software. <br/>

                            <br />

                            <strong>Preços:</strong><br/>

                            - Desenvolvimento de um site simples: a partir de R$ XXXX. <br/>
                            - Desenvolvimento de um aplicativo mobile: a partir de R$ XXXX. <br/>
                            - Desenvolvimento de um sistema completo: a partir de R$ XXXX. <br/>

                            <br />
                            <p className="obs">**Nota: Os preços podem variar dependendo da complexidade do projeto.**</p><br/>
                        
                            <br />
                            Entre em contato comigo hoje mesmo para discutir suas necessidades de software  <br/>
                            e receber uma cotação personalizada.  Estou comprometido em fornecer soluções de alta <br/>
                            qualidade e entregar projetos dentro do prazo estabelecido. <br/>

                            Invista em um software sob medida e obtenha vantagem competitiva no mercado. <br/> 
                            Não perca mais tempo, contate-me agora mesmo <br/> 
                            para começarmos a transformar suas ideias em realidade! <br/>
                            <FaleComigoBotao onClick={abrirChatWhatsApp}>Fale Comigo</FaleComigoBotao>
                        </section>
                    </div>
                </p>
            </MeusServicos>
            <ImagensGif>
                    <Codigo src={Servicos} alt="" />
                    <Codigo src={Servicos1} alt="" />
            </ImagensGif>
    </>
  )
}

export default MeuServico
