// ###EJERCICIOS CLASE 10  FUNCIONES###                   -1- que devuelve cada ejercicio?
// function test1(x, y) {
//     return y - x
//   }

//   test1(10, 40)  //retorna 30

// function test2(x, y) {
//     return x * 2
//     console.log(x)   //no lo lee por su scope
//     return x / 2     //no lo lee por el scope
//   }

//   test2(10)   // retorna 20

// #### EJERCICIO DE MATEMATICA SIMPLE####                      -2-

//                                                             1-A

// function triplicador(numero){           //preguntar porq no se muestra en consola
//     return  numero * 3

// }

// let num = prompt("ingesa un numero");
// triplicador(num);
// console.log(triplicador(num))

//                                                              1-b

// function multiplicador(x,y){
//     return x * y
// }
// let num = prompt("ingesa un numero");
// let num2 = prompt("ingesa otro numero");
// multiplicador(num , num2);

//                                                              1-C

// function division(x,y){
//     return x / y

// }

// let n = parseInt(prompt("Ingrese un numero"))
// let n2 = parseInt(prompt("Ingrese otro numero"))
// division(n,n2)

//                                                              1-D

// function resto(x,y){
//     return x % y
// }

// let n = parseInt(prompt("Ingrese un numero"))
// let n2 = parseInt(prompt("Ingrese otro numero"))
// resto(n,n2);

//                                                                 1-E

// function operacion(triple,multi,divi,resto){

//     return (((triple * 3) * multi) / divi) % resto
// }
// operacion(5,12,12,3)



// EJERCICIO # 3 DE PLEDU contar de un numero  hasta n               -3-

//En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta.Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a.
//ejemplo Si ponemos 2 y 10 como Argumentos en el llamado, la Función deberá contar de a dos hasta llegar a diez.


// function contarDeA_n(contar_de_a, contar_hasta){
//     let num = contar_de_a; 
//     while(contar_de_a <= contar_hasta){
        
//         console.log(contar_de_a);
//         contar_de_a = num + contar_de_a;
        
//     }
// }

// console.log(contarDeA_n(3,10));


// ####EJERCICIO # 4 DE PLEDU FIZZBUZZ2####                           -4-

// FizzBuzz II: La Venganza De FizzBuzz
// En este ejercicio, deberás escribir una nueva versión de FizzBuzz ( fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String ( palabra1 y palabra2) que reemplace a Fizz y a Buzz.

// ¿Cuáles Eran las Instrucciones de Fizzbuzz?
// En ese ejercicio escribiste un programa que imprimía en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

// Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
// Si era múltiplo de 5, imprimía "Buzz".
// Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz".
// Para completar este ejercicio, deberás:

// Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
// Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
// Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).
// ⚠️Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.

// const FizzBuz22 = (divisor1, divisor2, string1, string2,contadorMaximo) => {
//     //contar de 1 hasta 100
//     for (let i = 1; i <= contadorMaximo; i++) {
//       if (i % divisor1 === 0 && i % divisor2 === 0) {
//         console.log(string1 + string2)
//       } else if (i % divisor1 === 0) {
//         console.log(string1)
//       } else if (i % divisor2 === 0) {
//         console.log(string2)
//       } else {
//         console.log(i)
//       }
//     }
//   }
  



// ######### EJERCICIO # 5 DE PLEDU FACTORIAL                    -5-
// Factorial()
// En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.

// Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.

// 🤓¿Qué Es El Factorial De Un Número?
// La función factorial es una fórmula matemática representada por el signo de exclamación “!”. En la fórmula Factorial se deben multiplicar todos los números enteros y positivos que hay entre el número que aparece en la fórmula y el número 1. Si querés ver ejemplos, hacé click aquí.

// ⚠️Importante: Por convención, el factorial de 0 es igual a 1. Es decir, si el usuario ingresa factorial(0) el resultado deberá ser 1.

// Para hacer el ejercicio, tené en cuenta estas indicaciones:

// Deberás hacer una Variable para almacenar el resultado.
// Deberás usar un Loop hasta alcanzar el número que recibís como input.
// En cada vuelta del Loop deberás actualizar el resultado para no caer en un Loop infinito.
// En caso de que el usuario ingrese 0 o un número negativo, deberás generar acciones compatibles con la definición del Factorial de un Número.
// Usá estos ejemplos para ver si tu código funciona:

// let num = parseInt(prompt("Ingresa un numero para ver el Factorial del mismo"));
// let resultado = 1;
// let i = 1
// function factorial(fact){
//     if(num == 0 || num < 0){
//         while(i  <= num){
//             resultado = resultado * i;
//             console.log(resultado);
//             i++;        
//         }
//     }
//     else{
//         while(i  <= num){
//             resultado = resultado * i;
//             console.log( resultado);
//             i++;        
//         } 
        
//     }   
// }
// factorial(num);
// console.log("El numero Factorial  de " + num + "!" + " es: "  + resultado);


// /// EJEMPLO 2 DE FACTORIAL HECHA EN CLASE

// function factorial(num) {
//     let total = 1
//     while (num > 1) {
//       total = total * num
//       num--
//     }
//     return total
//   }
  
//   resultado = factorial(5)
//   console.log(resultado)

// #### EJERCICIO FIBONACCI####                    -6-

// En este ejercicio deberás escribir una Función que acepte un número n y devuelva el n-ésimo término de la serie de Fibonacci.

// Por ejemplo, si el Parámetro recibe un número 3, el resultado debe ser 1.

// 🤓¿Qué Es La Serie Fibonacci?
// La sucesión de Fibonacci comienza con los números 0 y 1. A partir de estos, «cada término es la suma de los dos anteriores». Por ejemplo, los primeros diez números de la serie son:

// 0,1,1,2,3,5,8,13,21,34
// ⚠️Importante: La relación de recurrencia define a la serie de Fibonacci.

// function fibo (n){
//     let inicio = 0
//     let siguiente = 1
//     let resultado
//     let contador = 0
//     if(n==1){ console.log (0)}
//     else if(n==2){console.log (1)}
//     else{
//         while (contador<n-2){
//         resultado= inicio + siguiente
//         inicio = siguiente
//         siguiente = resultado
//         contador++
//         }
//     }
//  console.log(resultado)
// }

// EJEMPLO 2 DEL EJERCICIO DE FIBONACCI otra forma de hacerlo con arrays
// function fibonacci (num){
//     let fib = [0, 1]
//     for (i=2; i<num; i++){
//         fib[i]= fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// let numero = parseInt(prompt("ingrese numero"))
// console.log(fibonacci(numero).join())