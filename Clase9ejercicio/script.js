// //#### EJERCICIOS CLASE 9 ####       -1-

// let num = 1
// while(num <=10){
//   console.log(num)
//   num += 2
// }

// let num = 1
// while(num <= 20){
//   if(!(num % 4)){
//     console.log(num)
//   }
//   num++
// }

// let num = 100                        //este codigo ejecuta un buckle infinito
// while(num < 150 ){
//   console.log(num+1)
//   num--
// }

//#### Ejercicio de while loop####    -1- num entre -10 y 19
// let n = -10;
// while(n <= 19){
//     console.log(n)
//     n++
// }
//                                    -2- num pares entre 10 y 40
// let n = 10;
// while(n <= 40){
//     if(n % 2 == 0){
//     console.log(n)
//     }
//     n++
// }
//                                    -3- num impares entre 300 y 333
// let n = 300;
// while(n <= 333){
//     if(n % 2 !== 0){
//         console.log(n)
//     }
//     n++
// }
//                                    -4- num entre 5 y 50 divisibles entre 5 y 3 a la vez

// let n = 5;
// while(n <= 50){
//     if(n % 3 == 0 && n % 5 == 0){
//         console.log(n);
//     }
//     n++
// }
// #### EJERCICIO MI PRIMER BOT ####   -1-
// let bot = 0;
// let mesa = 1;
// while(bot < 20){
//     console.log("bienveni@ a mi cafe! su mesa es la # " + mesa );
//     bot ++;
//     mesa ++;
// }
// console.log("El Total de Clientes que ingresaron es: " + bot );

// #### EJERCICIO PRODUCTO ACUMULADO #### -1-

// let num = 1;
// let producto = 1;
// let num2 = 2;
// while(num < 5){
//     producto = producto * num2;
//     num++
//     num2++
//     console.log(producto);
// }
// console.log("El producto entre 1 y 5 es "+ producto)

// ##### EJERCICIO PAR E IMPAR ####                           -5-

// let numero = parseInt(prompt("Ingresa un numero"));

// while(numero != 0 && numero > 0){
//     if(numero % 2 == 0){
//         console.log("El " + numero + " es un numero es Par");
//         numero = 0
//     }
//     else if(numero % 2 !== 0){

//         console.log("El " + numero + " es un numero Impar");
//         numero = 0
//     }
//     else{
//     let numero = parseInt(prompt("Vuelve a ingresar un numero Positivo"));
//     }
// }

// #### EJERCICIO FIZZBUZZ #####                                  -6-

/// ejercicio de FIZZBUZZ HECHO EN CLASE

// for (let i = 1; i<=100; i++ ) {
//     if (i % 3 === 0 && i%5===0 ) {
//      console.log("FizzBuzz")
//  } else if (i % 3 === 0){
//     console.log("Fizz")
//  } else if (i % 5 === 0 ) {
//     console.log("Buzz")
//  } else {
//     console.log(i)
//     }
// }

// #####EJERCICIO CONTADOR DE POSITIVOS####                          -7-

// Contador De Positivos
// En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrale un mensaje con la cantidad de números positivos que ingresó.

// let num = parseInt(prompt("Ingresa un numero entero"));
// let total = 1;
// while (num >= 0) {
//   if (num < 0) {
//     console.log("lo sentimos el numero es negativo");
//   }
//   else {
//     console.log("el numero ingresado es: " + num);
//     total++;
//     num = 0;
//     num = parseInt(prompt("ingrese otro valor entero"));
//   }
// }
// console.log("Numero negativo de cierre : " + num);
// let tot = total;
// tot -= 1
// console.log("Numeros positivos ingresados : " + tot);
// console.log("Numeros Totales ingresados : " + total);

// #### EJERCICIO BURRO- MATICO ####                                    -8-

// En este ejercicio deberás crear un programa que ayude al Burro a preguntar al usuario "¿Ya merito llegamos?"

// Si el usuario responde “Si”, el programa deberá darle un mensaje de bienvenida a Muy Muy Lejano. Sino, deberá mostrarle, nuevamente, el mensaje del Burro.

// ⚠️Importante: El programa deberá identificar como verdadero tanto “Si”, como “SI”, como “si”.

// Investigá como funciona el método .toLowerCase()

// let mensaje = prompt("Ya merito llegamos?");
//  mensaje = mensaje.toLowerCase();
//     while(mensaje || mensaje === ""){
//         if(mensaje == "si"){
//             alert("Bienvenid@ a muy muy lejano")
//             mensaje = false;
//         }
//         else if(mensaje === ""){
//             mensaje = prompt("Ya merito llegamossssss?")
//             mensaje = mensaje.toLowerCase();
//         }
//         else{
//             mensaje = prompt("Ya merito llegamossssss?")
//             mensaje = mensaje.toLowerCase();
//         }

//     }

// ####EJERCICIO CUAL ES EL MAYOR ####                                       -9-
// ¿Cuál Es El Mayor?
// En este ejercicio, deberás usar el método prompt para que el usuario ingrese 2 números distintos. Tu programa los evaluará y le responderá cuál es el mayor.

// ⚠️Importante: Si los números son iguales, deberá mostrar un mensaje para que ingrese un número distinto.

// El programa finalizará cuando alguno de los 2 números sea "0".

// let num1 = parseInt(prompt("Ingrese el numero de A"));
// let num2 = parseInt(prompt("Ingrese el numero de B"));
// while (num1 != 0 && num2 != 0) {
//   if (num1 == num2) {
//     num2 = parseInt(prompt("Ingrese otro numero en B distinto al anterior"));
//   } 
//   else if (num1 > num2) {
//     console.log("El numero de A es: " + num1 + " y es mayor que el valor de B: " + num2);
//     num1 = 0;
//   } 
//   else if (num2 > num1) {
//     console.log( "El numero de A es: " + num1 + " y es menor que el valor de B: " + num2);
//     num2 = 0;
//   }
// }

// ####EJERCICIO PIEDRA PAPEL TIJERA ####                                            -10-

// Piedra, Papel O Tijera.
// En este ejercicio deberás escribir un código que:

// Le pida al usuario que ingrese uno de estos valores: "Piedra", "Papel" o "Tijera".
// Elija un valor al azar usando Math.random ().
// Le diga al usuario quién ganó.
// Si nunca jugaste al Piedra, Papel o Tijera, conocé sus reglas:

// La tijera corta al papel.
// El papel envuelve a la piedra.
// La piedra rompe la tijera.
// Le pregunte al usuario si le gustaría volver a jugar.

let valor = prompt("Ingresa Piedra, Papel o Tijeras para comenzar el juego");
valor = valor.toLowerCase();
    while(valor == true){
        
    }
