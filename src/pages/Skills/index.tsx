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

import { Language } from "./styles";
import Barra from "../../components/Barra";

export default function Skills(){
    return (
        <>        
            <div>
                <Barra Text="My Skills"/>
               <p>Here you can see my Language Skills ! Im still studying to expand my career and knowledge.</p>
               <div>
                    <h5>Front-End</h5>
                    <Language src={Html} alt="" />
                    <Language src={Css} alt="" />
                    <Language src={Js} alt="" />
                    <Language src={Ts} alt="" />
                    <Language src={React} alt="" />
                    <Language src={Angular} alt="" />
                    <Language src={Vue} alt="" />

                    <h5>Back-End</h5>
                    <Language src={CSharp} alt="" />
                    <Language src={Net} alt="" />
                    <Language src={Sql} alt="" />

                    <h5>Mobile</h5>
                    <Language src={React} alt="" />

               </div>
               <Barra Text="Studying"/>
               <p>And im studying...</p>
                <Language src={Java} alt="" />
                <Language src={Spring} alt="" />
                <Language src={Cplus} alt="" />
                <Language src={Node} alt="" />

            </div>
            <Floor />
        </>
    )
}