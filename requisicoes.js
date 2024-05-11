export function requisicaoGet(){

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