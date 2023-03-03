import styled from 'styled-components'; 
interface LinguagemProps {
    color: string; 
    colorText: string;
}
export const Linguagem = styled.div<LinguagemProps>` 
    background: ${(props) => props.color};
    color: ${(props) => props.colorText};    
    width: 200px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px;
    cursor: pointer;

    img{
        width: 50px;
        height: 50px;
        padding-right: 10px;
    }
`