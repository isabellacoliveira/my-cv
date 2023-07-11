import { Container, Contato, ContatoDiv, InsertContact, RedesSociais, Send } from "./styles";
import Linkedin from '../../assets/linkedin.webp';
import Github from '../../assets/github.png';
import Instagram from '../../assets/insta.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from 'sweetalert';
import Emailjs from '@emailjs/browser'; 

export default function FaleComigo() {
  const[nomeUsuario, setNomeUsuario] = useState('');
  const[mensagem, setMensagem] = useState(''); 
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  function sendEmail(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    swal("Sucesso!", "Sua mensagem foi enviada!", "Sucesso")
    setNomeUsuario(""); 
    setMensagem("");

    const templateParametros = {
        from_name: nomeUsuario, 
        message: mensagem
    }
    
    Emailjs.send("service_h5ld8bh", "template_e6tjkb7", templateParametros, "ugKUR3e3BFOJG0avi")
    .then((response: any) => {
        console.log("Email enviado", response.status, response.text)
    }, (err: any) => {
        console.log("Email não enviado.", err)
    })
  }
  function verificarCamposPreenchidos() {
    setCamposPreenchidos(nomeUsuario !== '' && mensagem !== '');
  }
  
    return (
      <Container>
        <RedesSociais>
          <Link
          className="rede"
           target="_blank"
            to={"https://www.linkedin.com/in/isabella-cruz-de-oliveira-b761b7233/"}
          >
            <img src={Linkedin} alt="Linkedin"/>
          </Link>
          <Link
          className="rede"
           target="_blank"
            to={"https://github.com/isabellacoliveira"}
          >
          <img src={Github} alt="Github" />
          </Link>
        </RedesSociais>

        <ContatoDiv>
            <p>Me envie uma mensagem! :) </p>
            <Contato onSubmit={sendEmail}>
              <InsertContact 
                  type="text" 
                  placeholder="Digite seu nome"
                  value={nomeUsuario}
                  onChange={evento => {
                    setNomeUsuario(evento.target.value);
                    verificarCamposPreenchidos();
                  }}/>
              <InsertContact 
                  type="text" 
                  placeholder="Escreva sua mensagem"
                  value={mensagem}
                  onChange={evento => {
                    setMensagem(evento.target.value);
                    verificarCamposPreenchidos();
                  }}
                  />
                <Send type="submit" disabled={!camposPreenchidos}
                className={!camposPreenchidos ? 'desabilitado' : ''}>Enviar mensagem</Send>
            </Contato>
        </ContatoDiv>
      </Container>
    );
  }
