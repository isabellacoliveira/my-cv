import styled from 'styled-components';

  /* left: ${props => props.sidebar ? '0' : '-100%'}; */

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
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
`;