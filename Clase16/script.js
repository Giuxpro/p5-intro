class Libro {
    constructor(Autor, Editorial, Genero){
        this.Autor = Autor
        this.Editorial = Editorial
        this.Genero = Genero
    }
    mostraLibro(){
        console.log("Uno de los mejores libros de "+ this.Genero +" su nombre es "+this.Autor+" y su editorial es "+ this.Editorial)
    }

}


let librito = new Libro("Graceling", "Desconocido", "Fantasia")
let libritoA = new Libro("Cronicas del mago negro", "Desconocido", "Fantasia")
let libritoB = new Libro("Battle", "Desconocido", "Fantasia")