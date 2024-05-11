export function validaTitulo(tituloLivro){

    const campoResultado = document.getElementById("resultado")

    if(tituloLivro.trim() === ''){
        campoResultado.style.display = "block";
        campoResultado.innerText = "Título obrigatório!";
        campoResultado.classList.remove("sucesso");
        campoResultado.classList.add("erro");    
    }
    else{
        campoResultado.style.display = "block";
        campoResultado.innerText = "SUCESSO!";
        campoResultado.classList.remove("erro");
        campoResultado.classList.add("sucesso");
    }
}