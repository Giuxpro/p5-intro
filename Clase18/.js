let boton = document.querySelector("button")
let input = document.querySelector("input")
boton.addEventListener("click", cargarCiudad)


function cargarCiudad(){
    if (input.value == "")
    {alert ("No has ingresado ninguna ciudad")}
    else {
    let ciudad = input.value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
    console.log(data)
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = data.name
    let temp = document.querySelector("#temperatura")
    temp.textContent = data.main.temp
    let grados = document.createElement("sup")
    grados.textContent = "°C"
    temp.appendChild(grados)
    let imagen = document.querySelector("img")
    imagen.src= "http://openweathermap.org/img/wn/%22+data.weather[0].icon+%22.png"
    document.querySelector("#descripcion").textContent = data.weather[0].description
    input.value = ""
    }
    )
    .fail(function () {
        alert("Ciudad no encontrada");
        input.value = ""
    })
    }
}