import uber from "./uber.png";

import tail from "./tail.png";

export default function Projetos(){
    return(
        <main>
            <div class="card">
            <img src={uber} class="cardImg" alt="Header uber"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="src/uber.png " class="btn btn-primary" target="_blank" >Go somewhere</a>
            </div>
            </div>
        </main>
    )
}