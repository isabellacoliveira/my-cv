import styled from 'styled-components';

  /* left: ${props => props.sidebar ? '0' : '-100%'}; */

export const Container = styled.div`
  background-color: #000;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  text-align: center;
  animation: showSidebar .4s;
  overflow: scroll;
  
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 90px;
    cursor: pointer;
  }
  
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  overflow: scroll;
`;

export const Me = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
`;