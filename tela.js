import { requisicaoGet, requisicaoPost } from "./requisicoes";
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