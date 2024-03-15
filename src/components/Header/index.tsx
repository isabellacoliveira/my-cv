import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Col, Button } from "react-bootstrap";
import { useTraducao } from "../../contexts/Traducao/TraducaoProvider";
import { useTranslation } from 'react-i18next'; 

export default function Cabecalho() {
    const { toggleTraducao } = useTraducao();
    const { t } = useTranslation();
    const navigate = useNavigate();

    
    function goToPage(rota: string): void {
        navigate(rota); 
    }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => goToPage("/")}>I S A H </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => goToPage("/")}>{t('about_me')}</Nav.Link>
            <Nav.Link href="#home" onClick={() => goToPage("/training")}>{t('academic_formation')}</Nav.Link>
            <Nav.Link href="#features" onClick={() => goToPage("/profissional-experience")}>{t('professional_experience')}</Nav.Link>
            <Nav.Link href="#pricing" onClick={() => goToPage("/servicos")}>{t('services')}</Nav.Link>
          </Nav>
          <Col xs="auto">
            <Button type="submit" onClick={toggleTraducao}>Traduzir</Button>
          </Col>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
