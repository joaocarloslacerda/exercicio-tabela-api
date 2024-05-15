import { requisicaoGet, requisicaoPost } from "./apiLivros";
import { validaTitulo } from "./validaCampos";

export async function executaCadastro(){
    const tituloLivro = document.getElementById("titulo").value;
    const descricaoLivro = document.getElementById("descricao").value;

    validaTitulo(tituloLivro)

    const url = ("https://api-aula.up.railway.app/livros");

    const body = {
        title: tituloLivro,
        description: descricaoLivro
    };

    await requisicaoPost(url, body);
}

export function adicionarLivrosNaTabela(livros) {
    // Construir tbody com os livros
    const tbody = document.getElementById("livros");
    let linhas = "";

    livros.forEach(livro => {
        linhas += `
            <tr>
                <td>${livro.title}</td>
                <td>${livro.description}</td>                
            </tr>
        `
    });

    tbody.innerHTML = linhas;
}