import React, { useState } from "react";
import Style from "./Style.css"

export default function Feedback() {

    //text= vai armazenar o que o usuário digitar, de inicio ela está vazio ('')
    //setText vai atualizar o valor de text
    //usestate('') função do react que permite ter um estado dentro do componente, neste caso, uma string vazia de inicio
    const [text, setText] = useState(''); 
    //responseMessage armazena a resposta aós enviar o feedback
    //setresponseMessage atualiza o responseMessage
    //usestate inicia como uma string vazia
    const [responseMessage, setResponseMessage] = useState(''); 

        //handleInputChange função chamada sempre que o valor de text mudar. (event) = representa o novo valor
    const handleInputChange = (event) => {
        //setText(event.target.value) aqui será atualizado o novo valor de text
        //event.target refere ao elemento que disparou o evento
        //event.target.value valor atual do campo de texto (que o usuário digitou)
        setText(event.target.value);
    };

    //handleSubmit essa função é chamada quando o "formulário" é enviado
    //async essa função impede que a interface trave enquanto espera uma resposta
    const handleSubmit = async (event) => {
        //esssa linha impede que a página recarregue quando o formulário for enviado
        event.preventDefault(); 
        //mostra no console que o formulário foi enviado
        console.log('Feedback enviado!');

        //try, tenta executar o código, se não der certo ele pula para o "catch"
        try {
            //const response, cria uma variável (response)
            //= await fetch () diz para quardar em response o resultado de fecth
            const response = await fetch('http://localhost/banco/index.php', {
                //POST é usado para enviar os dados para o servidor
                method: 'POST',
                //
                //content-type diz que os dados que serão enviados estão no formato json
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
