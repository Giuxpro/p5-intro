//#### EJERCICIOS DE PLEDU  #####                      -1-

// ¿Qué Devuelve Este Código?
// En este ejercicio deberás descubrir qué devuelve este código sin probarlo en la consola:

// let numbers = [0,1,2,3,4,5,6,7,8,9,10]
// let colores=["Rojo", "Azul", "Verde", "Amarillo"]

// numbers.forEach(function(color){
//   if(color % 3 === 0){
//     console.log(color)
//   }
// })

// #### EJERCICIO LISTA DE SUPER 3#####                  -2-

// Lista De Súper III
// Volvé al ejercicio anterior y seguí estos pasos:

// Usá un for Loop y mostrá cada ítem de listaDeSuper en la consola.
// Refactoreá tu código de manera tal que el for loop viva dentro de una Función que se llame logItems. La Función deberá tomar un Arreglo como Parámetro e imprimir sus elementos en la consola.
// Invocá logItems 2 veces, pasando listaDeSuper la primera vez y otro Arreglo la segunda vez (deberás crear uno nuevo).
// Refactoreá el código de logItems para que use .forEach() en vez de un for loop.

let listaSuper1 = ["Harina","Huevos","Agua","Gaseosa"];
let listaSuper2 = ["Pan","Azucar","Galletas"];

function logItems(compras1){
    for(i = 0; i < listaSuper1.length; i++){
        console.log(listaSuper1[i]);
    }
}
logItems(listaSuper1[i])



