
//######  EJERCICIO 4 DE PLEDU#####                                -4-

// Para resolver estos ejercicios repasemos conceptos que nos van a ayudar a resolverlo:

// let greeting = "Hello and welcome!"
// greeting[0] // "H"
// let words = greeting.split(' ')
// let actoresVocales = []

// let actoresPrincipales = ['Tom Hanks', Johnny Depp', 'Elizabeth Taylor', Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']
// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
// let peliculas = []

// let actoresPrincipalesPorPelicula = {
//     "Titanic": "Leonardo DiCaprio",
//     "El Padrino": "Al Pacino",
//     "Matrix": "Keanu Reeves",
//     "Iron Man": "Robert Downey Jr",
//     "Soy leyenda": "Will Smith",
//     "Bastardos sin gloria": "Brad Pitt"
// }
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
// Creá un Objeto vacíó llamado peliculaPorActor.
// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// Adaptá tu código para que pueda haber más de una película por cada actor.

let peliculas = []
let actoresPrincipales = []
//punto 4
let peliculaPorActor = {}
let actoresPrincipalesPorPelicula = {
  Titanic: 'Leonardo DiCaprio',
  'El Padrino': 'Al Pacino',
  Matrix: 'Keanu Reeves',
  'Iron Man': 'Robert Downey Jr',
  'Soy leyenda': 'Will Smith',
  'Bastardos sin gloria': 'Brad Pitt',
}
for (const [key, value] of Object.entries(actoresPrincipalesPorPelicula)) {
  //punto 2
  actoresPrincipales.push(value)
  //punto 3
  peliculas.push(key)
}
//punto 5
for (let i = 0; i < actoresPrincipales.length; i++) {
  peliculaPorActor[actoresPrincipales[i]] = peliculas[i]
}

console.log(peliculaPorActor)
