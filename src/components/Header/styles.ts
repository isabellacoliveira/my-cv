import styled from "styled-components";

export const DivIcon = styled.div`
    background-color: #fff;

    .icon{
        cursor: pointer;
    }
`; 

export const Header = styled.nav`
        width: 100%;
        text-align: center;
        justify-content: space-between;
        flex-direction: row;
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px; 
        padding-right: 10px;
        background-color: #000000;

    @media (max-width: 900px) {
        background-color: blue;

    }

    @media (min-width: 900px) {
        /* background-color: red; */
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



