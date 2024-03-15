import styled from 'styled-components'; 
interface LinguagemProps {
    color: string; 
    colorText: string;
}
export const Linguagem = styled.div<LinguagemProps>` 
    background: ${(props) => props.color};
    margin-left: 20px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;

    a{
        display: flex;
        flex-direction: row;
    }
    
    img{
        width: 50px;
        height: 40px;
        padding-right: 10px;
    }
    
    .links{
        text-decoration: none!important;
        font-weight: bold;
        color: ${(props) => props.colorText};    
    }

    @media (max-width: 900px) {
        width: 200px;
    }

    @media (min-width: 900px) {

    }

  &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
    `

export const DivLinguagem = styled.div`
    width: 800px;
`