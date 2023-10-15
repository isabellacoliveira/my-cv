import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IProjeto from '../../types/IProjeto';

interface ProjetosProps {
    projeto: IProjeto;
}
export const CardProjeto = ({ projeto }: ProjetosProps) => {
    const handleVisitaButtonClick = (gitHub: boolean) => {
        if(!gitHub){
            window.location.href = projeto.urlVisita;
        } 
        window.location.href = projeto.urlGithub;
    };
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projeto.imagem} />
      <Card.Body>
        <Card.Title>{projeto.nomeProjeto}</Card.Title>
        <Card.Text>
            {projeto.descricao}
        </Card.Text>
        {projeto.urlVisita ?  <Button variant="primary" onClick={() => handleVisitaButtonClick(false)}>Visitar</Button> : null}

        <Button variant="primary" onClick={() => handleVisitaButtonClick(true)}>Código Fonte</Button>
      </Card.Body>
    </Card>
  );
}

