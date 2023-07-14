import styled from "styled-components";

export const AboutMe = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    img{
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        
        p, h2, h3{
            padding-top: 10px;
        }
        h3{
            margin-bottom: 20px;
        }
        
        .infos{
            text-align: left;
            padding-bottom: 30px;
        }
        .skills{
            display: grid;
            grid-template-columns: repeat(4, 1fr); 
            gap: 5px; 
            justify-content: space-between;
            padding-left: 20px;
            
            img:hover {
                transform: translateY(-4px);
            }
            .imagem__logo{
                margin-top: 6px;
                width: 50px;
                height: 50px;
                border-radius: 0px!important;
            }
        }
    }
    
    @media (min-width: 900px) {
        flex-direction: row;
        p, h2, h3{
            padding-top: 10px;
        }
        
        .infos{
            margin-right: 20px;
            margin-top: 50px;
            font-size: 15px;
        }
        img{
            margin-bottom: 20px;
            margin-top: 60px;
        }
        .skills{
            display: flex;
            justify-content: space-between;
    
            .imagem__logo{
                width: 50px;
                height: 50px;
                border-radius: 0px!important;
            }
            img:hover {
                transform: translateY(-4px);
            }
        }
    }
`