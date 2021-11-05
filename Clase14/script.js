let boton = document.querySelector("button")
let boddy = document.querySelector("body")
let parrafo = document.createElement("p")

function addP(){
    boddy.appendChild(parrafo)
    parrafo.textContent = "BEEP"
    boddy.classList.toggle("color")
}

boton.addEventListener("click", addP)



