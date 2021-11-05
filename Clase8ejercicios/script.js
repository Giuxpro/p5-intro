//ejemplo de el valor distinto que !   el cual vimos en clase
  
// let input 

// if (!(input = prompt("escribi tu nombre"))) {
// alert("no escribiste tu nombre")
// } else  {alert("gracias por ingresar tu username")
//  }

// #### EJERCICIOS CLASE 8 IF/ELSE ####
//               Ejercicio # 1 que devuelve cada una de estas expresiones?

// // expresion 1
// var x=10
// var y ="a"
// let result = y==="b" || x >= 10
// console.log(result);

// // expresion 2
// var x=3
// var y=8
// let result1 = !(x == "3" || x === y) && !(y !== 8 && x <= y)
// console.log(result1);

// // expresion 3
// var str = ""
// var msj = "jaja!"
// var esGracioso = "false"
// let result2 = !((str || msj) && esGracioso)
// console.log(result2);


//### EJERCICIO 2 DE PLEDU ###  EJERCICIO DE COMPARACION
//                                      #1

// let name1 = "Ana";
// let name2 = "Ana";
// console.log(`${name1 == name2}`)    /*ya con esto me basta para saber en la consola su valor 
//                                       boleano pero si quiero agregar un if seria asi*/                                
// if (name1 === name2){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

//                                      #2
// let name1 = "Ana";
// let name2 = "ana";
// console.log(`${name1 == name2}`)

// if (name1 === name2){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

//                                      #3
// let name1 = "2";
// let name2 = 2;
// console.log(`${name1 === name2}`)

// if (name1 === name2){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

//                                      #4
// let name1 = "2";
// let name2 = 2;
// console.log(`${name1 == name2}`)

// if (name1 == name2){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

// //  ### EJERCICIOS 4 DE PLEDU###  ejercicio # 4 Par o  Impar
// let num = parseInt(prompt("Ingrese un numero"));

// if(num % 2  == 0){
//     alert("El numero ingresado es par");
// }
// else{
//     alert("El numero es impar");
// }

// ### EJERCICIO DE 5 PLEDU ### EJERCICIO DE JUBILACION

// let edad = prompt("Ingrese su edad");
// let genero = prompt("Ingresa tu genero");

// if(edad >= 60 && genero == "mujer" || edad >= 65 && genero == "hombre"){
//     alert("Felicidades ya puedes jubilarte")
// }
// else{
//     alert("Todavia no puedes jubilarte");
// }

// ### EJERCICIO DE 6 PLEDU ### EJERCICIO AGREGAR CAMINOS

// let edad=prompt("Ingrese su edad.")

// if(edad <= 0) {
//     alert("Error, su edad no es valida.")
// } 
// else if(edad == 21){
//     alert("Bienvenido y Felicidades por llegar a la mayoria de edad.")
//     if(edad % 2 == 0){
//         alert("tu edad es par");
//     }
//     else{
//         alert("tu edad es Impart");
//     }
// }
// else if( edad > 21){
//     alert("Bienvenido");
//     if(edad % 2 == 0){
//         alert("tu edad es par");
//     }
//     else{
//         alert("tu edad es Impart");
//     }
// } 
// else{
// alert("Lo sentimos no puedes ingresar.");
// }

// let num = parseInt(prompt("Ingrese el numero secreto"))

//     if (num === 4){
//         alert("Felicidades diste con el Numero secreto")
//     }
//     else if( num < 0 ){
//         alert("Los numero deben ser positivos")
//     }   
//     else if( num < 4 && num >= 0 ){
//         alert("estas cerca sumale algunos puntos mas")
//     }
//     else if( num > 4 && num <= 10){
//         alert("estas cerca restale algunos numero")
//     }
//     else{
//         alert("Estas lejos del numero secreto ");
//     }