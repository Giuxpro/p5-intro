//###Ejercicio 1 de pledu###

// let uno = 5;
// let dos = uno;
// document.write( "uno vale "+ uno +" y"+" dos vale " +dos +" .... ");
// uno = 20;
// document.write("uno vale "+ uno +" y"+" dos vale " +dos);


//###Ejercicio 2 de pledu### edad y nombre

// alert("bienvenidos a mi primera pagina web");

// let name = prompt("Cual es tu nombre?");

// document.write("Bienvenido "+ name);

// let edad = prompt("Cual es tu edad?");
// document.write("tu edad esta oculto en la consola revisalo");
// console.log("tu edad es "+edad);

// alert("Bienvenido "+ name + " tu edad es "+ edad);


//###Ejercicio 3 de pledu### parrafo con valores 

// nombre = "Giux", edad = 31, cumpleaños = "16 de marzo de 1990", ciudad = "Lima";
// ocupacion = "programador", hobbie = "ver peliculas y series";

// console.log("Hola, " + nombre + " hemos visto que tu edad es "+ edad + " ya que naciste el "+
// cumpleaños + " sabemos tambien que te gusta "+ hobbie + " y eres "+ ocupacion + 
// " por lo que hemos pensado en enviarte un obsequio a "+ ciudad + " para cuando llegue tu dia, disfrutalo");


//###Ejercicio 4 de pledu### calcular la longitud de un texto ingrasado

// let dato = prompt("Ingresa un texto con 20 caracteres como maximo");

// console.log(dato.length);


//###Ejercicio 5 de pledu###  calcular edad de años a dias 

// let edad = prompt("Cual es tu edad?");
// alert("Los dias transcurridos segun tu edad son "+ 365 * edad);


//###Ejercicio 6 de pledu###

// let num1, num2, resultado;
// num1 = prompt("ingrasa un valor al num1");
// num2 = prompt("ingresa un valor a num2");
// resultado = parseInt(num1) + parseInt(num2);
// console.log("La suma entre los dos valores es "+ resultado);


//###Ejercicio 7 de pledu###  A: calculo de snacks cantidad y precio

// let edad = 31;
// let edadmax = 80;
// let nutella = parseInt(1);
// let snack = nutella;
// let resultado = (edadmax - edad) * 365;
// document.write("vas a necesitar "+ resultado + " Snacks para que te alcancen hasta los "+ edadmax + " años <br>");
// let precioxUnidad = 1.80;
// let precioTotal = resultado * precioxUnidad;
// document.write("El gasto por el total de snacks es de "+ precioTotal+"$");

//                            B: calculo de gastos de viaje

// let dias = 20
// let presupuestoMax = 2000;
// let comida = 3;
// let gastoxComida = presupuestoMax / (3 * 20)
// alert("podras gastar "+ parseInt(gastoxComida) + " por "+ comida+ " comidas diarias " + "para que te duren los "+ dias + " dias de estadia")


// ### Ejercicio de ES6 ###  ejemplo # 1

// let nombre = `gabriela`;
// let profesion = `programadora`;

// alert(nombre + " es "+ profesion +" (forma tradicional del code)");
// alert( `${nombre}` + ` es ` + `${profesion}` + `(forma template literals)`);


//                           ejemplo # 2
//                    FORMA TRADICIONAL DEL CODIGO
// let precioArticulo = prompt("ingresa el precio del articulo");
// let cantidadArticulo = prompt("ingresa la cantidad de articulos que vas a llevar");
// let operacion = precioArticulo * cantidadArticulo;
// console.log("El total a cancelar es "+ operacion);

//                      USANDO TEMPLATE LITERALS
// let precioArticulo = prompt("ingresa el precio del articulo");
// let cantidadArticulo = prompt("ingresa la cantidad de articulos que vas a llevar");
// console.log(`El total a cancelar es ${precioArticulo * cantidadArticulo}`);


