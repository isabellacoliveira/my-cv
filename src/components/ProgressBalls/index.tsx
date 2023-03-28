import Bolinha from "../../assets/Ellipse 1.png";
import Barra from "../../assets/Rectangle 3981.png";
import { Barrinha, Bolinhas, Container } from "./styles";

const Progress = () => {
  return (
    <>   
      <Container>
        <Bolinhas src={Bolinha} alt="" />
        <Barrinha src={Barra} alt="" />
      </Container>
    </>
  )
}

export default Progress
