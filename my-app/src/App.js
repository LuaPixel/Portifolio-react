import React from 'react';

import Sobre from './Sobre.js';

import Main from "./Main.js";

import Linkedin from "./asstes/linke.jpg";

import Github from "./asstes/github.jpg"; 

import Style from "./Style.css"

import Lua from "./asstes/Lua.jpg";

import list from "./asstes/to-do.png";

import ilus from "./asstes/ilus.jpg";

import uber from "./asstes/uber.png";

import tail from "./asstes/tail.png";

import Projetos from "./Projetos.js"

import projetoForm from "./projetoForm.js"


function App() {
  return (
  <div className="App">
    
    <Main/>
    <Sobre/>
    <Projetos/>
  </div>
  );
}

export default App;