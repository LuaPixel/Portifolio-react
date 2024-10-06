import React, {useState} from "react";

import Lua from "./Lua.jpg";

export default function Sobre(){
    const [showMore, setShowMore] = useState (false);
    return(

        <main class="d-flex flex-column mb-5 bg-black text-white ">

        <div class="d-flex">
            <div class="col-6 sobre" id="#moreInfo">
                <h1>Sobre Mim</h1>
                <p id="#intro">
                Sou Luana Bento, uma desenvolvedora front-end apaixonada por criar experiências web envolventes e funcionais. Meu objetivo é transformar ideias em interfaces que sejam intuitivas e visualmente atraentes. Utilizo tecnologias como HTML, CSS e JavaScript para construir sites responsivos e dinâmicos, sempre buscando as melhores práticas para entregar soluções de alta qualidade.
                </p>    
                <button onClick={() => setShowMore(!showMore)} class="x">     {showMore ? "Ver Menos" : "Ver Mais"}

                </button>

                {showMore &&(
                <div>
                    <p>Meu objetivo a longo prazo é me tornar uma desenvolvedora full-stack, expandindo meu conhecimento para o back-end e desenvolvendo aplicações completas e robustas. Estou sempre aberta a novas oportunidades e desafios, pronta para transformar ideias em projetos incríveis.
                    </p>
                </div>
                )}
            </div>

            <img src={Lua} class="lua col-6"/>
        </div>


        </main>
    )
}
