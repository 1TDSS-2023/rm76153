"use strict";
// console.log("Olá Mundo");

// var nr1 = "10";
// var nr2 = "5";


//Realizando operações com String

//ParseInt convertendo string para inteiro
// console.log(parseInt(nr1)+parseInt(nr2));

//var nome1 = "Dubas";
// let nome2 = "Serbato";
// const nome3 = "Julia";

// if(nome1 == ""){
//     let nome1 = "Julia"
// }

// console.log(nome1)

const btn = document.getElementById("meu-btn");

//TRANSFORMANDO O  BOTÃO EM UM BOTÃO RGB

btn.addEventListener("click",  function(){
    //console.log(this.textContent)
    
    let r=0, g=0, b=0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    this.setAttribute("style", `background-color: rgb(${r},${g},${b})`)


})

