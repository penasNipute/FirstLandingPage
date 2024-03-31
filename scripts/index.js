// Função para adicionar o nome letra por letra
function adicionarNome(nome, elemento) {
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < nome.length) {
      elemento.textContent += nome[i];
      i++;
    }}, 200);
}


const h1 = document.querySelector("#titulo");


adicionarNome("Penas Nipute...", h1);