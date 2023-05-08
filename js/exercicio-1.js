const bodyElement = document.querySelectorAll(".Corpo");

cor.addEventListener("click", function () {
  let r = 0,
    g = 0,
    b = 0;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  bodyElement[0].style.backgroundColor = `rgb(${r},${g},${b})`;
});
