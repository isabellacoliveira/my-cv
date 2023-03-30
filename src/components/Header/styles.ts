import styled from "styled-components";

export const DivIcon = styled.div`
    background-color: #fff;

    .icon{
        cursor: pointer;
    }
`; 

export const Header = styled.nav`
        width: 100%;
        background-color: #000000;
        
    @media (min-width: 900px) {
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px; 
        padding-right: 10px;
    }
`; 

export const SearchBar = styled.input`
  width: 500px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url("../../assets/sicon.png"); // colocar icone 
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  font-family: 'Courier New';

    
     @media (max-width: 900px) {
        width: 200px;
    }

    @media (min-width: 900px) {

    }

  &:hover {
        transform: translateY(-4px);
        cursor: pointer;
        width: 800px;
  }
`;

export const Me = styled.img`
    border-radius: 50%;
    width: 50px;
    height:  50px;
`;

export const HeaderRoutes = styled.div`
    .links{
        color: #FFF;
        text-decoration: none;
        padding-right: 20px;
    }
    .links:hover{
        color: purple;
    }

    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    @media (min-width: 900px) {
        justify-content: space-between;
        display: flex;
    }
    `


