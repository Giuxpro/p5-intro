// #####Ejercicios nivelatorios para el coding bootcamp.###########

// 1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

// function loopDePares(num){
//     let i = 0
    
//     while(i <= 100){
//         console.log("# " + i)
//         let n = i + num
//         if((i + num) % 2 == 0){
//             console.log("el numero "+ n+ " es par" )

//         }
//         i++
//     }
// }

// loopDePares(2)

// ##########################################################################################################################################

// 2. Loop de impares con palabra
// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

// function loopDeImpares(num, palabra){
//     for(let i = 0; i <= 100; i++){
//         if((i + num) % 2 == 0){
//         console.log("# "+ i)
//         }else{
//             console.log(palabra)
//         }
//     }

// }
// loopDeImpares(2, "impar");

// #############################################################################################################################################

// 3. Sumatoria
// 	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

// Ejemplo: 
// sumattion(3) debe retornar 6 porque hace (1 +2 +3)
// sumattion(8) debe retornar 36

// function sumattion(num){                         #
//     console.log(((num *(num + 1))/2))            #  este ejemplo es una forma directa y simple de realizar este ejercicio solo imprimiendo el resultado final
// }                                                #
// sumattion(8)

// function sumattion(num){
//     let total = 0
//     for(let i = 0; i <= num; i++){
//         total += i;           //es igual que decir total = total + i
//         console.log(`${total}`)
//     }
//     console.log(`la suma de los valeres de 0 a ${num} es: ${total}`)
    
    
// }

// sumattion(3)

// #############################################################################################################################################

// 4. Callback
// Debes crear una Función llamada callback que reciba como Parámetros un número y una Función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

// Teoria de callbacks: click aqui

// Ejemplo:
// callback(5, (num)=>{return num*10}) debe retornar 50
// callback(25, (num)=>{return num/5}) debe retornar 5

// function callback(num, callb){
//     callb();
// }

// function callb(){
//     return num * 10
// }
                                                                             //fata realizar
// callback(5, callb)


// ###############################################################################################################################################

// 5. Nuevo Arreglo

// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo: 
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

// function nuevoArreglo(num){
//     let array = []
//     for(let i = 1;i <= num; i++){
//         array.push(i)
//     }
// console.log(array)
// }
// nuevoArreglo(10);




// 6. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

// function split(string){
//     let newArray = [];
//     for(let i = 0; i < string.length; i++){

//        newArray.push(string[i])
       
//     }
//     console.log(newArray)
   
// }
// split("hello")



// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

// function middleCharacter(string){
//     let length = string.length;
//     let middle = Math.floor(length / 2)
    

//     if(length % 2 == 0){
//         let result = string[middle - 1] + string[middle];
//         console.log(result);
//     }else{
//         let result = string[middle];
//         console.log(result);
//     } 
  
// }
// middleCharacter("cosas")


// 8. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

// function moveZeros(array){
//     let index = 0;
//     for(let i = 0; i < array.length; i++){
//         let num = array[i];
        
//         if(num !== 0){
//           array[index] = num;
//           index++
//         }
//     }
//     for(let i = index; i < array.length;i++){
//         array[i] = 0
//     }
//     console.log(array)
// }

// moveZeros(["false", 1, 0, 1, 2, 0, 1, 3, "a"]);

// 9. Manejando dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

// Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

// function arrayHandler(array1, array2){

//     for(let i = 0; i < array1.length; i++){
      
//       console.log(`yo soy ${array1[i]} y yo soy ${array2[i]}`)
//     }
   
// }

// arrayHandler([1, 2, 3, 4], ["h","o","l","a"]);


// 10. Mezclando arreglos
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

// function mezclarArreglos(array1, array2){
    
//     let arrayPadre=[];
//     let num;
//     let index;
    
//     if(array1.length < array2.length){
//          num = array2.length;
//     }else{
//          num = array1.length;
//     }
    
//     for(let i = 0; i < num; i++){
        
//         arrayPadre.push(array1[i]);
//         arrayPadre.push(array2[i]);      
//         index = arrayPadre.indexOf(undefined);
//         if(index > -1){
//             arrayPadre.splice(index, 1)
//     }
//     }
//     console.log(arrayPadre);
// }
// mezclarArreglos([1, 2, 3, 4], ["h", "p",])  



// 11. Arreglos
// Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
// 2. “pop([1,2,3,4,5])” debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]


// function replicaMetodoJoin(join) {
//        // prueba con el metodo string
//     // num = String(join);
//     // console.log(num);
//     let num1 =[]
//     for(let i = 0; i < join.length; i++){
//        num1 = num1 +" " +join[i] 
//     }
//     console.log(num1);
// }

// replicaMetodoJoin([1, 2, 3, 4, 5]);

// function replicaMetodoPop(pop) {
//     let num1 =[]
//     for(let i = 0; i < pop.length - 1; i++){
//        num1[i] = pop[i] 
//     }
//     console.log(num1);
// }
// replicaMetodoPop([1, 2, 3, 4, 5, 6]);

// function replicaMetodoFilter(filter) {
//     let arr = [];
//     let index = 0;
//     for(let i = 0; i < filter.length; i++){
        
//         if(filter[i] % 2 == 0){
            
//             arr[index] = filter[i];
//             index++;
            
//         }
//     }
//     console.log(arr);
// }

// replicaMetodoFilter([1, 2, 3, 4, 5, 6, 7, 8])

// function  replicaMetodoMap(map) {
//     let array = []
//     for(let i = 0; i < map.length; i++){
//         array[i] = map[i] * 10;    
//     }
//     console.log(array);
// }
// replicaMetodoMap([1, 2, 3, 4, 5]);


// 12. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

// Ejemplo: 
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

// Math.min(...array) investigar sobre esto para resolverlo
function minSum(array) {
    let numA = array[0];
    let numB = array[0];
    let i ;
   for( i = 0; i < array.length; i++){
       
      if(array[i] < numA){
        numA = array[i];
        numA = array.splice(array[i], 1);
        console.log(array);
      }
   }
   
   console.log(array)
   for(i = 0; i < array.length; i++){
      if(array[i] < numB){
         numB = array[i];
      }

   }       
   let resultado = parseInt(numA) + parseInt(numB);
   console.log(resultado);
   console.log(numA);
   console.log(numB);
   
}
minSum([1, 6, 5, 4, 3, 2, 7]);

