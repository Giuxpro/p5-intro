var inputBox = document.querySelector(".input");
let buttonAgree = document.querySelector(".boton-agregar");
let containerBox = document.querySelector(".container");

class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){
        
        let inputItem = document.createElement("input");
            inputItem.setAttribute("type", "text");
            inputItem.setAttribute("disabled",true);
            inputItem.value = nuevaTarea;
            inputItem.classList.add("item-input");

        let divBox = document.createElement("div");
            divBox.classList.add("item");

        let botonEditar = document.createElement("button");
            botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            botonEditar.classList.add("boton-editar");


        let botonRemover = document.createElement("button");
            botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
            botonRemover.classList.add("boton-remover");
            
            
        divBox.appendChild(inputItem);
        divBox.appendChild(botonEditar);
        divBox.appendChild(botonRemover);
        containerBox.appendChild(divBox);
        
        
        botonEditar.addEventListener("click", function(){
            if(inputItem.disabled == true ){
                inputItem.disabled = false;
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
            else{
                inputItem.disabled = true;
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            }
        })
        botonRemover.addEventListener("click", function(){
            containerBox.removeChild(divBox);
        })        
    }    
}

function chequearInput(){
    
    if (inputBox.value) {
        new Item(inputBox.value)
        inputBox.value = null;
    } else {
        console.log("Escribe algo")
    }

}

buttonAgree.addEventListener("click",chequearInput);

