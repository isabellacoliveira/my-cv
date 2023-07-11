import styled from "styled-components";

export const Language = styled.img`
    width: 120px;
    padding-top: 20px;

    &:hover {
        transform: translateY(-4px);
  }
`

export const Skill = styled.div`
h5{
    padding-top: 20px;
}
img{
    padding-bottom: 20px;
    padding-right: 20px;
}
@media (max-width: 900px) {
    align-items: center;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    img{
        width: 40%;
    }
    }
@media (min-width: 900px) {
    text-align: center;
    }
`
export const Content = styled.div`
    p{
        margin-top: 20px;
        text-align: center;
    }
    @media (max-width: 900px) {
        p{
            font-size: 16px;
            text-align: left;
            padding-left: 10px;
        }
    }
    
`