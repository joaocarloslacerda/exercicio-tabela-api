import { filtrarLivros } from "./filtrar"

describe('Testes de filtragem pelo nome dos livros cadastrados', () => {

    const livros = [
        { title: "Clean Code", description: "Um livro sobre código limpo" },
        { title: "Aprendendo a Programar", description: "Do início da programação ao avançado" },
        { title: "POO", description: "Avançando nos conceitos de Orientação a Objetos" }
    ];
    const valorDeBusca = "Clean Code";

    test('Teste deve retornar livros cadastrados', () => {
        expect(filtrarLivros(livros, valorDeBusca)).toStrictEqual([{ title: "Clean Code", description: "Um livro sobre código limpo" }])
    });
});