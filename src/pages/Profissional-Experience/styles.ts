import styled from "styled-components";

export const Logo = styled.img`
    width: 200px;
    padding-right: 20px;
`

export const Experiencia = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-bottom: 20px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Exp = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        .responsive{
            display: none;
        }

        h2{
            padding-top: 20px;
        }
    }
    
    @media (min-width: 900px) {
        flex-direction: row;
    }
`