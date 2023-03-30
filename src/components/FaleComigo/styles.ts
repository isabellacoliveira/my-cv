import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #3A3335;
    padding-top: 90px;
    padding-bottom: 90px;
    
    img{
        width: 40px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        img{
        margin-right: 20px;
    }
    }
    
    @media (min-width: 900px) {
        flex-direction: row;
    }
`

export const RedesSociais  = styled.div`
    margin-right: 90px;
    display: flex;
    
    @media (max-width: 900px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 auto;
    }
    
    @media (min-width: 900px) {
        flex-direction: column;
    }
`

export const Contato  = styled.form`
    display: flex;
    flex-direction: column;

    p{
        color: #fff;
        padding-bottom: 10px;
        
    }

    @media (max-width: 900px) {
        align-items: center;
    }
    
    @media (min-width: 900px) {
    }
    
`

export const ContatoDiv = styled.div`
    color: #fff;
    p{
        padding-bottom: 20px;
    }

    
    @media (max-width: 900px) {
        align-items: center;

        p{
            text-align: center;
        }
    }
    
    @media (min-width: 900px) {
    }
`

export const InsertContact = styled.input`
    margin-bottom: 20px;
    padding-left: 20px;
    background-color: #2b2728;
    outline: none;
    color: #fff;
    height: 60px;

    ::placeholder { 
        color: #fff;
    }

    @media (max-width: 900px) {
        width: 300px;
    }
    
    @media (min-width: 900px) {
    }
`

export const Send = styled.button`
    background-color: #2b2728;
    color: #fff;
    height: 60px;

    &:active{
        background-color: #fff;
        color:  #2b2728;
    }

    
    @media (max-width: 900px) {
        width: 300px;
    }
    
    @media (min-width: 900px) {
    }
`