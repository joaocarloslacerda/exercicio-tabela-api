export function filtrarLivros(livros, valorDeBusca){

    let dadoBusca = valorDeBusca.toUpperCase();

    let livrosFiltrados = livros.filter((element) => 
        element[0].toUpperCase().includes(dadoBusca));

    return livrosFiltrados;
}
