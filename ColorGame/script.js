
let colors = generateRandomColors(6)  //["rgb(255, 254, 51)", "rgb(255, 0, 0)", "rgb(255, 255, 255)", "rgb(52, 51, 255)", "rgb(23, 202, 4)", "rgb(208, 3, 204)"]; //(antiguo rgb hardcodeado antes de hacer que fuera random)
var pickedColor = pickColor(); //colors[4];
contenedor = document.querySelectorAll(".square");
colorDisplay = document.querySelector("#colorDisplay");
divmessage = document.querySelector("#message");
botonReset = document.querySelector("#reset");
h1 = document.querySelector("h1");
botonss = document.querySelectorAll(".modo");

var numContenedores = 6

init();

function init(){
    setUpBotones();
    setUpContenedor(); 
    
}

//funcion que representa el evento y la condicion del juego
function setUpContenedor(){
for(var i = 0; i < contenedor.length; i++){
  contenedor[i].style.backgroundColor = colors[i]
  contenedor[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
        if(pickedColor === clickedColor ){
            divmessage.textContent = "Correcto!";
            h1.style.backgroundColor = clickedColor;
            botonReset.textContent = "Play Again!"
            changeColor(clickedColor);
            
        }
        else{
            this.style.backgroundColor = "#232323";
            divmessage.textContent = "Intentalo Nuevamente";
        }
    })
}
}
// funcion que cambiara todos los recuadros al mismo color cuado y donde sea llamada(en este caso cuando gane el juego)
function changeColor(color){
    for(var i = 0; i < colors.length;i++){    //cambiar por contenedor.length
        contenedor[i].style.backgroundColor = color;
    }

}
//funcion que crea un numero al azar para pasarlo al arreglo de colores
function pickColor(){
    pickC = Math.round(Math.random() * (colors.length-1));
    console.log(pickC)
    return colors[pickC];
    
}

colorDisplay.textContent = pickedColor;

// funcion que genera un color al azar de 0 a 256
function randomColor(){
    
    red = Math.round(Math.random() * 257) ;
    green = Math.round(Math.random() * 257) ;
    blue = Math.round(Math.random() * 257) ;    
    return "rgb("+red+", "+green+", "+blue+")";
    
}
// funcion que crea diferentes colores al azar el cual es llamado en el array colors con un argumento n. 
function generateRandomColors(num){
    var colorRandom = []
    for(var i = 0; i < num; i++){
        colorRandom[i] = randomColor();
    }
    return colorRandom
}

// Funcion que resetea el juego por causa de un evento 
function reset(){
    colors = generateRandomColors(numContenedores)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    botonReset.textContent = "Nuevos Colores";
    divmessage.textContent = " ";
    h1.style.background = "#232323";
    for(var i = 0; i < contenedor.length; i++){
        if(colors[i]){
            contenedor[i].style.backgroundColor = colors[i]
            contenedor[i].style.display ="block"   
        }
        else{
            contenedor[i].style.display ="none"
        }
        
    }
    
}
botonReset.addEventListener("click", function(){
   reset()
})

//Funcion y evento para los botones easy y hard
function setUpBotones(){
for(var i = 0; i < botonss.length;i++){
    botonss[i].addEventListener("click", function(){
        botonss[0].classList.remove("selected");
        botonss[1].classList.remove("selected");
        this.classList.add("selected")
        if(this.textContent === "Easy"){
            numContenedores = 3;
            botonss[0].style.backgroundColor ="#8FCE00"
            botonss[1].style.backgroundColor ="#232323"
        }
        else{
            numContenedores = 6;
            botonss[0].style.backgroundColor ="#232323"
            botonss[1].style.backgroundColor ="#8FCE00"
        }
        reset()

    })
}        
}
