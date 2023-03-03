import styled from "styled-components";

export const Header = styled.nav`
        width: 100%;
        text-align: center;
        justify-content: space-between;
        flex-direction: row;
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;

    @media (max-width: 900px) {
        background-color: blue;

    }

    @media (min-width: 900px) {
        background-color: red;


    }
`; 

export const Me = styled.img`
    border-radius: 50%;
    width: 50px;
    height:  50px;
`;