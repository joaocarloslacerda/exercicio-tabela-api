import "../scss/index.scss"
import { executaCadastro } from "./tela"

console.log("Iniciando contexto global: Página de usuário...")

// Exercício 1
// 1 - Adicionar evento de click no botão de execução
document.getElementById("buttonCadastrar")
    .addEventListener("click", executaCadastro)


// 2 - Criar função de início do processo
    // ->criada função executaCadastro() localizada no arquivo tela.js
// 3 - Criar função para envio de dados para a API
    // ->criada função para GET e POST localizadas no arquivo requisicoes.js
// 4 - Informar tela sobre sucesso de cadastro
    // ->criada função validaTitulo() localizada no arquivo validaCampos.js