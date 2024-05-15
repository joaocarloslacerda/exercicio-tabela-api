import "../scss/cliente.scss"
import { filtrarLivros } from "./filtrar"
import { adicionarLivrosNaTabela } from "./tela"
import { buscarTodosOsLivros } from "./apiLivros"

console.log("Iniciando contexto global: Página de cliente...")

// Exercício 2
document.getElementById("busca")
    .addEventListener("keyup", iniciarFiltrarLivros)

let livros = [] // Usar como memória de livros que foram buscados do servidor (API)
// Adicionar callback function para keyup de botão de busca
iniciar() // Contexto global executando função iniciar ao entrar na tela

async function iniciar() {
    
    livros = await buscarTodosOsLivros()

    adicionarLivrosNaTabela(livros)
}

function iniciarFiltrarLivros() {
    // Buscar valor da tela
    const valorDeBusca = document.getElementById("busca").value

    const livrosFiltrados = filtrarLivros(livros, valorDeBusca)
    adicionarLivrosNaTabela(livrosFiltrados)
}



