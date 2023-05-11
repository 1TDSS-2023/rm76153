//ARROW FUNCTION
let tmp = "";
const mudaCor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  const elCabecalho = document.querySelector(".cabecalho");
  elCabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;
  tmp = setTimeout(mudaCor, 1000);
};

mudaCor();

// const chamar = () => {
//   setTimeout(banner1, 2000);
//   setTimeout(banner2, 2000);
// };

// const banner1 = () => {
//   const elBanner1 = document.querySelector(".img1");
//   if ((elBanner1.src = "./img/banner-lateral-1.png")) {
//     elBanner1.src = "./img/banner-lateral-3.png";
//   } else {
//     elBanner1.src = "./img/banner-lateral-1.png";
//   }
//   chamar();
// };
// const banner2 = () => {
//   const elBanner2 = document.querySelector(".img2");
//   if ((elBanner1.src = "./img/banner-lateral-1.png")) {
//     elBanner2.src = "./img/banner-lateral-3.png";
//   } else {
//     elBanner2.src = "./img/banner-lateral-1.png";
//   }
// };

// chamar();

meubotao.addEventListener("click", function (event) {
  const luz = document.querySelector(".img3");

  if (luz.src.includes("off")) {
    luz.src = "./Img/pic_bulbon.gif";
  } else {
    luz.src = "./Img/pic_bulboff.gif";
  }
});
