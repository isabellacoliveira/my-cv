import styled from "styled-components";

export const Botao = styled.div` 
    background-color: #4c956c;
    width: 300px;
    height: 60px;
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

    
    .links{
        text-decoration: none;
        font-weight: bold;
        color: #fff;
    }
`

export const Content = styled.div` 
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;

    p{
        padding-top: 20px;
        padding-bottom: 20px;
    }
`