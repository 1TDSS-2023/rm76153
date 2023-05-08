const bodyElement = document.querySelectorAll(".Corpo");
const lista = document.querySelector(".lista");

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
