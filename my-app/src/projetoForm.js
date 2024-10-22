import React, { useState } from 'react';
import axios from 'axios'; 

const FormularioProjeto = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [linkGit, setLinkGit] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir recarregamento da página
        setLoading(true); // Começar o carregamento

        try {
            const response = await axios.post('http://localhost/banco/index.php', {
                titulo,
                descricao,
                tecnologias,
                link_git: linkGit,
                imagem_url: imagemUrl
            });
            setMensagem(response.data.message); // Exibe a mensagem de sucesso/erro
        } catch (error) {
            if (error.response) {
                setMensagem(error.response.data.error);
            } else {
                setMensagem('Erro ao adicionar projeto.');
            }
            console.error(error);
        } finally {
            setLoading(false); // Finalizar o carregamento
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Tecnologias:</label>
                <input type="text" value={tecnologias} onChange={(e) => setTecnologias(e.target.value)} required />
            </div>
            <div>
                <label>Link GitHub:</label>
                <input type="text" value={linkGit} onChange={(e) => setLinkGit(e.target.value)} required />
            </div>
            <div>
                <label>URL da Imagem:</label>
                <input type="text" value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading}>{loading ? 'Adicionando...' : 'Adicionar Projeto'}</button>
            {mensagem && <p>{mensagem}</p>}
        </form>
    );
};

export default FormularioProjeto;
