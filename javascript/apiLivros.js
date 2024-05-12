export async function buscarTodosOsLivros() {
    const url = "https://api-aula.up.railway.app/livros";

    const retornoGetLivros = await fetch(url)
    const livrosJson = retornoGetLivros.json()
    return livrosJson
}

export async function requisicaoPost(url, body){

    const retornoFetch = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
    });

    const responseJson = retornoFetch.json();

    console.log(responseJson);
}