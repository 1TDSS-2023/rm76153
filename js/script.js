 "use strict";
// // console.log("Olá Mundo");

// // var nr1 = "10";
// // var nr2 = "5";


// //Realizando operações com String

// //ParseInt convertendo string para inteiro
// // console.log(parseInt(nr1)+parseInt(nr2));

// //var nome1 = "Dubas";
// // let nome2 = "Serbato";
// // const nome3 = "Julia";

// // if(nome1 == ""){
// //     let nome1 = "Julia"
// // }

// // console.log(nome1)

// // const btn = document.getElementById("meu-btn");

// // //TRANSFORMANDO O  BOTÃO EM UM BOTÃO RGB

// // btn.addEventListener("click",  function(){
// //     //console.log(this.textContent)
    
// //     let r=0, g=0, b=0;

// //     r = Math.round(Math.random() * 255);
// //     g = Math.round(Math.random() * 255);
// //     b = Math.round(Math.random() * 255);
    
// //     this.setAttribute("style", `background-color: rgb(${r},${g},${b})`)


// // })

// //Declaração de um ARRAY e seus métodos!
// let frutas = ["banana","maçã","laranja","morango","uva","amora","cereja","abacaxi"];


// console.log(frutas)
// console.log(frutas[3])
// console.log(frutas.length);

// //Inserindo um item ao final do array com o método push(nomeItem);
// frutas.push("pêssego")
// console.log(frutas)

// //Inserindo um item no início do array com o método unshift(nomeItem);
// frutas.unshift("kiwi");
// console.log(frutas);


// //removendo um item no final do array com o método pop();
// frutas.pop();
// console.log(frutas);


// //removendo um item no inicio do array com o método shift();
// frutas.shift();
// console.log(frutas);


// //localizando um item no array com o método indexOf(nomeItem)
// //Obs: O método indexOf(nomeItem) retorna o indice do item
// // let indice = frutas.indexOf("uva");
// // console.log(`indice do item buscado ${indice}`)
// // console.log(`Elemento buscado : ${frutas[indice]}`)

// //Removendo um item do array com o metodo splice(indice do item, quantidade de vezes que o indice sera removido)
// //Obs: utilize o metodo indexOf(valorItem) para achar a posição
// // let indice = frutas.indexOf("amora");
// // console.log(`Elemento no índice antes da remoção : ${frutas[indice]}`);
// // frutas.splice(indice,1);
// // console.log(`Elemento no índice após a remoção : ${frutas[indice]}`);


// // console.table(frutas);

// // frutas.forEach((fruta , index)=>{
// //     console.log("Fruta da vez " + index + " : " + fruta);
// // });

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];

// let nr3 = [...nr1,...nr2]
// console.log("novo array " + nr3)

// // nr3.forEach((numero,index)=>{
// //     numero.forEach((nr)=>{
// //         console.log(nr)
// //     })
// // });

// nr3.forEach((numero)=>{
// console.log(numero);
// })

// const imgElements = [...document.getElementsByTagName("img")];

// // const imgElementsArray = [...imgElements]

// imgElements.forEach((img)=>{
//     img.setAttribute("width","10%");
// });

const pElements = [...document.querySelectorAll(".teste")];
console.log(pElements)

pElements.forEach((el)=>{
    console.log(el.tagName)
});