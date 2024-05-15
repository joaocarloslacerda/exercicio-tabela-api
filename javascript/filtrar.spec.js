import { filtrarLivros } from "./filtrar"

describe('Testes de filtragem pelo nome dos livros cadastrados', () => {

    const livros = [
        { title: "Clean Code", description: "Um livro sobre código limpo" },
        { title: "Aprendendo a Programar", description: "Do início da programação ao avançado" },
        { title: "POO", description: "Avançando nos conceitos de Orientação a Objetos" }
    ];

    test('Teste deve retornar livros cadastrados', () => {
        expect(filtrarLivros(livros, "Clean Code")).toStrictEqual([{ title: "Clean Code", description: "Um livro sobre código limpo" }])
        expect(filtrarLivros(livros, "Aprendendo a Programar")).toStrictEqual([{ title: "Aprendendo a Programar", description: "Do início da programação ao avançado" }])
        expect(filtrarLivros(livros, "POO")).toStrictEqual([{ title: "POO", description: "Avançando nos conceitos de Orientação a Objetos" }])
    });
    test('Teste não deve retornar livros cadastrados', () => {
        expect(filtrarLivros(livros, "Listas e Grafos")).toStrictEqual([])
        expect(filtrarLivros(livros, "Sistemas Digitais")).toStrictEqual([])
        expect(filtrarLivros(livros, "Matemática para Computação")).toStrictEqual([])
    });    
});