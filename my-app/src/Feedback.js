import React, { useState } from "react";

export default function Feedback() {
    const [text, setText] = useState(''); 
    const [responseMessage, setResponseMessage] = useState(''); 

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log('Formulário enviado!');

        try {
            const response = await fetch('http://localhost/banco/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();
            console.log(data); // Adicione esta linha para ver o que está sendo retornado
            setResponseMessage(data.message || data.error);
            setText('');
        } catch (error) {
            console.error('Erro ao enviar feedback:', error);
            setResponseMessage('Erro ao enviar feedback. Tente novamente.');
        }
    };

    return (
        <main className="feed bg-black text-white d-flex flex-column w-100 align-items-center">
            <div className="feedback d-flex flex-column col-6 col-lg-6 col-sm-12 w-75 mb-3">
                <h1>Feedback</h1>
                <p>
                    Seu feedback é essencial para o meu crescimento como desenvolvedora. Fique à vontade para compartilhar sua opinião sobre os projetos apresentados no meu portfólio ou sobre a página em si. Sugestões de melhoria, críticas construtivas ou elogios são todos bem-vindos! <br />
                    Você pode comentar sobre o design, a usabilidade, as funcionalidades dos meus projetos, ou até sobre a experiência de navegação pela página.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="textarea-container d-flex w-100 justify-content-center">
                <textarea
                    className="textarea d-flex mb-5 w-50"
                    value={text}
                    placeholder="Digite aqui!!"
                    onChange={handleInputChange}
                />
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </main>
    );
}
