const bodyElement = document.querySelectorAll(".Corpo");
const lista = document.querySelector(".lista");
const imagem = document.querySelector("#imagem");
const lobos = ["./img/lobo1.jpg", "./img/lobo2.jpg", "./img/lobo3.jpg"];
const pElement = document.querySelector("#pMensagem");
const qualquerElement = document.querySelectorAll("*");

cor.addEventListener("click", function () {
  let r = 0,
    g = 0,
    b = 0;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  bodyElement[0].style.backgroundColor = `rgb(${r},${g},${b})`;
});

enviar.addEventListener("click", function (event) {
  event.preventDefault();
  const valor = document.querySelector("#inputText").value;
  const newItem = document.createElement("li");
  newItem.textContent = valor;
  lista.appendChild(newItem);
});

mudar.addEventListener("click", function () {
  let lobo = Math.round(Math.random() * 2);
  imagem.src = lobos[lobo];
});

mensagem.addEventListener("click", function () {
  pElement.textContent = "Ola professor!";
});

sumir.addEventListener("click", function () {
  let qualquer = Math.round(Math.random() * qualquerElement.length);
  qualquerElement[qualquer].style.display = "none";
});
