const h1 = document.querySelector("h1")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btnBurger = document.querySelector(".btnBurger")
const btnAdicionar = document.querySelector(".btnAdicionar")
const modal1 = document.querySelector(".modal")
const modal2 = document.querySelector(".container-email")
const overlay = document.querySelector(".overlay")
const menuBurger = document.querySelector(".menuBurger ul")

const exclamacao = Array.from(document.querySelectorAll(".exclamacao"))


const fabricantesImpressoras = document.querySelector(".fabricantesImpressoras")
const fabricantesResinas = document.querySelector(".fabricantesResinas")
const fabricantesFilamentos = document.querySelector(".fabricantesFilamentos")


function menuOne (){
 //h1.textContent = "Fabricantes de Impressoras 3D"
 fabricantesImpressoras.classList.remove("hidden")
 fabricantesResinas.classList.add("hidden")
 fabricantesFilamentos.classList.add("hidden")
 btn1.classList.add("active")
 btn2.classList.remove("active")
 btn3.classList.remove("active")
}
function menuTwo (){
 //h1.textContent = "Fabricantes de Resinas 3D"
 fabricantesImpressoras.classList.add("hidden")
 fabricantesResinas.classList.remove("hidden")
 fabricantesFilamentos.classList.add("hidden")
 btn1.classList.remove("active")
 btn2.classList.add("active")
 btn3.classList.remove("active")

}
function menuTree (){
  //h1.textContent = "Fabricantes de Filamentos"
  fabricantesImpressoras.classList.add("hidden")
  fabricantesResinas.classList.add("hidden")
  fabricantesFilamentos.classList.remove("hidden")
  btn1.classList.remove("active")
  btn2.classList.remove("active")
  btn3.classList.add("active")
 }



function modalLink (){
  modal1.classList.toggle("hidden")
  overlay.classList.toggle("hidden")
}
function modalEmail (){
  modal2.classList.toggle("hidden")
  overlay.classList.toggle("hidden")
}
function modalMenu (){
  menuBurger.classList.toggle("menuBurgerActive")
}



btn1.addEventListener("click", menuOne)
btn2.addEventListener("click", menuTwo)
btn3.addEventListener("click", menuTree)
btnAdicionar.addEventListener("click", modalEmail)
btnBurger.addEventListener("click", modalMenu)


for(let i = 0; exclamacao.length; i++){
  exclamacao[i].addEventListener("click", modalLink)
}

