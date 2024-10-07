import React from 'react';

import Linkedin from "./asstes/linke.jpg";

import Github from "./asstes/github.jpg";

import ilus from "./asstes/ilus.jpg";

export default function Main(){
    const handleClick = () => {
        window.open("https://wa.me/qr/347MNYFBV74TF1");
    };
    return(
    <main className="d-flex bg-black w-100 min-vh-100 mx-auto">
        <div className=" luana d-flex flex-column gap-3 text-white col-sm-12 col-md-12 col-lg-6">
            <h1 className="code mb-3"> &lt; Luana<br />Bento / &gt;</h1>

            <h3 className="desen mb-4">Desenvolvedora Front-end</h3>

            <div className="icons d-flex flex-row justify-content-center mb-4 ">
                <a href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid.12619604099_asid.149519181115_crid.657343811713_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9197208&mcid=6821526239111716925&cid=&gad_source=1&gclid=Cj0KCQjwpP63BhDYARIsAOQkATaYA5fxlh1EL69Lz_zKLFktA7pns66F95I68LJ59vcpn0CTtexRsikaAj_nEALw_wcB&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer"  className="hreff d-flex"> 

                <img src={Linkedin} className="linke" alt="icone linkedin" />
                </a>
                
                <a href="https://github.com/LuaPixel" target="_blank" rel="noopener noreferrer" className="hreff d-flex">
                <img src={Github} className="git" alt="icone git hub"/>
                </a>

                
            </div>

            


            <button onClick={handleClick} alt="Contato" className="work " target="_blank" text="Work toghether"> Transforme Suas Ideias em Realidade <br/>   — Fale Comigo </button>

            
            
        </div>

        <div className="ilusImg d-flex col-md-12 col-sm-12 col-lg-6 mx-auto">
            <img src={ilus} className="ilus w-100 img-fluid" alt="foto com hover"/>
        </div>

        
    </main>
    )
}
