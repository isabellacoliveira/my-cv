import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #3A3335;

    img{
        width: 40px;
        margin-bottom: 20px;
    }
`

export const RedesSociais  = styled.div`
    margin-right: 90px;
    display: flex;
    flex-direction: column;
`

export const Contato  = styled.form`
    display: flex;
    flex-direction: column;

    p{
        color: #fff;
        padding-bottom: 10px;
    }
    
`

export const ContatoDiv = styled.div`
    color: #fff;
    p{
        padding-bottom: 20px;
    }
`

export const InsertContact = styled.input`
    height: 60px;
    margin-bottom: 20px;
    padding-left: 20px;
    background-color: #2b2728;
    outline: none;
    color: #fff;

    ::placeholder { 
        color: #fff;
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
`