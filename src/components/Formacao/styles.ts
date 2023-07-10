import styled from "styled-components";

export const Logo = styled.img`
    width: 200px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 30px;
`

export const Container = styled.div`
    .fatec{
        display: flex;
        flex-direction: column;
        
        h2{
            padding-bottom: 10px;
            padding-top: 50px;
        }
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
    }
    @media (max-width: 900px) {
            display: flex;
            flex-direction: column;
            align-items: center;
    }
`