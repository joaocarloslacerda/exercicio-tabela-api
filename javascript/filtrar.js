export function filtrarLivros(livros, valorDeBusca){

    let dadoBusca = valorDeBusca.toUpperCase();
    let livrosFiltrados = livros.filter((element) => 
        element.title.toUpperCase().includes(dadoBusca));

    return livrosFiltrados;
}
