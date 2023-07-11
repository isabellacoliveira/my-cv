import styled, { css, CSSObject, FlattenSimpleInterpolation } from "styled-components";

interface MeSigaProps {
  isHovered: boolean;
}

export const MeSiga = styled.div<MeSigaProps>`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 9999;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  /* Atualização do estilo para incluir a lógica condicional no width */
  width: 50px;
  transition: width 0.3s ease;
  ${({ isHovered }): FlattenSimpleInterpolation | CSSObject =>
    isHovered
      ? css`
          width: 150px;
        `
      : css`
          width: 80px;
          height: 80px;
        `};

  img {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    cursor: pointer;
  }

  img:hover {
    transform: translateY(-4px);
  }

  div {
    justify-content: center;
    display: flex;
  }

  .botao__dowload{
    border: none;
    margin-top: 10px;
    background-color: #3A3335;
    color: #fff;
    padding: 3px 3px 3px 3px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    background-color: #fff;
    color: #3A3335;
  }
  @media (max-width: 900px) {
       margin-top: 250px;
  }
`;
