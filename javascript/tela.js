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
    let tbody = document.getElementById("livros");

    tbody.innerHTML = '';

    livros.forEach(element => {
        let tr = document.createElement("tr");
        let tdTitulo = document.createElement("td");
        let tdDescricao = document.createElement("td");

        tdTitulo.textContent = element[0];
        tdDescricao.textContent = element[1];

        tr.appendChild(tdTitulo);
        tr.appendChild(tdDescricao);

        tbody.appendChild(tr);
    });
}