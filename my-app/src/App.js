import React from 'react';

import Sobre from './Sobre.js';

import Main from "./Main.js";

import Projetos from "./Projetos.js"

import Feedback from './Feedback.js';

function App() {
  return (
  <div className="App">
    
    <Main/>
    <Sobre/>
    <Projetos/>
    <Feedback/>
  </div>
  );
}

export default App;