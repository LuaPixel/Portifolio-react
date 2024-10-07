import uber from "./asstes/uber.png";

import tail from "./asstes/tail.png";

export default function Projetos(){
    return(
        <main className="bg-black Projetos">
            
            <div className="container d-flex ">

            <div className="row justify-content-center cards ">
                
                <div className="col-lg-4 col-md-12 d-flex card flex-column">
                    <div className="card-body">
                        <img src={uber} className="cardImg  d-flex col-lg-12 col-md-12" alt="Header uber"/>
                        <h5 className="card-title">Cabeçalho da Uber</h5>
                        <p >Neste projeto, tive a oportunidade de desenvolver uma tela que reproduz o cabeçalho do aplicativo Uber, utilizando princípios de design e desenvolvimento front-end. O objetivo principal foi entender a estrutura e a funcionalidade de um layout de aplicativo popular, ao mesmo tempo em que explorei a aplicação de cores e tipografia para criar uma interface atraente.</p>
                        <a href="https://raw.githubusercontent.com/LuaPixel/Portif-lio-react/refs/heads/master/src/asstes/uber.png" className="btn verImagem" target="_blank" rel="noopener noreferrer" >Ver Imagem</a>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-12 d-flex card ">
                    <div className="card-body ">
                        <img src={tail} className="cardImg d-flex col-lg-12 col-md-12" alt="Projeto tailwind" />
                        <h5 className="card-title">Tela de Login</h5>
                        <p>Neste projeto, desenvolvi uma tela de login utilizando Tailwind CSS, uma biblioteca de CSS que permite um design responsivo e estiloso de forma eficiente. O foco principal foi criar uma interface amigável e intuitiva para os usuários, garantindo que o processo de login fosse simples e direto.</p>
                        <a href="https://raw.githubusercontent.com/LuaPixel/Portif-lio-react/refs/heads/master/src/asstes/tail.png" className="btn verImagem" target="_blank" rel="noopener noreferrer">Ver Imagem</a>
                    </div>
                </div>
            </div>

            </div>

            
        </main>
    )
}