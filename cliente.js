import "./scss/cliente.scss"

console.log("Iniciando contexto global: Página de cliente...")

// Exercício 2
// 0 - Ler todo o código e entender o que falta
// 1 - Adicionar pontos faltantes, como click do botão de filtrar chamando iniciarFiltrarLivros
document.getElementById("busca")
    .addEventListener("input", iniciarFiltrarLivros)
// 2 - Construir função apiLivros_BuscarTodosOsLivros
// 3 - Construir função tela_AdicionarLivrosNaTabela
// 4 - Construir função utilitariosVetores_filtrarVetore
// 5 - Testar unitaria mente função utilitariosVetores_filtrarVetor
// 6 - Construir função iniciarFiltrarLivros para click do botão buscar
// 7 - Separar funções em seus módulos (remova o que vem antes do underline _ e coloque em um arquivo com o mesmo nome)

let livros = [] // Usar como memória de livros que foram buscados do servidor (API)
// Adicionar callback function para keyup de botão de busca

iniciar() // Contexto global executando função iniciar ao entrar na tela

async function iniciar() {
    
    const livrosRetornados = await apiLivros_BuscarTodosOsLivros()

    livrosRetornados.forEach(element => {
        let title = element.title;
        let description = element.description;

        livros.push([title, description]);
    });

    tela_AdicionarLivrosNaTabela(livros)
}

async function apiLivros_BuscarTodosOsLivros() {
    const url = ("https://api-aula.up.railway.app/livros");

    const retornoGetLivros = await fetch(url)
    const livrosJson = retornoGetLivros.json()
    return livrosJson
}

function tela_AdicionarLivrosNaTabela(livros) {
    // Construir tbody com os livros
    livros.forEach(element => {
        let tbody = document.getElementById("livros");

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

function iniciarFiltrarLivros() {
    // Buscar valor da tela
    const dadoBusca = document.getElementById("busca").value
    // filtrarLivros(livros, valorDeBusca)
    // adicionarLivrosNaTabela(livrosFiltrados)
}

/* Testar função abaixo exemplo (
    const listaOriginal = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "José", idade: 25 },
        { nome: "João", idade: 12 },
    ]
    const valorDeBusca = "João"
    const propriedade = "nome"
    const resultado = filtrarVetor(listaOriginal, valorDeBusca, propriedade)
    console.log(resultado)
    // Deve retornar [{ nome: "João", idade: 20 }, { nome: "João", idade: 12 }]
) */
function utilitariosVetores_filtrarVetor(listaOriginal, valorDeBusca, propriedade) {
}



