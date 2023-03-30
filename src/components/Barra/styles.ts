import styled from "styled-components";

export const Title = styled.div`
    background-color:  #3A3335;
    text-align: center;
    color: #fff;
    
    @media (max-width: 900px) {
        height: 50px;      
        font-size: 10px;
        padding-top: 16px; 
    }
    
    @media (min-width: 900px) {
        height: 90px;
        padding-top: 25px; 
    }
`