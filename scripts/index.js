// Função para adicionar o nome letra por letra
function adicionarNome(nome, elemento) {
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < nome.length) {
      elemento.textContent += nome[i];
      i++;
    }}, 200);
}

// Selecionar o elemento H1
const h1 = document.querySelector("#titulo");

// Adicionar o nome "Penas Nipute"
adicionarNome("Penas Nipute", h1);