import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 10px; 
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: #fff;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  .icon{
    
  }
`;

export const Button = styled.div`
  display: flex;
`