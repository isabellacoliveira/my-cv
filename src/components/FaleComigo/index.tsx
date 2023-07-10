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
    swal("success", "Your message was send!", "success")
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
           target="_blank"
            to={"https://www.linkedin.com/in/isabella-cruz-de-oliveira-b761b7233/"}
          >
            <img src={Linkedin} alt="Linkedin"/>
          </Link>
          <Link
           target="_blank"
            to={"https://github.com/isabellacoliveira"}
          >
          <img src={Github} alt="Github" />
          </Link>
          <Link
           target="_blank"
            to={"https://www.instagram.com/isaxx_ah/"}
          >
            <img src={Instagram} alt="Instagram" />
          </Link>
        </RedesSociais>

        <ContatoDiv>
            <p>Send me a message! :) </p>
            <Contato onSubmit={sendEmail}>
              <InsertContact 
                  type="text" 
                  placeholder="Name"
                  value={nomeUsuario}
                  onChange={evento => {
                    setNomeUsuario(evento.target.value);
                    verificarCamposPreenchidos();
                  }}/>
              <InsertContact 
                  type="text" 
                  placeholder="Type your message"
                  value={mensagem}
                  onChange={evento => {
                    setMensagem(evento.target.value);
                    verificarCamposPreenchidos();
                  }}
                  />
                <Send type="submit" disabled={!camposPreenchidos}
                className={!camposPreenchidos ? 'desabilitado' : ''}>Enviar message</Send>
            </Contato>
        </ContatoDiv>
      </Container>
    );
  }
