//Variables
let boton = document.querySelector("button");
let input = document.querySelector("input");
//let img = document.querySelector("img");
// let ciudad = input.value;

//event listeners

boton.addEventListener("click", cargarCiudad)

// functions
function cargarCiudad(){
    if(input.value == ""){

        alert("Debes ingresar el nombre de una ciudad");
        
    }
    else{
        let ciudad = input.value;

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q= "+ciudad+" &appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data){
        console.log(data);
     
        document.querySelector(".container").style.visibility ="visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").innerHTML = data.main.temp + '<sup>°C</sup>';
        document.querySelector("#wicon").setAttribute("src","http://openweathermap.org/img/wn/"+ data.weather[0].icon+".png");
        document.querySelector("#descripcion").textContent = data.weather[0].descripcion;
        })
        .fail(function () {
            alert("Ciudad no encontrada");
        })
    }
   
}


