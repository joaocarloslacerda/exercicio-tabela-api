import "./scss/index.scss"
import { executaCadastro } from "./tela"

console.log("Iniciando contexto global: Página de usuário...")

// Exercício 1
// 1 - Adicionar evento de click no botão de execução
document.getElementById("buttonCadastrar")
    .addEventListener("click", executaCadastro)


// 2 - Criar função de início do processo
// 3 - Criar função para envio de dados para a API
// 4 - Informar tela sobre sucesso de cadastro