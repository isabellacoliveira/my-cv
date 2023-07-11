import { MeSiga } from "./styles"
import Linkedin from '../../assets/linkedin.webp';
import Github from '../../assets/github.png';
import { useState } from "react";
import Seta from '../../assets/seta.webp'
import PDFFile from '../../assets/isabella-curriculo.pdf';
import { saveAs } from "file-saver";

const downloadFile = () => {
  saveAs(PDFFile, "isabella-cruz-de-oliveira-curriculo.pdf");
};

const FollowMe = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    const handleVisitaButtonClick = (gitHub: boolean) => {
        if(!gitHub){
            window.location.href = "https://github.com/isabellacoliveira";
        } else{
            window.location.href = "https://www.linkedin.com/in/isabella-cruz-de-oliveira-b761b7233/";
        }
    };

  return (
    <>   
        <MeSiga
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isHovered={isHovered}>
            {!isHovered ?  <img src={Seta} alt="" /> : null}
           
            {isHovered ? "Me siga nas redes sociais!" : ""}
            
            <br />  
            {isHovered ? 
            <>  
                <div>
                <img src={Linkedin} onClick={() => handleVisitaButtonClick(false)} alt="Meu Linkedin" />
                <img src={Github} onClick={() => handleVisitaButtonClick(true)} alt="Meu Github" />
                </div> 
                <button className="botao__dowload" onClick={downloadFile}>Meu Curriculo (Download) </button>
            </>

            : null}
           
        </MeSiga>
        
    </>
  )
}

export default FollowMe
