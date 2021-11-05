let boton = $("button")
let p = $("h2")

boton.click(() =>{
    $.getJSON("https://api.chucknorris.io/jokes/random", (data) =>{
        p[0].textContent = data.value
    })
})