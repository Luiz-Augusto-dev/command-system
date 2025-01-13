// Produtos disponíveis
const produtos = ["Cervejas", "Espetinhos", "Refigerantes", "Cachaças"];

// Função para capturar o parâmetro da URL
function getParametroURL(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
}

// Exibir o nome da mesa
const nomeMesa = getParametroURL("mesa");
const tituloMesa = document.getElementById("titulo-mesa");

// Verifica se há um nome de mesa válido e exibe
if (nomeMesa) {
    tituloMesa.textContent += nomeMesa.charAt(0).toUpperCase() + nomeMesa.slice(1);
} else {
    tituloMesa.textContent += "Mesa desconhecida";
}

// Preencher a lista de produtos
const listaProdutos = document.getElementById("lista-produtos");

if (produtos.length > 0) {
    produtos.forEach(produto => {
        const li = document.createElement("li");
        li.textContent = produto;
        listaProdutos.appendChild(li);
    })
} else {
    const li = document.createElement("li");
    li.textContent = "Nenhum produto disponível no momento";
    listaProdutos.appendChild(li);
}