import Floor from "../../components/Rodape";
import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import Angular from "../../assets/angular.png"
import CSharp from "../../assets/csharp.png"
import Js from "../../assets/js.png"
import Net from "../../assets/net.png"
import React from "../../assets/re.png"
import Vue from "../../assets/vue.png"
import Ts from "../../assets/ts.png"
import Sql from "../../assets/sql.png"
import Java from "../../assets/java.png"
import Spring from "../../assets/spring.png"
import Cplus from "../../assets/cplus.png"
import Node from "../../assets/node.png"

import { Content, Language, Skill } from "./styles";
import Barra from "../../components/Barra";

export default function Skills(){
    return (
        <>        
            <Content>
                <Barra Text="Minhas Habilidades"/>
               {/* <p>Here you can see my Language Skills ! Im still studying to expand my career and knowledge.</p> */}
               <p>Aqui estão algumas linguagens no qual possuo conhecimento. 
                 Estou estudando para expandir minha carreira e conhecimentos.</p>
               <Skill>
                    <h5>Front-End</h5>
                    <Language src={Html} alt="" />
                    <Language src={Css} alt="" />
                    <Language src={Js} alt="" />
                    <Language src={Ts} alt="" />
                    <Language src={React} alt="" />
                    <Language src={Angular} alt="" />
                    {/* <Language src={Vue} alt="" /> */}

                    <h5>Back-End</h5>
                    <Language src={CSharp} alt="" />
                    <Language src={Net} alt="" />
                    <Language src={Sql} alt="" />
                    <Language src={Spring} alt="" />
                    <Language src={Java} alt="" />

                    <h5>Mobile</h5>
                    <Language src={React} alt="" />

               </Skill>
               {/* <Barra Text="Studying"/>
               <Skill>
               <p>And im studying...</p>
                <Language src={Cplus} alt="" />
                <Language src={Node} alt="" />
               </Skill> */}

            </Content>
            <Floor />
        </>
    )
}