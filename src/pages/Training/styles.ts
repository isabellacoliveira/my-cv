import styled from "styled-components";

export const Experiencia = styled.div`
    display: flex;
    margin-left: 20px;
    padding-bottom: 20px;
      
    flex-direction: column;
    
    @media (max-width: 900px) {
    }
    
    @media (min-width: 900px) {
        flex-direction: column;
    }
 
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
  
`

export const Exp = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        img{
            width: 200px;
        }

        p{
            font-size: 10px;
            font-weight: bold;
        }

        h2{
            padding-top: 20px;
        }
    }
    @media (min-width: 900px) {
        flex-direction: column;
        p{
            font-size: 10px;
            font-weight: bold;
        }

        .dio{
            margin-right: 60px;
        }
        .fatec{
            margin-right: 90px;
        }
    }
`