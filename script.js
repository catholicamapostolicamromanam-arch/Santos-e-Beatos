function mostrarImagem() {
    const container = document.getElementById("imagem-container");

    const img = document.createElement("img");
    img.src = "img/tabela_jogos.png"; // caminho da imagem
    img.alt = "Tabela de Jogos";
    img.style.marginTop = "20px";
    img.style.width = "300px";

    container.appendChild(img);
}
function revelar() {
    // Alterar imagem
    document.getElementById("imagemJogador").src = "img/_vinicius_junior.png";

    // Atualizar textos
    document.getElementById("nome").innerText = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("data").innerText = "12/07/2000 (25 anos)";
    document.getElementById("altura").innerText = "1,76 m";
    document.getElementById("posicao").innerText = "Ponta-esquerda / Atacante";
    document.getElementById("rank").innerText = "9,5";

    // Selecionar todos os elementos com placeholder
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}